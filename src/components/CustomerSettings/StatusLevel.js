






  /* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { Component } from 'react'
import {connect} from "react-redux";
import * as MdIcons from "react-icons/md";
import { confirmAlert } from 'react-confirm-alert';
import Sortable from 'sortablejs'
// import './style.css';
import InfoModal from "../Modal/InfoModal"

import {customerStatusSort,saveStatusMethod,saveReasonMethod,getAllReasonMethods,getAllStatusMethods,handleCustomerTypeDelete,
    handleDragDropCustomer,handleChangeFilter,saveDeliveryMethod,saveNoticationData,getNotificationData,
    handleExchangeData,getAllDeliveryMethods,   updateCustomerStatusLevelSettings,
    showSpecificStatusLevelSettings,} from "../../actions/customerSettingAction";
import { is } from 'immutable';


    class StatusLevel extends Component {
    state ={
     isOpen1:false,
       message:[],
       isEditing:false,
      
       selectedID:'',
       deleteon:false,
       name:'',
       subName:'',
       subName2:'',
      
       btnLabelAdd:'Add New Status Level',
       btnLabelUpdate: 'Update Status Level',
       btnLabelCancel:'Cancel',
       errorObj:{
        customerStatus :0,
       short_code:0
   },
   active:[],inactive:[]

    }



        getCatgoryData = ()=>{
            let data = {};
            let active= this.props.customerData.customerStatusList.active
           let inactive=this.props.customerData.customerStatusList.inactive
            this.setState({active:active,inactive:inactive})
        }
    componentDidMount(){
        
    
        var elData = document.getElementById('categoryActive');
        var elData1 = document.getElementById('categoryInactive');
        this.props.getAllStatusMethods().then(()=>{
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
        evt.preventDefault()
    
    //     const referenceNode = (evt.nextSibling && evt.nextSibling.parentNode !== null) ? evt.nextSibling : null; 
    //  evt.from.insertBefore(evt.item, null); 
    
    }
    onMoveData = (evt,ui)=>{
    
       if(evt.from.id == evt.to.id){
           if(evt.willInsertAfter ==true)
        this.props.customerStatusSort(evt.dragged.id,evt.related.id,"down")
        else  this.props.customerStatusSort(evt.dragged.id,evt.related.id,"up")
    
       }else{
           if(evt.from.id =="categoryActive"){
              let task= this.state.active.filter(data=>data.id ==evt.dragged.id)
              //console.log(task)
              if(task.length > 0){
                  let taskData = task[0]
                  taskData.status =parseInt(taskData.status)==1? 0:1
                  this.props.updateCustomerStatusLevelSettings(taskData.id,taskData).then(data=>{
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
                this.props.updateCustomerStatusLevelSettings(taskData.id,taskData).then(data=>{
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




        onDelete =(ev)=>{
            let id= this.state.selectedID
            confirmAlert({
                title: 'Delete Status level',
                message: 'Are you sure want to delete the status level?',
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
            let result= this.props.handleCustomerTypeDelete(id,"delete-customer-account-status")
            this.setState({deleteon:true})
            result.then(res=>{
                this.props.getAllStatusMethods().then(()=>{
                    // alert("ji")
                    this.getCatgoryData()
                })
                this.setState({deleteon:false})
            
            })
        }



        handleCategoryInputAction = (e)=>{
            this.setState({
                name:e.target.value
            })

            let errorObj=this.state.errorObj
            if(e.target.name === "customerStatus"){
            errorObj.customerStatus=0
            this.setState({errorObj})}


            this.props.handleExchangeData("customerStatus", e.target.value)
           // this.props.handleExchangeData(e.target.value,e.target.id,"customerStatus")
        }
        
        handleAddCategoryData = (e)=>{
            // if(this.state.name.trim() ===""){
                
                //this.setState({isOpen1:true,message:["Please Add Status Level"]})


            // }else{
                let obj = {}
                obj.status_level = this.state.name.trim()
                obj.status = 1
                // let result = this.props.saveStatusMethod(obj)
                // this.setState({name:""})
                // result.then(data=>{
                //     this.props.getAllStatusMethods()
                // })
            // }

            // this.setState({
            //     name:"",
               
            // })


            if(this.validate()){
                let result = this.props.saveStatusMethod(obj)
                result.then(res=>{
                    this.props.getAllStatusMethods().then(()=>{
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

            // this.props.saveCustomerType()
        
        }


        validate = ()=>{
            let errorObj = this.state.errorObj
            if(this.state.name.length === 0){
                errorObj.customerStatus=1
                this.setState({errorObj})
                return false
            }
           
            return true
            
        }

        handleClear=()=>{
            let errorObj = this.state.errorObj
            errorObj.customerStatus=0
            this.setState({name: "", subName:"", isEditing:false, selectedID:'', errorObj})
        }

        handleEditClick2 =(t)=> {
            console.log("abcdefg", t  )

            this.setState({
                name: t.status_level,
                isEditing:true,
                selectedID:t.id
            })

            this.props.handleExchangeData("customerStatus",...this.state.name)
            this.props.showSpecificStatusLevelSettings(t.id)
  
       }


       handleAddCategoryUpdate=(e)=>{
        //debugger;
        console.log("showSpeciSubA", this.props.showSpecificCustomerStatusLevel)
         // this.props.handleSubAttributeUpdate(e.target.id)
         let valueName = this.state.name
        
         let updateID = parseInt(this.props.showSpecificCustomerStatusLevel.id)
         let updateObject={}
         updateObject.status_level=valueName
       
            
    //   let res=   this.props.updateCustomerStatusLevelSettings(updateID, updateObject)
    //          res.then(res=>{
    //              this.props.getAllStatusMethods()
    //          })

    //          this.setState({
    //              isEditing:false,
    //              name:"",
                
    //          })


             if(this.validate()){
                let res=this.props.updateCustomerStatusLevelSettings(updateID, updateObject)
                    res.then(res=>{
                        this.props.getAllStatusMethods().then(()=>{
                            // alert("ji")
                            this.getCatgoryData()
                        })
                    })
                    if (this.state.isEditing) {
                   
                    }

                    this.setState({
                        isEditing:false,
                        name:"",
                        subName:""
                    })
            }

     }





render() {
 
    const {customerData} = this.props

    console.log(this.props.customerData.customerDeliveryList)

        return (
           
                   <div>
                       	<InfoModal status={this.state.isOpen1} message={this.state.message} modalAction={this.toggle1}/>
               <div className="bg-white">
 <h4 className="p-15 mb-0">Customer Account Status Level</h4>
 <hr className="m-0"/>
                            
                           
                            <div className="ContentSection p-15">
                          
                                <div className="row">
                        
                                    </div>
                                    <div className="row">
                                    <div className="col-md-12 col-lg-12">
                                    <h5 className="p-15 mb-0"  style={{marginLeft:"-10px"}}>Status Levels</h5>
                                        <div className="row d-flex align-items-center">
                                            <div className="col-md-6 col-lg-6">  
                                            <input type="text"
                                             className={this.state.isEditing===false ? "form-control" : "formControl2 abcd" }
                                             id="status_level" 
                                             name="customerStatus"
                                             value={this.state.name}  
                                              placeholder="Status Level" 
                                              onChange={this.handleCategoryInputAction}/>
                                              {this.state.errorObj.customerStatus!==0?<span style={{fontSize:"small",color:"red"}}>Enter Status level</span>:""}
                                              
                                            </div>

                                            {/* <div className="col-md-6 col-lg-3" onClick={this.handleAddCategoryData}>
                                                <a  className="d-flex align-items-center">
                                                    <i className="fa fa-plus-circle fa-2x mr-2"></i> Add New Level
                                                </a>
                                            </div> */}



                                            {/* {this.state.isEditing ? (
                                                    <div className="col-md-6 col-lg-3" onClick={this.handleAddCategoryUpdate}>
                                                        <div  >
                                                            <a href="javascript:" className="d-flex align-items-center">
                                                                <i className="fa fa-plus-circle fa-2x mr-2"></i> Update Level
                                                            </a>
                                                        </div>

                                                            <div className="col-md-6 col-lg-3"  onClick={()=>{this.setState({isEditing:false})}}>
                                                                <a href="javascript:" className="d-flex align-items-center cancel_signlebox" style={{marginLeft:"10em"}}>
                                                                    Cancel 
                                                                </a>
                                                            </div>
                                                    </div>

                                                        ):
                                                        (
                                                        <div className="col-md-6 col-lg-3" onClick={this.handleAddCategoryData}>
                                                        <a href="javascript:" className="d-flex align-items-center">
                                                        <i className="fa fa-plus-circle fa-2x mr-2"></i> Add New Level
                                                        </a>
                                                        </div>  
                                                  )}     */}


                                        <div className="d-flex justify-content-md-end mt-2"  >
                                            <div >
                                                <a href="javascript:" className="d-flex align-items-center" onClick={this.state.isEditing ? this.handleAddCategoryUpdate : this.handleAddCategoryData}> 
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


                                            <div class="card-body cardBg" >
                                            <ul class="list-unstyled" id="categoryInactive">
                                                   {this.state.inactive.map(t=>{
                                                    return <li id={t.id}  >
                                                                 <a className="d-flex justify-content-between align-items-center">
                                                                      <span id="Wheathers" 
                                                                       className={this.state.isEditing===false  ? "" :this.state.selectedID === t.id ? "reasonBackground" : " "}
                                                                      >{t.status_level}</span>
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
                                            {/* <div class="card-body cardBg" onDragOver={(e)=>{this.onDragOver(e)}} onDrop={(e)=>this.onDrop(e,"active")}>
                                            <ul class="list-unstyled">
                                                   {this.props.customerData.customerStatusList.active.map(t=>{
                                                    return <li id={t.id} name={t.status_level} onDragStart={(e)=>this.onDragStart(e, t.id)} onDelete={(e)=>this.onDelete(e, t.id)} draggable >
                                                                 <a className="d-flex justify-content-between align-items-center">
                                                                      <span id="Wheathers">{t.status_level}</span>
                                                                 </a>
                                                            </li>
                                                    })}
                                            </ul>
                                            </div> */}
                                            <div class="card-body cardBg" >
                                            <ul class="list-unstyled" id="categoryActive">
                                                   {this.state.active.map(t=>{
                                                    return <li id={t.id}  >
                                                                 <a className="d-flex justify-content-between align-items-center">
                                                                      <span id="Wheathers" 
                                                                       className={this.state.isEditing===false  ? "" :this.state.selectedID === t.id ? "reasonBackground" : " "}
                                                                      >{t.status_level}</span>
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
        
    plantCategoryList:state.categoryData.plantCategoryData,
    temp:state,
    name:state.categoryData.name,
    customerData:state.customerReducer,
    showSpecificCustomerStatusLevel: state.customerReducer.showSpecificCustomerSettingSatausLevel
    }
    )
    export default connect(mapStateToProps,{
        handleExchangeData,
        saveDeliveryMethod,
        getAllDeliveryMethods,
        handleCustomerTypeDelete,
        getAllStatusMethods,
        saveStatusMethod,
        saveReasonMethod,
        getAllReasonMethods,
        customerStatusSort,
        updateCustomerStatusLevelSettings,
        showSpecificStatusLevelSettings,

        
handleDragDropCustomer    })(StatusLevel)


   

