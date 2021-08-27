import React, { useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import DatePicker from 'react-date-picker';
import {connect} from "react-redux";
import TablePagination from '../Pagination/index';
import {setPageNumberQo,handleSearchFilterByAlpha,getQuoteOrderList, 
      handleAplhabetFilterBySN} from "../../actions/quoteOrderManagementAction";
import initialDetailsQL from './initialDetailsQL';
import '../PurchaseOrderManagement/style.css';
import { Link } from "react-router-dom";
import './styles.css';
//import Autocomplete from '@material-ui/lab/Autocomplete';

class QuoteList extends React.Component {

    constructor(){
        super()
        this.state={
            addCustomerToggle:false,
            customerListStatus:"active",
            editCustmerToggle:false,
            customerObject:{},
            pageSize:5,
           // alphabets:["A", "B", "C", "D", "E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
            selectedAlpha:"All",
            searchValue:"",
            radioFilter:"active",
            searchInput:'', 
            checkedData:[],
            alphabet:'',
            button: true,
           
            alphabetSelect:'',
            TotalPurchaseOder:39,

            quoteOrderList:[
                {status:"OPEN", orderNumber:"JSMITH-012301-1", suppliearName:"John Smith landscaping", 
                supplierOrder:"1024275", createdBy:"John Smith", orderDate:"20/05/2021", expectedDate:"20/05/12021",
                 dispatch:"Pickup", amount:"6,085.00"},
            
                 {status:"CLOSED", orderNumber:"WILLSMITH-012301-1", suppliearName:"WILL Smith landscaping", 
                 supplierOrder:"2134386", createdBy:"Will Smith", orderDate:"20/06/2021", expectedDate:"20/08/2021",
                  dispatch:"Pickup", amount:"7,085.00" },
            
                  {status:"READY", orderNumber:"Scena-012301-1", suppliearName:"John Scena landscaping", 
                  supplierOrder:"3235386", createdBy:"John Scena", orderDate:"20/05/12021", expectedDate:"20/05/12021",
                   dispatch:"Delivery", amount:"4,685.00" },
            
                   {status:"RESERVE", orderNumber:"Jason-012301-1", suppliearName:"Jason Smith landscaping", 
                   supplierOrder:"3525", createdBy:"Jason Smith", orderDate:"20/05/2021", expectedDate:"20/09/2021",
                    dispatch:"Pickup", amount:"7,123.00" },
            
                    {status:"PICKING", orderNumber:"Dweny-012301-1", suppliearName:"Dweny Smith landscaping", 
                    supplierOrder:"1249", createdBy:"Dweny Smith", orderDate:"20/02/12021", expectedDate:"20/05/12021",
                     dispatch:"Pickup", amount:"9,089.00" },
            
                     {status:"QUOTE", orderNumber:"Robert Jr-012301-1", suppliearName:"Robert Jr Smith landscaping", 
                     supplierOrder:"57901", createdBy:"Robert Jr Smith", orderDate:"20/05/12021", expectedDate:"20/05/12021",
                      dispatch:"Delivery", amount:"12,012.00" }
            ],
            initialDetailsQL:[],
            searchString: "",
            orderSearch:"",
            isChecked:false,

            suggestions: [],
            text: ""
        }
    }
    //const [value, onChange] = useState(new Date());
   //NEW 
    // onSearchInputChange = (e) => {
    //     this.setState({searchInput: e.target.value})
    //   }

    componentDidMount=()=> {
        this.setState({
            initialDetailsQL: initialDetailsQL
        });
        this.refs.search.focus();
        this.refs.ordSearch.focus();
      }


      handleChange=()=> {
        this.setState({
          searchString: this.refs.search.value,
        });
      }

      onTextChange = e => {
          //debugger
        let items = this.state.initialDetailsQL;
        let supName = items.map((e)=>e.suppliearName)
        console.log("supName", supName)
        const val = e.target.value;
        let suggestions = [];
        if (val.length > 0) {
          const regex = new RegExp(`^${val}`, "i");
          suggestions = supName.sort().filter(v => regex.test(v));
        }
        this.setState({ suggestions, searchString: val });
      };

      suggestionSelected=(value)=> {
        this.setState({
            searchString: value,
          suggestions: []
        });
      }

      renderSuggestions() {
        const { suggestions } = this.state;
        if (suggestions.length === 0) {
          return null;
        }
        return (
          <ul>
            {suggestions.map(item => (
              <li onClick={() => this.suggestionSelected(item)}>{item}</li>
            ))}
          </ul>
        );
      }



      handleOrdChange=()=>{
        this.setState({
            orderSearch:this.refs.ordSearch.value
          });
      }

    //   handleChange=()=> {
    //     this.setState({
    //       searchString: this.refs.search.value
    //     });
    //   }



    onSearchInputChange2 = (e) => {
       // debugger;
        this.setState({searchInput: e.target.value});
      }

      onSearchInputChange3 = (e) => {
        this.setState({searchInput: e.target.value});
      }


    onSearchInputChange = (e) => {
        this.setState({alphabet: e.target.value,alphabetSelect:''})
        this.setState({
          button:!this.state.button
        })
      }


      handleClickCheckBox = (e)=>{


        if(e.target.id==="OPEN"){
            debugger
            this.setState({
                isChecked: !this.state.isChecked,
              });


              if(!this.state.isChecked){
                let initialDetailsQl = this.state.initialDetailsQL
                let newCheckedData = initialDetailsQl.filter(newCheck => newCheck.status===e.target.name)
    
                this.setState({checkedData: newCheckedData})
              }
              
             
  

            // let checked = e.target.name
            // let initialDetailsQl = this.state.initialDetailsQL
            // let newCheckedData = initialDetailsQl.filter(newCheck => newCheck.status===e.target.name)
            //finalCMSettingsPermissions.map(user=>{return {...user, isChecked:checked}});
            //let newCheckedData = initialDetailsQl.filter(newCheck =>{return{ ...newCheck.status===e.target.name, isChecked:checked}})

           // this.setState({checkedData: newCheckedData})
        }


        else if(e.target.id==="CLOSED"){
            let initialDetailsQl = this.state.initialDetailsQL
            let newCheckedData = initialDetailsQl.filter(newCheck => newCheck.status===e.target.name)

            this.setState({checkedData: newCheckedData})

        }


        console.log("iddddddd", e.target.id, e.target.value)

       
        //this.setState({alphabet: newCheckedData})
        
        // console.log("e1",checkedData);
      }



      paginationChange =(event, page)=>{
        // alert("hg")
        this.props.setPageNumberQo(page-1)
    }
 // <div class="form-group row mt-4">
        //     <div class="col-md-12 col-lg-12">
        //     <ul class="list-unstyled searchAlpha d-flex flex-wrap">
        //     <li> 
        //         <button key={i} class="active" onClick={this.onAlphabetClick} value={String.fromCharCode(i)}>{String.fromCharCode(i)}</button> 
        //          </li>
                
        //             </ul>
        //         </div>
        //     </div>


      onAlphabetClick = (e) => {
         // debugger;
         // e.preventdefault();
        // this.setState({alphabet: e.target.value})  this.refs.buttonClik.value
        this.setState({alphabet:e.target.value, alphabetSelect:e.target.value, button:false})
        console.log("alphabet", this.state.alphabet, this.state.alphabetSelect)
      }
      prepareAlphabets = () => {
         
        let result = [];
       
        for(let i=65; i<91; i++) {
           
          result.push(
            // <button type="button" key={i} onClick={this.onAlphabetClick} value={String.fromCharCode(i)} >{String.fromCharCode(i)}</button>
            <button type="button" className={ this.state.alphabetSelect===String.fromCharCode(i)?" buttonStyles selected_alphabet":"unselected_aplphabet buttonStyles"}  key={i} onClick={this.onAlphabetClick}  ref="buttonClik" value={String.fromCharCode(i)}>{String.fromCharCode(i)}</button>
          )
        }
       

        return result;

       
      }


     // checkOperation=(checkedData, element)=>(checkedData ? checkedData.filter(newCheck => newCheck.status==="open") : "");





 elementContainsSearchString2 = (searchInput, element) => (searchInput ? element.supplierOrder.toLowerCase().includes(searchInput.toLowerCase()) : false);

      elementContainsSearchString = (searchInput, element) => (searchInput ? element.suppliearName.toLowerCase().includes(searchInput.toLowerCase()) || element.poNumber.toLowerCase().includes(searchInput.toLowerCase()) || element.supplierOrder.toLowerCase().includes(searchInput.toLowerCase()) : false);


      filterItems = (initialDetailsQL) => {
         // debugger;
        let result = [];
        const { searchInput,alphabet , checkedData} = this.state;
        if(initialDetailsQL &&  (searchInput || alphabet)) {
            result = initialDetailsQL.filter((element) => ( element.suppliearName.charAt(0).toLowerCase() === alphabet.toLowerCase()) || 
            this.elementContainsSearchString(searchInput, element) );
           // result = initialDetailsQL.filter((el) => (el.suppliearName.charAt(0).toLowerCase() === alphabet.toLowerCase()) || this.elementContainsSearchString(searchInput, el) );
          }

        // else if( initialDetailsQL && checkedData){

        //     result = initialDetailsQL.filter((item)=>item.status)

        // }
        else {
          result = initialDetailsQL || [];
        }

        result = result.map((item)=>(item))
       
        return result;
      }

//END
     handleAlphabetFilter = (e)=>{
        this.setState({selectedAlpha:e.target.id})
       // this.setState({selectedAlpha:e.target.id})
        this.props.handleSearchFilterByAlpha(e.target.id, this.state.quoteOrderList)

    }



   // console.log("quoteOrderList", this.props.quoteOrderData)
    render(){
        console.log("alphabetInrender", this.state.checkedData, this.state.isChecked)
        let _users = this.state.initialDetailsQL;
        let search = this.state.searchString.trim().toLowerCase();
        let orderSearch = this.state.orderSearch.trim().toLowerCase();
        let alphaVal = this.state.alphabetSelect.trim().toLowerCase();
    
        if (search.length > 0 ) {
          _users = _users.filter(function(user) {
            return user.suppliearName.toLowerCase().match(search);
          });
        }

        if (orderSearch.length > 0 ) {
            _users = _users.filter(function(user) {
              return user.orderNumber.toLowerCase().match(orderSearch);
            });
          }

        if (alphaVal.length>0 ) {
            _users = _users.filter(function(user) {
              return user.orderNumber.toLowerCase().match(alphaVal);
            });
          }






        console.log("_users", _users)
      //  debugger
        //let purchaseOrderData = [];
        console.log("quoteOrderList", this.props.quoteOrderData)
        console.log("abcd", this.state.checkedData)
        let pageCount1 =0;
        let pageNumber1 = 0;
        let totalLength1 = 0;
        let plantPerPage1 =0;
        let pagesVisited1 = 0;
        let displayPOList1 = []


      
      //let initialDetails1 = initialDetailsQL || this.state.checkedData
       // console.log("pageNumber", this.props.purchaseOrderData.pageNumber)


      if(_users){

        pageNumber1 = this.props.quoteOrderData.pageNumber1;
       let initialDetails1 = [..._users];
         totalLength1 = initialDetails1.length;
         plantPerPage1 = this.state.pageSize;
         pagesVisited1 =  this.props.quoteOrderData.pageNumber1 * this.state.pageSize;
         displayPOList1 = initialDetails1.slice(pagesVisited1,pagesVisited1+plantPerPage1)
         pageCount1 = Math.ceil(initialDetails1.length/plantPerPage1)

    }

            console.log("displayPOList",displayPOList1)

        const filteredList = this.filterItems(displayPOList1);

              console.log("filteredList", filteredList)
       // console.log(this.props.purchaseOrderData)
    return (


        
        <div>
            <div class="contentHeader bg-white d-md-flex justify-content-between align-items-center">
				<h1 class="page-header mb-0"><img src="assets/img/quote-ic-green.svg" alt=""/> Quote &amp; Order List</h1>
				<div class="topbarCtrls mt-3 mt-md-0">
                   
                    <Link to="/Quote">
                    <a href="#" class="btn">
                        <span class="d-flex align-items-center text-left">
                        <img src="assets/img/Quoteblue_small-Icon.svg" alt=""/>
                            <span class="ml-2"><b>New Quote</b></span>
                        </span>
                        </a>
                        </Link>
                    {/* </a> */}
                    <Link to="/QuoteAndOrdersManagement">
                    <a href="#" class="btn ml-2">
                        <span class="d-flex align-items-center text-left">
                            <img src="assets/img/PurchaseOrders-sm.svg" alt=""/>
                            <span class="ml-2"><b>New Order</b></span>
                        </span>
                    </a>
                    </Link>
				</div>
			</div>
            <div class="px-md-3 mt-3">
            <div class="bg-white px-3 py-3 my-3 cardShadow">
                <div class="row align-items-center">
                    <div class="col-md-12 col-lg-6 d-md-flex justify-content-between editCustSec">
                        <div class="ordersCard d-flex justify-content-md-between align-item-stretch w-100">
                            {/* <div class="cardBoxwide totalCard">
                                <p>Total Orders</p>
                                <span style={{fontSize: "32px"}}>61</span>
                                <div>
                                    <a href="#">View All</a>
                                </div>
                            </div> */}
                            <div class="cardBoxwide individualCard totalCard">
                                <div class="stripe"></div>
                                <p>Total Orders</p>
                                <h4>8</h4>
                                <div>
                                    <a href="#">View All</a>
                                </div>
                            </div>
                            <div class="equalSign">=</div>
                            <div class="cardBox individualCard openStsCard">
                                <div class="stripe"></div>
                                <p>Open</p>
                                <h4>8</h4>
                                <div>
                                    <a href="#">View All</a>
                                </div>
                            </div>
                            <div class="equalSign">+</div>
                            <div class="cardBox individualCard pickingStsCard">
                                <div class="stripe"></div>
                                <p>Picking</p>
                                <h4>12</h4>
                                <div>
                                    <a href="#">View All</a>
                                </div>
                            </div>
                            <div class="equalSign">+</div>
                            <div class="cardBox individualCard readyStsCard">
                                <div class="stripe"></div>
                                <p>Ready</p>
                                <h4>18</h4>
                                <div>
                                    <a href="#">View All</a>
                                </div>
                            </div>
                            <div class="equalSign">+</div>
                            <div class="cardBox individualCard shippedStsCard">
                                <div class="stripe"></div>
                                <p>Shipped</p>
                                <h4>20</h4>
                                <div>
                                    <a href="#">View All</a>
                                </div>
                            </div>
                            <div class="equalSign">+</div>
                            <div class="cardBox individualCard lateStsCard">
                                <div class="stripe"></div>
                                <p>Late</p>
                                <h4>3</h4>
                                <div>
                                    <a href="#">View All</a>
                                </div>
                            </div>
                            <div class="equalSign">&nbsp;</div>
                            <div class="verDivider"></div>
                            <div class="equalSign">&nbsp;</div>
                            <div class="cardBoxwide individualCard activeQuotesCard">
                                <div class="stripe"></div>
                                <p>Active Quotes</p>
                                <h4>12</h4>
                                <div>
                                    <a href="#">View All</a>
                                </div>
                            </div>
                            {/* <div class="cardBoxwide activeQuotesCard">
                                <p>Active Quotes</p>
                                <h4>12</h4>
                                <div>
                                    <a href="#">View All</a>
                                </div>
                            </div> */}
                            <div class="equalSign">&nbsp;</div>
                            <div class="cardBoxwide individualCard quotesFlaggedCard">
                                <div class="stripe"></div>
                                <p>Quotes Flagged</p>
                                <h4><font color="red">12</font></h4>
                                <div>
                                    <a href="#">View All</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <div class="bg-white px-3 py-3 mt-2">
                    <form>
                        <h2>Search Quotes &amp; Orders</h2>
                        
                        <div class="row mt-3 align-items-center">
                            <div class="col-md-12">
                                <div class="row form-group">
                                    <div class="col-md-12 col-lg-12">
                                        <label><b>Orders</b></label>
                                        <div class="d-flex flex-wrap mt-2">
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="OPEN" 
                                                name="OPEN"
                                                onChange={this.handleClickCheckBox} />
                                                <label class="custom-control-label" for="OPEN" >Open</label>
                                            </div>
                                            <div class="custom-control custom-checkbox ml-3">
                                                <input type="checkbox" class="custom-control-input" id="customCheck2" />
                                                <label class="custom-control-label" for="customCheck2">Pick</label>
                                            </div>
                                            <div class="custom-control custom-checkbox ml-3">
                                                <input type="checkbox" class="custom-control-input" id="customCheck3" />
                                                <label class="custom-control-label" for="customCheck3">Ready</label>
                                            </div>
                                            <div class="custom-control custom-checkbox ml-0 ml-md-3 mt-2 mt-md-0">
                                                <input type="checkbox" class="custom-control-input" id="customCheck4" />
                                                <label class="custom-control-label" for="customCheck4">Ship</label>
                                            </div>
                                            <div class="custom-control custom-checkbox ml-0 ml-md-3 mt-2 mt-md-0">
                                                <input type="checkbox" class="custom-control-input" id="customCheck5" />
                                                <label class="custom-control-label" for="customCheck5">Invoiced</label>
                                            </div>
                                            <div class="custom-control custom-checkbox ml-0 ml-md-3 mt-2 mt-md-0">
                                                <input type="checkbox"  onChange={this.handleClickCheckBox} name="CLOSED"
                                                 class="custom-control-input" id="CLOSED" />
                                                <label class="custom-control-label" for="CLOSED">Closed</label>
                                            </div>
                                            <div class="custom-control custom-checkbox ml-0 ml-md-3 mt-2 mt-md-0">
                                                <input type="checkbox" class="custom-control-input" id="customCheck7" />
                                                <label class="custom-control-label" for="customCheck7">Cancelled</label>
                                            </div>
                                            <div class="custom-control custom-checkbox ml-0 ml-md-3 mt-2 mt-md-0">
                                                <input type="checkbox" class="custom-control-input" id="customCheck8" />
                                                <label class="custom-control-label" for="customCheck8">Late</label>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div class="row form-group">
                                    <div class="col-md-5 col-lg-5">
                                        <div class="d-flex flex-wrap mt-2">
                                            <div><a href="javascript:;" style={{cursor:"pointer"}}><label>Select All</label></a></div>
                                            <div><label>&nbsp;&nbsp;&nbsp;</label></div>
                                            <div><a href="javascript:;" style={{cursor:"pointer"}}><label>Select None</label></a></div>
                                            
                                        </div>
                                    </div>
                                </div>
                                <hr/>
                                <div class="row form-group">
                                    <div class="col-md-2 col-lg-2">
                                        <label><b>Quotes</b></label>
                                        <div class="d-flex flex-wrap mt-2">
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="active" checked="checked"
                                                name="active"
                                                onChange={this.handleClickCheckBox} />
                                                <label class="custom-control-label" for="active" >Active</label>
                                            </div>
                                            <div class="custom-control custom-checkbox ml-3">
                                                <input type="checkbox" class="custom-control-input" id="inactive" />
                                                <label class="custom-control-label" for="inactive">InActive</label>
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
                                <div class="row form-group">
                                    <div class="col-md-4 col-lg-4">
                                        <label><b>Customer</b></label>
                                        <div class="searchInput SearchBar">
                                            <button type="submit" class="btn btn-search">
                                                <img src="assets/img/search.svg" alt=""/>
                                            </button>
                                            <div>
                                            <input type="text" class="form-control" 
                                             //onChange={this.onSearchInputChange2} 
                                             ref="search"
                                             //value={this.state.text}
                                             value={this.state.searchString} 
                                             onChange={this.onTextChange}
                                             //onChange={this.handleChange}
                                             placeholder="Search Customer Name/Number"/>

                                              <span>{this.renderSuggestions()}</span>
                                            </div>
                                            
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

                                            <input type="text" class="form-control" 
                                             ref="ordSearch"
                                             value={this.state.orderSearch} 
                                             onChange={this.handleOrdChange}
                                            // onChange={this.onSearchInputChange3} 
                                            placeholder="Search Order"/>


                                            {/* <Autocomplete
                                                id="custom-input-demo"
                                                options={initialDetailsQL}
                                                getOptionLabel={(option) => option.orderNumber}
                                                renderInput={(params) => (
                                                    <div ref={params.InputProps.ref}>
                                                    <input class="form-control"  style={{ width: 200 }} ref="ordSearch" type="text"
                                                     {...params.inputProps} />
                                                    </div>
                                                )}
                                            /> */}
                                            
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
                                            <input type="text" class="form-control" onChange={this.onSearchInputChange2} placeholder="Search SKU"/>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-lg-4 pt-md-1 mt-2 ">
                                        <label>&nbsp;</label>
                                        <div class="searchInput">
                                        <a href="javascript:;" style={{cursor:"pointer"}}>Reset</a>
                                        </div>
                                    </div>
                                </div>
                            <div className="row_1 mt-4">
                                        <div style={{float:"left",marginBottom:15}}>
                                            {/* <div> */}
                                                <label className="greenText">{"Showing " + (pageNumber1>0 ? (this.state.pageSize*((pageNumber1)))+1 : ((pageNumber1)+1))+  "  to  " +  (pageNumber1>0 ? (((this.state.pageSize*((pageNumber1)))+this.state.pageSize)>totalLength1 ? totalLength1 : ((this.state.pageSize*((pageNumber1)))+this.state.pageSize)) : ((((pageNumber1)+1)*this.state.pageSize)>totalLength1?totalLength1:(((pageNumber1)+1)*this.state.pageSize)))   + "  of   "  +   totalLength1 }</label>
                                            {/* </div> */}
                                        </div>
                                        <div style={{float:"left",marginBottom:15}}>
                                            <label className="greenText">Show</label>
                                                <select 
                                                    value={this.state.pageSize}
                                                    onChange={e => {
                                                        this.setState({
                                                            pageSize:  Number(e.target.value)
                                                        })
                                                    }}
                                                    >
                                                    {[5,15, 25, 50, 100, 250].map(pageSize => (
                                                        <option key={pageSize} value={pageSize}>
                                                        {pageSize}
                                                        </option>
                                                    ))}
                                                </select>
                                                
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <input type="checkbox" class="custom-control-input customer-checkbox" id="dispquote" />
                                                <label class="custom-control-label" for="dispquote"><b>Display FLAGGED Quotes only</b></label>
                                        </div>
                                        <div style={{float:"right",marginBottom:15}}>
                                        <TablePagination pageChange={this.paginationChange} pageCount={pageCount1} pageNumber={pageCount1+1}/>
                                            
                                        </div>
                               
                            </div>
                            <div class="form-group row mt-0">
                                <div class="col-md-12 col-lg-12">
                                    <ul class="list-unstyled searchAlpha d-flex flex-wrap">
                                        {/* <li><a  class={this.state.selectedAlpha =="All"?"active":""} onClick={this.handleAlphabetFilter} id="All" style={{cursor:"pointer"}}>All</a></li> */}

                                        <button type="button" className={this.state.button ? "selected_alphabet buttonStyles": "unselected_aplphabet buttonStyles"}  onClick={this.onSearchInputChange}>All</button>
                                            {this.prepareAlphabets()}
                                    </ul>
                                </div>
                            </div>


                                <div class="form-group row" style={{marginBottom: "5px"}}>
                                    <div class="col-md-12 table-responsive">
                                        <table id="plantDetails" class="table table-striped w-100">
                                            <thead>
                                                <tr>
                                                    <th class="text-nowrap text-center">Status</th>
                                                    <th class="text-nowrap text-center">Order#</th>
                                                    <th class="text-nowrap text-center">Order Parts</th>
                                                    <th class="text-nowrap text-left" width="20%">Customer Name</th>
                                                    <th class="text-nowrap text-center">Type</th>
                                                    <th class="text-nowrap text-center">PO#</th>
                                                    <th class="text-nowrap text-center">Order Date</th>
                                                    <th class="text-nowrap text-center">Requested Date</th>
                                                    <th class="text-nowrap text-center">Remaining Balance</th>
                                                    <th class="text-nowrap text-center">Actions</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {displayPOList1.map(pQuoteList=>{
                                                    return <tr key={pQuoteList.orderNumber}>
                                                    <td class="text-center"><span  class={pQuoteList.status==='CLOSED'?'stsBadge stsClosed':pQuoteList.status==='OPEN'?'stsBadge stsOpen':pQuoteList.status==='READY'?'stsBadge stsReady':pQuoteList.status==='RESERVE'?'stsBadge stsReserve':pQuoteList.status==='PICKING'?'stsBadge stsPicking':pQuoteList.status==='QUOTE'?'stsBadge stsQuote':""}>{pQuoteList.status}</span></td>
                                                    <td><a href="">{pQuoteList.orderNumber}</a></td>
                                                    <td class="text-nowrap text-center">4</td>
                                                    <td>{pQuoteList.suppliearName}</td>
                                                    <td class="text-center">LARC</td>
                                                    <td class="text-center">8458788</td>
                                                    <td class="text-center">{pQuoteList.orderDate}</td>
                                                    <td class="text-center">{pQuoteList.expectedDate}</td>
                                                    <td class="text-nowrap text-right">6,085.00 <br/>32,058.12</td>
                                                    <td class="text-center">
                                                        <span>
                                                            <a href="javascript;">
                                                                <img src="assets/img/edit.svg" alt=""/>
                                                            </a>
                                                        </span>
                                                    </td>
                                                </tr>
                                                


                                            })}

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
}


const mapStateToProps = (state)=> (
    // console.log(state.customerReducer.payload)
    {
        quoteOrderData:state.quoteOrderReducer
    }

)


export default connect(mapStateToProps,{handleSearchFilterByAlpha, getQuoteOrderList,setPageNumberQo,handleAplhabetFilterBySN })(QuoteList)