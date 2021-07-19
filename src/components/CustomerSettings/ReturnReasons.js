
import React, { Component } from 'react'
import {connect} from "react-redux";
// import './style.css';
import InfoModal from "../Modal/InfoModal"

import {getAllReturnReasonMethods,saveReturnReasonMethod,getAllReasonMethods,handleCustomerTypeDelete,handleDragDropCustomer,saveDeliveryMethod,saveNoticationData,getNotificationData,handleExchangeData,getAllDeliveryMethods} from "../../actions/customerSettingAction";
import { is } from 'immutable';


    class ReturnReasons extends Component {
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
            this.props.getAllReturnReasonMethods()

        }


        toggle1 =()=>{
            this.setState({isOpen1:false})
        }

        onDrop=(ev,cat)=>{
            let id= JSON.parse(ev.dataTransfer.getData("id"))
            let datatoParse = this.props.customerData.customerReturnReasonList
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
               
                let result= this.props.handleDragDropCustomer(tasks[0],"update-customer-reason")
                result.then(res=>{
                    this.props.getAllReturnReasonMethods()
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
           let result= this.props.handleCustomerTypeDelete(id,"delete-customer-reason")
           result.then(res=>{
            this.props.getAllReturnReasonMethods()
           })


        }
        handleCategoryInputAction = (e)=>{
            this.props.handleExchangeData(e.target.value,e.target.id,"customerReturnReason")
        }
        handleAddCategoryData = (e)=>{
            if(this.props.customerData.customerReturnReason.reason.trim() ==="" || this.props.customerData.customerReturnReason.return_to_inventory ==="2"){
                
                this.setState({isOpen1:true,message:["Please add Reason "]})


            }else{
                let obj = {}
                obj.reason = this.props.customerData.customerReturnReason.reason
                obj.return_to_inventory = this.props.customerData.customerReturnReason.return_to_inventory
                obj.status = 1
                let result = this.props.saveReturnReasonMethod(obj)
                result.then(data=>{
                    this.props.getAllReturnReasonMethods()
                })
            }
            // this.props.saveCustomerType()
        
        }




render() {
 
    const {customerData} = this.props

    console.log(this.props.customerData.customerReasonList)


    // customerReturnReason:{reason: "",return_to_inventory: ""},
    // customerReturnReasonList:{active:[],inactive:[]}

        return (
           
                   <div>
                       	{/* <InfoModal status={this.state.isOpen1} message={this.state.message} modalAction={this.toggle1}/> */}
               <div className="bg-white">
 <h4 className="p-15 mb-0">Return Reasons For Adjustments</h4>
                
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
                                    <div className="col-md-6">
                                        {/* <p>Reason</p> */}
                                        <h5 className="p-15 mb-0"  style={{marginLeft:"-10px"}}> Reason</h5>
                                        <div>
                                            <input type="text" className="form-control" placeholder="" id="reason" value={customerData.customerReturnReason.reason}   placeholder="Reason" onChange={this.handleCategoryInputAction}/>
                                        </div>
                                        {/* <div className="d-flex justify-content-md-end mt-2">
                                            <a href="javascript;" className="d-flex align-items-center">
                                                <i className="fa fa-plus-circle fa-2x mr-2"></i> Add New Section
                                            </a>
                                        </div> */}
                                    </div>
                                    <div className="col-md-2">
                                        <p>Return to Inventory</p>
                                        <div style={{marginTop:"20px"}}>
                                        <label class="containerC">Yes
                                                        <input type="radio"  name="radio1" id={"return_to_inventory"} value={1} onChange={this.handleCategoryInputAction} checked={customerData.customerReturnReason.return_to_inventory ==1?true:false}/>
                                                        <span class="checkmark"></span>
                                                        </label>
                                                        <label class="containerC">No
                                                        <input type="radio" name="radio1"  id={"return_to_inventory"}  value={0} onChange={this.handleCategoryInputAction} checked={customerData.customerReturnReason.return_to_inventory ==0?true:false}/>
                                                        <span class="checkmark"></span>
                                                </label>
                                        </div>
                                        {/* <div className="d-flex justify-content-md-end mt-2">
                                            <a href="javascript;" className="d-flex align-items-center">
                                                <i className="fa fa-plus-circle fa-2x mr-2"></i> Add New Feature
                                            </a>
                                        </div> */}
                                    </div>

                                    
                                    <div className="col-md-2" style={{marginTop:"2.3em"}} onClick={this.handleAddCategoryData}>
                                                <a  className="d-flex align-items-center">
                                                    <i className="fa fa-plus-circle fa-2x mr-2"></i> Add New Reason
                                                </a>
                                    </div>
                                   


                                </div>
                                    {/* <div className="row">
                                    <div className="col-md-12 col-lg-12">
                                        <p>Term</p>
                                        <div className="row d-flex align-items-center">
                                            <div className="col-md-6 col-lg-6">  
                                            <input type="text" className="form-control" placeholder="Term" id="term" value={customerData.customerTerm.term}    onChange={this.handleCategoryInputAction}/>
                                              
                                            </div>
                                            <div className="col-md-6 col-lg-3" onClick={this.handleAddCategoryData}>
                                                <a  className="d-flex align-items-center">
                                                    <i className="fa fa-plus-circle fa-2x mr-2"></i>Add New Term
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
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
                                                   {this.props.customerData.customerReturnReasonList.inactive.map(t=>{
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
                                                <a href="javascript;">
                                                    {/* <i className="fas fa-angle-double-right"></i> */}
                                                    <img style={{width:"5em",  marginLeft:"-10px"}} src="./assets/img/Genral_Icons/DragDragtoplace-move.svg" alt="Settings"/>
                                                </a>
                                            </div>
                                            <div>
                                                <a href="javascript;">
                                                    {/* <i className="fas fa-arrows-alt"></i> */}
                                                    <img style={{width:"5em",  marginLeft:"-10px"}} src="./assets/img/Genral_Icons/DragDragto_place.svg" alt="Settings"/>
                                                </a>
                                            </div>
                                            <div>
                                                <a href="javascript;" className="icDelete">
                                                <img style={{width:"5em",  marginLeft:"-10px"}} src="./assets/img/Genral_Icons/Drag _Drop_remove_red.svg" alt="Settings"/>
                                                    {/* <i className="fas fa-trash"></i> */}
                                                </a>
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
                                                   {this.props.customerData.customerReturnReasonList.active.map(t=>{
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
        handleExchangeData,
        saveDeliveryMethod,
        getAllDeliveryMethods,
        handleCustomerTypeDelete,
        getAllReasonMethods,
        getAllReturnReasonMethods,
        saveReturnReasonMethod,

        
handleDragDropCustomer    })(ReturnReasons)
