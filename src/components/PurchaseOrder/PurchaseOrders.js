import React, { useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import DatePicker from 'react-date-picker';

export default function PurchaseOrders() {
    const [value, onChange] = useState(new Date());
    return (
        <div>
            <div class="contentHeader bg-white d-md-flex justify-content-between align-items-center">
				<h1 class="page-header mb-0"><img src="assets/img/PurchaseOrders-ic-lg-green.svg" alt=""/> Purchase Orders</h1>
				<div class="topbarCtrls mt-3 mt-md-0">
                    <a href="#" class="btn ml-2">
                        <span class="d-flex align-items-center text-left">
                            <img src="assets/img/PurchaseOrders-sm.svg" alt=""/>
                            <span class="ml-2"><b>New P.O.</b></span>
                        </span>
                    </a>
				</div>
			</div>
            <div class="px-md-3 mt-3">
            <div class="bg-white px-3 py-3 my-3 cardShadow">
                <div class="row align-items-center">
                    <div class="col-md-12 col-lg-6 d-md-flex justify-content-between editCustSec">
                        <div>
                            <label>Open P.O.'s</label>
                            <h1>64</h1>
                            <div><a href="">View All</a></div>
                        </div>
                    </div>
                </div>
            </div>
                <div class="bg-white px-3 py-3 mt-2">
                    <form>
                        <h2>Select Purchase Order</h2>
                        <hr/>
                        <div class="row mt-3 align-items-center">
                            <div class="col-md-12">
                                <div class="row form-group">
                                    <div class="col-md-5 col-lg-5">
                                        <label>Status Levels</label>
                                        <div class="d-flex flex-wrap mt-2">
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="customCheck1" />
                                                <label class="custom-control-label" for="customCheck1">Open</label>
                                            </div>
                                            <div class="custom-control custom-checkbox ml-3">
                                                <input type="checkbox" class="custom-control-input" id="customCheck2" />
                                                <label class="custom-control-label" for="customCheck2">Draft</label>
                                            </div>
                                            <div class="custom-control custom-checkbox ml-3">
                                                <input type="checkbox" class="custom-control-input" id="customCheck3" />
                                                <label class="custom-control-label" for="customCheck3">Closed</label>
                                            </div>
                                            <div class="custom-control custom-checkbox ml-0 ml-md-3 mt-2 mt-md-0">
                                                <input type="checkbox" class="custom-control-input" id="customCheck4" />
                                                <label class="custom-control-label" for="customCheck4">Cancelled</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-7 col-lg-7">
                                        <label>Date Range</label>
                                        <div class="d-flex flex-wrap align-items-center">
                                            <div class="custom-control custom-radio">
                                                <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input" />
                                                <label class="custom-control-label" for="customRadio1">Last 7 Days</label>
                                            </div>
                                            <div class="custom-control custom-radio ml-3">
                                                <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input" />
                                                <label class="custom-control-label" for="customRadio2">Last 30 Days</label>
                                            </div>
                                            <div class="ml-3">
                                                <DatePicker onChange={onChange} value={value} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row form-group">
                                    <div class="col-md-4 col-lg-4">
                                        <label>Supplier</label>
                                        <div class="searchInput">
                                            <button type="submit" class="btn btn-search">
                                                <img src="assets/img/search.svg" alt=""/>
                                            </button>
                                            <input type="text" class="form-control" placeholder="Search Supplier Name/Number"/>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-lg-4 ">
                                        <label>Job Description</label>
                                        <div class="searchInput">
                                            <button type="submit" class="btn btn-search">
                                                <img src="assets/img/search.svg" alt=""/>
                                            </button>
                                            <input type="text" class="form-control" placeholder="Search Job Description"/>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-lg-4 ">
                                        <label>Order#</label>
                                        <div class="searchInput">
                                            <button type="submit" class="btn btn-search">
                                                <img src="assets/img/search.svg" alt=""/>
                                            </button>
                                            <input type="text" class="form-control" placeholder="Search Order"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="row form-group mb-2">
                                    <div class="col-md-4 col-lg-4">
                                        <label>Search Plants or Products</label>
                                        <div class="searchInput">
                                            <button type="submit" class="btn btn-search">
                                                <img src="assets/img/search.svg" alt=""/>
                                            </button>
                                            <input type="text" class="form-control" placeholder="Search Plants or Products"/>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-lg-4 ">
                                        <label>SKU</label>
                                        <div class="searchInput">
                                            <button type="submit" class="btn btn-search">
                                                <img src="assets/img/search.svg" alt=""/>
                                            </button>
                                            <input type="text" class="form-control" placeholder="Search Plants or Products"/>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-lg-4 ">
                                        <label>Supplier Order#</label>
                                        <div class="searchInput">
                                            <button type="submit" class="btn btn-search">
                                                <img src="assets/img/search.svg" alt=""/>
                                            </button>
                                            <input type="text" class="form-control" placeholder="Search SKU"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="row form-group">
                                    <div class="col-md-12 col-lg-12 text-right">
                                        <a href="javascript:;">Reset</a>
                                    </div>
                                </div>

                                <div class="form-group row mt-3">
                                    <div class="col-md-12 col-lg-12">
                                        <ul class="list-unstyled searchAlpha d-flex flex-wrap mb-0">
                                            <li><a href="#" class="active">All</a></li>
                                            <li><a href="#">A</a></li>
                                            <li><a href="#">B</a></li>
                                            <li><a href="#">C</a></li>
                                            <li><a href="#">D</a></li>
                                            <li><a href="#">E</a></li>
                                            <li><a href="#">F</a></li>
                                            <li><a href="#">G</a></li>
                                            <li><a href="#">H</a></li>
                                            <li><a href="#">I</a></li>
                                            <li><a href="#">J</a></li>
                                            <li><a href="#">K</a></li>
                                            <li><a href="#">L</a></li>
                                            <li><a href="#">M</a></li>
                                            <li><a href="#">N</a></li>
                                            <li><a href="#">O</a></li>
                                            <li><a href="#">P</a></li>
                                            <li><a href="#">Q</a></li>
                                            <li><a href="#">R</a></li>
                                            <li><a href="#">S</a></li>
                                            <li><a href="#">T</a></li>
                                            <li><a href="#">U</a></li>
                                            <li><a href="#">V</a></li>
                                            <li><a href="#">W</a></li>
                                            <li><a href="#">X</a></li>
                                            <li><a href="#">Y</a></li>
                                            <li><a href="#">Z</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="col-md-12 table-responsive">
                                        <table id="plantDetails" class="table table-striped w-100">
                                            <thead>
                                                <tr>
                                                    <th class="text-nowrap">Status</th>
                                                    <th class="text-nowrap">PO#</th>
                                                    <th class="text-nowrap">Supplier Name</th>
                                                    <th class="text-nowrap">Supplier Order</th>
                                                    <th class="text-nowrap">Created By</th>
                                                    <th class="text-nowrap">Order Date</th>
                                                    <th class="text-nowrap">Expected Date</th>
                                                    <th class="text-nowrap">Dispatch</th>
                                                    <th class="text-nowrap">Amount</th>
                                                    <th class="text-nowrap text-center">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><span class='stsBadge stsClosed'>Closed</span></td>
                                                    <td><a href="">JSMITH-0023555-02</a></td>
                                                    <td>John Smith landscaping</td>
                                                    <td>1024275</td>
                                                    <td>John Smith</td>
                                                    <td>20/05/12021</td>
                                                    <td>20/05/12021</td>
                                                    <td>Pickup</td>
                                                    <td> 6,085.00</td>
                                                    <td class="text-center">
                                                        <span>
                                                            <a href="javascript:;">
                                                                <img src="assets/img/edit.svg" alt=""/>
                                                            </a>
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><span class='stsBadge stsClosed'>Closed</span></td>
                                                    <td><a href="">JSMITH-0023555-02</a></td>
                                                    <td>Windham Gardens</td>
                                                    <td>1024275</td>
                                                    <td>Brendan Weirs</td>
                                                    <td>20/05/12021</td>
                                                    <td>20/05/12021</td>
                                                    <td>Delivery</td>
                                                    <td>8,085.00</td>
                                                    <td class="text-center">
                                                        <span>
                                                            <a href="javascript:;">
                                                                <img src="assets/img/edit.svg" alt=""/>
                                                            </a>
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><span class='stsBadge stsDraft'>Draft</span></td>
                                                    <td><a href="">JSMITH-0023555-02</a></td>
                                                    <td>John Smith landscaping</td>
                                                    <td>1024275</td>
                                                    <td>John Smith</td>
                                                    <td>20/05/12021</td>
                                                    <td>20/05/12021</td>
                                                    <td>Pickup</td>
                                                    <td> 6,085.00</td>
                                                    <td class="text-center">
                                                        <span>
                                                            <a href="javascript:;">
                                                                <img src="assets/img/edit.svg" alt=""/>
                                                            </a>
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><span class='stsBadge stsOpen'>Closed</span></td>
                                                    <td><a href="">JSMITH-0023555-02</a></td>
                                                    <td>John Smith landscaping</td>
                                                    <td>1024275</td>
                                                    <td>John Smith</td>
                                                    <td>20/05/12021</td>
                                                    <td>20/05/12021</td>
                                                    <td>Pickup</td>
                                                    <td> 6,085.00</td>
                                                    <td class="text-center">
                                                        <span>
                                                            <a href="javascript:;">
                                                                <img src="assets/img/edit.svg" alt=""/>
                                                            </a>
                                                        </span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
