
import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link, useHistory } from "react-router-dom";
import './index.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
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
  const aol = value =>
  value && /.+@aol\.com/.test(value) ?
  'Really? You still use AOL for your email?' : undefined
//   const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
//     <div>
//       {/* <label>{label}</label> */}
//       <div>
//         <input {...input}  className="inputBoxDesign2" placeholder={label}  type={type}/>
//         <Row>
//         {touched && ((error && <span style={{color:"red", marginLeft:"1em"}}>{error}</span>) || (warning && <span>{warning}</span>))}
//         </Row>
        
//       </div>
//     </div>
//   )

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




const SignInPage = (props) => {
    let history = useHistory();

  //const { handleSubmit, pristine, reset, submitting } = props;
  //const [renderPage , setRenderPage] = useState()
  const { error, handleSubmit, pristine, reset, submitting } = props


  console.log("error", error);
  const successFullLogin=()=>{
       
          // if(error===false){
            history.push("/Dashboard")
          // }
         
        
   
}






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
           
             <form className="signin_form" onSubmit={handleSubmit(submit)} >
             <p style={{color:"#787d82",fontWeight:"bold",padding:0,margin:0}}>Returning User</p>
                 <p style={{color:"#787d82",fontSize:12}}>Please enter your username and passowrd to sign in.</p>
                 <hr style={{borderTop:"1px dotted #787d82"}}></hr>
             {/* <p style={{textAlign:"center",color:"red"}}>Wrong email and password</p> */}
                    <div class="input-icons1">
                    <i class="fa fa-user icon1">
                </i>

                    {/* <input class="input-field1" 
                       type="email" name="emailId" id="emailId" placeholder="Enter Email" onChange={this.onChange}/> */}
                     <Field name="email" type="email" component={renderField} label="Email" />

                </div>
   	            <div class="input-icons1">
                    <i class="fa fa-lock icon1">
                </i>
                    {/* <input class="input-field1"  type="password validate={[ required, minValue2]}"
                     name="password" id="password" placeholder="Enter Password" onChange={this.onChange}/> */}
                
                                      <Field
                      name="password"
                      type="password"
                      component={renderField}
                      label="Password"
                      //validate={[ required, minValue2]}
                    />
                    {error && <strong>{error}</strong>}
                </div>

                <br/>
                <div style={{float:"left"}}>
                <FormGroup check >
                        <Label check>
                            <Input type="checkbox" style={{top:"2px"}}/>{' '}
                            <span className="infostyle" style={{top:"8px",color:"gray"}}>Keep me signed in</span>
                        </Label>
                        
                    </FormGroup>

                    <p className="infostyle" style={{marginTop:25}}><span style={{color:"#FF8C00"}}>Not yet registered? </span> 
                    <Link to="/registerNewUser" ><span className="infostyle" style={{color:"#4f91f7"}}>click here</span></Link></p>
                </div>
                <div style={{float:"right",marginTop:7}}>
                <FormGroup >
                    <Label>
                    
                    <Link to="/forgot" ><p className="infostyle" style={{color:"gray"}}>I forgot my password?</p></Link> 
                    
                   
                    {/* <Link to="/Dashboard">onClick={successFullLogin} */}
                    <Button className="loginbutton" type="submit"  disabled={pristine || submitting}  onClick={successFullLogin} style={{backgroundColor:"#d07510",border:"1px solid white",marginLeft:22,position:"relative",paddingRight:25, borderBottom:"4px solid #ad4902"}} ><span >SIGN IN</span> <span class='bx bxs-right-arrow-circle' style={{fontSize:"15px",verticalAlign:"middle",position:"absolute",top:11,left:75}}></span></Button>
                    {/* </Link> */}
                    </Label>
                </FormGroup>
                    
                </div>
                <hr style={{marginTop:90}}/>
                <div className="infostyle" style={{textAlign:"center"}}>
                    <p className="logincontactInfo" style={{color:"gray"}}>Trouble accessing your account or registering ?</p>
                    <p className="logincontactInfo" style={{color:"gray"}}>Contact <span  style={{color:"#4f91f7"}}>webmaster@nvknurseries.com</span></p>
                </div>
            </form>
         
            </div>
           
                </div>
                <p style={{float:"right", marginRight:"1em"}}>version:0.0.0.1</p>
                <footer>
                    <p>NVKGENESYS.COM | TERMS OF USE | PRIVACY <br></br>&copy; Nurseries. All Rights Reserved</p>
                </footer>
            </div>


    </>
  );
}

export default reduxForm({
  form: 'SignInPage',
  validate,
  warn
})(SignInPage);
