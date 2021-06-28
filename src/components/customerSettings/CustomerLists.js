import React from 'react'
import AddCustomer from './EditCustomer'


export class OrganizationSettings extends React.Component {  
    constructor(){
        super()
        this.state={
            addCustomerToggle:false
        }
    }

    handleAddCustomerClick = () => {
        this.setState({addCustomerToggle:!this.state.addCustomerToggle})
    }
    render(){
    return (
        <>
        {! this.state.addCustomerToggle? <div>
            <div class="contentHeader bg-white d-md-flex justify-content-between align-items-center">
                <h1 class="page-header mb-0 d-flex align-items-center">
                    <img src="assets/img/staff-directory-green.svg" class="mr-2"/>
                    <div class="d-flex flex-column">Customer Lists <small class="text-blue">Active - 324</small></div>
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
                                        <input class="form-check-input" type="radio" name="radio_default_inline" id="activePlants" value=""/>
                                        <label class="form-check-label" for="activePlants">Active Only  </label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="radio_default_inline" id="archivedPlants" value=""/>
                                        <label class="form-check-label" for="archivedPlants">Inactive Only</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="radio_default_inline" id="allPlants" value=""/>
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
                                            <tr>
                                                <td>Active</td>
                                                <td>0023555</td>
                                                <td>John Smith landscaping</td>
                                                <td>LANDRICH</td>
                                                <td>202-555-0191</td>
                                                <td>John Smith</td>
                                                <td>158.25</td>
                                                <td>85.00</td>
                                                <td class="text-center">
                                                    <span>
                                                        <a href="javascript:;">
                                                            <img src="assets/img/edit.svg" alt=""/>
                                                        </a>
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="text-danger">Inactive</td>
                                                <td>0023478</td>
                                                <td>Windham Gardens</td>
                                                <td>LANDRICH</td>
                                                <td>202-555-0191</td>
                                                <td>Brendan Weirs</td>
                                                <td>158.25</td>
                                                <td>125.02</td>
                                                <td class="text-center">
                                                    <span>
                                                        <a href="javascript:;">
                                                            <img src="assets/img/edit.svg" alt=""/>
                                                        </a>
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Active</td>
                                                <td>0023555</td>
                                                <td>John Smith landscaping</td>
                                                <td>LANDRICH</td>
                                                <td>202-555-0191</td>
                                                <td>John Smith</td>
                                                <td>158.25</td>
                                                <td>85.00</td>
                                                <td class="text-center">
                                                    <span>
                                                        <a href="javascript:;">
                                                            <img src="assets/img/edit.svg" alt=""/>
                                                        </a>
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="text-danger">Inactive</td>
                                                <td>0023478</td>
                                                <td>Windham Gardens</td>
                                                <td>LANDRICH</td>
                                                <td>202-555-0191</td>
                                                <td>Brendan Weirs</td>
                                                <td>158.25</td>
                                                <td>125.02</td>
                                                <td class="text-center">
                                                    <span>
                                                        <a href="javascript:;">
                                                            <img src="assets/img/edit.svg" alt=""/>
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
         :<AddCustomer/>}
        </>
    )
}

}

export default OrganizationSettings