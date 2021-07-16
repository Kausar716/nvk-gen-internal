/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { Component } from 'react'
import {connect} from "react-redux";
// import './style.css';
import InfoModal from "../Modal/InfoModal"
import {getAllPlantCategories,handleCategoryInputAction,handleAddCategory,handleDragDrop,handleCategoryDelete} from '../../actions/categoryAction'
import {handleCustomerTypeDelete,saveNoticationData,getNotificationData,handleExchangeData,saveCustomerType,getAllCustomerType,handleDragDropCustomer} from "../../actions/customerSettingAction";
import { is } from 'immutable';


    class Types extends Component {
    state ={
     isOpen1:false,
       message:[]
    }


        onDragOver = (ev)=>{
            ev.preventDefault();
        }

        onDragStart=(ev, id)=>{
            console.log("dragstart:", id);
            ev.dataTransfer.setData("id",id)
        }
        componentDidMount(){
            this.props.getAllCustomerType()

        }


        toggle1 =()=>{
            this.setState({isOpen1:false})
        }

        onDrop=(ev,cat)=>{
            let id= JSON.parse(ev.dataTransfer.getData("id"))
            let datatoParse = this.props.customerData.customerTypeList
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
               
                let result= this.props.handleDragDropCustomer(tasks[0],"update-customer-type")
                result.then(res=>{
                    this.props.getAllCustomerType()
                })   
            }
           }
       

            // this.setState({
            //     ...this.state,
            //     tasks
            // })

        }


        onDelete =(ev)=>{
            // alert(ev)
            let id= ev.dataTransfer.getData("id");
            console.log(id)
           let result= this.props.handleCustomerTypeDelete(id,"delete-customer-type")
           result.then(res=>{
            this.props.getAllCustomerType()
           })


        }
        handleCategoryInputAction = (e)=>{
            this.props.handleExchangeData(e.target.value,e.target.id,"customerTypes")
        }
        handleAddCategoryData = (e)=>{
            if(this.props.customerData.customerTypes.customer_type.trim() ==="" || this.props.customerData.customerTypes.short_code.trim() ===""){
                
                this.setState({isOpen1:true,message:["please add both type and shortcode"]})


            }else{
                let obj = {}
                obj.customer_type = this.props.customerData.customerTypes.customer_type
                obj.short_code = this.props.customerData.customerTypes.short_code
                obj.status = 1
                let result = this.props.saveCustomerType(obj)
                result.then(data=>{
                    this.props.getAllCustomerType()
                })
            }
            // this.props.saveCustomerType()
        
        }




render() {
    var tasks={
        inactive:[],
        active:[],
    }
    const {customerData} = this.props
    if(this.props.plantCategoryList){
        // tasks=this.props.plantCategoryList
         this.props.plantCategoryList.forEach((t)=>{
             console.log(t)
            if(t.status === "1"){
                tasks.active.push(t)
            }
            else if(t.status=== "0"){
                tasks.inactive.push(t)
            }
         })
    }
    console.log(this.props.customerData.customerTypeList)
    // this.props.plantCategoryList.forEach((t)=>{
    //         tasks[t.category].push(
    //             <div key={t.name} onDragStart={(e)=>this.onDragStart(e, t.name)} onDelete={(e)=>this.onDelete(e, t.name)} draggable className="draggable" style={{backgroundColor:t.bgcolor}}>
    //                     {t.name}
    //             </div>
    //         )
    // });


  
    
        return (
           
                   <div>
                       	<InfoModal status={this.state.isOpen1} message={this.state.message} modalAction={this.toggle1}/>
               <div className="bg-white">
                            <h4 className="p-15 mb-0">Categories</h4>
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
                                        <div className="col-md-6">
                                            <label style={{fontWeight:"bold"}}>Type</label>
                                            <div>
                                                <input type="text" className="form-control" placeholder="" id="customer_type" value={customerData.customerTypes.customer_type}   placeholder="Type" onChange={this.handleCategoryInputAction}/>
                                            </div>
                                            <div className="d-flex justify-content-md-end mt-2">
                                                {/* <a href="javascript;" className="d-flex align-items-center">
                                                    <i className="fa fa-plus-circle fa-2x mr-2"></i> Add New Section
                                                </a> */}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <label>Short Code</label> <span style={{fontSize:"10px", marginTop:"0em"}}> (Upto 8 Char)</span>
                                            <div>
                                                <input type="text" className="form-control" placeholder="" id="short_code" value={customerData.customerTypes.short_code}   placeholder="Short Code" onChange={this.handleCategoryInputAction} maxLength={8}/>
                                            
                                            </div>
                                            <div className="d-flex justify-content-md-end mt-2" onClick={this.handleAddCategoryData}>
                                                <a className="d-flex align-items-center">
                                                    <i className="fa fa-plus-circle fa-2x mr-2"></i> Add New Type
                                                </a>
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
                                                   {this.props.customerData.customerTypeList.inactive.map(t=>{
                                                    return <li id={t.id} name={t.customer_type} onDragStart={(e)=>this.onDragStart(e, t.id)} onDelete={(e)=>this.onDelete(e, t.id)} draggable >
                                                                 <a className="d-flex justify-content-between align-items-center">
                                                                <span id="Wheathers">{t.customer_type}</span>
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
                                                <img style={{width:"3em"}} src="./assets/img/Genral_Icons/DragDragtoplace-move.svg" alt="Settings"/>
                                            </div>
                                            <div>
                                                <img style={{width:"3em"}} src="./assets/img/Genral_Icons/DragDragto_place.svg" alt="Settings"/>
                                            </div>
                                            <div className="deleteSpace" onDragOver={(e)=>{this.onDragOver(e)}} onDrop={(e)=>this.onDelete(e)}>
                                                <img style={{width:"3em"}} src="./assets/img/Genral_Icons/Drag _Drop_remove_red.svg" alt="Settings"/>
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
                                                   {this.props.customerData.customerTypeList.active.map(t=>{
                                                    return <li id={t.id} name={t.customer_type} onDragStart={(e)=>this.onDragStart(e, t.id)} onDelete={(e)=>this.onDelete(e, t.id)} draggable >
                                                                 <a className="d-flex justify-content-between align-items-center">
                                                                      <span id="Wheathers">{t.customer_type}</span>
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
    customerData:state.customerReducer
    }
    )
    export default connect(mapStateToProps,{
        handleCustomerTypeDelete,
        handleCategoryInputAction,
        handleAddCategory,
        handleDragDrop,
        handleCategoryDelete,
        handleExchangeData,
        saveCustomerType,
        getAllCustomerType,
handleDragDropCustomer    })(Types)

