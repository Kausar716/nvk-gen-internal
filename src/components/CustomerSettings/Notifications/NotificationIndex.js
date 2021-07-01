import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Collapse, Label} from 'reactstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
//import validators from './validators'
import * as BiIcons from "react-icons/bs";
import * as FaIcon from 'react-icons/fi';
//import input from './input'



// const formValidators ={
//   ReadyToLateNotice: validators.required('ReadyToLateNotice not found '),
//   ReserveExpiryNotice: [validators.required('ReserveExpiryNotice required'), validators.maxLength(2)]
// }


const required = value => value ? undefined : 'Required'
// const maxLength = max => value =>
//   value && value.length > max ? `Must be ${max} characters or less` : undefined
// const maxLength15 = maxLength(15)
const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined
const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined
const minValue2 = minValue(2)


const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  
    <div>
      <input {...input} placeholder={label}  type={type} className="textRight_OrderSettings"/><span className="smallFont">days remaining</span>
      <div className="row_1">
      {touched && ((error && <span style={{color:"red"}}>{error}</span>) || (warning && <span>{warning}</span>))}
        </div> 
     
    </div>
  
)

const renderField2 = ({ input, label, type, meta: { touched, error, warning } }) => (
  
  <div>
    <input {...input} placeholder={label}  type={type} className="textRight_OrderSettings"/><span className="smallFont">days (Setting not used if set to 0)</span>
    <div className="row_1">
    {touched && ((error && <span style={{color:"red"}}>{error}</span>) || (warning && <span>{warning}</span>))}
      </div> 
   
  </div>

)



const onSubmit = (values) =>{
  console.log(values);
}


const Notification = (props) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);


  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <>

      <div color="primary" onClick={toggle} className="SubHeader">
      
      <Label className="subFont">Notifications</Label>
      <span className="updownSymbolContainer"> 
      {isOpen ? <BiIcons.BsCaretDownFill className="updownSymbol" /> : <BiIcons.BsCaretRightFill className="updownSymbol" /> } 
        </span>
        
        </div>
      <Collapse isOpen={isOpen}>
  
         <div className="docDetails">
         <p className="sub_menu_nameD"> Customer Notifications</p>
                  {/* <Label className="secondHeader">
                  Customer Notification
                  </Label> */}
          </div>
           
          <div className="containerBox">

                    <div className="row_1_Notification">

                      <div className="notification_label">
                            <label>READY to LATE Notice<span> <FaIcon.FiAlertCircle className="alertIcon" /></span></label>
                            <Field
                                            name="ReserveExpiryNotice1"
                                            component={renderField2}
                                            type="text"
                                            label="2"
                                            validate={[ required, number, minValue2]}
                                        />
                      </div>

                      <div className="notification_label">
                            <label>Reserve Expiry Notice <span><FaIcon.FiAlertCircle className="alertIcon" /></span></label>
                            <Field
                                            name="ReserveExpiryNotice2"
                                            component={renderField}
                                            type="text"
                                            label="2"
                                            validate={[ required, number, minValue2]}
                                        />
                      </div>

                      <div className="notification_label"></div>

                    </div>

                        
                         


            </div> 
                  <div align="right" className="action_area_left">
                        <button className="button_style_Tools_Setting_Cancel"  disabled={pristine || submitting} onClick={reset} >Cancel</button>
                        <button className="button_style_Tools_Setting_Save" onClick={handleSubmit(onSubmit)} disabled={pristine || submitting}  >Save</button>
                  </div> 


       
      </Collapse>
    </>
  );
}

export default reduxForm({
  form: 'notification',
})(Notification);



