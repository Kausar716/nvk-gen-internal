import React, { useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import DatePicker from 'react-date-picker';

export default function PurchaseOrderDetails() {
    const [value, onChange] = useState(new Date());
    return (
        <div>
            <div class="contentHeader bg-white d-md-flex justify-content-between align-items-center">
				<h1 class="page-header mb-0 d-flex flex-wrap align-items-center"><img src="assets/img/PurchaseOrders-ic-lg-green.svg" alt="" class="mr-2"/> Edit Purchase Orders <span class="text-green ml-3">#JSMITH-2000132</span></h1>
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
                    <div class="row align-items-center editPurchaseHead">
                        <div class="col-md-6 d-flex align-items-center">
                            <h2 class="mb-0">Draft</h2>
                            <div class="d-flex align-items-center ml-3 mb-0 bdrLeft">
                                <div class="d-flex align-items-center">
                                    <img src="assets/img/date-ic-sm-green.svg" alt=""/>
                                    <span class="ml-2">March 25, 2020</span>
                                </div>
                                <div class="ml-3 d-flex align-items-center">
                                    <img src="assets/img/price-ic-sm-green.svg" alt=""/>
                                    <span class="ml-2">CA <b class="f-s-22 lh22">$615.29</b></span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 d-flex justify-content-md-end">
                            <a href="" class="mx-2"><img src="assets/img/copy-ic.svg" alt=""/></a>
                            <a href="" class="mx-2"><img src="assets/img/trash-ic.svg" alt=""/></a>
                        </div>
                    </div>
                </div>

                <div class="">
                <Tabs>
                    <TabList>
                        <Tab>Order Details</Tab>
                        <Tab>Add Order</Tab>
                        <Tab>Current P.O. <span class="badge badge-pill badge-success">25</span></Tab>
                        <Tab>Order History</Tab>
                        <Tab>Notes</Tab>    
                    </TabList>
                    <TabPanel>
                        <div class="bg-white px-3 py-3">
                            <form>
                                <h2>Purchase Order Details</h2>
                                <hr/>
                                <div class="px-3 py-3 bg-grey-transparent-2">
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
                                                <div>B. Vanderkruk</div>
                                                <div>brent@nvknuseries.com</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row mt-3">
                                    <div class="col-md-12 col-lg-6 col-xl-8">
                                        <div class="row mt-3">
                                            <div class="col-md-12 col-lg-12">
                                                <label>Discount</label>
                                                <div class="row mt-3 align-items-center">
                                                    <div class="col-md-4 col-lg-2">
                                                        <input type="text" class="form-control" placeholder=""></input>
                                                    </div>
                                                    <div class="col-md-6 col-lg-4 d-flex mt-3 mt-md-0">
                                                        <div class="custom-control custom-radio">
                                                            <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input" />
                                                            <label class="custom-control-label" for="customRadio1">Overall</label>
                                                        </div>
                                                        <div class="custom-control custom-radio ml-3">
                                                            <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input" />
                                                            <label class="custom-control-label" for="customRadio2">Individual</label>
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
                                                <DatePicker onChange={onChange} value={value} />
                                            </div>
                                            <div class="col-md-6 col-lg-6 mt-3 mt-md-0">
                                                <label class="mr-2 mr-md-0">Latest Date</label>
                                                <DatePicker onChange={onChange} value={value} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-md-12 col-lg-8">
                                        <div class="row mt-3">
                                            <div class="col-md-6 col-lg-4">
                                                <label>Dispatch Type</label>
                                                <input type="text" class="form-control" placeholder="Pickup"></input>
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
                                                <input type="text" class="form-control" placeholder=""></input>
                                            </div>
                                            <div class="col-md-6 col-lg-6 mt-3 mt-md-0">
                                                <label>Include Royalty</label>
                                                <div class="d-flex align-items-center flex-wrap ml-2 mt-2">Off
                                                    <div class="switcher switcher-sm ml-2 pr-2">
                                                        <input type="checkbox" name="switcher_checkbox_date" id="switcher_checkbox_date" value="2" />
                                                        <label for="switcher_checkbox_date"></label>
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
                                        <input type="text" class="form-control" placeholder=""></input>
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-md-12 col-lg-12 mt-2 mt-md-0">
                                        <label>Customer Notes <small>(Internal Only)</small></label>
                                        <textarea cols="4" rows="3" class="form-control"></textarea>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div class="bg-white px-3 py-3 mt-2">
                            <form>
                                <h2>Add to this  Order</h2>
                                <hr/>
                                <div class="row mt-3 align-items-center">
                                    <div class="col-md-12">
                                        <div class="row form-group">
                                            <div class="col-md-6 col-lg-6">
                                                <label>Search</label>
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
                                        <div class="row mt-3 mb-4">
                                            <div class="col-md-12 col-lg-12 text-center">
                                                <button type="button" class="btn btn-primary btnLarge">View top 10 Ordered from this Supplier</button>
                                            </div>
                                        </div>
                                        <div class="row mt-4 mb-4">
                                            <div class="col-md-12 col-lg-12 sortingCtrls d-flex flex-wrap align-items-center">
                                            <span class="mr-3">Show Future Values:</span>
                                                <a href="" class="active">No End Date</a>
                                                <a href="">Next 30 Days</a>
                                                <a href="">Next 90 Days</a>
                                                <a href="">Next 180 Days</a>
                                            </div>
                                        </div>
                                        
                                        <div class="form-group row">
                                            <div class="col-md-12 table-responsive">
                                                <table class="table table-striped table-td-valign-middle mb-0" width="100%">
                                                    <thead>
                                                        <tr>
                                                            <th width="15%" class="">SKU</th>
                                                            <th width="16%" class="text-center">Size</th>
                                                            <th width="8%" class="text-center">On Hand</th>
                                                            <th width="8%" class="text-center">Customer Orders</th>
                                                            <th width="7%" class="text-center">Current Available</th>
                                                            <th width="8%" class="text-center">On Quotes</th>
                                                            <th width="8%" class="text-center">Open P.O.s</th>
                                                            <th width="7%" class="text-center">Future Available</th>
                                                            <th width="8%" class="text-center">Royalty</th>
                                                            <th width="8%" class="text-center">NVK Price</th>
                                                            <th width="7%" class="text-center">Qty</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td colspan="11" class="p-0">
                                                                <table class="table table-striped tableOuterBdr" width="100%">
                                                                    <tr class="tblLinks">
                                                                        <td colspan="11">
                                                                            <a href="">Abeliophyllum (White Forsythia)</a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr class="odd">
                                                                        <td width="15%">
                                                                            <a href="">393-TF-1259-1G</a>
                                                                        </td>
                                                                        <td class="text-center" width="16%">150CM 15 gal</td>
                                                                        <td class="text-center" width="8%">50</td>
                                                                        <td class="text-center" width="8%">23</td>
                                                                        <td class="text-center" width="7%"><b class="f-s-20">27</b></td>
                                                                        <td class="text-center" width="8%">13</td>
                                                                        <td class="text-center" width="8%">50</td>
                                                                        <td class="text-center" width="7%"><b class="f-s-20">125</b></td>
                                                                        <td class="text-center" width="8%">0.25</td>
                                                                        <td class="text-center" width="8%">2.75</td>
                                                                        <td class="text-center" width="7%">
                                                                            <div class="d-flex align-items-center">
                                                                                <input type="text" class="form-control textQtySm" placeholder="" value="20"/>
                                                                                <a href="" class="ml-2">
                                                                                    <img src="assets/img/tbl-plus-ic.svg" alt=""/>
                                                                                </a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr class="even">
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
                                                                        <td class="text-center">0.25</td>
                                                                        <td class="text-center">2.75</td>
                                                                        <td class="text-center">
                                                                            <div class="d-flex align-items-center">
                                                                                <input type="text" class="form-control textQtySm" placeholder="" value="20"/>
                                                                                <a href="" class="ml-2">
                                                                                    <img src="assets/img/tbl-plus-ic.svg" alt=""/>
                                                                                </a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr class="odd">
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
                                                                        <td class="text-center">0.25</td>
                                                                        <td class="text-center">2.75</td>
                                                                        <td class="text-center">
                                                                            <div class="d-flex align-items-center">
                                                                                <input type="text" class="form-control textQtySm" placeholder="" value="20"/>
                                                                                <a href="" class="ml-2">
                                                                                    <img src="assets/img/tbl-plus-ic.svg" alt=""/>
                                                                                </a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                        <tr class="border-0">
                                                            <td colspan="11" class="p-0">
                                                                <table class="table table-striped tableOuterBdr mb-0" width="100%">
                                                                    <tr class="tblLinks">
                                                                        <td colspan="11">
                                                                            <a href="">Abeliophyllum (White Forsythia)</a>
                                                                        </td>
                                                                    </tr>
                                                                    <tr class="odd">
                                                                        <td width="15%">
                                                                            <a href="">393-TF-1259-1G</a>
                                                                        </td>
                                                                        <td class="text-center" width="16%">150CM 15 gal</td>
                                                                        <td class="text-center" width="8%">50</td>
                                                                        <td class="text-center" width="8%">23</td>
                                                                        <td class="text-center" width="7%"><b class="f-s-20">27</b></td>
                                                                        <td class="text-center" width="8%">13</td>
                                                                        <td class="text-center" width="8%">50</td>
                                                                        <td class="text-center" width="7%"><b class="f-s-20">125</b></td>
                                                                        <td class="text-center" width="8%">0.25</td>
                                                                        <td class="text-center" width="8%">2.75</td>
                                                                        <td class="text-center" width="7%">
                                                                            <div class="d-flex align-items-center">
                                                                                <input type="text" class="form-control textQtySm" placeholder="" value="20"/>
                                                                                <a href="" class="ml-2">
                                                                                    <img src="assets/img/tbl-plus-ic.svg" alt=""/>
                                                                                </a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr class="even">
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
                                                                        <td class="text-center">0.25</td>
                                                                        <td class="text-center">2.75</td>
                                                                        <td class="text-center">
                                                                            <div class="d-flex align-items-center">
                                                                                <input type="text" class="form-control textQtySm" placeholder="" value="20"/>
                                                                                <a href="" class="ml-2">
                                                                                    <img src="assets/img/tbl-plus-ic.svg" alt=""/>
                                                                                </a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr class="odd">
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
                                                                        <td class="text-center">0.25</td>
                                                                        <td class="text-center">2.75</td>
                                                                        <td class="text-center">
                                                                            <div class="d-flex align-items-center">
                                                                                <input type="text" class="form-control textQtySm" placeholder="" value="20"/>
                                                                                <a href="" class="ml-2">
                                                                                    <img src="assets/img/tbl-plus-ic.svg" alt=""/>
                                                                                </a>
                                                                            </div>
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
                                        <h2>Currently on this Purchase Order</h2>
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
                                <hr/>
                                <div class="row mt-3 align-items-center">
                                    <div class="col-md-12">
                                        
                                        <div class="form-group row">
                                            <div class="col-md-12 table-responsive">
                                                <table class="table table-striped purchaseOdrTbl" border="0" width="100%">
                                                    <thead>
                                                        <tr>
                                                            <th width="4%" class="">No</th>
                                                            <th width="20%" class="">Plant Name/Original SKU</th>
                                                            <th width="10%" class="text-center">Size</th>
                                                            <th width="10%" class="text-center">Added</th>
                                                            <th width="6%" class="text-center">Disc %</th>
                                                            <th width="8%" class="text-center">Allocate</th>
                                                            <th width="6%" class="text-center">QTY</th>
                                                            <th width="6%" class="text-center">Royalty</th>
                                                            <th width="7%" class="text-center">NVk Price</th>
                                                            <th width="7%" class="text-center">Each Price</th>
                                                            <th width="8%" class="text-center">Total</th>
                                                            <th width="8%" class="text-center">Actions</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td colspan="12" class="p-0">
                                                                <table class="table table-striped mb-0" width="100%">
                                                                    <tr class="movePanel">
                                                                        <td colspan="12">
                                                                            <div class="row">
                                                                                <div class="col-md-8">
                                                                                    <a href="" class="mr-3">
                                                                                        <i class="fas fa-expand-arrows-alt text-dark"></i>
                                                                                    </a>
                                                                                    <strong>West Wing Front Gardens</strong>
                                                                                </div>
                                                                                <div class="col-md-4 text-right">
                                                                                    <a href="#" class="">
                                                                                        <img src="assets/img/close-ic-grey.svg" alt=""/>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    {/* Main Content Row starts here */}
                                                                    <tr class="tblBgWhite">
                                                                        <table class="table table-striped table-no-border" width="100%">
                                                                            <tr class="topTitleRow">
                                                                                <td>1</td>
                                                                                <td  colspan="11">Diervilla x Kodiak® Orange ('G2X88544') - Kodiak® Orange Honeysuckle</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td width="4%"></td>
                                                                                <td width="20%">
                                                                                    <select class="form-control plantNameSel">
                                                                                        <option>43-TF-30-1G</option>
                                                                                        <option>Option 1</option>
                                                                                        <option>Option 2</option>
                                                                                    </select>
                                                                                </td>
                                                                                <td width="10%" class="text-center">150CM 15 gal</td>
                                                                                <td width="10%" class="text-center">19/05/2020</td>
                                                                                <td width="6%" class="text-center">
                                                                                    <input type="text" class="form-control w-60 text-right" placeholder="" value="2.0"/>
                                                                                </td>
                                                                                <td width="8%" class="text-center">
                                                                                    <select class="form-control w-80">
                                                                                        <option>Sales</option>
                                                                                        <option>Option 1</option>
                                                                                        <option>Option 2</option>
                                                                                    </select>
                                                                                </td>
                                                                                <td width="6%" class="text-center">
                                                                                    <input type="text" class="form-control w-60 text-right" placeholder="" value="10"/>
                                                                                </td>
                                                                                <td width="6%" class="text-center">0.75</td>
                                                                                <td width="7%" class="text-center">9.55</td>
                                                                                <td width="7%" class="text-center">
                                                                                    <input type="text" class="form-control w-60 text-right mx-auto text-green" placeholder="" value="8.25"/>
                                                                                    <div class="">
                                                                                        <span class="mr-2">Disc</span>
                                                                                        <span>8.25</span>
                                                                                    </div>
                                                                                </td>
                                                                                <td width="8%" class="text-center">
                                                                                    <span class="text-green controlLabel text-right">90.00</span>
                                                                                    <div class="">
                                                                                        <span class="mr-2">Disc</span>
                                                                                        <span>8.25</span>
                                                                                    </div>
                                                                                </td>
                                                                                <td width="8%" class="text-center actionTd">
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
                                                                                <td width="4%"></td>
                                                                                <td colspan="12"> 
                                                                                    <img src="assets/img/enter-arrow-red.svg" alt=""/>
                                                                                    <span class="ml-2">Substitution for Buxus microphla Peergold (Golden Dream Boxwood): 645-1G</span>
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                    </tr>
                                                                    <tr class="tblBgGrey">
                                                                        <table class="table table-striped table-no-border" width="100%">
                                                                            <tr class="topTitleRow">
                                                                                <td>2</td>
                                                                                <td  colspan="11">Diervilla x Kodiak® Orange ('G2X88544') - Kodiak® Orange Honeysuckle</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td width="4%"></td>
                                                                                <td width="20%">
                                                                                    <select class="form-control plantNameSel">
                                                                                        <option>43-TF-30-1G</option>
                                                                                        <option>Option 1</option>
                                                                                        <option>Option 2</option>
                                                                                    </select>
                                                                                </td>
                                                                                <td width="10%" class="text-center">150CM 15 gal</td>
                                                                                <td width="10%" class="text-center">19/05/2020</td>
                                                                                <td width="6%" class="text-center">
                                                                                    <input type="text" class="form-control w-60 text-right" placeholder="" value="2.0"/>
                                                                                </td>
                                                                                <td width="8%" class="text-center">
                                                                                    <select class="form-control w-80">
                                                                                        <option>Sales</option>
                                                                                        <option>Option 1</option>
                                                                                        <option>Option 2</option>
                                                                                    </select>
                                                                                </td>
                                                                                <td width="6%" class="text-center">
                                                                                    <input type="text" class="form-control w-60 text-right" placeholder="" value="10"/>
                                                                                </td>
                                                                                <td width="6%" class="text-center">0.75</td>
                                                                                <td width="7%" class="text-center">9.55</td>
                                                                                <td width="7%" class="text-center">
                                                                                    <input type="text" class="form-control w-60 text-right mx-auto text-green" placeholder="" value="8.25"/>
                                                                                    <div class="">
                                                                                        <span class="mr-2">Disc</span>
                                                                                        <span>8.25</span>
                                                                                    </div>
                                                                                </td>
                                                                                <td width="8%" class="text-center">
                                                                                    <span class="text-green controlLabel text-right">90.00</span>
                                                                                    <div class="">
                                                                                        <span class="mr-2">Disc</span>
                                                                                        <span>8.25</span>
                                                                                    </div>
                                                                                </td>
                                                                                <td width="8%" class="text-center actionTd">
                                                                                    <div class="d-flex justify-content-center">
                                                                                        <a href="#" class="">
                                                                                            <img src="assets/img/copy-ic-green.svg" alt=""/>
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
                                                                    <tr class="tblBgWhite">
                                                                        <table class="table table-striped table-no-border" width="100%">
                                                                            <tr class="topTitleRow">
                                                                                <td>3</td>
                                                                                <td  colspan="11">Diervilla x Kodiak® Orange ('G2X88544') - Kodiak® Orange Honeysuckle</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td width="4%"></td>
                                                                                <td width="20%">
                                                                                    <select class="form-contro plantNameSel">
                                                                                        <option>43-TF-30-1G</option>
                                                                                        <option>Option 1</option>
                                                                                        <option>Option 2</option>
                                                                                    </select>
                                                                                </td>
                                                                                <td width="10%" class="text-center">150CM 15 gal</td>
                                                                                <td width="10%" class="text-center">19/05/2020</td>
                                                                                <td width="6%" class="text-center">
                                                                                    <input type="text" class="form-control w-60 text-right" placeholder="" value="2.0"/>
                                                                                </td>
                                                                                <td width="8%" class="text-center">
                                                                                    <select class="form-control w-80">
                                                                                        <option>Sales</option>
                                                                                        <option>Option 1</option>
                                                                                        <option>Option 2</option>
                                                                                    </select>
                                                                                </td>
                                                                                <td width="6%" class="text-center">
                                                                                    <input type="text" class="form-control w-60 text-right" placeholder="" value="10"/>
                                                                                </td>
                                                                                <td width="6%" class="text-center">0.75</td>
                                                                                <td width="7%" class="text-center">9.55</td>
                                                                                <td width="7%" class="text-center">
                                                                                    <input type="text" class="form-control w-60 text-right mx-auto text-green" placeholder="" value="8.25"/>
                                                                                    <div class="">
                                                                                        <span class="mr-2">Disc</span>
                                                                                        <span>8.25</span>
                                                                                    </div>
                                                                                </td>
                                                                                <td width="8%" class="text-center">
                                                                                    <span class="text-green controlLabel text-right">90.00</span>
                                                                                    <div class="">
                                                                                        <span class="mr-2">Disc</span>
                                                                                        <span>8.25</span>
                                                                                    </div>
                                                                                </td>
                                                                                <td width="8%" class="text-center actionTd">
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
                                                                        <table class="table table-striped table-no-border" width="100%">
                                                                            <tr class="topTitleRow">
                                                                                <td>4</td>
                                                                                <td  colspan="11">Diervilla x Kodiak® Orange ('G2X88544') - Kodiak® Orange Honeysuckle</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td width="4%"></td>
                                                                                <td width="20%">
                                                                                    <select class="form-control  plantNameSel">
                                                                                        <option>43-TF-30-1G</option>
                                                                                        <option>Option 1</option>
                                                                                        <option>Option 2</option>
                                                                                    </select>
                                                                                </td>
                                                                                <td width="10%" class="text-center">150CM 15 gal</td>
                                                                                <td width="10%" class="text-center">19/05/2020</td>
                                                                                <td width="6%" class="text-center">
                                                                                    <input type="text" class="form-control w-60 text-right" placeholder="" value="2.0"/>
                                                                                </td>
                                                                                <td width="8%" class="text-center">
                                                                                    <select class="form-control w-80">
                                                                                        <option>Sales</option>
                                                                                        <option>Option 1</option>
                                                                                        <option>Option 2</option>
                                                                                    </select>
                                                                                </td>
                                                                                <td width="6%" class="text-center">
                                                                                    <input type="text" class="form-control w-60 text-right" placeholder="" value="10"/>
                                                                                </td>
                                                                                <td width="6%" class="text-center">0.75</td>
                                                                                <td width="7%" class="text-center">9.55</td>
                                                                                <td width="7%" class="text-center">
                                                                                    <input type="text" class="form-control w-60 text-right mx-auto text-green" placeholder="" value="8.25"/>
                                                                                    <div class="">
                                                                                        <span class="mr-2">Disc</span>
                                                                                        <span>8.25</span>
                                                                                    </div>
                                                                                </td>
                                                                                <td width="8%" class="text-center">
                                                                                    <span class="text-green controlLabel text-right">90.00</span>
                                                                                    <div class="">
                                                                                        <span class="mr-2">Disc</span>
                                                                                        <span>8.25</span>
                                                                                    </div>
                                                                                </td>
                                                                                <td width="8%" class="text-center actionTd">
                                                                                    <div class="d-flex justify-content-center">
                                                                                        <a href="#" class="">
                                                                                            <img src="assets/img/copy-ic-green.svg" alt=""/>
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
                                                        {/* <tr>
                                                            <td colspan="12" class="p-0">
                                                                <table class="table table-striped mb-0" width="100%">
                                                                    <tr class="movePanel">
                                                                        <td colspan="12">
                                                                            <div class="row">
                                                                                <div class="col-md-8">
                                                                                    <a href="" class="mr-3">
                                                                                        <i class="fas fa-expand-arrows-alt text-dark"></i>
                                                                                    </a>
                                                                                    <strong>West Wing Front Gardens</strong>
                                                                                </div>
                                                                                <div class="col-md-4 text-right">
                                                                                    <a href="#" class="">
                                                                                        <img src="assets/img/close-ic-grey.svg" alt=""/>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr class="tblBgWhite">
                                                                        <table class="table table-striped table-no-border" width="100%">
                                                                            <tr class="topTitleRow">
                                                                                <td>1</td>
                                                                                <td  colspan="11">Diervilla x Kodiak® Orange ('G2X88544') - Kodiak® Orange Honeysuckle</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td></td>
                                                                                <td>
                                                                                    <select class="form-control plantNameSel">
                                                                                        <option>43-TF-30-1G</option>
                                                                                        <option>Option 1</option>
                                                                                        <option>Option 2</option>
                                                                                    </select>
                                                                                </td>
                                                                                <td class="text-center">150CM 15 gal</td>
                                                                                <td class="text-center">19/05/2020</td>
                                                                                <td class="text-center">
                                                                                    <input type="text" class="form-control w-60 text-right" placeholder="" value="2.0"/>
                                                                                </td>
                                                                                <td class="text-center">
                                                                                    <select class="form-control w-80">
                                                                                        <option>Sales</option>
                                                                                        <option>Option 1</option>
                                                                                        <option>Option 2</option>
                                                                                    </select>
                                                                                </td>
                                                                                <td class="text-center">
                                                                                    <input type="text" class="form-control w-60 text-right" placeholder="" value="10"/>
                                                                                </td>
                                                                                <td class="text-center">0.75</td>
                                                                                <td class="text-center">9.55</td>
                                                                                <td class="text-center">
                                                                                    <input type="text" class="form-control w-60 text-right mx-auto" placeholder="" value="8.25"/>
                                                                                    <div class="">
                                                                                        <span class="mr-2">Disc</span>
                                                                                        <span>8.25</span>
                                                                                    </div>
                                                                                </td>
                                                                                <td class="text-center">
                                                                                    <span class="text-success controlLabel text-right">90</span>
                                                                                    <div class="">
                                                                                        <span class="mr-2">Disc</span>
                                                                                        <span>8.25</span>
                                                                                    </div>
                                                                                </td>
                                                                                <td class="text-center actionTd">
                                                                                    <a href="#" class="">
                                                                                        <img src="assets/img/copy-ic-blue.svg" alt=""/>
                                                                                    </a>
                                                                                    <a href="#" class="px-2 py-2 ml-2">
                                                                                        <i class="fas fa-ellipsis-v"></i>
                                                                                    </a>
                                                                                </td>
                                                                            </tr>
                                                                            <tr class="trBgWhite descLbl">
                                                                                <td></td>
                                                                                <td colspan="12">
                                                                                    <img src="assets/img/enter-arrow-red.svg" alt=""/>
                                                                                    <span class="ml-2">Substitution for Buxus microphla Peergold (Golden Dream Boxwood): 645-1G</span>
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                    </tr>
                                                                    <tr class="tblBgGrey">
                                                                        <table class="table table-striped table-no-border" width="100%">
                                                                            <tr class="topTitleRow">
                                                                                <td>2</td>
                                                                                <td  colspan="11">Diervilla x Kodiak® Orange ('G2X88544') - Kodiak® Orange Honeysuckle</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td></td>
                                                                                <td>
                                                                                    <select class="form-control plantNameSel">
                                                                                        <option>43-TF-30-1G</option>
                                                                                        <option>Option 1</option>
                                                                                        <option>Option 2</option>
                                                                                    </select>
                                                                                </td>
                                                                                <td class="text-center">150CM 15 gal</td>
                                                                                <td class="text-center">19/05/2020</td>
                                                                                <td class="text-center">
                                                                                    <input type="text" class="form-control w-60 text-right" placeholder="" value="2.0"/>
                                                                                </td>
                                                                                <td class="text-center">
                                                                                    <select class="form-control w-80">
                                                                                        <option>Sales</option>
                                                                                        <option>Option 1</option>
                                                                                        <option>Option 2</option>
                                                                                    </select>
                                                                                </td>
                                                                                <td class="text-center">
                                                                                    <input type="text" class="form-control w-60 text-right" placeholder="" value="10"/>
                                                                                </td>
                                                                                <td class="text-center">0.75</td>
                                                                                <td class="text-center">9.55</td>
                                                                                <td class="text-center">
                                                                                    <input type="text" class="form-control w-60 text-right mx-auto" placeholder="" value="8.25"/>
                                                                                    <div class="">
                                                                                        <span class="mr-2">Disc</span>
                                                                                        <span>8.25</span>
                                                                                    </div>
                                                                                </td>
                                                                                <td class="text-center">
                                                                                    <span class="text-success controlLabel text-right">90</span>
                                                                                    <div class="">
                                                                                        <span class="mr-2">Disc</span>
                                                                                        <span>8.25</span>
                                                                                    </div>
                                                                                </td>
                                                                                <td class="text-center actionTd">
                                                                                    <a href="#" class="">
                                                                                        <img src="assets/img/copy-ic-green.svg" alt=""/>
                                                                                    </a>
                                                                                    <a href="#" class="px-2 py-2 ml-2">
                                                                                        <i class="fas fa-ellipsis-v"></i>
                                                                                    </a>
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                    </tr>
                                                                    <tr class="tblBgWhite">
                                                                        <table class="table table-striped table-no-border" width="100%">
                                                                            <tr class="topTitleRow">
                                                                                <td>3</td>
                                                                                <td  colspan="11">Diervilla x Kodiak® Orange ('G2X88544') - Kodiak® Orange Honeysuckle</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td></td>
                                                                                <td>
                                                                                    <select class="form-control plantNameSel">
                                                                                        <option>43-TF-30-1G</option>
                                                                                        <option>Option 1</option>
                                                                                        <option>Option 2</option>
                                                                                    </select>
                                                                                </td>
                                                                                <td class="text-center">150CM 15 gal</td>
                                                                                <td class="text-center">19/05/2020</td>
                                                                                <td class="text-center">
                                                                                    <input type="text" class="form-control w-60 text-right" placeholder="" value="2.0"/>
                                                                                </td>
                                                                                <td class="text-center">
                                                                                    <select class="form-control w-80">
                                                                                        <option>Sales</option>
                                                                                        <option>Option 1</option>
                                                                                        <option>Option 2</option>
                                                                                    </select>
                                                                                </td>
                                                                                <td class="text-center">
                                                                                    <input type="text" class="form-control w-60 text-right" placeholder="" value="10"/>
                                                                                </td>
                                                                                <td class="text-center">0.75</td>
                                                                                <td class="text-center">9.55</td>
                                                                                <td class="text-center">
                                                                                    <input type="text" class="form-control w-60 text-right mx-auto" placeholder="" value="8.25"/>
                                                                                    <div class="">
                                                                                        <span class="mr-2">Disc</span>
                                                                                        <span>8.25</span>
                                                                                    </div>
                                                                                </td>
                                                                                <td class="text-center">
                                                                                    <span class="text-success controlLabel text-right">90</span>
                                                                                    <div class="">
                                                                                        <span class="mr-2">Disc</span>
                                                                                        <span>8.25</span>
                                                                                    </div>
                                                                                </td>
                                                                                <td class="text-center actionTd">
                                                                                    <a href="#" class="">
                                                                                        <img src="assets/img/copy-ic-blue.svg" alt=""/>
                                                                                    </a>
                                                                                    <a href="#" class="px-2 py-2 ml-2">
                                                                                        <i class="fas fa-ellipsis-v"></i>
                                                                                    </a>
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                    </tr>
                                                                    <tr class="tblBgGrey">
                                                                        <table class="table table-striped table-no-border" width="100%">
                                                                            <tr class="topTitleRow">
                                                                                <td>4</td>
                                                                                <td  colspan="11">Diervilla x Kodiak® Orange ('G2X88544') - Kodiak® Orange Honeysuckle</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td></td>
                                                                                <td>
                                                                                    <select class="form-control plantNameSel">
                                                                                        <option>43-TF-30-1G</option>
                                                                                        <option>Option 1</option>
                                                                                        <option>Option 2</option>
                                                                                    </select>
                                                                                </td>
                                                                                <td class="text-center">150CM 15 gal</td>
                                                                                <td class="text-center">19/05/2020</td>
                                                                                <td class="text-center">
                                                                                    <input type="text" class="form-control w-60 text-right" placeholder="" value="2.0"/>
                                                                                </td>
                                                                                <td class="text-center">
                                                                                    <select class="form-control w-80">
                                                                                        <option>Sales</option>
                                                                                        <option>Option 1</option>
                                                                                        <option>Option 2</option>
                                                                                    </select>
                                                                                </td>
                                                                                <td class="text-center">
                                                                                    <input type="text" class="form-control w-60 text-right" placeholder="" value="10"/>
                                                                                </td>
                                                                                <td class="text-center">0.75</td>
                                                                                <td class="text-center">9.55</td>
                                                                                <td class="text-center">
                                                                                    <input type="text" class="form-control w-60 text-right mx-auto" placeholder="" value="8.25"/>
                                                                                    <div class="">
                                                                                        <span class="mr-2">Disc</span>
                                                                                        <span>8.25</span>
                                                                                    </div>
                                                                                </td>
                                                                                <td class="text-center">
                                                                                    <span class="text-success controlLabel text-right">90</span>
                                                                                    <div class="">
                                                                                        <span class="mr-2">Disc</span>
                                                                                        <span>8.25</span>
                                                                                    </div>
                                                                                </td>
                                                                                <td class="text-center actionTd">
                                                                                    <a href="#" class="">
                                                                                        <img src="assets/img/copy-ic-green.svg" alt=""/>
                                                                                    </a>
                                                                                    <a href="#" class="px-2 py-2 ml-2">
                                                                                        <i class="fas fa-ellipsis-v"></i>
                                                                                    </a>
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr> */}
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
                                                            <label >Subtotal <span>$</span></label>
                                                        </div>
                                                        <div class="col-md-2 text-right">
                                                            <label >554.30</label>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-8 text-right">
                                                            <label >Discounts <span>$</span></label>
                                                        </div>
                                                        <div class="col-md-2 text-right">
                                                            <label >-9.80</label>
                                                        </div>
                                                    </div>
                                                    <div class="row text-green subTotLbl">
                                                        <div class="col-md-8 text-right">
                                                            <label >Subtotal after Discounts <span>$</span></label>
                                                        </div>
                                                        <div class="col-md-2 text-right">
                                                            <label >544.50</label>
                                                        </div>
                                                    </div>
                                                    <div class="row mb-2">
                                                        <div class="col-md-8 d-flex justify-content-end">
                                                            <label class="mb-0 d-flex align-items-center">Adjustments  <input type="text" class="form-control mx-2 wid240" placeholder="Add Notes"/> <span>$</span></label>
                                                        </div>
                                                        <div class="col-md-2 text-right">
                                                            <input type="text" class="form-control mx-2 text-right" placeholder="" value="0.00"/>
                                                        </div>
                                                    </div>
                                                    <div class="row mb-2">
                                                        <div class="col-md-8 d-flex justify-content-end">
                                                            <label class="mb-0 d-flex align-items-center">Shipping  <input type="text" class="form-control mx-2 wid240" placeholder="Add Notes"/> <span>$</span></label>
                                                        </div>
                                                        <div class="col-md-2 text-right">
                                                            <input type="text" class="form-control mx-2 text-right" placeholder="" value="0.00"/>
                                                        </div>
                                                    </div>
                                                    <div class="row subTotLbl">
                                                        <div class="col-md-8 text-right">
                                                            <label class="text-uppercase">Order Total (CAD) W/O taxes <span>$</span></label>
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
                                <h2>Internal Notes <span class="f-s-14">(Not shown to customer)</span></h2>
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
