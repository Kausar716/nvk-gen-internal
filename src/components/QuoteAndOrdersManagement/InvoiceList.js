import React, { useEffect, useState } from 'react'
import DatePicker from 'react-date-picker';
import 'react-tabs/style/react-tabs.css';
import {connect} from "react-redux";
import { Link } from "react-router-dom";
import TablePagination from '../Pagination/index';
import Autosuggest from 'react-autosuggest';
import {deleteCustomer,getAllCustomer,handleExchangeData,getAllCustomerType,getCustomerById,setPageNumber,handleRadioFilter,handleSearchFilter,handleAplhabetFilter,typeOfActionShow} from "../../actions/customerSettingAction";

 function InvoiceList(props) {
    const [reStock, setReStock] = useState();
    const [suggestions, setSuggestions] = useState([]);
    const [value, setValue] = useState("");
    const [searchValue, setSearchValue] = useState("");
    useEffect (()=>{
        props.getAllCustomer()

    },[reStock])

    const onSuggestionsFetchRequested = ({ value }) => {
        // this.setState({suggestions:getSuggestions(value)});
        setSuggestions(getSuggestions(value))
       // setSuggestions(getSuggestions(value));
   };
   const renderSuggestion = suggestion => (
    <span>
      {suggestion.name}
    </span>
    );
   const getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
      
        return inputLength === 0 ? [] : props.customerData.customerList.filter(lang =>
          lang.name.toLowerCase().includes(inputValue)
        );
    };
   const onChange = (event, { newValue }) => {
        setValue(newValue)
        setSearchValue(newValue)
        props.handleSearchFilter(newValue,"none")
    };
   const getSuggestionValue = suggestion =>suggestion.name;
   // Autosuggest will call this function every time you need to clear suggestions.
   const onSuggestionsClearRequested = () => {
   //   setSuggestions([]);
   setSuggestions([])
   };
   const inputProps = {
    placeholder: 'Customer Name',
//    [this.state.value],
    value:value,
    // className:"searchInput",
    className:" form-control ",
    style: {border:"1px solid gray",borderRadius:3,textAlign:"left",paddingLeft:"10%",border:"1px solid lightgray",marginTop:"-7%",paddingTop:8,height:"41.5px",fontSize:"15px",textDecoration:"none",fontWeight:"380"},
    onChange: onChange,
    dataId: 'my-data-id',
};

    return (
        <div >
            <div class="contentHeader bg-white d-md-flex justify-content-between align-items-center">
				<h1 class="page-header mb-0"><img src="assets/img/customerQuotesAndOrders-lg-green.svg" alt="" class="mr-2"/>Invoice List</h1>
			</div>
            <div class="px-md-3 mt-3">
                <div class="px-3 py-3 mb-3 bg-white cardShadow">
                    <div class="row align-items-center purchaseOrderTabHead">
                        <div class="col-md-6 d-flex align-items-center">
                            <div>
                                <div class=" d-lg-flex align-items-center">Auto Export Emails
                                    <div class="switcher ml-lg-2 d-block d-lg-inlline-block mt-2 mt-md-0">
                                        <input type="checkbox" name="switcher_checkbox_2" checked="checked" id="switcher_checkbox_2" value="2"/>
                                        <label for="switcher_checkbox_2"></label>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex text-nowrap ml-3 mb-0 bdrLeft">
                                <div class="mr-3 text-center">
                                    <h5 class="mb-0">Next Export Batch Count</h5>
                                    <h3 class="batchCountLbl">7</h3>
                                    <div><a href="" class="f-s-14">View All</a></div>
                                </div>
                                <div class="mr-3 bdrLeft">
                                    <h5>Last Export #</h5>
                                    <label class="text-blue">002961</label>
                                </div>  
                            </div>
                        </div>
                        <div class="col-md-6 d-flex justify-content-md-end  align-items-center">
                            <a href="" class="ml-4"><img src="assets/img/csv-export.svg" alt=""/></a>
                            <a href="" class="ml-2"><img src="assets/img/pdf-export.svg" alt=""/></a>
                        </div>
                    </div>
                </div>
                <div class="row">
					<div class="col-xl-12 col-md-12">
						<div class="bg-white p-15">
                            <div class="form-group row align-items-end q">
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
                                        <div class="custom-control custom-radio ml-3">
                                            <input type="radio" id="customRadio3" name="customRadio" class="custom-control-input" />
                                            <label class="custom-control-label" for="customRadio3">Select Range</label>
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
                            <div class="row">
                                    <div class="col-md-4 col-lg-4">
                                    <label for="plantSearch">Search Customer</label>
                                    <div className="searchInput" style={{marginTop:25}}>
                                    <Autosuggest
                                            suggestions={suggestions}
                                            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                                            onSuggestionsClearRequested={onSuggestionsClearRequested}
                                            getSuggestionValue={getSuggestionValue}
                                            renderSuggestion={renderSuggestion}
                                            inputProps={inputProps}
                                            
                                        

                                            />
                                        </div>

                                    </div>
                                    <div class="col-md-4 col-lg-4">
                                    <label for="plantSearch">Search Order</label>
                                    <div className="searchInput" >
                                    <div className="searchInput" style={{marginTop:25}}>
                                    <Autosuggest
                                            suggestions={suggestions}
                                            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                                            onSuggestionsClearRequested={onSuggestionsClearRequested}
                                            getSuggestionValue={getSuggestionValue}
                                            renderSuggestion={renderSuggestion}
                                            inputProps={inputProps}
                                            

                                            />
                                        </div>

                                    </div>
                                    </div>
                                    <div class="col-md-4 col-lg-4">
                                    <label for="plantSearch">Search Invoice</label>
                                    <div className="searchInput" >
                                    <div className="searchInput" style={{marginTop:25}}>
                                    <Autosuggest
                                            suggestions={suggestions}
                                            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                                            onSuggestionsClearRequested={onSuggestionsClearRequested}
                                            getSuggestionValue={getSuggestionValue}
                                            renderSuggestion={renderSuggestion}
                                            inputProps={inputProps}
                                            

                                            />
                                        </div>

                                    </div>
                            </div>
                            </div>
                            <div style={{clear: 'both'}}></div>
                            {/* <div class="form-group row align-items-end q">
                                <div class="col-md-4 col-lg-4" style={{display:"inline-block"}}>
                                    <label for="plantSearch">Search Customer</label>
                                    <div className="searchInput" >
                                           
                                       
                                               {/* <img src="assets/img/search.svg" alt="" style={{position:"absolute", left:"14px",top:"12px"}}/> */}
                                               {/* </div> */}
                                {/* </div>
                                <div class="col-md-4 col-lg-4" style={{display:"inline-block"}}>
                                    <label for="plantSearch">Search Order</label>
                                    <div class="searchInput">
                                        <button type="submit" class="btn btn-search">
                                            <img src="assets/img/search.svg" alt=""/>
                                        </button>
                                        <input type="text" class="form-control" placeholder="Search Order"/>
                                    </div>
                                </div>
                                <div class="col-md-4 col-lg-4" style={{display:"inline-block"}}>
                                    <label for="plantSearch">Search Invoice</label>
                                    <div class="searchInput">
                                        <button type="submit" class="btn btn-search">
                                            <img src="assets/img/search.svg" alt=""/>
                                        </button>
                                        <input type="text" class="form-control" placeholder="Search Invoice Number"/>
                                    </div>
                                </div>
                            </div> */} 
                            <div class="form-group row align-items-end">
                                <div class="col-md-12 text-right">
                                    <a href="">Reset</a>
                                </div>
                            </div>
                            <div className="row_1 mt-4">
                                        <div style={{float:"left",marginBottom:15}}>
                                            {/* <div> */}
                                                <label className="greenText">{"Showing 1 to 5 of 6"  }</label>
                                            {/* </div> */}
                                        </div>
                                        <div style={{float:"left",marginBottom:15}}>
                                            <label className="greenText">Show</label>
                                                <select >
                                                    <option>5</option>
                                                    <option>10</option>
                                                    <option>15</option>
                                                </select>
                                                
                                        </div>
                                        <div style={{float:"right",marginBottom:15}}>
                                            <TablePagination  pageCount={5} pageNumber={0+1}/>
                                        </div>
                               
                            </div>
                            <div class="form-group row mt-0">
                                <div class="col-md-12 col-lg-12">
                                    <ul class="list-unstyled searchAlpha d-flex flex-wrap">
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
                                                <th class="text-nowrap">
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input" id="selectAll" />
                                                        <label class="custom-control-label" for="selectAll"></label>
                                                    </div>
                                                </th>
                                                <th class="text-nowrap">Invoice #</th>
                                                <th class="text-nowrap">Adjusted #</th>
                                                <th class="text-nowrap">Order #</th>
                                                <th class="text-nowrap">Customer Name</th>
                                                <th class="text-nowrap">Invoice Date</th>
                                                <th class="text-nowrap">Dispatch</th>
                                                <th class="text-nowrap text-right">Amount</th>
                                                <th class="text-nowrap text-center">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input" id="chk1" />
                                                        <label class="custom-control-label" for="chk1"></label>
                                                    </div>
                                                </td>
                                                <td><a href="#">0023555</a></td>
                                                <td>-</td>
                                                <td>00234-2000485</td>
                                                <td>John Smith Landscaping</td>
                                                <td>20/08/2020</td>
                                                <td>Delivery</td>
                                                <td class="text-right">85.00</td>
                                                <td class="text-center">
                                                    <span class="mx-1">
                                                        <Link to="/OrderAdjusted">
                                                            <a href="javascript:;">
                                                                <img src="assets/img/setting-ic-sm-green.svg" alt=""/>
                                                            </a>
                                                        </Link>
                                                    </span>
                                                    <span class="mx-1">
                                                        <a href="javascript:;">
                                                            <img src="assets/img/csv-ic-sm-blue.svg" alt=""/>
                                                        </a>
                                                    </span>
                                                    <span class="mx-1">
                                                        <a href="javascript:;">
                                                            <img src="assets/img/copy-ic-sm-blue.svg" alt=""/>
                                                        </a>
                                                    </span>
                                                    <span class="mx-1">
                                                        <a href="javascript:;">
                                                            <img src="assets/img/search-ic-sm-blue.svg" alt=""/>
                                                        </a>
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input" id="chk1" />
                                                        <label class="custom-control-label" for="chk1"></label>
                                                    </div>
                                                </td>
                                                <td><a href="#">0023555</a></td>
                                                <td>-</td>
                                                <td>00234-2000485</td>
                                                <td>John Smith Landscaping</td>
                                                <td>20/08/2020</td>
                                                <td>Delivery</td>
                                                <td class="text-right">85.00</td>
                                                <td class="text-center">
                                                    <span class="mx-1">
                                                        <Link to="/OrderAdjusted">
                                                            <a href="javascript:;">
                                                                <img src="assets/img/setting-ic-sm-green.svg" alt=""/>
                                                            </a>
                                                        </Link>
                                                    </span>
                                                    <span class="mx-1">
                                                        <a href="javascript:;">
                                                            <img src="assets/img/csv-ic-sm-blue.svg" alt=""/>
                                                        </a>
                                                    </span>
                                                    <span class="mx-1">
                                                        <a href="javascript:;">
                                                            <img src="assets/img/copy-ic-sm-blue.svg" alt=""/>
                                                        </a>
                                                    </span>
                                                    <span class="mx-1">
                                                        <a href="javascript:;">
                                                            <img src="assets/img/search-ic-sm-blue.svg" alt=""/>
                                                        </a>
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input" id="chk1" />
                                                        <label class="custom-control-label" for="chk1"></label>
                                                    </div>
                                                </td>
                                                <td><a href="#">0023555</a></td>
                                                <td>-</td>
                                                <td>00234-2000485</td>
                                                <td>John Smith Landscaping</td>
                                                <td>20/08/2020</td>
                                                <td>Delivery</td>
                                                <td class="text-right">85.00</td>
                                                <td class="text-center">
                                                    <span class="mx-1">
                                                        <Link to="/OrderAdjusted">
                                                            <a href="javascript:;">
                                                                <img src="assets/img/setting-ic-sm-green.svg" alt=""/>
                                                            </a>
                                                        </Link>
                                                    </span>
                                                    <span class="mx-1">
                                                        <a href="javascript:;">
                                                            <img src="assets/img/csv-ic-sm-blue.svg" alt=""/>
                                                        </a>
                                                    </span>
                                                    <span class="mx-1">
                                                        <a href="javascript:;">
                                                            <img src="assets/img/copy-ic-sm-blue.svg" alt=""/>
                                                        </a>
                                                    </span>
                                                    <span class="mx-1">
                                                        <a href="javascript:;">
                                                            <img src="assets/img/search-ic-sm-blue.svg" alt=""/>
                                                        </a>
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input" id="chk2" />
                                                        <label class="custom-control-label" for="chk2"></label>
                                                    </div>
                                                </td>
                                                <td><a href="#">0023555</a></td>
                                                <td><a href="#">0023963</a></td>
                                                <td>00234-2000409</td>
                                                <td>John Smith Landscaping</td>
                                                <td>19/08/2020</td>
                                                <td>Delivery</td>
                                                <td class="text-right">125.02</td>
                                                <td class="text-center">
                                                <span class="mx-1">
                                                        <Link to="/OrderAdjusted">
                                                            <a href="javascript:;">
                                                                <img src="assets/img/setting-ic-sm-green.svg" alt=""/>
                                                            </a>
                                                        </Link>
                                                    </span>
                                                    <span class="mx-1">
                                                        <a href="javascript:;">
                                                            <img src="assets/img/csv-ic-sm-blue.svg" alt=""/>
                                                        </a>
                                                    </span>
                                                    <span class="mx-1">
                                                        <a href="javascript:;">
                                                            <img src="assets/img/copy-ic-sm-blue.svg" alt=""/>
                                                        </a>
                                                    </span>
                                                    <span class="mx-1">
                                                        <a href="javascript:;">
                                                            <img src="assets/img/search-ic-sm-blue.svg" alt=""/>
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
				</div>
            </div>
        </div>
      
    )
}
const mapStateToProps = (state)=>(
    {
        customerData:state.customerReducer
    }
)
export default connect(mapStateToProps,{getAllCustomer,handleSearchFilter
     





})(InvoiceList)