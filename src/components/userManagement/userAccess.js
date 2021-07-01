import React from 'react'
import {  Tabs,  TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {connect} from "react-redux";

import {getRolesList,showRole,addRoler,updateRole,deleteRole,getPermissionList,handleUserAccessInputAction} from "../../actions/userAccessAction";
import {getUsersList,showUser} from "../../actions/userAction";



 class UserAccess extends React.Component{
    constructor(props){
        super(props)
        this.state={    
    quotes:false,
    openOrder:false,
    actionDeleteOrder:false,
    actionCreateQuotes:false,
    closedAndCancledOrder:false,
    pickingOrder:false,
    readyOrder:false,
    actionReturnToOrder:false,
    reservations:false,
    shippedInvoicesAdjustment:false,
    receiveInvoice:false,
    quickPicks:false,
    actionOveride:false,
    digAndPlantRequest1:false,
    ToolsAndsettings:false,
    TagsAndLabels:false,
    organizationSettings:false,
    mapLocator:false,
    maplocatorEditMaps:false,
    customerManagement:false,
    customerListAddEditForCustomer:false,
    customerListViewPrintForCustomer:false,
    customerSettings:false,
    userManagement:false,
    customerListAddEditForUser:false,
    customerListViewPrintForUser:false,
    userSetting:false,
    supervisorRolePurchase:false,
    createAndModifyDraftPurchase:false,
    createModifyDeleteOpenOrder:false,
    receiveAndCheckinOpenOrder:false,
    viewClosedCancelledOrder:false,
    actionClosedOpenOrder:false,
    supervisorRole:false,
    PlantManager:false,
    addEdit:false,
    printPlant:false,
    inventoryManagement:false,
    dashboardView:false,
    dashboardModify:false,
    masterInventoryView:false,
    masterInventoryModify:false,
    taskQueueView:false,
    taskQueueModify:false,
    selectedUser:{}
        }
    }
        

    // userProfile:false,
    // userAccess:false,
    // staffDirectory:false,
    
    // inventoryManagement:false,
    // plantSetting:false,
    // productSetting:false,
    // locationSetting:false, 
    // role:"" ,
    // createRoleToggle:false,
    // createRole:false,
    // selectedRole:"sales",
    // deleteRoleToggle:false,
    // deleteRole:false  
      // supplierManagement:false,
    // supplierListAddEdit:false,
    // supplierListView:false,
    // supplierSetting:false,       
    handleCheckBox = (e) => {
        console.log(e.target)
        const {target:{name,checked,id}} =e
        // this.setState({[name]:checked})
        console.log(name.id)
        this.props.handleUserAccessInputAction(name,id,checked)

    }

    componentDidMount(){
        this.props.getRolesList()
        this.props.getPermissionList()
        // this.props.getUsersList()
    }
    handleSelect= (e) => {
        let checkBoxGroup = e.target.id
        let name = e.target.name
        console.log(e.target.checked)

        console.log(checkBoxGroup)
        console.log(name)
        
        


        if(checkBoxGroup === "QuotesPermissionAll" ||checkBoxGroup === "QuotesPermissionNone" || checkBoxGroup==="allPermissionOff" || checkBoxGroup==="PermissionOnAll"){            
            this.setState({
                supervisorRole: checkBoxGroup.includes("All")?e.target.checked:false,
                quotes:checkBoxGroup.includes("All")?e.target.checked:false,
                openOrder:checkBoxGroup.includes("All")?e.target.checked:false,
                actionDeleteOrder:checkBoxGroup.includes("All")?e.target.checked:false,
                actionCreateQuotes:checkBoxGroup.includes("All")?e.target.checked:false,
                closedAndCancledOrder:checkBoxGroup.includes("All")?e.target.checked:false,
                pickingOrder:checkBoxGroup.includes("All")?e.target.checked:false,
                readyOrder:checkBoxGroup.includes("All")?e.target.checked:false,
                actionReturnToOrder:checkBoxGroup.includes("All")?e.target.checked:false,
                reservations:checkBoxGroup.includes("All")?e.target.checked:false,
                shippedInvoicesAdjustment:checkBoxGroup.includes("All")?e.target.checked:false,
                receiveInvoice:checkBoxGroup.includes("All")?e.target.checked:false,
                quickPicks:checkBoxGroup.includes("All")?e.target.checked:false,
                actionOveride:checkBoxGroup.includes("All")?e.target.checked:false,
                digAndPlantRequest1:checkBoxGroup.includes("All")?e.target.checked:false,
            })

        }
        //  if(checkBoxGroup==="additionalPermission"|| checkBoxGroup==="allPermissionOff" || checkBoxGroup==="PermissionOnAll"){
        //     this.setState({
        //     supervisorRolePurchase: name === "selectAll"?true:false,
        //     createAndModifyDraftPurchase: name === "selectAll"?true:false,
        //     createModifyDeleteOpenOrder: name === "selectAll"?true:false,
        //     receiveAndCheckinOpenOrder: name === "selectAll"?true:false,
        //     viewClosedCancelledOrder: name === "selectAll"?true:false,
        //     actionClosedOpenOrder: name === "selectAll"?true:false,
        //     })
        // }
        // if(checkBoxGroup==="purchaseOrderPermission"|| checkBoxGroup==="allPermissionOff" || checkBoxGroup==="PermissionOnAll"){
        //     this.setState({
        //     supervisorRolePurchase: name === "selectAll"?true:false,
        //     createAndModifyDraftPurchase: name === "selectAll"?true:false,
        //     createModifyDeleteOpenOrder: name === "selectAll"?true:false,
        //     receiveAndCheckinOpenOrder: name === "selectAll"?true:false,
        //     viewClosedCancelledOrder: name === "selectAll"?true:false,
        //     actionClosedOpenOrder: name === "selectAll"?true:false,
        //     })
        // }
         if(checkBoxGroup === "inventoryManagementPermission" || checkBoxGroup==="allPermissionOff"|| checkBoxGroup==="PermissionOnAll"){
            this.setState({
            supervisorRole: name === "selectAll"?true:false,
            PlantManager: name === "selectAll"?true:false,
            addEdit: name === "selectAll"?true:false,
            printPlant: name === "selectAll"?true:false,
            inventoryManagement: name === "selectAll"?true:false,
            dashboardView: name === "selectAll"?true:false,
            dashboardModify: name === "selectAll"?true:false,
            masterInventoryView: name === "selectAll"?true:false,
            masterInventoryModify: name === "selectAll"?true:false,
            taskQueueView: name === "selectAll"?true:false,
            taskQueueModify: name === "selectAll"?true:false,
            })
        }
         if(checkBoxGroup === "additionalPermissionAll"|| checkBoxGroup === "additionalPermissionNone" || checkBoxGroup==="allPermissionOff" || checkBoxGroup==="PermissionOnAll"){
            this.setState({
               ToolsAndsettings: name === "selectAll"?true:false,
               TagsAndLabels: name === "selectAll"?true:false,
               organizationSettings: name === "selectAll"?true:false,
               mapLocator: name === "selectAll"?true:false,
               maplocatorEditMaps: name === "selectAll"?true:false,
               customerManagement: name === "selectAll"?true:false,
               customerListAddEditForCustomer: name === "selectAll"?true:false,
               customerListViewPrintForCustomer: name === "selectAll"?true:false,
               customerSettings: name === "selectAll"?true:false,
               userManagement: name === "selectAll"?true:false,
               userSetting: name === "selectAll"?true:false,   
               customerListAddEditForUser: name === "selectAll"?true:false, 
               customerListViewPrintForUser: name === "selectAll"?true:false,          
            })
        }

    }
    handleUpdate = (e) => {
        let createRoleToggle = ! this.state.createRoleToggle
        this.setState({createRoleToggle})
    }
    handlecreateRoleModalResult = (e) => {
        console.log(e.target.id)
        let createRole
        if(e.target.id=== "success"){
            createRole=true
        }
        else{
            createRole=false
        }
        this.setState({createRole,createRoleToggle:false})
    }
    handleDelete = () => {
        this.setState({deleteRoleToggle:true})
    }
    handleDeleteRoleModalResult = (e) => {
        console.log(e.target.id)
        let deleteRole
        if(e.target.id=== "success"){
            deleteRole=true
        }
        else{
            deleteRole=false
        }
        this.setState({deleteRole,deleteRoleToggle:false})
    } 
    handleRoleSelect = (e) => {
        
    }
   

    handleUserSelect = (e) =>{
        console.log(e.target.value)
        let selectedId = e.target.value
        let userProfiles  =  [...this.props.users.active,...this.props.users.inactive]
        console.log(userProfiles)
        let result = this.props.showUser(selectedId)
        console.log(result)
  
        // this.setState({selectedUser:selectedUser[0]})

    }


    render(){
        let userProfiles = []  
        let selectedUser = this.props.user.data
        let exestingRoles = []
        let exestingPermission = []
        let currentPermissionNames= this.props.temp.currentPermissionNames
        console.log(this.props.permissionList)
        let userData = {}
        if(this.props.user)
        {
            console.log(this.props.user)
            if(this.props.user.user){
            userData=this.props.user.user.data
            exestingRoles = this.props.user.user.data.roles
            console.log(userData)
            }
        }
        if(this.props.permissionList){
            exestingPermission = this.props.permissionList.payload
        }
        console.log(currentPermissionNames)
        userProfiles =  [...this.props.users.active,...this.props.users.inactive]
    return (
        <>
        {/* <div clas="userManagementSection"> */}
               {/* <div class="contentHeader bg-white d-flex justify-content-between align-items-center">
				<h1 class="page-header mb-0 d-flex align-items-center">
                    <img src="assets/img/settings-primary.svg" class="mr-2"/>User Management
                </h1>
			</div> */}
            {/* <div class="px-md-3 mt-3"> */}
                <Tabs>
                    {/* <TabList class="d-inline-block bg-white pl-0">
                        <Tab>User Profile</Tab>
                        <Tab>User Access</Tab>
                    </TabList> */}
                    {/* <TabPanel>
                    <div class="bg-white">
                        <h4 class="p-15 mb-0">Add, Edit or Remove User</h4>
                        <hr class="m-0"/>
                        <div class="ContentSection p-15">
                            <div class="row">
                                <div class="col-md-12 col-lg-12">
                                    <div class="bg-grey-transparent-2 text-center px-2 py-2">
                                        <div class="d-flex align-items-center justify-content-center"><img src="assets/img/bulp-ic.svg" alt=""/><h5 class="ml-2 mb-0">Did you know?</h5></div>
                                        <p class="m-0">Inactive users will not have access to this system. User permissions can be sent via <a href="">User Access</a>.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-md-12 col-lg-12">
                                   <h4>Select user profile to edit or choose Create New User</h4>
                                   <div class="row d-flex align-items-center mt-4 mt-md-0">
                                        <div class="col-md-4 col-lg-4">  
                                            <h5>Select User Profile</h5>
                                            <select class="form-control">
                                                <option>Select</option>
                                                <option>Option 1</option>
                                                <option>Option 2</option>
                                            </select>
                                        </div>
                                        <div class="col-md-4 col-lg-4 pt-md-4 mt-3 mt-md-0">  
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="customCheck1"/>
                                                <label class="custom-control-label pl-2" for="customCheck1"> Display deleted records</label>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-lg-4 text-center mt-3 mt-md-0">
                                            <span class="f-w-500">Create New User</span>
                                            <a href="javascript:;" class="d-md-block mt-md-2 ml-3 ml-md-0">
                                               <img src="assets/img/create-new-user-ic.svg" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </TabPanel> */}
                    <TabPanel>
                    <div class="pb-4">
                        <div class="bg-white">
                            <div class="row mb-3 mb-md-0">
                                <div class="col-md-6 col-lg-6">
                                    <div class="f-s-24 px-3 py-3 f-w-500">User Access - <span class="f-s-18 p-15 mb-0">Add, Edit or Remove User</span></div>
                                </div>
                            </div>
                            <hr class="m-0"/>
                            <div class="ContentSection p-15">
                                <div class="row">
                                    <div class="col-md-12 col-lg-12">
                                        <div class="bg-grey-transparent-2 text-center px-2 py-2">
                                            <div class="d-flex align-items-center justify-content-center"><img src="assets/img/bulp-ic.svg" alt=""/><h5 class="ml-2 mb-0">Did you know?</h5></div>
                                            <p class="m-0">Only active users will are visible to set permissions. User profile can be sent or modified via <a href="">User Access</a>.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-4">
                            <h3>Select user name to edit permissions</h3>
                            <div class="bg-white mt-2">
                                <div class="ContentSection p-15">
                                    <div class="row">
                                        <div class="col-md-6 col-lg-5">
                                            <div class="bg-grey-transparent-2 px-3 py-3">
                                                <div class="row align-items-center">
                                                    <div class="col-md-3 col-lg-3">
                                                        <img src="assets/img/profile-img.png" class="img-fluid" />
                                                    </div>
                                                    <div class="col-md-9 col-lg-9">
                                                        <p class="mb-0">Olivia</p>
                                                        <div>Olivia231@gmail.com</div>
                                                        <a href="#" class="mt-3 d-block">View Profile <img src="assets/img/edit-blue-ic.svg" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-lg-5 mt-3 mt-md-0">
                                            <div class="row align-items-end">
                                                <div class="col-md-8">
                                                    <div>
                                                        <h5>Select User Profile</h5>
                                                        <select class="form-control" name="userList" onChange={this.handleUserSelect}>
                                                        <option>Select</option>
                                                        {userProfiles.length>0?userProfiles.map(userObj=>{
                                                            return  <option value={userObj.id}>{userObj.name}</option>
                                                        }):null}
                                                        </select>
                                                    </div>
                                                    <div class="mt-2">
                                                        <h5>Load Existing Role</h5>
                                                        {/* <select class="form-control">
                                                            <option>User</option>
                                                            <option>Option 1</option>
                                                            <option>Option 2</option>
                                                        </select> */}
                                                        <select class="form-control"  onChange={this.handleRoleSelect}>
                                                        <option value="0" selected>None</option>
                                                        {exestingRoles?exestingRoles.map(role=>{
                                                                    return(
                                                                        <option value={role.id}>{role.name} </option>
                                                                    )
                                                                }):""                                       
                                                        }
                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-md-4 mt-2 mt-md-0">
                                                    <a href="#" class="deleteRoleLink">
                                                        <img src="assets/img/delete.svg" class="mr-2" />
                                                        Delete Role
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-4">
                            <div class="row">
                                <div class="col-md-12 d-flex justify-content-md-end">
                                    <div class="custom-control custom-checkbox" >
                                        <input type="checkbox" class="custom-control-input" id="turnOn"  onChange={this.handleCheckBox} name="turnOn"/>
                                        <label class="custom-control-label pl-2" for="turnOn"> Turn All Permissions On</label>
                                    </div>
                                    <div class="custom-control custom-checkbox ml-2">
                                        <input type="checkbox" class="custom-control-input" id="turnOff"  onClick={this.handleCheckBox} name="turnOff"/>
                                        <label class="custom-control-label pl-2" for="turnOff"> Turn All Permissions Off</label>
                                    </div>
                                </div>
                            </div>
                            <div class="bg-white mt-2">
                                <div class="ContentSection p-15">
                                    <h4>Quote &amp; Order Permissions</h4>
                                    <div class="row mt-3">
                                     
                                        <div class="col-md-4 col-lg-4">
                                        {exestingPermission?exestingPermission.filter(premission => premission.name==="Supervisor Role"  && premission.group_name === "quotesAndOrders").map(filteredPermission => (
                                           
                                           <div class="custom-control custom-checkbox">
                                           <input type="checkbox" class="custom-control-input"  id={filteredPermission.id} name="Supervisor Role"  checked={currentPermissionNames.includes("Supervisor Role")} onChange={this.handleCheckBox}/>
                                           <label class="custom-control-label pl-2" for="supervisorRole_quotes">Supervisor Role</label>
                                           </div>
                                       )):null}
                                            {exestingPermission?exestingPermission.filter(premission => premission.name==="Quote"  && premission.group_name === "quotesAndOrders").map(filteredPermission => (
                                           
                                           <div class="custom-control custom-checkbox mt-2">
                                           <input type="checkbox" class="custom-control-input" value={this.state.quotes} name="Quote" checked={currentPermissionNames.includes("Quote")} onChange={this.handleCheckBox} id={filteredPermission.id}/>
                                           <label class="custom-control-label pl-2" for="quotes_quotes">Quote</label>
                                       </div>
                                       )):null}
                                            {exestingPermission?exestingPermission.filter(premission => premission.name==="Action Delete Order"  && premission.group_name === "quotesAndOrders").map(filteredPermission => (
                                           
                                           <div class="custom-control custom-checkbox mt-2">
                                                <input type="checkbox" class="custom-control-input" name="Action Delete Order" value={this.state.actionDeleteOrder} checked={currentPermissionNames.includes("Action Delete Order")} onChange={this.handleCheckBox} id={filteredPermission.id}/>
                                                <label class="custom-control-label pl-2" for="actionDeleteOrder_quotes">Action Delete Order</label>
                                            </div>
                                       )):null}
                                        {exestingPermission?exestingPermission.filter(premission => premission.name==="Action Create Quotes"  && premission.group_name === "quotesAndOrders").map(filteredPermission => (
                                           
                                           <div class="custom-control custom-checkbox mt-2">
                                           <input type="checkbox" class="custom-control-input" name="Action Create Quotes" checked={currentPermissionNames.includes("Action Create Quotes")} onChange={this.handleCheckBox} id={filteredPermission.id}/>
                                           <label class="custom-control-label pl-2" for="actionCreateQuotes_quotes">Action Create Quotes</label>
                                       </div>
                                       )):null}                                       
                                           
                                        </div>
                                        <div class="col-md-4 col-lg-4">
                                        {exestingPermission?exestingPermission.filter(premission => premission.name==="Closed &amp; Cancelled Orders"  && premission.group_name === "quotesAndOrders").map(filteredPermission => (
                                           
                                           <div class="custom-control custom-checkbox">
                                           <input type="checkbox" class="custom-control-input"  name="Closed & Cancelled Orders" checked={currentPermissionNames.includes("Closed & Cancelled Orders")} onChange={this.handleCheckBox} id={filteredPermission.id}/>
                                           <label class="custom-control-label pl-2" for="closedAndCancledOrder_quotes"> Closed &amp; Cancelled Orders</label>
                                       </div>
                                       )):null}  
                                        {exestingPermission?exestingPermission.filter(premission => premission.name==="Picking Order"  && premission.group_name === "quotesAndOrders").map(filteredPermission => (
                                           
                                           <div class="custom-control custom-checkbox mt-2">
                                                <input type="checkbox" class="custom-control-input" name="Picking Order" checked={currentPermissionNames.includes("Picking Order")} onChange={this.handleCheckBox} id={filteredPermission.id}/>
                                                <label class="custom-control-label pl-2" for="pickingOrder_quotes">Picking Order</label>
                                            </div>
                                       )):null} 
                                            {exestingPermission?exestingPermission.filter(premission => premission.name==="Ready Order"  && premission.group_name === "quotesAndOrders").map(filteredPermission => (
                                           <div class="custom-control custom-checkbox mt-2">
                                           <input type="checkbox" class="custom-control-input" name="Ready Order" checked={currentPermissionNames.includes("Ready Order")}  onChange={this.handleCheckBox} id={filteredPermission.id}/>
                                           <label class="custom-control-label pl-2" for={filteredPermission.id}> Ready Order</label>
                                       </div>
                                       )):null} 
                                            {exestingPermission?exestingPermission.filter(premission => premission.name==="Action Return to Order"  && premission.group_name === "quotesAndOrders").map(filteredPermission => (
                                           <div class="custom-control custom-checkbox mt-2">
                                           <input type="checkbox" class="custom-control-input" name="Action Return to Order" checked={currentPermissionNames.includes("Action Return to Order")} onChange={this.handleCheckBox} id={filteredPermission.id}/>
                                           <label class="custom-control-label pl-2" for={filteredPermission.id}> Action Return to Order</label>
                                       </div>
                                       )):null}
                                        {exestingPermission?exestingPermission.filter(premission => premission.name==="Reservations"  && premission.group_name === "quotesAndOrders").map(filteredPermission => (
                                          <div class="custom-control custom-checkbox mt-2">
                                          <input type="checkbox" class="custom-control-input" name="Reservations" checked={currentPermissionNames.includes("Reservations")} onChange={this.handleCheckBox} id={filteredPermission.id}/>
                                          <label class="custom-control-label pl-2" for={filteredPermission.id}>Reservations</label>
                                      </div>
                                       )):null}
                                            
                                          
                                            
                                            
                                        </div>
                                        <div class="col-md-4 col-lg-4">
                                        {exestingPermission?exestingPermission.filter(premission => premission.name==="Shipped Invoices Adjustment"  && premission.group_name === "quotesAndOrders").map(filteredPermission => (
                                          <div class="custom-control custom-checkbox">
                                          <input type="checkbox" class="custom-control-input" name="Shipped Invoices Adjustment" checked={currentPermissionNames.includes("Shipped Invoices Adjustment")} onChange={this.handleCheckBox} id={filteredPermission.id}/>
                                          <label class="custom-control-label pl-2" for={filteredPermission.id}>  Shipped Invoices Adjustment</label>
                                      </div>
                                       )):null}
                                       {exestingPermission?exestingPermission.filter(premission => premission.name==="Receive Invoices"  && premission.group_name === "quotesAndOrders").map(filteredPermission => (
                                           <div class="custom-control custom-checkbox mt-2">
                                           <input type="checkbox" class="custom-control-input" name="Receive Invoices" checked={currentPermissionNames.includes("Receive Invoices")} onChange={this.handleCheckBox} id={filteredPermission.id}/>
                                           <label class="custom-control-label pl-2" for={filteredPermission.id}> Receive Invoices</label>
                                       </div>
                                       )):null}
                                       {exestingPermission?exestingPermission.filter(premission => premission.name==="Quick Picks"  && premission.group_name === "quotesAndOrders").map(filteredPermission => (
                                            <div class="custom-control custom-checkbox mt-2">
                                            <input type="checkbox" class="custom-control-input" name="Quick Picks" checked={currentPermissionNames.includes("Quick Picks")} onChange={this.handleCheckBox} id={filteredPermission.id}/>
                                            <label class="custom-control-label pl-2" for={filteredPermission.id}>  Quick Picks</label>
                                        </div>
                                       )):null}
                                        {exestingPermission?exestingPermission.filter(premission => premission.name==="Action Override"  && premission.group_name === "quotesAndOrders").map(filteredPermission => (
                                            <div class="custom-control custom-checkbox mt-2">
                                            <input type="checkbox" class="custom-control-input" name="Action Override" checked={currentPermissionNames.includes("Action Override")} onChange={this.handleCheckBox} id={filteredPermission.id}/>
                                            <label class="custom-control-label pl-2" for="actionOveride_quotes">  Action Override</label>
                                        </div>
                                       )):null}
                                        {exestingPermission?exestingPermission.filter(premission => premission.name==="Dig And Plant Request"  && premission.group_name === "quotesAndOrders").map(filteredPermission => (
                                            <div class="custom-control custom-checkbox mt-2">
                                            <input type="checkbox" class="custom-control-input" name="Dig And Plant Request" checked={currentPermissionNames.includes("Dig And Plant Request")} onChange={this.handleCheckBox} id={filteredPermission.id}/>
                                            <label class="custom-control-label pl-2" for="digAndPlantRequest_quotes"> Dig And Plant Request</label>
                                        </div>
                                       )):null} 
                                        </div>
                                    </div>
                                    <div class="row mt-4">
                                        <div class="col-md-12 d-flex justify-content-md-end">
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="quotesAll" onClick={this.handleCheckBox} name="quotesAll"/>
                                                <label class="custom-control-label pl-2" for="quotesAll"> Select All</label>
                                            </div>
                                            <div class="custom-control custom-checkbox ml-2">
                                                <input type="checkbox" class="custom-control-input" id="quotesNone" onClick={this.handleCheckBox} name="quotesNone" />
                                                <label class="custom-control-label pl-2" for="quotesNone"> Select None</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <label class="text-muted mt-2">Note: Actions required related main order status access to function</label>
                            <div class="bg-white mt-3">
                                <div class="ContentSection p-15">
                                    <h4>Additional Permissions</h4>
                                    <div class="row mt-3">
                                        <div class="col-md-4 col-lg-4">
                                        {exestingPermission?exestingPermission.filter(premission => premission.name==="Tools & Settings"  && premission.group_name === "toolsAndSettings").map(filteredPermission => (
                                             <div class="custom-control custom-checkbox">
                                             <input type="checkbox" class="custom-control-input" name="toolsAndSettings" checked={currentPermissionNames.includes("Tools & Settings") } onChange={this.handleCheckBox} id="toolsAndSettings"/>
                                             <label class="custom-control-label pl-2" for="toolsAndSettings">Tools &amp; Settings </label>
                                         </div>
                                       )):null} 
                                      
                                           
                                            <div class="pl-4">
                                            {exestingPermission?exestingPermission.filter(premission => premission.name==="Tags And Labels"  && premission.group_name === "toolsAndSettings").map(filteredPermission => (
                                           <div class="custom-control custom-checkbox mt-2">
                                           <input type="checkbox" class="custom-control-input" name="Tags And Labels" checked={currentPermissionNames.includes("Tags And Labels") } onChange={this.handleCheckBox} id="TagsAndLabels_tools"/>
                                           <label class="custom-control-label pl-2" for="TagsAndLabels_tools">Tags And Labels</label>
                                       </div>
                                       )):null} 
                                        {exestingPermission?exestingPermission.filter(premission => premission.name==="Organization Setting"  && premission.group_name === "toolsAndSettings").map(filteredPermission => (
                                            <div class="custom-control custom-checkbox mt-2">
                                            <input type="checkbox" class="custom-control-input" name="Organization Setting"checked={currentPermissionNames.includes("Organization Setting") } onChange={this.handleCheckBox} id={filteredPermission.id}/>
                                            <label class="custom-control-label pl-2" for={filteredPermission.id}>Organization Setting</label>
                                        </div>
                                       )):null} 
                                        {exestingPermission?exestingPermission.filter(premission => premission.name==="Map Locator"  && premission.group_name === "toolsAndSettings").map(filteredPermission => (
                                           <div class="custom-control custom-checkbox mt-2">
                                           <input type="checkbox" class="custom-control-input" name="Map Locator"checked={currentPermissionNames.includes("Map Locator") } onChange={this.handleCheckBox} id={filteredPermission.id}/>
                                           <label class="custom-control-label pl-2" for={filteredPermission.id}>Map Locator</label>
                                       </div>
                                       )):null}
                                        {exestingPermission?exestingPermission.filter(premission => premission.name==="Map Locator (Edit map)"  && premission.group_name === "toolsAndSettings").map(filteredPermission => (
                                          <div class="custom-control custom-checkbox mt-2">
                                          <input type="checkbox" class="custom-control-input" name="Map Locator (Edit map)"checked={currentPermissionNames.includes("Map Locator (Edit map)") } onChange={this.handleCheckBox} id={filteredPermission.id}/>
                                          <label class="custom-control-label pl-2" for={filteredPermission.id}>Map Locator (Edit map)</label>
                                      </div>
                                       )):null} 
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-lg-4">
                                        {exestingPermission?exestingPermission.filter(premission => premission.name==="Customer Management"  && premission.group_name === "customerManagement").map(filteredPermission => (
                                         <div class="custom-control custom-checkbox">
                                         <input type="checkbox" class="custom-control-input" name="Customer Management"checked={currentPermissionNames.includes("Customer Management") } onChange={this.handleCheckBox} id={filteredPermission.id}/>
                                         <label class="custom-control-label pl-2" for={filteredPermission.id}>  Customer Management</label>
                                     </div>
                                       )):null}
                                            
                                            <div class="pl-4">
                                            {exestingPermission?exestingPermission.filter(premission => premission.name==="Customer List (Add/Edit)"  && premission.group_name === "customerManagement").map(filteredPermission => (
                                            <div class="custom-control custom-checkbox mt-2">
                                            <input type="checkbox" class="custom-control-input" name="Customer List (Add/Edit)"checked={currentPermissionNames.includes("Customer List (Add/Edit)") } onChange={this.handleCheckBox} id={filteredPermission.id}/>
                                            <label class="custom-control-label pl-2" for={filteredPermission.id}>Customer List (Add/Edit)</label>
                                        </div>
                                        )):null}
                                                
                                            {exestingPermission?exestingPermission.filter(premission => premission.name==="Customer List (View/Print)"  && premission.group_name === "customerManagement").map(filteredPermission => (
                                             <div class="custom-control custom-checkbox mt-2">
                                             <input type="checkbox" class="custom-control-input" name="Customer List (View/Print)"checked={currentPermissionNames.includes("Customer List (View/Print)") } onChange={this.handleCheckBox} id="customerListViewPrintForCustomer_customer"/>
                                             <label class="custom-control-label pl-2" for="customerListViewPrintForCustomer_customer">Customer List (View/Print)</label>
                                         </div>
                                        )):null}
                                                
                                                {exestingPermission?exestingPermission.filter(premission => premission.name==="Settings"  && premission.group_name === "customerManagement").map(filteredPermission => (
                                            <div class="custom-control custom-checkbox mt-2">
                                            <input type="checkbox" class="custom-control-input"  name="Settings"checked={currentPermissionNames.includes("Settings") } onChange={this.handleCheckBox} id={filteredPermission.id}/>
                                            <label class="custom-control-label pl-2" for={filteredPermission.id}> Settings</label>
                                        </div>
                                        )):null}
                                                
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-lg-4">
                                        {exestingPermission?exestingPermission.filter(premission => premission.name==="User Management"  && premission.group_name === "userManagement").map(filteredPermission => (
                                            <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" name="userManagement" checked={currentPermissionNames.includes("User Management") } onChange={this.handleCheckBox} id={filteredPermission.id}/>
                                            <label class="custom-control-label pl-2" for={filteredPermission.id}>   User Management</label>
                                        </div>
                                        )):null}
                                        
                                            <div class="pl-4">
                                            {exestingPermission?exestingPermission.filter(premission => premission.name==="User Profile"  && premission.group_name === "userManagement").map(filteredPermission => (
                                          <div class="custom-control custom-checkbox mt-2">
                                          <input type="checkbox" class="custom-control-input" name="User Profile"checked={currentPermissionNames.includes("User Profile") } onChange={this.handleCheckBox} id={filteredPermission.id}/>
                                          <label class="custom-control-label pl-2" for={filteredPermission.id}>User Profile</label>
                                      </div>
                                        )):null}
                                         {exestingPermission?exestingPermission.filter(premission => premission.name==="User Profile"  && premission.group_name === "userManagement").map(filteredPermission => (
                                          <div class="custom-control custom-checkbox mt-2">
                                          <input type="checkbox" class="custom-control-input" name="User Access(this screen)" checked={currentPermissionNames.includes("User Access(this screen)") } onChange={this.handleCheckBox} id={filteredPermission.id}/>
                                          <label class="custom-control-label pl-2" for={filteredPermission.id}>User Access(this screen)</label>
                                      </div>
                                        )):null}
                                        {exestingPermission?exestingPermission.filter(premission => premission.name==="Staff Directory"  && premission.group_name === "userManagement").map(filteredPermission => (
                                         <div class="custom-control custom-checkbox mt-2">
                                         <input type="checkbox" class="custom-control-input" name="Staff Directory"checked={currentPermissionNames.includes("Staff Directory") } onChange={this.handleCheckBox} id="StaffDirectory_user"/>
                                         <label class="custom-control-label pl-2" for="StaffDirectory_user">Staff Directory</label>
                                     </div>
                                        )):null}
                                                
                                                
                                                
                                                <div class="custom-control custom-checkbox mt-2">
                                                    <input type="checkbox" class="custom-control-input" name="Settings user" checked={currentPermissionNames.includes("Settings user") } onChange={this.handleCheckBox} id="userSetting_user"/>
                                                    <label class="custom-control-label pl-2" for="userSetting_user">  Settings  </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mt-4">
                                        <div class="col-md-12 d-flex justify-content-md-end">
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="additionalPermissionAll" onChange={this.handleCheckBox} name="additionalPermissionAll"/>
                                                <label class="custom-control-label pl-2" for="additionalPermissionAll" > Select All</label>
                                            </div>
                                            <div class="custom-control custom-checkbox ml-2">
                                                <input type="checkbox" class="custom-control-input" id="additionalPermissionNone"  onChange={this.handleCheckBox} name="additionalPermissionNone"/>
                                                <label class="custom-control-label pl-2" for="additionalPermissionNone" name=""> Select None</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-md-12">
                                <a href="#">Update Current Role</a>
                                <a href="#" class="ml-4">Create Role From Current Values</a>
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div class="col-md-12 text-md-right">
                                <button type="button" class="btn btn-outline-secondary btn-lg">Cancel</button>
                                <button type="button" class="btn btn-primary btn-lg ml-3">update</button>
                            </div>
                        </div>
                    </div>
                    </TabPanel>
                </Tabs>
            {/* </div> */}
        {/* </div> */}
        </>
   )
}


}
const mapStateToProps = (state)=> (
    // console.log(state)
    {
    roles:state.userAccessReduser.roles.payload,
    users:state.userReduser.users.payload,
    user:state.userReduser,
    permissionList:state.userAccessReduser.permissionList,
    temp:state.userAccessReduser
    // permissionList:state.permissionList
}

)

export default connect(mapStateToProps,{getRolesList,showRole,showUser,addRoler,updateRole
    ,deleteRole,getUsersList
    ,getPermissionList
,handleUserAccessInputAction})(UserAccess)