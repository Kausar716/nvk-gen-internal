/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, {Component} from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import UserProfile from './userProfile'
import 'react-tabs/style/react-tabs.css';
import CreateUserProfile from './createprofile'

export class UserManagement extends Component {  
constructor(){
    super()
    this.state={
        firstName:"",
        lastName:"",
        phone:"",
        email:"",
        locationAccess:false,
        displayDeletedRecords:false,
        profileImage:"",
        displayExestingProfile:false,
        errorObj:{
            firstNameError:0,
            lastNameError:0,
            phoneError:0,
            emailError:0,                
        },
        errorCount:0,
        display:false,
        deleteProfile:false,
        dualLineModalToggle:false,
        modalMessage1:"",
        modalMessage2:"",
        userList:[],
        dropdownList:[],
        clickedCreate:false,
        selectedProfile:"",
        displayUpdateProfile:false,
        displayCreate:false
    }
}

   
 handleProfileChange = (e) => {
this.setState({selectedProfile:e.target.value,displayUpdateProfile:true})
}
handleCreate = (e) => {
    this.setState({displayCreate:true})
}
handleSubmit = ()=> {

}
handleCancle = () => {
    this.setState({displayUpdateProfile:false,displayCreate:false})
}

    
    render() {
        let {displayUpdateProfile,displayCreate} = this.state
    return (
        <div clas="userManagementSection">
               <div class="contentHeader bg-white d-flex justify-content-between align-items-center">
				<h1 class="page-header mb-0 d-flex align-items-center">
                    <img src="assets/img/settings-primary.svg" class="mr-2"/>User Management
                </h1>
			</div>
            <div class="px-md-3 mt-3">
                <Tabs>
                    <TabList class="d-inline-block bg-white pl-0">
                        <Tab>User Profile</Tab>
                        <Tab>User Access</Tab>
                    </TabList>
                    <TabPanel>
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
                                   {(!displayUpdateProfile && !displayCreate)?<h4>Select user profile to edit or choose Create New User</h4>:null}
                                   {(!displayUpdateProfile && !displayCreate)?<div class="row d-flex align-items-center mt-4 mt-md-0">
                                        <div class="col-md-4 col-lg-4">  
                                            <h5>Select User Profile</h5>
                                            <select class="form-control" onChange={this.handleProfileChange} >
                                                <option>Select</option>
                                                <option value={"option1"}>Option 1</option>
                                                <option value={"option2"}>Option 2</option>
                                            </select>
                                        </div>
                                        <div class="col-md-4 col-lg-4 pt-md-4 mt-3 mt-md-0">  
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="customCheck1"/>
                                                <label class="custom-control-label pl-2" for="customCheck1"> Display deleted records</label>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-lg-4 text-center mt-3 mt-md-0" onClick={this.handleCreate}>
                                            <span class="f-w-500">Create New User</span>
                                            <a href="javascript:;" class="d-md-block mt-md-2 ml-3 ml-md-0">
                                               <img src="assets/img/create-new-user-ic.svg" />
                                            </a>
                                        </div>
                                    </div>:null}
                                    {displayUpdateProfile?<UserProfile cancle={this.handleCancle} />:null}
                                    {displayCreate?<CreateUserProfile cancle={this.handleCancle}/>:null}
                                </div>
                            </div>
                        </div>
                    </div>
                    </TabPanel>
                  

                    <TabPanel>
                    <div class="bg-white">
                        <h4 class="p-15 mb-0">User Access</h4>
                    </div>
                    </TabPanel>
                </Tabs>
               
            </div>
        </div>
    )
}}

export default UserManagement