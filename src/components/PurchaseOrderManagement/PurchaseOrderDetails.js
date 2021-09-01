import React, { useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import DatePicker from 'react-date-picker';
import OrderDetails from './newPo'
import {connect} from "react-redux";
import CurrentPo from "./currentPO"
import AddToOrder from "./addToOrder"


 const PurchaseOrderDetails =(props)=> {
    const [value, onChange] = useState(new Date());
    return (
        <div>
            <div class="contentHeader bg-white d-md-flex justify-content-between align-items-center">
				<h1 class="page-header mb-0 d-flex flex-wrap align-items-center">
                    <img src="assets/img/PurchaseOrders-ic-lg-green.svg" alt="" class="mr-2"/>{props.pageToOpen ==="add"?"Add":"Edit"} Purchase Orders
                    {props.pageToOpen !=="add"?<span class="text-green ml-3">#JSMITH-2000132</span>:""}</h1>
				{props.pageToOpen !=="add"?<div class="topbarCtrls mt-3 mt-md-0">
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
                </div>:""}
			</div>
          

            <div class="px-md-3 mt-3">
                <div class="px-3 py-3 mb-3 bg-white cardShadow">
                    <div class="row align-items-center editPurchaseHead">
                        <div class="col-md-6 d-flex align-items-center">
                            <h2 class="mb-0">Draft</h2>
                            <div class="d-flex align-items-center ml-3 mb-0 bdrLeft">
                                <div class="d-flex align-items-center ml-3">
                                    <img src="assets/img/date-ic-sm-green.svg" alt=""/>
                                    <span class="ml-2">{`${new Date().toLocaleString('default', { month: 'long' })} ${new Date().getDate()}, ${new Date().getFullYear()}`}</span>
                                    
                                </div>
                                <div class="ml-5 d-flex align-items-center">
                                    <img src="assets/img/price-ic-sm-green.svg" alt=""/>
                                    <span class="ml-2">CA <b class="f-s-22 lh22">$0.00</b></span>
                                </div>
                            </div>
                        </div>
                        {props.pageToOpen !=="add"? <div class="col-md-6 d-flex justify-content-md-end">
                            <a href="" class="mx-2"><img src="assets/img/copy-ic.svg" alt=""/></a>
                            <a href="" class="mx-2"><img src="assets/img/trash-ic.svg" alt=""/></a>
                        </div>:""}
                    </div>
                </div>

                <div class="">
                <Tabs>
                    <TabList>
                        <Tab>Order Details</Tab>
                        <Tab>Add to Order</Tab>
                        <Tab>Current P.O
                             {/* <span class="badge badge-pill badge-success">25</span> */}
                             </Tab>
                        <Tab>Order History</Tab>
                        <Tab>Notes</Tab>    
                    </TabList>
                    <TabPanel>
                        <OrderDetails/>
                    </TabPanel>
                    <TabPanel>
                        <AddToOrder/>
                    </TabPanel>
                    <TabPanel>
                     <CurrentPo/>
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
const mapStateToProps = (state)=> ({ 
    selectedSupplier:state.purchaseOrderManagementData.selectedSupplier,
    pageToOpen:state.purchaseOrderManagementData.pageToOpen
    

})
export default connect(mapStateToProps,{






})(PurchaseOrderDetails)