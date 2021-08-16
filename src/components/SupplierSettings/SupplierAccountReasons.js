

  /* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { Component } from 'react'
import {connect} from "react-redux";
import * as MdIcons from "react-icons/md";
import './style.css';
import Sortable from 'sortablejs'
import InfoModal from "../Modal/InfoModal"
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';


import {saveReasonMethod,getAllReasonMethods,handleCustomerTypeDelete,handleDragDropCustomer,saveDeliveryMethod,saveNoticationData,getNotificationData,handleExchangeData,getAllDeliveryMethods} from "../../actions/customerSettingAction";
import { is } from 'immutable';
import {supplierReasonSort,getAllSupplierReasonMethods,saveSupplierReasonMethod,handleSupplierExchnageData, showSpecificSubAttribute,handleReasonInputAction, updateSupplierReasonMethods}   from "../../actions/supplierManagementAction"
//import {handlePositionInputAction} from '../../actions/attributeAction'

    class SupplierAccountReasons extends Component {
    state ={
     isOpen1:false,
       message:[],
       isEditing:false,
       name:'',
       selectedID:'',
       subName:'',
       subName2:'',
      
       btnLabelAdd:'Add New Supplier Account Reason',
       btnLabelUpdate: 'Update Supplier Account Reason',
       btnLabelCancel:'Cancel',
       deleteon:false,
       errorObj:{
        supplier_reason:0,
       
    },
    active:[],inactive:[]
   
    }

    
    getCatgoryData = ()=>{
        let data = {};
        let active= this.props.supplierData.supplierReasonList.active
       let inactive=this.props.supplierData.supplierReasonList.inactive
        this.setState({active:active,inactive:inactive})
    }
componentDidMount(){
    

    var elData = document.getElementById('categoryActive');
    var elData1 = document.getElementById('categoryInactive');
this.props.getAllSupplierReasonMethods().then(()=>{
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
    this.props.supplierReasonSort(evt.dragged.id,evt.related.id,"down")
    else  this.props.supplierReasonSort(evt.dragged.id,evt.related.id,"up")

   }else{
       if(evt.from.id =="categoryActive"){
          let task= this.state.active.filter(data=>data.id ==evt.dragged.id)
          //console.log(task)
          if(task.length > 0){
              let taskData = task[0]
              taskData.status =parseInt(taskData.status)==1? 0:1
              this.props.updateSupplierReasonMethods(taskData.id,taskData).then(data=>{
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
            this.props.updateSupplierReasonMethods(taskData.id,taskData).then(data=>{
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




        // onDelete =(ev)=>{
        //     let id= ev.dataTransfer.getData("id");
        //     console.log(id)
        //     this.setState({deleteon:true})
        //    let result= this.props.handleCustomerTypeDelete(id,"delete-supplier-reasons")
        //    result.then(res=>{
        //     this.setState({deleteon:false})
        //     this.props.getAllSupplierReasonMethods()
        //    })
        // }


        onDelete =(ev)=>{
            let id= this.state.selectedID
            confirmAlert({
                title: 'Delete Supplier Account Reason',
                message: 'Are you sure want to delete the Supplier Account Reason?',
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
            let result= this.props.handleCustomerTypeDelete(id,"delete-supplier-reasons")
            this.setState({deleteon:true})
            result.then(res=>{
                this.props.getAllSupplierReasonMethods().then(()=>{
                    // alert("ji")
                    this.getCatgoryData()
                })
                this.setState({deleteon:false})
                // confirmAlert({
                //     title: 'Delete Successfully',
                //     message: 'Supplier Account Reason ',
                //     buttons: [
                //       {
                //         label: 'Ok'
                //       }
                //     ]
                //   });
            })
        }



        handleCategoryInputAction = (e)=>{

            this.setState({
                name:e.target.value
            })
          
            let errorObj=this.state.errorObj
            if(e.target.name === "supplierReason"){
            errorObj.supplier_reason=0
            this.setState({errorObj})}
            //this.props.handleReasonInputAction("supplierReason", e.target.value)
            this.props.handleSupplierExchnageData(e.target.value,e.target.id,"supplierReason")
        }


        handleAddCategoryData = (e)=>{
            // if(this.props.supplierData.supplierReason.reason.trim() ===""){
            //     this.setState({isOpen1:true,message:["Please add Acount Reason"]})
            // }else{


                let obj = {}
                obj.reason = this.props.supplierData.supplierReason.reason
                obj.status = 1
                //let result = this.props.saveSupplierReasonMethod(obj)
                // result.then(data=>{
                //     this.props.getAllSupplierReasonMethods()
                // })
           
            // }
            // this.setState({
            //     name:"",
            // })
            // this.props.saveCustomerType()handleReasonInputAction

            if(this.validate()){
                let result = this.props.saveSupplierReasonMethod(obj)
                result.then(res=>{
                    this.props.getAllSupplierReasonMethods().then(()=>{
                        // alert("ji")
                        this.getCatgoryData()
                    })
                })
                // confirmAlert({
                //     title: 'Added Successfully',
                //     message: 'Supplier Reasons',
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


        handleEditClick2 =(t)=> {
            //debugger;
            console.log("tttt", t)
               this.setState({
             name: t.reason,
             selectedID:t.id,
             isEditing:true
         })

         this.props.handleSupplierExchnageData(...this.state.name,"reason","supplierReason")
            //this.props.handleReasonInputAction("supplierReason", ...this.state.name)
            this.props.showSpecificSubAttribute(t.id)

            console.log("ttttttt", t,  this.props.handleReasonInputAction())
            // debugger;  
        //  this.setState({
        //      name: t.value,
        //      isEditing:true
        //  })
   
       }


       validate = ()=>{
        let errorObj = this.state.errorObj
        if(this.state.name.length === 0){
            errorObj.supplier_reason=1
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

    handleClear=()=>{
        let errorObj = this.state.errorObj
        errorObj.supplier_reason=0
       // errorObj.locationTypeShortCode=0
        this.setState({name: "", subName:"", isEditing:false, selectedID:'', errorObj})
    }

       handleAddCategoryUpdate=()=>{
          // debugger;
        // this.props.handleSubAttributeUpdate(e.target.id)
        
        let updateID = parseInt(this.props.showSpeciSubA.id)
        let updateObject={}
        updateObject.reason=this.state.name
       // updateObject.id=this.props.showSpeciSubA.id
           
            // let res1=   this.props.updateSupplierReasonMethods(updateID, updateObject)
            // res1.then(res=>{
            //     this.props.getAllSupplierReasonMethods()
            // })

            // this.setState({
            //     isEditing:false,
            //     name:""
            // })

            if(this.validate()){
                let res=   this.props.updateSupplierReasonMethods(updateID, updateObject)
                    res.then(res=>{
                        this.props.getAllSupplierReasonMethods().then(()=>{
                            // alert("ji")
                            this.getCatgoryData()
                        })
                    })
                    if (this.state.isEditing) {
                        // confirmAlert({
                        //     title: 'Updated Successfully',
                        //     message: 'Supplier Reasons',
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

    // console.log("showSpeciSubA", this.props.showSpeciSubA)
 
    // const {supplierData} = this.props

    // console.log(this.props.supplierData.supplierReasonList)
    // let inActiveList = this.props.supplierData.supplierReasonList.inactive;

        return (
           
                   <div>
                       	<InfoModal status={this.state.isOpen1} message={this.state.message} modalAction={this.toggle1}/>
               <div className="bg-white">
 <h4 className="p-15 mb-0">Supplier Account Reason</h4>
                
                            <hr className="m-0"/>
                            <div className="ContentSection p-15">
                              
                                <div className="row">
                                      
                                    </div>
                                    <div className="row">
                                    <div className="col-md-12 col-lg-12">
                                        <p style={{fontWeight:"bold"}}>Reason</p>
                                        <div className="row d-flex align-items-center">
                                            <div className="col-md-6 col-lg-6">  
                                            <input type="text"  className={this.state.isEditing===false ? "form-control" : "formControl2 abcd" } placeholder="Reason" id="reason" name="supplierReason"
                                            // value={supplierData.supplierReason.reason}  
                                            value={this.state.name}
                                               onChange={this.handleCategoryInputAction}/>
                                              {this.state.errorObj.supplier_reason!==0?<span style={{fontSize:"small",color:"red"}}>Enter Supplier Reason</span>:""}
                                            </div>

                                            {/* {this.state.isEditing ? (
                                                <div className="col-md-6 col-lg-3" onClick={this.handleAddCategoryUpdate}>
                                                        <div>
                                                        <a href="javascript:" className="d-flex align-items-center">
                                                            <i className="fa fa-plus-circle fa-2x mr-2"></i> Update Reason
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


                                                <div className="col-md-6 col-lg-3" onClick={this.handleAddCategoryData}>
                                                <a  className="d-flex align-items-center">
                                                    <i className="fa fa-plus-circle fa-2x mr-2"></i> Add New Reason
                                                </a>
                                            </div>

                                                )}      */}


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


                                            <div class="card-body cardBg"
                                           >
                                            <ul class="list-unstyled" id="categoryInactive">
                                                   {
                                                  this.state.inactive.map(t=>{
                                                    return <li id={t.id} >
                                                                 <a className="d-flex justify-content-between align-items-center">
                                                                      <span id="Wheathers" className={this.state.isEditing===false  ? "" :this.state.selectedID === t.id ? "reasonBackground" : " "}>{t.reason}</span>
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
                                                    return <li id={t.id} >
                                                                 <a className="d-flex justify-content-between align-items-center">
                                                                      <span id="Wheathers" className={this.state.isEditing===false  ? "" :this.state.selectedID === t.id ? "reasonBackground" : " "}>{t.reason}</span>
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
            supplierData:state.supplierData,
            showSpeciSubA: state.supplierData.specificSubAttribute
        
   
    }
    )
    export default connect(mapStateToProps,{
        handleExchangeData,
        saveDeliveryMethod,
        getAllDeliveryMethods,
        handleCustomerTypeDelete,
        getAllReasonMethods,
        getAllSupplierReasonMethods,
        saveSupplierReasonMethod,
        handleSupplierExchnageData,
        showSpecificSubAttribute,
        handleReasonInputAction,
        updateSupplierReasonMethods,
        supplierReasonSort,
        
handleDragDropCustomer    })((SupplierAccountReasons))





   



