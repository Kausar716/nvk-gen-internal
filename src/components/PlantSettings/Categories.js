/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { Component ,useEffect} from 'react'
import * as MdIcons from "react-icons/md";
import {connect} from "react-redux";
import Sortable from 'sortablejs'
import 'react-confirm-alert/src/react-confirm-alert.css';
import { confirmAlert } from 'react-confirm-alert'; 
// import './style.css';
//import {getAllSubAttribute,handleAttributeDragDrop,handleAttributeDragSort,handleAttributeDelete,handlePositionInputAction,handleAddPosition,handleSubAttributeUpdate, showSubSubAttribute} from '../../actions/attributeAction'
import {getAllPlantCategories,handleCategoryInputAction,handleCategoryDragSort,handleAddCategory,
    updatePlantSettingCategory, showSpecificPlantSettingAttribute, handleDragDrop,handleCategoryDelete} from '../../actions/categoryAction'

import {showSubSubAttribute} from '../../actions/attributeAction'
    class Categories extends Component {
        constructor(props){
            super()
                this.state={
                    errorObj:{
                        formSku:0,
                        Category:0
                    },
                    sortId: 0,
                    activeId: 0,
                    isEditing:false,
                    name:'',
                    subName:'',
                    subName2:'',
                    selectedID:'',
                    btnLabelAdd:'Add New Category',
                    btnLabelUpdate: 'Update Category',
                    btnLabelCancel:'Cancel',
                    deleteon:false,
                    startID:0,
                        inactive:[],
                        active:[],
                    
                }
            
        }

    getCatgoryData = ()=>{
        let data = {};
        let active= this.props.plantCategoryList.filter(data=>data.status ==1)
       let inactive=this.props.plantCategoryList.filter(data=>data.status ==0)
        this.setState({active:active,inactive:inactive})
    }
componentDidMount(){
    

    var elData = document.getElementById('categoryActive');
    var elData1 = document.getElementById('categoryInactive');
    this.props.getAllPlantCategories().then(()=>{
        // alert("ji")
        this.getCatgoryData()
    })
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

onDragOver = (ev)=>{
    ev.preventDefault();
}
startIDData  =(e)=>{
    this.setState({selectedID:e.item.id})
}
onAddData = (evt)=>{
    console.log(evt)
    // evt.preventDefault()

    const referenceNode = (evt.nextSibling && evt.nextSibling.parentNode !== null) ? evt.nextSibling : null; 
 evt.from.insertBefore(evt.item, null); 

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
            this.props.handleDragDrop(task[0]).then(data=>{
                this.props.getAllPlantCategories().then(()=>{
                    // alert("ji")
                    this.getCatgoryData()
                })
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
            this.props.handleDragDrop(task[0]).then(data=>{
                this.props.getAllPlantCategories().then(()=>{
                    // alert("ji")
                    this.getCatgoryData()
                })
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
    
        onDrop=(evt)=>{
            if(evt.newIndex !==evt.oldIndex)
            return
            // alert("dropping")
  
            //console.log(evt)
            let id= evt.item.id


            let oldIndex  = this.state.tasks.active[evt.oldIndex]
            let newIndex  = this.state.tasks.active[evt.newIndex]
           let doProcess = false;
           let alertmsg = 0;
        
                let result= this.props.handleCategoryDragSort(oldIndex.id,newIndex.id)
                result.then(res=>{
                    // this.props.getAllPlantCategories()
                }) 
                alertmsg = 3;
  

        }



        onDelete =(ev)=>{
            let id= this.state.selectedID
            // alert(id)
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
            // alert(id)
            let result= this.props.handleCategoryDelete(id)
            this.setState({deleteon:true})
            result.then(res=>{
              
               
                this.props.getAllPlantCategories().then(()=>{
                    // alert("ji")
                    this.setState({deleteon:false})
                    this.getCatgoryData()
                })
             
            }).catch(data=>{
                 this.setState({deleteon:false})

                    confirmAlert({
                    title: 'Alert',
                    message: 'Please note that this item is associated with Plants.Please reassign before deleting ',
                    buttons: [
                      {
                        label: 'Ok'
                      }
                    ]
                  });
            })
        }






        handleCategoryInputAction = (e)=>{


            this.props.handleCategoryInputAction(e.target.value)
        }





        handleAddCategory = (e)=>{
        if(this.validate()){
            let result = this.props.handleAddCategory(this.props.name)
            result.then(res=>{
                this.props.getAllPlantCategories().then(()=>{
                    // alert("ji")
                    this.getCatgoryData()
                })
            })
            // confirmAlert({
            //     title: 'Added Successfully',
            //     message: 'Category Type',
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
            if(this.state.name.length === 0){
                errorObj.Category=1
                this.setState({errorObj})
                return false
            }

            return true
            
        }



        handlePositionInputAction = (e)=>{
            this.setState({
                name:e.target.value
            })

            let errorObj=this.state.errorObj
        if(e.target.name === "Category"){
            errorObj.Category=0
            this.setState({errorObj})}

            this.props.handleCategoryInputAction(e.target.value)

        }


        handleClear=()=>{
            let errorObj = this.state.errorObj
            errorObj.Category=0
            //errorObj.locationTypeShortCode=0
            this.setState({name: "", subName:"", isEditing:false, selectedID:'', errorObj})
        }


        handleAddCategoryUpdate=()=>{
            // debugger;
          // this.props.handleSubAttributeUpdate(e.target.id)
          
          let updateID = parseInt(this.props.showSpecificPlantCategory.id)
          let updateObject={}
          updateObject.name=this.state.name
         // updateObject.id=this.props.showSpeciSubA.id
             
            //   let res1=   this.props.updatePlantSettingCategory(updateID, updateObject)
            //   res1.then(res=>{
            //       this.props.getAllPlantCategories()
            //   })
  
            //   this.setState({
            //       isEditing:false,
            //       name:""
            //   })

              if(this.validate()){
                let res=   this.props.updatePlantSettingCategory(updateID, updateObject)
                    res.then(res=>{
                        this.props.getAllPlantCategories().then(()=>{
                            // alert("ji")
                            this.getCatgoryData()
                        })
                    })
                    if (this.state.isEditing) {
                        // confirmAlert({
                        //     title: 'Updated Successfully',
                        //     message: 'Category Type',
                        //     buttons: [
                        //       {
                        //         label: 'Ok'
                        //       }
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




        handleEditClick2 =(t)=> {

            //console.log("ttt", t)
            // debugger;
             
         this.setState({
             name: t.name,
             isEditing:true,
             selectedID:t.id,
         })
         this.props.handleCategoryInputAction(...this.state.name)
         // this.props.handleCategoryInputAction("Category",...this.state.name)
          this.props.showSpecificPlantSettingAttribute(t.id)
       }

    getId =(e)=>{
       this.setState({startID:e.target.id})

    }
    
render() {

    //console.log("plantCategoryList",this.props.plantCategoryList)

    //console.log("showSpecificPlantCategory", this.props.showSpecificPlantCategory)
    // this.props.plantCategoryList.forEach((t)=>{
    //         tasks[t.category].push(
    //             <div key={t.name} onDragStart={(e)=>this.onDragStart(e, t.name)} onDelete={(e)=>this.onDelete(e, t.name)} draggable className="draggable" style={{backgroundColor:t.bgcolor}}>
    //                     {t.name}
    //             </div>
    //         )
    // });


//   alert("nice")
    
        return (
           
                   <div>
               <div className="bg-white">
                            <h4 className="p-15 mb-0">Categories</h4>
                            <hr className="m-0"/>
                            <div className="ContentSection p-15">
                                <div className="row">
                                    <div className="col-md-12 col-lg-12">
                                        <p>Category Name</p>

                                        {/* <div className="row d-flex align-items-center">
                                            <div className="col-md-6 col-lg-6">  
                                                <input type="text" className="form-control" name="name" value={this.props.name}   placeholder="Category" onChange={this.handleCategoryInputAction}/>
                                            </div>
                                            <div className="col-md-6 col-lg-3" onClick={this.handleAddCategory}>
                                                <a href="javascript:" className="d-flex align-items-center" >
                                                    <i className="fa fa-plus-circle fa-2x mr-2"></i> Add New Category
                                                </a>
                                            </div>
                                        </div> */}
                                        <div className="row d-flex align-items-center">
                                        <div className="col-md-6 col-lg-6">  
                                                <input type="text" 
                                                className={this.state.isEditing===false ? "form-control" : "formControl2 abcd" }
                                                name="Category" 
                                                value={this.state.name}
                                                 placeholder="Category" onChange={this.handlePositionInputAction}/>
                                                  {this.state.errorObj.Category!==0?<span style={{fontSize:"small",color:"red"}}>Enter Category Name</span>:""}
                                            </div>


                                            {/* {this.state.isEditing ? (
                                                <div className="col-md-6 col-lg-3" onClick={this.handleAddCategoryUpdate}>
                                                    <div >
                                                    <a href="javascript:" className="d-flex align-items-center">
                                                        <i className="fa fa-plus-circle fa-2x mr-2"></i> Update Category
                                                    </a>
                                                    </div>

                                                    <div className="col-md-6 col-lg-3"  onClick={()=>{this.setState({isEditing:false})}}>
                                                    <a href="javascript:" className="d-flex align-items-center cancel_signlebox" style={{marginLeft:"12em"}}>
                                                        Cancel 
                                                    </a>
                                                    </div>
                                                </div>  
                                            ):
                                            (
                                                <div className="col-md-6 col-lg-3" onClick={this.handleAddCategory}>
                                                <a href="javascript:" className="d-flex align-items-center">
                                                    <i className="fa fa-plus-circle fa-2x mr-2"></i> Add New Category
                                                </a>
                                                </div>  
                                                )}  */}


                                        <div className="d-flex justify-content-md-end mt-2"  >
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
                                           >
                                           <React.Fragment>
                                            <ul class="list-unstyled" id="categoryInactive" >
                                         
                                                   {this.props.plantCategoryList.filter(data=>data.status ==0).map(t=>{
                                                    
                                                    return <li id={t.id}>
                                                        <div class="showElipse">
                                                        <div className={this.state.isEditing===false  ? "a" :this.state.selectedID === t.id ? "reasonBackground a" : "a"}><span id={t.id}    >{t.name}</span>
                                                        
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
                                               
                                            </React.Fragment>

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
                                            <div className="deleteSpace" onDrop={(e)=>this.onDelete(e)} onDragOver={(e)=>{this.onDragOver(e)}}>
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
                                            <div class="card-body cardBg" >
                                            <React.Fragment>
                                            <ul class="list-unstyled" id="categoryActive" >
                                           
                                                   {this.props.plantCategoryList.filter(data=>data.status ==1).map(t=>{
                                                    return <li id={t.id}>
                                                        <div class="showElipse">
                                                        <div className={this.state.isEditing===false  ? "a" :this.state.selectedID === t.id ? "reasonBackground a" : "a"}><span id={t.id}    >{t.name}</span>
                                                        
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
                                            </React.Fragment>
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
        // //console.log(state)
         {
        
    plantCategoryList:state.categoryData.plantCategoryData,
    temp:state,
    name:state.categoryData.name,
    showSpecificPlantCategory:state.categoryData.showSpecificPlantCategory
    }
    )
    export default connect(mapStateToProps,{
        getAllPlantCategories,
        handleCategoryInputAction,
        handleAddCategory,
        handleDragDrop,
        handleCategoryDragSort,
        handleCategoryDelete,
        showSpecificPlantSettingAttribute,
        updatePlantSettingCategory,
        showSubSubAttribute
    })(Categories)

