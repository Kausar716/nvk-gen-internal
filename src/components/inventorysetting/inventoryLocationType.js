/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { Component } from 'react'
import {connect} from "react-redux";
import * as MdIcons from "react-icons/md";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';

import 
    {
        getAllSubAttribute, 
        handleAttributeDragDrop,
        handleAttributeDragSort,
        handleAttributeDelete,
        handleZoneInputAction,
        handleAddZone, 
        showSubSubAttribute, 
        handleSubAttributeUpdate, 
        handleZoneInputAction2
    } 
from '../../actions/attributeAction'

class InventoryLocationTypes extends Component {
    constructor(props){
        super()
        this.state={
            errorObj:{
                locationType:0,
                locationTypeShortCode:0
            },
            sortId: 0,
            activeId: 0,
            isEditing:false,
            name:'',
            subName:'',
            subName2:'',
            selectedID:'',
            btnLabelAdd:'Add New Location Type',
            btnLabelUpdate: 'Update Location Type',
            btnLabelCancel:'Cancel'
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
        this.props.getAllSubAttribute(17)
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
                this.props.getAllSubAttribute(17)
            })   
        }
        if (doProcess === false && cat === 'active' && tasks[0].status === 1 && this.state.sortId !== this.state.activeId) {
            let result= this.props.handleAttributeDragSort(this.state.activeId, this.state.sortId)
            result.then(res=>{
                this.props.getAllSubAttribute(17)
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
    onDelete =(ev)=>{
        let id= ev.dataTransfer.getData("id");
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
        result.then(res=>{
            this.props.getAllSubAttribute(17)
            confirmAlert({
                title: 'Delete Successfully',
                message: 'Location Type ',
                buttons: [
                  {
                    label: 'Ok'
                  }
                ]
              });
        })
    }
    handleZoneInputAction = (e)=>{
        // debugger;
        this.setState({
            subName:e.target.value
        })
        
        let errorObj=this.state.errorObj
        if(e.target.name === "locationTypeShortCode"){
        errorObj.locationTypeShortCode=0
        this.setState({errorObj})}

        this.props.handleZoneInputAction("locationTypeShortCode",e.target.value)
    }

    handleZoneInputAction2 = (e)=>{
        // debugger;
        this.setState({
            name:e.target.value
        })
        let errorObj=this.state.errorObj
        if(e.target.name === "locationType"){
            errorObj.locationType=0
            this.setState({errorObj})}


        this.props.handleZoneInputAction2("locationType",e.target.value)
    }

    handleAddCategory = (e)=>{
    
        let zoneObj={}
        zoneObj.attribute_id=17   
        zoneObj.value = this.state.name    
        zoneObj["childrens"] =[{
                'children_name':'Short Code',
                'children_value':this.state.subName
            }]
        zoneObj.status=1
        if(this.validate()){
            let result = this.props.handleAddZone(zoneObj)
            result.then(res=>{
                this.props.getAllSubAttribute(17)
            })
            confirmAlert({
                title: 'Added Successfully',
                message: 'Location Type',
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
    validate = ()=>{
        let errorObj = this.state.errorObj
        if(this.state.name.length === 0){
            errorObj.locationType=1
            this.setState({errorObj})
            return false
        }
        if(this.state.subName.length < 6){
            errorObj.locationTypeShortCode=1
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

        this.props.handleZoneInputAction("locationTypeShortCode",this.state.subName)
        this.props.handleZoneInputAction2("locationType",this.state.name)
        this.props.showSubSubAttribute(t.id)

    }

    handleClear=()=>{
        let errorObj = this.state.errorObj
        errorObj.locationType=0
        errorObj.locationTypeShortCode=0
        this.setState({name: "", subName:"", isEditing:false, selectedID:'', errorObj})
    }

    handleAddCategoryUpdate=(e)=>{
        // debugger;
         // this.props.handleSubAttributeUpdate(e.target.id)
         let valueName = this.state.name
         let shortCode = this.state.subName
         let updateID = parseInt(this.props.showSpeciSubA.id)
         let updateObject={}
         updateObject.value=valueName
        //  updateObject.attribute_id=1
         updateObject.status=1

         updateObject["childrens"] =[{
                children_value:shortCode,
                children_id:this.props.showSpeciSubA.sub_attributeschild[0].id,
                children_name:'Short Code'
            }]
            
        if(this.validate()){
            let res=   this.props.handleSubAttributeUpdate(updateID, updateObject)
                res.then(res=>{
                    this.props.getAllSubAttribute(17)
                })
                if (this.state.isEditing) {
                    confirmAlert({
                        title: 'Updated Successfully',
                        message: 'Location Type',
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

    render() {
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
                <h4 className="p-15 mb-0">Location Types</h4>
                <hr className="m-0"/>
                <div className="ContentSection p-15">
                    <div className="row">
                        <div className="col-md-6">
                            <label>Location Type</label>
                            <div>
                                <input type="text"
                                className={this.state.isEditing===false ? "form-control" : "formControl2 abcd" }
                                    name="locationType"
                                value={this.state.name}
                                    placeholder="Type" onChange={this.handleZoneInputAction2}/>
                                {this.state.errorObj.locationType!==0?<span style={{fontSize:"small",color:"red"}}>Enter Location Type</span>:""}
                            </div>

                            <div className="d-flex justify-content-md-end mt-2">
                            </div>
                        </div>
                        <div className="col-md-6">
                            <label>Short Code (6 Char)</label>
                            <div>
                                <input type="text" 
                                className={this.state.isEditing===false ? "form-control" : "formControl2 abcd" }
                                    placeholder="Code"
                                    maxLength="6"
                                    name="locationTypeShortCode" 
                                    value={this.state.subName}  
                                    onChange={this.handleZoneInputAction}/>
                                {this.state.errorObj.locationTypeShortCode!==0?<span style={{fontSize:"small",color:"red"}}>Enter Short Code</span>:""}
                            </div>
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
                                    <img style={{width:"5em"}} src="./assets/img/Genral_Icons/DragDragtoplace-move.png" alt="Settings"/>
                                </div>
                                <div>
                                    <img style={{width:"5em"}} src="./assets/img/Genral_Icons/DragDragto_place.png" alt="Settings"/>
                                </div>
                                <div className="deleteSpace" onDragOver={(e)=>{this.onDragOver(e)}} onDrop={(e)=>this.onDelete(e)}>
                                    <img style={{width:"5em"}} src="./assets/img/Genral_Icons/Drag _Drop_remove_red.png" alt="Settings"/>
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
        </>
        )
    }
}

const mapStateToProps = (state)=> ({
        zoneCategoryList:state.attributeData.subAttribute,
        temp:state,
        locationType:state.attributeData.subAttributeName.locationType,
        locationTypeShortCode:state.attributeData.subAttributeName.locationTypeShortCode,
        showSpeciSubA: state.attributeData.specificSubAttribute,
    })

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
})(InventoryLocationTypes)