/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { Component } from 'react'
import {connect} from "react-redux";
import { confirmAlert } from 'react-confirm-alert'; 
import * as MdIcons from "react-icons/md";
import Sortable from 'sortablejs'
// import './style.css';
import {getAllSubAttribute,handleAttributeDragDrop,handleAttributeDragSort,handleAttributeDelete,handleZoneInputAction,
    handleAddZone,showSubSubAttribute, handleSubAttributeUpdate, handleZoneInputAction2, } from '../../actions/attributeAction'

    class Packaging extends Component {
        constructor(props){
            super()
                this.state={
                    errorObj:{
                        packagingName:0,
                        packagingSku:0
                    },
                    sortId: 0,
                    activeId: 0,
                    isEditing:false,
                    name:'',
                    subName:'',
                    subName2:'',
                    selectedID:'',
                    btnLabelAdd:'Add New Package ',
                    btnLabelUpdate: 'Update Package',
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
            // this.props.getAllSubAttribute(13)
            var elData = document.getElementById('categoryActive');
            var elData1 = document.getElementById('categoryInactive');
            this.props.getAllSubAttribute(4).then(()=>{
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
            let id= ev.dataTransfer.getData("id");
            confirmAlert({
                title: 'Delete Package Type',
                message: 'Are you sure want to delete the Package?',
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
                this.props.getAllSubAttribute(4).then(()=>{
                    // alert("ji")
                    this.getCatgoryData()
                })
                this.setState({deleteon:false})
                confirmAlert({
                    title: 'Delete Package',
                    message: 'package Type ',
                    buttons: [
                      {
                        label: 'Ok'
                      }
                    ]
                  });
            })
        }

    
        handleAddCategory = (e)=>{       
            let zoneObj={}
            zoneObj.attribute_id=4
            zoneObj.value = this.state.name        
            zoneObj["childrens"] =[
                {'children_name':'SKU value',
                'children_value':this.state.subName
            }
            ]
            zoneObj.status=1
            console.log(zoneObj)
            // if(this.validate() ){
            //     let result = this.props.handleAddZone(zoneObj)
            //     result.then(res=>{
            //         this.props.getAllSubAttribute(4)
            //     })
            // }
            // alert('Added Successfully Done');

            // this.setState({
               
            //     name:"",
            //     subName:""
            // })


            if(this.validate()){
                let result = this.props.handleAddZone(zoneObj)
                result.then(res=>{
                    this.props.getAllSubAttribute(4).then(()=>{
                        // alert("ji")
                        this.getCatgoryData()
                    })
                })
                // confirmAlert({
                //     title: 'Added Successfully',
                //     message: 'Package ',
                //     buttons: [
                //       {
                //         label: 'Ok'
                //       }
                //     ]
                // });
                this.setState({
                    name: "",
                    subName:"",
                    subName2:"",
                    isEditing:false,
                    selectedID:'',
                })
            } 

        }






        validate = ()=>{
            let errorObj = this.state.errorObj
            if(this.state.subName.length === 0){
                errorObj.packagingSku=1
                this.setState({errorObj})
                return false
            }
            if(this.state.name.length === 0){
                errorObj.packagingName=1
                this.setState({errorObj})
                return false
            }
            return true
            
        }

        handleZoneInputAction = (e)=>{
            this.setState({
                subName:e.target.value
            })

            let errorObj=this.state.errorObj
            if(e.target.name === "packagingSku"){
            errorObj.packagingSku=0
            this.setState({errorObj})}
            this.props.handleZoneInputAction(e.target.name,e.target.value)
        }


        handleZoneInputAction2 = (e)=>{
            //debugger;
            console.log("inputAction", e.target.name,e.target.value)
            this.setState({
                name:e.target.value,
                //subName:e.target.value
            })

            let errorObj=this.state.errorObj
            if(e.target.name === "packagingName"){
            errorObj.packagingName=0
            this.setState({errorObj})}



            this.props.handleZoneInputAction2("packagingName",e.target.value)
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

         this.props.handleZoneInputAction("packagingSku",...this.state.subName)
         this.props.handleZoneInputAction2("packagingName",...this.state.name)
         this.props.showSubSubAttribute(t.id)
         //console.log("ttttttt", t,  )
       }

        handleAddCategoryUpdate=(e)=>{
            // debugger;
             // this.props.handleSubAttributeUpdate(e.target.id)
             let valueName = this.state.name
             let skuName = this.state.subName
             let updateID = parseInt(this.props.showSpeciSubA.id)
             let updateObject={}
             updateObject.value=valueName
            //  updateObject.attribute_id=1
             updateObject.status=1
             //updateObject.sub_attributeschild[0].value=skuName
             //updateObject.sub_attributeschild[].value=skuName
    
              
    
             updateObject["childrens"] =[
                {
                    children_value:skuName,
                    children_id:this.props.showSpeciSubA.sub_attributeschild[0].id,
                    children_id_name:'SKU value'
            }
            ]
        //     if(this.validate() ){
        //   let res=   this.props.handleSubAttributeUpdate(updateID, updateObject)
        //          res.then(res=>{
        //              this.props.getAllSubAttribute(4)
        //          })

        //          alert('Updated Successfully Done');
        //         }
    
        //          this.setState({
        //              isEditing:false,
        //              name:"",
        //              subName:""
        //          })

        if(this.validate()){
            let res=   this.props.handleSubAttributeUpdate(updateID, updateObject)
                res.then(res=>{
                    this.props.getAllSubAttribute(4).then(()=>{
                        // alert("ji")
                        this.getCatgoryData()
                    })
                })
                if (this.state.isEditing) {
                    // confirmAlert({
                    //     title: 'Updated Successfully',
                    //     message: 'Packaging ',
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
                    subName:"",
                    subName2:""
                })
        }
    
         }

         handleClear=()=>{
            let errorObj = this.state.errorObj
            errorObj.packagingName=0
            errorObj.packagingSku=0
            //errorObj.locationTypeShortCode=0
            this.setState({name: "", subName:"", isEditing:false, selectedID:'', errorObj})
        }
   


        render() {
        console.log(this.props.temp)
        var tasks={
            inactive:[],
            active:[],
        }
        if(this.props.zoneCategoryList){
            this.props.zoneCategoryList.forEach((t)=>{
                console.log(t)
                if(t.status === 1){
                    tasks.active.push(t)
                }
                else if(t.status=== 0){
                    tasks.inactive.push(t)
                }
            })
        }


       
        
    return (
        <>
            <div className="bg-white">
                            <h4 className="p-15 mb-0"> Packaging</h4>
                            <hr className="m-0"/>
                            <div className="ContentSection p-15">
                            <div className="row">
                                    <div className="col-md-6">
                                        <p>Packaging Name</p>
                                        <div>
                                            <input type="text" 
                                           className={this.state.isEditing===false ? "form-control" : "formControl2 abcd" }
                                             name="packagingName"
                                              value={this.state.name}
                                            //  value={this.props.packagingName}  
                                              placeholder="Name" onChange={this.handleZoneInputAction2}/>
                                               {this.state.errorObj.packagingName!==0?<span style={{fontSize:"small",color:"red"}}>Enter Packaging Name</span>:""}
                                        </div>
                                        <div className="d-flex justify-content-md-end mt-2">
                                            {/* <a href="javascript;" className="d-flex align-items-center">
                                                <i className="fa fa-plus-circle fa-2x mr-2"></i> Add New Section
                                            </a> */}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <p>SKU Value<span style={{color:"red"}}>*</span></p>
                                        <div>

                                            <input type="text" 
                                           className={this.state.isEditing===false ? "form-control" : "formControl2 abcd" }
                                             placeholder="Value" name="packagingSku"
                                              value={this.state.subName}
                                            //  value={this.props.packagingSku}   
                                              onChange={this.handleZoneInputAction}/>
                                            {this.state.errorObj.packagingSku!==0?<span style={{fontSize:"small",color:"red"}}>Enter SKU Value</span>:""}
                                        </div>



                                        {/* <div className="d-flex justify-content-md-end mt-2" onClick={this.handleAddCategory}>
                                            <a href="javascript:" className="d-flex align-items-center">
                                                <i className="fa fa-plus-circle fa-2x mr-2"></i> Add New Packaging
                                            </a>
                                        </div> */}


                                        {/* {this.state.isEditing ? (

                                            <div className="d-flex justify-content-md-end mt-2" >
                                                <div  onClick={this.handleAddCategoryUpdate}>
                                                <a href="javascript:" className="d-flex align-items-center">
                                                    <i className="fa fa-plus-circle fa-2x mr-2"></i> Update Packaging
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
                                                <i className="fa fa-plus-circle fa-2x mr-2"></i>  Add New Packaging
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
                                                    return <li id={t.id}  >
                                                                 <a className="d-flex justify-content-between align-items-center">
                                                                <span id="Wheathers" className={this.state.isEditing===false  ? "" :this.state.selectedID === t.id ? "reasonBackground" : " "}>{t.value}</span>
                                                                <span style={{float:"right",fontSize:20, cursor:"pointer", color:"#629c44"}}><MdIcons.MdEdit  
                                                                onClick={() =>this.handleEditClick2(t)}
                                                                /></span>
                                                                </a>
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
                                                    return <li id={t.id}  >
                                                                 <a className="d-flex justify-content-between align-items-center">
                                                                <span id="Wheathers" className={this.state.isEditing===false  ? "" :this.state.selectedID === t.id ? "reasonBackground" : " "}>{t.value}</span>
                                                                <span style={{float:"right",fontSize:20, cursor:"pointer", color:"#629c44"}}><MdIcons.MdEdit  
                                                                onClick={() =>this.handleEditClick2(t)}
                                                                /></span>
                                                                </a>
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
packagingName:state.attributeData.subAttributeName.packagingName,
packagingSku:state.attributeData.subAttributeName.packagingSku,
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
})(Packaging)