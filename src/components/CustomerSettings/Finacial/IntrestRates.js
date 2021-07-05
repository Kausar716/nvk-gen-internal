import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Collapse ,Row,  Label} from 'reactstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
// import * as BiIcons from "react-icons/bs";


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
    {/* <label>{label}</label> */}
    <div>
      <input {...input}  placeholder={label}  type={type}   className="textRightIntrestRate"/><span style={{padding:"4px"}}>%</span>
      <Row>
      {touched && ((error && <span style={{color:"red", marginLeft:"1em"}}>{error}</span>) || (warning && <span>{warning}</span>))}
      </Row>
      
    </div>
  </div>
)

const taxrenderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    {/* <label>{label}</label> */}
    <div>
      <input {...input}  placeholder={label}  type={type}  className="textRightTax" />
      <Row>
      {touched && ((error && <span style={{color:"red",marginLeft:"1em"}}>{error}</span>) || (warning && <span>{warning}</span>))}
      </Row>
      
    </div>
  </div>
)


const onSubmit = (values) =>{
  console.log(values);
}




const InrestRates = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const { handleSubmit, pristine, reset, submitting } = props;
  
  return (
    <>
      <div color="primary" onClick={toggle}  className="SubHeader">
      <Label className="subFont">Interest Rates</Label> 
      <span className="updownSymbolContainer"> 
      {isOpen ?  <img src="assets/img/arrow-icon2.svg" alt=""/> :  <img src="assets/img/arrow-icon.svg" alt=""/> } 
        </span>
        </div>
      <Collapse isOpen={isOpen}>
       
          <div className="docDetails" style={{marginTop:"-12px"}}>
                   <p className="sub_menu_nameD"> CUSTOMER Orders and Invoices</p>
          </div>

          <div className="containerBox"> 


            <div className="row_1_intrestRate">

                    <div className="intrestRate_label">
                          <label>Monthly</label>
                          <Field
                                          name="intrestRate_Monthly"
                                          component={renderField}
                                          type="text"
                                          label="2.5"
                                          validate={[ required, number, minValue2]}
                                      />
                    </div>


                    <div className="intrestRate_label"  style={{marginLeft:"-19em"}}>
                          <label>Yearly</label>
                          <Field
                                          name="intrestRate_Yearly"
                                          component={renderField}
                                          type="text"
                                          label="22.0"
                                          validate={[ required, number, minValue2]}
                                      />
                    </div>


                    <div className="intrestRate_label" style={{marginLeft:"-19em"}}>
                          <label>Tax Rate</label>
                          <Field
                                          name="intrestRate_Tax_Rate"
                                          component={renderField}
                                          type="text"
                                          label="13"
                                          validate={[ required, number, minValue2]}
                                      />
                    </div>


                      <div className="intrestRate_label" style={{marginLeft:"-19em"}}>
                            <label>Tax Rate Label</label>
                            <Field
                                            name="intrestRate_Tax_Rate_Label"
                                            component={taxrenderField}
                                            type="text"
                                            label="Sales tax (HST)@ 13%"
                                            validate={[ required, number, minValue2]}
                                        />
                      </div>


                      <div className="intrestRate_label" style={{marginLeft:"-11em"}}>
                            <label>Tax Rate Number</label>
                            <Field
                                            name="intrestRate_Tax_Rate_Number"
                                            component={taxrenderField}
                                            type="text"
                                            label="HST: 013455647812 RT0001"
                                            validate={[ required, number, minValue2]}
                                        />
                      </div>
            </div>
            
            <div align="right" className="action_area_left"  >
                              <button className="button_style_Tools_Setting_Cancel"    disabled={pristine || submitting} onClick={reset} >Cancel</button>
                              <button className="button_style_Tools_Setting_Save"    style={{marginRight:"-9.5rem"}} onClick={handleSubmit(onSubmit)} disabled={pristine || submitting}  >Save</button>
                  </div> 

                </div>


                    
      </Collapse>

      
    </>
  );
}

export default reduxForm({
  form: 'notify',
})(InrestRates);