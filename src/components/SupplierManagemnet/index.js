import React from 'react'
import AddSupplier from './AddSupplier'
import {getAllSuppliers,setPageNumber,handleRadioFilter,handleSearchFilter,handleAplhabetFilter} from "../../actions/supplierManagementAction";

// import {getAllCustomer} from "../../actions/customerSettingAction";
import TablePagination from '../Pagination';

import {connect} from "react-redux";

export class SupplierManagemnet extends React.Component {  
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
            radioFilter:"active"
        }
    }
    componentDidMount(){
        // alert("hif")
        this.props.getAllSuppliers(this.state.radioFilter)
    }

    handleAddCustomerClick = () => {
        this.setState({addCustomerToggle:!this.state.addCustomerToggle})
    }
    handleRadioClick = (e)=> {
        this.setState({customerListStatus:e.target.name})
        this.props.handleRadioFilter(e.target.id)
        // alert("hi")
    }    
    handleEdit = (customerObject) => {
        this.setState({editCustomerToggle:!this.state.editCustomerToggle,customerObject})   
    }
    paginationChange =(event, page)=>{
        // alert("hg")
        this.props.setPageNumber(page-1)
    }
    handleAlphabetFilter = (e)=>{
        // alert(e.target.id)
        this.setState({selectedAlpha:e.target.id})
        this.props.handleAplhabetFilter(e.target.id)

    }
    handleSearch = (e)=>{
        // alert(e.target.value)
        if(e.target.value === undefined){
            this.setState({searchValue:""})
            this.props.handleSearchFilter("")

        }else{
            this.setState({searchValue:e.target.value})
            this.props.handleSearchFilter(e.target.value)
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
        // if(this.props.customerData) {
            // tempArray = this.props.customerData
            // if(this.state.customerListStatus === "active" && this.props.customerData.customerList.active !== undefined) {
            //     tempArray = [...this.props.customerData.customerList.active ]
            //     customerData = tempArray
            
            // }
            if(this.props.supplierData.supplierList){
                pageNumber = this.props.supplierData.pageNumber
                // console.log()
                customerData = [...this.props.supplierData.supplierList]
                totalLength = this.props.supplierData.supplierList.length
                plantPerPage = this.state.pageSize;
                pagesVisited =  this.props.supplierData.pageNumber*this.state.pageSize;
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
        console.log(this.props.supplierData)
    return (
        <>
        {! this.state.addCustomerToggle && !this.state.editCustomerToggle  ? <div>
            <div class="contentHeader bg-white d-md-flex justify-content-between align-items-center">
                <h1 class="page-header mb-0 d-flex align-items-center">
                    <img src="assets/img/staff-directory-green.svg" class="mr-2"/>
                    <div class="d-flex flex-column">Supplier Lists <small class="text-blue">Active - {this.props.supplierData?this.props.supplierData.activeData.length:0}</small></div>
                </h1>
                <div class="topbarCtrls mt-3 mt-md-0">
                    <a href="#" class="btn">
                        <span class="d-flex align-items-center text-left" onClick={this.handleAddCustomerClick}>
                            <img src="assets/img/add-customer-ic.svg" alt=""/>
                            <span class="ml-2"><b>Add Supplier</b></span>
                        </span>
                    </a>
				</div>
			</div>
			<div class="contentWrapper">
				<div class="row">
					<div class="col-xl-12 col-md-12">
						<div class="bg-white p-15">
                            <div class="form-group row align-items-end q">
                                <div class="col-md-4 col-lg-4">
                                    <label for="plantSearch">Search Supplier</label>
                                    <div class="searchInput">
                                        <button type="submit" class="btn btn-search">
                                            <img src="assets/img/search.svg" alt=""/>
                                        </button>
                                        <input type="text" class="form-control" placeholder="Search" onChange={this.handleSearch} value={this.state.searchValue}/>
                                    </div>
                                </div>
                                <div class="col-md-4 col-lg-4 mt-2 mt-md-0 pb-2">
                                    <a onClick={this.handleSearch} style={{cursor:"pointer",color:"#5287F5"}}>Reset</a>
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-md-12">
                                    <div class="form-check form-check-inline">
                                        <input style={{cursor:"pointer"}} class="form-check-input" type="radio" name="active" id="active" value="" checked={this.state.customerListStatus === "active"?true:false} onClick={this.handleRadioClick}/>
                                        <label style={{cursor:"pointer"}} class="form-check-label" for="activePlants">Active Only  </label>
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
                        
                            <div class="form-group row mt-4">
                                <div class="col-md-12 col-lg-12">
                                    <ul class="list-unstyled searchAlpha d-flex flex-wrap">
                                        <li><a  style={{cursor:"pointer"}} class={this.state.selectedAlpha =="All"?"active":""} onClick={this.handleAlphabetFilter} id="All">All</a></li>
                                        {
                                            this.state.alphabets.map(alphabet=>{
                                                return(<li><a  style={{cursor:"pointer"}} class={this.state.selectedAlpha ==alphabet?"active":""} onClick={this.handleAlphabetFilter} id={alphabet} >{alphabet}</a></li>)

                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <div style={{float:"left",marginBottom:15}}>
                                {/* <div> */}
                                    <label className="greenText">{"Showing " + (pageNumber>0 ? (this.state.pageSize*((pageNumber))) : (totalLength>0?(pageNumber+1):0))+  "  to  " +  (pageNumber>0 ? (((this.state.pageSize*((pageNumber)))+this.state.pageSize)>totalLength ? totalLength : ((this.state.pageSize*((pageNumber)))+this.state.pageSize)) : ((((pageNumber)+1)*this.state.pageSize)>totalLength?totalLength:(((pageNumber)+1)*this.state.pageSize)))   + "  of   "  +   totalLength }</label>
                                {/* </div> */}
                                </div>
                                <div style={{float:"left",marginBottom:15}}>
                                <label className="greenText">Show</label>
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
                                <div style={{float:"right",marginBottom:15}}>
                                    <TablePagination pageChange={this.paginationChange} pageCount={pageCount} pageNumber={pageNumber+1}/>
                                </div>
                               
                            </div>
                            <div style={{clear:"both"}}></div>
                            <div class="form-group row">
                                <div class="col-md-12 table-responsive">
                                    <table id="plantDetails" class="table table-striped w-100">
                                        <thead>
                                            <tr>
                                                <th class="text-nowrap">Status</th>
                                                <th class="text-nowrap">ID</th>
                                                <th class="text-nowrap">Supplier Name</th>
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
                                                         <td>{customerData.status === 1?"Active":"Inactive" }</td>
                                                        <td>{customerData.id}</td>
                                                        <td>{customerData.supplier_name}</td>
                                                        <td>{"--"}</td>
                                                        <td>{customerData.primary_contact}</td>
                                                        <td>{customerData.contact_id}</td>
                                                        <td>N/A</td>
                                                        <td>$0.00</td>
                                                        <td class="text-center">
                                                        <span onClick={()=>{this.handleEdit(customerData)}}>
                                                            <a href="javascript:;">
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
				</div>
			</div>
        </div>
         : <AddSupplier toggle ={this.state.addCustomerToggle?"add":"edit"} customerData={this.state.addCustomerToggle?{}:this.state.customerObject}/>}
        </>
    )
}

}
const mapStateToProps = (state)=> (
    // console.log(state.customerReducer.payload)
    {
        supplierData:state.supplierData
    }

)

export default connect(mapStateToProps,{getAllSuppliers,setPageNumber,handleRadioFilter,handleSearchFilter,handleAplhabetFilter})(SupplierManagemnet)

