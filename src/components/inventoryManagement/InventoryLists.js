/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import DatePicker from 'react-date-picker';

const  InventoryManagement = (props)=> {  
    const [value, onChange] = useState(new Date());
    return (
        <div>
            <div class="contentHeader bg-white d-md-flex justify-content-between align-items-center">
				<h1 class="page-header mb-0"><img src="assets/img/plant-ic-lg-green.svg" alt=""/> Inventory Management</h1>
				<div class="topbarCtrls mt-3 mt-md-0">
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
                    <a href="#" class="ml-2 mt-3 mt-md-0">
                        <img src="assets/img/csv-export.svg" alt=""/>
                    </a>
                    <a href="#" class="ml-2 mt-3 mt-md-0">
                        <img src="assets/img/csv-download.svg" alt=""/>
                    </a>
                    <a href="#" class="ml-2 mt-3 mt-md-0">
                        <img src="assets/img/pdf-export.svg" alt=""/>
                    </a>
				</div>
			</div>
            <div class="px-md-3 mt-3">
                <Tabs>
                    <TabList>
                        <Tab>Dashboard</Tab>
                        <Tab>Plants</Tab>
                        <Tab>Task List <span class="badge badge-pill badge-success">25</span></Tab>
                        <Tab>Task Queue</Tab>
                        <Tab>Products</Tab>
                    </TabList>
                    <TabPanel></TabPanel>
                    <TabPanel>
                        <div class="bg-white px-3 py-3 mt-3">
                            <form>
                                <h2>Plant inventory</h2>
                                <hr/>
                                <div class="row mt-3">
                                    <div class="col-md-6 col-lg-4">
                                        <label>Location</label>
                                        <select class="form-control">
                                            <option>All</option>
                                            <option>Option 1</option>
                                            <option>Option 2</option>
                                        </select>
                                    </div>
                                    <div class="col-md-6 col-lg-4 mt-2 mt-md-0">
                                        <label>Category</label>
                                        <select class="form-control">
                                            <option>All</option>
                                            <option>Option 1</option>
                                            <option>Option 2</option>
                                        </select>
                                    </div>
                                    <div class="col-md-6 col-lg-4 mt-2 mt-md-0">
                                        <label>Supplier</label>
                                        <select class="form-control">
                                            <option>All</option>
                                            <option>Option 1</option>
                                            <option>Option 2</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="row mt-3 align-items-center">
                                    <div class="col-md-6 col-lg-6">
                                        <label>Plant Search</label>
                                        <div class="searchInput">
                                            <button type="submit" class="btn btn-search">
                                                <img src="assets/img/search.svg" alt=""/>
                                            </button>
                                            <input type="text" class="form-control" placeholder="Search"/>
                                        </div>
                                        <div class="form-group row mt-2">
                                            <div class="col-md-12">
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="radio_default_inline" id="activePlants" value=""/>
                                                    <label class="form-check-label" for="activePlants">Active Plants</label>
                                                </div>
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="radio_default_inline" id="allPlants" value=""/>
                                                    <label class="form-check-label" for="allPlants">All Plants</label>
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
                                            <input type="text" class="form-control" placeholder="Search"/>
                                        </div>
                                        <div class="form-group row mt-2">
                                            <div class="col-md-12">
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="radio_default_inline" id="activeSkus" value=""/>
                                                    <label class="form-check-label" for="activeSkus">Active SKUs</label>
                                                </div>
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="radio_default_inline" id="archievedSkus" value=""/>
                                                    <label class="form-check-label" for="archievedSkus">Archived SKUs</label>
                                                </div>
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="radio_default_inline" id="emptySkus" value=""/>
                                                    <label class="form-check-label" for="emptySkus">Empty SKUs</label>
                                                </div>
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="radio_default_inline" id="allSkus" value=""/>
                                                    <label class="form-check-label" for="allSkus">All SKUs</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-md-6 col-lg-3">
                                        <label>Purchase Order #</label>
                                        <div class="searchInput">
                                            <button type="submit" class="btn btn-search">
                                                <img src="assets/img/search.svg" alt=""/>
                                            </button>
                                            <input type="text" class="form-control" placeholder="Search"/>
                                        </div>
                                        <div class="form-group row mt-2">
                                            <div class="col-md-12">
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="radio_default_inline" id="activePlants" value=""/>
                                                    <label class="form-check-label" for="activePlants">Display Archives</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-lg-3">
                                        <label>Batch ID</label>
                                        <div class="searchInput">
                                            <button type="submit" class="btn btn-search">
                                                <img src="assets/img/search.svg" alt=""/>
                                            </button>
                                            <input type="text" class="form-control" placeholder="Search"/>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-lg-3 pt-md-4 mt-3">
                                      <a href="">Reset</a>
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-md-12 col-lg-12 text-right inventoryBtns d-flex flex-wrap justify-content-end">
                                        <a href="">
                                            <img src="assets/img/quick-transfer.svg" alt=""/> Quick Transfer
                                        </a>
                                        <a href="">
                                            <img src="assets/img/merge-batch.svg" alt=""/> Merge Batch
                                        </a>
                                        <a href="">
                                            <img src="assets/img/quick-move.svg" alt=""/> Quick Move
                                        </a>
                                        <a href="" class="ml-3">
                                            <img src="assets/img/add-move-task.svg" alt=""/> Add Move Task
                                        </a>
                                        <a href="">
                                            <img src="assets/img/add-plant-task.svg" alt=""/> Add Plant Task
                                        </a>
                                        <a href="">
                                            <img src="assets/img/add-dig-task.svg" alt=""/> Add Dig Task
                                        </a>
                                    </div>
                                </div>
                                <div class="row mt-4">
                                    <div class="col-md-12 col-lg-12 sortingCtrls d-flex flex-wrap align-items-center">
                                       <span class="mr-3">Sort</span>
                                        <a href="" class="active">Default</a>
                                        <a href="">Ready Alert</a>
                                        <a href="">Sales</a>
                                        <a href="">Sales NR</a>
                                        <a href="">Production</a>
                                        <a href="">Production NR</a>
                                    </div>
                                </div>
                                <div class="row mt-4">
                                    <div class="col-md-12 col-lg-12">
                                        <div class="table-responsive">
                                            <table class="table table-striped invtTbl" width="100%">
                                                <thead>
                                                    <tr>
                                                        <th rowspan="2" class="text-center">
                                                            <div class="custom-control custom-checkbox">
                                                                <input type="checkbox" class="custom-control-input" id="customCheck1" />
                                                                <label class="custom-control-label" for="customCheck1"></label>
                                                            </div>
                                                        </th>
                                                        <th rowspan="2" class="text-nowrap">SKU</th>
                                                        <th rowspan="2">Supllier</th>
                                                        <th rowspan="2" class="text-nowrap">Batch ID</th>
                                                        <th rowspan="2" class="text-nowrap">Batch Date</th>
                                                        <th rowspan="2">Purchase Order</th>
                                                        <th rowspan="2">Current Location</th>
                                                        <th colspan="2" class="salesBg">Sales</th>
                                                        <th rowspan="2" class="salesBg text-nowrap">Ready Date</th>
                                                        <th colspan="2" class="productionBg">Production</th>
                                                        <th rowspan="2" class="productionBg text-nowrap">Ready Date</th>
                                                        <th rowspan="2" class="text-center">Task</th>
                                                    </tr>
                                                    <tr>
                                                        <th class="salesBg f-s-10">Ready</th>
                                                        <th class="salesBg f-s-10">Not Ready</th>
                                                        <th class="productionBg f-s-10">Ready</th>
                                                        <th class="productionBg f-s-10">Not Ready</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr class="tblLinks">
                                                        <td colspan="5">
                                                            <a href="">Abies alba Green Spiral (Green Spiral Silver Fir)</a>
                                                        </td>
                                                        <td colspan="8">
                                                            <a href="">View Sales Orders</a>
                                                        </td>
                                                        <td>
                                                            <a href=""> New Batch ID</a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="text-center">
                                                            <div class="custom-control custom-checkbox">
                                                                <input type="checkbox" class="custom-control-input" id="customCheck2" />
                                                                <label class="custom-control-label" for="customCheck2"></label>
                                                            </div>
                                                        </td>
                                                        <td class="text-nowrap">
                                                            <a href="">393-20-2G</a>
                                                        </td>
                                                        <td>NVK</td>
                                                        <td class="text-nowrap">393-NVK-20-15</td>
                                                        <td class="text-nowrap">25-05-2019</td>
                                                        <td>-</td>
                                                        <td><a href="">HENDERS &gt; AR-a-A&gt;RW2&gt;BL1</a></td>
                                                        <td>-</td>
                                                        <td><strong>50</strong></td>
                                                        <td class="text-nowrap">25-02-2020</td>
                                                        <td>-</td>
                                                        <td><strong>50</strong></td>
                                                        <td class="text-nowrap">25-02-2020</td>
                                                        <td class="invTblAction">
                                                            <a href="">
                                                                <img src="assets/img/tbl-task-ic.svg" alt=""/>
                                                            </a>
                                                            <a href="">
                                                                <img src="assets/img/tbl-more-ic.svg" alt=""/>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="text-center">
                                                            <div class="custom-control custom-checkbox">
                                                                <input type="checkbox" class="custom-control-input" id="customCheck3" />
                                                                <label class="custom-control-label" for="customCheck3"></label>
                                                            </div>
                                                        </td>
                                                        <td class="text-nowrap">
                                                            <a href="">393-20-2G</a>
                                                        </td>
                                                        <td>NVK</td>
                                                        <td class="text-nowrap">393-NVK-20-15</td>
                                                        <td class="text-nowrap">25-05-2019</td>
                                                        <td>-</td>
                                                        <td><a href="">HENDERS &gt; AR-a-A&gt;RW2&gt;BL1</a></td>
                                                        <td>-</td>
                                                        <td><strong>50</strong></td>
                                                        <td class="text-nowrap">25-02-2020</td>
                                                        <td>-</td>
                                                        <td><strong>50</strong></td>
                                                        <td class="text-nowrap">25-02-2020</td>
                                                        <td class="invTblAction">
                                                            <a href="">
                                                                <img src="assets/img/tbl-task-ic.svg" alt=""/>
                                                            </a>
                                                            <a href="">
                                                                <img src="assets/img/tbl-more-ic.svg" alt=""/>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="text-center">
                                                            <div class="custom-control custom-checkbox">
                                                                <input type="checkbox" class="custom-control-input" id="customCheck4" />
                                                                <label class="custom-control-label" for="customCheck4"></label>
                                                            </div>
                                                        </td>
                                                        <td class="text-nowrap">
                                                            <a href="">393-20-2G</a>
                                                        </td>
                                                        <td>NVK</td>
                                                        <td class="text-nowrap">393-NVK-20-15</td>
                                                        <td class="text-nowrap">25-05-2019</td>
                                                        <td>-</td>
                                                        <td><a href="">HENDERS &gt; AR-a-A&gt;RW2&gt;BL1</a></td>
                                                        <td>-</td>
                                                        <td><strong>50</strong></td>
                                                        <td class="text-nowrap">25-02-2020</td>
                                                        <td>-</td>
                                                        <td><strong>50</strong></td>
                                                        <td class="text-nowrap">25-02-2020</td>
                                                        <td class="invTblAction">
                                                            <a href="">
                                                                <img src="assets/img/tbl-task-ic.svg" alt=""/>
                                                            </a>
                                                            <a href="">
                                                                <img src="assets/img/tbl-more-ic.svg" alt=""/>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="text-center">
                                                            <div class="custom-control custom-checkbox">
                                                                <input type="checkbox" class="custom-control-input" id="customCheck5" />
                                                                <label class="custom-control-label" for="customCheck5"></label>
                                                            </div>
                                                        </td>
                                                        <td class="text-nowrap">
                                                            <a href="">393-20-2G</a>
                                                        </td>
                                                        <td>NVK</td>
                                                        <td class="text-nowrap">393-NVK-20-15</td>
                                                        <td class="text-nowrap">25-05-2019</td>
                                                        <td>-</td>
                                                        <td><a href="">HENDERS &gt; AR-a-A&gt;RW2&gt;BL1</a></td>
                                                        <td>-</td>
                                                        <td><strong>50</strong></td>
                                                        <td class="text-nowrap">25-02-2020</td>
                                                        <td>-</td>
                                                        <td><strong>50</strong></td>
                                                        <td class="text-nowrap">25-02-2020</td>
                                                        <td class="invTblAction">
                                                            <a href="">
                                                                <img src="assets/img/tbl-task-ic.svg" alt=""/>
                                                            </a>
                                                            <a href="">
                                                                <img src="assets/img/tbl-more-ic.svg" alt=""/>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="text-center">
                                                            <div class="custom-control custom-checkbox">
                                                                <input type="checkbox" class="custom-control-input" id="customCheck6" />
                                                                <label class="custom-control-label" for="customCheck6"></label>
                                                            </div>
                                                        </td>
                                                        <td class="text-nowrap">
                                                            <a href="">393-20-2G</a>
                                                        </td>
                                                        <td>NVK</td>
                                                        <td class="text-nowrap">393-NVK-20-15</td>
                                                        <td class="text-nowrap">25-05-2019</td>
                                                        <td>-</td>
                                                        <td><a href="">HENDERS &gt; AR-a-A&gt;RW2&gt;BL1</a></td>
                                                        <td>-</td>
                                                        <td><strong>50</strong></td>
                                                        <td class="text-nowrap">25-02-2020</td>
                                                        <td>-</td>
                                                        <td><strong>50</strong></td>
                                                        <td class="text-nowrap">25-02-2020</td>
                                                        <td class="invTblAction">
                                                            <a href="">
                                                                <img src="assets/img/tbl-task-ic.svg" alt=""/>
                                                            </a>
                                                            <a href="">
                                                                <img src="assets/img/tbl-more-ic.svg" alt=""/>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="text-center">
                                                            <div class="custom-control custom-checkbox">
                                                                <input type="checkbox" class="custom-control-input" id="customCheck7" />
                                                                <label class="custom-control-label" for="customCheck7"></label>
                                                            </div>
                                                        </td>
                                                        <td class="text-nowrap">
                                                            <a href="">393-20-2G</a>
                                                        </td>
                                                        <td>NVK</td>
                                                        <td class="text-nowrap">393-NVK-20-15</td>
                                                        <td class="text-nowrap">25-05-2019</td>
                                                        <td>-</td>
                                                        <td><a href="">HENDERS &gt; AR-a-A&gt;RW2&gt;BL1</a></td>
                                                        <td>-</td>
                                                        <td><strong>50</strong></td>
                                                        <td class="text-nowrap">25-02-2020</td>
                                                        <td>-</td>
                                                        <td><strong>50</strong></td>
                                                        <td class="text-nowrap">25-02-2020</td>
                                                        <td class="invTblAction">
                                                            <a href="">
                                                                <img src="assets/img/tbl-task-ic.svg" alt=""/>
                                                            </a>
                                                            <a href="">
                                                                <img src="assets/img/tbl-more-ic.svg" alt=""/>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="text-center">
                                                            <div class="custom-control custom-checkbox">
                                                                <input type="checkbox" class="custom-control-input" id="customCheck8" />
                                                                <label class="custom-control-label" for="customCheck8"></label>
                                                            </div>
                                                        </td>
                                                        <td class="text-nowrap">
                                                            <a href="">393-20-2G</a>
                                                        </td>
                                                        <td>NVK</td>
                                                        <td class="text-nowrap">393-NVK-20-15</td>
                                                        <td class="text-nowrap">25-05-2019</td>
                                                        <td>-</td>
                                                        <td><a href="">HENDERS &gt; AR-a-A&gt;RW2&gt;BL1</a></td>
                                                        <td>-</td>
                                                        <td><strong>50</strong></td>
                                                        <td class="text-nowrap">25-02-2020</td>
                                                        <td>-</td>
                                                        <td><strong>50</strong></td>
                                                        <td class="text-nowrap">25-02-2020</td>
                                                        <td class="invTblAction">
                                                            <a href="">
                                                                <img src="assets/img/tbl-task-ic.svg" alt=""/>
                                                            </a>
                                                            <a href="">
                                                                <img src="assets/img/tbl-more-ic.svg" alt=""/>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div>
                            <div class="bg-white px-3 py-3 mt-3">
                                <form>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <h3>GENERATED SKU:</h3>
                                        </div>
                                        <div class="col-md-6 d-flex justify-content-end">
                                            <div class=" d-flex align-items-center my-md-2 mt-3 mt-md-0">
                                                Archive
                                                <div class="switcher ml-2">
                                                    <input type="checkbox" name="switcher_checkbox_2" id="switcher_checkbox_2" value="2"/>
                                                    <label for="switcher_checkbox_2"></label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col-md-6 col-lg-3">
                                            <label>Form:</label>
                                            <select class="form-control">
                                                <option>Select</option>
                                                <option>Option 1</option>
                                                <option>Option 2</option>
                                            </select>
                                        </div>
                                        <div class="col-md-6 col-lg-3 mt-2 mt-md-0">
                                            <label>Caliper:</label>
                                            <select class="form-control">
                                                <option>Select</option>
                                                <option>Option 1</option>
                                                <option>Option 2</option>
                                            </select>
                                        </div>
                                        <div class="col-md-6 col-lg-3 mt-2 mt-md-0">
                                            <label>Height:</label>
                                            <select class="form-control">
                                                <option>Select</option>
                                                <option>Option 1</option>
                                                <option>Option 2</option>
                                            </select>
                                        </div>
                                        <div class="col-md-6 col-lg-3 mt-2 mt-md-0">
                                            <label>Packaging: <span class="text-danger">*</span></label>
                                            <select class="form-control">
                                                <option>Select</option>
                                                <option>Option 1</option>
                                                <option>Option 2</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col-md-6 col-lg-3">
                                            <label>Each Cost: <span class="text-danger">*</span></label>
                                            <input type="text" class="form-control text-right" placeholder="" value="$1.25"/>
                                        </div>
                                        <div class="col-md-6 col-lg-3 mt-2 mt-md-0">
                                            <label>Each Price: <span class="text-danger">*</span></label>
                                            <input type="text" class="form-control text-right" placeholder="" value="$1.25"/>
                                        </div>
                                        <div class="col-md-6 col-lg-3 mt-2 mt-md-0">
                                            <label>Sale Price: <span class="text-danger">*</span></label>
                                            <input type="text" class="form-control text-right" placeholder="" value="$1.25"/>
                                        </div>
                                        <div class="col-md-6 col-lg-3 mt-2 mt-md-0">
                                            <label>Sales Expiry Date:</label>
                                            <div class="row">
                                                <div class="col-md-12 col-lg-12 d-flex">
                                                    <div>
                                                        <DatePicker onChange={onChange} value={value} />
                                                    </div>
                                                    <div class="d-flex align-items-center flex-wrap ml-2">
                                                        Active
                                                        <div class="switcher switcher-sm ml-2 pr-2">
                                                            <input type="checkbox" name="switcher_checkbox_date" id="switcher_checkbox_date" value="2"/>
                                                            <label for="switcher_checkbox_date"></label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col-md-6 col-lg-3">
                                            <label>Volume Quality: <span class="text-danger">*</span></label>
                                            <select class="form-control"><option>Select</option><option>Option 1</option><option>Option 2</option></select>
                                        </div>
                                        <div class="col-md-6 col-lg-3 mt-2 mt-md-0">
                                            <label>Volume Price per unit:</label>
                                            <select class="form-control"><option>Select</option><option>Option 1</option><option>Option 2</option></select>
                                        </div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col-md-12 text-md-right">
                                            <button type="button" class="btn btn-primary btn-lg">Add SKU &amp; Clear</button>
                                            <button type="button" class="btn btn-outline-secondary btn-lg ml-3">Add SKU &amp; Retain</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="bg-white px-3 py-3 my-3">
                                <table id="plantDetails" class="table table-striped w-100 table-responsive">
                                    <thead>
                                        <tr>
                                            <th class="text-nowrap">Status</th>
                                            <th class="text-nowrap">SKU</th>
                                            <th class="text-nowrap">Each Cost</th>
                                            <th class="text-nowrap">Each Price</th>
                                            <th class="text-nowrap">Sale Price</th>
                                            <th class="text-nowrap">Sale Active</th>
                                            <th class="text-nowrap">Volume Per Unit</th>
                                            <th class="text-nowrap">Volume QTY</th>
                                            <th class="text-nowrap text-center">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Active</td>
                                            <td>26-TF-Test 2June-BBP</td>
                                            <td>11.50</td>
                                            <td>11.28</td>
                                            <td>11.50</td>
                                            <td class="text-center">
                                                <div class="custom-control custom-checkbox mb-1">
                                                    <input type="checkbox" class="custom-control-input" id="customCheck1"/>
                                                    <label class="custom-control-label" for="customCheck1"></label>
                                                </div>
                                            </td>
                                            <td>0</td>
                                            <td>-</td>
                                            <td class="text-center">
                                                <span>
                                                    <a href="javascript:;">
                                                        <img src="assets/img/edit.svg" alt=""/>
                                                    </a>
                                                </span>
                                                <span>
                                                    <a href="javascript:;">
                                                        <img src="assets/img/duplicate.svg" alt=""/>
                                                    </a>
                                                </span>
                                                <span>
                                                    <a href="javascript:;">
                                                        <img src="assets/img/delete.svg" alt=""/>
                                                    </a>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Active</td>
                                            <td>26-TF-Test 2June-BBP</td>
                                            <td>11.50</td>
                                            <td>11.28</td>
                                            <td>11.50</td>
                                            <td class="text-center">
                                                <div class="custom-control custom-checkbox mb-1">
                                                    <input type="checkbox" class="custom-control-input" id="customCheck1"/>
                                                    <label class="custom-control-label" for="customCheck1"></label>
                                                </div>
                                            </td>
                                            <td>0</td>
                                            <td>-</td>
                                            <td class="text-center">
                                                <span>
                                                    <a href="javascript:;">
                                                        <img src="assets/img/edit.svg" alt=""/>
                                                    </a>
                                                </span>
                                                <span>
                                                    <a href="javascript:;">
                                                        <img src="assets/img/duplicate.svg" alt=""/>
                                                    </a>
                                                </span>
                                                <span>
                                                    <a href="javascript:;">
                                                        <img src="assets/img/delete.svg" alt=""/>
                                                    </a>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Active</td>
                                            <td>26-TF-Test 2June-BBP</td>
                                            <td>11.50</td>
                                            <td>11.28</td>
                                            <td>11.50</td>
                                            <td class="text-center">
                                                <div class="custom-control custom-checkbox mb-1">
                                                    <input type="checkbox" class="custom-control-input" id="customCheck1"/>
                                                    <label class="custom-control-label" for="customCheck1"></label>
                                                </div>
                                            </td>
                                            <td>0</td>
                                            <td>-</td>
                                            <td class="text-center">
                                                <span>
                                                    <a href="javascript:;">
                                                        <img src="assets/img/edit.svg" alt=""/>
                                                    </a>
                                                </span>
                                                <span>
                                                    <a href="javascript:;">
                                                        <img src="assets/img/duplicate.svg" alt=""/>
                                                    </a>
                                                </span>
                                                <span>
                                                    <a href="javascript:;">
                                                        <img src="assets/img/delete.svg" alt=""/>
                                                    </a>
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel></TabPanel>
                    <TabPanel></TabPanel>
                </Tabs>
            </div>
        </div>
    )
}

export default InventoryManagement  