

  /* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { Component } from 'react'
import {connect} from "react-redux";
import * as MdIcons from "react-icons/md";
import './style.css';
import InfoModal from "../Modal/InfoModal"

import {saveReasonMethod,getAllReasonMethods,handleCustomerTypeDelete,handleDragDropCustomer,saveDeliveryMethod,saveNoticationData,getNotificationData,handleExchangeData,getAllDeliveryMethods} from "../../actions/customerSettingAction";
import { is } from 'immutable';
import {getAllSupplierReasonMethods,saveSupplierReasonMethod,handleSupplierExchnageData, showSpecificSubAttribute,handleReasonInputAction, updateSupplierReasonMethods}   from "../../actions/supplierManagementAction"
//import {handlePositionInputAction} from '../../actions/attributeAction'

    class SupplierAccountReasons extends Component {
    state ={
     isOpen1:false,
       message:[],
       isEditing:false,
       name:'',
       selectedID:'',
       deleteon:false
    }


        onDragOver = (ev)=>{
            ev.preventDefault();
        }

        onDragStart=(ev, id)=>{
            console.log("dragstart:", id);
            ev.dataTransfer.setData("id",id)
        }
        componentDidMount(){
            this.props.getAllSupplierReasonMethods()

        }


        toggle1 =()=>{
            this.setState({isOpen1:false})
        }

        onDrop=(ev,cat)=>{
            let id= JSON.parse(ev.dataTransfer.getData("id"))
            let datatoParse = this.props.supplierData.supplierReasonList
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
               
                let result= this.props.handleDragDropCustomer(tasks[0],"update-supplier-reasons")
                result.then(res=>{
                    this.props.getAllSupplierReasonMethods()
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
            this.setState({deleteon:true})
           let result= this.props.handleCustomerTypeDelete(id,"delete-supplier-reasons")
           result.then(res=>{
            this.setState({deleteon:false})
            this.props.getAllSupplierReasonMethods()
           })


        }
        handleCategoryInputAction = (e)=>{

            this.setState({
                name:e.target.value
            })
            console.log("eeeee", e.target.value,)
            //this.props.handleReasonInputAction("supplierReason", e.target.value)
            this.props.handleSupplierExchnageData(e.target.value,e.target.id,"supplierReason")
        }
        handleAddCategoryData = (e)=>{
            if(this.props.supplierData.supplierReason.reason.trim() ===""){
                
                this.setState({isOpen1:true,message:["please add Reason"]})


            }else{
                let obj = {}
                obj.reason = this.props.supplierData.supplierReason.reason
                obj.status = 1
                let result = this.props.saveSupplierReasonMethod(obj)
                result.then(data=>{
                    this.props.getAllSupplierReasonMethods()
                })
            }
            this.setState({
                name:"",
            })
            // this.props.saveCustomerType()handleReasonInputAction
        
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


       handleAddCategoryUpdate=()=>{
          // debugger;
        // this.props.handleSubAttributeUpdate(e.target.id)
        
        let updateID = parseInt(this.props.showSpeciSubA.id)
        let updateObject={}
        updateObject.reason=this.state.name
       // updateObject.id=this.props.showSpeciSubA.id
           
            let res1=   this.props.updateSupplierReasonMethods(updateID, updateObject)
            res1.then(res=>{
                this.props.getAllSupplierReasonMethods()
            })

            this.setState({
                isEditing:false,
                name:""
            })

            

    }


render() {

    console.log("showSpeciSubA", this.props.showSpeciSubA)
 
    const {supplierData} = this.props

    console.log(this.props.supplierData.supplierReasonList)
    let inActiveList = this.props.supplierData.supplierReasonList.inactive;

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
                                              
                                            </div>

                                            {this.state.isEditing ? (
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

                                                )}     

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
                                                   {
                                                  inActiveList && inActiveList.map(t=>{
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
                                                   {this.props.supplierData.supplierReasonList.active && this.props.supplierData.supplierReasonList.active.map(t=>{
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

        
handleDragDropCustomer    })((SupplierAccountReasons))





   



