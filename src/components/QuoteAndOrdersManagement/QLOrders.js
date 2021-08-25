import React, { useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import DatePicker from 'react-date-picker';
import {connect} from "react-redux";
import TablePagination from '../Pagination/index';
import {getAllCustomer,handleRadioFilter,handleSearchFilter,handleAlphabetFilter, setPageNumberPo,handleSearchFilterByAlpha, handleAplhabetFilterBySN} from "../../actions/purchaseOrderActions";
import initialDetails from './initialDetails';
import './style.css'
import { Link } from "react-router-dom";
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

    onSearchInputChange2 = (e) => {
        this.setState({searchInput: e.target.value})
      }

      onSearchInputChange3 = (e) => {
        this.setState({searchInput: e.target.value})
      }


    onSearchInputChange = (e) => {
        this.setState({alphabet: e.target.value,alphabetSelect:''})
        this.setState({
          button:!this.state.button
        })
      }


      handleClickCheckBox = (e)=>{

        let newCheckedData = initialDetails.filter(newCheck => newCheck.status===e.target.name)
        //this.setState({alphabet: newCheckedData})
        this.setState({checkedData: newCheckedData})
        // console.log("e1",checkedData);
      }



      paginationChange =(event, page)=>{
        // alert("hg")
        this.props.setPageNumberPo(page-1)
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
         // e.preventdefault();
        // this.setState({alphabet: e.target.value})
        this.setState({alphabet: e.target.value,alphabetSelect:e.target.value,button:false})
      }
      prepareAlphabets = () => {
        let result = [];
        for(let i=65; i<91; i++) {
          result.push(

            // <button type="button" key={i} onClick={this.onAlphabetClick} value={String.fromCharCode(i)} >{String.fromCharCode(i)}</button>
            <button type="button" className={ this.state.alphabetSelect===String.fromCharCode(i)?" buttonStyles selected_alphabet":"unselected_aplphabet buttonStyles"}  key={i} onClick={this.onAlphabetClick} value={String.fromCharCode(i)}>{String.fromCharCode(i)}</button>
           
          )
        }
        return result;
      }


     // checkOperation=(checkedData, element)=>(checkedData ? checkedData.filter(newCheck => newCheck.status==="open") : "");





 elementContainsSearchString2 = (searchInput, element) => (searchInput ? element.supplierOrder.toLowerCase().includes(searchInput.toLowerCase()) : false);

      elementContainsSearchString = (searchInput, element) => (searchInput ? element.suppliearName.toLowerCase().includes(searchInput.toLowerCase()) || element.poNumber.toLowerCase().includes(searchInput.toLowerCase()) || element.supplierOrder.toLowerCase().includes(searchInput.toLowerCase()) : false);


      filterItems = (initialDetails) => {
        let result = [];
        const { searchInput,alphabet , checkedData} = this.state;
        if(initialDetails &&  (searchInput || alphabet)) {
            result = initialDetails.filter((element) => (element.suppliearName.charAt(0).toLowerCase() === alphabet.toLowerCase()) || 
            this.elementContainsSearchString(searchInput, element) 
            //  || this.checkOperation(checkedData,element)
            );
          }

        else if( initialDetails && checkedData){

            result = initialDetails.filter((item)=>item.status)

        }
        else {
          result = initialDetails  || [];
        }

        result = result.map((item)=>(
                 item
                 
        
        ))
       

        return result;
      }

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


      
      let initialDetails1 = initialDetails || this.state.checkedData
        console.log("pageNumber", this.props.purchaseOrderData.pageNumber)


      if(initialDetails1){
        pageNumber = this.props.purchaseOrderData.pageNumber
        // console.log()
        initialDetails1 = [...initialDetails1]


         totalLength = initialDetails1.length
         plantPerPage = this.state.pageSize;
         pagesVisited =  this.props.purchaseOrderData.pageNumber*this.state.pageSize;
         displayPOList = initialDetails1.slice(pagesVisited,pagesVisited+plantPerPage)
         pageCount = Math.ceil(initialDetails1.length/plantPerPage)

    }

            console.log("displayPOList",displayPOList)

              const filteredList = this.filterItems(displayPOList);

              console.log("filteredList", filteredList)
       // console.log(this.props.purchaseOrderData)
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
                            <h1>{this.state.TotalPurchaseOder}</h1>
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

                                {/* <div class="form-group row mt-3">
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
                                </div> */}


                        {/* <input type="search" onChange={this.onSearchInputChange} /> */}



                       


                    
                            
                            <div className="row_1">
                                <div style={{float:"left",marginBottom:15}}>
                                {/* <div> */}
                                    <label className="greenText">{"Showing " + (pageNumber>0 ? (this.state.pageSize*((pageNumber)))+1 : ((pageNumber)+1))+  "  to  " +  (pageNumber>0 ? (((this.state.pageSize*((pageNumber)))+this.state.pageSize)>totalLength ? totalLength : ((this.state.pageSize*((pageNumber)))+this.state.pageSize)) : ((((pageNumber)+1)*this.state.pageSize)>totalLength?totalLength:(((pageNumber)+1)*this.state.pageSize)))   + "  of   "  +   totalLength }</label>
                                {/* </div> */}
                                </div>


                                    <div >
                                    <label className="greenText">Purchase Orders&nbsp;</label>
                                    <label className="greenText"> Show</label>
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
                                        </div>

                



                                <div style={{float:"right",marginBottom:15}}>
                                    <TablePagination pageChange={this.paginationChange} pageCount={pageCount} pageNumber={pageNumber+1}/>
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
                                                {filteredList.map(pOrderList=>{
                                                    return <tr key={pOrderList.suppliearName}>
                                                    <td><span  class={pOrderList.status==='closed'?'stsBadge stsClosed':pOrderList.status==='Draft'?'stsBadge stsDraft':pOrderList.status==='open'?'stsBadge stsOpen':""}>{pOrderList.status}</span></td>
                                                    <td><a href="">{pOrderList.poNumber}</a></td>
                                                    <td>{pOrderList.suppliearName}</td>
                                                    <td>{pOrderList.supplierOrder}</td>
                                                    <td>{pOrderList.createdBy}</td>
                                                    <td>{pOrderList.orderDate}</td>
                                                    <td>{pOrderList.expectedDate}</td>
                                                    <td>{pOrderList.dispatch}</td>
                                                    <td>{pOrderList.amount}</td>
                                                    <td class="text-center">
                                                        <span>
                                                            <a href="javascript;">
                                                                <img src="assets/img/edit.svg" alt=""/>
                                                            </a>
                                                        </span>
                                                    </td>
                                                </tr>
                                                {/* <tr>
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
                                                </tr> */}
                                                {/* <tr>
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
                                                </tr> */}
                                                {/* <tr>
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
                                                </tr> */}


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
        purchaseOrderData:state.PurchaseOrderReducer
    }

)


export default connect(mapStateToProps,{handleSearchFilterByAlpha, setPageNumberPo})(PurchaseOrders)