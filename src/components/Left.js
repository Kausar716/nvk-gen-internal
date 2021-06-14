/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

export default function Left() {
  return (
    <div>
      <div id="sidebar" class="sidebar">
        <div data-scrollbar="true" data-height="100%">
          <ul class="nav">
            <li>
              <a href="javascript:;" class="sidebar-minify-btn" data-click="sidebar-minify">
                <i class="fa fa-angle-double-left"></i>
              </a>
            </li>
            <li class="active" >
              <Link to="/">
                <img src="assets/img/dashboard.svg" alt=""/>
                <span>Dashboard</span>
              </Link>
            </li>
            <li class="">
              <a href="javascript:;">
                <img src="assets/img/customer-quotes.svg" alt=""/>
                <span>Customer Quotes &amp; Orders</span>
              </a>
            </li>
            <li class="">
              <Link to="/purchaseOrder">
                <img src="assets/img/purchase-orders.svg" alt=""/>
                <span>Purchase Orders</span>
              </Link>
            </li>
            <li class="has-sub">
              <a href="javascript:;">
                <b class="caret"></b>
                <img src="assets/img/inventory.svg" alt=""/>
                <span>Inventory</span> 
              </a>
              <ul class="sub-menu">
                <li><a href="javascript:;">Inventory Lists</a></li>
                <li><a href="javascript:;">Master Inventory</a></li>
                <li><a href="javascript:;">Task Queue</a></li>
                <li class="active"><Link to="/plantManager">Plant Manager</Link></li>
                <li class="active"><Link to="/productManager">Product Manager</Link></li>
                <li><a href="javascript:;">Plant Settings</a></li>
                <li><a href="javascript:;">Product Settings</a></li>
                <li><a href="javascript:;">Inventory Settings</a></li>
              </ul>
            </li>
            <li class="" activeClassName="active">
              <a href="javascript:;">
                <img src="assets/img/Customer-management.svg" alt=""/>
                <span>Customer Management</span>
              </a>
            </li>
            <li class="">
              <a href="javascript:;">
                <img src="assets/img/supplier.svg" alt=""/>
                <span>Supplier Management</span>
              </a>
            </li>
            <li class="">
              <a href="javascript:;">
                <img src="assets/img/settings.svg" alt=""/>
                <span>Tools &amp; Settings</span>
              </a>
            </li>
            <li class="">
              <a href="javascript:;">
                <img src="assets/img/reports.svg" alt=""/>
                <span>Reports</span>
              </a>
            </li>
            <li class="">
              <a href="javascript:;">
                <img src="assets/img/staff.svg" alt=""/>
                <span>Staff Directory</span>
              </a>
            </li>
            <li class="">
              <a href="javascript:;">
                <img src="assets/img/message-center.svg" alt=""/>
                <span>Message Center</span>
              </a>
            </li>
            <li class="">
              <a href="javascript:;">
                <img src="assets/img/location.svg" alt=""/>
                <span>Map Locator</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="sidebar-bg"></div>
    </div>
  );
}
