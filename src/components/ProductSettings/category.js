/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { Component } from 'react'
import {connect} from "react-redux";
import * as MdIcons from "react-icons/md";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';

import 
    {
        getAllCategories, 
        handleCategoryDragDrop,
        handleAttributeDragSort,
        handleAttributeDelete,
        handCategoryDelete,
        handleZoneInputAction,
        handleAddCategory, 
        handleAddSubCategory,
        handleUpdateSubCategory,
        showSubSubAttribute, 
        handleUpdateCategory, 
        handleZoneInputAction2
    } 
from '../../actions/attributeAction'

class Category extends Component {
    constructor(props){
        super()
        this.state={
            errorObj:{
                categoryName:0,
                subCategoryName:0
            },
            sortId: 0,
            activeId: 0,
            isEditing:false,
            name:'',
            subName:'',
            subName2:'',
            selectedID:'',
            selectedSubID:'',
            btnLabelAdd:'Add New Category',
            btnLabelUpdate: 'Update Category',
            btnLabelCancel:'Cancel',
            deleteon:false,
            isEditingSubCategory:false,
            btnLabelAddFeature:'Add New Sub Category',
            btnLabelUpdateFeature: 'Update Sub Category'
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
        this.props.getAllCategories()
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
        if (cat === 'active' && tasks[0].status === "0") {
            doProcess = true;
            alertmsg = 1;
        }
        if (cat === 'inactive' && tasks[0].status === "1") {
            doProcess = true;
            alertmsg = 2;
        }
        if (doProcess === true) {
            let result= this.props.handleCategoryDragDrop(tasks[0])
            result.then(res=>{
                this.props.getAllCategories()
            })   
        }
        if (doProcess === false && cat === 'active' && tasks[0].status === 1 && this.state.sortId !== this.state.activeId) {
            let result= this.props.handleAttributeDragSort(this.state.activeId, this.state.sortId)
            result.then(res=>{
                this.props.getAllCategories()
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
            title: 'Delete Category',
            message: 'Are you sure want to delete the Category?',
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
        let result= this.props.handCategoryDelete(id)
        this.setState({deleteon:true})
        result.then(res=>{
            this.props.getAllCategories()
            this.setState({deleteon:false})
            confirmAlert({
                title: 'Delete Successfully',
                message: 'Category ',
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
        if(e.target.name === "subCategoryName"){
        errorObj.subCategoryName=0
        this.setState({errorObj})}

        this.props.handleZoneInputAction("subCategoryName",e.target.value)
    }

    handleZoneInputAction2 = (e)=>{
        // debugger;
        this.setState({
            name:e.target.value
        })
        let errorObj=this.state.errorObj
        if(e.target.name === "categoryName"){
            errorObj.categoryName=0
            this.setState({errorObj})}


        this.props.handleZoneInputAction2("categoryName",e.target.value)
    }

    handleAddCategory = (e)=>{
    
        let zoneObj={}  
        zoneObj.name = this.state.name
        zoneObj.status=1
        if(this.validate()){
            let result = this.props.handleAddCategory(zoneObj)
            result.then(res=>{
                this.props.getAllCategories()
            })
            confirmAlert({
                title: 'Added Successfully',
                message: 'Category',
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
            errorObj.categoryName=1
            this.setState({errorObj})
            return false
        }
        return true
        
    }

    handleAddSubCategory = (e)=>{
        if (this.state.selectedID === "" || this.state.selectedID === undefined) {
            confirmAlert({
                title: 'Select Category',
                message: 'To Add Sub Category Name',
                buttons: [
                  {
                    label: 'Ok'
                  }
                ]
            });
        } else {
            let zoneObj={}
            zoneObj.category_id = parseInt(this.state.selectedID) 
            zoneObj.name=this.state.subName
            zoneObj.status=1
            if(this.validateFeature()){
                let result = this.props.handleAddSubCategory(zoneObj)
                result.then(res=>{
                    this.props.getAllCategories()
                })
                confirmAlert({
                    title: 'Added Successfully',
                    message: 'Sub Category Name',
                    buttons: [
                    {
                        label: 'Ok'
                    }
                    ]
                });
                this.setState({
                    subName:"",
                    isEditingSubCategory:false,
                })
            } 
        }       
    }
    handleUpdateSubCategory = (e)=>{
        if (this.state.selectedID === "" || this.state.selectedID === undefined) {
            confirmAlert({
                title: 'Select Category',
                message: 'To Add Sub Category Name',
                buttons: [
                  {
                    label: 'Ok'
                  }
                ]
            });
        } else {
            if (this.state.selectedSubID === "" || this.state.selectedSubID === undefined) {
                confirmAlert({
                    title: 'Select Sub Category',
                    message: 'To Update Sub Category Name',
                    buttons: [
                      {
                        label: 'Ok'
                      }
                    ]
                });
            } else {
                let updateID = this.state.selectedSubID;
                let zoneObj={}
                zoneObj.category_id = parseInt(this.state.selectedID) 
                zoneObj.name=this.state.subName
                zoneObj.status=1
                if(this.validateFeature()){
                    let result = this.props.handleUpdateSubCategory(updateID, zoneObj)
                    result.then(res=>{
                        this.props.getAllCategories()
                    })
                    confirmAlert({
                        title: 'Updated Successfully',
                        message: 'Sub Category Name',
                        buttons: [
                        {
                            label: 'Ok'
                        }
                        ]
                    });
                    this.setState({
                        subName:"",
                        isEditingSubCategory:false,
                    })
                } 
            }
        }       
    }
    validateFeature = ()=>{
        let errorObj = this.state.errorObj
        if(this.state.subName.length === 0){
            errorObj.subCategoryName=1
            this.setState({errorObj})
            return false
        }
        return true
        
    }
    handleEditClick2 =(t)=> { 
        this.setState({
            name: t.name,
            isEditing:true,
            selectedID:t.id,
        })
        this.props.handleZoneInputAction2("categoryName",this.state.name)
        this.props.showSubSubAttribute(t.id)
    }
    handleEditClick3 =(t, tchild)=> {
        this.handleEditClick2(t);
        this.setState({
            subName:tchild.name,
            isEditingSubCategory:true,
            selectedSubID:tchild.id,
        })

        this.props.handleZoneInputAction2("subCategoryName",this.state.subName)
    }

    handleClear=()=>{
        let errorObj = this.state.errorObj
        errorObj.categoryName=0
        errorObj.subCategoryName=0
        this.setState({name: "", subName:"", isEditing:false, selectedID:'', isEditingSubCategory:false, selectedSubID:'', errorObj})
    }
    handleClearFeature=()=>{
        let errorObj = this.state.errorObj
        errorObj.subCategoryName=0
        this.setState({subName:"", isEditingSubCategory:false, selectedSubID:'', errorObj})
    }

    handleAddCategoryUpdate=(e)=>{
        // debugger;
         let valueName = this.state.name
         let updateID = parseInt(this.state.selectedID)
         let updateObject={}
         updateObject.name=valueName
         updateObject.status=1
            
        if(this.validate()){
            let res=   this.props.handleUpdateCategory(updateID, updateObject)
                res.then(res=>{
                    this.props.getAllCategories()
                })
                if (this.state.isEditing) {
                    confirmAlert({
                        title: 'Updated Successfully',
                        message: 'Category',
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
                if(t.status === "1"){
                    tasks.active.push(t)
                }
                else if(t.status=== "0"){
                    tasks.inactive.push(t)
                }
            })
        }
        
        return (
        <>
            <div className="bg-white">
                <h4 className="p-15 mb-0">Categories</h4>
                <hr className="m-0"/>
                <div className="ContentSection p-15">
                    <div className="row">
                        <div className="col-md-6">
                            <label>Main Category Name</label>
                            <div>
                                <input type="text"
                                className={this.state.isEditing===false ? "form-control" : "formControl2 abcd" }
                                    name="categoryName"
                                value={this.state.name}
                                    placeholder="Main Category Name" onChange={this.handleZoneInputAction2}/>
                                {this.state.errorObj.categoryName!==0?<span style={{fontSize:"small",color:"red"}}>Enter Main Category Name</span>:""}
                            </div>

                            <div className="d-flex justify-content-md-end mt-2">
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
                        <div className="col-md-6">
                        <label>Sub Category Name</label>
                            <div>
                                <input type="text"
                                className={this.state.isEditingSubCategory===false ? "form-control" : "formControl2 abcd" }
                                    name="subCategoryName"
                                value={this.state.subName}
                                    placeholder="Sub Category Name" onChange={this.handleZoneInputAction}/>
                                {this.state.errorObj.subCategoryName!==0?<span style={{fontSize:"small",color:"red"}}>Enter Sub Category Name</span>:""}
                            </div>

                            <div className="d-flex justify-content-md-end mt-2">
                                <div className="d-flex justify-content-md-end mt-2" style={{paddingTop:"10px"}} >
                                    <div >
                                        <a href="javascript:" className="d-flex align-items-center" onClick={this.state.isEditingSubCategory ? this.handleUpdateSubCategory : this.handleAddSubCategory}> 
                                            <i className="fa fa-plus-circle fa-2x mr-2"></i> {this.state.isEditingSubCategory ? this.state.btnLabelUpdateFeature : this.state.btnLabelAddFeature }
                                        </a>
                                    </div>
                                    <div className="d-flex justify-content-md-end mt-2"  onClick={this.handleClearFeature}>
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
                                                    <span id="Wheathers">{t.name}</span>
                                                    </a>
                                                </li>
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-1" >
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
                                                <i className ={`fa fa-trash ${this.state.deleteon===true?"trashShake":""}`}style={{fontSize:35,color:"red"}} ></i>
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
                                            return <li class="hasChild" id={t.id} name={t.id} onDragStart={(e)=>this.onDragStart(e, t.id)} onMouseLeave={(e)=>this.onMouseLeave(e, t.id)} onDelete={(e)=>this.onDelete(e, t.id)} draggable >
                                                        <a className="d-flex justify-content-between align-items-center">
                                                            <span id="Wheathers" className={this.state.isEditing===false  ? "" :this.state.selectedID === t.id ? "reasonBackground" : " "}>{t.name}</span>
                                                            <span style={{float:"right",fontSize:20, cursor:"pointer", color:"#629c44"}}><MdIcons.MdEdit  
                                                                onClick={() =>this.handleEditClick2(t)}/>
                                                                <i class="fa fa-th"></i>
                                                            </span>
                                                        </a>
                                                        <ul class="list-unstyled childUl">
                                                            {t.sub_category.map(t1=>{
                                                                return <li>
                                                                            <a class="d-flex justify-content-between align-items-center">
                                                                                <span className={this.state.isEditingSubCategory===false  ? "" :this.state.selectedSubID === t1.id ? "reasonBackground" : " "}>{t1.name}</span>
                                                                                <span style={{float:"right",fontSize:20, cursor:"pointer", color:"#629c44"}}><MdIcons.MdEdit  
                                                                                    onClick={() =>this.handleEditClick3(t, t1)}/>
                                                                                    <i class="fa fa-th-large" style={{fontSize: 12}}></i>
                                                                                </span>
                                                                            </a>
                                                                        </li>
                                                            })}
                                                        </ul>
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
        categoryName:state.attributeData.subAttributeName.categoryName,
        showSpeciSubA: state.attributeData.specificSubAttribute,
    })

export default connect(mapStateToProps,{
    getAllCategories,
    handleCategoryDragDrop,
    handleAttributeDragSort,
    handleAttributeDelete,
    handCategoryDelete,
    handleZoneInputAction,
    handleAddCategory,
    handleAddSubCategory,
    handleUpdateSubCategory,
    showSubSubAttribute,
    handleUpdateCategory, 
    handleZoneInputAction2,    
})(Category)