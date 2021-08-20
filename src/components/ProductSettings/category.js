/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { Component } from 'react'
import {connect} from "react-redux";
import * as MdIcons from "react-icons/md";
import Sortable from 'sortablejs'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';
import {getAllPlantCategories,handleCategoryInputAction,handleCategoryDragSort,
    updatePlantSettingCategory, showSpecificPlantSettingAttribute, handleDragDrop,handleCategoryDelete} from '../../actions/categoryAction'
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
            btnLabelUpdateFeature: 'Update Sub Category',
            active:[],inactive:[],openInactive:[],openActive:[]
        }
                
    }

    getCatgoryData = ()=>{
        let data = {};
        let active= this.props.zoneCategoryList.filter(data=>data.status ==1)
       let inactive=this.props.zoneCategoryList.filter(data=>data.status ==0)
       let openActive=[]
       let openInactive=[]
       this.props.zoneCategoryList.map(data=>{
        if(data.status ==1){
            openActive.push(0)
            // this.setState({active:active,inactive:inactive,openInactive:openInactive,openActive:openActive})

        }

       })
       this.props.zoneCategoryList.map(data=>{
        if(data.status ==0){
            openInactive.push(0)
            // this.setState({active:active,inactive:inactive,openInactive:openInactive,openActive:openActive})

        }

       })
     
        this.setState({active:active,inactive:inactive,openInactive:openInactive,openActive:openActive})
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
        this.props.handleCategoryDragSort(evt.dragged.id,evt.related.id,"down")
        else  this.props.handleCategoryDragSort(evt.dragged.id,evt.related.id,"up")
    
       }else{
           if(evt.from.id =="categoryActive"){
              let task= this.state.active.filter(data=>data.id ==evt.dragged.id)
              //console.log(task)

              if(task.length > 0){
                let taskData = task[0]
                taskData.status =parseInt(taskData.status)==1? 0:1
                this.props.handleUpdateCategory(taskData.id,taskData).then(data=>{
   
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
                let taskData = task[0]
                taskData.status =parseInt(taskData.status)==1? 0:1
                this.props.handleUpdateCategory(taskData.id,taskData).then(data=>{
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
    this.props.getAllCategories().then(()=>{
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
            this.props.getAllCategories().then(()=>{
                // alert("ji")
                this.getCatgoryData()
            })
            this.setState({deleteon:false})
    
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
                this.props.getAllCategories().then(()=>{
                    // alert("ji")
                    this.getCatgoryData()
                })
            })
      
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
                    this.props.getAllCategories().then(()=>{
                        // alert("ji")
                        this.getCatgoryData()
                    })
                })
        
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
                        this.props.getAllCategories().then(()=>{
                            // alert("ji")
                            this.getCatgoryData()
                        })
                    })
        
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
                    this.props.getAllCategories().then(()=>{
                        // alert("ji")
                        this.getCatgoryData()
                    })
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
    openLinkData = (index,type)=>{
        // alert(index)
        if(type=== "active"){
            let data = this.state.openActive
            data[index] = data[index]==0?1:0
            // alert(data[index]+" "+index)
            console.log(data)
            this.setState({openActive:data})
        }else if(type=== "inactive"){
            let data = this.state.openInactive
            data[index] = data[index]==0?1:0
            this.setState({openInactive:data})

        }

    }
    render() {
        // var tasks={
        //     inactive:[],
        //     active:[],
        // }
        // if(this.props.zoneCategoryList){
        //     this.props.zoneCategoryList.forEach((t)=>{
        //         if(t.status === "1"){
        //             tasks.active.push(t)
        //         }
        //         else if(t.status=== "0"){
        //             tasks.inactive.push(t)
        //         }
        //     })
        // }
        
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
                             >
                                    <ul class="list-unstyled" id="categoryInactive" >
                                        {this.state.inactive.map((t,index)=>{
                                        return <li id={t.id}>
                                                        <div class="showElipse">
                                                        <div className={this.state.isEditing===false  ? "a" :this.state.selectedID === t.id ? "reasonBackground a" : "a"}><span id={t.id}    >{t.name}</span>
                                                        
                                                        </div>
                                                        <span style={{float:"right",fontSize:20, cursor:"pointer", color:"#629c44",marginTop:"-28px"}}  id={t.id}><MdIcons.MdEdit  
                                                                onClick={() =>this.handleEditClick2(t,"active")}
                                                                />   <i class="fa fa-th" onClick={()=>this.openLinkData(index,"inactive")}></i></span>
                                                        </div>

                                                        <div class={parseInt(this.state.openInactive[index])==1?"openChildData":"closeChildData"}>
                                                        <ul class={"list-unstyled childUl"}>
                                                            {t.sub_category.map((t1,index)=>{
                                                                return <li id={t.id}>
                                                        <div class="showElipse">
                                                        <div className={this.state.isEditingSubCategory===false  ? "ab" :this.state.selectedSubID === t1.id ? "reasonBackground ab" : "ab"}><span id={t1.id}    >{t1.name}</span>
                                                        
                                                        </div>
                                                        <span style={{float:"right",fontSize:20, cursor:"pointer", color:"#629c44",marginTop:"-28px"}}  id={t1.id}><MdIcons.MdEdit  
                                                                onClick={() =>this.handleEditClick3(t, t1,"active")}
                                                                /> <i class="fa fa-th-large" style={{fontSize: 12}} ></i></span>
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
                            <div class="card midCard" >
                                <div class="card-header"  >
                                    Active
                                </div>
                                <div class="card-body cardBg" >
                                    <ul class="list-unstyled" id="categoryActive">
                                            {this.state.active.map((t,index1)=>{
                                            return <li id={t.id}>
                                                        <div class="showElipse">
                                                        <div className={this.state.isEditing===false  ? "a" :this.state.selectedID === t.id ? "reasonBackground a" : "a"}><span id={t.id}    >{t.name}</span>
                                                        
                                                        </div>
                                                        <span style={{float:"right",fontSize:20, cursor:"pointer", color:"#629c44",marginTop:"-28px"}}  id={t.id}><MdIcons.MdEdit  
                                                                onClick={() =>this.handleEditClick2(t,"active")}
                                                                />   <i class="fa fa-th" onClick={()=>this.openLinkData(index1,"active")}></i></span>
                                                        </div>

                                                        <div class={parseInt(this.state.openActive[index1])==1?"openChildData":"closeChildData"}>
                                                        <ul class={"list-unstyled childUl"}>
                                                            {t.sub_category.map((t1,index)=>{
                                                                return <li id={t.id}>
                                                        <div class="showElipse">
                                                        <div className={this.state.isEditingSubCategory===false  ? "ab" :this.state.selectedSubID === t1.id ? "reasonBackground ab" : "ab"}><span id={t1.id}    >{t1.name}</span>
                                                        
                                                        </div>
                                                        <span style={{float:"right",fontSize:20, cursor:"pointer", color:"#629c44",marginTop:"-28px"}}  id={t1.id}><MdIcons.MdEdit  
                                                                onClick={() =>this.handleEditClick3(t, t1,"active")}
                                                                /> <i class="fa fa-th-large" style={{fontSize: 12}} ></i></span>
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
    handleCategoryDragSort
})(Category)
