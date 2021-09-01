import React, { useState,useEffect } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import DatePicker from 'react-date-picker';
import 'react-tabs/style/react-tabs.css';
import {connect} from "react-redux";
import { Link } from "react-router-dom";
import TablePagination from '../Pagination/index';
import Autosuggest from 'react-autosuggest';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import {getCustomerContacts,getcustomerAddress,getAllStatusMethods,deleteCustomer,getAllCustomer,handleExchangeData,getAllCustomerType,getCustomerById,setPageNumber,handleRadioFilter,handleSearchFilter,handleAplhabetFilter,typeOfActionShow} from "../../actions/customerSettingAction";
import {handleInputChange,addNewQuote} from "../../actions/quoteAction";
// import {resetFileds,filterInvoiceManagerData,deleteCustomer,getAllInvoice,handleExchangeData,getCustomerById,setPageNumber,handleSearchFilter,handleAplhabetFilter,typeOfActionShow} from "../../actions/invoiceAction";


 function QuoteAndOrdersManagement(props) {
    const [value, onChange] = useState(new Date());
    const [customerSelected,setCustomerSelected] = useState(false)
    const [customerDetails,setCustomerDetails] = useState({

    })
    useEffect (()=>{
        props.getAllCustomer()
        props.getAllCustomerType()
        

    },[value])
    const handleCustomerData =(e)=>{
        // alert(e.target.value)
        if(e.target.id =="customer_id"){
            props.getCustomerById(e.target.value)
            props.getAllCustomerType()
            props.getAllStatusMethods()
            props.getCustomerContacts(e.target.value)
            props.getcustomerAddress(e.target.value)
            props.handleInputChange(e.target.id,e.target.value)

        }else{
            props.handleInputChange(e.target.id,e.target.value)
        }

        // props.getAllTermsMethods()
        // props.getAllReasonMethods()
 

    }
    const handleSave = (e)=>{
        e.preventDefault();

        props.addNewQuote(quoteDetails).then(data=>{
            setCustomerSelected(true)
        })

    }
    const handleUpdate = ()=>{

        props.addNewQuote()

    }
    const {deleteCustomer,customerReasonList,customerDataById,customerTypeList,action,customerStatusList,customerTermList,customerContact,customerContactList,customerAddress,customerAddressList} = props.customerData
    const {quoteDetails} = props.QuoteReducerData
    console.log(quoteDetails)
    return (
        <div>
            <div class="contentHeader bg-white d-md-flex justify-content-between align-items-center">
				<h1 class="page-header mb-0 d-flex flex-md-nowrap align-items-center"><img src="assets/img/customerQuotesAndOrders-lg-green.svg" alt="" class="mr-2"/> New Customer Quote <span class="text-green ml-3">#{quoteDetails.quote_no}</span></h1>
				<div class="topbarCtrls mt-3 mt-md-0">
                    <a href="#" class="btn">
                        <span class="d-flex align-items-center text-left">
                            <img src="assets/img/email-ic-btn.svg" alt=""/>
                            <span class="ml-2"><b>Email</b></span>
                        </span>
                    </a>
                    <a href="#" class="btn ml-2">
                        <span class="d-flex align-items-center text-left">
                            <img src="assets/img/search-ic-btn.svg" alt=""/>
                            <span class="ml-2"><b>Preview</b></span>
                        </span>
                    </a>
                    <a href="#" class="btn ml-2 mt-3 mt-md-0">
                        <span class="d-flex align-items-center text-left"><img src="assets/img/print-ic-btn.svg" alt=""/><span class="ml-2"><b>Print</b></span></span>
                    </a>
                </div>
			</div>
          

            <div class="px-md-3 mt-3">
                <div class="px-3 py-3 mb-3 bg-white cardShadow">
                    <div class="row align-items-center purchaseOrderTabHead">
                        <div class="col-md-6 d-flex align-items-center">
                            <span className="stsBadge stsQuote" style={{fontSize:32}}>Quote</span>
                            <div class="d-flex ml-3 mb-0 bdrLeft">
                                <div class="">
                                    <img src="assets/img/date-ic-sm-green.svg" alt=""/>
                                    <span class="ml-2">{new Date().toDateString()}</span>
                                </div>
                                <div class="ml-3">
                                    <img src="assets/img/price-ic-sm-green.svg" alt=""/>
                                    <span class="ml-2">CA <b>$0</b></span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 d-flex flex-wrap justify-content-md-end  align-items-center">
                            <span class="mr-2 text-grey-darker f-s-14">Last Saved on 24/05/2020  12:23</span>
                            <a href="" class="ml-2"><img src="assets/img/copy-ic.svg" alt=""/></a>
                            {/* <a href="" class="ml-2"><img src="assets/img/plant-btn-blue.svg" alt=""/></a>
                            <a href="" class="ml-2"><img src="assets/img/dig-btn-blue.svg" alt=""/></a>
                            <a href="" class="ml-2"><img src="assets/img/order-list-btn-blue.svg" alt=""/></a> 
                            <a href="" class="ml-2"><img src="assets/img/times-btn-red.svg" alt=""/></a>*/}
                            <a href="" class="ml-2"><img src="assets/img/toggle-btn.svg" alt=""/></a>
                            <div class="d-flex align-items-center flex-wrap ml-3">Active
                                
                                <div class="switcher switcher-sm ml-2 pr-2">
                                    <input type="checkbox" name="quoteactivetoggle" id="quoteactivetoggle" value="2" />
                                    <label for="quoteactivetoggle"></label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="">
                <Tabs >
                    <TabList >
                        <Tab>Quote Details</Tab>
                        <Tab  disabled={customerSelected?false:true} style={{backgroundColor:customerSelected?"white":"lightgray"}}>Add to Quote</Tab>
                        <Tab disabled={customerSelected?false:true} style={{backgroundColor:customerSelected?"white":"lightgray"}}>Current Quote <span class="badge badge-pill badge-success">0</span></Tab>
                        <Tab disabled={customerSelected?false:true} style={{backgroundColor:customerSelected?"white":"lightgray"}}>Order History</Tab>
                        <Tab disabled={customerSelected?false:true} style={{backgroundColor:customerSelected?"white":"lightgray"}}>Notes</Tab>    
                    </TabList>
                    <TabPanel>
                        <div class="bg-white px-3 py-3">
                            {/* <form> */}
                                <h2>Quote Details</h2>
                                <hr/>
                                <div class="px-3 py-3 bg-grey-transparent-2">
                                    <div class="row ">
                                        <div class="col-md-12">
                                            <h3>{customerDataById.name}</h3>
                                        </div>
                                    </div>
                                    <div class="row ">
                                        <div class="col-md-4 col-lg-6">
                                            <div class="row ">
                                                <div class="col-md-1 col-lg-2 text-md-right">
                                                    <b>Type:</b>
                                                </div>
                                                <div class="col-md-10">
                                                    <span className="textGrey"><b>{
                                                        customerDataById.type.map(type=>{
                                                            return customerTypeList.active.map(typeId=>{
                                                                if(parseInt(typeId.id)==parseInt(type)) 
                                                                return(<span>{typeId.customer_type}</span>)
                                                            })
                                                          
                                                           
                                                        })
                                                        }</b></span>
                                                </div>
                                            </div>
                                            <div class="row ">
                                                <div class="col-md-1 col-lg-2 text-md-right">
                                                    <b>Tax Exempt:</b>
                                                </div>
                                                <div class="col-md-10">
                                                    <span className="textGrey"><b>{customerDataById.tax_exempt ==1?"Yes":"No"}</b></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-lg-2">
                                            <div>
                                                <div ><b class="mr-3">Terms:</b><span className="textGrey"><b>{customerDataById.payment_terms}</b></span></div>
                                                <div class="mt-1"><b class="mr-3">Status:</b><span class="label bg-green f-s-14"><i class="fas fa-crown mr-2"></i>VIP</span></div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-lg-4 text-md-right mt-3 mt-md-0">
                                            <div>
                                                <div><b class="mr-3">Source:</b><span className="textGrey"><b>Internal</b></span></div>
                                                <div class="mt-1"><b class="mr-3">Price Year:</b><span className="textGrey"><b>2020</b></span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-md-3 col-lg-3">
                                                <label>Ordered By <span class="text-danger">*</span></label>
                                                <select class="form-control" onChange={handleCustomerData} disabled={customerSelected?true:false} id="customer_id">
                                                    <option value={0}>Select</option>
                                                    {
                                                        props.customerData.customerList.map(customer=>{
                                                            return(<option value={customer.id} selected={quoteDetails.customer_id ==customer.customer_id?"selected":""}>{customer.name}</option>)
                                                        })
                                                    }
                                                </select>
                                            </div>
                                            <div class="col-md-3 col-lg-3">
                                                <label>Pricing Year <span class="text-danger">*</span></label>
                                                <select class="form-control" onChange={handleCustomerData} disabled={customerSelected?true:false} id="pricing_year">
                                                    <option selected={quoteDetails.pricing_year ==new Date().getFullYear()?"selected":""} value={new Date().getFullYear()}>{new Date().getFullYear()}</option>
                                                    <option selected={quoteDetails.pricing_year ==new Date().getFullYear()+1?"selected":""}  value={new Date().getFullYear()+1}>{new Date().getFullYear()+1}</option>
                                                </select>
                                            </div>
                                </div>
                                <div class="row mt-3">
                                    {/* <div class="col-md-12 col-lg-5 col-xl-5"> */}
                                    {/* <div class="row "> */}
                                     
                                        
                                            <div class="col-md-3 col-lg-3">
                                                <label>Bill To <span class="text-danger">*</span></label>
                                                
                                                <select class="form-control" disabled={customerAddressList.active.length>0?false:true}>
                                                <option>Select Address</option>
                                                    {customerAddressList.active.map(address=>{
                                                      
                                                        return( <option>{address.city} {address.country} {address.zip}</option>)
                                                    })}
                                                    {/* <option>1234 Main St, Waterdown </option>
                                                    <option>Option 1</option>
                                                    <option>Option 2</option> */}
                                                </select>
                                            </div>
                                            <div class="col-md-3 col-lg-3">
                                                <label>PO #</label>
                                                <input type="text" class="form-control" placeholder="" disabled={customerDataById.p_o_req==1?false:true}></input>
                                            </div>
                                            <div class="col-md-3 col-lg-3">
                                                <label  style={{display: "block"}}>Requested Time</label>
                                                <select class="form-control" disabled={customerSelected?false:true}>
                                                    <option>AM</option>
                                                    <option>PM</option>
                                                </select>
                                            </div>
                                           
                                        {/* </div> */}
                                    {/* </div> */}
                                    {/* <div class="col-md-12 col-lg-7 col-xl-7"> */}
                                        {/* <div class="row"> */}
                                        
                                            <div class="col-md-3 col-lg-3">
                                            <label>Requsted Date</label>
                                                <input type="date" class="form-control" placeholder="" disabled={customerSelected?false:true}></input>
                                            </div>
                                      
                                        {/* </div> */}
                                    {/* </div> */}
                                </div>
                                <div class="row mt-3">
                                    <div class="col-md-12 col-lg-5 col-xl-5">
                                        <div class="row ">
                                            <div class="col-md-6 col-lg-6">
                                                <label>Currency</label>
                                                <select class="form-control" disabled={customerSelected?false:true}>
                                                    <option>CAD</option>
                                                    <option>Option 1</option>
                                                    <option>Option 2</option>
                                                </select>
                                            </div>
                                            <div class="col-md-6 col-lg-6">
                                                <label>Email To</label>
                                                <input type="text" class="form-control" placeholder="" value={customerContactList.active.length>0?customerContactList.active[0].email:""} disabled={customerSelected?false:true}></input>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12 col-lg-7 col-xl-7">
                                        <label>Job Description</label>
                                        <input type="text" class="form-control" placeholder="" disabled={customerSelected?false:true}></input>
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-md-12 col-lg-5 col-xl-5">
                                        <div class="row ">
                                            <div class="col-md-6 col-lg-6">
                                                <label>Units</label>
                                                <select class="form-control" disabled={customerSelected?false:true}>
                                                    <option value={"Metric"} selected={ customerDataById.unit_of_measurement=="Metric"?"selected":""}>Metric</option>
                                                    <option value={"Imperial"} selected={customerDataById.unit_of_measurement =="Imperial"?"selected":""}>Imperial</option>
                                                </select>
                                            </div>
                                            <div class="col-md-6 col-lg-6">
                                                <label>Discount</label>
                                                <input type="text" class="form-control text-right" placeholder="" value="0.00" disabled={customerSelected?false:true}/>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div class="col-md-12 col-lg-7 col-xl-7 pt-md-4 mt-3">
                                        <a href="">Reset</a>
                                    </div> */}
                                    <div class="col-md-12 col-lg-7 col-xl-7">
                                        <div class="row">
                                            <div class="col-md-6 col-lg-4">
                                                <label>Discount by Line item</label>
                                                <div class="d-flex align-items-center flex-wrap mt-2">Off
                                                    <div class="switcher switcher-sm ml-2 pr-2">
                                                        <input type="checkbox" name="switcher_checkbox_date" id="switcher_checkbox_date" value="2" disabled={customerSelected?false:true}/>
                                                        <label for="switcher_checkbox_date"></label>
                                                    </div> On
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-lg-8 mt-3 mt-md-0">
                                                <label class="mr-2 mr-md-0">Archive Quote Time Frame</label>
                                                <div class="row">
                                                    <div class="col-md-6 col-lg-4 mr-2 mr-md-0">
                                                        <input type="text" class="form-control" placeholder="30 Day" disabled={customerSelected?false:true}></input>
                                                    </div>
                                                    <div class="col-md-6 col-lg-4 mt-3 mt-md-0">
                                                        <span class="textGrey" style={{fontSize: 16}}>23 Days Left</span>
                                                    </div>
                                                    <div class="col-md-6 col-lg-4 mt-3 mt-md-0">
                                                        <a href="">Reset</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-md-12 col-lg-5 col-xl-5">
                                        <div class="row">
                                            <div class="col-md-6 col-lg-6">
                                                <label>Show Pricing on Output</label>
                                                <div class="d-flex align-items-center flex-wrap mt-2">Off
                                                    <div class="switcher switcher-sm ml-2 pr-2">
                                                        <input type="checkbox" name="showpricing" id="showpricing" value="2" disabled={customerSelected?false:true}/>
                                                        <label for="showpricing"></label>
                                                    </div> On
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-lg-6">
                                                <label>Flag as Reminder</label>
                                                <div class="d-flex align-items-center flex-wrap mt-2">No
                                                    <div class="switcher switcher-sm ml-2 pr-2" style={{color:"#ff0000"}} >
                                                        <input type="checkbox" name="flagreminder" id="flagreminder" style={{color:"#ff0000"}} value="2" disabled={customerSelected?false:true}/>
                                                        <label for="flagreminder"></label>
                                                    </div> Yes
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-md-12 col-lg-12 mt-2 mt-md-0">
                                        <label>Order Notes <small style={{color: "#808080"}}>(Internal Only)</small></label>
                                        <textarea class="form-control" disabled={customerSelected?false:true}></textarea>
                                    </div>
                                    <div style={{float:"left",width:"100%",marginBottom:4,paddingRight:10}}>
                                    <button className="btn btn-primary btn-lg ml-3"  style={{width:100,float:"right",marginTop:10}} onClick={customerSelected?handleUpdate:handleSave}>{customerSelected?"Update":"Add"}</button>
                                    </div>
                                   
                                </div>
                                
                            {/* </form> */}
                          
                        </div>
                       
                    </TabPanel>
                    <TabPanel>
                        <div class="bg-white px-3 py-3 mt-2">
                            <form>
                                <h2>Add to this Quote</h2>
                                <hr/>
                                <div class="row mt-3 align-items-center">
                                    <div class="col-md-12">
                                        <div class="row form-group">
                                            <div class="col-md-6 col-lg-6">
                                                <label>Plant and Product Search</label>
                                                <div class="searchInput">
                                                    <button type="submit" class="btn btn-search">
                                                        <img src="assets/img/search.svg" alt=""/>
                                                    </button>
                                                    <input type="text" class="form-control" placeholder=""/>
                                                </div>
                                                <div class="row mt-3 align-items-center">
                                                    <div class="col-md-12 d-flex">
                                                        <div class="custom-control custom-radio">
                                                            <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input" />
                                                            <label class="custom-control-label" for="customRadio1">Active Only</label>
                                                        </div>
                                                        <div class="custom-control custom-radio ml-3">
                                                            <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input" />
                                                            <label class="custom-control-label" for="customRadio2">Both Active and Inactive</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-lg-6">
                                                <label>Search SKU</label>
                                                <div class="searchInput">
                                                    <button type="submit" class="btn btn-search">
                                                        <img src="assets/img/search.svg" alt=""/>
                                                    </button>
                                                    <input type="text" class="form-control" placeholder=""/>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="row mt-3 mb-4 align-items-center">
                                            <div class="col-md-6 col-lg-6">
                                                <label>Location:</label>
                                                <select class="form-control">
                                                    <option>All</option>     
                                                    <option>Option 1</option>
                                                    <option>Option 2</option>
                                                </select>
                                            </div>
                                            <div class="col-md-4 col-lg-4 mt-3 mt-md-0">
                                                <label>Category</label>
                                                <select class="form-control">
                                                    <option>All</option>     
                                                    <option>Option 1</option>
                                                    <option>Option 2</option>
                                                </select>
                                            </div>
                                            <div class="col-md-2 col-lg-2 pt-md-4">
                                                <a href="javascript:;">Reset</a>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-md-12 table-responsive">
                                                <table class="table table-striped mb-0" border="0" width="100%">
                                                    <thead>
                                                        <tr>
                                                            <th width="15%" class="">SKU</th>
                                                            <th width="15%" class="text-center">Size</th>
                                                            <th width="6%" class="text-center">On Hand</th>
                                                            <th width="6%" class="text-center">Customer Orders</th>
                                                            <th width="8%" class="text-center">Current <br/>Available</th>
                                                            <th width="6%" class="text-center">On Quotes</th>
                                                            <th width="6%" class="text-center">Open POS</th>
                                                            <th width="8%" class="text-center">Future <br/>Available</th>
                                                            <th width="6%" class="text-center">Price</th>
                                                            <th width="6%" class="text-center">Volume<br/>
Rate</th>
                                                            <th width="6%" class="text-center">Dis%</th>
                                                            <th width="6%" class="text-center">Qty</th>
                                                            <th width="4%" class="text-center"></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td colspan="13" class="p-0">
                                                                <table class="table table-striped mb-0" border="0" width="100%">
                                                                    <tr class="tblLinks">
                                                                        <td colspan="13">
                                                                            <a href="">Abeliophyllum (White Forsythia)</a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td width="15%">
                                                                            <a href="">393-TF-1259-1G</a>
                                                                        </td>
                                                                        <td class="text-center" width="15%">150CM 15 gal</td>
                                                                        <td class="text-center" width="6%">50</td>
                                                                        <td class="text-center" width="6%">23</td>
                                                                        <td class="text-center" width="8%"><b class="f-s-20">27</b></td>
                                                                        <td class="text-center" width="6%">13</td>
                                                                        <td class="text-center" width="6%">50</td>
                                                                        <td class="text-center" width="8%"><b class="f-s-20">125</b></td>
                                                                        <td class="text-center" width="6%">
                                                                            <input type="text" class="form-control textQtySm" placeholder="" value="3.12"/> 
                                                                            <div>
                                                                                <span class="text-green">3.18</span>
                                                                            </div>   
                                                                        </td>
                                                                        <td class="text-center" width="6%">
                                                                            <input type="text" class="form-control textQtySm" placeholder="" value="3.12"/>
                                                                            <div>
                                                                                <span class="text-green">3.07</span>
                                                                            </div>   
                                                                            <div>
                                                                                <span class="text-red">25 Min</span>
                                                                            </div>   
                                                                        </td>
                                                                        <td class="text-center" width="6%">
                                                                            <input type="text" class="form-control textQtySm" placeholder="" value="2.75"/>
                                                                        </td>
                                                                        <td class="text-center" width="6%" >
                                                                            <div class="d-flex align-items-center">
                                                                                <input type="text" class="form-control textQtySm" placeholder="" value="4"/>
                                                                            </div>
                                                                            <div>
                                                                                <span class="text-red">Short 4</span>
                                                                            </div>
                                                                        </td>
                                                                        <td class="text-center" width="4%">
                                                                            <a href="" class="ml-2">
                                                                                <img src="assets/img/tbl-plus-ic.svg" alt=""/>
                                                                            </a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td width="15%">
                                                                            <a href="">393-TF-1259-1G</a>
                                                                        </td>
                                                                        <td class="text-center">150CM 15 gal</td>
                                                                        <td class="text-center">50</td>
                                                                        <td class="text-center">23</td>
                                                                        <td class="text-center"><b class="f-s-20">27</b></td>
                                                                        <td class="text-center">13</td>
                                                                        <td class="text-center">50</td>
                                                                        <td class="text-center"><b class="f-s-20">125</b></td>
                                                                        <td class="text-center">
                                                                            <input type="text" class="form-control textQtySm" placeholder="" value="3.12"/> 
                                                                            <div>
                                                                                <span class="text-green">3.18</span>
                                                                            </div>   
                                                                        </td>
                                                                        <td class="text-center">
                                                                            <input type="text" class="form-control textQtySm" placeholder="" value="3.12"/>
                                                                            <div>
                                                                                <span class="text-green">3.07</span>
                                                                            </div>   
                                                                            <div>
                                                                                <span class="text-red">25 Min</span>
                                                                            </div>   
                                                                        </td>
                                                                        <td class="text-center">
                                                                            <input type="text" class="form-control textQtySm" placeholder="" value="2.75"/>
                                                                        </td>
                                                                        <td class="text-center">
                                                                            <div class="">
                                                                                <input type="text" class="form-control textQtySm" placeholder="" value="4"/>
                                                                                 <div>
                                                                                <span class="text-red">Short 4</span>
                                                                            </div>   
                                                                            </div>
                                                                        </td>
                                                                        <td class="text-center">
                                                                            <a href="" class="ml-2">
                                                                                <img src="assets/img/tbl-plus-ic.svg" alt=""/>
                                                                            </a>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td colspan="13" class="p-0">
                                                                <table class="table table-striped mb-0" border="0" width="100%">
                                                                    <tr class="tblLinks">
                                                                        <td colspan="13">
                                                                            <a href="">Abeliophyllum (White Forsythia)</a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td width="15%">
                                                                            <a href="">393-TF-1259-1G</a>
                                                                        </td>
                                                                        <td class="text-center" width="15%">150CM 15 gal</td>
                                                                        <td class="text-center" width="6%">50</td>
                                                                        <td class="text-center" width="6%">23</td>
                                                                        <td class="text-center" width="8%"><b class="f-s-20">27</b></td>
                                                                        <td class="text-center" width="6%">13</td>
                                                                        <td class="text-center" width="6%">50</td>
                                                                        <td class="text-center" width="8%"><b class="f-s-20">125</b></td>
                                                                        <td class="text-center" width="6%">
                                                                            <input type="text" class="form-control textQtySm" placeholder="" value="3.12"/> 
                                                                            <div>
                                                                                <span class="text-green">3.18</span>
                                                                            </div>   
                                                                        </td>
                                                                        <td class="text-center" width="6%">
                                                                            <input type="text" class="form-control textQtySm" placeholder="" value="3.12"/>
                                                                            <div>
                                                                                <span class="text-green">3.07</span>
                                                                            </div>   
                                                                            <div>
                                                                                <span class="text-red">25 Min</span>
                                                                            </div>   
                                                                        </td>
                                                                        <td class="text-center" width="6%">
                                                                            <input type="text" class="form-control textQtySm" placeholder="" value="2.75"/>
                                                                        </td>
                                                                        <td class="text-center" width="6%" >
                                                                            <div class="d-flex align-items-center">
                                                                                <input type="text" class="form-control textQtySm" placeholder="" value="4"/>
                                                                            </div>
                                                                            <div>
                                                                                <span class="text-red">Short 4</span>
                                                                            </div>
                                                                        </td>
                                                                        <td class="text-center" width="4%">
                                                                            <a href="" class="ml-2">
                                                                                <img src="assets/img/tbl-plus-ic.svg" alt=""/>
                                                                            </a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <a href="">393-TF-1259-1G</a>
                                                                        </td>
                                                                        <td class="text-center">150CM 15 gal</td>
                                                                        <td class="text-center">50</td>
                                                                        <td class="text-center">23</td>
                                                                        <td class="text-center"><b class="f-s-20">27</b></td>
                                                                        <td class="text-center">13</td>
                                                                        <td class="text-center">50</td>
                                                                        <td class="text-center"><b class="f-s-20">125</b></td>
                                                                        <td class="text-center">
                                                                            <input type="text" class="form-control textQtySm" placeholder="" value="3.12"/> 
                                                                            <div>
                                                                                <span class="text-green">3.18</span>
                                                                            </div>   
                                                                        </td>
                                                                        <td class="text-center">
                                                                            <input type="text" class="form-control textQtySm" placeholder="" value="3.12"/>
                                                                            <div>
                                                                                <span class="text-green">3.07</span>
                                                                            </div>   
                                                                            <div>
                                                                                <span class="text-red">25 Min</span>
                                                                            </div>   
                                                                        </td>
                                                                        <td class="text-center">
                                                                            <input type="text" class="form-control textQtySm" placeholder="" value="2.75"/>
                                                                        </td>
                                                                        <td class="text-center" >
                                                                            <div class="">
                                                                                <input type="text" class="form-control textQtySm" placeholder="" value="4"/>
                                                                                 <div>
                                                                                <span class="text-red">Short 4</span>
                                                                            </div>   
                                                                            </div>
                                                                        </td>
                                                                        <td class="text-center">
                                                                            <a href="" class="ml-2">
                                                                                <img src="assets/img/tbl-plus-ic.svg" alt=""/>
                                                                            </a>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12 text-right">
                                        <button type="button" class="btn btn-primary btn-lg ml-3">Add All</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div class="bg-white px-3 py-3 mt-2">
                            <form>
                            <div class="row">
                                    <div class="col-md-8">
                                        <h2>Currently on this Quote</h2>
                                    </div>
                                    <div class="col-md-4 text-right">
                                        <a href="#" class="btn btnGrey">
                                            <span class="d-flex align-items-center text-left">
                                                <img src="assets/img/addSegment-ic-btn.svg" alt=""/>
                                                <span class="ml-2">Add Segment</span>
                                            </span>
                                        </a>
                                        <a href="#" class="btn btnGrey ml-2">
                                            <span class="d-flex align-items-center text-left">
                                                <img src="assets/img/order-ic-btn.svg" alt=""/>
                                                <span class="ml-2">Order</span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                                <div class="row mt-3 align-items-center">
                                    <div class="col-md-12">
                                        
                                        <div class="form-group row">
                                            <div class="col-md-12 table-responsive">
                                                <table class="table table-striped purchaseOdrTbl" width="100%">
                                                    <thead>
                                                        <tr>
                                                            <th width="3%" class="">No</th>
                                                            
                                                            <th width="33%" class="">Plant Name/Original SKU</th>
                                                            <th width="8%" class="text-center">Size</th>
                                                            <th width="8%" class="text-center">Added</th>
                                                            
                                                            <th width="8%" class="text-center">Disc %</th>
                                                            <th width="8%" class="text-center">QTY</th>
                                                            <th width="8%" class="text-center">Each Price</th>
                                                            <th width="8%" class="text-center">Total</th>
                                                            <th width="8%" class="text-center">Actions</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td colspan="12" class="p-0">
                                                                <table class="table table-striped mb-0" border="0" width="100%">
                                                                    <tr class="movePanel">
                                                                        <td colspan="12">
                                                                            <div class="row">
                                                                                <div class="col-md-6">
                                                                                    <a href="" class="mr-3">
                                                                                        <i class="fas fa-expand-arrows-alt text-dark"></i>
                                                                                    </a>
                                                                                    <strong>West Wing Front Gardens</strong>
                                                                                </div>
                                                                                <div class="col-md-6 text-right">
                                                                                    
                                                                                    <a href="#" class="">
                                                                                        <img src="assets/img/close-ic-grey.svg" alt=""/>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    {/* Main Content Row starts here */}
                                                                    <tr class="tblBgWhite">
                                                                        <table class="table table-striped table-no-border mb-0" border="0" width="100%">
                                                                            <tr class="topTitleRow">
                                                                                <td width="3%" class="pt-2">1</td>
                                                                                <td width="97%" colspan="8" class="pt-2">
                                                                                    Diervilla x Kodiak® Orange ('G2X88544') - Kodiak® Orange Honeysuckle
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td width="3%">
                                                                                    
                                                                                </td>
                                                                                
                                                                                <td width="35%">
                                                                                    <select class="form-control plantNameSel">
                                                                                        <option>43-TF-30-1G</option>
                                                                                        <option>Option 1</option>
                                                                                        <option>Option 2</option>
                                                                                    </select>
                                                                                </td>
                                                                                <td width="10%" class="text-center">150CM 15 gal</td>
                                                                                <td width="8%" class="text-center">19/05/2020</td>
                                                                                
                                                                                <td width="9%" class="text-right">
                                                                                    <input type="text" class="form-control  text-right mx-auto" placeholder="" value="2.0"/>
                                                                                </td>
                                                                                <td width="9%" class="text-right">
                                                                                    <input type="text" class="form-control  text-right mx-auto" placeholder="" value="30"/>
                                                                                    <div class="">
                                                                                        <span class="text-green">21</span>
                                                                                    </div>
                                                                                </td>
                                                                                <td width="9%" >
                                                                                    <input type="text" class="form-control  text-right mx-auto" placeholder="" value="8.25"/>
                                                                                    <div class="">
                                                                                        <span class="text-red">12min </span>
                                                                                        <span class="text-green text-right mx-auto">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;21</span>
                                                                                    </div>
                                                                                    
                                                                                </td>
                                                                                <td width="8%" class="text-right">
                                                                                    <span class="text-success controlLabel text-right">90.00</span>
                                                                                    <div class="">
                                                                                        <span class="text-green">8.25</span>
                                                                                    </div>
                                                                                </td>
                                                                                <td width="" class="text-center actionTd">
                                                                                    <div class="d-flex justify-content-center">
                                                                                        <a href="#" class="">
                                                                                            <img src="assets/img/copy-ic-blue.svg" alt=""/>
                                                                                        </a>
                                                                                        <div class="dropdown actionDropdown  ml-2">
                                                                                            <a href="#" class="dropdown-toggle" id="actionDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                                <i class="fas fa-ellipsis-v"></i>
                                                                                            </a>
                                                                                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="actionDropdown">
                                                                                                <a href="#" class="dropdown-item splitBg" type="button"><span><img src="assets/img/split-ic.svg"/></span> Split</a>
                                                                                                <a href="#" class="dropdown-item substituteBg" type="button"><span><img src="assets/img/substitute-ic.svg"/></span> Substitute</a>
                                                                                                <a href="#" class="dropdown-item deleteBg" type="button"><span><img src="assets/img/delete-ic.svg"/></span> Delete</a>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                    </tr>
                                                                    <tr class="tblBgGrey">
                                                                        <table class="table table-striped table-no-border mb-0" border="0" width="100%">
                                                                            <tr class="topTitleRow">
                                                                                <td width="3%" class="pt-2">2</td>
                                                                                <td width="97%" colspan="8" class="pt-2">
                                                                                    Diervilla x Kodiak® Orange ('G2X88544') - Kodiak® Orange Honeysuckle
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td width="3%">
                                                                                    
                                                                                </td>
                                                                                
                                                                                <td width="35%">
                                                                                    <select class="form-control plantNameSel">
                                                                                        <option>43-TF-30-1G</option>
                                                                                        <option>Option 1</option>
                                                                                        <option>Option 2</option>
                                                                                    </select>
                                                                                </td>
                                                                                <td width="10%" class="text-center">150CM 15 gal</td>
                                                                                <td width="8%" class="text-center">19/05/2020</td>
                                                                                
                                                                                <td width="9%" class="text-right">
                                                                                    <input type="text" class="form-control  text-right mx-auto" placeholder="" value="2.0"/>
                                                                                </td>
                                                                                <td width="9%" class="text-right">
                                                                                    <input type="text" class="form-control  text-right mx-auto" placeholder="" value="30"/>
                                                                                    <div class="">
                                                                                        <span class="text-green">21</span>
                                                                                    </div>
                                                                                </td>
                                                                                <td width="9%" >
                                                                                    <input type="text" class="form-control  text-right mx-auto" placeholder="" value="8.25"/>
                                                                                    <div class="">
                                                                                        <span class="text-red">12min </span>
                                                                                        <span class="text-green text-right mx-auto">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;21</span>
                                                                                    </div>
                                                                                    
                                                                                </td>
                                                                                <td width="8%" class="text-right">
                                                                                    <span class="text-success controlLabel text-right">90.00</span>
                                                                                    <div class="">
                                                                                        <span class="text-green">8.25</span>
                                                                                    </div>
                                                                                </td>
                                                                                <td width="" class="text-center actionTd">
                                                                                    <div class="d-flex justify-content-center">
                                                                                        <a href="#" class="">
                                                                                            <img src="assets/img/copy-ic-blue.svg" alt=""/>
                                                                                        </a>
                                                                                        <div class="dropdown actionDropdown  ml-2">
                                                                                            <a href="#" class="dropdown-toggle" id="actionDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                                <i class="fas fa-ellipsis-v"></i>
                                                                                            </a>
                                                                                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="actionDropdown">
                                                                                                <a href="#" class="dropdown-item splitBg" type="button"><span><img src="assets/img/split-ic.svg"/></span> Split</a>
                                                                                                <a href="#" class="dropdown-item substituteBg" type="button"><span><img src="assets/img/substitute-ic.svg"/></span> Substitute</a>
                                                                                                <a href="#" class="dropdown-item deleteBg" type="button"><span><img src="assets/img/delete-ic.svg"/></span> Delete</a>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                            <tr class="trBgWhite ">
                                                                                <td width="3%"></td>
                                                                                <td width="97%" class="" colspan="12">
                                                                                    <img src="assets/img/enter-arrow-red.svg" alt=""/>
                                                                                    <span class="ml-2">Substitution for Buxus microphla Peergold (Golden Dream Boxwood): 645-1G</span>
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                    </tr>
                                                                    <tr class="tblBgWhite">
                                                                        <table class="table table-striped table-no-border mb-0" border="0" width="100%">
                                                                            <tr class="topTitleRow">
                                                                                <td width="3%" class="pt-2">3</td>
                                                                                <td width="97%" colspan="8" class="pt-2">
                                                                                    Diervilla x Kodiak® Orange ('G2X88544') - Kodiak® Orange Honeysuckle
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td width="3%">
                                                                                    
                                                                                </td>
                                                                                
                                                                                <td width="35%">
                                                                                    <select class="form-control plantNameSel">
                                                                                        <option>43-TF-30-1G</option>
                                                                                        <option>Option 1</option>
                                                                                        <option>Option 2</option>
                                                                                    </select>
                                                                                </td>
                                                                                <td width="10%" class="text-center">150CM 15 gal</td>
                                                                                <td width="8%" class="text-center">19/05/2020</td>
                                                                                
                                                                                <td width="9%" class="text-right">
                                                                                    <input type="text" class="form-control  text-right mx-auto" placeholder="" value="2.0"/>
                                                                                </td>
                                                                                <td width="9%" class="text-right">
                                                                                    <input type="text" class="form-control  text-right mx-auto" placeholder="" value="30"/>
                                                                                    <div class="">
                                                                                        <span class="text-green">21</span>
                                                                                    </div>
                                                                                </td>
                                                                                <td width="9%" >
                                                                                    <input type="text" class="form-control  text-right mx-auto" placeholder="" value="8.25"/>
                                                                                    <div class="">
                                                                                        <span class="text-red">12min </span>
                                                                                        <span class="text-green text-right mx-auto">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;21</span>
                                                                                    </div>
                                                                                    
                                                                                </td>
                                                                                <td width="8%" class="text-right">
                                                                                    <span class="text-success controlLabel text-right">90.00</span>
                                                                                    <div class="">
                                                                                        <span class="text-green">8.25</span>
                                                                                    </div>
                                                                                </td>
                                                                                <td width="" class="text-center actionTd">
                                                                                    <div class="d-flex justify-content-center">
                                                                                        <a href="#" class="">
                                                                                            <img src="assets/img/copy-ic-blue.svg" alt=""/>
                                                                                        </a>
                                                                                        <div class="dropdown actionDropdown  ml-2">
                                                                                            <a href="#" class="dropdown-toggle" id="actionDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                                <i class="fas fa-ellipsis-v"></i>
                                                                                            </a>
                                                                                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="actionDropdown">
                                                                                                <a href="#" class="dropdown-item splitBg" type="button"><span><img src="assets/img/split-ic.svg"/></span> Split</a>
                                                                                                <a href="#" class="dropdown-item substituteBg" type="button"><span><img src="assets/img/substitute-ic.svg"/></span> Substitute</a>
                                                                                                <a href="#" class="dropdown-item deleteBg" type="button"><span><img src="assets/img/delete-ic.svg"/></span> Delete</a>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                    </tr>
                                                                    
                                                                </table>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td colspan="12" class="p-0">
                                                                <table class="table table-striped mb-0" border="0" width="100%">
                                                                    <tr class="movePanel">
                                                                        <td colspan="12">
                                                                            <div class="row">
                                                                                <div class="col-md-6">
                                                                                    <a href="" class="mr-3">
                                                                                        <i class="fas fa-expand-arrows-alt text-dark"></i>
                                                                                    </a>
                                                                                    <strong>West Wing Front Gardens</strong>
                                                                                </div>
                                                                                <div class="col-md-6 text-right">
                                                                                    
                                                                                    <a href="#" class="">
                                                                                        <img src="assets/img/close-ic-grey.svg" alt=""/>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    {/* Main Content Row starts here */}
                                                                    <tr class="tblBgWhite">
                                                                        <table class="table table-striped table-no-border mb-0" border="0" width="100%">
                                                                            <tr class="topTitleRow">
                                                                                <td width="3%" class="pt-2">4</td>
                                                                                <td width="97%" colspan="8" class="pt-2">
                                                                                    Diervilla x Kodiak® Orange ('G2X88544') - Kodiak® Orange Honeysuckle
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td width="3%">
                                                                                    
                                                                                </td>
                                                                                
                                                                                <td width="35%">
                                                                                    <select class="form-control plantNameSel">
                                                                                        <option>43-TF-30-1G</option>
                                                                                        <option>Option 1</option>
                                                                                        <option>Option 2</option>
                                                                                    </select>
                                                                                </td>
                                                                                <td width="10%" class="text-center">150CM 15 gal</td>
                                                                                <td width="8%" class="text-center">19/05/2020</td>
                                                                                
                                                                                <td width="9%" class="text-right">
                                                                                    <input type="text" class="form-control  text-right mx-auto" placeholder="" value="2.0"/>
                                                                                </td>
                                                                                <td width="9%" class="text-right">
                                                                                    <input type="text" class="form-control  text-right mx-auto" placeholder="" value="30"/>
                                                                                    <div class="">
                                                                                        <span class="text-green">21</span>
                                                                                    </div>
                                                                                </td>
                                                                                <td width="9%" >
                                                                                    <input type="text" class="form-control  text-right mx-auto" placeholder="" value="8.25"/>
                                                                                    <div class="">
                                                                                        <span class="text-red">12min </span>
                                                                                        <span class="text-green text-right mx-auto">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;21</span>
                                                                                    </div>
                                                                                    
                                                                                </td>
                                                                                <td width="8%" class="text-right">
                                                                                    <span class="text-success controlLabel text-right">90.00</span>
                                                                                    <div class="">
                                                                                        <span class="text-green">8.25</span>
                                                                                    </div>
                                                                                </td>
                                                                                <td width="" class="text-center actionTd">
                                                                                    <div class="d-flex justify-content-center">
                                                                                        <a href="#" class="">
                                                                                            <img src="assets/img/copy-ic-blue.svg" alt=""/>
                                                                                        </a>
                                                                                        <div class="dropdown actionDropdown  ml-2">
                                                                                            <a href="#" class="dropdown-toggle" id="actionDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                                <i class="fas fa-ellipsis-v"></i>
                                                                                            </a>
                                                                                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="actionDropdown">
                                                                                                <a href="#" class="dropdown-item splitBg" type="button"><span><img src="assets/img/split-ic.svg"/></span> Split</a>
                                                                                                <a href="#" class="dropdown-item substituteBg" type="button"><span><img src="assets/img/substitute-ic.svg"/></span> Substitute</a>
                                                                                                <a href="#" class="dropdown-item deleteBg" type="button"><span><img src="assets/img/delete-ic.svg"/></span> Delete</a>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                    </tr>
                                                                    <tr class="tblBgGrey">
                                                                        <table class="table table-striped table-no-border mb-0" border="0" width="100%">
                                                                            <tr class="topTitleRow">
                                                                                <td width="3%" class="pt-2">5</td>
                                                                                <td width="97%" colspan="8" class="pt-2">
                                                                                    Diervilla x Kodiak® Orange ('G2X88544') - Kodiak® Orange Honeysuckle
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td width="3%">
                                                                                    
                                                                                </td>
                                                                                
                                                                                <td width="35%">
                                                                                    <select class="form-control plantNameSel">
                                                                                        <option>43-TF-30-1G</option>
                                                                                        <option>Option 1</option>
                                                                                        <option>Option 2</option>
                                                                                    </select>
                                                                                </td>
                                                                                <td width="10%" class="text-center">150CM 15 gal</td>
                                                                                <td width="8%" class="text-center">19/05/2020</td>
                                                                                
                                                                                <td width="9%" class="text-right">
                                                                                    <input type="text" class="form-control  text-right mx-auto" placeholder="" value="2.0"/>
                                                                                </td>
                                                                                <td width="9%" class="text-right">
                                                                                    <input type="text" class="form-control  text-right mx-auto" placeholder="" value="30"/>
                                                                                    <div class="">
                                                                                        <span class="text-green">21</span>
                                                                                    </div>
                                                                                </td>
                                                                                <td width="9%" >
                                                                                    <input type="text" class="form-control  text-right mx-auto" placeholder="" value="8.25"/>
                                                                                    <div class="">
                                                                                        <span class="text-red">12min </span>
                                                                                        <span class="text-green text-right mx-auto">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;21</span>
                                                                                    </div>
                                                                                    
                                                                                </td>
                                                                                <td width="8%" class="text-right">
                                                                                    <span class="text-success controlLabel text-right">90.00</span>
                                                                                    <div class="">
                                                                                        <span class="text-green">8.25</span>
                                                                                    </div>
                                                                                </td>
                                                                                <td width="" class="text-center actionTd">
                                                                                    <div class="d-flex justify-content-center">
                                                                                        <a href="#" class="">
                                                                                            <img src="assets/img/copy-ic-blue.svg" alt=""/>
                                                                                        </a>
                                                                                        <div class="dropdown actionDropdown  ml-2">
                                                                                            <a href="#" class="dropdown-toggle" id="actionDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                                <i class="fas fa-ellipsis-v"></i>
                                                                                            </a>
                                                                                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="actionDropdown">
                                                                                                <a href="#" class="dropdown-item splitBg" type="button"><span><img src="assets/img/split-ic.svg"/></span> Split</a>
                                                                                                <a href="#" class="dropdown-item substituteBg" type="button"><span><img src="assets/img/substitute-ic.svg"/></span> Substitute</a>
                                                                                                <a href="#" class="dropdown-item deleteBg" type="button"><span><img src="assets/img/delete-ic.svg"/></span> Delete</a>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                            <tr class="trBgWhite ">
                                                                                <td width="3%"></td>
                                                                                <td width="97%" class="" colspan="12">
                                                                                    <img src="assets/img/enter-arrow-red.svg" alt=""/>
                                                                                    <span class="ml-2">Substitution for Buxus microphla Peergold (Golden Dream Boxwood): 645-1G</span>
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                    </tr>
                                                                    <tr class="tblBgWhite">
                                                                        <table class="table table-striped table-no-border mb-0" border="0" width="100%">
                                                                            <tr class="topTitleRow">
                                                                                <td width="3%" class="pt-2">6</td>
                                                                                <td width="97%" colspan="8" class="pt-2">
                                                                                    Diervilla x Kodiak® Orange ('G2X88544') - Kodiak® Orange Honeysuckle
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td width="3%">
                                                                                    
                                                                                </td>
                                                                                
                                                                                <td width="35%">
                                                                                    <select class="form-control plantNameSel">
                                                                                        <option>43-TF-30-1G</option>
                                                                                        <option>Option 1</option>
                                                                                        <option>Option 2</option>
                                                                                    </select>
                                                                                </td>
                                                                                <td width="10%" class="text-center">150CM 15 gal</td>
                                                                                <td width="8%" class="text-center">19/05/2020</td>
                                                                                
                                                                                <td width="9%" class="text-right">
                                                                                    <input type="text" class="form-control  text-right mx-auto" placeholder="" value="2.0"/>
                                                                                </td>
                                                                                <td width="9%" class="text-right">
                                                                                    <input type="text" class="form-control  text-right mx-auto" placeholder="" value="30"/>
                                                                                    <div class="">
                                                                                        <span class="text-green">21</span>
                                                                                    </div>
                                                                                </td>
                                                                                <td width="9%" >
                                                                                    <input type="text" class="form-control  text-right mx-auto" placeholder="" value="8.25"/>
                                                                                    <div class="">
                                                                                        <span class="text-red">12min </span>
                                                                                        <span class="text-green text-right mx-auto">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;21</span>
                                                                                    </div>
                                                                                    
                                                                                </td>
                                                                                <td width="8%" class="text-right">
                                                                                    <span class="text-success controlLabel text-right">90.00</span>
                                                                                    <div class="">
                                                                                        <span class="text-green">8.25</span>
                                                                                    </div>
                                                                                </td>
                                                                                <td width="" class="text-center actionTd">
                                                                                    <div class="d-flex justify-content-center">
                                                                                        <a href="#" class="">
                                                                                            <img src="assets/img/copy-ic-blue.svg" alt=""/>
                                                                                        </a>
                                                                                        <div class="dropdown actionDropdown  ml-2">
                                                                                            <a href="#" class="dropdown-toggle" id="actionDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                                <i class="fas fa-ellipsis-v"></i>
                                                                                            </a>
                                                                                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="actionDropdown">
                                                                                                <a href="#" class="dropdown-item splitBg" type="button"><span><img src="assets/img/split-ic.svg"/></span> Split</a>
                                                                                                <a href="#" class="dropdown-item substituteBg" type="button"><span><img src="assets/img/substitute-ic.svg"/></span> Substitute</a>
                                                                                                <a href="#" class="dropdown-item deleteBg" type="button"><span><img src="assets/img/delete-ic.svg"/></span> Delete</a>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                    </tr>
                                                                    
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-md-6"></div>
                                            <div class="col-md-12 col-lg-6">
                                                <div class="greyBox px-3 py-3 totalSec">
                                                    <div class="row">
                                                        <div class="col-md-8 text-right">
                                                            <label >Item Subtotal <span>$</span></label>
                                                        </div>
                                                        <div class="col-md-2 text-right">
                                                            <label >175.60</label>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-8 text-right">
                                                            <label >Hang Tags and Pot Labels <span>$</span></label>
                                                        </div>
                                                        <div class="col-md-2 text-right">
                                                            <label >8.75</label>
                                                        </div>
                                                    </div>
                                                    <div class="row subTotLbl">
                                                        <div class="col-md-8 text-right">
                                                            <label >Discounts <span>$</span></label>
                                                        </div>
                                                        <div class="col-md-2 text-right">
                                                            <label >-27.10</label>
                                                        </div>
                                                    </div>
                                                    <div class="row subTotLbl text-green">
                                                        <div class="col-md-8 text-right">
                                                            <label class="text-uppercase">Subtotal after Discounts <span>$</span></label>
                                                        </div>
                                                        <div class="col-md-2 text-right">
                                                            <label class="f-s-24">544.50</label>
                                                        </div>
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
                        <div class="bg-white px-3 py-3 mt-2">
                            <form>
                                <h2>Sales Order History</h2>
                                <hr/>
                                <div class="row">
                                    <div class="col-md-12 table-responsive">
                                        <table class="table table-striped table-td-valign-middle" width="100%">
                                            <thead>
                                                <tr>
                                                    <th class="text-center">Action</th>
                                                    <th class="text-center">Source</th>
                                                    <th class="text-center">Item</th>
                                                    <th class="text-center">Timestamp</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td class="text-center">New</td>
                                                    <td class="text-center">B.Vanderkruk</td>
                                                    <td class="text-center">SKU GG063000000LT added with QTY:4</td>
                                                    <td class="text-center">16/05/2020   15:32</td>
                                                </tr>
                                                <tr>
                                                    <td class="text-center">New</td>
                                                    <td class="text-center">B.Vanderkruk</td>
                                                    <td class="text-center">SKU GG063000000LT added with QTY:4</td>
                                                    <td class="text-center">16/05/2020   15:32</td>
                                                </tr>
                                                <tr>
                                                    <td class="text-center">New</td>
                                                    <td class="text-center">B.Vanderkruk</td>
                                                    <td class="text-center">SKU GG063000000LT added with QTY:4</td>
                                                    <td class="text-center">16/05/2020   15:32</td>
                                                </tr>
                                                <tr>
                                                    <td class="text-center">New</td>
                                                    <td class="text-center">B.Vanderkruk</td>
                                                    <td class="text-center">SKU GG063000000LT added with QTY:4</td>
                                                    <td class="text-center">16/05/2020   15:32</td>
                                                </tr>
                                                <tr>
                                                    <td class="text-center">New</td>
                                                    <td class="text-center">B.Vanderkruk</td>
                                                    <td class="text-center">SKU GG063000000LT added with QTY:4</td>
                                                    <td class="text-center">16/05/2020   15:32</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div class="bg-white px-3 py-3 mt-2">
                            <form>
                                <h2>Internal Notes <span class="f-s-14 textGrey">(Not shown to customer)</span></h2>
                                <hr/>
                                <div class="row">
                                    <div class="col-md-12">
                                        <textarea cols="10" rows="8" class="form-control"></textarea>
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-md-12 text-right">
                                        <button type="button" class="btn btn-primary btn-lg ml-3">SAVE</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </TabPanel>
                </Tabs>
                </div>                
            </div>
        </div>
    )
}
const mapStateToProps = (state)=>(
    {
        customerData:state.customerReducer,
        QuoteReducerData:state.QuoteReducerData
    }
)
export default connect(mapStateToProps,{handleInputChange,addNewQuote,getCustomerContacts,getcustomerAddress,getAllStatusMethods,deleteCustomer,getAllCustomerType,getAllCustomer,handleExchangeData,getCustomerById,setPageNumber,handleRadioFilter,handleSearchFilter,handleAplhabetFilter,typeOfActionShow})(QuoteAndOrdersManagement)
