/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { Component } from 'react'
import {connect} from "react-redux";
import * as MdIcons from "react-icons/md";
// import './style.css';
import InfoModal from "../Modal/InfoModal";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';
import {getAllPlantCategories,handleCategoryInputAction,handleAddCategory,handleDragDrop,handleCategoryDelete} from '../../actions/categoryAction'
import {handleCustomerTypeDelete,saveNoticationData,getNotificationData,handleExchangeData,saveCustomerType,
    getAllCustomerType,handleDragDropCustomer,updateCustomerTypeSettings, showSpecificCustomerSettingType,handleExchangeData2} from "../../actions/customerSettingAction";

    import 
    {
       
        handleAttributeDragDrop,
        handleAttributeDragSort,
       
    } 
from '../../actions/attributeAction'

import { is } from 'immutable';


    class Types extends Component {
    state ={
     isOpen1:false,
       message:[],
       isEditing:false,
            name:'',
            sortId: 0,
            activeId: 0,
            subName:'',
            subName2:'',
            selectedID:'',
            btnLabelAdd:'Add New Type',
            btnLabelUpdate: 'Update Type',
            btnLabelCancel:'Cancel',
             deleteon:false
    }


        onDragOver = (ev)=>{
            ev.preventDefault();
        }

        onDragStart=(ev, id)=>{
            console.log("dragstart:", id);
            ev.dataTransfer.setData("id",id)
            let activeId=this.state.activeId
            activeId=id;
            this.setState({activeId})
        }
        componentDidMount(){
            this.props.getAllCustomerType()

        }

        onMouseLeave =((ev, id)=>{
            let sortId=this.state.sortId
            sortId=id;
            this.setState({sortId})
        })


        toggle1 =()=>{
            this.setState({isOpen1:false})
        }

        onDrop=(ev,cat)=>{
            let id= JSON.parse(ev.dataTransfer.getData("id"))

             let datatoParse = this.props.customerData.customerTypeList
            // console.log(cat)

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


        //     let tasks = this.props.plantCategoryList.filter((task)=>{                
        //         return JSON.stringify(task.id) === id;
        // });

        
            //  tasks = datatoParse.inactive.filter((task)=>task.id === id)
             

         
         console.log(tasks)
            // console.log(tasks)
        //    let result= this.props.handleDragDrop(tasks[0])
        //    result.then(res=>{
        //     this.props.getAllPlantCategories()
        //    })
        let alertmsg = 0;
           let doProcess = false;
        //    if(tasks.length>0){

            if (cat === 'active' && tasks[0].status === 0) {
               
                doProcess = true;
                alertmsg = 1;
            }
            if (cat === 'inactive' && tasks[0].status === 1) {
                doProcess = true;
                alertmsg = 2;
            }


            if (doProcess === true) {
                let result= this.props.handleDragDropCustomer(tasks[0])
                result.then(res=>{
                    this.props.getAllCustomerType()
                })   
            }

            if (doProcess === false && cat === 'active' && tasks[0].status === 1 && this.state.sortId !== this.state.activeId) {
                let result= this.props.handleAttributeDragSort(this.state.activeId, this.state.sortId)
                result.then(res=>{
                    this.props.getAllCustomerType()
                }) 
                alertmsg = 3;
            // }




            // if (doProcess === true) {
               
            //     let result= this.props.handleDragDropCustomer(tasks[0],"update-customer-type")
            //     result.then(res=>{
            //         this.props.getAllCustomerType()
                   
            //     }) 
            //     alertmsg = 3;
               
            // }
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
                message: 'Sort Successfully Done',
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


        onDelete =(ev)=>{
            // alert(ev)
            let id= ev.dataTransfer.getData("id");
            console.log(id)
            this.setState({deleteon:true})
           let result= this.props.handleCustomerTypeDelete(id,"delete-customer-type")
           result.then(res=>{
            this.props.getAllCustomerType()
            this.setState({deleteon:false})
           })


        }
        handleCategoryInputAction = (e)=>{
            this.setState({
                name:e.target.value
            })
            this.props.handleExchangeData("customerTypes", e.target.value)
        }

        handleCategoryInputAction2 = (e)=>{
            this.setState({
                subName:e.target.value
            })
            this.props.handleExchangeData2("short_code",e.target.value)
        }


        handleAddCategoryData = (e)=>{
            if( this.state.name.trim() ==="" ||  this.state.subName.trim() ===""){
                
                this.setState({isOpen1:true,message:["please add both type and shortcode"]})


            }else{
                let obj = {}
                obj.customer_type = this.state.name
                //this.props.customerData.customerTypes.customer_type
                obj.short_code = this.state.subName
                //this.props.customerData.customerTypes.short_code
                obj.status = 1
                let result = this.props.saveCustomerType(obj)
                result.then(data=>{
                    this.props.getAllCustomerType()
                })
            }
            // this.props.saveCustomerType()
        
        }


        handleEditClick2 =(t)=> {
            console.log("abcdefg", t  )

            this.setState({
                name: t.customer_type,
                subName:t.short_code,
                selectedID:t.id,
                isEditing:true
            })

            this.props.handleExchangeData("customerTypes",...this.state.name)
            this.props.handleExchangeData("short_code",...this.state.subName)
            this.props.showSpecificCustomerSettingType(t.id)
  
       }

       handleAddCategoryUpdate=(e)=>{
        //debugger;
        console.log("showSpeciSubA", this.props.showSpecificCustomerSetting)
         // this.props.handleSubAttributeUpdate(e.target.id)
         let valueName = this.state.name
         let shortCode = this.state.subName
         let updateID = parseInt(this.props.showSpecificCustomerSetting.id)
         let updateObject={}
         updateObject.customer_type=valueName
         updateObject.short_code=shortCode
        //  updateObject.attribute_id=1
         //updateObject.status=1

      
            
      let res=   this.props.updateCustomerTypeSettings(updateID, updateObject)
             res.then(res=>{
                 this.props.getAllCustomerType()
             })

             this.setState({
                 isEditing:false,
                 name:"",
                 subName:""
             })

     }



render() {
    console.log("showSpeciSubA", this.props.showSpecificCustomerSetting)

    console.log("this.props.customerData.customerTypes.customer_type", this.props.customerData.customerTypes,)
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
                               
                                <div className="row">
                                        <div className="col-md-6">
                                            <label style={{fontWeight:"bold"}}>Type</label>
                                            
                                            <div>
                                                <input type="text"
                                                  className={this.state.isEditing===false ? "form-control" : "formControl2 abcd" }
                                                  placeholder="" name="customerTypes" 
                                               // value={customerData.customerTypes.customer_type}  
                                               value={this.state.name} 
                                                onChange={this.handleCategoryInputAction}/>
                                            </div>
                                            <div className="d-flex justify-content-md-end mt-2">
                                                
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <label>Short Code</label> <span style={{fontSize:"10px", marginTop:"0em"}}> (Upto 8 Char)</span>
                                            <div>
                                                <input type="text"
                                                  className={this.state.isEditing===false ? "form-control" : "formControl2 abcd" }
                                                 placeholder="" name="short_code"
                                                 value={this.state.subName} 
                                                //  value={customerData.customerTypes.short_code} 
                                                   onChange={this.handleCategoryInputAction2} maxLength={8}/>
                                            
                                            </div>





                                            {/* <div className="d-flex justify-content-md-end mt-2" onClick={this.handleAddCategoryData}>
                                                <a className="d-flex align-items-center">
                                                    <i className="fa fa-plus-circle fa-2x mr-2"></i> Add New Type
                                                </a>
                                            </div> */}
                                            {this.state.isEditing ? (
                                                <div className="d-flex justify-content-md-end mt-2" style={{paddingTop:"10px"}} onClick={this.handleAddCategoryUpdate}>
                                                    <div >
                                                        <a href="javascript:" className="d-flex align-items-center">
                                                            <i className="fa fa-plus-circle fa-2x mr-2"></i> Update Type
                                                        </a>
                                                    </div>

                                                        <div className="d-flex justify-content-md-end mt-2"  onClick={()=>{this.setState({isEditing:false})}}>
                                                        <a className="d-flex align-items-center" style={{marginLeft:"2.5em", marginTop:"-6px"}}>Cancel </a>
                                                           
                                                        </div>

                                                </div>


                                                    ):
                                                    (
                                                    <div className="d-flex justify-content-md-end mt-2"  onClick={this.handleAddCategoryData}>
                                                    <a href="javascript:" className="d-flex align-items-center">
                                                    <i className="fa fa-plus-circle fa-2x mr-2"></i> Add New Type
                                                    </a>
                                                    </div>  
                                         )}   







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
                                                   {this.props.customerData.customerTypeList.active.map(t=>{
                                                    return <li id={t.id} name={t.customer_type} onDragStart={(e)=>this.onDragStart(e, t.id)}  onMouseLeave={(e)=>this.onMouseLeave(e, t.id)} onDelete={(e)=>this.onDelete(e, t.id)} draggable >
                                                                 <a className="d-flex justify-content-between align-items-center">
                                                                      <span id="Wheathers" className={this.state.isEditing===false  ? "" :this.state.selectedID === t.id ? "reasonBackground" : " "}>{t.customer_type}</span>
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
    showSpecificCustomerSetting: state.customerReducer.showSpecificCustomerSettingType,
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
        updateCustomerTypeSettings, 
        showSpecificCustomerSettingType,
        handleExchangeData2,
handleDragDropCustomer,
handleAttributeDragDrop,
handleAttributeDragSort,    })(Types)

