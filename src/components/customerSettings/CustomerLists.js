import React from 'react'
import AddCustomer from './EditCustomer'
import {deleteCustomer,getAllCustomer,handleExchangeData,getAllCustomerType,getCustomerById,setPageNumber,handleRadioFilter,handleSearchFilter,handleAplhabetFilter,typeOfActionShow} from "../../actions/customerSettingAction";
import { confirmAlert } from 'react-confirm-alert'; 
// import {getAllCustomer} from "../../actions/customerSettingAction";
import TablePagination from '../Pagination';
import Autosuggest from 'react-autosuggest';

import {connect} from "react-redux";

export class CustomerSettings extends React.Component {  
    constructor(){
        super()
        this.state={
            addCustomerToggle:false,
            customerListStatus:"active",
            editCustmerToggle:false,
            customerObject:{},
            pageSize:15,
            alphabets:["A", "B", "C", "D", "E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
            selectedAlpha:"All",
            searchValue:"",
            radioFilter:"active",
            value:"",
            suggestions:[],
            isOpen2:false,
           message2:[],

        }
    }
    componentDidMount(){
        // alert("hif")
        this.props.getAllCustomer(this.state.radioFilter)
        this.props.getAllCustomerType()
    }
    toggle2 = () => this.setState({isOpen2:!this.state.isOpen2});
        //const {categoryData,subCategoryData} = props.categoryData
        // const [value,setValue] = useState("")
        // const [suggestions,setSuggestions] = useState([])
    
         getSuggestions = value => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;
          
            return inputLength === 0 ? [] : this.props.customerData.customerList.filter(lang =>
              lang.name.toLowerCase().includes(inputValue)
            );
        };
         getSuggestionValue = suggestion =>suggestion.name;
    
          // Use your imagination to render suggestions.
         renderSuggestion = suggestion => (
            <span>
              {suggestion.name}
            </span>
        );
         onChange = (event, { newValue }) => {
            // setValue(newValue)
            this.setState({value:newValue});
            this.setState({searchValue:newValue})
            this.props.handleSearchFilter(newValue,"none")
            // props.serachProduct({product: newValue, option: selectedRadio, category: selectedCategory,manufactureId:props.manufacturer_id})
            // setInputValue(newValue);
            // setLoaderMessage("No Records Found...")
            // props.serachPlant({plant: newValue, option: selectedRadio, category: categoryId})
            // setInputValue(newValue);
        };
    
         onSuggestionsFetchRequested = ({ value }) => {
             this.setState({suggestions: this.getSuggestions(value)});
            // setSuggestions(getSuggestions(value));
        };
      
        // Autosuggest will call this function every time you need to clear suggestions.
          onSuggestionsClearRequested = () => {
        //   setSuggestions([]);
        this.setState({suggestions:[]})
        };
    

    handleAddCustomerClick = (e) => {
        // alert(e.target.id)
        this.props.typeOfActionShow("add")
    }
    handleRadioClick = (e)=> {
        this.setState({customerListStatus:e.target.name})
        this.props.handleRadioFilter(e.target.id)
        // alert("hi")
    }    
    handleEdit = (id) => {
        this.props.typeOfActionShow("edit")
        this.props.getCustomerById(id)
        this.props.handleExchangeData(id,"customer_id","customerContact")
        this.props.handleExchangeData(id,"customer_id","customerAddress")
        
    }
    paginationChange =(event, page)=>{
        // alert("hg")
        this.props.setPageNumber(page-1)
    }
    handleAlphabetFilter = (e)=>{
        this.setState({selectedAlpha:e.target.id})
        this.props.handleAplhabetFilter(e.target.id)

    }
    deleteCustomerData =(id)=>{
        // alert(id)

        confirmAlert({
            title: 'Delete Location Type',
            message: 'Are you sure want to delete the Customer?',
            buttons: [
              {
                label: 'Yes',
                onClick: () => {this.props.deleteCustomer(id).then(data=>{
                    // setMessage2(["Customer Successfully"])
                    // setIsOpen2(true)
                    // this.props.resetCustomerFilds()
                    this.props.getAllCustomer().then(data=>{
            
                    })
                   })}
              },
              {
                label: 'No'
              }
            ]
          });

    }
    handleSearch = (e)=>{
        // alert(e.target.value)
        if(e.target.value === undefined){
            this.setState({searchValue:""})
            this.props.handleSearchFilter("","reset")
            this.setState({selectedAlpha:"All",customerListStatus:"active"})
            this.setState({value:""})

        }else{
            this.setState({searchValue:e.target.value})
            this.props.handleSearchFilter(e.target.value,"none")
          
        }
        
        // alert(e.target.value)

    }
    render(){
        let customerData = [] 
        let tempArray = []
        console.log(this.props.customerData)
        let totalLength = 0
        let plantPerPage =0;
        let pagesVisited = 0;
        let displayCustomerList = []
        let pageCount =0
        let pageNumber = 0
        let {action,radioFilter} = this.props.customerData
        // if(this.props.customerData) {
            // tempArray = this.props.customerData
            // if(this.state.customerListStatus === "active" && this.props.customerData.customerList.active !== undefined) {
            //     tempArray = [...this.props.customerData.customerList.active ]
            //     customerData = tempArray
            
            // }

            console.log("this.props.customerData", this.props.customerData)
            if(this.props.customerData.customerList){
                pageNumber = this.props.customerData.pageNumber
                // console.log()
                customerData = [...this.props.customerData.customerList.sort((a, b) => parseInt(b.id) - parseInt(a.id))]
                totalLength = this.props.customerData.customerList.length
                plantPerPage = this.state.pageSize;
                pagesVisited =  this.props.customerData.pageNumber*this.state.pageSize;
                displayCustomerList = customerData.slice(pagesVisited,pagesVisited+plantPerPage)
                pageCount = Math.ceil(customerData.length/plantPerPage)

            }
           
        // }
       
        // if(this.state.customerListStatus === "All" && this.props.customerData){
        //     tempArray = [...this.props.customerData.active ,...this.props.customerData.inactive]
        //     customerData = tempArray
        
        // }
       
        // if(this.state.customerListStatus === "inactive" && this.props.customerData){
        //     tempArray = [...this.props.customerData.inactive ]
        //     customerData = tempArray
        
        // }
        const inputProps = {
            placeholder: 'Customer Name',
        //    [this.state.value],
        value:this.state.value,
            // className:"searchInput",
            className:" form-control  btn btn-search ",
            style: {position:"relative",border:"1px solid gray",borderRadius:3,textAlign:"left",paddingLeft:"10%",border:"1px solid lightgray",paddingTop:6,height:"41.5px",fontSize:"15px",textDecoration:"none"},
            onChange: this.onChange
        };
        console.log(displayCustomerList)
    return (
        <>
        {action ===""? <div>
            <div class="contentHeader bg-white d-md-flex justify-content-between align-items-center">
                <h1 class="page-header mb-0 d-flex align-items-center">
                    <img src="assets/img/Customer Management_green.svg" class="mr-2"/>
                    <div class="d-flex flex-column">Customer Lists <small class="text-blue"  style={{fontWeight:"bold",fontSize:"17px"}}>Active Customers - {this.props.customerData.activeData.length}</small></div>
                </h1>
                <div class="topbarCtrls mt-3 mt-md-0" onClick={this.handleAddCustomerClick} id="add">
                    <a  class="btn" >
                        <span class="d-flex align-items-center text-left">
                            <img src="assets/img/add-customer-ic.svg" alt=""/>
                            <span class="ml-2"><b>Add Customer</b></span>
                        </span>
                    </a>
				</div>
			</div>
			<div class="contentWrapper">
				<div class="row">
					<div class="col-xl-12 col-md-12">
						<div class="bg-white p-15">
                        <div className="form-group row">
                                        <div className="col-md-5 col-lg-5 mt-2 mt-md-0">
                                    <label for="plantSearch">Search Customer</label>
                                    <div className="searchInput" style={{height: "2px",paddingTop:-140}}>
                                           
                                            <Autosuggest
                                                    suggestions={this.state.suggestions}
                                                    onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                                                    onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                                                    getSuggestionValue={this.getSuggestionValue}
                                                    renderSuggestion={this.renderSuggestion}
                                                    inputProps={inputProps}
                                                    theme={{suggestionsContainerOpen:this.state.suggestions.length>5?"yes":"no",suggestionsContainer:this.state.suggestions.length>5?"yes1":"no1",
                                                    suggestionsList:this.state.suggestions.length>5?"yes":"no1"}}
                                                  
                                                />
                                                <img src="assets/img/search.svg" alt="" style={{position:"absolute", left:"14px",top:"12px"}}/>
                                                </div>
                                    {/* <div class="searchInput">
                                        <button type="submit" class="btn btn-search">
                                            <img src="assets/img/search.svg" alt=""/>
                                        </button>
                                        <input type="text" class="form-control" placeholder="Search" onChange={this.handleSearch} value={this.state.searchValue}/>
                                    </div> */}
                                </div>
                                <div className="col-md-2 col-lg-2">
                                            {/* <a href="javascript:;" onClick={resetData} className="d-block topSpace" style={{marginTop:"2.5em"}}>Reset</a> */}
                                        {/* </div> */}
                                {/* <div class="col-md-4 col-lg-4" > */}
                                    <a onClick={this.handleSearch}  className="d-block topSpace" style={{marginTop:"2.3em",cursor:"pointer",color:"#5287F5"}} id="reset">Reset</a>
                                </div>
                            </div>
                            <div class="form-group row" >
                                <div class="col-md-12">
                                    <div class="form-check form-check-inline">
                                        <input style={{cursor:"pointer"}} class="form-check-input" type="radio" name="active" id="active" value="" checked={this.state.customerListStatus === "active"?true:false} onClick={this.handleRadioClick}/>
                                        <label class="form-check-label" for="activePlants">Active Only  </label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input style={{cursor:"pointer"}} class="form-check-input" type="radio" name="inactive" id="inactive" value="" checked={this.state.customerListStatus === "inactive"?true:false} onClick={this.handleRadioClick}/>
                                        <label class="form-check-label" for="archivedPlants">Inactive Only</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input style={{cursor:"pointer"}} class="form-check-input" type="radio" name="All" id="all" value="" checked={this.state.customerListStatus === "All"?true:false} onClick={this.handleRadioClick}/>
                                        <label class="form-check-label" for="allPlants">All</label>
                                    </div>
                                </div>
                            </div>
                            <div style={{clear: 'both'}}></div>
                            <div style={{paddingTop:25}}>
                                <div style={{float:"left"}}>
                                {/* <div> */}
                                    <label className="greenText">{"Showing " + (pageNumber>0 ? (this.state.pageSize*((pageNumber)))+1 : ((pageNumber)+1))+  "  to  " +  (pageNumber>0 ? (((this.state.pageSize*((pageNumber)))+this.state.pageSize)>totalLength ? totalLength : ((this.state.pageSize*((pageNumber)))+this.state.pageSize)) : ((((pageNumber)+1)*this.state.pageSize)>totalLength?totalLength:(((pageNumber)+1)*this.state.pageSize)))   + "  of   "  +   totalLength +"  "+radioFilter }</label>
                                {/* </div> */}
                                </div>
                                <div style={{float:"left",marginBottom:"-15px",marginLeft:30}}>
                                <label className="greenText" style={{color:"black",fontWeight:"normal",paddingTop:"-10px"}}>Rows per page</label>
                                <div className="select_box" style={{display:"inline"}}>
                                <select 
                                        value={this.state.pageSize}
                                        onChange={e => {
                                            this.setState({pageSize:e.target.value})
                                        }}
                                        >
                                        {[15, 25, 50, 100, 250,500].map(pageSize => (
                                            (<option key={pageSize} value={pageSize}>
                                            {pageSize} 
                                            </option>)
                                        ))}
                                    </select>

                                </div>
                           
                                </div>
                                <div style={{float:"right",marginBottom:15}}>
                                    <TablePagination pageChange={this.paginationChange} pageCount={pageCount} pageNumber={pageNumber+1}/>
                                </div>
                               
                            </div>
                            <div style={{clear:"both"}}></div>
                            <div class="form-group row mt-4">
                                <div class="col-md-12 col-lg-12"  style={{marginTop:"-2%",marginBottom:"-23px"}}>
                                    <ul class="list-unstyled searchAlpha d-flex flex-wrap">
                                        <li><a style={{cursor:"pointer"}}  class={this.state.selectedAlpha =="All"?"active":""} onClick={this.handleAlphabetFilter} id="All">All</a></li>
                                        {
                                            this.state.alphabets.map(alphabet=>{
                                                return(<li><a  style={{cursor:"pointer"}} class={this.state.selectedAlpha ==alphabet?"active":""} onClick={this.handleAlphabetFilter} id={alphabet} >{alphabet}</a></li>)

                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                   
                          
                            <div class="form-group row">
                                <div class="col-md-12 table-responsive">
                                    <table id="plantDetails" class="table table-striped w-100">
                                        <thead>
                                            <tr>
                                                <th class="text-nowrap">Status</th>
                                                <th class="text-nowrap">Customer ID</th>
                                                <th class="text-nowrap">Customer Name</th>
                                                <th class="text-nowrap">Type</th>
                                                <th class="text-nowrap">Telephone</th>
                                                <th class="text-nowrap">Contact</th>
                                                <th class="text-nowrap">Last Order</th>
                                                <th class="text-nowrap">Outstanding</th>
                                                <th class="text-nowrap text-center">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {displayCustomerList.map(customerData=>{
                                            return <tr>
                                                        <td style={{color:customerData.status === 1?"":"red"}}>{customerData.status === 1?"Active":"Inactive" }</td>
                                                        <td>{customerData.id}</td>
                                                        <td>{customerData.name}</td>
                                                        <td>
                                                            {JSON.parse(customerData.type).map((data,index)=>{
                                                                let arrayData =this.props.customerData.customerTypeList.active.filter(customerType=>parseInt(customerType.id)==parseInt(data))
                                                                if(arrayData.length>0)
                                                                return(<span>{arrayData[0]["customer_type"]}{(index+1)!==JSON.parse(customerData.type).length?", ":""}</span>)
                                                            })}
                                                            
                                                        </td>
                                                        
                                                        <td>{customerData.fax}</td>
                                                        <td>
                                                            {customerData.contacts.length>0?<div>
                                                            <p style={{padding:0,margin:0}}>{customerData.contacts[0]["first_name"]+" "+customerData.contacts[0]["last_name"]}</p>
                                                            <p style={{padding:0,margin:0,color:"#627884"}}>{customerData.contacts[0]["email"]}</p>
                                                            <p style={{padding:0,margin:0,color:"#627884"}}>{customerData.contacts[0]["phone1"]}</p>
                                                                </div>:""}</td>
                                                        <td>N/A</td>
                                                        <td>$0.00</td>
                                                        <td class="text-center">
                                                        <span onClick={()=>{this.handleEdit(customerData.id)}}>
                                                            <a href="javascript:;" style={{marginRight:3}}>
                                                                <img src="assets/img/edit.svg" alt=""/>
                                                            </a>
                                                        </span>
                                                        <span onClick={()=>{this.deleteCustomerData(customerData.id)}}>
                                                            <a href="javascript:;">
                                                                <img src="assets/img/delete.svg" alt=""/>
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
				</div>
			</div>
        </div>
         : <AddCustomer toggle ={this.state.addCustomerToggle?"add":"edit"} customerData={this.state.addCustomerToggle?{}:this.state.customerObject}/>}
        </>
    )
}

}
const mapStateToProps = (state)=> (
    // console.log(state.customerReducer.payload)
    {
        customerData:state.customerReducer
    }

)

export default connect(mapStateToProps,{deleteCustomer,getAllCustomerType,getAllCustomer,handleExchangeData,getCustomerById,setPageNumber,handleRadioFilter,handleSearchFilter,handleAplhabetFilter,typeOfActionShow})(CustomerSettings)

