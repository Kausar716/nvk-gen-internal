import React from 'react'
import AddCustomer from './EditCustomer'
import {getAllCustomer} from "../../actions/customerSettingAction";
import {connect} from "react-redux";

export class CustomerSettings extends React.Component {  
    constructor(){
        super()
        this.state={
            addCustomerToggle:false,
            customerListStatus:"All"
        }
    }
    componentDidMount(){
        this.props.getAllCustomer()
    }

    handleAddCustomerClick = () => {
        this.setState({addCustomerToggle:!this.state.addCustomerToggle})
    }
    handleRadioClick = (e)=> {
        this.setState({customerListStatus:e.target.name})
    }    
    render(){
        let customerData = [] 
        let tempArray = []
        if(this.props.customerData) tempArray = this.props.customerData
        console.log(this.props.customerData)
        if(this.state.customerListStatus === "All" && this.props.customerData){
            tempArray = [...this.props.customerData.active ,...this.props.customerData.inactive]
            customerData = tempArray
        
        }
        if(this.state.customerListStatus === "active" && this.props.customerData){
            tempArray = [...this.props.customerData.active ]
            customerData = tempArray
        
        }
        if(this.state.customerListStatus === "inactive" && this.props.customerData){
            tempArray = [...this.props.customerData.inactive ]
            customerData = tempArray
        
        }
        console.log(customerData)
    return (
        <>
        {! this.state.addCustomerToggle? <div>
            <div class="contentHeader bg-white d-md-flex justify-content-between align-items-center">
                <h1 class="page-header mb-0 d-flex align-items-center">
                    <img src="assets/img/staff-directory-green.svg" class="mr-2"/>
                    <div class="d-flex flex-column">Customer Lists <small class="text-blue">Active - {this.props.customerData? this.props.customerData.active.length:0}</small></div>
                </h1>
                <div class="topbarCtrls mt-3 mt-md-0">
                    <a href="#" class="btn">
                        <span class="d-flex align-items-center text-left" onClick={this.handleAddCustomerClick}>
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
                            <div class="form-group row align-items-end q">
                                <div class="col-md-4 col-lg-4">
                                    <label for="plantSearch">Search Customer</label>
                                    <div class="searchInput">
                                        <button type="submit" class="btn btn-search">
                                            <img src="assets/img/search.svg" alt=""/>
                                        </button>
                                        <input type="text" class="form-control" placeholder="Search"/>
                                    </div>
                                </div>
                                <div class="col-md-4 col-lg-4 mt-2 mt-md-0 pb-2">
                                    <a href="">Reset</a>
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-md-12">
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="active" id="activePlants" value="" checked={this.state.customerListStatus === "active"?true:false} onClick={this.handleRadioClick}/>
                                        <label class="form-check-label" for="activePlants">Active Only  </label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="inactive" id="archivedPlants" value="" checked={this.state.customerListStatus === "inactive"?true:false} onClick={this.handleRadioClick}/>
                                        <label class="form-check-label" for="archivedPlants">Inactive Only</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="all" id="allPlants" value="" checked={this.state.customerListStatus === "All"?true:false} onClick={this.handleRadioClick}/>
                                        <label class="form-check-label" for="allPlants">All</label>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group row mt-4">
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
                                                <th class="text-nowrap">Status</th>
                                                <th class="text-nowrap">ID</th>
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
                                        {customerData.map(customerData=>{
                                            return <tr>
                                                        <td>{customerData.status === 1?"Active":"Inactive" }</td>
                                                        <td>{customerData.id}</td>
                                                        <td>{customerData.name}</td>
                                                        <td>{JSON.parse(customerData.type).join()}</td>
                                                        <td>{customerData.telephone}</td>
                                                        <td>{customerData.contact_id}</td>
                                                        <td>{customerData.last_order}</td>
                                                        <td>{customerData.outstanding}</td>
                                                        <td class="text-center">
                                                        <span>
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
         :<AddCustomer/>}
        </>
    )
}

}
const mapStateToProps = (state)=> (
    // console.log(state.customerReducer.payload)
    {
        customerData:state.customerReducer.payload
    }

)

export default connect(mapStateToProps,{getAllCustomer})(CustomerSettings)

