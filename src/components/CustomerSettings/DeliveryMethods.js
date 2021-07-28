

  /* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { Component } from 'react'
import {connect} from "react-redux";
import * as MdIcons from "react-icons/md";
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
       name:'',
       selectedID:'',
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
           let doProcess = false;
           if(tasks.length>0){

            if (cat === 'active' && tasks[0].status === 0) {
               
                doProcess = true;
            }
            if (cat === 'inactive' && tasks[0].status === 1) {
                doProcess = true;
            }
            if (doProcess === true) {
               
                let result= this.props.handleDragDropCustomer(tasks[0],"update-customer-delivery-method")
                result.then(res=>{
                    this.props.getAllDeliveryMethods()
                })   
            }
           }
       

            // this.setState({
            //     ...this.state,
            //     tasks
            // })

        }


        onDelete =(ev)=>{
            let id= ev.dataTransfer.getData("id");
            console.log(id)
           let result= this.props.handleCustomerTypeDelete(id,"delete-customer-delivery-method")
           result.then(res=>{
            this.props.getAllDeliveryMethods()
           })


        }
        handleCategoryInputAction = (e)=>{
            this.setState({
                name:e.target.value
            })

            this.props.handleExchangeData("customerDelivery", e.target.value)
        }

        handleAddCategoryData = (e)=>{
            if(this.state.name.trim() ===""){
                
                this.setState({isOpen1:true,message:["please add both type and shortcode"]})


            }else{
                let obj = {}
                obj.delivery_method = this.state.name
                let result = this.props.saveDeliveryMethod(obj)
                result.then(data=>{
                    this.props.getAllDeliveryMethods()
                })
            }
            // this.props.saveCustomerType()
        
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
       
            
      let res=   this.props.updateCustomerDeliveryMethodSettings(updateID, updateObject)
             res.then(res=>{
                 this.props.getAllDeliveryMethods()
             })

             this.setState({
                 isEditing:false,
                 name:"",
                
             })

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
                                              
                                            </div>






                                            {/* <div className="col-md-6 col-lg-3" onClick={this.handleAddCategoryData}>
                                                <a  className="d-flex align-items-center">
                                                    <i className="fa fa-plus-circle fa-2x mr-2"></i> Add New Delivery Method
                                                </a>
                                            </div> */}


                   



                                                {this.state.isEditing ? (
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
                                                  )}        









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


   

