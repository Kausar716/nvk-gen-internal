import React, { useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import DatePicker from 'react-date-picker';

export default function AddPlant() {
    const [value, onChange] = useState(new Date());
    return (
        <div>
            <div class="contentHeader bg-white d-md-flex justify-content-between align-items-center">
            <h1 class="page-header mb-0"><img src="assets/img/customer-ic-lg.svg" alt=""/> Edit Customer <span class="text-green">#00028</span></h1>
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
                            <div>
                                <label>Complete Orders</label>
                                <h1>124</h1>
                                <div><a href="">View Orders</a></div>
                            </div>
                            <div>
                                <label>Active Orders</label>
                                <h1>6</h1>
                                <div><a href="">View Orders</a></div>
                            </div>
                            <div>
                                <label>Active Quotes    </label>
                                <h1>124</h1>
                                <div><a href="">View Orders</a></div>
                            </div>
                            <div class="lastOdrDate">
                                <label>Last Order</label>
                                <h4>Dec 5, 2019</h4>
                            </div>
                        </div>
                        <div class="col-md-12 col-lg-6 mt-3 mt-lg-0 text-lg-right">
                            <div class="topbarCtrls mt-3 mt-md-0 d-flex flex-wrap justify-content-md-end">
                                <a href="#" class="btn active">
                                    <span class="d-flex align-items-center text-left">
                                        <img src="assets/img/pdf-ic.svg" alt=""/>
                                        <span class="ml-2"><b>Contact PDF</b></span>
                                    </span>
                                </a>
                                <a href="#" class="btn ml-2">
                                    <span class="d-flex align-items-center text-left">
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
                                <div class=" d-flex align-items-center mr-4 my-md-2 mt-3 mt-md-0">
                                    <div class="switcher ml-2 pr-2">
                                        <input type="checkbox" name="switcher_checkbox_alert" id="switcher_checkbox_alert" value="2"/>
                                        <label for="switcher_checkbox_alert"></label>
                                    </div>
                                    Alert
                                </div>
                                <div class=" d-flex align-items-center mr-4 my-md-2 mt-3 mt-md-0">
                                    <div class="switcher ml-2 pr-2">
                                        <input type="checkbox" name="switcher_checkbox_Prospect" id="switcher_checkbox_Prospect" value="2"/>
                                        <label for="switcher_checkbox_Prospect"></label>
                                    </div>
                                    Prospect
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 text-md-right">
                            <div class="d-flex flex-wrap align-items-center justify-content-md-end">
                                <div class="mt-3 mt-md-0">
                                    <a href="" class="text-danger f-s-18 f-w-600">Delete Customer</a>
                                </div>
                                <div class=" d-flex align-items-center mr-4 my-md-2 mt-3 mt-md-0">
                                    <div class="switcher ml-2 pr-2">
                                        <input type="checkbox" name="switcher_checkbox_alert" id="switcher_checkbox_alert" value="2"/>
                                        <label for="switcher_checkbox_alert"></label>
                                    </div>
                                    Active
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
                        <Tab>Tags &amp; Labels</Tab>
                        <Tab>Addresses</Tab>
                        <Tab>Print Catalog</Tab>
                    </TabList>
                    <TabPanel>
                        <div class="bg-white cardShadow px-3 py-3 mt-3">
                            <form>
                                <h2>Customer Information</h2>
                                <hr/>
                                <div class="row mt-3">
                                    <div class="col-md-8 col-lg-8">
                                        <label>Customer Name</label>
                                        <input type="text" class="form-control" value="John Smith Landscaping" />
                                    </div>
                                    <div class="col-md-4 col-lg-4 mt-2 mt-md-0">
                                        <label>Type</label>
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
                                        <input type="text" class="form-control" value="John Smith, Landscaping XXXXXXXX, XXXXX" />
                                    </div>
                                    <div class="col-md-4 col-lg-4 mt-2 mt-md-0">
                                        <label>Fax</label>
                                        <input type="text" class="form-control" value="XXXXXXXX XXX" />
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-md-8 col-lg-8">
                                        <label>Website</label>
                                        <div class="d-flex">
                                            <input type="text" class="form-control" value="John Smith, Landscaping XXXXXXXX, XXXXX" />
                                            <button type="button" class="btn btn-outline-secondary btn-lg ml-2">Visit</button>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-lg-4 mt-2 mt-md-0">
                                        <label>Alternative ID <small>(Up tp 5 Char..)</small></label>
                                        <input type="text" class="form-control" value="XXXXXXXX XXX" />
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-md-12 col-lg-12 mt-2 mt-md-0">
                                        <label>Customer Notes <small>(Internal Only)</small></label>
                                        <textarea rows="" cols=""  class="form-control" />
                                    </div>
                                </div>



                            </form>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div class="bg-white cardShadow px-3 py-3 mt-3">
                            <form>
                                <h2>Order Settings</h2>
                                <hr/>
                                <div class="row mt-3">
                                    <div class="col-md-8 col-lg-8">
                                        <label>Dispatch Type</label>
                                        <div class="d-flex">
                                            <div class="custom-control custom-radio">
                                                <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input" />
                                                <label class="custom-control-label" for="customRadio1">Delivery</label>
                                            </div>
                                            <div class="custom-control custom-radio ml-4">
                                                <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input" />
                                                <label class="custom-control-label" for="customRadio1">Pickup</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-md-3 col-lg-2">
                                        <label>Tax Exempt</label>
                                        <div class="d-flex">
                                            <div class="custom-control custom-radio">
                                                <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input" />
                                                <label class="custom-control-label" for="customRadio1">No</label>
                                            </div>
                                            <div class="custom-control custom-radio ml-4">
                                                <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input" />
                                                <label class="custom-control-label" for="customRadio1">Yes</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-lg-2 mt-3 mt-md-0">
                                        <div class="d-flex">
                                            <div>
                                                <label>Tax Exempt Number</label>
                                                <input type="text" class="form-control" value="XXXX XXXXX XX" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-md-3 col-lg-2">
                                        <label>P.O. Required</label>
                                        <div class="d-flex">
                                            <div class="custom-control custom-radio">
                                                <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input" />
                                                <label class="custom-control-label" for="customRadio1">No</label>
                                            </div>
                                            <div class="custom-control custom-radio ml-4">
                                                <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input" />
                                                <label class="custom-control-label" for="customRadio1">Yes</label>
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
                                            <div class="col-md-4 mt-3 mt-md-0">
                                                <label>Restock Fees</label>
                                                <div class="d-flex">
                                                    <div class="custom-control custom-radio">
                                                        <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input" />
                                                        <label class="custom-control-label" for="customRadio1">No</label>
                                                    </div>
                                                    <div class="custom-control custom-radio ml-4">
                                                        <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input" />
                                                        <label class="custom-control-label" for="customRadio1">Yes</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-4 mt-3 mt-md-0">
                                                <label>Fee%</label>
                                                <input type="text" class="form-control" value="10.0" />
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
                                    <div class="col-md-6 mt-md-3 mt-lg-0 col-lg-4">
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
