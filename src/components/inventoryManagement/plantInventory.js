/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, {Component} from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {connect} from "react-redux";
import {getLocationList,getCategoryList,getPlantList,getFilterResult,getAllPlants,filterPlantManagerData} from "../../actions/inventoryManagementAction";
import {getAllSupplierAction} from "../../actions/supplierManagementAction";

import ActionModal from '../Modal/ActionModal' 

export class PlantInventory extends Component {  
    constructor(){
        super()
        this.state={
            selectedLocationId:"",
            selecredCategoryID:"",
            selectedSupplierId:"",
            plantSearchName:"",
            skuSearchName:"",
            plantRadio:"All",
            skuRadio:"All",
            purchaseOrder:"",
            batchId:""
        }
    }
    componentDidMount(){
        this.props.getLocationList()   
        this.props.getCategoryList()
        this.props.getAllSupplierAction()
        this.props.getAllPlants()
        
    }
 
    handleRadio = (e) => {
        let allPlantRadio = false
        let {selectedLocationId,selecredCategoryID,selectedSupplierId,plantSearchName,skuSearchName,skuRadio} = this.state

        if(e.target.name === "all" ){
            allPlantRadio = true
        }
        this.setState({allPlantRadio:allPlantRadio})
        this.props.getFilterResult({
            selectedLocationId,
            selecredCategoryID,
            selectedSupplierId,
            plantSearchName,
            skuSearchName,
            allPlantRadio,
            skuRadio
        })
    }
    handleFilterChange = (e)=>{
        console.log(e.target.id,e.target.value)
        this.props.filterPlantManagerData(e.target.id,e.target.value)

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
        console.log(this.props.temp)
        let PlantListForTable = []
        PlantListForTable = this.props.plantInventoryData?this.props.plantInventoryData:[]

        // console.log()
        const {plantData,plantFilterIds} = this.props.plantData
        let plantIdsAll = plantData.map(plantData=>plantData.plant_id)
        let plantId = plantIdsAll.filter(function( plant, index, array ) {
            console.log(array.indexOf(plant) +""+index)
            return array.indexOf(plant) === index;
        });
        console.log(plantId)

    
    
    return (
         <div class="bg-white px-3 py-3 mt-3">
                            <form>
                                <h2>Plant inventory</h2>
                                <hr/>
                                <div class="row mt-3">
                                    <div class="col-md-6 col-lg-4">
                                        <label>Location</label>
                                        <select class="form-control" onChange={this.handleFilterChange}  id="location_id">
                                                <option>All</option>
                                                {locationList.map(category=>{
                                                return  <option value={category.id}>{category.address}</option>
                                                })}
                                        </select>
                                    </div>
                                    <div class="col-md-6 col-lg-4 mt-2 mt-md-0">
                                        <label>Category</label>
                                        <select class="form-control" onChange={this.handleFilterChange} id="category_id">
                                                <option>All</option>
                                                {plantCategoryList.map(category=>{
                                                return  <option value={category.id}>{category.name}</option>
                                                })}
                                        </select>
                                    </div>
                                    <div class="col-md-6 col-lg-4 mt-2 mt-md-0">
                                        <label>Supplier</label>
                                        <select class="form-control" onChange={this.handleFilterChange} id="supplier_id">
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
                                            <input type="text" name="plantSearch" value={plantFilterIds.genus} onChange={this.handleFilterChange} class="form-control" placeholder="Search" id="genus"/>
                                        </div>
                                        <div class="form-group row mt-2">
                                            <div class="col-md-12">
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="radio_default_inline" id="activePlants" value="" onChange={this.handleFilterChange}/>
                                                    <label class="form-check-label" for="activePlants">Active Plants</label>
                                                </div>
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="radio_default_inline" id="allPlants" value="" onChange={this.handleFilterChange}/>
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
                                            <input type="text" name="skuSearch" value={this.state.skuSearchName} onChange={this.handleFilterChange} class="form-control" placeholder="Search" id="sku_code" value={plantFilterIds.sku_code}/>
                                        </div>
                                        <div class="form-group row mt-2">
                                            <div class="col-md-12">
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="radio_default_inline" id="activeSkus" value="" onChange={this.handleFilterChange}/>
                                                    <label class="form-check-label" for="activeSkus">Active SKUs</label>
                                                </div>
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="radio_default_inline" id="archievedSkus" value="" onChange={this.handleFilterChange}/>
                                                    <label class="form-check-label" for="archievedSkus">Archived SKUs</label>
                                                </div>
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="radio_default_inline" id="emptySkus" value="" onChange={this.handleFilterChange}/>
                                                    <label class="form-check-label" for="emptySkus">Empty SKUs</label>
                                                </div>
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="radio_default_inline" id="allSkus" value="" onChange={this.handleFilterChange}/>
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
                                            <input type="text" name="purchaseOrder" value={this.state.purchaseOrder} class="form-control" placeholder="Search" onChange={this.handleFilterChange}/>
                                        </div>
                                        <div class="form-group row mt-2">
                                            <div class="col-md-12">
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="radio_default_inline" id="activePlants" value="" onChange={this.handleFilterChange}/>
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
                                            <input type="text" name="batchId" value={this.state.batchId} onChange={this.handleFilterChange} class="form-control" placeholder="Search" id="batch_code" value={plantFilterIds.batch_code}/>
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
                                                    <tr >
                                                        <th rowspan="2" class="text-center">
                                                            <div class="custom-control custom-checkbox">
                                                                <input type="checkbox" class="custom-control-input" id="customCheck1" />
                                                                <label class="custom-control-label" for="customCheck1"></label>
                                                            </div>
                                                        </th>
                                                        <th rowspan="2" class="text-nowrap">SKU</th>
                                                        <th rowspan="2"><p style={{marginLeft:"-70px",marginTop:"17px"}}>Supllier</p></th>
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
                                                {/* <tbody> */}
                                                    {plantId.map(plantId=>{
                                                        console.log(JSON.parse(plantId))
                                                       let count =0
                                                            return plantData.map((plant,index)=>{
                                                             
                                                                if(JSON.parse(plantId)===parseInt(plant["plant_id"])){
                                                                if(count===0){
                                                                    count++
                                                                    return(
                                                                        <><tr style={{backgroundColor:"#EFEFEF"}}>
                                                        <td colspan="5">
                                                            <a href="">{plant.genus}</a>
                                                        </td>
                                                        <td colspan="8">
                                                            <a href="">View Sales Orders</a>
                                                        </td>
                                                        <td>
                                                            <a href=""> New Batch ID</a>
                                                        </td>
                                                    </tr>
                                                    <tr >
                                                        <td class="text-center">
                                                            <div class="custom-control custom-checkbox">
                                                                <input type="checkbox" class="custom-control-input" id="customCheck2" />
                                                                <label class="custom-control-label" for="customCheck2"></label>
                                                            </div>
                                                        </td>
                                                        <td class="text-nowrap">
                                                        <span style={{display:"inline-block",width: "150px",whiteSpace: "nowrap",overflow:"hidden",textOverflow: "ellipsis"}}>{plant.sku_code}</span>
                                                        </td>
                                                        <td><p style={{marginLeft:"-50px",marginTop:"17px"}}>{plant.supplier_id}</p></td>
                                                        <td class="text-nowrap">{plant.batch_code}</td>
                                                        <td class="text-nowrap">{plant.batch_date}</td>
                                                        <td>-</td>
                                                        <td><a href="">{plant.location_id}</a></td>
                                                        <td>{plant.sales_ready_state}</td>
                                                        <td><strong class="text-nowrap text-center" style={{marginLeft:"9px"}}>{plant.sales_not_ready_state}</strong></td>
                                                        <td class="text-nowrap">25-02-2020</td>
                                                        <td>{plant.production_ready_state}</td>
                                                        <td><strong class="text-nowrap text-center" style={{marginLeft:"9px"}}>{plant.production_not_ready_state}</strong></td>
                                                        <td class="text-nowrap">{plant.production_ready_date}</td>
                                                        <td class="invTblAction">
                                                            <a href="">
                                                                <img src="assets/img/tbl-task-ic.svg" alt=""/>
                                                            </a>
                                                            <a href="">
                                                                <img src="assets/img/tbl-more-ic.svg" alt=""/>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    </>

                                                    )

                                                        }else{
                                                            count++
                                                        return(
                                                        <>
                                                    <tr>
                                                        <td class="text-center">
                                                            <div class="custom-control custom-checkbox">
                                                                <input type="checkbox" class="custom-control-input" id="customCheck2" />
                                                                <label class="custom-control-label" for="customCheck2"></label>
                                                            </div>
                                                        </td>
                                                        <td class="text-nowrap">
                                                        <span   style={{display:"inline-block",width: "150px",whiteSpace: "nowrap",overflow:"hidden",textOverflow: "ellipsis"}}>{plant.sku_code}</span>
                                                        </td>
                                                        <td><p style={{marginLeft:"-50px",marginTop:"17px"}}>{plant.supplier_id}</p></td>
                                                        <td class="text-nowrap">{plant.batch_code}</td>
                                                        <td class="text-nowrap">{plant.batch_date}</td>
                                                        <td>-</td>
                                                        <td><a href="">{plant.location_id}</a></td>
                                                        <td>{plant.sales_ready_state}</td>
                                                        <td><strong class="text-nowrap text-center" style={{marginLeft:"9px"}}>{plant.sales_not_ready_state}</strong></td>
                                                        <td class="text-nowrap">25-02-2020</td>
                                                        <td>{plant.production_ready_state}</td>
                                                        <td><strong class="text-nowrap text-center" style={{marginLeft:"9px"}}>{plant.production_not_ready_state}</strong></td>
                                                        <td class="text-nowrap">{plant.production_ready_date}</td>
                                                        <td class="invTblAction">
                                                            <a href="">
                                                                <img src="assets/img/tbl-task-ic.svg" alt=""/>
                                                            </a>
                                                            <a href="">
                                                                <img src="assets/img/tbl-more-ic.svg" alt=""/>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                    </>
                                                                    )
                                                                }
                                                               
                                                            }   
                                                        })

                                                       
                                                    
                                                    })}
                                                    
                                                {/* </tbody> */}
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
        
        
    )
}}


const mapStateToProps = (state)=> (
    // console.log(state)
    {
        plantCategoryList:state.inventoryManagementReducer.plantCategoryList,
        locationList:state.inventoryManagementReducer.locationList,
        supplierList:state.supplierData.supplierInfo,
        plantInventoryData:state.inventoryManagementReducer.plantInventoryData,
        plantData:state.inventoryManagementReducer,
        temp:state
}

)

export default connect(mapStateToProps,{filterPlantManagerData,getAllPlants,getCategoryList,getLocationList,getAllSupplierAction,getPlantList,getFilterResult})(PlantInventory)
