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
                                                    <input class="form-check-input" type="radio" name="radio_default_inline" id="allSkus" value=""/>
                                                    <label class="form-check-label" for="allSkus">All SKUs</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <Tabs class="my-4">
                                    <TabList>
                                        <Tab>Plants</Tab>
                                        <Tab>Produts</Tab>
                                    </TabList>
                                    <TabPanel>
                                        <div class="row mt-4">
                                            <div class="col-md-12 col-lg-12">
                                                <div class="table-responsive">
                                                    <table class="table table-striped invtDashPlantTbl" width="100%">
                                                        <thead>
                                                            <tr>
                                                                <th rowspan="2" class="text-nowrap" width="15%">SKU</th>
                                                                <th rowspan="2" class="text-center" width="10%">Volume<br/>QTY</th>
                                                                <th rowspan="2" class="text-nowrap text-center" width="10%">Current<br/>Available</th>
                                                                <th rowspan="2" class="text-nowrap text-center" width="10%">Future<br/>Available</th>
                                                                <th colspan="3" class="text-center prevYear" width="15%">2019</th>
                                                                <th colspan="3" class="text-center currentYear" width="15%">Current Year 2020</th>
                                                                <th colspan="2" class="text-center nextYear" width="14%">Next Year 2021</th>
                                                                <th rowspan="2" class="text-nowrap text-center" width="11%">In<br/>Production</th>
                                                            </tr>
                                                            <tr>
                                                                <th class="prevYear" width="5%">LY Sales</th>
                                                                <th class="prevYear" width="5%">Each<br/>Price</th>
                                                                <th class="prevYear" width="5%">Volume Price</th>
                                                                <th class="currentYear" width="5%">LTD Sales</th>
                                                                <th class="currentYear" width="5%">Each<br/>Price</th>
                                                                <th class="currentYear" width="5%">Volume Price</th>
                                                                <th class="nextYear" width="5%">Each Price</th>
                                                                <th class="nextYear">Volume Price</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr class="tblLinks">
                                                                <td colspan="12">
                                                                    <a href="">Abeliophyllum (White Forsythia)</a>
                                                                </td>
                                                                <td class="text-center">
                                                                   <span class="mx-2">
                                                                        <img src="assets/img/check-ic.svg" alt=""/>
                                                                   </span>
                                                                   <span class="ml-4">
                                                                       <a href="">
                                                                            <img src="assets/img/up-arrow-ic.svg" alt=""/>
                                                                        </a>
                                                                   </span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan="13" class="p-0">
                                                                    <table class="table table-striped" width="100%">
                                                                        <tr>
                                                                            <td class="text-nowrap" width="15%">
                                                                                <a href="">393-TF-1259-1G</a>
                                                                            </td>
                                                                            <td width="10%">6</td>
                                                                            <td width="10%" class="text-nowrap"><strong>125</strong></td>
                                                                            <td width="10%" class="text-nowrap"><strong>125</strong></td>
                                                                            <td width="6%">25.478</td>
                                                                            <td width="5%">5.75</td>
                                                                            <td width="5%">5.00</td>
                                                                            <td width="6%">18.569 
                                                                                <small class="text-green d-block">-23.0%</small></td>
                                                                            <td width="6%" class="text-nowrap">
                                                                                <span class="border">5.95</span>
                                                                                <small class="text-green d-block">+1.74%</small>
                                                                            </td>
                                                                            <td width="5%"> 
                                                                                <span class="border">5.95</span>
                                                                                <small class="text-green d-block">+1.74%</small>
                                                                            </td>
                                                                            <td width="6%"> 
                                                                                <span class="border">5.95</span>
                                                                                <small class="text-green d-block">-</small>
                                                                            </td>
                                                                            <td width="6%"> 
                                                                                <span class="border">5.95</span>
                                                                                <small class="text-green d-block">-</small>
                                                                            </td>
                                                                            <td width="10%"></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td class="text-nowrap">
                                                                                <a href="">393-TF-1259-1G</a>
                                                                            </td>
                                                                            <td>6</td>
                                                                            <td class="text-nowrap"><strong>105</strong></td>
                                                                            <td class="text-nowrap"><strong>115</strong></td>
                                                                            <td>25.478</td>
                                                                            <td>5.75</td>
                                                                            <td>5.00</td>
                                                                            <td>18.569 <small class="text-green  d-block">-23.0%</small></td>
                                                                            <td class="text-nowrap">
                                                                                <span class="border">5.95</span>
                                                                                <small class="text-green d-block">+1.74%</small>
                                                                            </td>
                                                                            <td> 
                                                                                <span class="border">5.95</span>
                                                                                <small class="text-green d-block">+1.74%</small>
                                                                            </td>
                                                                            <td> 
                                                                                <span class="border">5.95</span>
                                                                                <small class="text-green d-block">-</small>
                                                                            </td>
                                                                            <td> 
                                                                                <span class="border">5.95</span>
                                                                                <small class="text-green d-block">-</small>
                                                                            </td>
                                                                            <td></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td class="text-nowrap">
                                                                                <a href="">393-TF-1259-1G</a>
                                                                            </td>
                                                                            <td>6</td>
                                                                            <td class="text-nowrap"><strong>165</strong></td>
                                                                            <td class="text-nowrap"><strong>145</strong></td>
                                                                            <td>25.478</td>
                                                                            <td>5.75</td>
                                                                            <td>5.00</td>
                                                                            <td>18.569 <small class="text-green  d-block">-23.0%</small></td>
                                                                            <td class="text-nowrap">
                                                                                <span class="border">5.95</span>
                                                                                <small class="text-green d-block">+1.74%</small>
                                                                            </td>
                                                                            <td> 
                                                                                <span class="border">5.95</span>
                                                                                <small class="text-green d-block">+1.74%</small>
                                                                            </td>
                                                                            <td> 
                                                                                <span class="border">5.95</span>
                                                                                <small class="text-green d-block">-</small>
                                                                            </td>
                                                                            <td> 
                                                                                <span class="border">5.95</span>
                                                                                <small class="text-green d-block">-</small>
                                                                            </td>
                                                                            <td></td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            <tr class="tblLinks">
                                                                <td colspan="12">
                                                                    <a href="">Abeliophyllum (White Forsythia)</a>
                                                                </td>
                                                                <td class="text-center">
                                                                   <span class="mx-2">
                                                                        <img src="assets/img/check-ic.svg" alt=""/>
                                                                   </span>
                                                                   <span class="ml-4">
                                                                       <a href="">
                                                                            <img src="assets/img/up-arrow-ic.svg" alt=""/>
                                                                        </a>
                                                                   </span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td colspan="13" class="p-0">
                                                                    <table class="table table-striped" width="100%">
                                                                        <tr>
                                                                            <td class="text-nowrap" width="15%">
                                                                                <a href="">393-TF-1259-1G</a>
                                                                            </td>
                                                                            <td width="10%">6</td>
                                                                            <td width="10%" class="text-nowrap"><strong>125</strong></td>
                                                                            <td width="10%" class="text-nowrap"><strong>125</strong></td>
                                                                            <td width="6%">25.478</td>
                                                                            <td width="5%">5.75</td>
                                                                            <td width="5%">5.00</td>
                                                                            <td width="6%">18.569 
                                                                                <small class="text-green d-block">-23.0%</small></td>
                                                                            <td width="6%" class="text-nowrap">
                                                                                <span class="border">5.95</span>
                                                                                <small class="text-green d-block">+1.74%</small>
                                                                            </td>
                                                                            <td width="5%"> 
                                                                                <span class="border">5.95</span>
                                                                                <small class="text-green d-block">+1.74%</small>
                                                                            </td>
                                                                            <td width="6%"> 
                                                                                <span class="border">5.95</span>
                                                                                <small class="text-green d-block">-</small>
                                                                            </td>
                                                                            <td width="6%"> 
                                                                                <span class="border">5.95</span>
                                                                                <small class="text-green d-block">-</small>
                                                                            </td>
                                                                            <td width="10%"></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td class="text-nowrap">
                                                                                <a href="">393-TF-1259-1G</a>
                                                                            </td>
                                                                            <td>6</td>
                                                                            <td class="text-nowrap"><strong>105</strong></td>
                                                                            <td class="text-nowrap"><strong>115</strong></td>
                                                                            <td>25.478</td>
                                                                            <td>5.75</td>
                                                                            <td>5.00</td>
                                                                            <td>18.569 <small class="text-green  d-block">-23.0%</small></td>
                                                                            <td class="text-nowrap">
                                                                                <span class="border">5.95</span>
                                                                                <small class="text-green d-block">+1.74%</small>
                                                                            </td>
                                                                            <td> 
                                                                                <span class="border">5.95</span>
                                                                                <small class="text-green d-block">+1.74%</small>
                                                                            </td>
                                                                            <td> 
                                                                                <span class="border">5.95</span>
                                                                                <small class="text-green d-block">-</small>
                                                                            </td>
                                                                            <td> 
                                                                                <span class="border">5.95</span>
                                                                                <small class="text-green d-block">-</small>
                                                                            </td>
                                                                            <td></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td class="text-nowrap">
                                                                                <a href="">393-TF-1259-1G</a>
                                                                            </td>
                                                                            <td>6</td>
                                                                            <td class="text-nowrap"><strong>165</strong></td>
                                                                            <td class="text-nowrap"><strong>145</strong></td>
                                                                            <td>25.478</td>
                                                                            <td>5.75</td>
                                                                            <td>5.00</td>
                                                                            <td>18.569 <small class="text-green  d-block">-23.0%</small></td>
                                                                            <td class="text-nowrap">
                                                                                <span class="border">5.95</span>
                                                                                <small class="text-green d-block">+1.74%</small>
                                                                            </td>
                                                                            <td> 
                                                                                <span class="border">5.95</span>
                                                                                <small class="text-green d-block">+1.74%</small>
                                                                            </td>
                                                                            <td> 
                                                                                <span class="border">5.95</span>
                                                                                <small class="text-green d-block">-</small>
                                                                            </td>
                                                                            <td> 
                                                                                <span class="border">5.95</span>
                                                                                <small class="text-green d-block">-</small>
                                                                            </td>
                                                                            <td></td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                           
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </TabPanel>
                                    <TabPanel></TabPanel>
                                </Tabs>


                                
                            </form>
                        </div>
                    </TabPanel>
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
                    </TabPanel>
                    <TabPanel></TabPanel>
                    <TabPanel>
                    <div class="bg-white px-3 py-3 mt-3">
                            <form>
                                <h2>Product inventory</h2>
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
                                        <label>Manufacture</label>
                                        <select class="form-control">
                                            <option>All</option>
                                            <option>Option 1</option>
                                            <option>Option 2</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="row mt-3 align-items-center">
                                    <div class="col-md-6 col-lg-6">
                                        <label>Product Search</label>
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
                                                    <label class="form-check-label" for="activePlants">Active Products</label>
                                                </div>
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="radio_default_inline" id="allPlants" value=""/>
                                                    <label class="form-check-label" for="allPlants">All Products</label>
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
                                                        <th rowspan="2">Manufacture</th>
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
                </Tabs>
            </div>
        </div>
    )
}

export default InventoryManagement  