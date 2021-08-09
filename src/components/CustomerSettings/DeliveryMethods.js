

  /* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { Component } from 'react'
import {connect} from "react-redux";
import * as MdIcons from "react-icons/md";
import { confirmAlert } from 'react-confirm-alert';
// import './style.css';
import InfoModal from "../Modal/InfoModal"

import {handleCustomerTypeDelete,handleDragDropCustomer,handleChangeFilter,saveDeliveryMethod,
    saveNoticationData,getNotificationData,handleExchangeData,getAllDeliveryMethods, showSpecificCustomerDeliveryMethodSettings, updateCustomerDeliveryMethodSettings} from "../../actions/customerSettingAction";
import { is } from 'immutable';


    class DeliveryMethods extends Component {
    state ={
     isOpen1:false,
       message:[],
       isEditing:false,
     
       selectedID:'',
       deleteon:false,


       name:'',
       subName:'',
       subName2:'',
      
       btnLabelAdd:'Add New Delivery Method',
       btnLabelUpdate: 'Update Delivery Method',
       btnLabelCancel:'Cancel',

        errorObj:{
            delivery_method :0,
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
            this.props.getAllDeliveryMethods()

        }


        toggle1 =()=>{
            this.setState({isOpen1:false})
        }

        onDrop=(ev,cat)=>{

            let id= JSON.parse(ev.dataTransfer.getData("id"))
            let datatoParse = this.props.customerData.customerDeliveryList
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
        let alertmsg = 0;
           let doProcess = false;
           if (cat === 'active' && tasks[0].status === 0) {
            doProcess = true;
            alertmsg = 1;
        }
           if(tasks.length>0){

            // if (cat === 'active' && tasks[0].status === 0) {
               
            //     doProcess = true;
            //     alertmsg = 1;
            // }

            if (cat === 'inactive' && tasks[0].status === 1) {
                doProcess = true;
                alertmsg = 2;
            }



            if (doProcess === true) {
               
                let result= this.props.handleDragDropCustomer(tasks[0],"update-customer-delivery-method")
                result.then(res=>{
                    this.props.getAllDeliveryMethods()
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
                    message: 'Successfully Done',
                    buttons: [
                      {
                        label: 'Ok'
                      }
                    ]
                });
            }
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
        //    let result= this.props.handleCustomerTypeDelete(id,"delete-customer-delivery-method")
        //    result.then(res=>{
        //     this.props.getAllDeliveryMethods()
        //     this.setState({deleteon:false})
        //    })


        // }

        onDelete =(ev)=>{
            let id= ev.dataTransfer.getData("id");
            confirmAlert({
                title: 'Delete Delivery Method',
                message: 'Are you sure want to delete the Delivery Method?',
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
            let result= this.props.handleCustomerTypeDelete(id,"delete-customer-type")
            this.setState({deleteon:true})
            result.then(res=>{
                this.props.getAllCustomerType()
                this.setState({deleteon:false})
                confirmAlert({
                    title: 'Delete Successfully',
                    message: 'Delivery Method  ',
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
            //delivery_Method
            let errorObj=this.state.errorObj
            if(e.target.name === "customerDelivery"){
            errorObj.delivery_method=0
            this.setState({errorObj})}

            this.props.handleExchangeData("customerDelivery", e.target.value)
        }

        handleAddCategoryData = (e)=>{
            // if(this.state.name.trim() ===""){
            //     this.setState({isOpen1:true,message:["please add both type and shortcode"]})
            // }else{
                let obj = {}
                obj.delivery_method = this.state.name
                // let result = this.props.saveDeliveryMethod(obj)
                // result.then(data=>{
                //     this.props.getAllDeliveryMethods()
                // })
            // }

            // this.setState({
            //     name:"",
            // })

            if(this.validate()){
                let result = this.props.saveDeliveryMethod(obj)
                result.then(res=>{
                    this.props.getAllDeliveryMethods()
                })
                confirmAlert({
                    title: 'Added Successfully',
                    message: 'Delivery Method Type',
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
            // this.props.saveCustomerType()
        
        }



        validate = ()=>{
            let errorObj = this.state.errorObj
            if(this.state.name.length === 0){
                errorObj.delivery_method=1
                this.setState({errorObj})
                return false
            }
           
            return true
            
        }


        handleClear=()=>{
            let errorObj = this.state.errorObj
            errorObj.delivery_method=0
            this.setState({name: "", subName:"", isEditing:false, selectedID:'', errorObj})
        }


        handleEditClick2 =(t)=> {
            console.log("abcdefg", t  )

            this.setState({
                name: t.delivery_method,
                isEditing:true,
                selectedID:t.id,
            })

            this.props.handleExchangeData("customerDelivery",...this.state.name)
            this.props.showSpecificCustomerDeliveryMethodSettings(t.id)
  
       }


       handleAddCategoryUpdate=(e)=>{
        //debugger;
        console.log("showSpeciSubA", this.props.showSpecificCustomerDeliveryM)
         // this.props.handleSubAttributeUpdate(e.target.id)
         let valueName = this.state.name
        
         let updateID = parseInt(this.props.showSpecificCustomerDeliveryM.id)
         let updateObject={}
         updateObject.delivery_method=valueName
       
 


             if(this.validate()){
                let res=   this.props.updateCustomerDeliveryMethodSettings(updateID, updateObject)
                    res.then(res=>{
                        this.props.getAllDeliveryMethods()
                    })
                    if (this.state.isEditing) {
                        confirmAlert({
                            title: 'Updated Successfully',
                            message: 'Delivery Method ',
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


  console.log("showSpeciSubARENDER", this.props.showSpecificCustomerDeliveryM)
    const {customerData} = this.props

    console.log(this.props.customerData.customerDeliveryList)

        return (
           
                   <div>
                       	<InfoModal status={this.state.isOpen1} message={this.state.message} modalAction={this.toggle1}/>
               <div className="bg-white">
 <h4 className="p-15 mb-0">Delivery Methods For Orders</h4>
 <hr className="m-0"/>
                           
                          
                            <div className="ContentSection p-15">
                           
                              
                                    <div className="row">
                                    <div className="col-md-12 col-lg-12">
                                        {/* <p>Delivery Method</p> */}
                                        <h5 className="p-15 mb-0" style={{marginLeft:"-10px"}}>Delivery Method</h5>
                                        <div className="row d-flex align-items-center">
                                            <div className="col-md-6 col-lg-6">  
                                            <input type="text" 
                                            className={this.state.isEditing===false ? "form-control" : "formControl2 abcd" }
                                            placeholder=""  name="customerDelivery"
                                            // id="delivery_method"
                                            value={this.state.name}
                                            //  value={customerData.customerDelivery.delivery_method} 
                                              onChange={this.handleCategoryInputAction}/>

                                            {this.state.errorObj.delivery_method!==0?<span style={{fontSize:"small",color:"red"}}>Enter delivery method</span>:""}
                                              
                                            </div>






                                            {/* <div className="col-md-6 col-lg-3" onClick={this.handleAddCategoryData}>
                                                <a  className="d-flex align-items-center">
                                                    <i className="fa fa-plus-circle fa-2x mr-2"></i> Add New Delivery Method
                                                </a>
                                            </div> */}


                   



                                                {/* {this.state.isEditing ? (
                                                    <div className="col-md-6 col-lg-3" onClick={this.handleAddCategoryUpdate}>
                                                        <div  >
                                                            <a href="javascript:" className="d-flex align-items-center">
                                                                <i className="fa fa-plus-circle fa-2x mr-2"></i> Update Delivery Method
                                                            </a>
                                                        </div>

                                                            <div className="col-md-6 col-lg-3"  onClick={()=>{this.setState({isEditing:false})}}>
                                                                <a href="javascript:" className="d-flex align-items-center cancel_signlebox" style={{marginLeft:"15em"}}>
                                                                    Cancel 
                                                                </a>
                                                            </div>
                                                    </div>

                                                        ):
                                                        (
                                                        <div className="col-md-6 col-lg-3" onClick={this.handleAddCategoryData}>
                                                        <a href="javascript:" className="d-flex align-items-center">
                                                        <i className="fa fa-plus-circle fa-2x mr-2"></i> Add New Delivery Method
                                                        </a>
                                                        </div>  
                                                  )}         */}


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
                                        <div class="car midCard">
                                            <div class="card-header">
                                                Inactive
                                            </div>


                                            <div class="card-body cardBg"
                                            onDragOver={(e)=>this.onDragOver(e)}
                                            onDrop={(e)=>{this.onDrop(e,"inactive")}}>
                                            <ul class="list-unstyled">
                                                   {this.props.customerData.customerDeliveryList.inactive.map(t=>{
                                                    return <li id={t.id} name={t.delivery_method} onDragStart={(e)=>this.onDragStart(e, t.id)} onDelete={(e)=>this.onDelete(e, t.id)} draggable >
                                                                 <a className="d-flex justify-content-between align-items-center">
                                                                <span id="Wheathers">{t.delivery_method}</span>
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
                                                   {this.props.customerData.customerDeliveryList.active.map(t=>{
                                                    return <li id={t.id} name={t.delivery_method} onDragStart={(e)=>this.onDragStart(e, t.id)} onDelete={(e)=>this.onDelete(e, t.id)} draggable >
                                                                 <a 
                                                                className="d-flex justify-content-between align-items-center" 
                                                                  //className={this.state.isEditing===false ? "form-d-flex justify-content-between align-items-center" : "formControl2 abcd" }
                                                                //   className={this.state.isEditing===false ? "form-control" : "formControl2 abcd" }
                                                                  
                                                                  >
                                                                      <span id="Wheathers" className={this.state.isEditing===false  ? "" :this.state.selectedID === t.id ? "reasonBackground" : " "}>{t.delivery_method}</span>
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
    showSpecificCustomerDeliveryM: state.customerReducer.showSpecificCustomerDeliveryMethod
    }
    )
    export default connect(mapStateToProps,{
        handleExchangeData,
        saveDeliveryMethod,
        getAllDeliveryMethods,
        handleCustomerTypeDelete,
        updateCustomerDeliveryMethodSettings,
        showSpecificCustomerDeliveryMethodSettings,
        
handleDragDropCustomer    })(DeliveryMethods)


   

