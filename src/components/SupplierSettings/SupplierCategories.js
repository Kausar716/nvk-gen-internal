







  /* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { Component } from 'react'
import {connect} from "react-redux";
import * as MdIcons from "react-icons/md";
// import './style.css';
import InfoModal from "../Modal/InfoModal"

import {saveReasonMethod,getAllReasonMethods,handleCustomerTypeDelete,handleDragDropCustomer,saveDeliveryMethod,saveNoticationData,getNotificationData,handleExchangeData,getAllDeliveryMethods} from "../../actions/customerSettingAction";
import { is } from 'immutable';
import {getAllSupplierReasonMethods,saveSupplierReasonMethod,handleSupplierExchnageData,saveSupplierCategoryMethod,getAllSupplierCategoryMethods,showSpecificCategorySubAttribute,updateSupplierCategory}   from "../../actions/supplierManagementAction"


    class SupplierCategories extends Component {
    state ={
     isOpen1:false,
       message:[],
       isEditing:false,
       name:''
    }


        onDragOver = (ev)=>{
            ev.preventDefault();
        }

        onDragStart=(ev, id)=>{
            console.log("dragstart:", id);
            ev.dataTransfer.setData("id",id)
        }
        componentDidMount(){
            this.props.getAllSupplierCategoryMethods()

        }


        toggle1 =()=>{
            this.setState({isOpen1:false})
        }

        onDrop=(ev,cat)=>{
            let id= JSON.parse(ev.dataTransfer.getData("id"))
            let datatoParse = this.props.supplierData.supplierCategoryList
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
               
                let result= this.props.handleDragDropCustomer(tasks[0],"update-supplier-category")
                result.then(res=>{
                    this.props.getAllSupplierCategoryMethods()
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
           let result= this.props.handleCustomerTypeDelete(id,"delete-supplier-category")
           result.then(res=>{
            this.props.getAllSupplierCategoryMethods()
           })


        }
        handleCategoryInputAction = (e)=>{
            this.setState({
                name:e.target.value
            })
            this.props.handleSupplierExchnageData(e.target.value,e.target.id,"supplierCategory")
        }
        handleAddCategoryData = (e)=>{
            if(this.props.supplierData.supplierCategory.category.trim() ===""){
                
                this.setState({isOpen1:true,message:["please add Reason"]})


            }else{
                let obj = {}
                obj.category = this.props.supplierData.supplierCategory.category
                obj.status = 1
                let result = this.props.saveSupplierCategoryMethod(obj)
                result.then(data=>{
                    this.props.getAllSupplierCategoryMethods()
                })
            }
            // this.props.saveCustomerType()
        
        }


        handleEditClick2 =(t)=> {
            //debugger;
            console.log("tttt", t)
               this.setState({
             name: t.category,
             isEditing:true
         })

         this.props.handleSupplierExchnageData(...this.state.name,"category","supplierCategory")
            //this.props.handleReasonInputAction("supplierReason", ...this.state.name)
            this.props.showSpecificCategorySubAttribute(t.id)

           // console.log("ttttttt", t,  this.props.handleReasonInputAction())
            // debugger;  
        //  this.setState({
        //      name: t.value,
        //      isEditing:true
        //  })
   
       }


       handleAddCategoryUpdate=()=>{

        debugger;
      // this.props.handleSubAttributeUpdate(e.target.id)
      
      let updateID = parseInt(this.props.showSpecificCategory.id)
      let updateObject={}
      updateObject.category=this.state.name
     // updateObject.id=this.props.showSpeciSubA.id
         
          let res1=  this.props.updateSupplierCategory(updateID, updateObject)
          res1.then(res=>{
              this.props.getAllSupplierCategoryMethods()
          })

          this.setState({
              isEditing:false,
              name:""
          })

          

  }





render() {
 
    const {supplierData} = this.props

    console.log(this.props.supplierData.supplierCategoryList)

    console.log("showSpecificCategory", this.props.showSpecificCategory)

        return (
           
                   <div>
                       	<InfoModal status={this.state.isOpen1} message={this.state.message} modalAction={this.toggle1}/>
               <div className="bg-white">
 <h4 className="p-15 mb-0">Supplier Account Reasons (INACTIVE Profile)</h4>
                
                            <hr className="m-0"/>
                            <div className="ContentSection p-15">
                               
                                <div className="row">
                                       
                                    </div>
                                    <div className="row">
                                    <div className="col-md-12 col-lg-12">
                                        <p>Reasons</p>
                                        <div className="row d-flex align-items-center">
                                            <div className="col-md-6 col-lg-6">  
                                            <input type="text"  className={this.state.isEditing===false ? "form-control" : "formControl2 abcd" } placeholder="category" id="category"
                                            // value={supplierData.supplierCategory.category} 
                                            value={this.state.name}
                                                onChange={this.handleCategoryInputAction}/>
                                            </div>


                                          

                                            {this.state.isEditing ? (
                                            <div className="col-md-6 col-lg-3" onClick={this.handleAddCategoryUpdate}>
                                                <a href="javascript:" className="d-flex align-items-center">
                                                    <i className="fa fa-plus-circle fa-2x mr-2"></i> Update Position
                                                </a>
                                            </div>  

                                                ):
                                                (

                                            <div className="col-md-6 col-lg-3" onClick={this.handleAddCategoryData}>
                                                <a  className="d-flex align-items-center">
                                                    <i className="fa fa-plus-circle fa-2x mr-2"></i> Add New Category
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
                                                   {this.props.supplierData.supplierCategoryList.inactive.map(t=>{
                                                    return <li id={t.id} name={t.category} onDragStart={(e)=>this.onDragStart(e, t.id)} onDelete={(e)=>this.onDelete(e, t.id)} draggable >
                                                                 <a className="d-flex justify-content-between align-items-center">
                                                                <span id="Wheathers">{t.category}</span>
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
                                                   {this.props.supplierData.supplierCategoryList.active.map(t=>{
                                                    return <li id={t.id} name={t.category} onDragStart={(e)=>this.onDragStart(e, t.id)} onDelete={(e)=>this.onDelete(e, t.id)} draggable >
                                                                 <a className="d-flex justify-content-between align-items-center">
                                                                      <span id="Wheathers">{t.category}</span>
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
            showSpecificCategory:state.supplierData.specificCategorySubAttribute
        
   
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
        getAllSupplierCategoryMethods,
        saveSupplierCategoryMethod,
        showSpecificCategorySubAttribute,
        updateSupplierCategory,

        
handleDragDropCustomer    })((SupplierCategories))





   




