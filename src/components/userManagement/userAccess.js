/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import {  Tabs,  TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {connect} from "react-redux";

import {getRolesList,showRole,addRoler,updateRole,deleteRole,getPermissionList,handleUserUpdateUserPermission,
    handleUserAccessInputAction,handleUserSelect} from "../../actions/userAccessAction";
import {getUsersList,showUser} from "../../actions/userAction";
import { Link ,withRouter} from "react-router-dom";

export const Component = withRouter(({ history, location }) =>{

})


 class UserAccess extends React.Component{
    constructor(props){
        super(props)
        this.state={    
            displayselectedUSer:false,
    selectedUser:{}
        }
    }
        
     
    handleCheckBox = (e) => {
        console.log(e.target)
        const {target:{name,checked,id}} =e
        // this.setState({[name]:checked})
        console.log(name.id)
        this.props.handleUserAccessInputAction(name,id,checked)

    }

    componentDidMount(){
        this.props.getUsersList()
        this.props.getRolesList()
        this.props.getPermissionList()
       
    }
   
    
    handleUpdate = (e) => {
        // let createRoleToggle = ! this.state.createRoleToggle
        // this.setState({createRoleToggle})
        console.log(this.props.temp.currentPermission)
        if(this.state.selectedUser){
        let result=this.props.handleUserUpdateUserPermission(this.state.selectedUser,this.props.temp.currentPermission)
        result.then(res=>{
            alert("updated")
        })
        }
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
        console.log(this.props.users)
        let userProfiles  =  [...this.props.users.active,...this.props.users.inactive]
        console.log(userProfiles)
        // let result = this.props.showUser(selectedId)
        // console.log(result)

        this.props.handleUserSelect(selectedId)
  
        this.setState({selectedUser:e.target.value,displayselectedUSer:true})

    }


    toggleChecked=(e)=>{
        this.setState({displayselectedUSer: !this.state.displayselectedUSer})
            
    }

    goBackFunction =(e)=>{
        const { history } = this.props;
        history.push("/Dashboard")
    }


    render(){
        let userProfiles = []  
        let selectedUser = this.props.user.data
        let exestingRoles = []
        let exestingPermission = []
        let currentPermissionNames= this.props.temp.currentPermissionNames
        console.log(this.props.temp)
        let userData = {}
        if(this.props.user)
        {
            console.log(this.props.user)
            if(this.props.user.user){
            userData=this.props.user.user.data
            if(this.props.user.user.data.roles)
            exestingRoles = this.props.user.user.data.roles
            console.log(userData)
            }
        }
        if(this.props.permissionList){
            exestingPermission = this.props.permissionList.payload
        }
        console.log(this.props.users)
        if(this.props.users !== undefined){
            console.log(this.props.user)
            userProfiles =  [...this.props.users.active,...this.props.users.inactive]

        }
        console.log(this.props.reduxSelectedUser)
       console.log("exestingPermission", exestingPermission)
       let tempImage = "./images/noPerson.png";


       


       
    return (
        <>

                <Tabs>
                   
                    <TabPanel>
                    <div class="pb-4">
                        <div class="bg-white">
                            <div class="row mb-3 mb-md-0">
                                <div class="col-md-6 col-lg-6">
                                    <div class="f-s-24 px-3 py-3 f-w-500">User Access &nbsp;-<span class="f-s-18 p-15 mb-0">Add, Edit or Remove Permissions</span></div>
                                </div>
                            </div>
                            <hr class="m-0"/>
                            <div class="ContentSection p-15">
                                <div class="row">
                                    <div class="col-md-12 col-lg-12">
                                        <div class="bg-grey-transparent-2 text-center px-2 py-2">
                                            <div class="d-flex align-items-center justify-content-center"><img src="assets/img/bulp-ic.svg" alt=""/><h5 class="ml-2 mb-0">Did you know?</h5></div>
                                            <p class="m-0">Only active users will are visible to set permissions. User profile can be set or modified via <a href="">User Profiles</a>.</p>
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
                                                        <img src=
                                                         {this.props.reduxSelectedUser?this.props.reduxSelectedUser.selectedUser?this.props.reduxSelectedUser.selectedUser.data.avatar===null ?tempImage:"https://zvky.flamingotech.ml/"+this.props.reduxSelectedUser.selectedUser.data.avatar :tempImage:tempImage}
                                                         class="img-fluid" style={{borderRadius:"3em"}} />
                                                        {/* <img src="assets/img/profile-img.png" class="img-fluid" /> */}
                                                    </div>
                                                    {this.state.displayselectedUSer?
                                                    <div class="col-md-9 col-lg-9">
                                                        <p class="mb-0">{this.props.reduxSelectedUser?this.props.reduxSelectedUser.selectedUser?this.props.reduxSelectedUser.selectedUser.data.name:"":""}</p>
                                                        <div>{this.props.reduxSelectedUser?this.props.reduxSelectedUser.selectedUser?this.props.reduxSelectedUser.selectedUser.data.email:"":""}</div>
                                                        <a href="#" class="mt-3 d-block">View Profile <img src="assets/img/edit-blue-ic.svg" /></a>
                                                    </div>:null}
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
                     {this.state.displayselectedUSer?   <div class="mt-4">
                            <div class="row">
                                <div class="col-md-12 d-flex justify-content-md-end">
                                <span style={{float:"right"}}>Turn All Permissions On</span>
                                        {/* <div class="switcher switcher-sm ml-2 pr-2" style={{float:"right", marginTop:"0px"}}>
                                                                    <input class="custom-control-input" id="turnOn"  onClick={this.handleCheckBox} name="turnOn" value="2"
                                                                    // type="checkbox" name="switcher_checkbox_date" id="switcher_checkbox_date" value="2"
                                                                    />
                                                                    <label for="switcher_checkbox_date"></label>
                                                </div> */}

                                                <div class="switcher switcher-sm ml-2 pr-2" style={{marginRight:"5em"}}>
                                                            <input type="checkbox" name="turnOn" id="turnOn"
                                                           // value="2"
                                                             value={!this.state.displayselectedUSer}
                                                           
                                                            onChange={this.handleCheckBox} 
                                                            // value={skuDataById.status}
                                                              />
                                                            <label for="turnOn"></label>
                                                        </div>

                                    {/* <div class="custom-control custom-checkbox" >
                                        <input type="checkbox" class="custom-control-input" id="turnOn"  onChange={this.handleCheckBox} name="turnOn"/>
                                        <label class="custom-control-label pl-2" for="turnOn"> Turn All Permissions On</label>
                                    </div> */}
                                    {/* <div class="custom-control custom-checkbox ml-2">
                                        <input type="checkbox" class="custom-control-input" id="turnOff"  onClick={this.handleCheckBox} name="turnOff"/>
                                        <label class="custom-control-label pl-2" for="turnOff"> Turn All Permissions Off</label>
                                    </div> */}


                                    <span style={{float:"right", marginRight:"0em", marginLeft:"-5em"}}>Turn All Permissions Off</span>
                                    <div class="switcher switcher-sm ml-2 pr-2">
                                                            <input type="checkbox" name="turnOff" id="turnOff"
                                                           // value="2"
                                                             value={!this.state.displayselectedUSer}
                                                           
                                                            onChange={this.handleCheckBox} 
                                                            // value={skuDataById.status}
                                                              />
                                                            <label for="turnOff"></label>
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
                                           <label class="custom-control-label pl-2" for={filteredPermission.id}>Supervisor Role (all access)</label>
                                           </div>
                                       )):null}
                                            {exestingPermission?exestingPermission.filter(premission => premission.name==="Quote"  && premission.group_name === "quotesAndOrders").map(filteredPermission => (
                                           
                                           <div class="custom-control custom-checkbox mt-2">
                                           <input type="checkbox" class="custom-control-input" value={this.state.quotes} name="Quote" checked={currentPermissionNames.includes("Quote")} onChange={this.handleCheckBox} id={filteredPermission.id}/>
                                           <label class="custom-control-label pl-2" for={filteredPermission.id}>Quote (create & modify)</label>
                                       </div>
                                       )):null}
                                            {exestingPermission?exestingPermission.filter(premission => premission.name==="Action Delete Order"  && premission.group_name === "quotesAndOrders").map(filteredPermission => (
                                           
                                           <div class="custom-control custom-checkbox mt-2">
                                                <input type="checkbox" class="custom-control-input" name="Action Delete Order" value={this.state.actionDeleteOrder} checked={currentPermissionNames.includes("Action Delete Order")} onChange={this.handleCheckBox} id={filteredPermission.id}/>
                                                <label class="custom-control-label pl-2" for={filteredPermission.id}>Action Delete Order</label>
                                            </div>
                                       )):null}
                                        {exestingPermission?exestingPermission.filter(premission => premission.name==="Action Create Quotes"  && premission.group_name === "quotesAndOrders").map(filteredPermission => (
                                           
                                           <div class="custom-control custom-checkbox mt-2">
                                           <input type="checkbox" class="custom-control-input" name="Action Create Quotes" checked={currentPermissionNames.includes("Action Create Quotes")} onChange={this.handleCheckBox} id={filteredPermission.id}/>
                                           <label class="custom-control-label pl-2" for={filteredPermission.id}>Action Create Quotes/Order on alert</label>
                                       </div>
                                       )):null}                                       
                                           
                                        </div>

                                        <div class="col-md-4 col-lg-4">
                                        {exestingPermission?exestingPermission.filter(premission => premission.name==="Closed & Cancelled Orders"  && premission.group_name === "quotesAndOrders").map(filteredPermission => (
                                           
                                            <div class="custom-control custom-checkbox mt-2">

                                                <input type="checkbox" class="custom-control-input"  name="Closed & Cancelled Orders" checked={currentPermissionNames.includes("Closed & Cancelled Orders")} onChange={this.handleCheckBox} id={filteredPermission.id}/>
                                                <label class="custom-control-label pl-2" for={filteredPermission.id}> Closed &amp; Cancelled Orders</label>
                                            </div>
                                       )):null}  

                                        {exestingPermission?exestingPermission.filter(premission => premission.name==="Picking Order"  && premission.group_name === "quotesAndOrders").map(filteredPermission => (
                                           
                                           <div class="custom-control custom-checkbox mt-2">
                                                <input type="checkbox" class="custom-control-input" name="Picking Order" checked={currentPermissionNames.includes("Picking Order")} onChange={this.handleCheckBox} id={filteredPermission.id}/>
                                                <label class="custom-control-label pl-2" for={filteredPermission.id}>Picking Orders</label>
                                            </div>
                                       )):null} 
                                            {exestingPermission?exestingPermission.filter(premission => premission.name==="Ready Order"  && premission.group_name === "quotesAndOrders").map(filteredPermission => (
                                           <div class="custom-control custom-checkbox mt-2">
                                           <input type="checkbox" class="custom-control-input" name="Ready Order" checked={currentPermissionNames.includes("Ready Order")}  onChange={this.handleCheckBox} id={filteredPermission.id}/>
                                           <label class="custom-control-label pl-2" for={filteredPermission.id}> Ready Orders (includes Late)</label>
                                       </div>
                                       )):null} 
                                            {exestingPermission?exestingPermission.filter(premission => premission.name==="Action Return to Order"  && premission.group_name === "quotesAndOrders").map(filteredPermission => (
                                           <div class="custom-control custom-checkbox mt-2">
                                           <input type="checkbox" class="custom-control-input" name="Action Return to Order" checked={currentPermissionNames.includes("Action Return to Order")} onChange={this.handleCheckBox} id={filteredPermission.id}/>
                                           <label class="custom-control-label pl-2" for={filteredPermission.id}> Action: Return to Orders</label>
                                       </div>
                                       )):null}
                                        {exestingPermission?exestingPermission.filter(premission => premission.name==="Reservations"  && premission.group_name === "quotesAndOrders").map(filteredPermission => (
                                          <div class="custom-control custom-checkbox mt-2">
                                          <input type="checkbox" class="custom-control-input" name="Reservations" checked={currentPermissionNames.includes("Reservations")} onChange={this.handleCheckBox} id={filteredPermission.id}/>
                                          <label class="custom-control-label pl-2" for={filteredPermission.id}>Reservations (create & cancel)</label>
                                      </div>
                                       )):null}
                                            
                                        </div>



                                        <div class="col-md-4 col-lg-4">
                                        {exestingPermission?exestingPermission.filter(premission => premission.name==="Shipped Invoices Adjustment"  && premission.group_name === "quotesAndOrders").map(filteredPermission => (
                                          <div class="custom-control custom-checkbox">
                                          <input type="checkbox" class="custom-control-input" name="Shipped Invoices Adjustment" checked={currentPermissionNames.includes("Shipped Invoices Adjustment")} onChange={this.handleCheckBox} id={filteredPermission.id}/>
                                          <label class="custom-control-label pl-2" for={filteredPermission.id}>  Shipped, Invoices & Adjustments</label>
                                      </div>
                                       )):null}
                                       {exestingPermission?exestingPermission.filter(premission => premission.name==="Receive Invoices"  && premission.group_name === "quotesAndOrders").map(filteredPermission => (
                                           <div class="custom-control custom-checkbox mt-2">
                                           <input type="checkbox" class="custom-control-input" name="Receive Invoices" checked={currentPermissionNames.includes("Receive Invoices")} onChange={this.handleCheckBox} id={filteredPermission.id}/>
                                           <label class="custom-control-label pl-2" for={filteredPermission.id}> Receive Invoice Exports </label>
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
                                            <label class="custom-control-label pl-2" for={filteredPermission.id}>  Action: Override Discounts</label>
                                        </div>
                                       )):null}
                                        {exestingPermission?exestingPermission.filter(premission => premission.name==="Dig And Plant Request"  && premission.group_name === "quotesAndOrders").map(filteredPermission => (
                                            <div class="custom-control custom-checkbox mt-2">
                                            <input type="checkbox" class="custom-control-input" name="Dig And Plant Request" checked={currentPermissionNames.includes("Dig And Plant Request")} onChange={this.handleCheckBox} id={filteredPermission.id}/>
                                            <label class="custom-control-label pl-2" for={filteredPermission.id}> Dig & Plant Requests</label>
                                        </div>
                                       )):null} 
                                        </div>




                                    </div>
                                    <div class="row mt-4">
                                        <div class="col-md-12 d-flex justify-content-md-end">
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="quotesAll" checked={currentPermissionNames.includes("quotesAll") } onClick={this.handleCheckBox} name="quotesAll"/>
                                                <label class="custom-control-label pl-2" for="quotesAll"> Select All</label>
                                            </div>
                                            <div class="custom-control custom-checkbox ml-2">
                                                <input type="checkbox" class="custom-control-input" id="quotesNone" checked={currentPermissionNames.includes("quotesNone") } onClick={this.handleCheckBox} name="quotesNone" />
                                                <label class="custom-control-label pl-2" for="quotesNone"> Select None</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            {/* <label class="text-muted mt-2">Note: Actions required related main order status access to function</label> */}
                           
                            <div class="bg-white mt-3">
                                <div class="ContentSection p-15">
                                    <h4>Additional Permissions</h4>
                                    <div class="row mt-3">
                                        <div class="col-md-4 col-lg-4">
                                        {exestingPermission?exestingPermission.filter(premission => premission.name==="Tools & Settings"  && premission.group_name === "toolsAndSettings").map(filteredPermission => (
                                             <div class="custom-control custom-checkbox">
                                             <input type="checkbox" class="custom-control-input" name="toolsAndSettings" checked={currentPermissionNames.includes("Tools & Settings") } onChange={this.handleCheckBox} id={filteredPermission.id}/>
                                             <label class="custom-control-label pl-2" for={filteredPermission.id}>Tools &amp; Settings </label>
                                         </div>
                                       )):null} 
                                      
                                           
                                            <div class="pl-4">
                                            {exestingPermission?exestingPermission.filter(premission => premission.name==="Tags And Labels"  && premission.group_name === "toolsAndSettings").map(filteredPermission => (
                                           <div class="custom-control custom-checkbox mt-2">
                                           <input type="checkbox" class="custom-control-input" name="Tags And Labels" checked={currentPermissionNames.includes("Tags And Labels") } onChange={this.handleCheckBox} id={filteredPermission.id}/>
                                           <label class="custom-control-label pl-2" for={filteredPermission.id}>Tags And Labels</label>
                                       </div>
                                       )):null} 
                                        {exestingPermission?exestingPermission.filter(premission => premission.name==="Organization Setting"  && premission.group_name === "toolsAndSettings").map(filteredPermission => (
                                            <div class="custom-control custom-checkbox mt-2">
                                            <input type="checkbox" class="custom-control-input" name="Organization Setting"checked={currentPermissionNames.includes("Organization Setting") } onChange={this.handleCheckBox} id={filteredPermission.id}/>
                                            <label class="custom-control-label pl-2" for={filteredPermission.id}>Organization Settings</label>
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
                                         <input type="checkbox" class="custom-control-input" name="customerManagement"checked={currentPermissionNames.includes("Customer Management") } onChange={this.handleCheckBox} id={filteredPermission.id}/>
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
                                             <input type="checkbox" class="custom-control-input" name="Customer List (View/Print)"checked={currentPermissionNames.includes("Customer List (View/Print)") } onChange={this.handleCheckBox} id={filteredPermission.id}/>
                                             <label class="custom-control-label pl-2" for={filteredPermission.id}>Customer List (View/Print)</label>
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
                                                <input type="checkbox" class="custom-control-input" name="User Profile" checked={currentPermissionNames.includes("User Profile") } onChange={this.handleCheckBox} id={filteredPermission.id}/>
                                                <label class="custom-control-label pl-2" for={filteredPermission.id}>User Profiles</label>
                                            </div>
                                                )):null}
                                                {exestingPermission?exestingPermission.filter(premission => premission.name==="User Access(this screen)"  && premission.group_name === "userManagement").map(filteredPermission => (
                                                <div class="custom-control custom-checkbox mt-2">
                                                <input type="checkbox" class="custom-control-input" name="User Access(this screen)" checked={currentPermissionNames.includes("User Access(this screen)") } onChange={this.handleCheckBox} id={filteredPermission.id}/>
                                                <label class="custom-control-label pl-2" for={filteredPermission.id}>User Access (this screen)</label>
                                            </div>
                                                )):null}
                                                {exestingPermission?exestingPermission.filter(premission => premission.name==="Staff Directory"  && premission.group_name === "userManagement").map(filteredPermission => (
                                                <div class="custom-control custom-checkbox mt-2">
                                                <input type="checkbox" class="custom-control-input" name="Staff Directory"checked={currentPermissionNames.includes("Staff Directory") } onChange={this.handleCheckBox} id={filteredPermission.id}/>
                                                <label class="custom-control-label pl-2" for={filteredPermission.id}>Staff Directory</label>
                                            </div>
                                                )):null}
                                                {exestingPermission?exestingPermission.filter(premission => premission.name==="Settings user"  && premission.group_name === "userManagement").map(filteredPermission => (
                                                <div class="custom-control custom-checkbox mt-2">
                                                <input type="checkbox" class="custom-control-input" name="Settings user" checked={currentPermissionNames.includes("Settings user") } onChange={this.handleCheckBox} id={filteredPermission.id}/>
                                                <label class="custom-control-label pl-2" for={filteredPermission.id}>  Settings  </label>
                                            </div>
                                                )):null}
                                            </div>
                                        </div>


                                    </div>
                                    <div class="row mt-4">
                                        <div class="col-md-12 d-flex justify-content-md-end">
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="additionalPermissionYes" checked={currentPermissionNames.includes("additionalPermissionYes") } onChange={this.handleCheckBox} name="additionalPermissionYes"/>
                                                <label class="custom-control-label pl-2" for="additionalPermissionYes" > Select All</label>
                                            </div>
                                            <div class="custom-control custom-checkbox ml-2">
                                                <input type="checkbox" class="custom-control-input" id="additionalPermissionNo"  checked={currentPermissionNames.includes("additionalPermissionNO") }  onChange={this.handleCheckBox} name="additionalPermissionNo"/>
                                                <label class="custom-control-label pl-2" for="additionalPermissionNo" name=""> Select None</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>















                            <div class="bg-white mt-2">
                                <div class="ContentSection p-15">
                                    <h4>Purchase &amp; Order Permissions</h4>
                                    <div class="row mt-3">
                                     
                                        <div class="col-md-4 col-lg-4">
                                        {exestingPermission?exestingPermission.filter(premission => premission.name==="Supervisor Roles"  && premission.group_name === "purchaseOrders").map(filteredPermission => (
                                           
                                           <div class="custom-control custom-checkbox">
                                           <input type="checkbox" class="custom-control-input"  id={filteredPermission.id} name="Supervisor Roles"  checked={currentPermissionNames.includes("Supervisor Roles")} onChange={this.handleCheckBox}/>
                                           <label class="custom-control-label pl-2" for={filteredPermission.id}>Supervisor Role (all access)</label>
                                           </div>
                                       )):null}
                                            {exestingPermission?exestingPermission.filter(premission => premission.name==="Create and Modify Drafts"  && premission.group_name === "purchaseOrders").map(filteredPermission => (
                                           
                                           <div class="custom-control custom-checkbox mt-2">
                                           <input type="checkbox" class="custom-control-input" value={this.state.quotes} name="Create and Modify Drafts" checked={currentPermissionNames.includes("Create and Modify Drafts")} onChange={this.handleCheckBox} id={filteredPermission.id}/>
                                           <label class="custom-control-label pl-2" for={filteredPermission.id}>Create & Modify Drafts</label>
                                       </div>
                                       )):null}
                                            {exestingPermission?exestingPermission.filter(premission => premission.name==="Create Modify and Delete Open Orders"  && premission.group_name === "purchaseOrders").map(filteredPermission => (
                                           
                                           <div class="custom-control custom-checkbox mt-2">
                                                <input type="checkbox" class="custom-control-input" name="Create Modify and Delete Open Orders" value={this.state.actionDeleteOrder} checked={currentPermissionNames.includes("Create Modify and Delete Open Orders")} onChange={this.handleCheckBox} id={filteredPermission.id}/>
                                                <label class="custom-control-label pl-2" for={filteredPermission.id}>Create, Modify &amp; Delete Open Orders</label>
                                            </div>
                                       )):null}
                                        {exestingPermission?exestingPermission.filter(premission => premission.name==="Recive and Check in Open Orders"  && premission.group_name === "purchaseOrders").map(filteredPermission => (
                                           
                                           <div class="custom-control custom-checkbox mt-2">
                                           <input type="checkbox" class="custom-control-input" name="Recive and Check in Open Orders" checked={currentPermissionNames.includes("Recive and Check in Open Orders")} onChange={this.handleCheckBox} id={filteredPermission.id}/>
                                           <label class="custom-control-label pl-2" for={filteredPermission.id}>Receive &amp; Check-In Open Orders</label>
                                       </div>
                                       )):null}                                       
                                           
                                        </div>

                                        <div class="col-md-4 col-lg-4">
                                        {exestingPermission?exestingPermission.filter(premission => premission.name==="View Closed and Cancelled Orders"  && premission.group_name === "purchaseOrders").map(filteredPermission => (
                                           
                                            <div class="custom-control custom-checkbox mt-2">

                                                <input type="checkbox" class="custom-control-input"  name="View Closed and Cancelled Orders" checked={currentPermissionNames.includes("View Closed and Cancelled Orders")} onChange={this.handleCheckBox} id={filteredPermission.id}/>
                                                <label class="custom-control-label pl-2" for={filteredPermission.id}> View Closed &amp; Cancelled Orders</label>
                                            </div>
                                       )):null}  

                                        {exestingPermission?exestingPermission.filter(premission => premission.name==="Actions: Close Open Orders"  && premission.group_name === "purchaseOrders").map(filteredPermission => (
                                           
                                           <div class="custom-control custom-checkbox mt-2">
                                                <input type="checkbox" class="custom-control-input" name="Actions: Close Open Orders" checked={currentPermissionNames.includes("Actions: Close Open Orders")} onChange={this.handleCheckBox} id={filteredPermission.id}/>
                                                <label class="custom-control-label pl-2" for={filteredPermission.id}>Actions: Close Open Orders</label>
                                            </div>
                                       )):null} 
                                            
                                        </div>


                                    </div>
                                    <div class="row mt-4">
                                        <div class="col-md-12 d-flex justify-content-md-end">
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="quotesAll" checked={currentPermissionNames.includes("quotesAll") } onClick={this.handleCheckBox} name="quotesAll"/>
                                                <label class="custom-control-label pl-2" for="quotesAll"> Select All</label>
                                            </div>
                                            <div class="custom-control custom-checkbox ml-2">
                                                <input type="checkbox" class="custom-control-input" id="quotesNone" checked={currentPermissionNames.includes("quotesNone") } onClick={this.handleCheckBox} name="quotesNone" />
                                                <label class="custom-control-label pl-2" for="quotesNone"> Select None</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>


                            <div class="bg-white mt-3">
                                <div class="ContentSection p-15">
                                    <h4>Inventory Management Permissions</h4>

                                    <div class="row mt-3">
                                        <div class="col-md-4 col-lg-4">
                                                {exestingPermission?exestingPermission.filter(premission => premission.name==="Supervisor Role in Inventory"  && premission.group_name === "Inventory Managaement Supervisor").map(filteredPermission => (
                                                    <div class="custom-control custom-checkbox">
                                                    <input type="checkbox" class="custom-control-input" name="Supervisor Role in Inventory" checked={currentPermissionNames.includes("Supervisor Role in Inventory") } onChange={this.handleCheckBox} id={filteredPermission.id}/>
                                                    <label class="custom-control-label pl-2" for={filteredPermission.id}>Supervisor Role (all access)</label>
                                                </div>
                                            )):null} 
                                            

                                                {exestingPermission?exestingPermission.filter(premission => premission.name==="Plant Manager"  && premission.group_name === "Plant Manager").map(filteredPermission => (
                                                    <div class="custom-control custom-checkbox">
                                                    <input type="checkbox" class="custom-control-input" name="Plant Manager" checked={currentPermissionNames.includes("Plant Manager") } onChange={this.handleCheckBox} id={filteredPermission.id}/>
                                                    <label class="custom-control-label pl-2" for={filteredPermission.id}>Plant Manager</label>
                                                </div>
                                            )):null} 
                                            
                                                
                                                    <div class="pl-4">
                                                                {exestingPermission?exestingPermission.filter(premission => premission.name==="Add or Edit"  && premission.group_name === "Plant Manager").map(filteredPermission => (
                                                            <div class="custom-control custom-checkbox mt-2">
                                                            <input type="checkbox" class="custom-control-input" name="Add or Edit" checked={currentPermissionNames.includes("Add or Edit") } onChange={this.handleCheckBox} id={filteredPermission.id}/>
                                                            <label class="custom-control-label pl-2" for={filteredPermission.id}>Add / Edit</label>
                                                        </div>
                                                        )):null} 

                                                            {exestingPermission?exestingPermission.filter(premission => premission.name==="Print"  && premission.group_name === "Plant Manager").map(filteredPermission => (
                                                                <div class="custom-control custom-checkbox mt-2">
                                                                <input type="checkbox" class="custom-control-input" name="Print"checked={currentPermissionNames.includes("Print") } onChange={this.handleCheckBox} id={filteredPermission.id}/>
                                                                <label class="custom-control-label pl-2" for={filteredPermission.id}>Print</label>
                                                            </div>
                                                        )):null} 
                                                    </div>











                                                    {exestingPermission?exestingPermission.filter(premission => premission.name==="Product Manager"  && premission.group_name === "Product Manager").map(filteredPermission => (
                                                    <div class="custom-control custom-checkbox">
                                                    <input type="checkbox" class="custom-control-input" name="Product Manager" checked={currentPermissionNames.includes("Product Manager") } onChange={this.handleCheckBox} id={filteredPermission.id}/>
                                                    <label class="custom-control-label pl-2" for={filteredPermission.id}>Product Manager</label>
                                                </div>
                                            )):null} 
                                            
                                                
                                                    <div class="pl-4">
                                                                {exestingPermission?exestingPermission.filter(premission => premission.name==="AddorEdit"  && premission.group_name === "Product Manager").map(filteredPermission => (
                                                            <div class="custom-control custom-checkbox mt-2">
                                                            <input type="checkbox" class="custom-control-input" name="AddorEdit" checked={currentPermissionNames.includes("AddorEdit") } onChange={this.handleCheckBox} id={filteredPermission.id}/>
                                                            <label class="custom-control-label pl-2" for={filteredPermission.id}>Add / Edit</label>
                                                        </div>
                                                        )):null} 

                                                            {exestingPermission?exestingPermission.filter(premission => premission.name==="Print in Product"  && premission.group_name === "Product Manager").map(filteredPermission => (
                                                                <div class="custom-control custom-checkbox mt-2">
                                                                <input type="checkbox" class="custom-control-input" name="Print in Product"checked={currentPermissionNames.includes("Print in Product") } onChange={this.handleCheckBox} id={filteredPermission.id}/>
                                                                <label class="custom-control-label pl-2" for={filteredPermission.id}>Print</label>
                                                            </div>
                                                        )):null} 
                                                    </div>


                                        </div>


                                        <div class="col-md-4 col-lg-4">
                                        {exestingPermission?exestingPermission.filter(premission => premission.name==="Inventory Managaement"  && premission.group_name === "Inventory Managaement").map(filteredPermission => (
                                         <div class="custom-control custom-checkbox">
                                         <input type="checkbox" class="custom-control-input" name="Inventory Managaement"checked={currentPermissionNames.includes("Inventory Managaement") } onChange={this.handleCheckBox} id={filteredPermission.id}/>
                                         <label class="custom-control-label pl-2" for={filteredPermission.id}> Inventory Management</label>
                                     </div>
                                       )):null}
                                            
                                            <div class="pl-4">
                                            {exestingPermission?exestingPermission.filter(premission => premission.name==="Dashboard View"  && premission.group_name === "Inventory Managaement").map(filteredPermission => (
                                            <div class="custom-control custom-checkbox mt-2">
                                            <input type="checkbox" class="custom-control-input" name="Dashboard View"checked={currentPermissionNames.includes("Dashboard View") } onChange={this.handleCheckBox} id={filteredPermission.id}/>
                                            <label class="custom-control-label pl-2" for={filteredPermission.id}>Dashboard (View)</label>
                                        </div>
                                        )):null}


                                                 <div class="pl-3">
                                                            {exestingPermission?exestingPermission.filter(premission => premission.name==="Dashboard Modify"  && premission.group_name === "Inventory Managaement").map(filteredPermission => (
                                                            <div class="custom-control custom-checkbox mt-2">
                                                            <input type="checkbox" class="custom-control-input" name="Dashboard Modify"checked={currentPermissionNames.includes("Dashboard Modify") } onChange={this.handleCheckBox} id={filteredPermission.id}/>
                                                            <label class="custom-control-label pl-2" for={filteredPermission.id}>Dashboard (Modify)</label>
                                                        </div>
                                                        )):null}
                                                </div>
                                                
                                                {exestingPermission?exestingPermission.filter(premission => premission.name==="Master Inventory View"  && premission.group_name === "Inventory Managaement").map(filteredPermission => (
                                            <div class="custom-control custom-checkbox mt-2">
                                            <input type="checkbox" class="custom-control-input"  name="Master Inventory View" checked={currentPermissionNames.includes("Master Inventory View") } onChange={this.handleCheckBox} id={filteredPermission.id}/>
                                            <label class="custom-control-label pl-2" for={filteredPermission.id}> Master Inventory (View)</label>
                                        </div>
                                        )):null}



                                                <div class="pl-3">
                                                            {exestingPermission?exestingPermission.filter(premission => premission.name==="Master Inventory Modify"  && premission.group_name === "Inventory Managaement").map(filteredPermission => (
                                                            <div class="custom-control custom-checkbox mt-2">
                                                            <input type="checkbox" class="custom-control-input" name="Master Inventory Modify"checked={currentPermissionNames.includes("Master Inventory Modify") } onChange={this.handleCheckBox} id={filteredPermission.id}/>
                                                            <label class="custom-control-label pl-2" for={filteredPermission.id}>Master Inventory (Modify)</label>
                                                        </div>
                                                        )):null}
                                                </div>


                                                {exestingPermission?exestingPermission.filter(premission => premission.name==="Task Queue View"  && premission.group_name === "Inventory Managaement").map(filteredPermission => (
                                            <div class="custom-control custom-checkbox mt-2">
                                            <input type="checkbox" class="custom-control-input"  name="Task Queue View" checked={currentPermissionNames.includes("Task Queue View") } onChange={this.handleCheckBox} id={filteredPermission.id}/>
                                            <label class="custom-control-label pl-2" for={filteredPermission.id}> Task Queue (View)</label>



                                            <div class="pl-3">
                                                            {exestingPermission?exestingPermission.filter(premission => premission.name==="Task Queue Modify"  && premission.group_name === "Inventory Managaement").map(filteredPermission => (
                                                            <div class="custom-control custom-checkbox mt-2">
                                                            <input type="checkbox" class="custom-control-input" name="Task Queue Modify" checked={currentPermissionNames.includes("Task Queue Modify") } onChange={this.handleCheckBox} id={filteredPermission.id}/>
                                                            <label class="custom-control-label pl-2" for={filteredPermission.id}>Task Queue (Modify)</label>
                                                        </div>
                                                        )):null}
                                            </div>



                                        </div>
                                        )):null}


                                                
                                            </div>
                                        </div>
                                        


                                    </div>
                                    <div class="row mt-4">
                                        <div class="col-md-12 d-flex justify-content-md-end">
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="additionalPermissionInventory" checked={currentPermissionNames.includes("additionalPermissionInventory") } onChange={this.handleCheckBox} name="additionalPermissionYes"/>
                                                <label class="custom-control-label pl-2" for="additionalPermissionInventory" > Select All</label>
                                            </div>
                                            <div class="custom-control custom-checkbox ml-2">
                                                <input type="checkbox" class="custom-control-input" id="additionalPermissionNo"  checked={currentPermissionNames.includes("additionalPermissionNO") }  onChange={this.handleCheckBox} name="additionalPermissionNo"/>
                                                <label class="custom-control-label pl-2" for="additionalPermissionNo" name=""> Select None</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>












                        </div> :null}




                        <div class="row mt-3">
                            {this.state.displayselectedUSer? 
                                <div class="col-md-12">
                                    <a href="#">Update Current Role</a>
                                    <a href="#" class="ml-4">Create Role From Current Values</a>
                                </div>:null}
                        </div>
                        <div class="row mt-2">
                            {this.state.displayselectedUSer? 
                                <div class="col-md-12 text-md-right">
                                    <button type="button" class="btn btn-outline-secondary btn-lg" onClick={this.goBackFunction} >Cancel</button>
                                    <button type="button" class="btn btn-primary btn-lg ml-3" onClick={this.handleUpdate}>Update</button>
                                </div>:null}
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
    roles:state.userAccessReduser.roles,
    users:state.userReduser.users.payload,
    user:state.userReduser,
    permissionList:state.userAccessReduser.permissionList,
    temp:state.userAccessReduser,
    reduxSelectedUser:state.userAccessReduser.selectedUser
    // permissionList:state.permissionList
}

)

export default withRouter(connect(mapStateToProps,{getRolesList,showRole,showUser,addRoler,updateRole
    ,deleteRole,getUsersList
    ,getPermissionList,
    handleUserSelect,
    handleUserUpdateUserPermission
,handleUserAccessInputAction})(UserAccess));