/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, {Component} from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import UserProfile from './userProfile'
import 'react-tabs/style/react-tabs.css';
import CreateUserProfile from './createprofile'
import UserAccess from './userAccess'
import {connect} from "react-redux";
import {getUsersList} from "../../actions/userAction";
import {getRolesList} from "../../actions/userAccessAction";

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
        displayCreate:false,
        selectedUser:{},
        displatDeletedRecord:"off"
    }
}

   
 handleProfileChange = (e) => {
     console.log(e)
     console.log(e.target.value)
     let userList = this.props.users.active
     let id = e.target.value
     console.log(id)
       let selectedUser  =  userList.filter(obj=>{
         return (parseInt(obj.id) === parseInt(id))
     })
     console.log(selectedUser)
     this.setState({selectedUser:selectedUser[0]})
     this.setState({displayUpdateProfile:true})
}
handleCreate = (e) => {
    this.setState({displayCreate:true})
}
handleSubmit = ()=> {

}
handleCancle = () => {
    this.setState({displayUpdateProfile:false,displayCreate:false})
}
componentDidMount(){
    this.props.getUsersList()
    this.props.getRolesList()
}
 hanleCheckBox = (e) => {
if( e.target.value === "off"){
    this.setState({displatDeletedRecord:"on"})
}
else {
    this.setState({displatDeletedRecord:"off"})
}
}

    
    render() {
        let {displayUpdateProfile,displayCreate} = this.state
           
        let userProfiles = []  
        let roleList = []
        console.log(this.props)
        console.log(this.props.users.active)
        // console.log([...this.props.users.active,...this.props.users.inactive])
        if(this.props.users.active){
        if(this.props.users && (this.state.displatDeletedRecord === "off")){
             userProfiles =  [...this.props.users.active,...this.props.users.inactive]
           
            // userProfiles = this.props.users.active.concat(this.props.users.inactive)
        }  
        if(this.props.users && (this.state.displatDeletedRecord === "on")){
            userProfiles =  [...this.props.users.active,...this.props.users.inactive]
            let userWithDeletedRecords = userProfiles.filter(user=>{
                return (user.deleted_at!== null)
            
               
            })
            userProfiles = userWithDeletedRecords
            console.log(userProfiles)
     
       } 
    }
    if(this.props.roles){
        console.log(this.props.roles.payload)
        roleList = this.props.roles.payload
    }

        
    return (
        <div clas="userManagementSection">
               <div class="contentHeader bg-white d-flex justify-content-between align-items-center">
				<h1 class="page-header mb-0 d-flex align-items-center">
                    <img src="assets/img/settings-primary.svg" class="mr-2"/>User Management
                </h1>
			</div>
            <div class="px-md-3 mt-3">
                <Tabs>
                    <TabList class="d-inline-block bg-white pl-0" style={{bottom:"0px"}}>
                        <Tab style={{bottom:"0px"}}>User Profile</Tab>
                        <Tab style={{bottom:"0px"}}>User Access</Tab>
                    </TabList>
                    <TabPanel>
                    <div class="bg-white">
                         <div class="f-s-24 px-3 py-3 f-w-500">User Profile - <span class="f-s-18 p-15 mb-0">Add, Edit or Remove User</span></div>
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
                                            {userProfiles[0]?userProfiles.map(userObj=>{
                                                console.log(userObj)
                                                return  <option value={userObj.id}>{userObj.name}</option>
                                            }):null}
                                            </select>
                                        </div>
                                        <div class="col-md-4 col-lg-4 pt-md-4 mt-3 mt-md-0">  
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="customCheck1" value={this.state.displatDeletedRecord} checked={(this.state.displatDeletedRecord === "on")? true:false} onChange={this.hanleCheckBox}/>
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
                                    {displayUpdateProfile?<UserProfile cancle={this.handleCancle} selectedUser={this.state.selectedUser} displayDeletedRecords={this.state.displatDeletedRecord} roles={roleList} />:null}
                                    {displayCreate?<CreateUserProfile cancle={this.handleCancle}/>:null}
                                </div>
                            </div>
                        </div>
                    </div>
                    </TabPanel>
                  

                    <TabPanel>
                    <UserAccess/>
                    </TabPanel>
                </Tabs>
               
            </div>
        </div>
    )
}}


const mapStateToProps = (state)=> (
    // console.log(state)
    {
    
    users:state.userReduser.users.type==="GET_USERS_LIST"? state.userReduser.users.payload :[],
    roles:state.userAccessReduser.roles

}

)

export default connect(mapStateToProps,{getUsersList,getRolesList})(UserManagement)