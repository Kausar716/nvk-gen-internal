/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, {Component} from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {connect} from "react-redux";
import {getUsersList,showUser,updateUser,uploadImage,removeImage,deleteUser} from "../../actions/userAction";
import {getRolesList} from "../../actions/userAccessAction";
import ActionModal from '../Modal/ActionModal'

export class UserProfile extends Component {  
    constructor(){
        super()
        this.state={
            firstName:"",
            lastName:"",
            phone:"",
            email:"",
            position:"",
            locationAccess:false,
            displayDeletedRecords:false,
            profileImage:"",
            displayExestingProfile:false,
            errorObj:{
                firstNameError:0,
                lastNameError:0,
                phoneError:0,
                emailError:0,    
                positionError:0            
            },
            isUpdated:{
                firstName:false,
                lastName:false,
                phone:false,
                email:false,
                position:false
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
            status:"",
            setSuccessPop:false,
            message:"",
            open:false,
            cancel:false,
            logo:"",
            deleted_at:null
        }
    }
    componentDidMount(){
           let selectedUser = this.props.selectedUser 
          console.log(selectedUser)
           this.setState({
               firstName:selectedUser.name,
               lastName:selectedUser.last_name,
               phone:selectedUser.phone,
               email:selectedUser.email,
               position:selectedUser.position,
               status:selectedUser.status,
               id:selectedUser.id,
               logo:selectedUser.avatar?selectedUser.avatar:"",
               deleted_at:selectedUser.deleted_at
            })

    }

    handleInput = (e) => {
        const {target:{name,value}} =e
        let {errorObj,errorCount} = this.state
        console.log(name)
        console.log(value)
        this.setState({[name]:value})
        if(name === "firstName" ){
            if(errorObj.firstNameError>0){
                errorObj.firstNameError=0
                errorCount--
            }           
        }
        else if(name === "lastName" ){
            if(errorObj.lastNameError>0){
                errorObj.lastNameError=0
                errorCount--
            }            
        }
        else if(name === "phone" ){
            if(errorObj.phoneError>0){
                errorObj.phoneError=0
                errorCount--
            }            
        }
        else if(name === "email" ){
            if(errorObj.emailError>0){
                errorObj.emailError=0
                errorCount-- 
            }            
        }
        else if(name === "postiton"){
            if(errorObj.positionError>0){
                errorObj.positionError=0
                errorCount--
            }   
        }  
        this.setState({errorObj,errorCount})
    }
    validate = () =>{
        let {errorObj,errorCount}=this.state
        let phoneReg=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        // let phoneReg = new RegExp('^[0-9]+$');
        let nameReg = /^[a-zA-Z]+$/
        let emailReg =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        console.log(emailReg.test(this.state.email))
        if(this.state.firstName.length === 0){
           errorObj.firstNameError=1
           errorCount++
        }
        if(!nameReg.test(this.state.firstName)){
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
        if(this.state.position.length === 0){
            console.log(this.state.position)
            errorObj.positionError=1
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
        console.log(count)
         if(count === 0){
             console.log(this.state)
             console.log("success")
             if(count === 0){
                console.log(this.state)
                let userStateObject = this.state
                let userObject={}
                userObject.id= this.props.selectedUser.id
                console.log(this.props.selectedUser)
                if(this.props.selectedUser.name !== userStateObject.firstName)userObject['name'] = userStateObject.firstName
                if(this.props.selectedUser.last_name !== userStateObject.lastName)userObject['last_name'] = userStateObject.lastName
                if(this.props.selectedUser.email !== userStateObject.email)userObject['email'] = userStateObject.email
                if(this.props.selectedUser.phone !== userStateObject.phone)userObject['phone'] = userStateObject.phone
                if(this.props.selectedUser.position !== userStateObject.position)userObject['role'] = userStateObject.position

               console.log(userObject)
                let res = this.props.updateUser(userObject)
                res.then(result=>{
                  
                    console.log(this.props.users)
                    if(this.props.users.payload.status === "Success"){
                        this.setState({open:true,message:this.props.users.payload.message})
                    }
                

                })
                // console.log(res)
            }
         }
      
 
 
     }
     handlImageUpload = (e) => {
        console.log(e)
        console.log(e.target.files[0])
        let imageData = e.target.files[0]
       let data =  this.props.uploadImage(imageData,JSON.stringify(this.props.selectedUser.id))
       data.then(res=>{
           console.log(res)
           console.log(res)
           console.log(this.props)
           let updatedData = this.props.data.user.payload
           this.setState({
            firstName:updatedData.name,
            lastName:updatedData.last_name,
            phone:updatedData.phone,
            email:updatedData.email,
            position:updatedData.position,
            status:updatedData.status,
            id:updatedData.id,
            logo:updatedData.avatar?updatedData.avatar:"",
            deleted_at:updatedData.deleted_at
         })
       })
        // this.setState({log:e.target.files[0]})
        this.setState({logo: URL.createObjectURL(e.target.files[0])})

    }
    handleRemoveImage = (e) =>{
        // this.setState({logo:""})
        let data = this.props.removeImage(this.props.selectedUser.id)
        console.log(data)
        data.then(res=>{
            console.log(res)
            console.log(this.props)
            let updatedData = this.props.data.removedData.payload
            this.setState({
             firstName:updatedData.name,
             lastName:updatedData.last_name,
             phone:updatedData.phone,
             email:updatedData.email,
             position:updatedData.position,
             status:updatedData.status,
             id:updatedData.id,
             logo:updatedData.avatar?updatedData.avatar:"",
             deleted_at:updatedData.deleted_at
          })
        })
        
    }
    handleDelete =()=> {
       let id = this.props.selectedUser.id
      
        var person = window.confirm("are you sure you want to delete?");
        if(person){
              let deleted = this.props.deleteUser(id)
              deleted.then(res=>{
                console.log(res)
               
                let updatedData = this.props.data.removedData.payload
                this.setState({
                 firstName:updatedData.name,
                 lastName:updatedData.last_name,
                 phone:updatedData.phone,
                 email:updatedData.email,
                 position:updatedData.position,
                 status:updatedData.status,
                 id:updatedData.id,
                 logo:updatedData.avatar?updatedData.avatar:"",
                 deleted_at:updatedData.deleted_at
                 
              })
              alert("deleted")
            })
        }
    }
    handleRestore =()=>{
        let userStateObject = this.state
        let userObject={}
        userObject.id= this.props.selectedUser.id
        userObject.deleted_at=null
      
        var person = window.confirm("are you sure you want to Restore?");
        if(person){
              let deleted = this.props.deleteUser(userStateObject.id)
              deleted.then(res=>{
                console.log(res)
               
                let updatedData = this.props.data.removedData.payload
                this.setState({
                 firstName:updatedData.name,
                 lastName:updatedData.last_name,
                 phone:updatedData.phone,
                 email:updatedData.email,
                 position:updatedData.position,
                 status:updatedData.status,
                 id:updatedData.id,
                 logo:updatedData.avatar?updatedData.avatar:"",
                 deleted_at:updatedData.deleted_at
                 
              })
              alert("deleted")
            })
        }
    }
    cancel = ()=>{
        this.setState({open:false})
    }
    confirm = ()=>{
        this.setState({open:false})
    }
    render() {
        let roles=[]
        if(this.props.roles)roles = this.props.roles
        console.log(this.props.selectedUser.deleted_at !== null)
    console.log(this.state.position)
   
     
    return (
        <>
         <ActionModal cancel={this.cancel} confirm={this.confirm} open={this.state.open} message={this.state.message}/>
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
                                                    <img src={this.state.logo.length>0?"https://zvky.flamingotech.ml/"+this.state.logo:""} alt="" />
                                                </div>
                                                <p>Image should print quality PNF or JPG</p>
                                                <a href="#" class="btn btn-primary btn-block btnGroup" style={{position:"relative"}}>
                                                    <span class="d-flex align-items-center justify-content-around">
                                                    <input  type="file"  id="imageid"  onChange={this.handlImageUpload} style={{zIndex:1,opacity:0}}  />
                                                        <span class="f-s-20" style={{position:"absolute"}}>Upload</span>                                                        
                                                    </span>
                                                    <img src="assets/img/upload-ic-white.svg" alt=""/>
                                                </a>
                                                <a href="#" class="btn bg-red-transparent-3 btn-block btnGroup mt-3">
                                                    <span class="d-flex align-items-center justify-content-around" onClick={this.handleRemoveImage}>
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
                                                    {this.state.errorObj.firstNameError!==0?<span style={{fontSize:"small",color:"red"}}>Enter Valid Name</span>:""}
                                                </div>
                                                <div class="col-md-6 mt-3 mt-md-0">
                                                    <label>Last Name<span class="text-danger">*</span></label>
                                                    <input type="text" placeholder="Last Name" class="form-control" name="lastName" value={this.state.lastName} onChange={this.handleInput} />
                                                    {this.state.errorObj.lastNameError!==0?<span style={{fontSize:"small",color:"red"}}>Enter Valid Name</span>:""}
                                                </div>
                                            </div>
                                            <div class="row form-group">
                                                <div class="col-md-6">
                                                    <label>Position<span class="text-danger">*</span></label>
                                                    <select class="form-control" name="position"  onChange={this.handleInput} value={this.state.position}  >
                                                    {roles?roles.map(userObj=>{
                                                            console.log(userObj)
                                                            return  <option value={userObj.id}>{userObj.name}</option>
                                                        }):null}   
                                                    </select>
                                                    {this.state.errorObj.positionError!==0?<span style={{fontSize:"small",color:"red"}}>Select Position</span>:""}
                                                </div>
                                                <div class="col-md-6 mt-3 mt-md-0">
                                                    <label>Phone<span class="text-danger">*</span></label>
                                                    <input type="text" placeholder="(XXX)XXX-XXXX" class="form-control" value={this.state.phone} onChange={this.handleInput} name="phone"/>
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
                                {this.state.deleted_at!== null?
                                <div class="col-md-4 col-lg-4 d-flex align-items-center">
                                    Restore User
                                    <div class="switcher ml-2 pr-md-3">
                                        <input type="checkbox" name="switcher_checkbox_2" id="switcher_checkbox_2" value="2" onChange={this.handleRestore}/>
                                        <label for="switcher_checkbox_2"></label>
                                    </div>
                                </div>:
                                <div class="col-md-4 col-lg-4 d-flex align-items-center">
                                    Delete User
                                <div class="switcher ml-2 pr-md-3" onClick={this.handleDelete}>
                                    {/* <input type="checkbox" name="switcher_checkbox_2" id="switcher_checkbox_2" value="2" onChange={this.props.handleRestore}/> */}
                                    <img src="assets/img/bin-ic-red.svg" alt=""/>
                                    {/* <label for="switcher_checkbox_2"></label> */}
                                </div>
                            </div>
                                }
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


const mapStateToProps = (state)=> (
    // console.log(state.userAccessReduser)
    {
    users:state.userReduser.users,
    data:state.userReduser
    // roles:state.userAccessReduser
}

)

export default connect(mapStateToProps,{updateUser,removeImage,getRolesList,uploadImage,deleteUser})(UserProfile)