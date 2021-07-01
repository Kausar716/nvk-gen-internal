import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Collapse,  Row, Col, Label} from 'reactstrap';

import '../style.css';
import * as BiIcons from "react-icons/bs";

const onSubmit = (values) =>{
    console.log(values);
}



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
        <input {...input} placeholder={label}  type={type} className="textRightESetting"/>
        <Row>
        {touched && ((error && <span style={{color:"red", marginLeft:"1.1em"}}>{error}</span>) || (warning && <span>{warning}</span>))}
        </Row>
        
      </div>
    </div>
  )


const EmailSetting = props => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <div>
        <div onClick={toggle}  className="SubHeader">
        <Label className="subFont">Email Settings</Label>
        <span className="updownSymbolContainer"> 
        {isOpen ? <BiIcons.BsCaretDownFill className="updownSymbol" /> : <BiIcons.BsCaretRightFill className="updownSymbol" /> } 
        </span>
          
          </div>
        <Collapse isOpen={isOpen}>
           
                <div className="docDetails">
                <p className="sub_menu_nameD"> Quote Reminders</p>
                  {/* <Label className="secondHeader">
                  Quote Reemainders
                  </Label> */}
                </div>
                
                    <Row className="containerBox">
                        <Col sm="2">
                            <Label className="subHeadingLabels">First Notice</Label>
                        <Row className="spacebelow">
                            <Col>
                            
                            <Field
                                            name="FirstNotice"
                                            component={renderField}
                                            type="text"
                                            label="30"
                                            validate={[ required, number, minValue2 ]}
                                            
                                        />
                            </Col>
                           
                            <Col> <Label  className="moveLeftESetting">days
                              </Label>
                            </Col>
                        </Row>
                        </Col>


                        <Col sm="2">
                            <Label className="subHeadingLabels">Second Notice</Label>
                            <Row>
                              <Col>
                              
                              <Field
                                            name="SecondNotice"
                                            component={renderField}
                                            type="text"
                                            label="45"
                                            validate={[ required, number, minValue2 ]}
                                            
                                        />
                     
                              
                              </Col>

                              <Col>
                            <Label  className="moveLeftESetting">days
                              </Label>
                            </Col>
                            </Row>
                        </Col>


                    <Col sm="2">
                            <Label className="subHeadingLabels">Quote Set to Inactive</Label>
                            <Row>
                              <Col>
                             
                              <Field
                                            name="QuoteSetToInactive"
                                            component={renderField}
                                            type="text"
                                            label="60"
                                            validate={[ required, number, minValue2 ]}
                                          
                                        />
                              </Col>

                              <Col>
                            <Label  className="moveLeftESetting">days
                              </Label>
                            </Col>
                            </Row>
                    </Col>
                    </Row>


                    <div align="right" className="action_area_left">
                              <button className="button_style_Tools_Setting_Cancel"  disabled={pristine || submitting} onClick={reset} >Cancel</button>
                              <button className="button_style_Tools_Setting_Save" onClick={handleSubmit(onSubmit)} disabled={pristine || submitting}  >Save</button>
                        </div> 
        </Collapse>
      
   
    </div>
  );
};

export default reduxForm({
  form: 'EmailSetting', // a unique identifier for this form
})(EmailSetting);
