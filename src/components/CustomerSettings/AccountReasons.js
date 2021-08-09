







  /* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { Component } from 'react'
import {connect} from "react-redux";
import * as MdIcons from "react-icons/md";
// import './style.css';
import InfoModal from "../Modal/InfoModal";
import { confirmAlert } from 'react-confirm-alert';

import {saveReasonMethod,getAllReasonMethods,handleCustomerTypeDelete,handleDragDropCustomer,
    saveDeliveryMethod,saveNoticationData,getNotificationData,handleExchangeData,
    getAllDeliveryMethods,
    updateCustomerAccountReasonlSettings, showSpecificAccountReasonSettings} from "../../actions/customerSettingAction";
import { is } from 'immutable';


    class AccountReasons extends Component {
    state ={
     isOpen1:false,
       message:[],
       isEditing:false,
       name:'',
       selectedID:'',
       deleteon:false,


       subName:'',
       subName2:'',
      
       btnLabelAdd:'Add New Account Reason',
       btnLabelUpdate: 'Update Account Reason',
       btnLabelCancel:'Cancel',

        errorObj:{
            account_reason :0,
           short_code:0
       },
    }


        onDragOver = (ev)=>{
            ev.preventDefault();
        }

        onDragStart=(ev, id)=>{
            console.log("dragstart:", id);
            ev.dataTransfer.setData("id",id)
        }
        componentDidMount(){
            this.props.getAllReasonMethods()

        }


        toggle1 =()=>{
            this.setState({isOpen1:false})
        }

        onDrop=(ev,cat)=>{
            let id= JSON.parse(ev.dataTransfer.getData("id"))
            let datatoParse = this.props.customerData.customerReasonList
            console.log(cat)

            let tasks = []
            console.log( datatoParse.active)
           
            datatoParse.active.filter(task=>{
                 if(task.id === id){
                    tasks.push(task)
                 }
             })
             datatoParse.inactive.filter(task=>{
                if(task.id === id){
                   tasks.push(task)
                }
            })

        
            //  tasks = datatoParse.inactive.filter((task)=>task.id === id)
             

         
         console.log(tasks)
            // console.log(tasks)
        //    let result= this.props.handleDragDrop(tasks[0])
        //    result.then(res=>{
        //     this.props.getAllPlantCategories()
        //    })
           let doProcess = false;
           let alertmsg = 0;
           if(tasks.length>0){

            if (cat === 'active' && tasks[0].status === 0) {
               
                doProcess = true;
                alertmsg = 1;
            }
            if (cat === 'inactive' && tasks[0].status === 1) {
                doProcess = true;
                alertmsg = 2;
            }
            if (doProcess === true) {
               
                let result= this.props.handleDragDropCustomer(tasks[0],"update-customer-account-reason")
                result.then(res=>{
                    this.props.getAllReasonMethods()
                })   

                alertmsg = 3;
            }
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
                message: 'Successfully Done',
                buttons: [
                  {
                    label: 'Ok'
                  }
                ]
            });
        }
            // this.setState({
            //     ...this.state,
            //     tasks
            // })

        }


        // onDelete =(ev)=>{
        //     let id= ev.dataTransfer.getData("id");
        //     console.log(id)
        //     this.setState({deleteon:true})
        //    let result= this.props.handleCustomerTypeDelete(id,"delete-customer-account-reason")
        //    result.then(res=>{
        //     this.props.getAllReasonMethods()
        //     this.setState({deleteon:false})
        //    })


        // }



        onDelete =(ev)=>{
            let id= ev.dataTransfer.getData("id");
            confirmAlert({
                title: 'Delete Account Reason',
                message: 'Are you sure want to delete the Account Reason ?',
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
            let result= this.props.handleCustomerTypeDelete(id,"delete-customer-account-reason")
            this.setState({deleteon:true})
            result.then(res=>{
                this.props.getAllReasonMethods()
                this.setState({deleteon:false})
                confirmAlert({
                    title: 'Delete Successfully',
                    message: 'Account Reason',
                    buttons: [
                      {
                        label: 'Ok'
                      }
                    ]
                  });
            })
        }


        handleCategoryInputAction = (e)=>{
            this.setState({
                name:e.target.value
            })

            let errorObj=this.state.errorObj
            if(e.target.name === "customerReason"){
            errorObj.account_reason=0
            this.setState({errorObj})}
            this.props.handleExchangeData("customerReason", e.target.value)
            //this.props.handleExchangeData(e.target.value,e.target.id,"customerReason")
        }
        handleAddCategoryData = (e)=>{
            // if(this.state.name.trim() ===""){
                
            //     this.setState({isOpen1:true,message:["please add Account Reason"]})


            // }else{
                let obj = {}
                obj.reason = this.state.name.trim()
                this.setState({name:""})
                obj.status = 1
                // let result = this.props.saveReasonMethod(obj)
                // result.then(data=>{
                //     this.props.getAllReasonMethods()
                // })
            // }
            // this.setState({
            //     name:"",
            // })
            // this.props.saveCustomerType()

            if(this.validate()){
                let result = this.props.saveReasonMethod(obj)
                result.then(res=>{
                    this.props.getAllReasonMethods()
                })
                confirmAlert({
                    title: 'Added Successfully',
                    message: 'Account Reason',
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


        handleEditClick2 =(t)=> {
            console.log("abcdefg", t  )

            this.setState({
                name: t.reason,
                isEditing:true,
                selectedID:t.id,
            })

            this.props.handleExchangeData("customerReason",...this.state.name)
            this.props.showSpecificAccountReasonSettings(t.id)
  
       }



       validate = ()=>{
        let errorObj = this.state.errorObj
        if(this.state.name.length === 0){
            errorObj.account_reason=1
            this.setState({errorObj})
            return false
        }
       
        return true
        
    }

    handleClear=()=>{
        let errorObj = this.state.errorObj
        errorObj.account_reason=0
        this.setState({name: "", subName:"", isEditing:false, selectedID:'', errorObj})
    }


       handleAddCategoryUpdate=(e)=>{
        //debugger;
        console.log("showSpeciSubA", this.props.showSpecificCustomerAccountReason)
         // this.props.handleSubAttributeUpdate(e.target.id)
         let valueName = this.state.name
        
         let updateID = parseInt(this.props.showSpecificCustomerAccountReason.id)
         let updateObject={}
         updateObject.reason=valueName
       
            
    //   let res=   this.props.updateCustomerAccountReasonlSettings(updateID, updateObject)
    //          res.then(res=>{
    //              this.props.getAllReasonMethods()
    //          })

            //  this.setState({
            //      isEditing:false,
            //      name:"",
                
            //  })



             if(this.validate()){
                let res=   this.props.updateCustomerAccountReasonlSettings(updateID, updateObject)
                    res.then(res=>{
                        this.props.getAllReasonMethods()
                    })
                    if (this.state.isEditing) {
                        confirmAlert({
                            title: 'Updated Successfully',
                            message: 'Account Reason ',
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


// cancel Button in all settings modules
// edit & Update in plant Settings, user settings, product settings,supplierSettings, CustomerSetting:WIP



render() {
 //showSpecificCustomerAccountReason
    const {customerData} = this.props

    console.log(this.props.customerData.customerReasonList)

        return (
           
                   <div>
                       	<InfoModal status={this.state.isOpen1} message={this.state.message} modalAction={this.toggle1}/>
               <div className="bg-white">
 <h4 className="p-15 mb-0">Customer Account Reasons (INACTIVE)</h4>
                
                            <hr className="m-0"/>
                            <div className="ContentSection p-15">
                                {/* <div className="row">
                                    <div className="col-md-12 col-lg-12">
                                        <p>Category Name</p>
                                        <div className="row d-flex align-items-center">
                                            <div className="col-md-6 col-lg-6">  
                                                <input type="text" className="form-control" name="name" value={this.props.name}   placeholder="Category" onChange={this.handleCategoryInputAction}/>
                                            </div>
                                            <div className="col-md-6 col-lg-3" onClick={this.handleAddCategory}>
                                                <a href="javascript:" className="d-flex align-items-center" >
                                                    <i className="fa fa-plus-circle fa-2x mr-2"></i> Add New Category
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                                <div className="row">
                                        {/* <div className="col-md-6">
                                            <label>Type</label>
                                            <div>
                                                <input type="text" className="form-control" placeholder="" id="delivery_method" value={customerData.customerTypes.delivery_method}   placeholder="Type" onChange={this.handleCategoryInputAction}/>
                                            </div>
                                            <div className="d-flex justify-content-md-end mt-2">
                                                {/* <a href="javascript;" className="d-flex align-items-center">
                                                    <i className="fa fa-plus-circle fa-2x mr-2"></i> Add New Section
                                                </a> */}
                                            {/* </div> */}
                                        {/* </div>  */}
                                        {/* <div className="col-md-6">
                                            <div className="d-flex justify-content-md-end mt-2" onClick={this.handleAddCategoryData}>
                                                <a className="d-flex align-items-center">
                                                    <i className="fa fa-plus-circle fa-2x mr-2"></i> Add New Type
                                                </a>
                                            </div>
                                        </div> */}
                                    </div>
                                    <div className="row">
                                    <div className="col-md-12 col-lg-12">
                                        {/* <p style={{fontWeight:"bold"}}  style={{marginLeft:"-10px"}}>Reasons</p> */}
                                        <h5 className="p-15 mb-0"  style={{marginLeft:"-10px"}}> Reasons</h5>
                                        <div className="row d-flex align-items-center">
                                            <div className="col-md-6 col-lg-6">  
                                            <input type="text" 
                                            className={this.state.isEditing===false ? "form-control" : "formControl2 abcd" }
                                            name="customerReason"
                                            placeholder="Reason" id="reason" 
                                            //value={customerData.customerReason.reason} 
                                            value={this.state.name}
                                              onChange={this.handleCategoryInputAction}/>
                                               {this.state.errorObj.account_reason!==0?<span style={{fontSize:"small",color:"red"}}>Enter Account Reason</span>:""}
                                            </div>



                                            {/* <div className="col-md-6 col-lg-3" onClick={this.handleAddCategoryData}>
                                                <a  className="d-flex align-items-center">
                                                    <i className="fa fa-plus-circle fa-2x mr-2"></i> Add New Reason
                                                </a>
                                            </div> */}


                                            {/* {this.state.isEditing ? (
                                                    <div className="col-md-6 col-lg-3" onClick={this.handleAddCategoryUpdate}>
                                                        <div  >
                                                            <a href="javascript:" className="d-flex align-items-center">
                                                                <i className="fa fa-plus-circle fa-2x mr-2"></i> Update Reason
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
                                                        <i className="fa fa-plus-circle fa-2x mr-2"></i> Add New Reason
                                                        </a>
                                                        </div>  
                                                  )}  */}

               
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
                                            onDragOver={(e)=>this.onDragOver(e)}
                                            onDrop={(e)=>{this.onDrop(e,"inactive")}}>
                                            <ul class="list-unstyled">
                                                   {this.props.customerData.customerReasonList.inactive.map(t=>{
                                                    return <li id={t.id} name={t.reason} onDragStart={(e)=>this.onDragStart(e, t.id)} onDelete={(e)=>this.onDelete(e, t.id)} draggable >
                                                                 <a className="d-flex justify-content-between align-items-center">
                                                                <span id="Wheathers">{t.reason}</span>
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
                                                   {this.props.customerData.customerReasonList.active.map(t=>{
                                                    return <li id={t.id} name={t.reason} onDragStart={(e)=>this.onDragStart(e, t.id)} onDelete={(e)=>this.onDelete(e, t.id)} draggable >
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
        
    plantCategoryList:state.categoryData.plantCategoryData,
    temp:state,
    name:state.categoryData.name,
    customerData:state.customerReducer,
    showSpecificCustomerAccountReason: state.customerReducer.showSpecificCustomerSettingAccountReason
    }
    )
    export default connect(mapStateToProps,{
        handleExchangeData,
        saveDeliveryMethod,
        getAllDeliveryMethods,
        handleCustomerTypeDelete,
        getAllReasonMethods,
        saveReasonMethod,
        updateCustomerAccountReasonlSettings, 
        showSpecificAccountReasonSettings,

        
handleDragDropCustomer    })(AccountReasons)





   




