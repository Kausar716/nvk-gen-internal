/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import {showorganization,updateorganization,handleOrganizationSettingsInputAction,uploadImage,removeImage} from "../../actions/organizationSettingAction";
import {connect} from "react-redux";
import ActionModal from '../Modal/ActionModal';
import { Link ,withRouter} from "react-router-dom";

export const Component = withRouter(({ history, location }) =>{

})

const normalizeInput = (value, previousValue) => {
    if (!value) return value;
    const currentValue = value.replace(/[^\d]/g, '');
    const cvLength = currentValue.length;
    
    if (!previousValue || value.length > previousValue.length) {
      if (cvLength < 4) return currentValue;
      if (cvLength < 7) return `(${currentValue.slice(0, 3)}) ${currentValue.slice(3)}`;
      return `(${currentValue.slice(0, 3)}) ${currentValue.slice(3, 6)}-${currentValue.slice(6, 10)}`;
    }
  };
  
  const validateInput = value => {
    let error = ""
    
    if (!value) error = "Required!"
    else if (value.length !== 14) error = "Invalid phone format. ex: (555) 555-5555";
    
    return error;
  };

  




export class OrganizationSettings extends React.Component {  
   
    constructor(){
        super()
        this.state={

            actionId:0,
            actionOpen:false,
            actionMessage:"",
            actionType:"",
            submitCount:0,

            phoneNumberInOrganization:" ",
            phoneError:"",




            mobile:"",
            isError:false,
            name:"",
            sending_email_address:"",
            // phone:"",
            value1: '',
            error:"",
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
            imageUploaded:false,
            initilaImages :false,
            imagePreviewURL:"assets/img/noImage.png"
        }
    }
  
    handlImageUpload = (e1)=>{
        //alert(123)
        // const reader = new FileReader();
        // reader.onload=()=>{
        //     if(reader.readyState===2){
        //     this.setState({
        //         imagePreviewURL:reader.result
        //     })
        // }
        // }
       // reader.readAsDataURL(e1.target.files[0])
        // alert(1)
        // debugger;
        // this.setState({logo:e.target.files[0]})
        console.log(e1.target.files[0])
        let imageData = e1.target.files[0]
        let id="2"
        let data =  this.props.uploadImage(imageData,id)
        data.then(res=>{
            console.log(res)
           // console.log(this.props.organizationData.organizationData.payload.logo)
        })

        setTimeout(function() {
            window.location.reload();
         }, 1100);
        
    }

   

    handleChange=({ target: { value } })=> {   
        this.setState(prevState=> ({ phone: normalizeInput(value, prevState.phone) }));
      };

    handleInput = (e) => {
      
       // this.setState({value1: e.target.value})
        const {target:{name,value}} =e
        let {errorObj,errorCount,hadModified} = this.state        
        // this.setState({[name]:value})    
        //this.setState({value1: event.target.value} 
           // this.setState({[name]:value})     
         if(name === "phone" ){
             //debugger;
            hadModified.phone = true
            // this.setState({value1: e.target.value})
           // value.replace(phoneReg, '($1) $2-$3')handleInput2
            if(errorObj.phoneError>0){
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
       // this.setState(prevState=> ({ phone: normalizeInput(value, prevState.phone) }));
        this.setState({errorObj,errorCount,hadModified})
       // let allValue =[...value, this.state.value1]
        this.props.handleOrganizationSettingsInputAction(name,value)   
    }
    validate = () =>{
        let {errorObj,errorCount}=this.state
        //var phoneNumber = 8660039954;
        //let phoneReg=/^[0-9\b]+$/;
        let phoneReg = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
       
       // let phoneReg=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        let nameReg = /^[a-zA-Z0-9]+$/;
        let emailReg = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;
       // let emailReg =/\S+@\S+\.\S+/
        let organizationData = this.props.organizationData.organizationData
        console.log("eMAIL123",emailReg.test(organizationData.sending_email_address))
        console.log(organizationData.sending_email_address)

        //organizationData.phone.replace(phoneReg, '($1) $2-$3')
        if(! phoneReg.test(organizationData.phone)){
            //debugger;
            if(organizationData.phone.length > 10){
            errorObj.phoneError=1
            errorCount++
            }
            // else{
              
            //     errorObj.phoneError=0
            //     errorCount--
            // }

        }   

         if(! emailReg.test(organizationData.sending_email_address)){
            errorObj.sendingEmailError=1
            errorCount++
        }
        // else{
              
        //     errorObj.sendingEmailError=0
        //     errorCount--
        // }


        if(!nameReg.test(organizationData.name)){
            errorObj.firstNameError=1
           errorCount++
        }
        this.setState({errorObj,errorCount})
        return errorCount
    }


    handleChange=({ target: { value } })=> {   
        this.setState(prevState=> ({ phoneNumberInOrganization: normalizeInput(value, prevState.phoneNumberInOrganization) }));
      };






    handleSubmit = (e) => {
           // debugger;
        // e.preventDefault();
     const phoneError = validateInput(this.state.phoneNumberInOrganization);
    
    this.setState({ phoneError }, () => {
       if(!phoneError) {
        //  setTimeout(() => {
        //    alert(JSON.stringify(this.state, null, 4));
        //  }, 300)
       }
    })   


    let finalNumber= this.state.phoneNumberInOrganization 
    finalNumber=  finalNumber.replace(/[^\w\s]/g, "")
    let removedNumber = finalNumber.split(" ").join("");
    removedNumber = parseInt(removedNumber)
console.log("removedNumber",removedNumber)


            


        let count= this.validate()
        console.log(count)
        console.log(this.state.errorObj)
         if(count === 0 && phoneError===""){
             console.log(this.state)
             console.log("success")
             let updateObject={}
             updateObject.phone = removedNumber
             updateObject.id=this.props.organizationData.organizationData.id
             console.log(this.state.hadModified.name)

             if(this.state.hadModified.name === true){
                 //debugger;
                updateObject.name = this.props.organizationData.organizationData.name
             }

             if(this.state.hadModified.sending_email_address === true){
                updateObject.sending_email_address = this.props.organizationData.organizationData.sending_email_address
             }



            //  if(this.state.hadModified.phone === true){
            //     // debugger;
            //      console.log("this.state.hadModified.phone",this.state.hadModified.phone)
            //      //updateObject.phone= updateObject.phone.replace(phoneReg, '($1) $2-$3')
            //     updateObject.phone = this.state.phoneNumberInOrganization
            //     //this.props.organizationData.organizationData.phone
            //  }
             
             if(this.state.hadModified.main_title === true){
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
        let id="2"
        let data = this.props.removeImage(id)
        data.then(res=>{
            console.log(res)
            this.props.showorganization(id)
        })

        
         //this.setState({});
         //window.location.reload();
     }
     componentDidMount(){
         let id = "2"
       this.props.showorganization(id)
     }

    //  let history = useHistory();
    render(){

       
        const { actionType } = this.state;
        console.log(this.state)
        console.log(this.props.organizationData)
        console.log(this.props)
        var TempUrl="assets/img/noImage.png";
        let url= "https://zvky.flamingotech.ml/";
       // var iImage="assets/img/noImage.png";
        
        let organizationDataById 
        if(this.props.organizationData.organizationData){

             organizationDataById = this.props.organizationData.organizationData
            console.log(organizationDataById)
            if(this.props.organizationData.organizationData.payload){
              // debugger
              if(organizationDataById.payload.logo==null){
                  url=TempUrl;
              }
              else{
                    url="https://zvky.flamingotech.ml/"+organizationDataById.payload.logo 
              }
               
               
            }
            else{


                if(organizationDataById.logo==null){
                    url=TempUrl;
                }
                else{
                    url="https://zvky.flamingotech.ml/"+organizationDataById.logo
                }
          
            }
        }
        else{
            organizationDataById = this.props.organizationData
            if(this.state.imageUploaded){
                url = URL.createObjectURL(organizationDataById.logo)
                console.log(url)
            }
            else{
                //debugger
                url="https://zvky.flamingotech.ml/"+organizationDataById.logo
                
            }
            
        }
        console.log(url)


        const confirm = ()=>{
            const { history } = this.props;
            if(actionType==="goBack"){
                history.push("/Dashboard")

                // setTimeout(function() {
                //     history.push("/")
                //  }, 4000);
            //    props.deleteProductAction(id)
    
            }

            else if(actionType==="save"){


                this.handleSubmit();
                // if((this.validate()) ){
                //     this.handleSubmit();
                //     // setTimeout(function() {
                //     //     window.location.reload();
                //     //  }, 200);
                // }
               
            }

            else if(actionType==="upload"){

                this.handlImageUpload();
            }
            

            else if(actionType==="deleteImage"){

                this.handleRemoveImage();
            }
            
            
            
            else{
                //
            }

            this.setState({
                actionOpen:false,
                actionId:0,
                actionType:"",
                actionMessage:""
            })
      
         
       }

       const confirmAction = (actionType)=>{
       
        //let history = useHistory();

        if(actionType==="goBack"){
            this.setState({actionType})
            this.setState({actionMessage:"Are you sure you want to go back ?"})

        }
        else if(actionType==="save"){
            this.setState({actionType})
            this.setState({actionMessage:"Are you sure you want to save Changes ?"})
            
        }

        else if(actionType==="upload"){
            this.setState({actionType})
            this.setState({actionMessage:"Are you sure you want to Upload this Image ?"})
        }

        else if(actionType==="deleteImage"){
            this.setState({actionType})
            this.setState({actionMessage:"Are you sure you want to delete this image ?"})

        }
        
        
        
        else{
            this.setState({actionType})
            this.setState({actionMessage:"Are you sure you want to duplicate this product and all its related SKU and plant information?"})
       
        }
        this.setState({
            actionOpen:true,
            // actionId:id
        })

        // setOpen(true)
        // setId(id)
    }

       const cancel = ()=>{
        this.setState({
            actionOpen:false,
            actionId:0,
            actionType:"",
            actionMessage:""
        })
       
         
     }


     let phno = organizationDataById.phone || '';

    //  const phoneReg = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    //  let phno = organizationDataById.phone ||'';
    //     let finalPhno= phno.replace(phoneReg,'($1) $2-$3')
  
    
  
     console.log("phoneNumber", this.state.value)
      
        const { value1} = this.state;
    return (
        <div clas="userManagementSection">
             <ActionModal cancel={cancel} confirm={confirm} open={this.state.actionOpen} message={this.state.actionMessage}/>
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
                                <label style={{fontWeight:"bold"}}>Logo</label>
                                    <div class="bg-grey-transparent-2 text-center px-3 py-3">
                                        <div class="logCircle mb-3" key={new Date().getTime()}>
                                            {/* <img src="assets/img/nvk-circle-logo.png" /> */}
                                            <img 
                                              src={url}
                                              id="imageid"
                                            //   src={this.state.imagePreviewURL}
                                           // src={this.state.initilaImages ? {url} : "assets/img/noImage.png"}
                                           // src={noImageI} src="assets/img/plant-ic-lg-green.svg"
                                            style={{height:"250px",width:"240px", borderRadius:"7em"}}/>
                                        </div>
                                        <p><small>Image should be print quality (PNG or JPG)</small></p>
                                        <a href="#" class="btn btn-primary btn-block btnGroup">
                                            <span class="d-flex align-items-center justify-content-around">
                                            <input  type="file"  id="imageid" name="logo" 
                                              onChange={this.handlImageUpload} 
                                            // onClick={()=>{confirmAction("upload"); }}
                                             style={{zIndex:1,opacity:0}}  />
                                                <span class="f-s-20" style={{position:"absolute"}} >Upload</span>
                                            </span>
                                            <img src="assets/img/upload-ic-white.svg" alt="" />
                                        </a>
                                        <a href="#" class="btn bg-red-transparent-3 btn-block btnGroup mt-3" style={{height:"41px"}}>
                                            <span class="d-flex align-items-center justify-content-around"
                                            onClick={()=>{confirmAction("deleteImage"); }}
                                            // onClick={this.handleRemoveImage}
                                             >
                                                <span class="f-s-20 text-danger">Remove</span>
                                            </span>
                                            <img src="assets/img/bin-ic-red.svg" alt=""/>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-md-8 col-lg-9 mt-3 mt-md-0">
                                    <div class="row form-group">
                                        <div class="col-md-12">
                                            <label style={{fontWeight:"bold"}}>Name</label>
                                            <input type="text" placeholder="Name" class="form-control" name="name" 
                                            value={organizationDataById.name} onChange={this.handleInput}  />
                                            {/* {this.state.errorObj.firstNameError!==0?<span style={{fontSize:"small",color:"red"}}>Numbers are not allowed</span>:""} */}
                                        </div>
                                    </div>


                                    <div class="row form-group">
                                        <div class="col-md-12">
                                            <label style={{fontWeight:"bold"}}>Sending Email Address</label>
                                            {/* <input refs="email" type="text" size="30" placeholder="Email"  value={organizationDataById.sending_email_address} onChange={this.handleInput}/> */}

                                            <input type="text" placeholder="Dispatch Email Address" class="form-control" name="sending_email_address" value={organizationDataById.sending_email_address} onChange={this.handleInput} />
                                            {/* <div className="text-danger">{this.state.errors.email}</div> */}
                                            {this.state.errorObj.sendingEmailError!==0?<span style={{fontSize:"small",color:"red"}}>Enter Valid Email</span>:""}
                                        </div>
                                    </div>

                                 

                                    {/* <div class="row form-group">
                                        <div class="col-md-6">
                                            <label style={{fontWeight:"bold"}}>Phone</label>
                                            <input type="text" placeholder="(XXX)XXX-XXXX" class="form-control"  
                                            //  error={this.state.isError}
                                            name="phone" value={organizationDataById.phone} 
                                            onChange={this.handleInput} 
  
                                            />
                                           
                                            {this.state.errorObj.phoneError!==0?<span style={{fontSize:"small",color:"red"}}>Enter Valid Phone Number</span>:""}
                                        </div>
                                    </div>  */}


                                    <div class="row form-group">
                                        <div class="col-md-6">
                                            <label style={{fontWeight:"bold"}}>Phone</label>
                                            <input
                                                    class="form-control"  
                                                    type="text"
                                                    name="phone"
                                                    placeholder="(xxx) xxx-xxxx"
                                                    value={this.state.phoneNumberInOrganization===" " ? phno : this.state.phoneNumberInOrganization}
                                                   // pattern="[0-9]*"
                                                    //value={organizationDataById.phone}
                                                    // value={this.state.phone}
                                                    //onChange={this.handleInput} 
                                                     onChange={this.handleChange}
                                                     //maxLength="10"
                                                   
                                                />
                                                {this.state.phoneError && <span style={{fontSize:"small",color:"red"}} >{this.state.phoneError}</span>}
                                        </div>
                                    </div>



                                </div>
                            </div>
                            <div class="row mt-3 mt-lg-0">
                                <div class="col-md-12 col-lg-12">
                                    <div class="row form-group">
                                        <div class="col-md-6">
                                            <label style={{fontWeight:"bold"}}>Main Title (Body)</label>
                                            <input type="text" placeholder="Name" class="form-control" name="main_title" value={organizationDataById.main_title} onChange={this.handleInput}  />
                                        </div>
                                        <div class="col-md-6">
                                            <label style={{fontWeight:"bold"}}>Secondary Title (Body)</label>
                                            <input type="text" placeholder="Address 01" class="form-control" name="secondary_title" value={organizationDataById.secondary_title} onChange={this.handleInput}  />
                                        </div>
                                    </div>
                                    <div class="row form-group">
                                        <div class="col-md-6">
                                            <label style={{fontWeight:"bold"}}>Main Body</label>
                                            <textarea class="form-control" rows="5"  name="main_body" value={organizationDataById.main_body} onChange={this.handleInput}>Address 01</textarea>
                                        </div>
                                        <div class="col-md-6">
                                            <label style={{fontWeight:"bold"}}>Secondary Body</label>
                                            <textarea class="form-control" rows="5" name="secondary_body" value={organizationDataById.secondary_body} onChange={this.handleInput}>Address 02</textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md-12 col-lg-12 text-md-right mt-3 mt-md-0">
                            <button type="button" class="btn btn-outline-secondary btn-lg"  onClick={()=>{confirmAction("goBack"); }}  >Cancel</button>
                            <button type="button" class="btn btn-primary btn-lg ml-3"  onClick={()=>{confirmAction("save"); }}
                            // onClick={this.handleSubmit}
                            >Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


            // <DemoForm/>
    )
    }
    }

    const mapStateToProps = (state)=> (
        {
            organizationData:state.organizationReduser
        }
    
    )
    
    export default withRouter(connect(mapStateToProps,{showorganization,updateorganization,removeImage
        ,handleOrganizationSettingsInputAction,
        uploadImage}) (OrganizationSettings));
