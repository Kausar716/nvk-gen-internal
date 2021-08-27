import React, { useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import DatePicker from 'react-date-picker';
import {connect} from "react-redux";
import TablePagination from '../Pagination/index';
import {getAllCustomer,handleRadioFilter,handleSearchFilter,handleAlphabetFilter, 
     handleAplhabetFilterBySN,
    getPoSupplierFilter,getPoJobDescription,getPoOrderFilter,getPoPlantProductFilter,getPoSkuFilter,getSupplierOrderFilter

} from "../../actions/purchaseOrderManagementAction";
import {getAllPlantAction,serachPlant} from '../../actions/plantManagerAction'
import {getAllSuppliers} from "../../actions/supplierManagementAction"
// import initialDetails from './initialDetails';
import './style.css'
import { Link } from "react-router-dom";
import Autosuggest from 'react-autosuggest';
import PurchaseOrderTable from "./purchaseOrderTable"
export class PurchaseOrders extends React.Component {

    constructor(){
        super()
        this.state={
            addCustomerToggle:false,
            customerListStatus:"active",
            editCustmerToggle:false,
            customerObject:{},
            pageSize:5,
            alphabets:["A", "B", "C", "D", "E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
            selectedAlpha:"All",
            searchValue:"",
            radioFilter:"active",
            searchInput: '', 
            checkedData:[],
            alphabet: '',
            button: true,           
            alphabetSelect:'',
            TotalPurchaseOder:39,
            plantSuggestions:[],
            supplierSuggestions:[],
            inputValue:"",
            plantValue:"",
            supplierValue:""
        }
    }
    componentDidMount(){
        this.props.getAllPlantAction()
        this.props.getAllSuppliers()
    }
    handleFilert = (e) => {
        let id = e.target.id
        let value = e.taret.value
        if(id ==="supplierFilter"){
            this.props.getPoSupplierFilter()
        }
        else if(id === "jobDescription"){
            this.props.getPoJobDescription()
        }
        else if(id === "plantProduct"){
            this.props.getPoPlantProductFilter()
        }
        else if(id === "sku"){
            this.props.getPoSkuFilter()
        }
        else if(id === "order"){
            this.props.getPoOrderFilter()
        }
        else if(id === "supplierOrder"){
            this.props.getSupplierOrderFilter()
        }
    } 
    handleChange = (event, { newValue }) => {
        if(event.target.name==="plantSearch"){
            this.setState({plantValue:newValue})
        // setLoaderMessage("No Records Found.")
        // this.props.serachPlant({plant: newValue, option: props.plantData.plantRadioButton, category: categoryId})
        this.setState({newValue});
        }
        if(event.target.name==="supplierSearch"){
            this.setState({supplierValue:newValue})
        // setLoaderMessage("No Records Found.")
        // this.props.serachPlant({plant: newValue, option: props.plantData.plantRadioButton, category: categoryId})
        this.setState({newValue});
        }
       
        
    };

   
     getPlantSuggestions = value => {
         console.log(value)
         let plantData = this.props.plantData.plantData
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;
          console.log(plantData)
            return inputLength === 0 ? [] : plantData.filter(lang =>
              lang.genus.toLowerCase().includes(inputValue)
            );
        };
     onPlantSuggestionsFetchRequested = ({value}) => {  
           
        let plantSuggestions = this.getPlantSuggestions(value)
        console.log(plantSuggestions)   
        this.setState({plantSuggestions})
    };
    onPlantSuggestionsClearRequested = () => {
        this.setState({plantSuggestions:[]});
      };
       renderPlantSuggestion = (plantSuggestions) => (
        <span>
          {plantSuggestions.genus}
        </span>
    );
    getSupplierSuggestions = value => {
        console.log(value)
        let supplierData = this.props.supplierData
       const inputValue = value.trim().toLowerCase();
       const inputLength = inputValue.length;
           return inputLength === 0 ? [] : supplierData.filter(lang =>
             lang.supplier_name.toLowerCase().includes(inputValue)
           );
       };
    onSupplierSuggestionsFetchRequested = ({value}) => {  
           
        let supplierSuggestions = this.getSupplierSuggestions(value)
        console.log(supplierSuggestions)   
        this.setState({supplierSuggestions})
    };
    onSupplierSuggestionsClearRequested = () => {
        this.setState({supplierSuggestions:[]});
      };
    
    renderSupplierSuggestion = (supplierSuggestions) => (
        <span>
            {supplierSuggestions.supplier_name}
        </span>
        );
      

    render(){
        let pageCount =0;
        let pageNumber = 0;
        let totalLength = 0;
        let plantPerPage =0;
        let pagesVisited = 0;
        let displayPOList = []
        const getPlantSuggestionValue = ""
        const getSupplierSuggestionValue = ""

        let {plantValue,supplierValue} = this.state
        // suggestion => suggestion.genus;
        let {openPoCount}= this.props.purchaseOrderListData
        const inputPlantProps = {
            placeholder: 'Plant Name',
            value:plantValue,
            name:"plantSearch",
            // className:"searchInput",
            className:" form-control btn btn-search",
            id:"add-icon-search",
            style: {position:"relative",border:"1px solid gray",borderRadius:3,textAlign:"left",paddingLeft:"10%",paddingTop:6,height:"41.5px",fontSize:"15px",textDecoration:"none"},
            onChange: this.handleChange
        };
        const inputSupplierProps = {
            placeholder: 'Supplier Name',
            value:supplierValue,
            name:"supplierSearch",
            // className:"searchInput",
            className:" form-control btn btn-search",
            id:"add-icon-search",
            style: {position:"relative",border:"1px solid gray",borderRadius:3,textAlign:"left",paddingLeft:"10%",paddingTop:6,height:"41.5px",fontSize:"15px",textDecoration:"none"},
            onChange: this.handleChange
        };
    return (        
        <div>
            <div class="contentHeader bg-white d-md-flex justify-content-between align-items-center">
				<h1 class="page-header mb-0"><img src="assets/img/PurchaseOrders-ic-lg-green.svg" alt=""/> Purchase Orders</h1>
				<div class="topbarCtrls mt-3 mt-md-0">
                <Link to="/PurchaseOrder">
                    <a href="#" class="btn ml-2">
                        <span class="d-flex align-items-center text-left">
                            <img src="assets/img/PurchaseOrders-sm.svg" alt=""/>
                            <span class="ml-2"><b>New P.O.</b></span>
                        </span>
                    </a>
                    </Link>
				</div>
			</div>
            <div class="px-md-3 mt-3">
            <div class="bg-white px-3 py-3 my-3 cardShadow">
                <div class="row align-items-center">
                    <div class="col-md-12 col-lg-6 d-md-flex justify-content-between editCustSec">
                        <div>
                            <label>Open P.O.'s</label>
                            <h1>{openPoCount}</h1>
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
                                        <label><b>Status Levels</b></label>
                                        <div class="d-flex flex-wrap mt-2">
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="open" 
                                                name="open"
                                                onChange={this.handleClickCheckBox} />
                                                <label class="custom-control-label" for="open" >Open</label>
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
                                        <label><b>Date Range</b></label>
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
                                                {/* <DatePicker 
                                                // onChange={onChange} value={value} 
                                                /> */}
                                                <input type="date" className="dateDesign"  />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row form-group">
                                    <div class="col-md-4 col-lg-4">
                                        <label><b>Supplier</b></label>
                                        <div class="searchInput">
                                            <button type="submit" class="btn btn-search">
                                                <img src="assets/img/search.svg" alt=""/>
                                            </button>
                                            <Autosuggest
                                                    suggestions={this.state.supplierSuggestions}
                                                    onSuggestionsFetchRequested={this.onSupplierSuggestionsFetchRequested}
                                                    onSuggestionsClearRequested={this.onSupplierSuggestionsClearRequested}
                                                    getSuggestionValue={getSupplierSuggestionValue}
                                                    renderSuggestion={this.renderSupplierSuggestion}
                                                    inputProps={inputSupplierProps}
                                                    theme={{suggestionsContainerOpen:this.state.supplierSuggestions.length>5?"yes":"no",suggestionsContainer:this.state.supplierSuggestions.length>5?"yes1":"no1",
                                                    suggestionsList:this.state.supplierSuggestions.length>5?"yes":"no1"}}
                                                    className="form-control"
                                                />
                                            {/* <input type="text" class="form-control" id="supplierFilter"  onChange={this.handleFilert}  placeholder="Search Supplier Name/Number"/> */}
                                        </div>
                                    </div>
                                  
                                    <div class="col-md-4 col-lg-4 ">
                                        <label><b>Job Description</b></label>
                                        <div class="searchInput">
                                            <button type="submit" class="btn btn-search">
                                                <img src="assets/img/search.svg" alt=""/>
                                            </button>
                                            <input type="text" class="form-control" id="jobDescription" onChange={this.handleFilert}  placeholder="Search Job Description"/>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-lg-4 ">
                                        <label><b>Order#</b></label>
                                        <div class="searchInput">
                                            <button type="submit" class="btn btn-search">
                                                <img src="assets/img/search.svg" alt=""/>
                                            </button>
                                            <input type="text" class="form-control" id="order" onChange={this.handleFilert}  placeholder="Search Order"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="row form-group mb-2">
                                    <div class="col-md-4 col-lg-4">
                                        <label><b>Search Plants or Products</b></label>
                                        <div class="searchInput">
                                            <button type="submit" class="btn btn-search">
                                                <img src="assets/img/search.svg" alt=""/>
                                            </button>
                                            <Autosuggest
                                                    suggestions={this.state.plantSuggestions}
                                                    onSuggestionsFetchRequested={this.onPlantSuggestionsFetchRequested}
                                                    onSuggestionsClearRequested={this.onPlantSuggestionsClearRequested}
                                                    getSuggestionValue={getPlantSuggestionValue}
                                                    renderSuggestion={this.renderPlantSuggestion}
                                                    inputProps={inputPlantProps}
                                                    theme={{suggestionsContainerOpen:this.state.plantSuggestions.length>5?"yes":"no",suggestionsContainer:this.state.plantSuggestions.length>5?"yes1":"no1",
                                                    suggestionsList:this.state.plantSuggestions.length>5?"yes":"no1"}}
                                                    className="form-control"
                                                />
                                            {/* <input type="text" class="form-control" placeholder="Search Plants or Products" id="plantProduct" onChange={this.handleFilert} /> */}
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-lg-4 ">
                                        <label><b>SKU</b></label>
                                        <div class="searchInput">
                                            <button type="submit" class="btn btn-search">
                                                <img src="assets/img/search.svg" alt=""/>
                                            </button>
                                            <input type="text" class="form-control" id="sku" onChange={this.handleFilert}  placeholder="Search Plants or Products"/>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-lg-4 ">
                                        <label><b>Supplier Order#</b></label>
                                        <div class="searchInput">
                                            <button type="submit" class="btn btn-search">
                                                <img src="assets/img/search.svg" alt=""/>
                                            </button>
                                            <input type="text" class="form-control" id="supplierOrder"  onChange={this.handleFilert}  placeholder="Search SKU"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="row form-group">
                                    <div class="col-md-12 col-lg-12 text-right">
                                        <a href="#">Reset</a>
                                    </div>
                                </div>

                                
                                       <PurchaseOrderTable/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
}


const mapStateToProps = (state)=> (
    {
        purchaseOrderListData:state.purchaseOrderManagementData,
        plantData:state.plantData,
        supplierData:state.supplierData.supplierList
    }
)


export default connect(mapStateToProps,{
    getAllPlantAction,getAllSuppliers,
    getPoSupplierFilter,getPoJobDescription,getPoOrderFilter,getPoPlantProductFilter,getPoSkuFilter,getSupplierOrderFilter
})(PurchaseOrders)