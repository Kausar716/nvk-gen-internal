import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Collapse, Row, Col, Label} from 'reactstrap';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import * as BiIcons from "react-icons/bs";


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
        <input {...input}   className="inputBoxDesign2" placeholder={label}  type={type}/>
        <Row>
        {touched && ((error && <span style={{color:"red", marginLeft:"1em"}}>{error}</span>) || (warning && <span>{warning}</span>))}
        </Row>
        
      </div>
    </div>
  )


  const onSubmit = (values) =>{
    console.log(values);
  }
  
  
    



const CS_ExcahangeDetails = (props) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

  const { handleSubmit, pristine, reset, submitting } = props;

  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <div color="primary" onClick={toggle}  className="SubHeader">
      <Label className="subFont">Customer and Supplier Exchange Details</Label>
        <span className="updownSymbolContainer"> 
        {isOpen ?  <img src="assets/img/arrow-icon2.svg" alt=""/> :  <img src="assets/img/arrow-icon.svg" alt=""/> } 
        </span>
        </div>
      <Collapse isOpen={isOpen}>
       
          
          <div className="docDetails" style={{marginTop:"-12px"}}>
                  {/* <Label className="secondHeader">
                  Customer Exchange Details
                  </Label> */}
                   <p className="sub_menu_nameD">  Customer Exchange Details</p>
          </div>


<div >


 


          <Row className="containerBox">
              <Col>
                    <Label className="subHeadingLabels">From Currency</Label>
                        <Row>
                            <Col><Label className="topSpace">CAD</Label>
                            </Col>
                        </Row>
              </Col>


              <Col>
                  <Label className="subHeadingLabels">To Currency</Label>
                        <Row>
                            <Col><Label className="topSpace">US</Label>
                            </Col>
                        </Row>
              </Col>

              <Col className="spacebelow">
                  <Label className="subHeadingLabels">Exchange Rates</Label>
                        <Row>
                            <Col> 
                          
                            <Field
                                            name="UsersCExchangeRates"
                                            component={renderField}
                                            type="text"
                                           
                                            //validate={formValidators.ReadyToLateNotice}
                                            validate={[ required, number, minValue2]}
                                            label="0.72"
                                        />
                           
                            
                            </Col>
                        </Row>
              </Col>

              <Col>
                  <Label className="subHeadingLabels">Exchange Date</Label>
                        <Row>
                            <Col>
                            <DatePicker  className="inputBoxDesign2" selected={startDate} onChange={date => setStartDate(date)} />
                            </Col>
                        </Row>
              </Col>

          </Row>

  
          <div className="docDetails" style={{marginTop:"-16px"}}>
          <p className="sub_menu_nameD">  Supplier Exchange Details</p>
                  {/* <Label className="secondHeader">
                  Suppliear Exchange Details
                  </Label> */}
          </div>
          <Row className="containerBox">
              <Col>
                    <Label className="subHeadingLabels">From Currency</Label>
                        <Row>
                            <Col><Label className="topSpace">CAD</Label>
                            </Col>
                        </Row>
              </Col>


              <Col>
                  <Label className="subHeadingLabels">To Currency</Label>
                        <Row>
                            <Col><Label className="topSpace">US</Label>
                            </Col>
                        </Row>
              </Col>

              <Col  className="spacebelow">
                  <Label className="subHeadingLabels">Exchange Rates</Label>
                        <Row>
                            <Col> 
                           
                            <Field
                                            name="UsersSExchangeRates"
                                            component={renderField}
                                            type="text"
                                            
                                            //validate={formValidators.ReadyToLateNotice}
                                            validate={[ required, number, minValue2]}
                                            label="0.72"
                                        />
                            </Col>
                        </Row>
              </Col>

              <Col>
                  <Label className="subHeadingLabels">Exchange Date</Label>
                        <Row>
                            <Col>
                            <DatePicker className="inputBoxDesign2" selected={startDate} onChange={date => setStartDate(date)} />
                            </Col>
                        </Row>
              </Col>
              <Col xs="12">
              
          <div align="right" className="action_area_left">
                        <button className="button_style_Tools_Setting_Cancel"  disabled={pristine || submitting} onClick={reset} >Cancel</button>
                        <button className="button_style_Tools_Setting_Save" onClick={handleSubmit(onSubmit)} disabled={pristine || submitting}  >Save</button>
                  </div>
                  </Col> 

          </Row>
          
          
          
          </div>
   


          

      </Collapse>


    </>
  );
}

export default reduxForm({
  form: 'CS_ExcahangeDetails',
})(CS_ExcahangeDetails);