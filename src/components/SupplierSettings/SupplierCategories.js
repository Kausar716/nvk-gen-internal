







  /* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { Component } from 'react'
import {connect} from "react-redux";
import * as MdIcons from "react-icons/md";
// import './style.css';
import InfoModal from "../Modal/InfoModal";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';

import {saveReasonMethod,getAllReasonMethods,handleCustomerTypeDelete,handleDragDropCustomer,saveDeliveryMethod,saveNoticationData,getNotificationData,handleExchangeData,getAllDeliveryMethods} from "../../actions/customerSettingAction";
import { is } from 'immutable';
import {getAllSupplierReasonMethods,saveSupplierReasonMethod,handleSupplierExchnageData,saveSupplierCategoryMethod,getAllSupplierCategoryMethods,showSpecificCategorySubAttribute,updateSupplierCategory}   from "../../actions/supplierManagementAction"


    class SupplierCategories extends Component {
    state ={
     isOpen1:false,
       message:[],
       isEditing:false,
       name:'',
       selectedID:'',
       deleteon:false,
      
       subName:'',
       subName2:'',
      
       btnLabelAdd:'Add New Supplier Category ',
       btnLabelUpdate: 'Update Supplier Category ',
       btnLabelCancel:'Cancel',
      
       errorObj:{
        supplier_category:0,
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
               
                let result= this.props.handleDragDropCustomer(tasks[0],"update-supplier-category")
                result.then(res=>{
                    this.props.getAllSupplierCategoryMethods()
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
        //    let result= this.props.handleCustomerTypeDelete(id,"delete-supplier-category")
        //    result.then(res=>{
        //        this.setState({deleteon:false})
        //     this.props.getAllSupplierCategoryMethods()
        //    })


        // }



        onDelete =(ev)=>{
            let id= ev.dataTransfer.getData("id");
            confirmAlert({
                title: 'Delete Supplier Category ',
                message: 'Are you sure want to delete the Supplier Category ?',
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
            let result= this.props.handleCustomerTypeDelete(id,"delete-supplier-category")
            this.setState({deleteon:true})
            result.then(res=>{
                this.props.getAllSupplierCategoryMethods()
                this.setState({deleteon:false})
                confirmAlert({
                    title: 'Delete Successfully',
                    message: 'Supplier Account Reason ',
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
            if(e.target.name === "supplierCategory"){
            errorObj.supplier_category=0
            this.setState({errorObj})}
            this.props.handleSupplierExchnageData(e.target.value,e.target.id,"supplierCategory")
        }


        handleAddCategoryData = (e)=>{
            // if(this.props.supplierData.supplierCategory.category.trim() ===""){
                
            //     this.setState({isOpen1:true,message:["Please add Category"]})


            // }else{
                let obj = {}
                obj.category = this.props.supplierData.supplierCategory.category
                obj.status = 1
            //     let result = this.props.saveSupplierCategoryMethod(obj)
            //     result.then(data=>{
            //         this.props.getAllSupplierCategoryMethods()
            //     })
            // }
            // this.setState({
            //     name:"",
            // })


            if(this.validate()){
                let result = this.props.saveSupplierCategoryMethod(obj)
                result.then(res=>{
                    this.props.getAllSupplierCategoryMethods()
                })
                confirmAlert({
                    title: 'Added Successfully',
                    message: 'Supplier Category',
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


        handleEditClick2 =(t)=> {
            //debugger;
            console.log("tttt", t)
               this.setState({
             name: t.category,
             isEditing:true,
             selectedID:t.id,
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

       validate = ()=>{
        let errorObj = this.state.errorObj
        if(this.state.name.length === 0){
            errorObj.supplier_category=1
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
        errorObj.supplier_category=0
       // errorObj.locationTypeShortCode=0
        this.setState({name: "", subName:"", isEditing:false, selectedID:'', errorObj})
    }

       handleAddCategoryUpdate=()=>{

       // debugger;
      // this.props.handleSubAttributeUpdate(e.target.id)
      
      let updateID = parseInt(this.props.showSpecificCategory.id)
      let updateObject={}
      updateObject.category=this.state.name
     // updateObject.id=this.props.showSpeciSubA.id
         
        //   let res1=  this.props.updateSupplierCategory(updateID, updateObject)
        //   res1.then(res=>{
        //       this.props.getAllSupplierCategoryMethods()
        //   })

        //   this.setState({
        //       isEditing:false,
        //       name:""
        //   })


          if(this.validate()){
            let res=   this.props.updateSupplierCategory(updateID, updateObject)
                res.then(res=>{
                    this.props.getAllSupplierCategoryMethods()
                })
                if (this.state.isEditing) {
                    confirmAlert({
                        title: 'Updated Successfully',
                        message: 'Supplier Category',
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
 
    const {supplierData} = this.props

    console.log(this.props.supplierData.supplierCategoryList)

    console.log("showSpecificCategory", this.props.showSpecificCategory)

        return (
           
                   <div>
                       	<InfoModal status={this.state.isOpen1} message={this.state.message} modalAction={this.toggle1}/>
               <div className="bg-white">
 <h4 className="p-15 mb-0">Supplier Account Category</h4>
                
                            <hr className="m-0"/>
                            <div className="ContentSection p-15">
                               
                                <div className="row">
                                       
                                    </div>
                                    <div className="row">
                                    <div className="col-md-12 col-lg-12">
                                        <p style={{fontWeight:"bold"}}>Category</p>
                                        <div className="row d-flex align-items-center">
                                            <div className="col-md-6 col-lg-6">  
                                            <input type="text"  className={this.state.isEditing===false ? "form-control" : "formControl2 abcd" } placeholder="Category" id="category"
                                            // value={supplierData.supplierCategory.category} 
                                            value={this.state.name}
                                                onChange={this.handleCategoryInputAction}/>
                                                 {this.state.errorObj.supplier_category!==0?<span style={{fontSize:"small",color:"red"}}>Enter Supplier Category</span>:""}
                                            </div>


                                          

                                            {/* {this.state.isEditing ? (
                                            // <div className="col-md-6 col-lg-3" onClick={this.handleAddCategoryUpdate}>
                                            //     <a href="javascript:" className="d-flex align-items-center">
                                            //         <i className="fa fa-plus-circle fa-2x mr-2"></i> Update Position
                                            //     </a>
                                            // </div>  


                                                <div className="col-md-6 col-lg-3" onClick={this.handleAddCategoryUpdate}>
                                                        <div>
                                                        <a href="javascript:" className="d-flex align-items-center">
                                                            <i className="fa fa-plus-circle fa-2x mr-2"></i> Update Categories
                                                        </a>
                                                        </div>  

                                                        <div className="col-md-6 col-lg-3"  onClick={()=>{this.setState({isEditing:false})}}>
                                                        <a href="javascript:" className="d-flex align-items-center cancel_signlebox" style={{float:"left", marginLeft:"13em"}}>
                                                            Cancel 
                                                        </a>
                                                        </div>
                                                </div>


                                                ):
                                                (

                                            <div className="col-md-6 col-lg-3" onClick={this.handleAddCategoryData}>
                                                <a  className="d-flex align-items-center">
                                                    <i className="fa fa-plus-circle fa-2x mr-2"></i> Add New Category
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
                                            onDragOver={(e)=>this.onDragOver(e)}
                                            onDrop={(e)=>{this.onDrop(e,"inactive")}}>
                                            <ul class="list-unstyled">
                                                   {this.props.supplierData.supplierCategoryList && this.props.supplierData.supplierCategoryList.inactive.map(t=>{
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
                                                   {this.props.supplierData.supplierCategoryList ? this.props.supplierData.supplierCategoryList.active.map(t=>{
                                                    return <li id={t.id} name={t.category} onDragStart={(e)=>this.onDragStart(e, t.id)} onDelete={(e)=>this.onDelete(e, t.id)} draggable >
                                                                 <a className="d-flex justify-content-between align-items-center">
                                                                      <span id="Wheathers" className={this.state.isEditing===false  ? "" :this.state.selectedID === t.id ? "reasonBackground" : " "}>{t.category}</span>
                                                                      <span style={{float:"right",fontSize:20, cursor:"pointer", color:"#629c44"}}><MdIcons.MdEdit  
                                                                onClick={() =>this.handleEditClick2(t)}
                                                                /></span>
                                                                 </a>
                                                            </li>
                                                    })
                                                    :
                                                    "Loading..."
                                                    
                                                    }
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





   




