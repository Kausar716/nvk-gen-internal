/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { Component } from 'react'
import {connect} from "react-redux";
import { confirmAlert } from 'react-confirm-alert'; 
import * as MdIcons from "react-icons/md";
import Sortable from 'sortablejs'
// import './style.css';
import {getAllSubAttribute,handleAttributeDragDrop,handleAttributeDragSort,handleAttributeDelete,
    handleZoneInputAction,handleAddZone, handleZoneInputAction2, handleZoneInputAction3, showSubSubAttribute, handleSubAttributeUpdate} from '../../actions/attributeAction'

    class Caliper extends Component {
        constructor(props){
            super()
                this.state={
                    errorObj:{
                        caliperName:0,
                        caliperSku:0,
                        caliperImperial:0
                    },
                    sortId: 0,
                    activeId: 0,
                    isEditing:false,
                    name:'',
                    subName:'',
                    subName2:'',
                    selectedID:'',
                    btnLabelAdd:'Add New Caliper',
                    btnLabelUpdate: 'Update Caliper',
                    btnLabelCancel:'Cancel',
                    false:false,
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
            // this.props.getAllSubAttribute(5)
            var elData = document.getElementById('categoryActive');
            var elData1 = document.getElementById('categoryInactive');
            this.props.getAllSubAttribute(5).then(()=>{
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
                this.props.getAllSubAttribute(5).then(()=>{
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
            console.log("whichNAME", e.target.name,e.target.value)
            this.setState({
                name:e.target.value
            })

            let errorObj=this.state.errorObj
            if(e.target.name === "caliperName"){
            errorObj.caliperName=0
            this.setState({errorObj})}

            this.props.handleZoneInputAction(e.target.name,e.target.value)
        }


        handleZoneInputAction2 = (e)=>{
            //debugger;
            console.log("inputAction", e.target.name,e.target.value)
            this.setState({
                subName:e.target.value,
                
            })
            let errorObj=this.state.errorObj
            if(e.target.name === "caliperImperial"){
                errorObj.caliperImperial=0
                this.setState({errorObj})}

            this.props.handleZoneInputAction2("caliperImperial",e.target.value)
        }


        handleZoneInputAction3 = (e)=>{
            this.setState({
                subName2:e.target.value,
                
            })
            let errorObj=this.state.errorObj
            if(e.target.name === "caliperSku"){
            errorObj.caliperSku=0
            this.setState({errorObj})}
            //debugger;
            console.log("inputAction", e.target.name,e.target.value)
           
            this.props.handleZoneInputAction3("caliperSku",e.target.value)
        }

        handleEditClick2 =(t)=> {
            console.log("abcdefg", t  )
            // debugger;  
         this.setState({
             name: t.value,
             subName:t.sub_attributeschild[0].value,
             subName2:t.sub_attributeschild[1].value,
             isEditing:true,
             selectedID:t.id,
         })
        //  let formValue={}
        //  formValue={...this.state.name, ...this.state.subName}

         this.props.handleZoneInputAction("caliperName",...this.state.name)
         this.props.handleZoneInputAction2("caliperImperial",...this.state.subName)
         this.props.handleZoneInputAction3("caliperSku",...this.state.subName2)
         this.props.showSubSubAttribute(t.id)
         //console.log("ttttttt", t,  )
       }


       handleAddCategoryUpdate=(e)=>{
        // debugger;
         // this.props.handleSubAttributeUpdate(e.target.id)
         let valueName = this.state.name
         let caliperName = this.state.subName
         let skuName = this.state.subName2
         let updateID = parseInt(this.props.showSpeciSubA.id)
         let updateObject={}
         updateObject.value=valueName
        //  updateObject.attribute_id=1
         updateObject.status=1

         updateObject["childrens"] =[
            {
                children_value:caliperName,
                children_id:this.props.showSpeciSubA.sub_attributeschild[0].id,
                children_name:'Imperial'
            },
            {
                children_value:skuName,
                children_id:this.props.showSpeciSubA.sub_attributeschild[1].id,
                children_name:'SKU value'
                }
        ]
    //     if(this.validate()){
    //   let res=   this.props.handleSubAttributeUpdate(updateID, updateObject)
    //          res.then(res=>{
    //              this.props.getAllSubAttribute(5)
    //          })
            

    //         }

    //          this.setState({
    //              isEditing:false,
    //              name:"",
    //              subName:"",
    //              subName2:""
    //          })
            //  alert('Updated Successfully Done');


            if(this.validate()){
                let res=   this.props.handleSubAttributeUpdate(updateID, updateObject)
                    res.then(res=>{
                        this.props.getAllSubAttribute(5).then(()=>{
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
                        subName:"",
                        subName2:""
                    })
            }
     }


        handleAddCategory = (e)=>{
       
            let zoneObj={}
            zoneObj.attribute_id=5
            zoneObj.value = this.state.name          
            zoneObj["childrens"] =[
                {'children_name':'SKU value',
                'children_value':this.state.subName},
                {'children_name':'Imperial',
                'children_value':this.state.subName2}
            ]
            zoneObj.status=1
            console.log(zoneObj)
     

        if(this.validate()){
            let result = this.props.handleAddZone(zoneObj)
            result.then(res=>{
                this.props.getAllSubAttribute(5)
                // alert("fff")
            })
            // confirmAlert({
            //     title: 'Added Successfully',
            //     message: 'Caliper ',
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
                errorObj.caliperImperial=1
                this.setState({errorObj})
                return false
            }

            if(this.state.name.length === 0){
                errorObj.caliperName=1
                this.setState({errorObj})
                return false
            }
            if(this.state.subName2.length === 0){
                errorObj.caliperSku=1
                this.setState({errorObj})
                return false
            }
            return true
            
        }


        handleClear=()=>{
            let errorObj = this.state.errorObj
            errorObj.caliperName=0
            errorObj.caliperSku=0
            errorObj.caliperImperial=0
            this.setState({name: "", subName:"",subName2:"", isEditing:false, selectedID:'', errorObj})
        }



        render() {
            console.log("ABCDEFG",this.props.showSpeciSubA)
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
                            <h4 className="p-15 mb-0"> Caliper</h4>
                            <hr className="m-0"/>
                            <div className="ContentSection p-15">
                                <div className="row">
                                        <div className="col-md-4">
                                            <p>Caliper Name</p>
                                            <div>
                                                <input type="text" 
                                               className={this.state.isEditing===false ? "form-control" : "formControl2 abcd" }
                                                 placeholder="Name"  name="caliperName" 
                                               value={this.state.name}
                                                 onChange={this.handleZoneInputAction}/>
                                                 {this.state.errorObj.caliperName!==0?<span style={{fontSize:"small",color:"red"}}>Enter Caliper Name</span>:""}
                                            </div>
                                            <div className="d-flex justify-content-md-end mt-2">
                                                {/* <a href="javascript;" className="d-flex align-items-center">
                                                    <i className="fa fa-plus-circle fa-2x mr-2"></i> Add New Section
                                                </a> */}
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <p>Imperial<span style={{color:"red"}}>*</span></p>
                                            <div>
                                                <input type="text" 
                                                className={this.state.isEditing===false ? "form-control" : "formControl2 abcd" }
                                                placeholder=""
                                                  name="caliperImperial"
                                                   value={this.state.subName}
                                                      onChange={this.handleZoneInputAction2}/>
                                                {this.state.errorObj.caliperImperial!==0?<span style={{fontSize:"small",color:"red"}}>Enter Imperial Value</span>:""}
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <p>SKU Value<span style={{color:"red"}}>*</span></p>
                                            <div>
                                                <input type="text" 
                                                className={this.state.isEditing===false ? "form-control" : "formControl2 abcd" }
                                                 placeholder="Value"  name="caliperSku" value={this.state.subName2}    onChange={this.handleZoneInputAction3}/>
                                                {this.state.errorObj.caliperSku!==0?<span style={{fontSize:"small",color:"red"}}>Enter SKU Value</span>:""}
                                            </div>

                                            {/* 
                                            <div className="d-flex justify-content-md-end mt-2" onClick={this.handleAddCategory}>
                                                <a href="javascript:" className="d-flex align-items-center">
                                                    <i className="fa fa-plus-circle fa-2x mr-2"></i> Add New Caliper
                                                </a>
                                            </div> */}

                                            {/* {this.state.isEditing ? (
                                                    <div className="d-flex justify-content-md-end mt-2" style={{paddingTop:"10px"}} onClick={this.handleAddCategoryUpdate}>
                                                    <div >
                                                    <a href="javascript:" className="d-flex align-items-center">
                                                        <i className="fa fa-plus-circle fa-2x mr-2"></i> Update Caliper
                                                    </a>
                                                    </div>


                                                        <div className="d-flex justify-content-md-end mt-2"  onClick={()=>{this.setState({isEditing:false})}}>
                                                        <a className="d-flex align-items-center" style={{marginLeft:"2.4em", marginTop:"-8px"}}>Cancel </a>
                                                           
                                                        </div>
                                                    </div>


                                                    ):
                                                    (
                                                    <div className="d-flex justify-content-md-end mt-2"  onClick={this.handleAddCategory}>
                                                    <a href="javascript:" className="d-flex align-items-center">
                                                    <i className="fa fa-plus-circle fa-2x mr-2"></i> Add New Caliper
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
                                                    return <li id={t.id} >
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
                                            <div class="card-body cardBg"
                                            >
                                                <ul class="list-unstyled" id="categoryActive">
                                                   {this.state.active.map(t=>{
                                                    return <li id={t.id} >
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
caliperName:state.attributeData.subAttributeName.caliperName,
caliperSku:state.attributeData.subAttributeName.caliperSku,
caliperImperial:state.attributeData.subAttributeName.caliperImperial,
showSpeciSubA: state.attributeData.specificSubAttribute,

}
)
export default connect(mapStateToProps,{
    getAllSubAttribute,
    handleAttributeDragDrop,
    handleAttributeDragSort,
    handleAttributeDelete,
    handleZoneInputAction,
    handleZoneInputAction2,
    handleZoneInputAction3,
    handleAddZone,
    showSubSubAttribute,
    handleSubAttributeUpdate

})(Caliper)