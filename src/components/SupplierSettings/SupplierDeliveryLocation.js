







  /* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { Component } from 'react'
import {connect} from "react-redux";
// import './style.css';
import InfoModal from "../Modal/InfoModal"
import { countryDetails } from '../Help/countryList';

import {saveReasonMethod,getAllReasonMethods,handleCustomerTypeDelete,handleDragDropCustomer,saveDeliveryMethod,saveNoticationData,getNotificationData,handleExchangeData,getAllDeliveryMethods} from "../../actions/customerSettingAction";
import { is } from 'immutable';
import {getAllSupplierReasonMethods,saveSupplierReasonMethod,handleSupplierExchnageData,saveSupplierCategoryMethod,getAllSupplierCategoryMethods,getAllSupplierLocationMethods,saveSupplierLocationMethod}   from "../../actions/supplierManagementAction"


    class SupplierDeliveryLocation extends Component {
    state ={
     isOpen1:false,
       message:[],
       countZipRegix:null
    }


        onDragOver = (ev)=>{
            ev.preventDefault();
        }

        onDragStart=(ev, id)=>{
            console.log("dragstart:", id);
            ev.dataTransfer.setData("id",id)
        }
        componentDidMount(){
            this.props.getAllSupplierLocationMethods()

        }


        toggle1 =()=>{
            this.setState({isOpen1:false})
        }

        onDrop=(ev,cat)=>{
            let id= JSON.parse(ev.dataTransfer.getData("id"))
            let datatoParse = this.props.supplierData.supplierLocationList
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
               
                let result= this.props.handleDragDropCustomer(tasks[0],"update-delivery-supplier")
                result.then(res=>{
                    this.props.getAllSupplierLocationMethods()
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
           let result= this.props.handleCustomerTypeDelete(id,"delete-delivery-supplier")
           result.then(res=>{
            this.props.getAllSupplierLocationMethods()
           })


        }
        handleCategoryInputAction = (e)=>{
            this.props.handleSupplierExchnageData(e.target.value,e.target.id,"supplierLocation")
        }
        validation = () =>{
            let {location,address,city,country,state,zip,lat} = this.props.supplierData.supplierLocation

            // if(location ==="" || address ==="" || city===""|| country===""||state===""||zip===""||lat ==="")
            // return 1
            // if (zip === "zipcode") {
                if(zip ==""){
                     this.setState({message:["Postal/ZIP not valid"]})
                    // alert("DSaf")
                    return 1

                }
                if(zip !== "" ){
                if ( !zip.trim().match(this.countZipRegix)) {
                    this.setState({message:["Postal/ZIP not valid"]})
                    // alert("DSaf")
                    return 1
                    // document.getElementById("zipcode-validtor").innerText = "Postal/ZIP not valid"
                    // errorCount++;

                } else {
                    // document.getElementById("zipcode-validtor").innerText = ""
                }
            }

            // }
        }
        handleAddCategoryData = (e)=>{
            let errorLength =  this.validation()
            if(errorLength ===1){
                
                this.setState({isOpen1:true,message:[...this.state.message,"Please fill all fileds"]})


            }else{
                let obj = {}
                obj.location = this.props.supplierData.supplierLocation.location
                obj.address = this.props.supplierData.supplierLocation.address
                obj.city = this.props.supplierData.supplierLocation.city
                obj.country = this.props.supplierData.supplierLocation.country
                obj.state = this.props.supplierData.supplierLocation.state
                obj.zip = this.props.supplierData.supplierLocation.zip
                obj.lat = this.props.supplierData.supplierLocation.lat
                obj.long = 2
                obj.status = 1
                let result = this.props.saveSupplierLocationMethod(obj)
                result.then(data=>{
                    this.props.getAllSupplierLocationMethods()
                })
            // }
            // this.props.saveCustomerType()
        
        }
    }




render() {
 
    const {supplierData} = this.props

           
    let allCountry = Object.keys(countryDetails);
        
    let allStates ;
    // let countZipRegix
    if(supplierData.supplierLocation){
      
        if(supplierData.supplierLocation.country && supplierData.supplierLocation.country !== "Select Country"){
            console.log(countryDetails)
            console.log(supplierData.supplierLocation.country)
            console.log(countryDetails[supplierData.supplierLocation.country])
            allStates = countryDetails[supplierData.supplierLocation.country][0];
            this.countZipRegix=countryDetails[supplierData.supplierLocation.country][1][0]
            console.log(this.countZipRegix)
            // console.log(this.state.clientData.country)
        }
    }

    console.log(this.props.supplierData.supplierCategoryList)
        return (
           
                   <div>
                       	<InfoModal status={this.state.isOpen1} message={this.state.message} modalAction={this.toggle1}/>
               <div className="bg-white">
 <h4 className="p-15 mb-0"> Supplier Delivery Locations</h4>
                
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
                                        <div className="col-md-4">
                                            {/* <p>Location</p> */}
                                            <label for="Category">Location</label>
                                            <div>
                                                <input type="text" className="form-control"  id="location" value={supplierData.supplierLocation.location}   placeholder="location" onChange={this.handleCategoryInputAction}/>
                                            </div>
                                            <div className="d-flex justify-content-md-end mt-2">
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            {/* <p>Address</p> */}
                                            <label for="Category">Address</label>
                                            <div>
                                            <input type="text" className="form-control" placeholder="" id="address" value={supplierData.supplierLocation.address}   placeholder="address" onChange={this.handleCategoryInputAction}/>
                                                {/* <Field
                                                        name="Imperial in Height"
                                                        component={renderField}
                                                        type="text"
                                                        validate={[ required]}
                                                    /> */}
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            {/* <p>City</p> */}
                                            <label for="Category">City</label>
                                            <div>
                                                <input type="text" className="form-control" placeholder="" id="city" value={supplierData.supplierLocation.city}   placeholder="city" onChange={this.handleCategoryInputAction}/>
                                            </div>
                                            {/* <div className="d-flex justify-content-md-end mt-2">
                                                <a href="javascript;" className="d-flex align-items-center">
                                                    <i className="fa fa-plus-circle fa-2x mr-2"></i> Add New Height
                                                </a>
                                            </div> */}
                                        </div>
                                    </div>


                                    <div className="row" style={{marginTop:"0.7em"}}>
                                            <div className="col-md-3">
                                                        <label for="Category">Prov/State</label>
                                                            <select className="form-control"  id="state"  value={supplierData.supplierLocation.state}  onChange={this.handleCategoryInputAction}>
                                                            <option>{supplierData.supplierLocation.state}</option>
                                                            {allStates && allStates.map((c, i)=>{
                                                                    return <option id={allStates[i]}>{allStates[i]}</option>
                                                            })}
                                                                {/* <option value="Ontario" selected={supplierData.supplierLocation.state =="Ontario"?"selected":""}>Ontario</option>
                                                                <option value="Alberta" selected={supplierData.supplierLocation.state =="Alberta"?"selected":""}>Alberta</option>
                                                                <option value="Quebec" selected={supplierData.supplierLocation.state =="Quebec"?"selected":""}>Quebec</option> */}
                                                            </select>
                                            </div>

                                            <div className="col-md-3">
                                                        <label for="Category">Country</label>
                                                            <select className="form-control"  id="country"  value={supplierData.supplierLocation.country}   placeholder="country" onChange={this.handleCategoryInputAction}>
                                                                <option>{supplierData.supplierLocation.country}</option>
                                                                {allCountry.map((country, i)=>{
                                                                    return <option id={allCountry[i]}>{allCountry[i]}</option>
                                                                })}
                                                                {/* <option value="Canada" selected={supplierData.supplierLocation.country =="Canada"?"selected":""}>Canada</option>
                                                                <option value="India" selected={supplierData.supplierLocation.country =="India"?"selected":""}>India</option>
                                                                <option value="Africa" selected={supplierData.supplierLocation.country =="Africa"?"selected":""}>Africa</option> */}
                                                            </select>
                                            </div>
                                            <div className="col-md-3">
                                            {/* <p></p> */}
                                            <label for="Category">Postal/ZIP</label>
                                            <div>
                                                <input type="text" className="form-control" id="zip" value={supplierData.supplierLocation.zip}   placeholder="zip" onChange={this.handleCategoryInputAction}/>
                                            </div>
                                            <div className="d-flex justify-content-md-end mt-2">
                                            </div>
                                        </div>
                                        

                                        <div className="col-md-3">
                                            {/* <p></p> */}
                                            <label for="Category">Lat/Long</label>
                                            <div>
                                                <input type="text" className="form-control" placeholder="" id="lat" value={supplierData.supplierLocation.lat}   placeholder="lat" onChange={this.handleCategoryInputAction}/>
                                            </div>
                                            <div className="d-flex justify-content-md-end mt-2" onClick={this.handleAddCategoryData}>
                                                <a  className="d-flex align-items-center">
                                                    <i className="fa fa-plus-circle fa-2x mr-2"></i> Add New Location
                                                </a>
                                                {/* <a href="javascript;" className="d-flex align-items-center" style={{marginLeft:"1em"}}> Reset</a> */}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row" style={{marginTop:"1.2em"}}>
                                
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
                                                   {this.props.supplierData.supplierLocationList.inactive.map(t=>{
                                                    return <li id={t.id} name={t.location} onDragStart={(e)=>this.onDragStart(e, t.id)} onDelete={(e)=>this.onDelete(e, t.id)} draggable >
                                                                 <a className="d-flex justify-content-between align-items-center">
                                                                <span id="Wheathers">{t.location}</span>
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
                                                <img style={{width:"5em"}} src="./assets/img/Genral_Icons/DragDragtoplace-move.svg" alt="Settings"/>
                                            </div>
                                            <div>
                                                <img style={{width:"5em"}} src="./assets/img/Genral_Icons/DragDragto_place.svg" alt="Settings"/>
                                            </div>
                                            <div className="deleteSpace" onDragOver={(e)=>{this.onDragOver(e)}} onDrop={(e)=>this.onDelete(e)}>
                                                <img style={{width:"5em"}} src="./assets/img/Genral_Icons/Drag _Drop_remove_red.svg" alt="Settings"/>
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
                                                   {this.props.supplierData.supplierLocationList.active.map(t=>{
                                                    return <li id={t.id} name={t.location} onDragStart={(e)=>this.onDragStart(e, t.id)} onDelete={(e)=>this.onDelete(e, t.id)} draggable >
                                                                 <a className="d-flex justify-content-between align-items-center">
                                                                      <span id="Wheathers">{t.location}</span>
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
            supplierData:state.supplierData
        
   
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
        getAllSupplierLocationMethods,
        saveSupplierLocationMethod,

        
handleDragDropCustomer    })((SupplierDeliveryLocation))





   




