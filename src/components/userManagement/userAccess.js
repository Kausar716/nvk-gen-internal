import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export  default class UserAccess extends React.Component{
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
    taskQueueModify:false
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

        const {target:{name,checked}} =e
        this.setState({[name]:checked})

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



    render(){
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
                                                        <select class="form-control">
                                                            <option>Select</option>
                                                            <option>Option 1</option>
                                                            <option>Option 2</option>
                                                        </select>
                                                    </div>
                                                    <div class="mt-2">
                                                        <h5>Load Exesting Role</h5>
                                                        <select class="form-control">
                                                            <option>User</option>
                                                            <option>Option 1</option>
                                                            <option>Option 2</option>
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
                                        <input type="checkbox" class="custom-control-input" id="PermissionAll" chec onChange={this.handleSelect} name="selectAll"/>
                                        <label class="custom-control-label pl-2" for="PermissionOnAll"> Turn All Permissions On</label>
                                    </div>
                                    <div class="custom-control custom-checkbox ml-2">
                                        <input type="checkbox" class="custom-control-input" id="allPermissionOff"  onClick={this.handleSelect} name="unSelect"/>
                                        <label class="custom-control-label pl-2" for="allPermissionOff"> Turn All Permission Off</label>
                                    </div>
                                </div>
                            </div>
                            <div class="bg-white mt-2">
                                <div class="ContentSection p-15">
                                    <h4>Quote &amp; Order Permissions</h4>
                                    <div class="row mt-3">
                                        <div class="col-md-4 col-lg-4">
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input"  id="supervisorRole" name="supervisorRole" value={this.state.supervisorRole} checked={this.state.supervisorRole} onChange={this.handleCheckBox}/>
                                                <label class="custom-control-label pl-2" for="supervisorRole">Supervisor Role</label>
                                            </div>
                                            <div class="custom-control custom-checkbox mt-2">
                                                <input type="checkbox" class="custom-control-input" value={this.state.quotes} checked={this.state.quotes} onChange={this.handleCheckBox} id="quotes"/>
                                                <label class="custom-control-label pl-2" for="quotes">Quote</label>
                                            </div>
                                            <div class="custom-control custom-checkbox mt-2">
                                                <input type="checkbox" class="custom-control-input" name="openOrder" value={this.state.openOrder} checked={this.state.openOrder} onChange={this.handleCheckBox} id="openOrder"/>
                                                <label class="custom-control-label pl-2" for="openOrder">Open Orders</label>
                                            </div>
                                            <div class="custom-control custom-checkbox mt-2">
                                                <input type="checkbox" class="custom-control-input" name="actionDeleteOrder" value={this.state.actionDeleteOrder} checked={this.state.actionDeleteOrder} onChange={this.handleCheckBox} id="actionDeleteOrder"/>
                                                <label class="custom-control-label pl-2" for="actionDeleteOrder">Action Delete Order</label>
                                            </div>
                                            <div class="custom-control custom-checkbox mt-2">
                                                <input type="checkbox" class="custom-control-input" name="actionCreateQuotes" checked={this.state.actionCreateQuotes} onChange={this.handleCheckBox} id="actionCreateQuotes"/>
                                                <label class="custom-control-label pl-2" for="actionCreateQuotes">Action Create Quotes</label>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-lg-4">
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input"  name="closedAndCancledOrder" checked={this.state.closedAndCancledOrder} onChange={this.handleCheckBox} id="closedAndCancledOrder"/>
                                                <label class="custom-control-label pl-2" for="closedAndCancledOrder"> Closed &amp; Cancelled Orders</label>
                                            </div>
                                            <div class="custom-control custom-checkbox mt-2">
                                                <input type="checkbox" class="custom-control-input" name="pickingOrder" checked={this.state.pickingOrder} onChange={this.handleCheckBox} id="pickingOrder"/>
                                                <label class="custom-control-label pl-2" for="pickingOrder">Picking Order</label>
                                            </div>
                                            <div class="custom-control custom-checkbox mt-2">
                                                <input type="checkbox" class="custom-control-input" name="readyOrder" checked={this.state.readyOrder} onChange={this.handleCheckBox} id="readyOrder"/>
                                                <label class="custom-control-label pl-2" for="readyOrder"> Ready Order</label>
                                            </div>
                                            <div class="custom-control custom-checkbox mt-2">
                                                <input type="checkbox" class="custom-control-input" name="actionReturnToOrder" checked={this.state.actionReturnToOrder} onChange={this.handleCheckBox} id="actionReturnToOrder"/>
                                                <label class="custom-control-label pl-2" for="actionReturnToOrder"> Action Return to Order</label>
                                            </div>
                                            <div class="custom-control custom-checkbox mt-2">
                                                <input type="checkbox" class="custom-control-input" name="reservations" checked={this.state.reservations} onChange={this.handleCheckBox} id="reservations"/>
                                                <label class="custom-control-label pl-2" for="reservations">Reservations</label>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-lg-4">
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" name="shippedInvoicesAdjustment" checked={this.state.shippedInvoicesAdjustment} onChange={this.handleCheckBox} id="shippedInvoicesAdjustment"/>
                                                <label class="custom-control-label pl-2" for="shippedInvoicesAdjustment">  Shipped Invoices Adjustment</label>
                                            </div>
                                            <div class="custom-control custom-checkbox mt-2">
                                                <input type="checkbox" class="custom-control-input" name="receiveInvoice" checked={this.state.receiveInvoice} onChange={this.handleCheckBox} id="receiveInvoice"/>
                                                <label class="custom-control-label pl-2" for="receiveInvoice"> Receive Invoices</label>
                                            </div>
                                            <div class="custom-control custom-checkbox mt-2">
                                                <input type="checkbox" class="custom-control-input" name="quickPicks" checked={this.state.quickPicks} onChange={this.handleCheckBox} id="quickPicks"/>
                                                <label class="custom-control-label pl-2" for="quickPicks">  Quick Picks</label>
                                            </div>
                                            <div class="custom-control custom-checkbox mt-2">
                                                <input type="checkbox" class="custom-control-input" name="actionOveride" checked={this.state.actionOveride} onChange={this.handleCheckBox} id="actionOveride"/>
                                                <label class="custom-control-label pl-2" for="actionOveride">  Action Override</label>
                                            </div>
                                            <div class="custom-control custom-checkbox mt-2">
                                                <input type="checkbox" class="custom-control-input" name="digAndPlantRequest1" checked={this.state.digAndPlantRequest1} onChange={this.handleCheckBox} id="digAndPlantRequest1"/>
                                                <label class="custom-control-label pl-2" for="digAndPlantRequest1"> Dig And Plant Request</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mt-4">
                                        <div class="col-md-12 d-flex justify-content-md-end">
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="QuotesPermissionAll" onClick={this.handleSelect} name="selectAll"/>
                                                <label class="custom-control-label pl-2" for="QuotesPermissionAll"> Select All</label>
                                            </div>
                                            <div class="custom-control custom-checkbox ml-2">
                                                <input type="checkbox" class="custom-control-input" id="QuotesPermissionNone" onClick={this.handleSelect} name="selectNone" />
                                                <label class="custom-control-label pl-2" for="QuotesPermissionNone"> Select None</label>
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
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" name="ToolsAndsettings" checked={this.state.ToolsAndsettings } onChange={this.handleCheckBox} id="ToolsAndsettings"/>
                                                <label class="custom-control-label pl-2" for="ToolsAndsettings">Tools &amp; Settings </label>
                                            </div>
                                            <div class="pl-4">
                                                <div class="custom-control custom-checkbox mt-2">
                                                    <input type="checkbox" class="custom-control-input" name="TagsAndLabels"checked={this.state.TagsAndLabels } onChange={this.handleCheckBox} id="TagsAndLabels"/>
                                                    <label class="custom-control-label pl-2" for="TagsAndLabels">Tags And Labels</label>
                                                </div>
                                                <div class="custom-control custom-checkbox mt-2">
                                                    <input type="checkbox" class="custom-control-input" name="organizationSettings"checked={this.state.organizationSettings } onChange={this.handleCheckBox} id="organizationSettings"/>
                                                    <label class="custom-control-label pl-2" for="organizationSettings">Organization Setting</label>
                                                </div>
                                                <div class="custom-control custom-checkbox mt-2">
                                                    <input type="checkbox" class="custom-control-input" name="mapLocator"checked={this.state.mapLocator } onChange={this.handleCheckBox} id="mapLocator"/>
                                                    <label class="custom-control-label pl-2" for="mapLocator">Map Locator</label>
                                                </div>
                                                <div class="custom-control custom-checkbox mt-2">
                                                    <input type="checkbox" class="custom-control-input" name="maplocatorEditMaps"checked={this.state.maplocatorEditMaps } onChange={this.handleCheckBox} id="maplocatorEditMaps"/>
                                                    <label class="custom-control-label pl-2" for="maplocatorEditMaps">Map Locator (Edit map)</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-lg-4">
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" name="customerManagement"checked={this.state.customerManagement } onChange={this.handleCheckBox} id="customerManagement"/>
                                                <label class="custom-control-label pl-2" for="customerManagement">  Customer Management</label>
                                            </div>
                                            <div class="pl-4">
                                                <div class="custom-control custom-checkbox mt-2">
                                                    <input type="checkbox" class="custom-control-input" name="customerListAddEditForCustomer"checked={this.state.customerListAddEditForCustomer } onChange={this.handleCheckBox} id="customerListAddEditForCustomer"/>
                                                    <label class="custom-control-label pl-2" for="customerListAddEditForCustomer">Customer List (Add/Edit)</label>
                                                </div>
                                                <div class="custom-control custom-checkbox mt-2">
                                                    <input type="checkbox" class="custom-control-input" name="customerListViewPrintForCustomer"checked={this.state.customerListViewPrintForCustomer } onChange={this.handleCheckBox} id="customerListViewPrintForCustomer"/>
                                                    <label class="custom-control-label pl-2" for="customerListViewPrintForCustomer">Customer List (View/Print)</label>
                                                </div>
                                                <div class="custom-control custom-checkbox mt-2">
                                                    <input type="checkbox" class="custom-control-input"  name="customerSettings"checked={this.state.customerSettings } onChange={this.handleCheckBox} id="customerSettings"/>
                                                    <label class="custom-control-label pl-2" for="customerSettings"> Setting</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-lg-4">
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" name="userManagement"checked={this.state.userManagement } onChange={this.handleCheckBox} id="userManagement"/>
                                                <label class="custom-control-label pl-2" for="userManagement">   User Management</label>
                                            </div>
                                            <div class="pl-4">
                                                <div class="custom-control custom-checkbox mt-2">
                                                    <input type="checkbox" class="custom-control-input" name="customerListAddEditForUser"checked={this.state.customerListAddEditForUser } onChange={this.handleCheckBox} id="customerListAddEditForUser"/>
                                                    <label class="custom-control-label pl-2" for="customerListAddEditForUser">Customer List (Add/Edit)</label>
                                                </div>
                                                <div class="custom-control custom-checkbox mt-2">
                                                    <input type="checkbox" class="custom-control-input" name="customerListViewPrintForUser"checked={this.state.customerListViewPrintForUser } onChange={this.handleCheckBox} id="customerListViewPrintForUser"/>
                                                    <label class="custom-control-label pl-2" for="customerListViewPrintForUser">Customer List (View/Print)</label>
                                                </div>
                                                <div class="custom-control custom-checkbox mt-2">
                                                    <input type="checkbox" class="custom-control-input" name="userSetting"checked={this.state.userSetting } onChange={this.handleCheckBox} id="userSetting"/>
                                                    <label class="custom-control-label pl-2" for="userSetting">  Setting  </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mt-4">
                                        <div class="col-md-12 d-flex justify-content-md-end">
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="additionalPermissionAll" onChange={this.handleSelect} name="selectAll"/>
                                                <label class="custom-control-label pl-2" for="additionalPermissionAll" > Select All</label>
                                            </div>
                                            <div class="custom-control custom-checkbox ml-2">
                                                <input type="checkbox" class="custom-control-input" id="additionalPermissionNone"  onChange={this.handleSelect} name="selectNone"/>
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