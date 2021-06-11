/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'  
  
export class Header extends Component {  
    render() {  
        return ( 
            <div id="header" className="header navbar-default align-items-center">
			{/* <!-- begin navbar-header --> */}
			<div className="navbar-header">
				<a href="index.html" className="navbar-brand">
					<img src="assets/img/logo.svg" alt=""/>
				</a>
				<button type="button" className="navbar-toggle" data-click="sidebar-toggled">
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
				</button>
			</div>
			{/* <!-- end navbar-header --><!-- begin -nav --> */}
			<ul className="navbar-nav navbar-right">
				<li className="dropdown">
					<a href="#" className="dropdown-toggle f-s-14">
						<img src="assets/img/notifications.svg" alt=""/>
					</a>
				</li>
				<li className="dropdown navbar-user align-items-center">
					<a href="#" className="dropdown-toggle">
						<img src="assets/img/profile-img.svg" alt="" /> 
						<span className="d-none d-md-inline">User name</span>
					</a>
				</li>
				<li className="dropdown headerMenuIc">
					<a href="#" className="dropdown-toggle">
						<img src="assets/img/menu.svg" alt="" /> 
					</a>
				</li>
			</ul>
			{/* <!-- end header-nav --> */}
		</div>
)  
    }  
}  
  
export default Header