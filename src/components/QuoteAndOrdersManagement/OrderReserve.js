import React, { useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default function OrderReserve() {
    return (
        <div>
            <div class="contentHeader bg-white d-md-flex justify-content-between align-items-center">
				<h1 class="page-header mb-0"><img src="assets/img/customerQuotesAndOrders-lg-green.svg" alt="" class="mr-2"/> Order Status - Reserve <span class="text-blue ml-3">#00234-2000133</span></h1>
				<div class="topbarCtrls mt-3 mt-md-0">
                    <a href="#" class="btn ml-2">
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
                    <a href="#" class="btn ml-2 ">
                        <span class="d-flex align-items-center text-left">
                            <img src="assets/img/print-ic-btn.svg" alt=""/>
                            <span class="ml-2"><b>Print</b></span>
                        </span>
                    </a>
				</div>
			</div>
            <div class="px-md-3 mt-3">
                <div class="px-3 py-3 mb-3 bg-white cardShadow">
                    <div class="row align-items-center purchaseOrderTabHead">
                        <div class="col-md-6 d-flex align-items-center">
                            <h2 class="mb-0 tabStsTag tabstsTagReserve">RESERVE</h2>
                            <div class="d-flex text-nowrap ml-3 mb-0 bdrLeft">
                                <div class="mr-3">
                                    <h5>Elapsed Time</h5>
                                    <label>12 Days Remain</label>
                                </div>
                                <div class="mr-3 bdrLeft">
                                    <h5>Reserved By</h5>
                                    <label>J. Wanders</label>
                                </div>
                                <div class="mr-3 bdrLeft">
                                    <h5>Ready By</h5>
                                    <label>E. Vandenbrink</label>
                                </div>
                                <div class="mr-3 bdrLeft text-center">
                                    <h5>Reserved</h5>
                                    <h4 class="text-indigo f-s-20">6</h4>
                                </div>
                                <div class="mr-3 bdrLeft">
                                    <h5>Picking with</h5>
                                    <div>
                                        <select class="form-control w-240">
                                            <option>John Smith</option>
                                            <option>Option 1</option>
                                            <option>Option 2</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 d-flex justify-content-md-end  align-items-center">
                            <a href="" class="ml-4 mr-4"><img src="assets/img/reserve-ic-purple.svg" alt=""/></a>
                            <a href="" class="ml-2"><img src="assets/img/copy-ic.svg" alt=""/></a>
                            <a href="" class="ml-2"><img src="assets/img/shipping-ic-green.svg" alt=""/></a>
                        </div>
                    </div>
                </div>
                <Tabs>
                    <TabList>
                        <Tab>Order Details</Tab>
                        <Tab>Add to Order</Tab>
                        <Tab>Current Order <span class="badge badge-pill badge-success">2</span></Tab>
                        <Tab>Order History</Tab>
                        <Tab>Notes</Tab>
                    </TabList>
                    <TabPanel>
                        <div class="bg-white px-3 py-3 mt-3">
                            <form>
                               
                            </form>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div class="bg-white px-3 py-3 mt-3">
                            <form>
                               
                            </form>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div class="bg-white px-3 py-3 mt-3">
                            <form>
                                <div class="table-responsive">
                                    <table class="table table-striped purchaseOdrTbl" width="100%">
                                        <thead>
                                            <tr>
                                                <th width="5%" class="">No</th>
                                                <th width="25%" class="">Plant Name/Original SKU</th>
                                                <th width="10%" class="text-center">Size</th>
                                                <th width="15%" class="text-center productionBg">Picked Locations</th>
                                                <th width="15%" class="text-center productionBg">Total</th>
                                                <th width="10%" class="">Each price</th>
                                                <th width="10%" class="">Total</th>
                                                <th width="10%" class="text-center">Check</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td colspan="12" class="p-0">
                                                    <table class="table table-striped mb-0" width="100%">
                                                        <tr class="movePanel">
                                                            <td colspan="8">
                                                                <div class="">
                                                                    <div class="col-md-6">
                                                                        <strong>West Wing Front Gardens</strong>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        {/* Main Content Row starts here */}
                                                        <tr class="tblBgWhite">
                                                            <table class="table table-striped table-no-border mb-0" width="100%">
                                                                <tr class="topTitleRow">
                                                                    <td class="pt-2">1</td>
                                                                    <td  colspan="6">
                                                                        <label>Diervilla x Kodiak® Orange ('G2X88544') - Kodiak® Orange Honeysuckle</label>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td width="5%"></td>
                                                                    <td width="25%">
                                                                        <select class="form-control w-240">
                                                                            <option>393-30-1G</option>
                                                                            <option>Option 1</option>
                                                                            <option>Option 2</option>
                                                                        </select>
                                                                    </td>
                                                                    <td width="10%" class="text-center">3cm 1 gal</td>
                                                                    <td width="15%">
                                                                        <select class="form-control w-240">
                                                                            <option>FARM A</option>
                                                                            <option>Option 1</option>
                                                                            <option>Option 2</option>
                                                                        </select>
                                                                    </td>
                                                                    <td width="10%" class="text-center">
                                                                        <div class="pickTotal purpleBg justify-content-center">
                                                                            <input type="text" value="3" class="form-control w-60 txtReserveTot"/>
                                                                            <div class="">
                                                                                <span class="mr-2"><i class="fas fa-lock"></i></span>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td class="text-center">
                                                                        <div class="plainText">90.00</div>
                                                                        <div class="">
                                                                            <span class="text-green">8.25</span>
                                                                        </div>
                                                                    </td>
                                                                    <td class="text-center">
                                                                        <div class="plainText">90.00</div>
                                                                        <div class="">
                                                                            <span class="text-green">8.25</span>
                                                                        </div>
                                                                    </td>
                                                                    <td width="10%" class="text-center" colspan="2">
                                                                        <div class="d-flex justify-content-center">
                                                                            <a href="#" class="ml-3">
                                                                                <img src="assets/img/copy-ic-blue.svg" alt=""/>
                                                                            </a>
                                                                            <a href="#" class="ml-3">
                                                                                <img src="assets/img/delete.svg" alt=""/>
                                                                            </a>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </tr>
                                                        <tr class="tblBgGrey">
                                                            <table class="table table-striped table-no-border mb-0" width="100%">
                                                                <tr class="topTitleRow">
                                                                    <td class="pt-2">1</td>
                                                                    <td  colspan="6">
                                                                        <label>Diervilla x Kodiak® Orange ('G2X88544') - Kodiak® Orange Honeysuckle</label>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td width="5%"></td>
                                                                    <td width="25%">
                                                                        <select class="form-control w-240">
                                                                            <option>393-30-1G</option>
                                                                            <option>Option 1</option>
                                                                            <option>Option 2</option>
                                                                        </select>
                                                                    </td>
                                                                    <td width="10%" class="text-center">3cm 1 gal</td>
                                                                    <td width="15%">
                                                                        <select class="form-control w-240">
                                                                            <option>FARM A</option>
                                                                            <option>Option 1</option>
                                                                            <option>Option 2</option>
                                                                        </select>
                                                                    </td>
                                                                    <td width="10%" class="text-center">
                                                                        <div class="pickTotal purpleBg justify-content-center">
                                                                            <input type="text" value="3" class="form-control w-60 txtReserveTot"/>
                                                                            <div class="">
                                                                                <span class="mr-2"><i class="fas fa-lock"></i></span>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td class="text-center">
                                                                        <div class="plainText">90.00</div>
                                                                        <div class="">
                                                                            <span class="text-green">8.25</span>
                                                                        </div>
                                                                    </td>
                                                                    <td class="text-center">
                                                                        <div class="plainText">90.00</div>
                                                                        <div class="">
                                                                            <span class="text-green">8.25</span>
                                                                        </div>
                                                                    </td>
                                                                    <td width="10%" class="text-center" colspan="2">
                                                                        <div class="d-flex justify-content-center">
                                                                            <a href="#" class="ml-3">
                                                                                <img src="assets/img/copy-ic-blue.svg" alt=""/>
                                                                            </a>
                                                                            <a href="#" class="ml-3">
                                                                                <img src="assets/img/delete.svg" alt=""/>
                                                                            </a>
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
                            </form>
                            <div class="form-group row">
                                <div class="col-md-6"></div>
                                <div class="col-md-12 col-lg-6">
                                    <div class="greyBox px-3 py-3 totalSec">
                                        <div class="row">
                                            <div class="col-md-8 text-right">
                                                <label >Subtotal <span>$</span></label>
                                            </div>
                                            <div class="col-md-2 text-right">
                                                <label >175.60</label>
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
                                        <div class="row subTotLbl text-green">
                                            <div class="col-md-8 text-right">
                                                <label class="text-uppercase">Subtotal after Discounts <span>$</span></label>
                                            </div>
                                            <div class="col-md-2 text-right">
                                                <label class="f-s-24">544.50</label>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-8 text-right">
                                                <label >Sales Tax Rate @ 13.0% <span>$</span></label>
                                            </div>
                                            <div class="col-md-2 text-right">
                                                <label >60.00</label>
                                            </div>
                                        </div>
                                        <div class="row subTotLbl">
                                            <div class="col-md-8 text-right">
                                                <label >Order Total <span>$</span></label>
                                            </div>
                                            <div class="col-md-2 text-right">
                                                <label >544.50</label>
                                            </div>
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div class="bg-white px-3 py-3 mt-3">
                           
                        </div>
                    </TabPanel>
                    <TabPanel></TabPanel>
                </Tabs>
            </div>
        </div>
    )
}
