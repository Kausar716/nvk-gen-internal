/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, {Component} from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export class UserProfile extends Component {  
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
            clickedCreate:false
        }
    }

    handleInput = (e) => {
        const {target:{name,value}} =e
        let {errorObj,errorCount} = this.state
        this.setState({[name]:value})
        if(name === "firstName" ){
            errorObj.firstNameError=0
            errorCount--
        }
        else if(name === "lastName" ){
            errorObj.lastNameError=0
            errorCount--
        }
        else if(name === "phone" ){
            errorObj.phoneError=0
            errorCount--
        }
        else if(name === "email" ){
            errorObj.emailError=0
            errorCount--
        }
        this.setState({errorObj,errorCount})
    }
    validate = () =>{
        let {errorObj,errorCount}=this.state
        // let phoneReg=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        let phoneReg = new RegExp('^[0-9]+$');
        let emailReg =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        console.log(emailReg.test(this.state.email))
        if(this.state.firstName.length === 0){
           errorObj.firstNameError=1
           errorCount++
        }
        else{
            errorObj.firstNameError=0
        }
         if(this.state.lastName.length === 0){
            errorObj.lastNameError=1
            errorCount++
        }
        else{
            errorObj.lastNameError=0
        }
        if(!phoneReg.test(this.state.phone)){
            errorObj.phoneError=1
            errorCount++
        }
        if(this.state.phone.length>13){
            errorObj.phoneError=1
            errorCount++
        }
         if(! emailReg.test(this.state.email)){
            errorObj.emailError=1
            errorCount++
        }
        this.setState({errorObj,errorCount})
        return errorCount
    }
    handleSubmit = (e) => {
        let count= this.validate()
         if(count === 0){
             console.log(this.state)
             console.log("success")
         }
         console.log(this.state)
 
 
     }
    render() {

     
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
                        <TabPanel>
                        <div class="pb-4">
                            <div class="bg-white">
                                {/* <div class="row mb-3 mb-md-0">
                                    <div class="col-md-6 col-lg-6">
                                        <h4 class="p-15 mb-0">Add, Edit or Remove User</h4>
                                    </div>
                                    <div class="col-md-6 col-lg-6 pl-4 pl-md-0 d-flex align-items-center justify-content-md-end">
                                        Active
                                        <div class="switcher ml-2 pr-md-3 ml-3">
                                            <input type="checkbox" name="switcher_checkbox_1" id="switcher_checkbox_1" value="1"/>
                                            <label for="switcher_checkbox_1"></label>
                                        </div>
                                    </div>
                                </div> */}
                                {/* <hr class="m-0"/> */}
                                {/* <div class="ContentSection p-15"> */}
                                    {/* <div class="row">
                                        <div class="col-md-12 col-lg-12">
                                            <div class="bg-grey-transparent-2 text-center px-2 py-2">
                                                <div class="d-flex align-items-center justify-content-center"><img src="assets/img/bulp-ic.svg" alt=""/><h5 class="ml-2 mb-0">Did you know?</h5></div>
                                                <p class="m-0">Inactive users will not have access to this system. User permissions can be sent via <a href="">User Access</a>.</p>
                                            </div>
                                        </div>
                                    </div> */}
                                    <div class="row mt-3">
                                        <div class="col-md-4 col-lg-3">
                                            <div class="bg-grey-transparent-2 text-center px-4 py-4">
                                                <div class="profImg">
                                                    <img src="assets/img/profile-img.png" />
                                                </div>
                                                <p>Image should print quality PNF or JPG</p>
                                                <a href="#" class="btn btn-primary btn-block btnGroup">
                                                    <span class="d-flex align-items-center justify-content-around">
                                                        <span class="f-s-20">Upload</span>
                                                    </span>
                                                    <img src="assets/img/upload-ic-white.svg" alt=""/>
                                                </a>
                                                <a href="#" class="btn bg-red-transparent-3 btn-block btnGroup mt-3">
                                                    <span class="d-flex align-items-center justify-content-around">
                                                        <span class="f-s-20 text-danger">Remove</span>
                                                    </span>
                                                    <img src="assets/img/bin-ic-red.svg" alt=""/>
                                                </a>
                                                <div class="text-left mt-2">
                                                    <span><small>Last signed in 23/05/2021</small></span>
                                                    <span class="ml-2"><a href="#">History</a></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-8 col-lg-9 mt-3 mt-md-0">
                                            <div class="row form-group">
                                                <div class="col-md-6">
                                                    <label>First Name<span class="text-danger">*</span></label>
                                                    <input type="text" placeholder="First Name" class="form-control" name="firstName" value={this.state.firstName} onChange={this.handleInput} />
                                                    {this.state.errorObj.firstNameError!==0?<span style={{fontSize:"small",color:"red"}}>Enter First Name</span>:""}
                                                </div>
                                                <div class="col-md-6 mt-3 mt-md-0">
                                                    <label>Last Name<span class="text-danger">*</span></label>
                                                    <input type="text" placeholder="Last Name" class="form-control" name="lastName" value={this.state.lastName} onChange={this.handleInput} />
                                                    {this.state.errorObj.lastNameError!==0?<span style={{fontSize:"small",color:"red"}}>Enter Last Name</span>:""}
                                                </div>
                                            </div>
                                            <div class="row form-group">
                                                <div class="col-md-6">
                                                    <label>Position<span class="text-danger">*</span></label>
                                                    <select class="form-control">
                                                        <option>Select Position</option>
                                                        <option>Option 1</option>
                                                        <option>Option 2</option>
                                                    </select>
                                                </div>
                                                <div class="col-md-6 mt-3 mt-md-0">
                                                    <label>Phone<span class="text-danger">*</span></label>
                                                    <input type="text" placeholder="XXX - XXXXXXXXXX" class="form-control" value={this.state.phone} onChange={this.handleInput} name="phone"/>
                                                    {this.state.errorObj.phoneError!==0?<span style={{fontSize:"small",color:"red"}}>Enter Valid Phone Number</span>:""}
                                                </div>
                                            </div>
                                            <div class="row form-group">
                                                <div class="col-md-6">
                                                    <label>Email<span class="text-danger">*</span></label>
                                                    <input type="text" placeholder="Email" class="form-control" value={this.state.email} onChange={this.handleInput} name="email" />
                                                    {this.state.errorObj.emailError!==0?<span style={{fontSize:"small",color:"red"}}>Enter Valid Email</span>:""}
                                                </div>
                                            </div>
                                            <div class="row form-group">
                                                <div class="col-md-12">
                                                    <label>Location Assigned</label>
                                                    <div class="locAssignBox">
                                                        <ul class="list-unstyled">
                                                            <li>
                                                                <div class="custom-control custom-checkbox">
                                                                    <input type="checkbox" class="custom-control-input" id="customCheck1"/>
                                                                    <label class="custom-control-label pl-2" for="customCheck1">Farm A <span>1105 HWY5, Dundas, CN</span></label>
                                                                </div> 
                                                            </li>
                                                            <li class="active">
                                                                <div class="custom-control custom-checkbox">
                                                                    <input type="checkbox" class="custom-control-input" id="customCheck2"/>
                                                                    <label class="custom-control-label pl-2" for="customCheck2">Farm B <span>1105 HWY5, Dundas, CN</span></label>
                                                                </div> 
                                                            </li>
                                                            <li>
                                                                <div class="custom-control custom-checkbox">
                                                                    <input type="checkbox" class="custom-control-input" id="customCheck3"/>
                                                                    <label class="custom-control-label pl-2" for="customCheck3">Farm C <span>1105 HWY5, Dundas, CN</span></label>
                                                                </div> 
                                                            </li>
                                                            <li>
                                                                <div class="custom-control custom-checkbox">
                                                                    <input type="checkbox" class="custom-control-input" id="customCheck4"/>
                                                                    <label class="custom-control-label pl-2" for="customCheck4">Farm D <span>1105 HWY5, Dundas, CN</span></label>
                                                                </div> 
                                                            </li>
                                                            <li>
                                                                <div class="custom-control custom-checkbox">
                                                                    <input type="checkbox" class="custom-control-input" id="customCheck5"/>
                                                                    <label class="custom-control-label pl-2" for="customCheck1">Farm E <span>1105 HWY5, Dundas, CN</span></label>
                                                                </div> 
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="mt-3">
                                                        <div class="custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" id="customCheck5"/>
                                                            <label class="custom-control-label pl-2" for="customCheck5">User has access to all locations </label>
                                                        </div> 
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                {/* </div> */}
                            </div>
                            <div class="row mt-3">
                                <div class="col-md-4 col-lg-4 d-flex align-items-center">
                                    Restore User
                                    <div class="switcher ml-2 pr-md-3">
                                        <input type="checkbox" name="switcher_checkbox_2" id="switcher_checkbox_2" value="2"/>
                                        <label for="switcher_checkbox_2"></label>
                                    </div>
                                </div>
                                <div class="col-md-8 col-lg-8 text-md-right mt-3 mt-md-0">
                                    <button type="button" class="btn btn-outline-secondary btn-lg" onClick={this.props.cancle}>Cancel</button>
                                    <button type="button" class="btn btn-primary btn-lg ml-3" onClick={this.handleSubmit}>Update</button>
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
            {/* </div> */}
        {/* </div> */}
        </>
    )
}}

export default UserProfile