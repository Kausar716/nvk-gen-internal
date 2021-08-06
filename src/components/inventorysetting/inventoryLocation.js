/* eslint-disable jsx-a11y/alt-text */
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
        handleZoneInputAction2,
        getAllLocationTypesSubAttribute
    } 
from '../../actions/attributeAction'

class InventoryLocation extends Component {
    constructor(props){
        super()
        this.state={
            errorObj:{
                locationName:0,
                locationShortCode:0
            },
            sortId: 0,
            activeId: 0,
            isEditing:false,
            locationName: '',
            locationShortCode: "",
            locationTypevalue: 0,
            locationAddress: "",
            locationCity: "",
            locationState: 0,
            locationCountry: 0,
            locationzip: "",
            locationlatlong: "",
            allStates:{},
            btnLabelAdd:'Add New Location Type',
            btnLabelUpdate: 'Update Location Type',
            btnLabelCancel:'Cancel',
            locationTypevaluechild:0,
            deleteon:false
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
        this.props.getAllSubAttribute(18)
        this.props.getAllLocationTypesSubAttribute()
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
                this.props.getAllSubAttribute(18)
            })   
        }
        if (doProcess === false && cat === 'active' && tasks[0].status === 1 && this.state.sortId !== this.state.activeId) {
            let result= this.props.handleAttributeDragSort(this.state.activeId, this.state.sortId)
            result.then(res=>{
                this.props.getAllSubAttribute(18)
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
        this.setState({deleteon:true})
        result.then(res=>{
            this.props.getAllSubAttribute(18)
            this.setState({deleteon:false})
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
            locationShortCode:e.target.value
        })
        
        let errorObj=this.state.errorObj
        if(e.target.name === "locationShortCode"){
        errorObj.locationShortCode=0
        this.setState({errorObj})}

        this.props.handleZoneInputAction("locationShortCode",e.target.value)
    }

    handleZoneInputAction2 = (e)=>{
        this.setState({
            locationName:e.target.value
        })
        let errorObj=this.state.errorObj
        if(e.target.name === "locationName"){
            errorObj.locationName=0
            this.setState({errorObj})}


        this.props.handleZoneInputAction2("locationName",e.target.value)

    }
    handleInputlocationTypevalue = (e)=>{
        this.setState({locationTypevalue :e.target.value})
        this.props.handleZoneInputAction2("locationTypevalue",e.target.value)
    }
    handleInputlocationTypevalueChild = (e)=>{
        this.setState({locationTypevalueChild :e.target.value})
        this.props.handleZoneInputAction2("locationTypevalueChild",e.target.value)
    }
    handleInputlocationAddress = (e)=>{
        this.setState({locationAddress :e.target.value})
        this.props.handleZoneInputAction2("locationAddress",e.target.value)
    }
    handleInputlocationCity = (e)=>{
        this.setState({locationCity :e.target.value})
        this.props.handleZoneInputAction2("locationCity",e.target.value)
    }
    handleInput = (e)=>{
        this.setState({locationAddress :e.target.value})
        this.props.handleZoneInputAction2("locationAddress",e.target.value)
    }
    handleInputlocationState = (e)=>{
        this.setState({locationState :e.target.value})
        this.props.handleZoneInputAction2("locationState",e.target.value)
    }
    handleInputlocationCountry = (e)=>{
        this.setState({locationCountry :e.target.value})
        this.props.handleZoneInputAction2("locationCountry",e.target.value)
    }
    handleInputloationzip = (e)=>{
        this.setState({locationzip :e.target.value})
        this.props.handleZoneInputAction2("locationzip",e.target.value)
    }
    handleInputlocationlatlong = (e)=>{
        this.setState({locationlatlong :e.target.value})
        this.props.handleZoneInputAction2("locationlatlong",e.target.value)
    }

    handleAddCategory = (e)=>{
    
        let zoneObj={}
        zoneObj.attribute_id=18   
        zoneObj.value = this.state.locationName    
        zoneObj["childrens"] =[{
                'children_name':'Short Code',
                'children_value':this.state.locationShortCode
            },
            {
                'children_name':'Location Type',
                'children_value':this.state.locationTypevalue
            },
            {
                'children_name':'Address',
                'children_value':this.state.locationAddress
            },
            {
                'children_name':'City',
                'children_value':this.state.locationCity
            },
            {
                'children_name':'State',
                'children_value':this.state.locationState
            },
            {
                'children_name':'Country',
                'children_value':this.state.locationCountry
            },
            {
                'children_name':'Zip',
                'children_value':this.state.locationzip
            },
            {
                'children_name':'Lat/Long',
                'children_value':this.state.locationlatlong
            },
            ]
        zoneObj.status=1
        if(this.validate()){
            let result = this.props.handleAddZone(zoneObj)
            result.then(res=>{
                this.props.getAllSubAttribute(18)
            })
            confirmAlert({
                title: 'Added Successfully',
                message: 'Inventory Location',
                buttons: [
                  {
                    label: 'Ok'
                  }
                ]
            });
            this.setState({
                locationName: '',
                locationShortCode: "",
                locationTypevalue: 0,
                locationAddress: "",
                locationCity: "",
                locationState: 0,
                locationCountry: 0,
                locationzip: "",
                locationlatlong: "",
                isEditing:false,
                selectedID:'',
            })
        }        
    }
    validate = ()=>{
        let errorObj = this.state.errorObj
        if(this.state.locationName.length === 0){
            errorObj.locationName=1
            this.setState({errorObj})
            return false
        }
        if(this.state.locationShortCode.length < 6){
            errorObj.locationShortCode=1
            this.setState({errorObj})
            return false
        }
        return true
        
    }


    handleEditClick2 =(t)=> {
        // debugger;  
        this.setState({
            locationName: t.value,
            locationShortCode:t.sub_attributeschild[7].value,
            locationTypevalue:t.sub_attributeschild[6].value,
            locationAddress:t.sub_attributeschild[5].value,
            locationCity:t.sub_attributeschild[4].value,
            locationState:t.sub_attributeschild[3].value,
            locationCountry:t.sub_attributeschild[2].value,
            locationzip:t.sub_attributeschild[1].value,
            locationlatlong:t.sub_attributeschild[0].value,
            isEditing:true,
            selectedID:t.id,
        })
        this.props.handleZoneInputAction2("locationName",this.state.locationName)
        this.props.handleZoneInputAction("locationShortCode",this.state.locationShortCode)
        this.props.handleZoneInputAction("locationTypevalue",this.state.locationTypevalue)
        this.props.handleZoneInputAction("locationAddress",this.state.locationAddress)
        this.props.handleZoneInputAction("locationCity",this.state.locationCity)
        this.props.handleZoneInputAction("locationState",this.state.locationState)
        this.props.handleZoneInputAction("locationCountry",this.state.locationCountry)
        this.props.handleZoneInputAction("locationzip",this.state.locationzip)
        this.props.handleZoneInputAction("locationlatlong",this.state.locationlatlong)
        this.props.showSubSubAttribute(t.id)

    }

    handleClear=()=>{
        let errorObj = this.state.errorObj
        errorObj.locationName=0
        errorObj.locationShortCode=0
        this.setState({locationName: '',
            locationShortCode: "",
            locationTypevalue: 0,
            locationAddress: "",
            locationCity: "",
            locationState: 0,
            locationCountry: 0,
            locationzip: "",
            locationlatlong: "", isEditing:false, selectedID:'', errorObj})
    }

    handleAddCategoryUpdate=(e)=>{
        // debugger;
         // this.props.handleSubAttributeUpdate(e.target.id)
         let valueName = this.state.locationName
         let vlocationShortCode = this.state.locationShortCode
         let vlocationTypevalue = this.state.locationTypevalue
         let vlocationAddress = this.state.locationAddress
         let vlocationCity = this.state.locationCity
         let vlocationState = this.state.locationState
         let vlocationCountry = this.state.locationCountry
         let vlocationzip = this.state.locationzip
         let vlocationlatlong = this.state.locationlatlong

         let updateID = parseInt(this.props.showSpeciSubA.id)
         let updateObject={}
         updateObject.value=valueName
        //  updateObject.attribute_id=1
         updateObject.status=1

         updateObject["childrens"] =[{
                children_value:vlocationShortCode,
                children_id:this.props.showSpeciSubA.sub_attributeschild[7].id,
                children_name:'Short Code'
                },
                {
                    children_value:vlocationTypevalue,
                    children_id:this.props.showSpeciSubA.sub_attributeschild[6].id,
                    children_name:'Location Type'
                },
                {
                    children_value:vlocationAddress,
                    children_id:this.props.showSpeciSubA.sub_attributeschild[5].id,
                    children_name:'Address'
                },
                {
                    children_value:vlocationCity,
                    children_id:this.props.showSpeciSubA.sub_attributeschild[4].id,
                    children_name:'City'
                },
                {
                    children_value:vlocationState,
                    children_id:this.props.showSpeciSubA.sub_attributeschild[3].id,
                    children_name:'State'
                },
                {
                    children_value:vlocationCountry,
                    children_id:this.props.showSpeciSubA.sub_attributeschild[2].id,
                    children_name:'Country'
                },
                {
                    children_value:vlocationzip,
                    children_id:this.props.showSpeciSubA.sub_attributeschild[1].id,
                    children_name:'Zip'
                },
                {
                    children_value:vlocationlatlong,
                    children_id:this.props.showSpeciSubA.sub_attributeschild[0].id,
                    children_name:'Lat/Long'
                }
            ]
            
        if(this.validate()){
            let res=   this.props.handleSubAttributeUpdate(updateID, updateObject)
                res.then(res=>{
                    this.props.getAllSubAttribute(18)
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
                    locationName: '',
                    locationShortCode: "",
                    locationTypevalue: 0,
                    locationAddress: "",
                    locationCity: "",
                    locationState: 0,
                    locationCountry: 0,
                    locationzip: "",
                    locationlatlong: ""
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
                <h4 className="p-15 mb-0">Inventory Locations</h4>
                <hr className="m-0"/>
                <div className="ContentSection p-15">
                    <div className="row">
                        <div className="col-md-12 col-lg-12">
                            <div className="row d-flex align-items-center mb-3">
                                <div class="col-md-6 col-lg-4">  
                                    <label>Location Name</label>
                                    <div>
                                        <input type="text"
                                        className={this.state.isEditing===false ? "form-control" : "formControl2 abcd" }
                                            name="locationName"
                                        value={this.state.locationName}
                                            placeholder="Name" onChange={this.handleZoneInputAction2}/>
                                        {this.state.errorObj.locationName!==0?<span style={{fontSize:"small",color:"red"}}>Enter Location Name</span>:""}
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-4 mt-3 mt-md-0">  
                                    <label>Short Code (6 Char)</label>
                                    <div>
                                        <input type="text" 
                                        className={this.state.isEditing===false ? "form-control" : "formControl2 abcd" }
                                            placeholder="Code"
                                            maxLength="6"
                                            name="locationShortCode" 
                                            value={this.state.locationShortCode}  
                                            onChange={this.handleZoneInputAction}/>
                                        {this.state.errorObj.locationShortCode!==0?<span style={{fontSize:"small",color:"red"}}>Enter Short Code</span>:""}
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-4 mt-3 mt-md-0">  
                                    <label>Location Type</label>
                                    <select class="form-control" style={{cursor:"pointer"}}  id="locationTypevalue" onChange={this.handleInputlocationTypevalue}
                                    value={this.state.locationTypevalue}>
                                            <option value="0" >None</option>
                                            
                                            {this.props.locationTypesList !== undefined?this.props.locationTypesList.filter(attributeData=>attributeData.id ===17).map(filterData=>{
                                                    return (filterData.subattributes.map(subData=>{
                                                        return(<option value={subData.id}>{subData.value}</option>)
                                                    }))
                                                })                          
                                            :""}
                                    </select>
                                </div>
                            </div>
                            <div class="row d-flex align-items-center mb-3">
                                <div class="col-md-6 col-lg-4">  
                                    <label>Address</label>
                                    <div>
                                        <input type="text"
                                        className={this.state.isEditing===false ? "form-control" : "formControl2 abcd" }
                                            name="locationAddress"
                                        value={this.state.locationAddress}
                                            placeholder="Address" onChange={this.handleInputlocationAddress}/>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-4 mt-3 mt-md-0">  
                                    <label>City</label>
                                    <div>
                                        <input type="text"
                                        className={this.state.isEditing===false ? "form-control" : "formControl2 abcd" }
                                            name="locationCity"
                                        value={this.state.locationCity}
                                            placeholder="City" onChange={this.handleInputlocationCity}/>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-4 mt-3 mt-md-0">  
                                    <div class="row d-flex align-items-center">
                                        <div class="col-md-6 col-lg-6">
                                            <label>Prov/State</label>
                                            <select className="form-control" style={{cursor:"pointer"}} id="state"  value={this.state.locationState}  onChange={this.handleInputlocationState}>
                                                <option value="" selected>Select State</option>
                                                <option value="Dundas">Dundas</option>
                                            </select>
                                        </div>
                                        <div class="col-md-6 col-lg-6 mt-3 mt-md-0">
                                            <label>Country</label>
                                            <select className="form-control" style={{cursor:"pointer"}} id="locationCountry"  value={this.state.locationCountry}   placeholder="Country" onChange={this.handleInputlocationCountry} >
                                                <option value="" selected>Select Country</option>
                                                <option alue="Canada">Canada</option>
                                                <option alue="USA">USA</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row d-flex align-items-center mb-3">
                                <div class="col-md-6 col-lg-4">  
                                    <label>Postal/Zip</label>
                                    <div>
                                        <input type="text"
                                        className={this.state.isEditing===false ? "form-control" : "formControl2 abcd" }
                                            name="locationzip"
                                        value={this.state.locationzip}
                                            placeholder="Postal/Zip" onChange={this.handleInputloationzip}/>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-4 mt-3 mt-md-0">  
                                    <label>Lat/Long <span><img src="assets/img/map-marker-blue.svg"/></span></label>
                                    <div>
                                        <input type="text"
                                        className={this.state.isEditing===false ? "form-control" : "formControl2 abcd" }
                                            name="locationlatlong"
                                        value={this.state.locationlatlong}
                                            placeholder="Lat/Long" onChange={this.handleInputlocationlatlong}/>
                                    </div>
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
                    </div>
                    <div class="row mt-5 mb-4">
                        <div class="col-md-8">
                            <div class="row">
                                <div class="col">
                                <div class="card midCard">
                                    <div class="card-header">
                                        Inactive
                                    </div>
                                    <div class="card-body p-0"
                                        onDragOver={(e)=>this.onDragOver(e)}
                                        onDrop={(e)=>{this.onDrop(e,"inactive")}}>
                                        <ul class="list-unstyled formAddressList mb-0">
                                            {tasks.inactive.map(t=>{
                                            return <li id={t.id} name={t.id} onDragStart={(e)=>this.onDragStart(e, t.id)} onDelete={(e)=>this.onDelete(e, t.id)} draggable >
                                                        <a className="d-flex justify-content-between align-items-center">
                                                            <img class="arrowIc" src="assets/img/arrow-right-ic.svg"/>
                                                            <div>
                                                                <label><span id="Wheathers" className={this.state.isEditing===false  ? "" :this.state.selectedID === t.id ? "reasonBackground" : " "}>{t.value}</span></label>
                                                                    <h5><span>{t.value}</span></h5>
                                                                <label><span>{t.sub_attributeschild[5].value}</span><br/><span>{t.sub_attributeschild[4].value}</span>, <span>{t.sub_attributeschild[3].value}</span>, <span>{t.sub_attributeschild[2].value}</span></label>
                                                            </div>
                                                            <img class="mapMarkerIc" src="assets/img/map-marker-blue.svg"/>
                                                        
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
                            <div className="col-lg-2" >
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
                                    <div class="card-body p-0" onDragOver={(e)=>{this.onDragOver(e)}} onDrop={(e)=>this.onDrop(e,"active")}>
                                        <ul class="list-unstyled formAddressList mb-0">
                                                {tasks.active !=undefined ?tasks.active.map(t=>{
                                                return <li id={t.id} name={t.id} onDragStart={(e)=>this.onDragStart(e, t.id)} onMouseLeave={(e)=>this.onMouseLeave(e, t.id)} onDelete={(e)=>this.onDelete(e, t.id)} draggable >
                                                            <a className="d-flex justify-content-between align-items-center">
                                                                <img class="arrowIc" src="assets/img/arrow-right-ic.svg"/>
                                                                <div>
                                                                    <label><span id="Wheathers" className={this.state.isEditing===false  ? "" :this.state.selectedID === t.id ? "reasonBackground" : " "}>{t.value}</span></label>
                                                                        <h5><span>{t.value}</span></h5>
                                                                    <label><span>{t.sub_attributeschild[5].value}</span><br/><span>{t.sub_attributeschild[4].value}</span>, <span>{t.sub_attributeschild[3].value}</span>, <span>{t.sub_attributeschild[2].value}</span></label>
                                                                </div>
                                                                <img class="mapMarkerIc" src="assets/img/map-marker-blue.svg"/>
                                                            
                                                                <span style={{float:"right",fontSize:20, cursor:"pointer", color:"#629c44"}}><MdIcons.MdEdit  
                                                                    onClick={() =>this.handleEditClick2(t)}
                                                                /></span>
                                                            </a>
                                                        </li>
                                                }):""}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="row mb-3">
                                <div class="col-md-12">  
                                    <label>Current Location</label>
                                    <input class="form-control" placeholder="" disabled="disabled" value="Farm-E > Area A "/>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-md-12 col-lg-12">  
                                    <label>Location Type</label>
                                    <select class="form-control" style={{cursor:"pointer"}}  id="locationTypevaluechild" onChange={this.handleInputlocationTypevalueChild}
                                    value={this.state.locationTypevaluechild}>
                                            <option value="0" >None</option>
                                            
                                            {this.props.locationTypesList !== undefined?this.props.locationTypesList.filter(attributeData=>attributeData.id ===17).map(filterData=>{
                                                    return (filterData.subattributes.map(subData=>{
                                                        return(<option value={subData.id}>{subData.value}</option>)
                                                    }))
                                                })                          
                                            :""}
                                    </select>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-md-12">  
                                    <label>Describe your Row (8 Char)</label>
                                    <input class="form-control" placeholder="" value="Daisy "/>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-md-12">  
                                    <label>Preview</label>
                                    <input class="form-control" placeholder="" disabled="disabled" value="Row Daisy "/>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-md-12">  
                                        <a href="javascript:;" class="d-flex align-items-center">
                                        <i class="fa fa-plus-circle fa-2x mr-2"></i> Add Child Location
                                    </a>
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
        locationName:state.attributeData.subAttributeName.locationName,
        locationShortCode:state.attributeData.subAttributeName.locationShortCode,
        locationAddress:state.attributeData.subAttributeName.locationAddress,
        locationCity:state.attributeData.subAttributeName.locationCity,
        locationState:state.attributeData.subAttributeName.locationState,
        locationCountry:state.attributeData.subAttributeName.locationCountry,
        locationzip:state.attributeData.subAttributeName.locationzip,
        locationlatlong:state.attributeData.subAttributeName.locationlatlong,
        locationTypevalue:state.attributeData.subAttributeName.locationTypevalue,
        showSpeciSubA: state.attributeData.specificSubAttribute,
        locationTypesList: state.attributeData.locationTypesSubAttributeList
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
    getAllLocationTypesSubAttribute,    
})(InventoryLocation)