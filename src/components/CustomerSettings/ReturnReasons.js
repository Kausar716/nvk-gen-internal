
import React, { Component } from 'react'
import {connect} from "react-redux";
import * as MdIcons from "react-icons/md";
// import './style.css';
import InfoModal from "../Modal/InfoModal"

import {getAllReturnReasonMethods,saveReturnReasonMethod,getAllReasonMethods,handleCustomerTypeDelete,
    handleDragDropCustomer,saveDeliveryMethod,saveNoticationData,getNotificationData,handleExchangeData,
    getAllDeliveryMethods,  updateCustomerReturnReasonSettings,handleExchangeData2,
    showSpecificReturnReasonSettings,} from "../../actions/customerSettingAction";
import { is } from 'immutable';


    class ReturnReasons extends Component {
    state ={
     isOpen1:false,
       message:[],
       isEditing:false,
       name:'',
       return_to_inventoryNo:2,
      
       selectedOption:false,
       selectedID:'',
       //return_to_inventoryNumber:0,
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
            this.setState({
                name:e.target.value
            })
            this.props.handleExchangeData("customerReturnReason", e.target.value)

            //this.props.handleExchangeData(e.target.value,e.target.id,"customerReturnReason")
        }

        handleCategoryInputAction2 = (e)=>{

            this.setState({
                selectedOption:e.currentTarget.value
            })
            // if(e.target.id ==="return_to_inventoryYes")this.props.handleExchangeData2("return_to_inventoryNo", e.target.value)
            // else if(e.target.id ==="return_to_inventoryNo")this.props.handleExchangeData2("return_to_inventoryNo", e.target.value)

            
           // this.props.handleExchangeData2("return_to_inventory",e.currentTarget.value)
            

            //this.props.handleExchangeData(e.target.value,e.target.id,"customerReturnReason")
        }




        handleAddCategoryData = (e)=>{
            if(this.state.name.trim() ==="" || this.props.customerData.customerReturnReason.return_to_inventory ==="2"){
                
                this.setState({isOpen1:true,message:["Please add Reason "]})


            }else{
                let obj = {}
                obj.reason = this.state.name
                obj.return_to_inventory = this.state.selectedOption
                //this.props.customerData.customerReturnReason.return_to_inventory
                obj.status = 1
                let result = this.props.saveReturnReasonMethod(obj)
                result.then(data=>{
                    this.props.getAllReturnReasonMethods()
                })
            }
            // this.props.saveCustomerType()
        
        }

        handleEditClick2 =(t)=> {
            console.log("abcdefg", t  )

            this.setState({
                name: t.reason,
                selectedOption:t.return_to_inventory,
                isEditing:true,
                selectedID:t.id
            })

            this.props.handleExchangeData("customerReturnReason",...this.state.name)
            this.props.handleExchangeData2("return_to_inventory",this.state.selectedOption)
            this.props.showSpecificReturnReasonSettings(t.id)
  
       }



       handleAddCategoryUpdate=(e)=>{
        //debugger;
        console.log("showSpeciSubA", this.props.showSpecificCustomerReturnReason)
         // this.props.handleSubAttributeUpdate(e.target.id)
         let valueName = this.state.name
        
         let updateID = parseInt(this.props.showSpecificCustomerReturnReason.id)
         let updateObject={}
         updateObject.return_to_inventory=this.state.selectedOption
       
            
      let res=   this.props.updateCustomerReturnReasonSettings(updateID, updateObject)
             res.then(res=>{
                 this.props.getAllReturnReasonMethods()
             })

             this.setState({
                 isEditing:false,
                 name:"",
                
             })

     }







render() {
 
    const {customerData} = this.props

    console.log("Aforapple",this.props.customerData.customerReturnReason)


    // customerReturnReason:{reason: "",return_to_inventory: ""},
    // customerReturnReasonList:{active:[],inactive:[]}

        return (
           
                   <div>
                       	{/* <InfoModal status={this.state.isOpen1} message={this.state.message} modalAction={this.toggle1}/> */}
               <div className="bg-white">
 <h4 className="p-15 mb-0">Return Reasons For Adjustments</h4>
                
                            <hr className="m-0"/>
                            <div className="ContentSection p-15">
                           
                                <div className="row">
                                       
                                    </div>
                                    
                                <div className="row">
                                    <div className="col-md-6">
                                        {/* <p>Reason</p> */}
                                        <h5 className="p-15 mb-0"  style={{marginLeft:"-10px"}}> Reason</h5>
                                        <div>
                                            <input type="text"
                                             className={this.state.isEditing===false ? "form-control" : "formControl2 abcd" }
                                            placeholder="" id="reason" name="customerReturnReason"
                                            value={this.state.name} 
                                            // value={customerData.customerReturnReason.reason}
                                                onChange={this.handleCategoryInputAction}/>
                                        </div>
                                        {/* <div className="d-flex justify-content-md-end mt-2">
                                            <a href="javascript;" className="d-flex align-items-center">
                                                <i className="fa fa-plus-circle fa-2x mr-2"></i> Add New Section
                                            </a>
                                        </div> */}
                                    </div>
                                    <div className="col-md-2" style={{marginTop:"1em"}}>
                                        <p>Return to Inventory</p>
                                        <div style={{marginTop:"16px"}}>
                                        <label class="containerC">Yes
                                                        <input type="radio"  name="return_to_inventory" id={"return_to_inventoryYes"}
                                                         value={1} onChange={this.handleCategoryInputAction2} 
                                                         checked = {parseInt(this.state.selectedOption)===1?true:false}
                                                         //checked={this.props.customerData.customerReturnReason.return_to_inventory ==1?true:false}
                                                         />
                                                        <span class="checkmark"></span>
                                                        </label>
                                                        <label class="containerC">No
                                                        <input type="radio" name="return_to_inventory"  id={"return_to_inventoryNo"}  value={0} 
                                                        onChange={this.handleCategoryInputAction2}
                                                        checked = {parseInt(this.state.selectedOption)===0?true:false} 
                                                        //checked={this.props.customerData.customerReturnReason.return_to_inventory ==0?true:false}
                                                        //  checked={customerData.customerReturnReason.return_to_inventory ==0?true:false}
                                                        />
                                                        <span class="checkmark"></span>
                                                </label>
                                        </div>
                                        {/* <div className="d-flex justify-content-md-end mt-2">
                                            <a href="javascript;" className="d-flex align-items-center">
                                                <i className="fa fa-plus-circle fa-2x mr-2"></i> Add New Feature
                                            </a>
                                        </div> */}
                                    </div>

                                    
                                  


                                                {this.state.isEditing ? (
                                                    <div className="d-flex justify-content-md-end mt-2" onClick={this.handleAddCategoryUpdate}>
                                                        <div style={{marginTop:"2.5em"}}>
                                                            <a href="javascript:" className="d-flex align-items-center">
                                                                <i className="fa fa-plus-circle fa-2x mr-2"></i> Update Reason
                                                            </a>
                                                        </div>

                                                            <div className="d-flex justify-content-md-end mt-2"  onClick={()=>{this.setState({isEditing:false})}}>
                                                                <a href="javascript:" className="d-flex align-items-center cancel_signlebox" style={{marginLeft:"4em", marginTop:"1.5em"}}>
                                                                    Cancel 
                                                                </a>
                                                            </div>
                                                    </div>

                                                        ):
                                                        (
                                                            <div className="col-md-2" style={{marginTop:"3.3em"}} onClick={this.handleAddCategoryData}>
                                                            <a  className="d-flex align-items-center">
                                                                <i className="fa fa-plus-circle fa-2x mr-2"></i> Add New Reason
                                                            </a>
                                                        </div>
                                                  )} 

                                   


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
                                        <div class="card midCard" >
                                            <div class="card-header">
                                                Active
                                            </div>
                                            <div class="card-body cardBg" onDragOver={(e)=>{this.onDragOver(e)}} onDrop={(e)=>this.onDrop(e,"active")}>
                                            <ul class="list-unstyled">
                                                   {this.props.customerData.customerReturnReasonList.active.map(t=>{
                                                    return <li id={t.id} name={t.reason} onDragStart={(e)=>this.onDragStart(e, t.id)} onDelete={(e)=>this.onDelete(e, t.id)} draggable >
                                                                 <a className="d-flex justify-content-between align-items-center">
                                                                      <span id="Wheathers"
                                                                     
                                                                       className={this.state.isEditing===false  ? "" :this.state.selectedID === t.id ? "reasonBackground" : " "}
                                                                    
                                                                       > <p style={{paddingTop:"12px"}}>{t.reason}</p></span>
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
    showSpecificCustomerReturnReason:state.customerReducer.showSpecificCustomerSettingReturnReason

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
        updateCustomerReturnReasonSettings,
        showSpecificReturnReasonSettings,
        handleExchangeData2,


        
handleDragDropCustomer    })(ReturnReasons)
