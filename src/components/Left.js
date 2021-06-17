/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React ,{useState} from "react";
import { Link } from "react-router-dom";



export default function Left() {
  const [selectedMainBar,setSelectedMainBar] = useState("Dashboard")
  const [selectedSubBar , setSelectedSubBar] = useState("")
  const [initialSelect,setInitialSelect] = useState(true)
 const handleMainSelection= (id) => {
    console.log(id)
   console.log(selectedSubBar)
  if(!selectedSubBar.includes(id))setInitialSelect(true)
  if(selectedSubBar.includes(id))setInitialSelect(false)

  setSelectedMainBar(id)
 }
 const handleSubSelection= (id) => {
   if( id.includes("1")){
    setInitialSelect(true)   
   }
   else {
    setInitialSelect(false)
   }
  setSelectedSubBar(id)
 }

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
            <li class={selectedMainBar === "Dashboard"?"active":""} onClick={()=>{handleMainSelection("Dashboard")}} >
              <Link to="/Dashboard">
                <img src="assets/img/dashboard.svg" alt=""/>
                <span>Dashboard</span>
              </Link>
            </li>
            <li class={selectedMainBar === "orderList"?"has-sub active":""} onClick={()=>{handleMainSelection("orderList")}}>             
            <a href="javascript:void(0)">
              <b class="caret"></b>
                <img src="assets/img/customer-quotes.svg" alt=""/>
                <span>Customer Quotes &amp; Orders</span>
                </a>  
                <ul class="sub-menu">
                <li class= {(selectedSubBar === "orderList1" || initialSelect)?"active":""} onClick={(e)=>{
                  e.stopPropagation()
                  handleSubSelection("orderList1")}}><Link to="/commingsoon">Order List</Link></li>
                <li class= {(selectedSubBar === "orderList2")?"active":""} onClick={(e)=>{
                  e.stopPropagation()
                  handleSubSelection("orderList2")}}><Link to="/commingsoon">New Order</Link></li>
                <li class= {(selectedSubBar === "orderList3")?"active":""} onClick={(e)=>{
                  e.stopPropagation()
                  handleSubSelection("orderList3")}}><Link to="/commingsoon">Quick Pick</Link></li>
                <li class= {(selectedSubBar === "orderList4")?"active":""} onClick={(e)=>{
                  e.stopPropagation()
                  handleSubSelection("orderList4")}}><Link to="/commingsoon">Reserve</Link></li>
                <li class= {(selectedSubBar === "orderList5")?"active":""} onClick={(e)=>{
                  e.stopPropagation()
                  handleSubSelection("orderList5")}}><Link to="/commingsoon">Invoices & Adjustments</Link></li>
                <li class= {(selectedSubBar === "orderList6")?"active":""} onClick={(e)=>{
                  e.stopPropagation()
                  handleSubSelection("orderList6")}}><Link to="/commingsoon">Requests</Link></li>
                <li class= {(selectedSubBar === "orderList7")?"active":""} onClick={(e)=>{
                  e.stopPropagation()
                  handleSubSelection("orderList7")}}><Link to="/commingsoon">Quote List</Link></li>
                <li class= {(selectedSubBar === "orderList8")?"active":""} onClick={(e)=>{
                  e.stopPropagation()
                  handleSubSelection("orderList8")}}><Link to="/commingsoon">New Quote</Link></li>
              </ul>          
            </li>
            <li class={selectedMainBar === "purchaseOrder"?"has-sub active":""} onClick={()=>{handleMainSelection("purchaseOrder")}}>
              <Link to="/commingsoon">
              <b class="caret"></b>
                <img src="assets/img/purchase-orders.svg" alt=""/>
                <span>Purchase Orders</span>
              </Link>
              <ul class="sub-menu">
                <li class= {(selectedSubBar === "purchaseOrder1" || initialSelect)?"active":""} onClick={(e)=>{
                  e.stopPropagation()
                  handleSubSelection("purchaseOrder1")}}><Link to="/commingsoon">P.O.List</Link></li>
                <li class= {(selectedSubBar === "purchaseOrder2")?"active":""} onClick={(e)=>{
                  e.stopPropagation()
                  handleSubSelection("purchaseOrder2")}}><Link to="/commingsoon">New P.O</Link></li>
              </ul>  
            </li>
            <li  
            class={(selectedMainBar === "inventory")?"has-sub active":""} onClick={()=>{handleMainSelection("inventory")}} 
            >
              <a href="javascript:void(0)">
              <b class="caret"></b>
                <img src="assets/img/inventory.svg" alt=""/>
                <span>Inventory</span> 
              </a>
              <ul class="sub-menu">
                <li class= {(selectedSubBar === "inventory1" || initialSelect)?"active":""} onClick={(e)=>{
                  e.stopPropagation()
                  handleSubSelection("inventory1")}}><Link to="/commingsoon">Inventory Lists</Link></li>
                <li class= {(selectedSubBar === "inventory2")?"active":""} onClick={(e)=>{
                  e.stopPropagation()
                  handleSubSelection("inventory2")}}><Link to="/commingsoon">Master Inventory</Link></li>
                <li class= {(selectedSubBar === "inventory3")?"active":""} onClick={(e)=>{
                  e.stopPropagation()
                  handleSubSelection("inventory3")}}><Link to="/commingsoon">Task Queue</Link></li>
                <li class= {(selectedSubBar === "inventory4")?"active":""} onClick={(e)=>{
                  e.stopPropagation()
                  handleSubSelection("inventory4")}}><Link to="/plantManager">Plant Manager</Link></li>
                <li class= {(selectedSubBar === "inventory5")?"active":""} onClick={(e)=>{
                  e.stopPropagation()
                  handleSubSelection("inventory5")}}><Link to="/productManager">Product Manager</Link></li>
                <li class= {(selectedSubBar === "inventory6")?"active":""} onClick={(e)=>{
                  e.stopPropagation()
                  handleSubSelection("inventory6")}}><Link to="/plantSettings">Plant Settings</Link></li>
                <li class= {(selectedSubBar === "inventory7")?"active":""} onClick={(e)=>{
                  e.stopPropagation()
                  handleSubSelection("inventory7")}}><Link to="/productsettings">Product Settings</Link></li>
                <li class= {(selectedSubBar === "inventory8")?"active":""} onClick={(e)=>{
                  e.stopPropagation()
                  handleSubSelection("inventory8")}}><Link to="/commingsoon">Inventory Settings</Link></li>
              </ul>
            </li>
            <li class={selectedMainBar === "CustomerManagement"?"active":""} onClick={()=>{handleMainSelection("CustomerManagement")}}>
            {/* activeClassName="active" */}
            <Link to="/commingsoon">
                <img src="assets/img/customermanagement.svg" alt=""/>
                <span>Customer Management</span>
              </Link>
            </li>
            <li class={selectedMainBar === "SupplierManagement"?"active":""} onClick={()=>{handleMainSelection("SupplierManagement")}}>
              <Link to="/commingsoon">
                <img src="assets/img/supplier.svg" alt=""/>
                <span>Supplier Management</span>
              </Link>
            </li>
            <li class={selectedMainBar === "ToolsAndSettings"?"has-sub active":""} onClick={()=>{handleMainSelection("ToolsAndSettings")}}>
              <Link to="/commingsoon">
              <b class="caret"></b>
                <img src="assets/img/settings.svg" alt=""/>
                <span>Tools &amp; Settings</span>
              </Link>
              <ul class="sub-menu">
                <li class= {(selectedSubBar === "AdminSetting1" || initialSelect)?"active":""} onClick={(e)=>{
                  e.stopPropagation()
                  handleSubSelection("AdminSetting1")}}><Link to="/commingsoon">Organization</Link></li>
                <li class= {(selectedSubBar === "AdminSetting2")?"active":""} onClick={(e)=>{e.stopPropagation();handleSubSelection("AdminSetting2")}}><Link to="/userSetting">User Settings</Link></li>
                <li class= {(selectedSubBar === "AdminSetting3")?"active":""} onClick={(e)=>{e.stopPropagation();handleSubSelection("AdminSetting3")}}><Link to="/commingsoon">Customer Settings</Link></li>
                <li class= {(selectedSubBar === "AdminSetting4")?"active":""} onClick={(e)=>{e.stopPropagation();handleSubSelection("AdminSetting4")}}><Link to="/commingsoon">Supplier Settings</Link></li>
                <li class= {(selectedSubBar === "AdminSetting5")?"active":""} onClick={(e)=>{e.stopPropagation();handleSubSelection("AdminSetting5")}}><Link to="/commingsoon">Tags & Labels</Link></li>
                <li class= {(selectedSubBar === "AdminSetting6")?"active":""} onClick={(e)=>{e.stopPropagation();handleSubSelection("AdminSetting6")}}><Link to="/commingsoon">Image Management</Link></li>
                <li class= {(selectedSubBar === "AdminSetting7")?"active":""} onClick={(e)=>{e.stopPropagation();handleSubSelection("AdminSetting7")}}><Link to="/commingsoon">User Management</Link></li>
              </ul>
            </li>
            <li class={selectedMainBar === "Reports"?"active":""} onClick={()=>{handleMainSelection("Reports")}}>
              <Link to="/commingsoon">
                <img src="assets/img/reports.svg" alt=""/>
                <span>Reports</span>
              </Link>
            </li>
            <li class={selectedMainBar === "StaffDirectory"?"active":""} onClick={()=>{handleMainSelection("StaffDirectory")}}>
              <Link to="/commingsoon">
                <img src="assets/img/staff.svg" alt=""/>
                <span>Staff Directory</span>
              </Link>
            </li>
            <li class={selectedMainBar === "MessageCenter"?"has-sub active":""} onClick={()=>{handleMainSelection("MessageCenter")}}>
              <Link to="/commingsoon">
              <b class="caret"></b>
                <img src="assets/img/message-center.svg" alt=""/>
                <span>Message Center</span>
              </Link>
              <ul class="sub-menu">
                <li class= {(selectedSubBar === "messageCentre1"|| initialSelect)?"active":""} onClick={(e)=>{e.stopPropagation();handleSubSelection("messageCentre1")}}><Link to="/commingsoon">Inbox</Link></li>
                <li class= {(selectedSubBar === "messageCentre2")?"active":""} onClick={(e)=>{e.stopPropagation();handleSubSelection("messageCentre2")}}><Link to="/commingsoon">Sent Items</Link></li>
                <li class= {(selectedSubBar === "messageCentre3")?"active":""} onClick={(e)=>{e.stopPropagation();handleSubSelection("messageCentre3")}}><Link to="/commingsoon">Compose Message</Link></li>
              </ul>
            </li>
            <li class={selectedMainBar === "MapLocator"?"active":""} onClick={()=>{handleMainSelection("MapLocator")}}>
              <Link to="/commingsoon">
                <img src="assets/img/location.svg" alt=""/>
                <span>Map Locator</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div class="sidebar-bg"></div>
    </div>
  );
}
