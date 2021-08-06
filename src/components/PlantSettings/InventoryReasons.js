/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { Component } from 'react'
import {connect} from "react-redux";
import * as MdIcons from "react-icons/md";
import { confirmAlert } from 'react-confirm-alert'; 
// import './style.css';
import {getAllSubAttribute,handleAttributeDragDrop,handleAttributeDragSort,handleAttributeDelete,handleZoneInputAction,handleAddZone,   handleSubAttributeUpdate, showSubSubAttribute     } from '../../actions/attributeAction'

    class InventoryReasons extends Component {
        constructor(props){
            super()
                this.state={
                    errorObj:{
                        formSku:0,
                        reason:0
                        
                    },
                    sortId: 0,
                    activeId: 0,
                    isEditing:false,
                    name:'',
                    subName:'',
                    subName2:'',
                    selectedID:'',
                    btnLabelAdd:'Add New Inventory Reason',
                    btnLabelUpdate: 'Update Inventory Reason',
                    btnLabelCancel:'Cancel',
                    deleteon:false,
                }
            
        }
         onDragOver = (ev)=>{
            ev.preventDefault();
        }
        onDragStart=(ev, id)=>{
            console.log("dragstart:", id);
            ev.dataTransfer.setData("id",id)
            let activeId=this.state.activeId
            activeId=id;
            this.setState({activeId})
        }
        componentDidMount(){
            this.props.getAllSubAttribute(13)
        }
        onMouseLeave =((ev, id)=>{
            let sortId=this.state.sortId
            sortId=id;
            this.setState({sortId})
        })
        onDrop=(ev,cat)=>{
            let id= ev.dataTransfer.getData("id");
            let tasks = this.props.zoneCategoryList.filter((task)=>{                
                   return JSON.stringify(task.id) === id;
            });
        //     console.log(tasks)
        //     let result= this.props.handleAttributeDragDrop(tasks[0])
        //     result.then(res=>{
        //     this.props.getAllSubAttribute(13)
        //    })
            let doProcess = false;
            let alertmsg = 0;
            if (cat === 'active' && tasks[0].status === 0) {
                doProcess = true;
                alertmsg = 1;
            }
            if (cat === 'inactive' && tasks[0].status === 1) {
                doProcess = true;
                alertmsg = 2;
            }
            if (doProcess === true) {
                let result= this.props.handleAttributeDragDrop(tasks[0])
                result.then(res=>{
                    this.props.getAllSubAttribute(13)
                })   
            }
            if (doProcess === false && cat === 'active' && tasks[0].status === 1 && this.state.sortId !== this.state.activeId) {
                let result= this.props.handleAttributeDragSort(this.state.activeId, this.state.sortId)
                result.then(res=>{
                    this.props.getAllSubAttribute(13)
                }) 
                alertmsg = 3;
            }
            if (alertmsg === 1){
                confirmAlert({
                    title: 'Action',
                    message: 'Successfully Moved from Inactive to Active',
                    buttons: [
                      {
                        label: 'Ok'
                      }
                    ]
                });
            }
            if (alertmsg === 2){
                confirmAlert({
                    title: 'Action',
                    message: 'Successfully Moved from Active to InActive',
                    buttons: [
                      {
                        label: 'Ok'
                      }
                    ]
                });
            }
            if (alertmsg === 3){
                confirmAlert({
                    title: 'Action',
                    message: 'Sort Successfully Done',
                    buttons: [
                      {
                        label: 'Ok'
                      }
                    ]
                });
            }
        }


        // onDelete =(ev)=>{
        //    let id= ev.dataTransfer.getData("id");
        //    console.log(id)
        //    let result= this.props.handleAttributeDelete(id)
        //    result.then(res=>{
        //     this.props.getAllSubAttribute(13)
        //    })
        // }


        onDelete =(ev)=>{
            let id= ev.dataTransfer.getData("id");
            confirmAlert({
                title: 'Delete Inventory Reason',
                message: 'Are you sure want to delete the Inventory Reason ?',
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
                this.props.getAllSubAttribute(13)
                this.setState({deleteon:false})
                confirmAlert({
                    title: 'Delete Successfully',
                    message: 'Inventory reason ',
                    buttons: [
                      {
                        label: 'Ok'
                      }
                    ]
                  });
            })
        }




        handleZoneInputAction = (e)=>{
            this.setState({
                name:e.target.value
            })

            let errorObj=this.state.errorObj
            if(e.target.name === "reason"){
            errorObj.reason=0
            this.setState({errorObj})}

            this.props.handleZoneInputAction("reason",e.target.value)
        }


        handleAddCategory = (e)=>{

            let zoneObj={}
            zoneObj.attribute_id=13
            zoneObj.value = this.props.reason
            zoneObj.status=1


        //     console.log(zoneObj)
        //     if(this.props.reason){
        //     let result = this.props.handleAddZone(zoneObj)
        //     result.then(res=>{
        //         this.props.getAllSubAttribute(13)
        //     })
        //     alert('Added Successfully Done');
        // }

        // this.setState({
            
        //     name:"",
            
        // })

        if(this.validate()){
            let result = this.props.handleAddZone(zoneObj)
            result.then(res=>{
                this.props.getAllSubAttribute(13)
            })
            confirmAlert({
                title: 'Added Successfully',
                message: 'Inventory Reason',
                buttons: [
                  {
                    label: 'Ok'
                  }
                ]
            });
            this.setState({
                name: "",
                subName:"",
                isEditing:false,
                selectedID:'',
            })
        } 
 
    }


        handleAddCategoryUpdate=(e)=>{
            // debugger;
             // this.props.handleSubAttributeUpdate(e.target.id)
             let valueName = this.state.name
             let updateID = parseInt(this.props.showSpeciSubA.id)
             let updateObject={}
             updateObject.value=valueName
 
             //console.log("positionName",this.props.positionName)
            // updateObject.id=this.props.showSpeciSubA.id
                
        //   let res=   this.props.handleSubAttributeUpdate(updateID, updateObject)
        //          res.then(res=>{
        //              this.props.getAllSubAttribute(13)
        //          })
 
        //          this.setState({
        //              isEditing:false,
        //              name:""
        //          })


        if(this.validate()){
            let res=   this.props.handleSubAttributeUpdate(updateID, updateObject)
                res.then(res=>{
                    this.props.getAllSubAttribute(13)
                })
                if (this.state.isEditing) {
                    confirmAlert({
                        title: 'Updated Successfully',
                        message: 'Inventory Reason',
                        buttons: [
                          {
                            label: 'Ok'
                          }
                        ]
                    });
                }
                this.setState({
                    isEditing:false,
                    name:"",
                    subName:""
                })
        }
 
         }

         validate = ()=>{
            let errorObj = this.state.errorObj
            if(this.state.name.length === 0){
                errorObj.reason=1
                this.setState({errorObj})
                return false
            }
            // if(this.state.subName.length < 6){
            //     errorObj.locationTypeShortCode=1
            //     this.setState({errorObj})
            //     return false
            // }
            return true
            
        }

        handleEditClick2 =(t)=> {
            // debugger;  
            console.log("abcdefg", t)
         this.setState({
             name: t.value,
             isEditing:true,
             selectedID:t.id,
         })
         this.props.handleZoneInputAction("reason",this.state.name)
         this.props.showSubSubAttribute(t.id)
         //console.log("ttttttt", t,  this.props.handlePositionInputAction())
       }

       handleClear=()=>{
        let errorObj = this.state.errorObj
        errorObj.reason=0
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
           
               <div>
               <div className="bg-white">
                            <h4 className="p-15 mb-0">Inventory Reasons</h4>
                            <hr className="m-0"/>
                            <div className="ContentSection p-15">
                                <div className="row">
                                    <div className="col-md-12 col-lg-12">
                                        <p>Reason Value</p>
                                        <div className="row d-flex align-items-center">
                                            <div className="col-md-6 col-lg-6">  
                                                <input type="text" 
                                               className={this.state.isEditing===false ? "form-control" : "formControl2 abcd" }
                                                name="reason" 
                                                 value={this.state.name}
                                                 placeholder="Value" onChange={this.handleZoneInputAction}/>
                                                 {this.state.errorObj.reason!==0?<span style={{fontSize:"small",color:"red"}}>Enter reason</span>:""}
                                            </div>
                                            {/* <div className="col-md-6 col-lg-3" onClick={this.handleAddCategory}>
                                                <a href="javascript:" className="d-flex align-items-center">
                                                    <i className="fa fa-plus-circle fa-2x mr-2"></i> Add New Reason
                                                </a>
                                            </div> */}

                                            {/* {this.state.isEditing ? (
                                        <div className="col-md-6 col-lg-3">
                                            <div  onClick={this.handleAddCategoryUpdate}>
                                            <a href="javascript:" className="d-flex align-items-center">
                                                <i className="fa fa-plus-circle fa-2x mr-2"></i> Update Volume Tier
                                            </a>
                                            </div>

                                                <div className="col-md-6 col-lg-3"  onClick={()=>{this.setState({isEditing:false})}}>
                                                <a href="javascript:" className="d-flex align-items-center cancel_signlebox"  style={{marginLeft:"13em"}}>
                                                    Cancel 
                                                </a>
                                                </div>
                                        </div>

                                            ):
                                            (
                                            <div className="col-md-6 col-lg-3" onClick={this.handleAddCategory}>
                                            <a href="javascript:" className="d-flex align-items-center">
                                            <i className="fa fa-plus-circle fa-2x mr-2"></i> Add New Volume Tier
                                            </a>
                                            </div>  
                                            )}    */}


                            <div className="d-flex justify-content-md-end mt-2" >
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
                                </div>
                                <div class="row mt-5 mb-4">
                                    <div class="col">
                                        <div class="card midCard">
                                            <div class="card-header">
                                                Inactive
                                            </div>


                                            <div class="card-body cardBg"
                                            onDragOver={(e)=>this.onDragOver(e)}
                                            onDrop={(e)=>{this.onDrop(e,"inactive")}}>
                                                <ul class="list-unstyled">
                                                   {tasks.inactive.map(t=>{
                                                    return <li id={t.id} name={t.id} onDragStart={(e)=>this.onDragStart(e, t.id)} onDelete={(e)=>this.onDelete(e, t.id)} draggable >
                                                                <a className="d-flex justify-content-between align-items-center">
                                                                <span id="Wheathers">{t.value}</span>
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
                                            <div class="card-body cardBg" onDragOver={(e)=>{this.onDragOver(e)}} onDrop={(e)=>this.onDrop(e,"active")}>
                                            <ul class="list-unstyled">
                                                   {tasks.active.map(t=>{
                                                    return <li id={t.id} name={t.id} onDragStart={(e)=>this.onDragStart(e, t.id)} onMouseLeave={(e)=>this.onMouseLeave(e, t.id)} onDelete={(e)=>this.onDelete(e, t.id)} draggable >
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
        </div>
       
        )
    }
}

     const mapStateToProps = (state)=> (
        // console.log(state)
         {
        
   zoneCategoryList:state.attributeData.subAttribute,
    temp:state,
    // name:state.categoryData.name
    reason:state.attributeData.subAttributeName.reason,
    showSpeciSubA: state.attributeData.specificSubAttribute,
    }
    )
    export default connect(mapStateToProps,{
        getAllSubAttribute,
        handleAttributeDragDrop,
        handleAttributeDragSort,
        handleAttributeDelete,
        handleZoneInputAction,
        handleAddZone ,
        handleSubAttributeUpdate, 
        showSubSubAttribute,    
    })(InventoryReasons)

