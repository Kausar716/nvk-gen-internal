/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import DatePicker from 'react-date-picker';
import PlantInventory from './plantInventory'
import ProductInventory from './productInventory'
import {connect} from "react-redux";
import {getLocationList,getCategoryList} from "../../actions/inventoryManagementAction";
import {getAllSupplierAction} from "../../actions/supplierManagementAction";
// const  InventoryManagement = (props)=> {  
    // const [value, onChange] = useState(new Date());
    export class InventoryManagement extends Component {  
        constructor(){
            super()
            this.state={
              
            }
        }
        componentDidMount(){
            this.props.getLocationList()   
            this.props.getCategoryList()
            this.props.getAllSupplierAction()
        }
    
       
      
        render() {
            let plantCategoryList =[]
            let locationList = []
            let supplierList = []
            if(this.props.plantCategoryList)
            if(this.props.plantCategoryList.active){
                plantCategoryList = [...this.props.plantCategoryList.active,...this.props.plantCategoryList.inactive]
            }
            if(this.props.locationList)
            if(this.props.locationList.active){
                locationList = [...this.props.locationList.active,...this.props.locationList.inactive]
            }
            if(this.props.supplierList){
                if(this.props.supplierList && this.props.supplierList.data)
                supplierList = this.props.supplierList.data.active
            }
            console.log(locationList)
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
                        <Tab>Master Inventory</Tab>
                        <Tab>Plants</Tab>
                        <Tab>Task List <span class="badge badge-pill badge-success">25</span></Tab>
                        <Tab>Task Queue</Tab>
                        <Tab>Products</Tab>
                    </TabList>
                    <TabPanel>
                    <div class="bg-white px-3 py-3 mt-3">
                            <form>
                                <Tabs class="my-4">
                                    <TabList>
                                        <Tab>Plants Inventory</Tab>
                                        <Tab>Products Inventory</Tab>
                                    </TabList>
                                    <TabPanel>
                                        <PlantInventory/>
                                    </TabPanel>
                                    <TabPanel>
                                        <ProductInventory/>
                                    </TabPanel>
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
                                        <select class="form-control" onChange={this.handleCategoryChange}>
                                                <option>All</option>
                                                {locationList.map(category=>{
                                                return  <option value={category.id}>{category.address}</option>
                                                })}
                                        </select>
                                    </div>
                                    <div class="col-md-6 col-lg-4 mt-2 mt-md-0">
                                        <label>Category</label>
                                        <select class="form-control" onChange={this.handleCategoryChange}>
                                                <option>All</option>
                                                {plantCategoryList.map(category=>{
                                                return  <option value={category.id}>{category.name}</option>
                                                })}
                                        </select>
                                    </div>
                                    <div class="col-md-6 col-lg-4 mt-2 mt-md-0">
                                        <label>Supplier</label>
                                        <select class="form-control" onChange={this.handleCategoryChange}>
                                        <option>All</option>
                                        {supplierList.map(category=>{
                                        return  <option value={category.id}>{category.supplier_name}</option>
                                        })}
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
                                                        <th class="productionBg f-s-10 text-center">Not Ready</th>
                                                    </tr>
                                                    {/* className="text-nowrap text-center" */}
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
                                                        <td><strong class="text-nowrap text-center" style={{marginLeft:"9px"}}>50</strong></td>
                                                        <td class="text-nowrap">25-02-2020</td>
                                                        <td>-</td>
                                                        <td><strong class="text-nowrap text-center" style={{marginLeft:"9px"}}> 50</strong></td>
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
                                                        <td><strong class="text-nowrap text-center" style={{marginLeft:"9px"}}>50</strong></td>
                                                        <td class="text-nowrap">25-02-2020</td>
                                                        <td>-</td>
                                                        <td><strong class="text-nowrap text-center" style={{marginLeft:"9px"}}>50</strong></td>
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
                                                        <td><strong class="text-nowrap text-center" style={{marginLeft:"9px"}}>50</strong></td>
                                                        <td class="text-nowrap">25-02-2020</td>
                                                        <td>-</td>
                                                        <td><strong class="text-nowrap text-center" style={{marginLeft:"9px"}}>50</strong></td>
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
                                                        <td><strong class="text-nowrap text-center" style={{marginLeft:"9px"}}>50</strong></td>
                                                        <td class="text-nowrap">25-02-2020</td>
                                                        <td>-</td>
                                                        <td><strong class="text-nowrap text-center" style={{marginLeft:"9px"}}>50</strong></td>
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
                                                        <td><strong class="text-nowrap text-center" style={{marginLeft:"9px"}}>50</strong></td>
                                                        <td class="text-nowrap">25-02-2020</td>
                                                        <td>-</td>
                                                        <td><strong class="text-nowrap text-center" style={{marginLeft:"9px"}}>50</strong></td>
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
                                                        <td><strong class="text-nowrap text-center" style={{marginLeft:"9px"}}>50</strong></td>
                                                        <td class="text-nowrap">25-02-2020</td>
                                                        <td>-</td>
                                                        <td><strong class="text-nowrap text-center" style={{marginLeft:"9px"}}>50</strong></td>
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
                                                        <td ><strong class="text-nowrap text-center" style={{marginLeft:"9px"}}>50</strong></td>
                                                        <td class="text-nowrap">25-02-2020</td>
                                                        <td>-</td>
                                                        <td><strong class="text-nowrap text-center" style={{marginLeft:"9px"}}>50</strong></td>
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
                        <div class="bg-white px-3 py-3 mt-3">
                            <form>
                                <h2>Prepare Task List</h2>
                                <hr/>
                                <div class="row mt-4">
                                    <div class="col-md-12 col-lg-12">
                                        <div class="table-responsive">
                                            <table class="table table-striped invtTbl taskListTbl" width="100%">
                                                <thead>
                                                    <tr>
                                                        <th rowspan="2" class="text-nowrap">Type</th>
                                                        <th rowspan="2" class="text-nowrap">SKU</th>
                                                        <th rowspan="2" class="text-nowrap">Batch ID</th>
                                                        <th colspan="2" class="salesBg text-center">Sales</th>
                                                        <th colspan="2" class="productionBg text-center">Production</th>
                                                        <th rowspan="2" class="text-nowrap text-center">Source Ready &amp; <br/> QTY</th>
                                                        <th rowspan="2" class="text-nowrap text-center">Current Location  <br/>  &amp; Destination</th>
                                                        <th rowspan="2" class="text-center">Packaging</th>
                                                        <th rowspan="2" class="text-center">Actions</th>
                                                        <th rowspan="2" class="text-center">Task Done</th>
                                                    </tr>
                                                    <tr>
                                                        <th class="salesBg f-s-10">Ready</th>
                                                        <th class="salesBg f-s-10">Not Ready</th>
                                                        <th class="productionBg f-s-10">Ready</th>
                                                        <th class="productionBg f-s-10">Not Ready</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {/* Begin first row set */}
                                                    <tr class="tblLinks">
                                                        <td colspan="8">
                                                            <a href="">Astilbe arensii Bridal Veil (Brautscheier'), Bridal Veli False Spirea</a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="text-center">
                                                            <a href="">
                                                                <img src="assets/img/plant-ic-green.svg" alt=""/>
                                                            </a>
                                                        </td>
                                                        <td>389-TF-1259-1G</td>
                                                        <td>393-VB-20-09</td>
                                                        <td class="text-nowrap">25</td>
                                                        <td>-</td>
                                                        <td><span class="prodHighlight">100</span></td>
                                                        <td>-</td>
                                                        <td class="text-center">
                                                            <div>
                                                                <select class="form-control mx-auto">
                                                                    <option>Production - Ready</option>
                                                                    <option>Option 1</option>
                                                                    <option>Option 2</option>
                                                                </select>
                                                            </div>
                                                            <div class="mt-2">
                                                                <input type="text" class="form-control mx-auto" value="50"/>
                                                            </div>
                                                        </td>

                                                        <td>
                                                            <div class="tooltipSec">
                                                                <div class="currentLocation">FLEET&gt;AR-A&gt;RW2&gt;BL...
                                                                    <span class="customTooltip">FLEET&gt;AR-A&gt;RW2&gt;BL1</span>
                                                                </div>
                                                            </div>
                                                            <div class="mt-2">
                                                                <select class="form-control mx-auto">
                                                                    <option>No Change</option>
                                                                    <option>Option 1</option>
                                                                    <option>Option 2</option>
                                                                </select>
                                                            </div>
                                                        </td>
                                                        <td class="">
                                                            <div>
                                                                <select class="form-control mx-auto">
                                                                    <option>3 Gallon</option>
                                                                    <option>Option 1</option>
                                                                    <option>Option 2</option>
                                                                </select>
                                                            </div>
                                                        </td>
                                                        <td class="text-center">
                                                            <a href="#" class="">
                                                                <img src="assets/img/copy-ic-blue.svg" alt=""/>
                                                            </a>
                                                            <a href="#" class="px-2 py-2 ml-2">
                                                                <i class="fas fa-ellipsis-v"></i>
                                                            </a>
                                                        </td>
                                                        <td class="text-center">
                                                            <a href="">
                                                                <img src="assets/img/gallon-ic.svg" alt=""/>
                                                            </a>
                                                        </td>
                                                    </tr>           
                                                    {/* Begin second row set */}
                                                    <tr class="tblLinks">
                                                        <td colspan="8">
                                                            <a href="">Abeliophy (White Forsythia)</a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="text-center">
                                                            <a href="">
                                                                <img src="assets/img/plant-ic-green.svg" alt=""/>
                                                            </a>
                                                        </td>
                                                        <td>389-TF-1259-1G</td>
                                                        <td>393-VB-20-09</td>
                                                        <td class="text-nowrap">25</td>
                                                        <td>-</td>
                                                        <td><span class="prodHighlight">250</span></td>
                                                        <td>-</td>
                                                        <td class="text-center">
                                                            <div>
                                                                <select class="form-control mx-auto">
                                                                    <option>Production - Ready</option>
                                                                    <option>Option 1</option>
                                                                    <option>Option 2</option>
                                                                </select>
                                                            </div>
                                                            <div class="mt-2">
                                                                <input type="text" class="form-control mx-auto" value="50"/>
                                                            </div>
                                                        </td>

                                                        <td>
                                                            <div class="tooltipSec">
                                                                <div class="currentLocation">FLEET&gt;AR-A&gt;RW2&gt;BL...
                                                                    <span class="customTooltip">FLEET&gt;AR-A&gt;RW2&gt;BL1</span>
                                                                </div>
                                                            </div>
                                                            <div class="mt-2">
                                                                <select class="form-control mx-auto">
                                                                    <option>No Change</option>
                                                                    <option>Option 1</option>
                                                                    <option>Option 2</option>
                                                                </select>
                                                            </div>
                                                        </td>
                                                        <td class="">
                                                            <div>
                                                                <select class="form-control mx-auto">
                                                                    <option>3 Gallon</option>
                                                                    <option>Option 1</option>
                                                                    <option>Option 2</option>
                                                                </select>
                                                            </div>
                                                        </td>
                                                        <td class="text-center">
                                                            <a href="#" class="">
                                                                <img src="assets/img/copy-ic-blue.svg" alt=""/>
                                                            </a>
                                                            <a href="#" class="px-2 py-2 ml-2">
                                                                <i class="fas fa-ellipsis-v"></i>
                                                            </a>
                                                        </td>
                                                        <td class="text-center">
                                                            <a href="">
                                                                <img src="assets/img/gallon-ic.svg" alt=""/>
                                                            </a>
                                                        </td>
                                                    </tr>           
                                                    <tr>
                                                        <td class="text-center">
                                                            <a href="">
                                                                <img src="assets/img/plant-ic-green.svg" alt=""/>
                                                            </a>
                                                        </td>
                                                        <td>389-TF-1259-1G</td>
                                                        <td>393-VB-20-09</td>
                                                        <td class="text-nowrap">25</td>
                                                        <td>-</td>
                                                        <td><span class="prodHighlight">250</span></td>
                                                        <td>-</td>
                                                        <td class="text-center">
                                                            <div>
                                                                <select class="form-control mx-auto">
                                                                    <option>Production - Ready</option>
                                                                    <option>Option 1</option>
                                                                    <option>Option 2</option>
                                                                </select>
                                                            </div>
                                                            <div class="mt-2">
                                                                <input type="text" class="form-control mx-auto" value="50"/>
                                                            </div>
                                                        </td>

                                                        <td>
                                                            <div class="tooltipSec">
                                                                <div class="currentLocation">FLEET&gt;AR-A&gt;RW2&gt;BL...
                                                                    <span class="customTooltip">FLEET&gt;AR-A&gt;RW2&gt;BL1</span>
                                                                </div>
                                                            </div>
                                                            <div class="mt-2">
                                                                <select class="form-control mx-auto">
                                                                    <option>No Change</option>
                                                                    <option>Option 1</option>
                                                                    <option>Option 2</option>
                                                                </select>
                                                            </div>
                                                        </td>
                                                        <td class="">
                                                            <div>
                                                                <select class="form-control mx-auto">
                                                                    <option>3 Gallon</option>
                                                                    <option>Option 1</option>
                                                                    <option>Option 2</option>
                                                                </select>
                                                            </div>
                                                        </td>
                                                        <td class="text-center">
                                                            <a href="#" class="">
                                                                <img src="assets/img/copy-ic-blue.svg" alt=""/>
                                                            </a>
                                                            <a href="#" class="px-2 py-2 ml-2">
                                                                <i class="fas fa-ellipsis-v"></i>
                                                            </a>
                                                        </td>
                                                        <td class="text-center">
                                                            <a href="">
                                                                <img src="assets/img/gallon-ic.svg" alt=""/>
                                                            </a>
                                                        </td>
                                                    </tr>           
                                                    {/* Begin third row set */}
                                                    <tr class="tblLinks">
                                                        <td colspan="15">
                                                            <a href="">Hydrangea serrata Tuff Stuff Ah-Ha ('SMNHSDD')</a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="text-center">
                                                            <a href="">
                                                                <img src="assets/img/dig-ic.svg" alt=""/>
                                                            </a>
                                                        </td>
                                                        <td>389-TF-1259-1G</td>
                                                        <td>393-VB-20-09</td>
                                                        <td class="text-nowrap">25</td>
                                                        <td>-</td>
                                                        <td><span class="">100</span></td>
                                                        <td>-</td>
                                                        <td class="text-center">
                                                            <div>
                                                                <select class="form-control mx-auto">
                                                                    <option>Production - Ready</option>
                                                                    <option>Option 1</option>
                                                                    <option>Option 2</option>
                                                                </select>
                                                            </div>
                                                            <div class="mt-2">
                                                                <input type="text" class="form-control mx-auto" value="50"/>
                                                            </div>
                                                        </td>

                                                        <td>
                                                            <div class="tooltipSec">
                                                                <div class="currentLocation">FLEET&gt;AR-A&gt;RW2&gt;BL...
                                                                    <span class="customTooltip">FLEET&gt;AR-A&gt;RW2&gt;BL1</span>
                                                                </div>
                                                            </div>
                                                            <div class="mt-2">
                                                                <select class="form-control mx-auto">
                                                                    <option>No Change</option>
                                                                    <option>Option 1</option>
                                                                    <option>Option 2</option>
                                                                </select>
                                                            </div>
                                                        </td>
                                                        <td class="">
                                                            <div>
                                                                <select class="form-control mx-auto">
                                                                    <option>3 Gallon</option>
                                                                    <option>Option 1</option>
                                                                    <option>Option 2</option>
                                                                </select>
                                                            </div>
                                                        </td>
                                                        <td class="text-center">
                                                            <a href="#" class="">
                                                                <img src="assets/img/copy-ic-blue.svg" alt=""/>
                                                            </a>
                                                            <a href="#" class="px-2 py-2 ml-2">
                                                                <i class="fas fa-ellipsis-v"></i>
                                                            </a>
                                                        </td>
                                                        <td class="text-center">
                                                            <a href="">
                                                                <img src="assets/img/gallon-ic.svg" alt=""/>
                                                            </a>
                                                        </td>
                                                    </tr>           
                                                    <tr>
                                                        <td class="text-center">
                                                            <a href="">
                                                                <img src="assets/img/move-ic.svg" alt=""/>
                                                            </a>
                                                        </td>
                                                        <td>389-TF-1259-1G</td>
                                                        <td>393-VB-20-09</td>
                                                        <td class="text-nowrap">25</td>
                                                        <td>-</td>
                                                        <td><span class="">100</span></td>
                                                        <td>-</td>
                                                        <td class="text-center">
                                                            <div>
                                                                <select class="form-control mx-auto">
                                                                    <option>Production - Ready</option>
                                                                    <option>Option 1</option>
                                                                    <option>Option 2</option>
                                                                </select>
                                                            </div>
                                                            <div class="mt-2">
                                                                <input type="text" class="form-control mx-auto" value="50"/>
                                                            </div>
                                                        </td>

                                                        <td>
                                                            <div class="tooltipSec">
                                                                <div class="currentLocation">FLEET&gt;AR-A&gt;RW2&gt;BL...
                                                                    <span class="customTooltip">FLEET&gt;AR-A&gt;RW2&gt;BL1</span>
                                                                </div>
                                                            </div>
                                                            <div class="mt-2">
                                                                <select class="form-control mx-auto">
                                                                    <option>No Change</option>
                                                                    <option>Option 1</option>
                                                                    <option>Option 2</option>
                                                                </select>
                                                            </div>
                                                        </td>
                                                        <td class="">
                                                            <div>
                                                                <select class="form-control mx-auto">
                                                                    <option>3 Gallon</option>
                                                                    <option>Option 1</option>
                                                                    <option>Option 2</option>
                                                                </select>
                                                            </div>
                                                        </td>
                                                        <td class="text-center">
                                                            <a href="#" class="">
                                                                <img src="assets/img/copy-ic-blue.svg" alt=""/>
                                                            </a>
                                                            <a href="#" class="px-2 py-2 ml-2">
                                                                <i class="fas fa-ellipsis-v"></i>
                                                            </a>
                                                        </td>
                                                        <td class="text-center">
                                                            <a href="">
                                                                <img src="assets/img/gallon-ic.svg" alt=""/>
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
                        <div class="bg-white px-3 py-3 mt-3">
                            <form>
                                <h2>Task Queue</h2>
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
                                        <label>Plant Name</label>
                                        <div class="searchInput">
                                            <button type="submit" class="btn btn-search">
                                                <img src="assets/img/search.svg" alt=""/>
                                            </button>
                                            <input type="text" class="form-control" placeholder="Search"/>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-lg-6 mt-3 mt-md-0">
                                        <label>SKU</label>
                                        <div class="searchInput">
                                            <button type="submit" class="btn btn-search">
                                                <img src="assets/img/search.svg" alt=""/>
                                            </button>
                                            <input type="text" class="form-control" placeholder="Search"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-md-6 col-lg-3">
                                        <label>Task ID</label>
                                        <div class="searchInput">
                                            <button type="submit" class="btn btn-search">
                                                <img src="assets/img/search.svg" alt=""/>
                                            </button>
                                            <input type="text" class="form-control" placeholder="Search"/>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-lg-3 mt-3 mt-md-0">
                                        <label>Task Name</label>
                                        <div class="searchInput">
                                            <button type="submit" class="btn btn-search">
                                                <img src="assets/img/search.svg" alt=""/>
                                            </button>
                                            <input type="text" class="form-control" placeholder="Search"/>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-lg-3 mt-3 mt-md-0">
                                        <label>Branch ID</label>
                                        <div class="searchInput">
                                            <button type="submit" class="btn btn-search">
                                                <img src="assets/img/search.svg" alt=""/>
                                            </button>
                                            <input type="text" class="form-control" placeholder="Search"/>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-lg-3 mt-3 mt-md-0">
                                        <label>Purchase Order ID</label>
                                        <div class="searchInput">
                                            <button type="submit" class="btn btn-search">
                                                <img src="assets/img/search.svg" alt=""/>
                                            </button>
                                            <input type="text" class="form-control" placeholder="Search"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-md-12 col-lg-12 text-right d-flex flex-wrap justify-content-end">
                                        <div class="col-md-6 col-lg-3">
                                        <a href="">Reset</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-4">
                                    <div class="col-md-12 col-lg-12 sortingCtrls d-flex flex-wrap align-items-center">
                                        <div>
                                            <span class="mr-3">View</span>
                                            <a href="" class="active">Task List</a>
                                            <a href="" class="">Task Name</a>
                                        </div>
                                        <div class="ml-4">
                                            <span class="mr-3">Sort</span>
                                            <a href="" class="active">Default</a>
                                            <a href="" class="">Overdue</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-4">
                                    <div class="col-md-12 col-lg-12">
                                        <div class="table-responsive">
                                            <table class="table table-striped invtTbl" width="100%">
                                                <thead>
                                                    <tr>
                                                        <th class="text-nowrap">Request Type</th>
                                                        <th>Requestor</th>
                                                        <th class="text-nowrap">Task ID</th>
                                                        <th class="">Task Name</th>
                                                        <th class="text-nowrap">Entries</th>
                                                        <th class="text-nowrap">Submitted Date</th>
                                                        <th class="text-nowrap">Due Date</th>
                                                        <th class="text-nowrap">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td class="">
                                                            <img src="assets/img/plant-ic-green.svg" alt=""/>
                                                        </td>
                                                        <td class="text-nowrap">D. Mantel</td>
                                                        <td><a href="">854879</a></td>
                                                        <td><a href="">Planting for Sherdian Nurseries</a></td>
                                                        <td><strong>12</strong></td>
                                                        <td class="text-nowrap">12/5/2021</td>
                                                        <td class="text-nowrap">15/5/2021</td>
                                                        <td class="">
                                                            <a href="">
                                                                <img src="assets/img/delete.svg" alt=""/>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="">
                                                            <img src="assets/img/dig-ic.svg" alt=""/>
                                                        </td>
                                                        <td class="text-nowrap">C. Mantel</td>
                                                        <td><a href="">854880</a></td>
                                                        <td><a href="">Dig for sales</a></td>
                                                        <td><strong>6</strong></td>
                                                        <td class="text-nowrap">2/5/2021</td>
                                                        <td class="text-nowrap">15/5/2021</td>
                                                        <td class="">
                                                            <a href="">
                                                                <img src="assets/img/delete.svg" alt=""/>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="">
                                                            <img src="assets/img/plant-ic-green.svg" alt=""/>
                                                        </td>
                                                        <td class="text-nowrap">D. Mantel</td>
                                                        <td><a href="">854879</a></td>
                                                        <td><a href="">Planting for Sherdian Nurseries</a></td>
                                                        <td><strong>12</strong></td>
                                                        <td class="text-nowrap">12/5/2021</td>
                                                        <td class="text-nowrap">15/5/2021</td>
                                                        <td class="">
                                                            <a href="">
                                                                <img src="assets/img/delete.svg" alt=""/>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="">
                                                            <img src="assets/img/dig-ic.svg" alt=""/>
                                                        </td>
                                                        <td class="text-nowrap">C. Mantel</td>
                                                        <td><a href="">854880</a></td>
                                                        <td><a href="">Dig for sales</a></td>
                                                        <td><strong>6</strong></td>
                                                        <td class="text-nowrap">2/5/2021</td>
                                                        <td class="text-nowrap">15/5/2021</td>
                                                        <td class="">
                                                            <a href="">
                                                                <img src="assets/img/delete.svg" alt=""/>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="">
                                                            <img src="assets/img/plant-ic-green.svg" alt=""/>
                                                        </td>
                                                        <td class="text-nowrap">D. Mantel</td>
                                                        <td><a href="">854879</a></td>
                                                        <td><a href="">Planting for Sherdian Nurseries</a></td>
                                                        <td><strong>12</strong></td>
                                                        <td class="text-nowrap">12/5/2021</td>
                                                        <td class="text-nowrap">15/5/2021</td>
                                                        <td class="">
                                                            <a href="">
                                                                <img src="assets/img/delete.svg" alt=""/>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="">
                                                            <img src="assets/img/dig-ic.svg" alt=""/>
                                                        </td>
                                                        <td class="text-nowrap">C. Mantel</td>
                                                        <td><a href="">854880</a></td>
                                                        <td><a href="">Dig for sales</a></td>
                                                        <td><strong>6</strong></td>
                                                        <td class="text-nowrap">2/5/2021</td>
                                                        <td class="text-nowrap">15/5/2021</td>
                                                        <td class="">
                                                            <a href="">
                                                                <img src="assets/img/delete.svg" alt=""/>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>

                                {/* Overdue table design starts here */}
                                <br/><br/>
                                <h4>Overdue Table Design only for row bg &amp; Due date color css - to be deleted</h4>
                                <div class="row mt-4">
                                    <div class="col-md-12 col-lg-12">
                                        <div class="table-responsive">
                                            <table class="table table-striped invtTbl" width="100%">
                                                <thead>
                                                    <tr>
                                                        <th class="text-nowrap">Request Type</th>
                                                        <th>Requestor</th>
                                                        <th class="text-nowrap">Task ID</th>
                                                        <th class="">Task Name</th>
                                                        <th class="text-nowrap">Entries</th>
                                                        <th class="text-nowrap">Submitted Date</th>
                                                        <th class="text-nowrap">Due Date</th>
                                                        <th class="text-nowrap">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td class="">
                                                            <img src="assets/img/plant-ic-green.svg" alt=""/>
                                                        </td>
                                                        <td class="text-nowrap">D. Mantel</td>
                                                        <td><a href="">854879</a></td>
                                                        <td><a href="">Planting for Sherdian Nurseries</a></td>
                                                        <td><strong>12</strong></td>
                                                        <td class="text-nowrap">12/5/2021</td>
                                                        <td class="text-nowrap">15/5/2021</td>
                                                        <td class="">
                                                            <a href="">
                                                                <img src="assets/img/delete.svg" alt=""/>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="">
                                                            <img src="assets/img/dig-ic.svg" alt=""/>
                                                        </td>
                                                        <td class="text-nowrap">C. Mantel</td>
                                                        <td><a href="">854880</a></td>
                                                        <td><a href="">Dig for sales</a></td>
                                                        <td><strong>6</strong></td>
                                                        <td class="text-nowrap">2/5/2021</td>
                                                        <td class="text-nowrap">15/5/2021</td>
                                                        <td class="">
                                                            <a href="">
                                                                <img src="assets/img/delete.svg" alt=""/>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="">
                                                            <img src="assets/img/plantDigMove-ic.svg" alt=""/>
                                                        </td>
                                                        <td class="text-nowrap">D. Mantel</td>
                                                        <td><a href="">854879</a></td>
                                                        <td><a href="">Planting for Sherdian Nurseries</a></td>
                                                        <td><strong>12</strong></td>
                                                        <td class="text-nowrap">12/5/2021</td>
                                                        <td class="text-nowrap">15/5/2021</td>
                                                        <td class="">
                                                            <a href="">
                                                                <img src="assets/img/delete.svg" alt=""/>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr class="overdueBg">
                                                        <td class="">
                                                            <img src="assets/img/plantDig-ic.svg" alt=""/>
                                                        </td>
                                                        <td class="text-nowrap">C. Mantel</td>
                                                        <td><a href="">854880</a></td>
                                                        <td><a href="">Dig for sales</a></td>
                                                        <td><strong>6</strong></td>
                                                        <td class="text-nowrap">2/5/2021</td>
                                                        <td class="text-nowrap text-danger">15/5/2021</td>
                                                        <td class="">
                                                            <a href="">
                                                                <img src="assets/img/delete.svg" alt=""/>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="">
                                                            <img src="assets/img/plantMove-ic.svg" alt=""/>
                                                        </td>
                                                        <td class="text-nowrap">D. Mantel</td>
                                                        <td><a href="">854879</a></td>
                                                        <td><a href="">Planting for Sherdian Nurseries</a></td>
                                                        <td><strong>12</strong></td>
                                                        <td class="text-nowrap">12/5/2021</td>
                                                        <td class="text-nowrap">15/5/2021</td>
                                                        <td class="">
                                                            <a href="">
                                                                <img src="assets/img/delete.svg" alt=""/>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="">
                                                            <img src="assets/img/digMove-ic.svg" alt=""/>
                                                        </td>
                                                        <td class="text-nowrap">C. Mantel</td>
                                                        <td><a href="">854880</a></td>
                                                        <td><a href="">Dig for sales</a></td>
                                                        <td><strong>6</strong></td>
                                                        <td class="text-nowrap">2/5/2021</td>
                                                        <td class="text-nowrap">15/5/2021</td>
                                                        <td class="">
                                                            <a href="">
                                                                <img src="assets/img/delete.svg" alt=""/>
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
                                                        <td><strong class="text-nowrap text-center" style={{marginLeft:"9px"}}>50</strong></td>
                                                        <td class="text-nowrap">25-02-2020</td>
                                                        <td>-</td>
                                                        <td><strong class="text-nowrap text-center" style={{marginLeft:"9px"}}>50</strong></td>
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
                                                        <td><strong class="text-nowrap text-center" style={{marginLeft:"9px"}}>50</strong></td>
                                                        <td class="text-nowrap">25-02-2020</td>
                                                        <td>-</td>
                                                        <td><strong class="text-nowrap text-center" style={{marginLeft:"9px"}}>50</strong></td>
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
                                                        <td><strong class="text-nowrap text-center" style={{marginLeft:"9px"}}>50</strong></td>
                                                        <td class="text-nowrap">25-02-2020</td>
                                                        <td>-</td>
                                                        <td><strong class="text-nowrap text-center" style={{marginLeft:"9px"}}>50</strong></td>
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
                                                        <td><strong class="text-nowrap text-center" style={{marginLeft:"9px"}}>50</strong></td>
                                                        <td class="text-nowrap">25-02-2020</td>
                                                        <td>-</td>
                                                        <td><strong class="text-nowrap text-center" style={{marginLeft:"9px"}}>50</strong></td>
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
                                                        <td><strong class="text-nowrap text-center" style={{marginLeft:"9px"}}>50</strong></td>
                                                        <td class="text-nowrap">25-02-2020</td>
                                                        <td>-</td>
                                                        <td><strong class="text-nowrap text-center" style={{marginLeft:"9px"}}>50</strong></td>
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
                                                        <td><strong class="text-nowrap text-center" style={{marginLeft:"9px"}}>50</strong></td>
                                                        <td class="text-nowrap">25-02-2020</td>
                                                        <td>-</td>
                                                        <td><strong class="text-nowrap text-center" style={{marginLeft:"9px"}}>50</strong></td>
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
                                                        <td><strong class="text-nowrap text-center" style={{marginLeft:"9px"}}>50</strong></td>
                                                        <td class="text-nowrap">25-02-2020</td>
                                                        <td>-</td>
                                                        <td><strong class="text-nowrap text-center" style={{marginLeft:"9px"}}>50</strong></td>
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
    }

// export default InventoryManagement  
const mapStateToProps = (state)=> (
    // console.log(state)
    {
        plantCategoryList:state.inventoryManagementReducer.plantCategoryList,
        locationList:state.inventoryManagementReducer.locationList,
        supplierList:state.supplierData.supplierInfo,
        temp:state
}

)

export default connect(mapStateToProps,{getCategoryList,getLocationList,getAllSupplierAction})(InventoryManagement)
