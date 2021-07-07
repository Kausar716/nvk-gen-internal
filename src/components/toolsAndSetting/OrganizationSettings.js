import React from 'react'
import {showorganization,updateorganization,handleOrganizationSettingsInputAction,uploadImage,removeImage} from "../../actions/organizationSettingAction";
import {connect} from "react-redux";


export class OrganizationSettings extends React.Component {  
    constructor(){
        super()
        this.state={
            name:"",
            sending_email_address:"",
            phone:"",
            main_title:"",
            secondary_title:"",
            main_body:"",
            secondartBody:"",
            errorObj:{               
                sendingEmailError:0,
                phoneError:0,
                firstNameError:0
            },
            hadModified:{
            name:false,
            sending_email_address:false,
            phone:false,
            main_title:false,
            secondary_title:false,
            main_body:false,
            secondartBody:false,
            },
            errorCount:0,
            logo:"",
            imageUploaded:false
        }
    }
    handlImageUpload = (e)=>{
        // this.setState({logo:e.target.files[0]})
        console.log(e.target.files[0])
        let imageData = e.target.files[0]
        let id="2"
        let data =  this.props.uploadImage(imageData,id)
        data.then(res=>{
            console.log(res)
            console.log(this.props.organizationData.organizationData.payload.logo)
        })
    }

    handleInput = (e) => {
      
        const {target:{name,value}} =e
        let {errorObj,errorCount,hadModified} = this.state        
        // this.setState({[name]:value})     
           // this.setState({[name]:value})     
         if(name === "phone" ){
            hadModified.name = true
            if(errorObj.phone>0){
            errorObj.phoneError=0
            errorCount--
            }
        }
        else if(name === "sending_email_address" ){
            hadModified.sending_email_address=true
            if(errorObj.sendingEmailError>0){
                errorObj.sendingEmailError=0
                errorCount--
            }           
        }
        else if(name === "name" ){
            hadModified.name=true
            if(errorObj.firstNameError>0){
                errorObj.firstNameError=0
                errorCount--
            }           
        }
        console.log(hadModified[name],name)
        // if(hadModified[name]  === name){
            hadModified[name] = true
        // }
        this.setState({errorObj,errorCount,hadModified})
        this.props.handleOrganizationSettingsInputAction(name,value)   
    }
    validate = () =>{
        let {errorObj,errorCount}=this.state
        let phoneReg=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        let nameReg = /^[a-zA-Z]+$/
        let emailReg =/\S+@\S+\.\S+/
        let organizationData = this.props.organizationData.organizationData
        console.log(emailReg.test(organizationData.sending_email_address))
        console.log(organizationData.sending_email_address)
        if(!phoneReg.test(organizationData.phone)){
            errorObj.phoneError=1
            errorCount++
        }   
         if(! emailReg.test(organizationData.sending_email_address)){
            errorObj.sendingEmailError=1
            errorCount++
        }
        if(!nameReg.test(organizationData.name)){
            errorObj.firstNameError=1
           errorCount++
        }
        this.setState({errorObj,errorCount})
        return errorCount
    }
    handleSubmit = (e) => {
        let count= this.validate()
        console.log(count)
        console.log(this.state.errorObj)
         if(count === 0){
             console.log(this.state)
             console.log("success")
             let updateObject={}
             updateObject.id=this.props.organizationData.organizationData.id
             console.log(this.state.hadModified.name)
             if(this.state.hadModified.name === true){
                updateObject.name = this.props.organizationData.organizationData.name
             }
             if(this.state.hadModified.sending_email_address === true){
                updateObject.sending_email_address = this.props.organizationData.organizationData.sending_email_address
             }
             if(this.state.hadModified.phone === true){
                updateObject.phone = this.props.organizationData.organizationData.phone
             } if(this.state.hadModified.main_title === true){
                updateObject.main_title = this.props.organizationData.organizationData.main_title
             } if(this.state.hadModified.secondary_title === true){
                updateObject.secondary_title = this.props.organizationData.organizationData.secondary_title
             } if(this.state.hadModified.main_body === true){
                updateObject.main_body = this.props.organizationData.organizationData.main_body
             }
             if(this.state.hadModified.secondartBody === true){
                updateObject.secondary_body = this.props.organizationData.organizationData.secondary_body
             }
             if(this.state.imageUploaded)
             updateObject.log=this.props.organizationData.organizationData.logo
                console.log(updateObject)
             
            let res=  this.props.updateorganization(updateObject)
            res.then(r=>{
                let id = "2"
                this.props.showorganization(id)
                console.log(JSON.stringify(r))
            }).catch(c=>{
                alert(JSON.stringify(c))
            })
         }
        
    


     }
     handleRemoveImage = (e) =>{
        // this.setState({logo:""})
        let id="2"
        let data = this.props.removeImage(id)
        data.then(res=>{
            console.log(res)
            this.props.showorganization(id)
        })
     }
     componentDidMount(){
         let id = "2"
       this.props.showorganization(id)
     }
    render(){
        console.log(this.state)
        console.log(this.props.organizationData)
        console.log(this.props)
        let url="https://zvky.flamingotech.ml/"
        let organizationDataById 
        if(this.props.organizationData.organizationData){
             organizationDataById = this.props.organizationData.organizationData
            console.log(organizationDataById)
            if(this.props.organizationData.organizationData.payload){
                url="https://zvky.flamingotech.ml/"+organizationDataById.payload.logo 
            }
            else{
                url="https://zvky.flamingotech.ml/"+organizationDataById.logo
            }
        }
        else{
            organizationDataById = this.props.organizationData
            if(this.state.imageUploaded){
                url = URL.createObjectURL(organizationDataById.logo)
                console.log(url)
            }
            else{
                url="https://zvky.flamingotech.ml/"+organizationDataById.logo
            }
            
        }
        console.log(url)

        
    return (
        <div clas="userManagementSection">
               <div class="contentHeader bg-white d-flex justify-content-between align-items-center">
                    <h1 class="page-header mb-0 d-flex align-items-center">
                        <img src="assets/img/tools-ic-lg.svg" class="mr-2"/>Organization Settings
                    </h1>
                </div>
                <div class="px-md-3 mt-3">
                <div class="pb-4">
                    <div class="bg-white">
                        <div class="row mb-3 mb-md-0">
                            <div class="col-md-6 col-lg-6">
                                <h2 class="p-15 mb-0">Document Details</h2>
                            </div>
                        </div>
                        <div class="ContentSection p-15">
                            <div class="row">
                                <div class="col-md-12 col-lg-12">
                                    <div class="bg-grey-transparent-2 text-center px-2 py-2">
                                        <p class="m-0">The following details will appear on all printed items including invoices, orders, bills of lading, etc.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-md-4 col-lg-3">
                                    <div class="bg-grey-transparent-2 text-center px-3 py-3">
                                        <div class="logCircle mb-3">
                                            {/* <img src="assets/img/nvk-circle-logo.png" /> */}
                                            <img src={url} style={{height:"100px",width:"100px"}}/>
                                            
                                        </div>
                                        <a href="#" class="btn btn-primary btn-block btnGroup">
                                            <span class="d-flex align-items-center justify-content-around">
                                            <input  type="file"  id="imageid" name="logo"  onChange={this.handlImageUpload} style={{zIndex:1,opacity:0}}  />
                                                <span class="f-s-20" style={{position:"absolute"}}>Upload</span>
                                            </span>
                                            <img src="assets/img/upload-ic-white.svg" alt="" />
                                        </a>
                                        <a href="#" class="btn bg-red-transparent-3 btn-block btnGroup mt-3">
                                            <span class="d-flex align-items-center justify-content-around" onClick={this.handleRemoveImage}>
                                                <span class="f-s-20 text-danger">Remove</span>
                                            </span>
                                            <img src="assets/img/bin-ic-red.svg" alt=""/>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-md-8 col-lg-9 mt-3 mt-md-0">
                                    <div class="row form-group">
                                        <div class="col-md-12">
                                            <label>Name</label>
                                            <input type="text" placeholder="Name" class="form-control" name="name" value={organizationDataById.name} onChange={this.handleInput}  />
                                            {this.state.errorObj.firstNameError!==0?<span style={{fontSize:"small",color:"red"}}>Numbers are not allowed</span>:""}
                                        </div>
                                    </div>
                                    <div class="row form-group">
                                        <div class="col-md-12">
                                            <label>Sending Email Address</label>
                                            <input type="text" placeholder="Dispatch Email Address" class="form-control" name="sending_email_address" value={organizationDataById.sending_email_address} onChange={this.handleInput} />
                                            {this.state.errorObj.sendingEmailError!==0?<span style={{fontSize:"small",color:"red"}}>Enter Valid Email</span>:""}
                                        </div>
                                    </div>
                                    <div class="row form-group">
                                        <div class="col-md-6">
                                            <label>Phone</label>
                                            <input type="text" placeholder="(XXX)XXX-XXXX" class="form-control" name="phone" value={organizationDataById.phone} onChange={this.handleInput} />
                                            {this.state.errorObj.phoneError!==0?<span style={{fontSize:"small",color:"red"}}>Enter Valid Phone Number</span>:""}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row mt-3 mt-lg-0">
                                <div class="col-md-12 col-lg-12">
                                    <div class="row form-group">
                                        <div class="col-md-6">
                                            <label>Main Title (Body)</label>
                                            <input type="text" placeholder="Name" class="form-control" name="main_title" value={organizationDataById.main_title} onChange={this.handleInput}  />
                                        </div>
                                        <div class="col-md-6">
                                            <label>Secondary Title (Body)</label>
                                            <input type="text" placeholder="Address 01" class="form-control" name="secondary_title" value={organizationDataById.secondary_title} onChange={this.handleInput}  />
                                        </div>
                                    </div>
                                    <div class="row form-group">
                                        <div class="col-md-6">
                                            <label>Main Body</label>
                                            <textarea class="form-control" rows="5"  name="main_body" value={organizationDataById.main_body} onChange={this.handleInput}>Address 01</textarea>
                                        </div>
                                        <div class="col-md-6">
                                            <label>Secondary Body</label>
                                            <textarea class="form-control" rows="5" name="secondary_body" value={organizationDataById.secondary_body} onChange={this.handleInput}>Address 02</textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md-12 col-lg-12 text-md-right mt-3 mt-md-0">
                            <button type="button" class="btn btn-outline-secondary btn-lg">Cancel</button>
                            <button type="button" class="btn btn-primary btn-lg ml-3" onClick={this.handleSubmit}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    }
    }

    const mapStateToProps = (state)=> (
        {
            organizationData:state.organizationReduser
        }
    
    )
    
    export default connect(mapStateToProps,{showorganization,updateorganization,removeImage
        ,handleOrganizationSettingsInputAction,
        uploadImage})(OrganizationSettings)
