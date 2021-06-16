
import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from "react-router-dom";
import './index.css'
import {Button,Form,Input,FormGroup,Label,Row} from 'reactstrap'
import submit from './submit'
//   const required = value => value ? undefined : 'Required'
//   const maxLength = max => value =>
//     value && value.length > max ? `Must be ${max} characters or less` : undefined
//   const maxLength15 = maxLength(15)
//   const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined
// 
  const required = value => value ? undefined : 'Required'
  const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined
  const minValue2 = minValue(4)


const validate = values => {
    const errors = {}
    if (!values.username) {
      errors.username = 'Required'
    } else if (values.username.length > 15) {
      errors.username = 'Must be 15 characters or less'
    }
    if (!values.email) {
      errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }
 
    return errors
  }
  
  const warn = values => {
    const warnings = {}
    if (values.age < 19) {
      warnings.age = 'Hmm, you seem a bit young...'
    }
    return warnings
  }
  
  const onSubmit = (values) =>{
    console.log(values);
  }
  
  const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
      {/* <label>{label}</label> */}
      <div>
        <input {...input} class="input-field1" placeholder={label}  type={type}/>
        <Row>
        {touched && ((error && <span style={{color:"red", marginLeft:"1em"}}>{error}</span>) || (warning && <span>{warning}</span>))}
        </Row>
        
      </div>
    </div>
  )

    const successFullLogin=()=>{
        alert("Login Success full")
    }



const ForgotPassword = (props) => {

  //const { handleSubmit, pristine, reset, submitting } = props;
  const { error, handleSubmit, pristine, reset, submitting } = props

  return (
    <>
      
      <div style={{backgroundColor:"white"}}>
                <header>
                <div>
                    <a href="#" style={{float:"left"}}><img  src={process.env.PUBLIC_URL + "/images/logo.png"} alt="no iamge" id="logo1"/></a>
                </div>
                <div style={{clear:"both"}}></div>

                </header>
                <div >
                    <a href="#" ><img src={process.env.PUBLIC_URL + "/images/signin.png"} alt="no iamge" id="logo" style={{display: "block",marginLeft:"34.8%", marginRight:"auto",marginTop:10,width:"28%",height:"25%"}}/></a>
                    <div className="signin">
           
             <form className="signin_form" >
             <p style={{color:"#787d82",fontWeight:"bold",padding:0,margin:0}}>Returning User</p>
                 <p style={{color:"#787d82",fontSize:12}}>Please enter your email id</p>
                 <hr style={{borderTop:"1px dotted #787d82"}}></hr>
             {/* <p style={{textAlign:"center",color:"red"}}>Wrong email and password</p> */}
                    <div class="input-icons1">
                    <i class="fa fa-user icon1">
                </i>

                     <Field name="email" type="email" component={renderField} label="Email" />

                </div>

                <br/>
                <div style={{float:"left"}}>
                <FormGroup check >
                        
                    </FormGroup>
                    <Link to="/">
                    <p className="infostyle" style={{marginTop:25}}><span style={{color:"#FF8C00"}}>Click here to </span> <span className="infostyle" style={{color:"#4f91f7"}}>Go Back</span></p>
                    </Link>
                   
                </div>
                <div style={{float:"right",marginTop:7}}>
                <FormGroup >
                    <Label>
                    <Link to="/" > 
                      <Button className="loginbutton" type="submit" onClick={handleSubmit(onSubmit)} disabled={pristine || submitting}  style={{backgroundColor:"#d07510",border:"1px solid white",marginLeft:22,position:"relative",paddingRight:25, borderBottom:"4px solid #ad4902"}} ><span >Click Here</span> <span class='bx bxs-right-arrow-circle' style={{fontSize:"15px",verticalAlign:"middle",position:"absolute",top:11,left:75}}></span></Button>
                    </Link>
                    </Label>
                </FormGroup>
                    
                </div>
                <hr style={{marginTop:90}}/>
                <div className="infostyle" style={{textAlign:"center"}}>
                    <p className="logincontactInfo" style={{color:"gray"}}>Trouble accessing your account or registering ?</p>
                    <p className="logincontactInfo" style={{color:"gray"}}>Contact <span  style={{color:"#4f91f7"}}>webmaster@nvknurseries.com</span></p>
                </div>
            </form>
            <p>version:0.0.0.1</p>
          
            </div>
          
                </div>
               
                <footer>
                    <p>NVKGENESYS.COM | TERMS OF USE | PRIVACY <br></br>&copy; Nurseries. All Rights Reserved</p>
                </footer>
            </div>


    </>
  );
}

export default reduxForm({
  form: 'ForgotPassword',
  validate,
  warn
})(ForgotPassword);


