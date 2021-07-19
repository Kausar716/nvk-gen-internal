import React, { useEffect, useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import DatePicker from 'react-date-picker';

export default function AddCustomer(props) {
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
    console.log()
    useEffect (()=>{
        console.log(props.toggle)
        if(props.toggle === "add")setAddCustomertoggle(true)
        if(props.toggle === "edit"){
           
            console.log(props.customerData)
            setCustomer_name(props.customerData.name)
            setType(props.customerData.type)
            setFax(props.customerData.fax)
            setWebsiteUrl(props.customerData.website_url)
            setNotes(props.customerData.notes)
            setPrimaryContact(props.customerData.contact_id)
            setAlternativeId(props.customerData.alternativeId)
            setCustomer_id(props.customerData.customer_id)
        }

    },[])

    const validate = () =>{
        let errorObjforValidation=errorObj
        let errorCountForValidation = errorCount
        let phoneReg=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        let nameReg = /^[a-zA-Z]+$/
        // let phoneReg = new RegExp('^[0-9]+$');
        let emailReg =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    
        if(customer_name.length === 0){
           errorObjforValidation.customer_name=1
           errorCountForValidation++
        }
        if(!nameReg.test(customer_name)){
            errorObjforValidation.customer_name=1
           errorCountForValidation++
        }
        // if(taxExemptNumber.length===0 && taxExemp){
        //     errorObj.taxExemptNumber=1
        //     errorCountForValidation++
        // }
      
        if(fax.length !== 8){
          
            errorObjforValidation.fax=1
            errorCountForValidation++
        }
        setErrorCount(errorCountForValidation)
        setErrorObject(errorObjforValidation)
        return errorCount
    }

    const handleInput= (e)=>{
        let errorCountForValidation = errorCount
        console.log(e.target.name,e.target.value)
        if(e.target.name === "customer_name"){
            setCustomer_name(e.target.value)
            if(errorObj.customer_name>0){
                errorObj.customer_name=0
                errorCountForValidation--
            }       
        }
        if(e.target.name === "type"){
            setType(e.target.value)
        }
        if(e.target.name === "primaryContact"){
            setPrimaryContact(e.target.value)
        }
        if(e.target.name === "fax"){
           
            setFax(e.target.value)
            if(errorObj.fax>0){
                errorObj.fax=0
                errorCountForValidation--
            }       
        }
        if(e.target.name === "taxExemptNo" || e.target.name === "taxExemptYes"  ){
            setTaxExemp(!taxExemp)
        }
        if(e.target.name === "dispatchTypeDelivery" || e.target.name === "dispatchTypePickup"  ){
            setDispatchType(!dispatchType)
        }
        if(e.target.name === "poRequiredNo" || e.target.name === "poRequiredYes"){
            setPoRequired(!poRequired)
        }
        if(e.target.name === "restockNo" || e.target.name === "restockYes"){
            setPoRequired(!reStock)
        }
        if(e.target.name === "taxExemptNumber"){
            setTaxExemptNumber(e.target.value)
            if(errorObj.taxExemptNumber>0){
                errorObj.taxExemptNumber=0
                errorCountForValidation--
            }  
        }
        if(e.target.name === "website_url"){
            setWebsiteUrl(e.target.value)
        }
        if(e.target.name === "notes"){
            setNotes(e.target.value)
        }
        if(e.target.name === "alternativeId"){
            setAlternativeId(e.target.value)
        }
        setErrorCount(errorCountForValidation)
        setErrorObject(errorObj)
    }
    const handleSubmit=()=>{
        let count= validate()
        console.log(count)
         if(count === 0){
         }
    }
    const handleTabClick=()=>{
        alert("in")
    }
    
console.log(errorObj)
  
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
                                    <img src="assets/img/close-ic.svg" alt=""/>
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
                                    <div class="switcher ml-2 pr-2">
                                        <input style={{cursor:"pointer"}} type="checkbox" name="switcher_checkbox_alert" id="switcher_checkbox_alert" value="2"/>
                                        <label style={{cursor:"pointer"}} for="switcher_checkbox_alert"></label>
                                    </div>
                                    Alert
                                </div>
                                <div class=" d-flex align-items-center mr-4 my-md-2 mt-3 mt-md-0">
                                    <div class="switcher ml-2 pr-2">
                                        <input style={{cursor:"pointer"}} type="checkbox" name="switcher_checkbox_Prospect" id="switcher_checkbox_Prospect" value="2"/>
                                        <label style={{cursor:"pointer"}} for="switcher_checkbox_Prospect"></label>
                                    </div>
                                    Prospect
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 text-md-right">
                            <div class="d-flex flex-wrap align-items-center justify-content-md-end">
                            {addCustomertoggle?"": <div class="mt-3 mt-md-0">
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
                                    <div class="col-md-8 col-lg-8">
                                        <label>Customer Name<span class="text-danger">*</span></label>
                                        <input type="text" class="form-control" name="customer_name" value={customer_name} onChange={handleInput} />
                                        {errorObj.customer_name!==0?<span style={{fontSize:"small",color:"red"}}>Enter Valid Name</span>:""}
                                    </div>
                                    <div class="col-md-4 col-lg-4 mt-2 mt-md-0">
                                        <label>Type<span class="text-danger">*</span></label>
                                        <select class="form-control">
                                            <option>Landscape Architect</option>
                                            <option>Option 1</option>
                                            <option>Option 2</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-md-8 col-lg-8">
                                        <label>Primary Contact</label>
                                        <input type="text" class="form-control" name = "primaryContact" value={primaryContact} onChange={handleInput} />
                                    </div>
                                    <div class="col-md-4 col-lg-4 mt-2 mt-md-0">
                                        <label>Fax</label>
                                        <input type="number" class="form-control" name="fax" value={fax} onChange={handleInput} />
                                        {errorObj.fax!==0?<span style={{fontSize:"small",color:"red"}}>Entered Number is invalid</span>:""}
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-md-8 col-lg-8">
                                        <label>Website</label>
                                        <div class="d-flex">
                                            <input type="text" class="form-control" name="website_url" value={website_url}  onChange={handleInput}/>
                                            <button type="button" class="btn btn-outline-secondary btn-lg ml-2">Visit</button>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-lg-4 mt-2 mt-md-0">
                                        <label>Alternative ID <small>(Up tp 5 Char..)</small></label>
                                        <input type="text" class="form-control" name="alternativeId" value={alternativeId} onChange={handleInput}/>
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-md-12 col-lg-12 mt-2 mt-md-0">
                                        <label>Customer Notes <small>(Internal Only)</small></label>
                                        <textarea rows="" cols=""  class="form-control" name="notes" value={notes} onChange={handleInput}/>
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
