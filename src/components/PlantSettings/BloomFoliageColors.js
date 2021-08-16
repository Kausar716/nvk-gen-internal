/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { Component } from 'react';
import * as MdIcons from "react-icons/md";
import {connect} from "react-redux";
import { confirmAlert } from 'react-confirm-alert'; 
import Sortable from 'sortablejs'

 import './style.css';
import {getAllSubAttribute,handleAttributeDragDrop,handleAttributeDragSort,handleAttributeDelete,handleZoneInputAction,handleAddZone, showSubSubAttribute, handleSubAttributeUpdate} from '../../actions/attributeAction'

    class BloomFoliageColors extends Component {
        constructor(props){
            super()
                this.state={
                    errorObj:{
                        formSku:0,
                        bloomColor:0,
                    },
                    sortId: 0,
                    activeId: 0,
                    isEditing:false,
                    name:'',
                    subName:'',
                    subName2:'',
                    selectedID:'',
                    btnLabelAdd:'Add New Color Name ',
                    btnLabelUpdate: 'Update Color Name ',
                    btnLabelCancel:'Cancel',
                    deleteon:false,
                    active:[],
                    inactive:[],
                }
            
        }
        getCatgoryData = ()=>{
            let data = {};
            let active= this.props.zoneCategoryList.filter(data=>data.status ==1)
           let inactive=this.props.zoneCategoryList.filter(data=>data.status ==0)
            this.setState({active:active,inactive:inactive})
        }
        componentDidMount(){
            var elData = document.getElementById('categoryActive');
            var elData1 = document.getElementById('categoryInactive');
            this.props.getAllSubAttribute(14).then(()=>{
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
        // onMouseLeave =((ev, id)=>{
        //     let sortId=this.state.sortId
        //     sortId=id;
        //     this.setState({sortId})
        // })
        // onDrop=(ev,cat)=>{
        //     let id= ev.dataTransfer.getData("id");
        //     let tasks = this.props.zoneCategoryList.filter((task)=>{                
        //            return JSON.stringify(task.id) === id;
        //     });
        // //     console.log(tasks)
        // //     let result= this.props.handleAttributeDragDrop(tasks[0])
        // //     result.then(res=>{
        // //     this.props.getAllSubAttribute(14)
        // //    })
        //     let doProcess = false;
        //     let alertmsg = 0;
        //     if (cat === 'active' && tasks[0].status === 0) {
        //         doProcess = true;
        //         alertmsg = 1;
        //     }
        //     if (cat === 'inactive' && tasks[0].status === 1) {
        //         doProcess = true;
        //         alertmsg = 2;
        //     }
        //     if (doProcess === true) {
        //         let result= this.props.handleAttributeDragDrop(tasks[0])
        //         result.then(res=>{
        //             this.props.getAllSubAttribute(14)
        //         })   
        //     }
        //     if (doProcess === false && cat === 'active' && tasks[0].status === 1 && this.state.sortId !== this.state.activeId) {
        //         let result= this.props.handleAttributeDragSort(this.state.activeId, this.state.sortId)
        //         result.then(res=>{
        //             this.props.getAllSubAttribute(14)
        //         }) 
        //         alertmsg = 3;
        //     }
        //     // if (alertmsg === 1){
        //     //     alert('Successfully Moved from Inactive to Active');
        //     // }
        //     // if (alertmsg === 2){
        //     //     alert('Successfully Moved from Active to Inactive');
        //     // }
        //     // if (alertmsg === 3){
        //     //     alert('Sort Successfully Done');
        //     // }

        //     if (alertmsg === 1){
        //         confirmAlert({
        //             title: 'Action',
        //             message: 'Successfully Moved from Inactive to Active',
        //             buttons: [
        //               {
        //                 label: 'Ok'
        //               }
        //             ]
        //         });
        //     }
        //     if (alertmsg === 2){
        //         confirmAlert({
        //             title: 'Action',
        //             message: 'Successfully Moved from Active to InActive',
        //             buttons: [
        //               {
        //                 label: 'Ok'
        //               }
        //             ]
        //         });
        //     }
        //     if (alertmsg === 3){
        //         confirmAlert({
        //             title: 'Action',
        //             message: 'Sort Successfully Done',
        //             buttons: [
        //               {
        //                 label: 'Ok'
        //               }
        //             ]
        //         });
        //     }

        // }



        // onDelete =(ev)=>{
        //     let id= ev.dataTransfer.getData("id");
        //     console.log(id)
        //     let result= this.props.handleAttributeDelete(id)
        //     result.then(res=>{
        //      this.props.getAllSubAttribute(14)
        //     })
        //  }
 ///sorting and drag and dropping////////////////////////////////
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
 ////////////////////////////

        onDelete =(ev)=>{
            let id= this.state.selectedID
            confirmAlert({
                title: 'Delete Bloom Color ',
                message: 'Are you sure want to delete the Bloom Color?',
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
                this.setState({deleteon:false})
                this.props.getAllSubAttribute(14).then(()=>{
                    // alert("ji")
                    this.getCatgoryData()
                })
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
            this.setState({
                name:e.target.value
            })

            let errorObj=this.state.errorObj
        if(e.target.name === "bloomColor"){
        errorObj.bloomColor=0
        this.setState({errorObj})}


            this.props.handleZoneInputAction("bloomColor",e.target.value)
        }

        handleAddCategory = (e)=>{
       
            let zoneObj={}
            zoneObj.attribute_id=14
            zoneObj.value = this.props.bloomColor
            zoneObj.status=1
            console.log(zoneObj)


        //     if(this.props.bloomColor){
        //     let result = this.props.handleAddZone(zoneObj)
        //     result.then(res=>{
        //         this.props.getAllSubAttribute(14)
        //     })
        //     alert('Added Successfully Done');
        // }

        // this.setState({
        //     name:""
        // })




        if(this.validate()){
            let result = this.props.handleAddZone(zoneObj)
            result.then(res=>{
                this.props.getAllSubAttribute(14).then(()=>{
                    // alert("ji")
                    this.getCatgoryData()
                })
            })
            // confirmAlert({
            //     title: 'Added Successfully',
            //     message: 'Bloom Color',
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
                errorObj.bloomColor=1
                this.setState({errorObj})
                return false
            }
           
            return true
            
        }

        handleClear=()=>{
            let errorObj = this.state.errorObj
            errorObj.bloomColor=0
            //errorObj.locationTypeShortCode=0
            this.setState({name: "", subName:"", isEditing:false, selectedID:'', errorObj})
        }


        handleEditClick2 =(t)=> {
            // debugger;  
         this.setState({
             name: t.value,
             isEditing:true,
             selectedID:t.id,
         })
         this.props.handleZoneInputAction("bloomColor",...this.state.name)
        //  this.props.handlePositionInputAction("position",...this.state.name)
         this.props.showSubSubAttribute(t.id)
        //  console.log("ttttttt", t,  this.props.handlePositionInputAction())
       }

       handleAddCategoryUpdate=(e)=>{
        // debugger;
         // this.props.handleSubAttributeUpdate(e.target.id)
         let valueName = this.state.name
         let updateID = parseInt(this.props.showSpeciSubA.id)
         let updateObject={}
         updateObject.value=valueName

         console.log("bloomName",this.props.bloomColor)
        // updateObject.id=this.props.showSpeciSubA.id
            
    //   let res=   this.props.handleSubAttributeUpdate(updateID, updateObject)
    //          res.then(res=>{
    //              this.props.getAllSubAttribute(14)
    //          })

    //          this.setState({
    //              isEditing:false,
    //              name:""
    //          })


             if(this.validate()){
                let res=   this.props.handleSubAttributeUpdate(updateID, updateObject)
                    res.then(res=>{
                        this.props.getAllSubAttribute(14).then(()=>{
                            // alert("ji")
                            this.getCatgoryData()
                        })
                    })
                    if (this.state.isEditing) {
                        // confirmAlert({
                        //     title: 'Updated Successfully',
                        //     message: 'Bloom Color ',
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




        render() {
        return (
           
               <div>
               <div className="bg-white">
                            <h4 className="p-15 mb-0">Bloom & Foilage Colors</h4>
                            <hr className="m-0"/>
                            <div className="ContentSection p-15">
                                <div className="row">
                                    <div className="col-md-12 col-lg-12">
                                        <p>Color Name</p>
                                        <div className="row d-flex align-items-center">
                                            <div className="col-md-6 col-lg-6">  
                                                <input type="text" 
                                                className={this.state.isEditing===false ? "form-control" : "formControl2 abcd" }
                                                 name="bloomColor" 
                                                 value={this.state.name}
                                                  placeholder="Colour"
                                                 onChange={this.handleZoneInputAction}/>
                                                  {this.state.errorObj.bloomColor!==0?<span style={{fontSize:"small",color:"red"}}>Enter Color Name</span>:""}
                                            </div>


                                            {/* <div className="col-md-6 col-lg-3" onClick={this.handleAddCategory}>
                                                <a href="javascript:" className="d-flex align-items-center">
                                                    <i className="fa fa-plus-circle fa-2x mr-2"></i> Add New Color
                                                </a>style={{display:"flex"}} style={{marginLeft:"6em", marginTop:"1em"}}
                                            </div> */}



                                            {/* {this.state.isEditing ? (
                                                    <div className="col-md-6 col-lg-3" onClick={this.handleAddCategoryUpdate}>
                                                        <div  >
                                                            <a href="javascript:" className="d-flex align-items-center">
                                                                <i className="fa fa-plus-circle fa-2x mr-2"></i> Update Color
                                                            </a>
                                                        </div>

                                                            <div className="col-md-6 col-lg-3"  onClick={()=>{this.setState({isEditing:false})}}>
                                                                <a href="javascript:" className="d-flex align-items-center cancel_signlebox">
                                                                    Cancel 
                                                                </a>
                                                            </div>
                                                    </div>

                                                        ):
                                                        (
                                                        <div className="col-md-6 col-lg-3" onClick={this.handleAddCategory}>
                                                        <a href="javascript:" className="d-flex align-items-center">
                                                        <i className="fa fa-plus-circle fa-2x mr-2"></i> Add New Color
                                                        </a>
                                                        </div>  
                                            )}         */}

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
                                       >
                                                <ul class="list-unstyled" id="categoryInactive">
                                                   {this.state.inactive.map(t=>{
                                                    return<li id={t.id}>
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
                                            <div class="card-body cardBg" >
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
    bloomColor:state.attributeData.subAttributeName.bloomColor,
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
        showSubSubAttribute,
        handleSubAttributeUpdate     
    })(BloomFoliageColors)

