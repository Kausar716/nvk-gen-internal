/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React ,{useState} from "react";
import { Link } from "react-router-dom";



export default function Left() {
  const [selectedMainBar,setSelectedMainBar] = useState("Dashboard")
  const [selectedSubBar , setSelectedSubBar] = useState("")
  const [initialSelect,setInitialSelect] = useState(true)
 const handleMainSelection= (id) => {
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
            <li class={selectedMainBar === "CustomerQuotes"?"active":""} onClick={()=>{handleMainSelection("CustomerQuotes")}}>             
                <Link to="/commingsoon">
                <img src="assets/img/customer-quotes.svg" alt=""/>
                <span>Customer Quotes &amp; Orders</span>
                </Link>            
            </li>
            <li class={selectedMainBar === "PurchaseOrder"?"active":""} onClick={()=>{handleMainSelection("PurchaseOrder")}}>
              <Link to="/commingsoon">
                <img src="assets/img/purchase-orders.svg" alt=""/>
                <span>Purchase Orders</span>
              </Link>
            </li>
            <li  
            class={(selectedMainBar === "inventoryM")?"has-sub active":""} onClick={()=>{handleMainSelection("inventoryM")}} 
            >
              <a href="javascript:void(0)">
              <b class="caret"></b>
                <img src="assets/img/inventory.svg" alt=""/>
                <span>Inventory</span> 
              </a>
              <ul class="sub-menu">
                <li class= {(selectedSubBar === "inventory1" || initialSelect)?"active":""} onClick={()=>{handleSubSelection("inventory1")}}><Link to="/commingsoon">Inventory Lists</Link></li>
                <li class= {(selectedSubBar === "inventory2")?"active":""} onClick={()=>{handleSubSelection("inventory2")}}><Link to="/commingsoon">Master Inventory</Link></li>
                <li class= {(selectedSubBar === "inventory3")?"active":""} onClick={()=>{handleSubSelection("inventory3")}}><Link to="/commingsoon">Task Queue</Link></li>
                <li class= {(selectedSubBar === "inventory4")?"active":""} onClick={()=>{handleSubSelection("inventory4")}}><Link to="/plantManager">Plant Manager</Link></li>
                <li class= {(selectedSubBar === "inventory5")?"active":""} onClick={()=>{handleSubSelection("inventory5")}}><Link to="/productManager">Product Manager</Link></li>
                <li class= {(selectedSubBar === "inventory6")?"active":""} onClick={()=>{handleSubSelection("inventory6")}}><Link to="/commingsoon">Plant Settings</Link></li>
                <li class= {(selectedSubBar === "inventory7")?"active":""} onClick={()=>{handleSubSelection("inventory7")}}><Link to="/commingsoon">Product Settings</Link></li>
                <li class= {(selectedSubBar === "inventory8")?"active":""} onClick={()=>{handleSubSelection("inventory8")}}><Link to="/commingsoon">Inventory Settings</Link></li>
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
            <li class={selectedMainBar === "ToolsAndSettings"?"active":""} onClick={()=>{handleMainSelection("ToolsAndSettings")}}>
              <Link to="/commingsoon">
                <img src="assets/img/settings.svg" alt=""/>
                <span>Tools &amp; Settings</span>
              </Link>
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
            <li class={selectedMainBar === "MessageCenter"?"active":""} onClick={()=>{handleMainSelection("MessageCenter")}}>
              <Link to="/commingsoon">
                <img src="assets/img/message-center.svg" alt=""/>
                <span>Message Center</span>
              </Link>
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
