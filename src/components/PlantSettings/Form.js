/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { Component } from 'react'
import {connect} from "react-redux";
import * as MdIcons from "react-icons/md";
import { confirmAlert } from 'react-confirm-alert'; 
// import './style.css';
import Sortable from 'sortablejs'
import {getAllSubAttribute,handleAttributeDragDrop,handleAttributeDragSort,handleAttributeDelete,
    handleZoneInputAction,handleAddZone, showSubSubAttribute, handleSubAttributeUpdate, handleZoneInputAction2} from '../../actions/attributeAction'

    class Form extends Component {
            constructor(props){
                super()
                    this.state={
                        errorObj:{
                            formSku:0,
                            formName:0
                        },
                        sortId: 0,
                        activeId: 0,
                        isEditing:false,
                        name:'',
                        subName:'',
                        subName2:'',
                        selectedID:'',
                        btnLabelAdd:'Add New Form ',
                        btnLabelUpdate: 'Update Form ',
                        btnLabelCancel:'Cancel',
                        deleteon:false,
                        active:[],
                        inactive:[]
                    }
                
            }



            getCatgoryData = ()=>{
                let data = {};
                let active= this.props.zoneCategoryList.filter(data=>data.status ==1)
               let inactive=this.props.zoneCategoryList.filter(data=>data.status ==0)
                this.setState({active:active,inactive:inactive})
            }
            onDragOver = (ev)=>{
                ev.preventDefault();
            }
            startIDData  =(e)=>{
                this.setState({selectedID:e.item.id})
            }
            onAddData = (evt)=>{
                console.log(evt)
                evt.preventDefault()
            
            //     const referenceNode = (evt.nextSibling && evt.nextSibling.parentNode !== null) ? evt.nextSibling : null; 
            //  evt.from.insertBefore(evt.item, null); 
            
            }
            onMoveData = (evt,ui)=>{
            
               if(evt.from.id == evt.to.id){
                   if(evt.willInsertAfter ==true)
                this.props.handleAttributeDragSort(evt.dragged.id,evt.related.id,"down")
                else  this.props.handleAttributeDragSort(evt.dragged.id,evt.related.id,"up")
            
               }else{
                   if(evt.from.id =="categoryActive"){
                      let task= this.state.active.filter(data=>data.id ==evt.dragged.id)
                      //console.log(task)
                      if(task.length > 0){
                        this.props.handleAttributeDragDrop(task[0]).then(data=>{
                        //     this.props.getAllPlantCategories().then(()=>{
                        //     confirmAlert({
                        //     title: 'Action',
                        //     message: 'Successfully Moved from Active to InActive',
                        //     buttons: [
                        //         {
                        //         label: 'Ok'
                        //         }
                        //     ]
                        // });
                        // this.getCatgoryData()
                  
                        // })
                    })
            
                    }
            
                   }else if(evt.from.id =="categoryInactive"){
                       //console.log(evt.dragged.id,evt.related.id)
                    let task= this.state.inactive.filter(data=>data.id ==evt.dragged.id)
                    //console.log(task)
                    if(task.length > 0){
                        this.props.handleAttributeDragDrop(task[0]).then(data=>{
                    //         this.props.getAllPlantCategories().then(()=>{
                    //             this.props.getAllPlantCategories().then(()=>{
                                    // confirmAlert({
                                    //     title: 'Action',
                                    //     message: 'Successfully Moved from InActive to Active',
                                    //     buttons: [
                                    //         {
                                    //         label: 'Ok'
                                    //         }
                                    //     ]
                                    // });
                    //                 this.getCatgoryData()
                    //             })
                    //             // this.getCatgoryData() 
                    //         })
                    //     })
            
                    // }
                    
                   })
                }
            
               }
            }
            }
        componentDidMount(){
            // this.props.getAllSubAttribute(1)
            var elData = document.getElementById('categoryActive');
            var elData1 = document.getElementById('categoryInactive');
            this.props.getAllSubAttribute(1).then(()=>{
                // alert("ji")
                this.getCatgoryData()
            })
            // this.props.getAllSubAttribute(14)
            new Sortable(elData, {
                group: 'shared',
                animation: 150,
                onAdd:this.onAddData.bind(this),
                onStart: this.startIDData.bind(this),
                onMove:this.onMoveData.bind(this)
            })
            new Sortable(elData1, {
                group: 'shared',
                animation: 150,
                onAdd:this.onAddData.bind(this),
                onStart: this.startIDData.bind(this),
                onMove:this.onMoveData.bind(this),
             
        
                // onFilter:function(){
                //     alert("hi")
                // }
            })
        }


        onDelete =(ev)=>{
            let id= this.state.selectedID
            confirmAlert({
                title: 'Delete Location Type',
                message: 'Are you sure want to delete the Location Type?',
                buttons: [
                  {
                    label: 'Yes',
                    onClick: () => {this.onDeleteConfirm(id)}
                  },
                  {
                    label: 'No'
                  }
                ]
              });
        }


        onDeleteConfirm=(id)=>{
            let result= this.props.handleAttributeDelete(id)
            this.setState({deleteon:true})
            result.then(res=>{
                this.props.getAllSubAttribute(1).then(()=>{
                    // alert("ji")
                    this.getCatgoryData()
                })
                this.setState({deleteon:false})
                // confirmAlert({
                //     title: 'Delete Successfully',
                //     message: 'Location Type ',
                //     buttons: [
                //       {
                //         label: 'Ok'
                //       }
                //     ]
                //   });
            })
        }


        handleZoneInputAction = (e)=>{
           // debugger;
            console.log("inputAction", e.target.name,e.target.value)
            this.setState({
                subName:e.target.value
            })


            let errorObj=this.state.errorObj
            if(e.target.name === "formSku"){
            errorObj.formSku=0
            this.setState({errorObj})}

            this.props.handleZoneInputAction("formSku",e.target.value)
        }

        handleZoneInputAction2 = (e)=>{
            //debugger;
            console.log("inputAction", e.target.name,e.target.value)

            let errorObj=this.state.errorObj
            if(e.target.name === "formName"){
            errorObj.formName=0
            this.setState({errorObj})}


            this.setState({
                name:e.target.value,
                
                //subName:e.target.value
            })



            this.props.handleZoneInputAction2("formName",e.target.value)
        }

        handleAddCategory = (e)=>{
       
            let zoneObj={}
            zoneObj.attribute_id=1
            // zoneObj.value = this.props.formName     
            zoneObj.value = this.state.name    
            zoneObj["childrens"] =[
                {'children_name':'SKU value',
                'children_value':this.state.subName
                // 'children_value':this.props.formSku
            }
            ]
            zoneObj.status=1


        if(this.validate()){
            let result = this.props.handleAddZone(zoneObj)
            result.then(res=>{
                this.props.getAllSubAttribute(1).then(()=>{
                    // alert("ji")
                    this.getCatgoryData()
                })
            })
            // confirmAlert({
            //     title: 'Added Successfully',
            //     message: 'Form ',
            //     buttons: [
            //       {
            //         label: 'Ok'
            //       }
            //     ]
            // });
            this.setState({
                name: "",
                subName:"",
                isEditing:false,
                selectedID:'',
            })
        } 




        }
        validate = ()=>{
            let errorObj = this.state.errorObj
            if(this.state.subName.length === 0){
                errorObj.formSku=1
                this.setState({errorObj})
                return false
            }

            if(this.state.name.length === 0){
                errorObj.formName=1
                this.setState({errorObj})
                return false
            }


            return true
            
        }


        handleEditClick2 =(t)=> {
            console.log("abcdefg", t  )
            // debugger;  
         this.setState({
             name: t.value,
             subName:t.sub_attributeschild[0].value,
             isEditing:true,
             selectedID:t.id,
         })
        //  let formValue={}
        //  formValue={...this.state.name, ...this.state.subName}

         this.props.handleZoneInputAction("formSku",this.state.subName)
         this.props.handleZoneInputAction2("formName",this.state.name)
         this.props.showSubSubAttribute(t.id)
         //console.log("ttttttt", t,  )
       }


       handleAddCategoryUpdate=(e)=>{
        // debugger;
console.log("showSpeciSubA", this.props.showSpeciSubA)
         // this.props.handleSubAttributeUpdate(e.target.id)
         let valueName = this.state.name
         let skuName = this.state.subName
         let updateID = parseInt(this.props.showSpeciSubA.id)
         let updateObject={}
         updateObject.value=valueName
        //  updateObject.attribute_id=1
         updateObject.status=1

         updateObject["childrens"] =[
            {
            children_value:skuName,
            children_id:this.props.showSpeciSubA.sub_attributeschild[0].id,
            children_name:'SKU value'
        }
        ]
            
    //     if(this.validate()){
    //   let res=   this.props.handleSubAttributeUpdate(updateID, updateObject)
    //          res.then(res=>{
    //              this.props.getAllSubAttribute(1)
    //          })
    //          alert('Added Successfully Done');
    //         }
          

    //          this.setState({
    //              isEditing:false,
    //              name:"",
    //              subName:""
    //          })



                if(this.validate()){
                    let res=   this.props.handleSubAttributeUpdate(updateID, updateObject)
                        res.then(res=>{
                            this.props.getAllSubAttribute(1).then(()=>{
                                // alert("ji")
                                this.getCatgoryData()
                            })
                        })
                        if (this.state.isEditing) {
                            // confirmAlert({
                            //     title: 'Updated Successfully',
                            //     message: 'Form ',
                            //     buttons: [
                            //     {
                            //         label: 'Ok'
                            //     }
                            //     ]
                            // });
                        }
                        this.setState({
                            isEditing:false,
                            name:"",
                            subName:""
                        })
                }
     }


     handleClear=()=>{
        let errorObj = this.state.errorObj
        errorObj.formName=0
        errorObj.formSku=0
        this.setState({name: "", subName:"", isEditing:false, selectedID:'', errorObj})
    }








        render() {

        
    return (
        <>
            <div className="bg-white">
                            <h4 className="p-15 mb-0"> Form</h4>
                            <hr className="m-0"/>
                            <div className="ContentSection p-15">
                            <div className="row">
                                    <div className="col-md-6">
                                        <p>Form Name</p>
                                        <div>
                                            <input type="text"
                                            className={this.state.isEditing===false ? "form-control" : "formControl2 abcd" }
                                             name="formName"
                                              //value={this.props.formName}   
                                            value={this.state.name}
                                             placeholder="Name" onChange={this.handleZoneInputAction2}/>

                                            {this.state.errorObj.formName!==0?<span style={{fontSize:"small",color:"red"}}>Enter Name</span>:""}
                                            
                                        </div>

                                        <div className="d-flex justify-content-md-end mt-2">
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <p>SKU Value<span style={{color:"red"}}>*</span></p>
                                        <div>
                                            <input type="text" 
                                           className={this.state.isEditing===false ? "form-control" : "formControl2 abcd" }
                                             placeholder="Value"
                                             name="formSku" 
                                             value={this.state.subName}
                                              //value={this.props.formSku}   
                                              onChange={this.handleZoneInputAction}/>
                                            {this.state.errorObj.formSku!==0?<span style={{fontSize:"small",color:"red"}}>Enter SKU Value</span>:""}
                                        </div>




                                        {/* <div className="d-flex justify-content-md-end mt-2" onClick={this.handleAddCategory}>
                                            <a href="javascript:" className="d-flex align-items-center">
                                                <i className="fa fa-plus-circle fa-2x mr-2"></i> Add New Form
                                            </a>
                                        </div> */}


                                        {/* {this.state.isEditing ? (
                                                <div className="d-flex justify-content-md-end mt-2" style={{paddingTop:"10px"}} onClick={this.handleAddCategoryUpdate}>
                                                    <div >
                                                        <a href="javascript:" className="d-flex align-items-center">
                                                            <i className="fa fa-plus-circle fa-2x mr-2"></i> Update Form
                                                        </a>
                                                    </div>

                                                        <div className="d-flex justify-content-md-end mt-2"  onClick={()=>{this.setState({isEditing:false})}}>
                                                        <a className="d-flex align-items-center" style={{marginLeft:"2.5em", marginTop:"-6px"}}>Cancel </a>
                                                           
                                                        </div>

                                                </div>


                                                    ):
                                                    (
                                                    <div className="d-flex justify-content-md-end mt-2"  onClick={this.handleAddCategory}>
                                                    <a href="javascript:" className="d-flex align-items-center">
                                                    <i className="fa fa-plus-circle fa-2x mr-2"></i> Add New Form
                                                    </a>
                                                    </div>  
                                         )}    */}

                            <div className="d-flex justify-content-md-end mt-2" style={{paddingTop:"10px"}} >
                                <div >
                                    <a href="javascript:" className="d-flex align-items-center" onClick={this.state.isEditing ? this.handleAddCategoryUpdate : this.handleAddCategory}> 
                                        <i className="fa fa-plus-circle fa-2x mr-2"></i> {this.state.isEditing ? this.state.btnLabelUpdate : this.state.btnLabelAdd }
                                    </a>
                                </div>
                                <div className="d-flex justify-content-md-end mt-2"  onClick={this.handleClear}>
                                    <a href="javascript:" className="d-flex align-items-center" style={{marginLeft:"2.5em", marginTop:"-6px"}}>
                                        <i className="fa fa-times-circle fa-2x mr-2"></i> {this.state.btnLabelCancel} 
                                    </a>
                                </div>
                            </div>






                                    </div>
                                </div>
                                <div class="row mt-5 mb-4">
                                    <div class="col">
                                        <div class="card midCard">
                                            <div class="card-header">
                                                Inactive
                                            </div>
                                            <div class="card-body cardBg"
                                           >
                                                <ul class="list-unstyled" id="categoryInactive">
                                                   {this.state.inactive.map(t=>{
                                                    return <li id={t.id}>
                                                        <div class="showElipse">
                                                        <div className={this.state.isEditing===false  ? "a" :this.state.selectedID === t.id ? "reasonBackground a" : "a"}><span id={t.id}    >{t.value}</span>
                                                        
                                                        </div>
                                                        <span style={{float:"right",fontSize:20, cursor:"pointer", color:"#629c44",marginTop:"-28px"}}  id={t.id}><MdIcons.MdEdit  
                                                                onClick={() =>this.handleEditClick2(t)}
                                                                /></span>
                                                        </div>
                                                   
                                                                 {/* <a className="d-flex justify-content-between align-items-center"  id={t.id}>
                                                                      <span id={t.id}   className={this.state.isEditing===false  ? "" :this.state.selectedID === t.id ? "reasonBackground eplisData " : "eplisData"} >{t.name}</span>

                                                                      <span style={{float:"right",fontSize:20, cursor:"pointer", color:"#629c44"}}  id={t.id}><MdIcons.MdEdit  
                                                                onClick={() =>this.handleEditClick2(t)}
                                                                /></span>
                                                                 </a> */}
                                                            </li>
                                                    })}
                                            </ul>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-1">
                                        <div className="midControls d-flex flex-column justify-content-around">
                                            <div>
                                            <i class="fas fa-angle-double-right" style={{fontSize:40,color:"gray"}}></i>
                                                <p style={{fontSize:"14px",fontWeight:"bold",color:"gray",textAlign:"center"}}>Drag & Drop to Place</p>
                                               
                                            </div>
                                            <div>
                                            <i class="fas fa-arrows-alt" style={{fontSize:40,color:"gray"}}></i>
                                                <p style={{fontSize:"14px",fontWeight:"bold",color:"gray",textAlign:"center"}}>Drag To Sort</p>
                                                
                                            </div>
                                            <div className="deleteSpace" onDragOver={(e)=>{this.onDragOver(e)}} onDrop={(e)=>this.onDelete(e)}>
                                                <i className ={`fa fa-trash ${this.state.deleteon==true?"trashShake":""}`}style={{fontSize:35,color:"red"}} ></i>
                                                <p style={{fontSize:"14px",fontWeight:"bold",color:"gray",textAlign:"center"}}>Drag & Drop Here to Remove</p>
                                                {/* <img style={{width:"5em"}} src="./assets/img/Genral_Icons/Drag _Drop_remove_red.png" alt="Settings" className="trashShake"/> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="card midCard">
                                            <div class="card-header">
                                                Active
                                            </div>
                                            <div class="card-body cardBg">
                                            <ul class="list-unstyled" id="categoryActive">
                                                   {this.state.active.map(t=>{
                                                    return <li id={t.id}>
                                                        <div class="showElipse">
                                                        <div className={this.state.isEditing===false  ? "a" :this.state.selectedID === t.id ? "reasonBackground a" : "a"}><span id={t.id}    >{t.value}</span>
                                                        
                                                        </div>
                                                        <span style={{float:"right",fontSize:20, cursor:"pointer", color:"#629c44",marginTop:"-28px"}}  id={t.id}><MdIcons.MdEdit  
                                                                onClick={() =>this.handleEditClick2(t)}
                                                                /></span>
                                                        </div>
                                                   
                                                                 {/* <a className="d-flex justify-content-between align-items-center"  id={t.id}>
                                                                      <span id={t.id}   className={this.state.isEditing===false  ? "" :this.state.selectedID === t.id ? "reasonBackground eplisData " : "eplisData"} >{t.name}</span>

                                                                      <span style={{float:"right",fontSize:20, cursor:"pointer", color:"#629c44"}}  id={t.id}><MdIcons.MdEdit  
                                                                onClick={() =>this.handleEditClick2(t)}
                                                                /></span>
                                                                 </a> */}
                                                            </li>
                                                    })}
                                            </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        </>
    )
}
}

const mapStateToProps = (state)=> (
    // console.log(state)
     {
    
zoneCategoryList:state.attributeData.subAttribute,
temp:state,
// name:state.categoryData.name 
formName:state.attributeData.subAttributeName.formName,
formSku:state.attributeData.subAttributeName.formSku,
showSpeciSubA: state.attributeData.specificSubAttribute,
}
)
export default connect(mapStateToProps,{
    getAllSubAttribute,
    handleAttributeDragDrop,
    handleAttributeDragSort,
    handleAttributeDelete,
    handleZoneInputAction,
    handleAddZone,
    showSubSubAttribute,
    handleSubAttributeUpdate, 
    handleZoneInputAction2,    
})(Form)