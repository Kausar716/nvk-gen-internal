import React, { useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import DatePicker from 'react-date-picker';
import {connect} from "react-redux";
import TablePagination from '../Pagination/index';
import {getAllCustomer,handleRadioFilter,handleSearchFilter,handleAlphabetFilter, setPageNumberPo,handleSearchFilterByAlpha, handleAplhabetFilterBySN} from "../../actions/purchaseOrderActions";
// import initialDetails from './initialDetails';
import './style.css'
import { Link } from "react-router-dom";
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

            purchaseOrderTable:[
                {status:"closed", poNumber:"JSMITH-012301-1", suppliearName:"John Smith landscaping", 
        supplierOrder:"1024275", createdBy:"John Smith", orderDate:"20/05/2021", expectedDate:"20/05/12021",
         dispatch:"Pickup", amount:"6,085.00"},

         {status:"closed", poNumber:"WILLSMITH-012301-1", suppliearName:"WILL Smith landscaping", 
         supplierOrder:"2024275", createdBy:"Will Smith", orderDate:"20/06/2021", expectedDate:"20/08/2021",
          dispatch:"Pickup", amount:"6,085.00" },

          {status:"open", poNumber:"Scena-012301-1", suppliearName:"John Scena landscaping", 
          supplierOrder:"1024275", createdBy:"John Scena", orderDate:"20/05/12021", expectedDate:"20/05/12021",
           dispatch:"Delivery", amount:"6,085.00" },

           {status:"Draft", poNumber:"Jason-012301-1", suppliearName:"Jason Smith landscaping", 
           supplierOrder:"24275", createdBy:"Jason Smith", orderDate:"20/05/2021", expectedDate:"20/09/2021",
            dispatch:"Pickup", amount:"6,085.00" },

            {status:"closed", poNumber:"Dweny-012301-1", suppliearName:"Dweny Smith landscaping", 
            supplierOrder:"1024275", createdBy:"Dweny Smith", orderDate:"20/02/12021", expectedDate:"20/05/12021",
             dispatch:"Pickup", amount:"6,085.00" },

             {status:"closed", poNumber:"Robert Jr-012301-1", suppliearName:"Robert Jr Smith landscaping", 
             supplierOrder:"1024275", createdBy:"Robert Jr Smith", orderDate:"20/05/12021", expectedDate:"20/05/12021",
              dispatch:"Delivery", amount:"6,085.00" }
            ]
        }
    }
    //const [value, onChange] = useState(new Date());
   //NEW 
    // onSearchInputChange = (e) => {
    //     this.setState({searchInput: e.target.value})
    //   }

 

 // <div class="form-group row mt-4">
        //     <div class="col-md-12 col-lg-12">
        //     <ul class="list-unstyled searchAlpha d-flex flex-wrap">
        //     <li> 
        //         <button key={i} class="active" onClick={this.onAlphabetClick} value={String.fromCharCode(i)}>{String.fromCharCode(i)}</button> 
        //          </li>
                
        //             </ul>
        //         </div>
        //     </div>


   


     // checkOperation=(checkedData, element)=>(checkedData ? checkedData.filter(newCheck => newCheck.status==="open") : "");





 elementContainsSearchString2 = (searchInput, element) => (searchInput ? element.supplierOrder.toLowerCase().includes(searchInput.toLowerCase()) : false);

      elementContainsSearchString = (searchInput, element) => (searchInput ? element.suppliearName.toLowerCase().includes(searchInput.toLowerCase()) || element.poNumber.toLowerCase().includes(searchInput.toLowerCase()) || element.supplierOrder.toLowerCase().includes(searchInput.toLowerCase()) : false);


    //   filterItems = (initialDetails) => {
    //     let result = [];
    //     const { searchInput,alphabet , checkedData} = this.state;
    //     if(initialDetails &&  (searchInput || alphabet)) {
    //         result = initialDetails.filter((element) => (element.suppliearName.charAt(0).toLowerCase() === alphabet.toLowerCase()) || 
    //         this.elementContainsSearchString(searchInput, element) 
    //         //  || this.checkOperation(checkedData,element)
    //         );
    //       }

    //     else if( initialDetails && checkedData){

    //         result = initialDetails.filter((item)=>item.status)

    //     }
    //     else {
    //       result = initialDetails  || [];
    //     }

    //     result = result.map((item)=>(
    //              item
                 
        
    //     ))
       

    //     return result;
    //   }

//END
     handleAlphabetFilter = (e)=>{

        this.setState({selectedAlpha:e.target.id})
       // this.setState({selectedAlpha:e.target.id})
        this.props.handleSearchFilterByAlpha(e.target.id, this.state.purchaseOrderTable)

    }

    //console.log("purchaseOrderTable", purchaseOrderTable)
    render(){
        //let purchaseOrderData = [];

        console.log("abcd", this.state.checkedData)
        let pageCount =0;
        let pageNumber = 0;
        let totalLength = 0;
        let plantPerPage =0;
        let pagesVisited = 0;
        let displayPOList = []
        let {openPoCount}= this.props.purchaseOrderListData


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
                                            <input type="text" class="form-control"  onChange={this.onSearchInputChange2}  placeholder="Search Supplier Name/Number"/>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-lg-4 ">
                                        <label><b>Job Description</b></label>
                                        <div class="searchInput">
                                            <button type="submit" class="btn btn-search">
                                                <img src="assets/img/search.svg" alt=""/>
                                            </button>
                                            <input type="text" class="form-control" placeholder="Search Job Description"/>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-lg-4 ">
                                        <label><b>Order#</b></label>
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
                                        <label><b>Search Plants or Products</b></label>
                                        <div class="searchInput">
                                            <button type="submit" class="btn btn-search">
                                                <img src="assets/img/search.svg" alt=""/>
                                            </button>
                                            <input type="text" class="form-control" placeholder="Search Plants or Products"/>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-lg-4 ">
                                        <label><b>SKU</b></label>
                                        <div class="searchInput">
                                            <button type="submit" class="btn btn-search">
                                                <img src="assets/img/search.svg" alt=""/>
                                            </button>
                                            <input type="text" class="form-control" onChange={this.onSearchInputChange2} placeholder="Search Plants or Products"/>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-lg-4 ">
                                        <label><b>Supplier Order#</b></label>
                                        <div class="searchInput">
                                            <button type="submit" class="btn btn-search">
                                                <img src="assets/img/search.svg" alt=""/>
                                            </button>
                                            <input type="text" class="form-control"  onChange={this.onSearchInputChange3} placeholder="Search SKU"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="row form-group">
                                    <div class="col-md-12 col-lg-12 text-right">
                                        <a href="javascript:;">Reset</a>
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
    // console.log(state.customerReducer.payload)
    {
        purchaseOrderListData:state.purchaseOrderManagementData,
    }

)


export default connect(mapStateToProps,{handleSearchFilterByAlpha, setPageNumberPo})(PurchaseOrders)