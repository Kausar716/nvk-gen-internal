/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
import React, { Component } from 'react'  
// import { Link } from 'react-router-dom';  
 class Sidebar extends Component {  
    render() {  
        return ( 
            <>
            {/* // <!-- begin #sidebar --> */}
            <div id="sidebar" className="sidebar">
			{/* <!-- begin sidebar scrollbar --> */}
			<div data-scrollbar="true" data-height="100%">
				{/* <!-- begin sidebar nav --> */}
				<ul className="nav">
					{/* <!-- sidebar minify button start --> */}
					<li><a href="javascript:;" className="sidebar-minify-btn" data-click="sidebar-minify"><i className="fa fa-angle-double-left"></i></a></li>
					{/* <!-- sidebar minify button end--> */}
					<li className="">
						<a href="javascript:;">
							<img src="assets/img/dashboard.svg" alt=""/>
							<span>Dashboard</span>
						</a>
					</li>
					<li className="">
						<a href="javascript:;">
							<img src="assets/img/customer-quotes.svg" alt=""/>
							<span>Customer Quotes & Orders</span>
						</a>
					</li>
					<li className="">
						<a href="javascript:;">
							<img src="assets/img/purchase-orders.svg" alt=""/>
							<span>Purchase Orders</span>
						</a>
					</li>
					<li className="has-sub active">
						<a href="javascript:;">
							<b className="caret"></b>
							<img src="assets/img/inventory.svg" alt=""/>
							<span>Inventory</span> 
						</a>
						<ul className="sub-menu">
							<li><a href="javascript:;">Inventory Lists</a></li>
							<li><a href="javascript:;">Master Inventory</a></li>
							<li><a href="javascript:;">Task Queue</a></li>
							<li className="active"><a href="javascript:;">Plant Manager</a></li>
							<li><a href="javascript:;">Product Manager</a></li>
							<li><a href="javascript:;">Plant Settings</a></li>
							<li><a href="javascript:;">Product Settings</a></li>
							<li><a href="javascript:;">Inventory Settings</a></li>
						</ul>
					</li>
					<li className="">
						<a href="javascript:;">
							<img src="assets/img/Customer-management.svg" alt=""/>
							<span>Customer Management</span>
						</a>
					</li>
					<li className="">
						<a href="javascript:;">
							<img src="assets/img/supplier.svg" alt=""/>
							<span>Supplier Management</span>
						</a>
					</li>
					<li className="">
						<a href="javascript:;">
							<img src="assets/img/settings.svg" alt=""/>
							<span>Tools & Settings</span>
						</a>
					</li>
					<li className="">
						<a href="javascript:;">
							<img src="assets/img/reports.svg" alt=""/>
							<span>Reports</span>
						</a>
					</li>
					<li className="">
						<a href="javascript:;">
							<img src="assets/img/staff.svg" alt=""/>
							<span>Staff Directory</span>
						</a>
					</li>
					<li className="">
						<a href="javascript:;">
							<img src="assets/img/message-center.svg" alt=""/>
							<span>Message Center</span>
						</a>
					</li>
					<li className="">
						<a href="javascript:;">
							<img src="assets/img/location.svg" alt="" />
							<span>Map Locator</span>
						</a>
					</li>
				</ul>
				{/* <!-- end sidebar nav --> */}
			</div>
			{/* <!-- end sidebar scrollbar --> */}
		</div>
		<div className="sidebar-bg"></div>
		{/* <!-- end #sidebar --> */}
        </>

)  
    }  
}  
  
export default Sidebar