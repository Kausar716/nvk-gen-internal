import React, { useEffect, useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import DatePicker from 'react-date-picker';
import {connect} from "react-redux";
import {getAllCustomer,resetCustomerFilds,addCustomerData,handleExchangeData,getAllCustomerType,getCustomerById,setPageNumber,handleRadioFilter,handleSearchFilter,handleAplhabetFilter,typeOfActionShow} from "../../actions/customerSettingAction";

function AddCustomer(props) {
    const [value, onChange] = useState(new Date());
    const [addCustomertoggle,setAddCustomertoggle] = useState(false)
    const [customerObject,setCustomerObject] = useState({})
    const [customer_name,setCustomer_name] = useState("")
    const [type,setType] = useState([])
    const [primaryContact,setPrimaryContact] = useState("")
    const [fax,setFax] = useState("")
    const [website_url,setWebsiteUrl] = useState("")
    const [notes,setNotes] = useState("")
    const [ alternativeId,setAlternativeId] =  useState("")
    const [customer_id,setCustomer_id] = useState("")
    const [errorObj,setErrorObject] = useState({customer_name:0,fax:0,taxExemptNumber:0})
    const [errorCount, setErrorCount] = useState(0)
    const [taxExemptNumber,setTaxExemptNumber] = useState("")
    const [taxExemp,setTaxExemp] = useState(false)
    const [dispatchType,setDispatchType] = useState(false)
    const [poRequired,setPoRequired] = useState(false)
    const [reStock,setReStock] = useState(false)
    const {customerDataById,customerTypeList,action} = props.customerData
    console.log()
    useEffect (()=>{
        props.getAllCustomerType()
    },[reStock])

    const validate = () =>{
    }

    const handleInput= (e)=>{
        alert("h")
        let indexValue = null
        if(e.target.id ==="type"){
            let type = customerDataById.type
            type.map((value,index)=>{
                if(value === e.target.value)
                indexValue = index
            })
            if(indexValue !== null)
            type.splice(indexValue,1)
            else type.push(e.target.value)

                console.log(type)
            props.handleExchangeData(type,e.target.id,"customerDataById")
        }else if(e.target.id ==="alert"){
            let alert = parseInt(customerDataById.alert)==1?0:1
            props.handleExchangeData(alert,e.target.id,"customerDataById")

        }else if(e.target.id ==="prospect"){
            let prospect = parseInt(customerDataById.prospect)==1?0:1
            props.handleExchangeData(prospect,e.target.id,"customerDataById")
        }
        else{
            props.handleExchangeData(e.target.value,e.target.id,"customerDataById")

        }
       
    }
    const handleSubmit=()=>{
  
    }
    const handleTabClick=()=>{
        // alert("in")
    }
    const handleClose  = ()=>{
        props.resetCustomerFilds()
        props.getAllCustomer()
        props.typeOfActionShow("")
    }
    const saveCustomerData = ()=>{
        // delete customerDataById.id
        props.addCustomerData(customerDataById).then(data=>{

        })
    }
    const updateCustomerData = ()=>{
        props.addCustomerData(customerDataById)
        
    }
    const cancelData= ()=>{
        props.resetCustomerFilds()
        props.getAllCustomer()
        props.typeOfActionShow("")
      
    }
    
console.log(customerDataById)
  
    return (
        <div>
            <div class="contentHeader bg-white d-md-flex justify-content-between align-items-center">
            <h1 class="page-header mb-0"><img src="assets/img/customer-ic-lg.svg" alt=""/>{addCustomertoggle?"Add":"Edit"} Customer <span class="text-green">{addCustomertoggle?"":customer_id}</span></h1>
				<div class="topbarCtrls mt-3 mt-md-0">
                    <a href="#" class="btn ml-2 mt-3 mt-md-0">
                        <span class="d-flex align-items-center text-left">
                            <img src="assets/img/print-ic-btn.svg" alt=""/>
                            <span class="ml-2"><b>Print</b></span>
                        </span>
                    </a>
				</div>
			</div>
            <div class="px-md-3 mt-3 pb-4">
                <div class="bg-white px-3 py-3 my-3 cardShadow">
                    <div class="row align-items-center">
                     <div class="col-md-12 col-lg-6 d-md-flex justify-content-between editCustSec">
                     {addCustomertoggle?"": <div>
                                <label>Complete Orders</label>
                                <h1>124</h1>
                                <div><a href="">View Orders</a></div>
                            </div>}
                            {addCustomertoggle?"":      <div>
                                <label>Active Orders</label>
                                <h1>6</h1>
                                <div><a href="">View Orders</a></div>
                            </div>}
                            {addCustomertoggle?"":    <div>
                                <label>Active Quotes    </label>
                                <h1>124</h1>
                                <div><a href="">View Orders</a></div>
                            </div>}
                            {addCustomertoggle?"":<div class="lastOdrDate">
                                <label>Last Order</label>
                                <h4>Dec 5, 2019</h4>
                            </div>}
                        </div>
                        <div class="col-md-12 col-lg-6 mt-3 mt-lg-0 text-lg-right">
                            <div class="topbarCtrls mt-3 mt-md-0 d-flex flex-wrap justify-content-md-end">
                            {addCustomertoggle?"":  <a href="#" class="btn active">
                                    <span class="d-flex align-items-center text-left">
                                        <img src="assets/img/pdf-ic.svg" alt=""/>
                                        <span class="ml-2"><b>Contact PDF</b></span>
                                    </span>
                                </a>}
                                <a href="#" class="btn ml-2">
                                    <span class="d-flex align-items-center text-left" onClick={handleSubmit}>
                                        <img src="assets/img/save-ic.svg" alt=""/>
                                        <span class="ml-2"><b>Save  </b></span>
                                    </span>
                                </a>
                                <a href="#" class="btn ml-2 mt-3 mt-md-0">
                                    <span class="d-flex align-items-center text-left">
                                        <img src="assets/img/saveDone-ic.svg" alt=""/>
                                        <span class="ml-2"><b>Save &amp; Done</b></span>
                                    </span>
                                </a>
                                <a href="#" class=" ml-2 mt-3 mt-md-0">
                                    <img src="assets/img/close-ic.svg" alt="" onClick={handleClose}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-white px-3 py-3 my-3 cardShadow">
                    <div class="row align-items-center">
                        <div class="col-md-6">
                            <h2>Customer Details</h2>
                            <div class="d-flex align-items-center">
                                <div class=" d-flex align-items-center mr-4 my-md-2 mt-3 mt-md-0" >
                                    {/* <div class="switcher ml-2 pr-2" >
                                        <input type="checkbox" id="alert"  onChange={handleInput} name="switcher_checkbox_alert"  checked={parseInt(customerDataById.alert) ===1?"checked":""}  />
                                        <label  style={{cursor:"pointer"}} for="switcher_checkbox_alert"></label>
                                    </div>
                                    Alert */}
                                    <div class="switcher ml-2 pr-2">
                                                <input type="checkbox" id="alert"  onChange={handleInput}  name="switcher_checkbox_alert"  checked={parseInt(customerDataById.alert) ===1?"checked":""}/>
                                                <label for="alert"></label>
                                            </div>
                                            Alert
                                </div>
                                {/* </div> */}
                                <div class=" d-flex align-items-center mr-4 my-md-2 mt-3 mt-md-0">
                                <div class="switcher ml-2 pr-2">
                                                <input type="checkbox" id="prospect"   onChange={handleInput} checked={parseInt(customerDataById.prospect) ===1?"checked":""}  />
                                                <label for="prospect"></label>
                                            </div>
                                         Prospect
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 text-md-right">
                            <div class="d-flex flex-wrap align-items-center justify-content-md-end">
                            {action!=="add" || action !==""?"": <div class="mt-3 mt-md-0">
                                    <a href="" class="text-danger f-s-18 f-w-600">Delete Customer</a>
                                </div>}
                                <div class=" d-flex align-items-center mr-4 my-md-2 mt-3 mt-md-0">
                                        Archive
                                    <div class="switcher ml-2 pr-2">
                                        <input type="checkbox" name="customerStatus" id="customerStatus" value="2"/>
                                        <label style={{cursor:"pointer"}} for="customerStatus"></label>
                                    </div>
                                   
                                </div>
                                <div class=" d-flex align-items-center mr-4 my-md-2 mt-3 mt-md-0">
                                    <span class="mr-2 f-s-18"><strong>Level</strong></span>
                                    <select class="form-control">
                                        <option>Landscape Architect</option>
                                        <option>Option 1</option>
                                        <option>Option 2</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Tabs>
                    <TabList>
                        <Tab>Customer Information</Tab>
                        <Tab>Order Settings</Tab>
                        <Tab>Contacts</Tab>
                        {/* <Tab>Tags &amp; Labels</Tab> */}
                        <Tab>Addresses</Tab>
                        {/* <Tab>Print Catalog</Tab> */}
                    </TabList>
                    <TabPanel>
                        <div class="bg-white cardShadow px-3 py-3 mt-3">
                            <form>
                                <h2>Customer Information</h2>
                                <hr/>
                                <div class="row mt-3">
                                    <div class="col-md-8 col-lg-4">
                                        <label>Customer Name<span class="text-danger">*</span></label>
                                        <input type="text" class="form-control" id="name" value={customerDataById.name} onChange={handleInput} />
                                        {/* {errorObj.customer_name!==0?<span style={{fontSize:"small",color:"red"}}>Enter Valid Name</span>:""} */}
                                    </div>
                                    {/* <div class="col-md-2 col-lg-2 mt-2 mt-md-0">
                                        <label>Type<span class="text-danger">*</span></label>
                                        <select class="form-control" onChange={handleInput} id="type">
                                            {customerTypeList.active.map(type=>{
                                                return(<option value={type.id}>{type.customer_type}</option>)
                                            })}
                                        </select>
                                    </div> */}
                                    <div class="col-md-8 col-lg-8 mt-2 mt-md-0">
                                    <label>Type<span class="text-danger">*</span></label>
                                        <div style={{border:"1px solid lightgray",height:40,borderRadius:3,paddingLeft:10,paddingTop:7}}>
                                        {customerTypeList.active.map(type=>{
                                          
                                                return (<div class="form-check form-check-inline" style={{paddingRight:10}}>
                                            <input style={{cursor:"pointer"}} class="form-check-input" type="checkbox" name="active" id="type"  value={type.id} checked={customerDataById.type.filter(id=>parseInt(id) ===parseInt(type.id)).length>0} onChange={handleInput}/>
                                            <label class="form-check-label" for="activePlants">{type.customer_type}  </label>
                                        </div>)
                                                
                                         
                                    
                                        })}


                                        </div>

                                    
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-md-8 col-lg-8">
                                        <label>Primary Contact</label>
                                       <div style={{border:"1px solid lightgray",height:43,borderRadius:3,marginTop:1}}>Data should be pulled from contact</div>
                                    </div>
                                    <div class="col-md-4 col-lg-4 mt-2 mt-md-0">
                                        <label>Fax</label>
                                        <input type="number" class="form-control" name="fax" value={customerDataById.fax} onChange={handleInput} />
                                        {errorObj.fax!==0?<span style={{fontSize:"small",color:"red"}}>Entered Number is invalid</span>:""}
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-md-8 col-lg-8">
                                        <label>Website</label>
                                        <div class="d-flex">
                                            <input type="text" class="form-control" name="website_url" id="customerDataById" value={customerDataById.website_url}  onChange={handleInput}/>
                                            <button type="button" class="btn btn-outline-secondary btn-lg ml-2">Visit</button>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-lg-4 mt-2 mt-md-0">
                                        <label>Alternative ID <small>(Up tp 5 Char..)</small></label>
                                        <input type="text" class="form-control" name="alternativeId" id="alternative_id" value={customerDataById.alternative_id} onChange={handleInput} maxLength={5}/>
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-md-12 col-lg-12 mt-2 mt-md-0">
                                        <label>Customer Notes <small>(Internal Only)</small></label>
                                        <textarea rows="" cols=""  class="form-control" name="notes" value={customerDataById.notes} onChange={handleInput} id="notes"/>
                                    </div>
                                </div>

                                <div class="row mt-3">
                                    <div class="col-md-12 text-md-right">
                                        <a >
                                        <button type="button" class="btn btn-outline-secondary btn-lg" onClick={cancelData}
                                       
                                        >Cancel</button>
                                        </a>
                                        <button type="button" class="btn btn-primary btn-lg ml-3"  onClick={action =="add"?saveCustomerData:updateCustomerData}>{action=="add"?"Save":"Update"}</button>
                                    </div>
                                </div>

                            </form>
                          
                        </div>
                    </TabPanel>
                    <TabPanel >
                        <div class="bg-white cardShadow px-3 py-3 mt-3">
                            <form>
                                <h2>Order Settings</h2>
                                <hr/>
                                <div class="row mt-3">
                                    <div class="col-md-8 col-lg-8">
                                        <label>Dispatch Type</label>
                                        <div class="d-flex">
                                            <div class="custom-control custom-radio">
                                                <input type="radio" id="dispatchTypeDelivery" name="dispatchTypeDelivery" class="custom-control-input" checked = {!dispatchType?true:false} onClick={handleInput}/>
                                                <label class="custom-control-label" for="dispatchTypeDelivery">Delivery</label>
                                            </div>
                                            <div class="custom-control custom-radio ml-4">
                                                <input type="radio" id="dispatchTypePickup" name="dispatchTypePickup" class="custom-control-input"checked = {dispatchType?true:false} onClick={handleInput} />
                                                <label class="custom-control-label" for="dispatchTypePickup">Pickup</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-md-3 col-lg-2">
                                        <label>Tax Exempt</label>
                                        <div class="d-flex">
                                            <div class="custom-control custom-radio">
                                                <input type="radio" id="taxExemptNo" name="taxExemptNo" checked = {!taxExemp?true:false} class="custom-control-input" onClick={handleInput} />
                                               
                                                <label class="custom-control-label" for="taxExemptNo">No</label>
                                            </div>
                                            <div class="custom-control custom-radio ml-4">
                                                <input type="radio" id="taxExemptYes" name="taxExemptYes" checked = {taxExemp?true:false} onClick={handleInput} class="custom-control-input" />
                                                <label class="custom-control-label" for="taxExemptYes">Yes</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-lg-2 mt-3 mt-md-0">
                                        <div class="d-flex">
                                            <div>
                                                <label>Tax Exempt Number</label>
                                                <input type="number" class="form-control" name={"taxExemptNumber"} value={taxExemptNumber} onChange={handleInput} />
                                                {errorObj.taxExemptNumber!==0?<span style={{fontSize:"small",color:"red"}}>Enter Valid Name</span>:""}

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-md-3 col-lg-2">
                                        <label>P.O. Required</label>
                                        <div class="d-flex">
                                            <div class="custom-control custom-radio">
                                                <input type="radio" id="poRequiredNo" name="poRequiredNo" class="custom-control-input" checked = {!poRequired?true:false} onClick={handleInput} />
                                                <label class="custom-control-label" for="poRequiredNo">No</label>
                                            </div>
                                            <div class="custom-control custom-radio ml-4">
                                                <input type="radio" id="poRequiredYes" name="poRequiredYes" class="custom-control-input" checked = {poRequired?true:false} onClick={handleInput} />
                                                <label class="custom-control-label" for="poRequiredYes">Yes</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-9 col-lg-10 mt-3 mt-md-0">
                                        <div class="row">
                                            <div class="col-md-4">
                                                <label>Units</label>
                                                <select class="form-control">
                                                    <option>Imperial</option>
                                                    <option>Option 1</option>
                                                    <option>Option 2</option>
                                                </select>
                                            </div>
                               
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-md-10 col-lg-10">
                                        <div class="row">
                                            <div class="col-md-4">
                                                <label>Discount</label>
                                                <input type="text" class="form-control" value="3%" />
                                            </div>
                                            <div class="col-md-4 mt-3 mt-md-0">
                                                <label>Discount By Line Item</label>
                                                <select class="form-control">
                                                    <option>Canadian Dollar</option>
                                                    <option>Option 1</option>
                                                    <option>Option 2</option>
                                                </select>
                                            </div>
                                   
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-md-10 col-lg-10">
                                        <div class="row">
                                             <div class="col-md-4 mt-3 mt-md-0">
                                                <label>Payment Terms</label>
                                                <select class="form-control">
                                                    <option>Imperial</option>
                                                    <option>Option 1</option>
                                                    <option>Option 2</option>
                                                </select>
                                            </div>
                                            <div class="col-md-4 mt-3 mt-md-0">
                                                <label>Currency</label>
                                                <select class="form-control">
                                                    <option>Canadian Dollar</option>
                                                    <option>Option 1</option>
                                                    <option>Option 2</option>
                                                </select>
                                            </div>
                                            </div>
                                            </div></div>
                               
                                <div class="row mt-3">
                                <div class="col-md-10 col-lg-10">
                                    <div class="row">
                                    <div class="col-md-4">
                                                <label>Fee%</label>
                                                <input type="text" class="form-control" value="10.0" />
                                                </div>
                                           
                                            <div class="col-md-3 mt-2 mt-md-3">
                                                <label>Restock Fees</label>
                                                <div class="d-flex">
                                                    <div class="custom-control custom-radio">
                                                        <input type="radio" id="restockNo" name="restockNo" class="custom-control-input" />
                                                        <label class="custom-control-label" for="restockNo">No</label>
                                                    </div>
                                                    <div class="custom-control custom-radio ml-4">
                                                        <input type="radio" id="restockYes" name="restockYes" class="custom-control-input" />
                                                        <label class="custom-control-label" for="restockYes">Yes</label>
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                                            </div>
                                            </div>
                                           
                            </form>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div class="bg-white cardShadow px-3 py-3 mt-3">
                            <form>
                                <h2>Contacts</h2>
                                <hr/>
                                <div class="row mt-3">
                                    <div class="col-md-6 col-lg-4">
                                        <div class="contactCard">
                                            <p class="mb-0 f-w-600">John Smith - President</p>
                                            <label class="text-muted f-w-400">Jsmith@johnsmithlandscaping.com</label>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label class="text-muted f-w-400 mb-0"><strong>Phone 1:</strong> 416 - 555 - 8888</label>
                                                    <label class="text-muted f-w-400 mb-0"><strong>Phone 2:</strong> 416 - 555 - 8888</label>
                                                </div>
                                                <div class="col-md-6">
                                                    <label class="text-muted f-w-400 mb-0"><strong>Xt: </strong> 123</label>
                                                </div>
                                            </div>
                                            <div>
                                                <div class="custom-control custom-checkbox mt-2">
                                                    <input type="checkbox" class="custom-control-input" id="customCheck1" checked/>
                                                    <label class="custom-control-label f-w-400" for="customCheck1">This person is the primary contact</label>
                                                </div>
                                                <div class="custom-control custom-checkbox mt-2">
                                                    <input type="checkbox" class="custom-control-input" id="customCheck2" />
                                                    <label class="custom-control-label f-w-400" for="customCheck2">This person receives all communication</label>
                                                </div>
                                            </div>
                                            <div class="row mt-3">
                                                <div class="col-md-6">
                                                    <a href="#" class="">
                                                        <img src="assets/img/moreDetails-ic.svg" alt=""/>
                                                    </a>
                                                    <a href="#" class=" ml-2">
                                                        <img src="assets/img/edit.svg" alt=""/>
                                                    </a>
                                                </div>
                                                <div class="col-md-6 text-right">
                                                    <a href="#" class=" ml-2">
                                                        <img src="assets/img/delete.svg" alt=""/>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                   
                                </div>
                                <div class="row mt-3">
                                    <div class="col-md-12 text-right">
                                        <span>Minimum 1 Contact required</span>
                                        <button type="button" class="btn btn-primary btn-lg ml-3">Add</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        
                    </TabPanel>
                    <TabPanel>
                        <div class="bg-white cardShadow px-3 py-3 mt-3">
                            <form>
                                <h2>Addresses</h2>
                                <hr/>
                                <div class="row mt-3">
                                    <div class="col-md-6 col-lg-4">
                                        <div class="contactCard">
                                            <p class="mb-0 f-s-16 f-w-600">7049 twenty Rd. E.<br/>
Hannon, Orntario LOR 1PO, Canada.</p>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="custom-control custom-checkbox mt-2">
                                                        <input type="checkbox" class="custom-control-input" id="customCheck1" checked/>
                                                        <label class="custom-control-label f-w-400" for="customCheck1">Billing Address</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="custom-control custom-checkbox mt-2">
                                                        <input type="checkbox" class="custom-control-input" id="customCheck2" />
                                                        <label class="custom-control-label f-w-400" for="customCheck2">Delivery Address</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row mt-3">
                                                <div class="col-md-12">
                                                    <a href="#" class="">
                                                        <img src="assets/img/location-pin.svg" alt=""/> Show on Google Maps
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="row mt-3">
                                                <div class="col-md-6">
                                                    <a href="#" class="">
                                                        <img src="assets/img/moreDetails-ic.svg" alt=""/>
                                                    </a>
                                                    <a href="#" class=" ml-2">
                                                        <img src="assets/img/edit.svg" alt=""/>
                                                    </a>
                                                </div>
                                                <div class="col-md-6 text-right">
                                                    <a href="#" class=" ml-2">
                                                        <img src="assets/img/delete.svg" alt=""/>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-lg-4">
                                        <div class="contactCard">
                                            <p class="mb-0 f-s-16 f-w-600">7049 twenty Rd. E.<br/>
Hannon, Orntario LOR 1PO, Canada.</p>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="custom-control custom-checkbox mt-2">
                                                        <input type="checkbox" class="custom-control-input" id="customCheck1" checked/>
                                                        <label class="custom-control-label f-w-400" for="customCheck1">Billing Address</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="custom-control custom-checkbox mt-2">
                                                        <input type="checkbox" class="custom-control-input" id="customCheck2" />
                                                        <label class="custom-control-label f-w-400" for="customCheck2">Delivery Address</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row mt-3">
                                                <div class="col-md-12">
                                                    <a href="#" class="">
                                                        <img src="assets/img/location-pin.svg" alt=""/> Show on Google Maps
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="row mt-3">
                                                <div class="col-md-6">
                                                    <a href="#" class="">
                                                        <img src="assets/img/moreDetails-ic.svg" alt=""/>
                                                    </a>
                                                    <a href="#" class=" ml-2">
                                                        <img src="assets/img/edit.svg" alt=""/>
                                                    </a>
                                                </div>
                                                <div class="col-md-6 text-right">
                                                    <a href="#" class=" ml-2">
                                                        <img src="assets/img/delete.svg" alt=""/>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-lg-4 mt-md-3 mt-lg-0">
                                        <div class="contactCard">
                                            <p class="mb-0 f-s-16 f-w-600">7049 twenty Rd. E.<br/>
Hannon, Orntario LOR 1PO, Canada.</p>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="custom-control custom-checkbox mt-2">
                                                        <input type="checkbox" class="custom-control-input" id="customCheck1" checked/>
                                                        <label class="custom-control-label f-w-400" for="customCheck1">Billing Address</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="custom-control custom-checkbox mt-2">
                                                        <input type="checkbox" class="custom-control-input" id="customCheck2" />
                                                        <label class="custom-control-label f-w-400" for="customCheck2">Delivery Address</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row mt-3">
                                                <div class="col-md-12">
                                                    <a href="#" class="">
                                                        <img src="assets/img/location-pin.svg" alt=""/> Show on Google Maps
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="row mt-3">
                                                <div class="col-md-6">
                                                    <a href="#" class="">
                                                        <img src="assets/img/moreDetails-ic.svg" alt=""/>
                                                    </a>
                                                    <a href="#" class=" ml-2">
                                                        <img src="assets/img/edit.svg" alt=""/>
                                                    </a>
                                                </div>
                                                <div class="col-md-6 text-right">
                                                    <a href="#" class=" ml-2">
                                                        <img src="assets/img/delete.svg" alt=""/>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div class="row mt-3">
                                    <div class="col-md-12 text-right">
                                        <span>Minimum 1 Contact required</span>
                                        <button type="button" class="btn btn-primary btn-lg ml-3">Add</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div class="bg-white cardShadow px-3 py-3 mt-3">
                            <form>
                                <h2>Print Catalog</h2>
                                <hr/>
                                <div class="row mt-3">
                                    <div class="col-md-4">
                                        <label>Requires Print Catalog</label>
                                        <input type="text" class="form-control" value="Yes" />
                                    </div>
                                    <div class="col-md-4 mt-3 mt-md-0">
                                        <label>Quantity</label>
                                        <select class="form-control">
                                            <option>5</option>
                                            <option>Option 1</option>
                                            <option>Option 2</option>
                                        </select>
                                    </div>
                                </div>
                                
                            </form>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    )
}

const mapStateToProps = (state)=>(
    {
        customerData:state.customerReducer
    }
)
export default connect(mapStateToProps,{
    typeOfActionShow, getAllCustomerType,
    handleExchangeData,addCustomerData,resetCustomerFilds,getAllCustomer
     





})(AddCustomer)
