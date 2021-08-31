import React, { useEffect, useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import DatePicker from 'react-date-picker';
import {connect} from "react-redux";
import TablePagination from '../Pagination/index';
import {getAllCustomer,handleRadioFilter,handleSearchFilter,handleAlphabetFilter, 
     handleAplhabetFilterBySN,
     handlePurchaseOrderFilert,
     setSupplierToAddPo,handleOrderDetailsInput,addPo,
    getPoSupplierFilter,getPoJobDescription,getPoOrderFilter,getPoPlantProductFilter,getPoSkuFilter,getSupplierOrderFilter

} from "../../actions/purchaseOrderManagementAction";
import {getAllPlantAction,serachPlant} from '../../actions/plantManagerAction'
import {getAllSuppliers} from "../../actions/supplierManagementAction"
// import initialDetails from './initialDetails';
// import './style.css'
import '../PlantManager/index.css'
import { Link } from "react-router-dom";
import Autosuggest from 'react-autosuggest';
import PurchaseOrderTable from "./purchaseOrderTable"



 const OrderDetails = (props) =>{
    const [value, onChange] = useState(new Date());
    useEffect(()=>{
        props.getAllSuppliers()
    },[])

    const handleCalendarChange=(timestamp)=>{
        console.log(timestamp)
        console.log(new Date(timestamp))
        let latest_date = `${new Date(timestamp).getDay()}-${new Date(timestamp).getMonth()}-${new Date(timestamp).getFullYear()}`
        console.log(latest_date)
        console.log(new Date(latest_date))
        props.handleOrderDetailsInput("latest_date",latest_date)
    }
    const handleSupplierDropDown = (e)=>{
        console.log(e.target.value)
        let selectedSupplier = supplierList.filter(supplier=>supplier.id===JSON.parse(e.target.value))
        console.log(selectedSupplier)
        props.setSupplierToAddPo(selectedSupplier[0])
    }
    const handleInputData = (e) => {
        console.log(e.target.id)
        console.log(e.target.value)
        let {id,value}=e.target
        if(id=== "overall"|| id === "individual"){
            props.handleOrderDetailsInput("discount_type",id)
        }
        else if(id==="include_royality"){
            let val=0
            val =(poData.include_royality === 0||poData.include_royality===null)?1:0
            console.log(poData)
            console.log(val)
            props.handleOrderDetailsInput("include_royality",val)
        }
        else
        props.handleOrderDetailsInput(id,value)
    }
    const handleButtonClick = ()=>{
        console.log(props.poData)
        props.addPo(props.poData)
    }
    const supplierList = props.supplierData
    const poData = props.poData
    const dispatchTypeList =["Incoming Delivery","Pickup","Delivery & Pickup"]
    // const latest_date_format = new Date(props.poData.latest_date)





console.log(props.supplierData)
    return (
        <div class="bg-white px-3 py-3">
        <form>
            <h2>Purchase Order Details</h2>
            <hr/>
           {props.selectedSupplier? <div class="px-3 py-3 bg-grey-transparent-2">
                <div class="row ">
                    <div class="col-md-6 col-lg-6">
                        <h4>John Smith Landscaping</h4>
                        <div>
                            <div>
                                <b class="mr-3">Type:</b>
                                <span class="textGrey">Finished Plants, Liners</span>
                            </div>
                            <div>
                                <b class="mr-3">Tax Exempt:</b>
                                <span class="textGrey">No</span>
                            </div>
                            <div>
                                <b class="mr-3">Terms:</b>
                                <span class="textGrey">Net 30</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 text-md-right mt-3 mt-md-0">
                        <h4>Ordered By</h4>
                        <div>
                            <div><span class="textGrey">B. Vanderkruk</span></div>
                            <div><span class="textGrey">brent@nvknuseries.com</span></div>
                        </div>
                    </div>
                </div>
                
            </div>:<div class="col-md-6 col-lg-4 mt-2 mt-md-0">
                            <label>Supplier</label>
                            <select class="form-control" value={props.selectedSupplier} onChange={handleSupplierDropDown}>
                                <option value={null}>Select</option>
                                {supplierList.map(supplier=>{
                                    return <option value={supplier.id}>{supplier.supplier_name}</option>
                                })}
                            </select>
                        </div>}


            <div class="row mt-3">
                <div class="col-md-12 col-lg-6 col-xl-8">
                    <div class="row mt-3">
                        <div class="col-md-12 col-lg-12">
                            <label>Discount</label>
                            <div class="row align-items-center">
                                <div class="col-md-4 col-lg-2">
                                    <input type="text" class="form-control" placeholder="" id="discount_percent" onChange={handleInputData}></input>
                                </div>
                                <div class="col-md-6 col-lg-4 d-flex mt-3 mt-md-0">
                                    <div class="custom-control custom-radio">
                                        <input type="radio" id="overall" name="overall" class="custom-control-input" onClick={handleInputData} checked={poData.discount_type==="overall"?true:false} />
                                        <label class="custom-control-label" for="overall">Overall</label>
                                    </div>
                                    <div class="custom-control custom-radio ml-3">
                                        <input type="radio" id="individual" name="individual" class="custom-control-input" onClick={handleInputData} checked={poData.discount_type==="individual"?true:false} />
                                        <label class="custom-control-label" for="individual">Individual</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-12 col-lg-6  col-xl-4">
                    <div class="row mt-3">
                        <div class="col-md-6 col-lg-6">
                            <label class="mr-2 mr-md-0">Requested Date</label>
                            <DatePicker onChange={onChange} value={value} id={"latest_date"} />
                        </div>
                        <div class="col-md-6 col-lg-6 mt-3 mt-md-0">
                            <label class="mr-2 mr-md-0">Latest Date</label>
                            <DatePicker onChange={handleCalendarChange} value={poData.latest_date?new Date(poData.latest_date):new Date()} id={"latest_date"}/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-md-12 col-lg-8">
                    <div class="row mt-3">
                        <div class="col-md-6 col-lg-4">
                            <label>Dispatch Type</label>
                            {/* <input type="text" class="form-control" placeholder="Pickup" id="dispatch_type" value={poData.dispatch_type} onChange={handleInputData}></input> */}
                            
                            <select class="form-control" value={props.selectedSupplier} onChange={handleSupplierDropDown}>
                                <option value={null}>Select</option>
                                {dispatchTypeList.map(dispatchType=>{
                                    return <option value={dispatchType}>{dispatchType}</option>
                                })}
                            </select>
                        </div>
                        <div class="col-md-6 col-lg-4 mt-2 mt-md-0">
                            <label>Currency</label>
                            <select class="form-control">
                                <option>Canadian Dollars</option>
                                <option>Option 1</option>
                                <option>Option 2</option>
                            </select>
                        </div>
                        <div class="col-md-6 col-lg-4 mt-2 mt-md-0">
                            <label>Units</label>
                            <select class="form-control">
                                <option>Metric</option>
                                <option>Option 1</option>
                                <option>Option 2</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-md-12 col-lg-4">
                    <div class="row mt-3">
                        <div class="col-md-6 col-lg-6">
                            <label>Supplier Order# </label>
                            <input type="text" class="form-control" placeholder="" id="supplier_order" value={poData.supplier_order} onChange={handleInputData}></input>
                        </div>
                        <div class="col-md-6 col-lg-6 mt-3 mt-md-0">
                            <label>Include Royalty</label>
                            <div class="d-flex align-items-center flex-wrap ml-2 mt-2">Off
                                <div class="switcher switcher-sm ml-2 pr-2">
                                    <input type="checkbox" name="switcher_checkbox_date"  checked={props.poData.include_royality===1?true:false} id="include_royality" onClick={handleInputData}/>
                                    <label for="include_royality"></label>
                                </div> On
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mt-3 align-items-center">
                <div class="col-md-6 col-lg-6">
                    <label>Deliver To:</label>
                    <select class="form-control">
                        <option>Farm A [1155 Highway #05, Dundas, On]</option>
                        <option>Option 1</option>
                        <option>Option 2</option>
                    </select>
                </div>
                <div class="col-md-6 col-lg-6 mt-3 mt-md-0">
                    <label>Job Description</label>
                    <input type="text" class="form-control" placeholder="" id="job_description" value={poData.job_description} onChange={handleInputData}></input>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-md-12 col-lg-12 mt-2 mt-md-0">
                    <label>Customer Notes <small class="textGrey">(Internal Only)</small></label>
                    <textarea cols="4" rows="3" class="form-control" id="order_notes" value={poData.order_notes} onChange={handleInputData}></textarea>
                </div>
            </div>
            <div class="row mt-3">
                                    <div class="col-md-12 text-md-right">
            <button type="button" class="btn btn-primary btn-lg ml-3" style={{cursor:"pointer"}} onClick={handleButtonClick}>Add </button>
                                </div>
                                </div>
        </form>
    </div>
    )
}


const mapStateToProps = (state)=> ({ 
    selectedSupplier:state.purchaseOrderManagementData.selectedSupplier,
    pageToOpen:state.purchaseOrderManagementData.pageToOpen,
    supplierData:state.supplierData.supplierList,
    poData:state.purchaseOrderManagementData.poData,
    
    

})
export default connect(mapStateToProps,{

    getAllSuppliers,
    setSupplierToAddPo,
    handleOrderDetailsInput,addPo




})(OrderDetails)


