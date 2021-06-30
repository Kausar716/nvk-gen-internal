import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Collapse,   Row, Col, Label} from 'reactstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import * as BiIcons from "react-icons/bs";

const onSubmit = (values) =>{
  console.log(values);
}



const required = value => value ? undefined : 'Required'
// const maxLength = max => value =>
// value && value.length > max ? `Must be ${max} characters or less` : undefined
// const maxLength15 = maxLength(15)
const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined
// const minValue = min => value =>
// value && value < min ? `Must be at least ${min}` : undefined
// const minValue2 = minValue(2)


const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    {/* <label>{label}</label> */}
    <div>
      <input style={{width:"115%"}} {...input} placeholder={label}   type={type} className="textRight"/>
      <Row>
      {touched && ((error && <span style={{color:"red", marginLeft:"1em"}}>{error}</span>) || (warning && <span>{warning}</span>))}
      </Row>
      
    </div>
  </div>
)


const CustomerPrintRates = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <>
      <div color="primary" onClick={toggle}  className="SubHeader">
      <Label className="subFont">Customer Print Rates</Label>
      <span className="updownSymbolContainer"> 
      {isOpen ? <BiIcons.BsCaretDownFill className="updownSymbol" /> : <BiIcons.BsCaretRightFill className="updownSymbol" /> } 
        </span>
        
        </div>
      <Collapse isOpen={isOpen}>
        
                <div className="docDetails">
                <p className="sub_menu_nameD"> Print Tag & Label Pricing</p>
                    {/* <Label className="secondHeader">
                    Print Tag & Label Pricing
                    </Label> */}
                    </div>

        <div >
        
          <Row className="containerBox">
              <Col>
                    <Label className="subHeadingLabels" style={{marginLeft:"1.2em"}}>Base Price</Label>
                        <Row className="spacebelow">
                            <Col sm="0"><p className="moveRight">$</p></Col>
                            <Col sm="4">
                            <Field
                                            name="BasePrice"
                                            component={renderField}
                                            type="text"
                                            label="0.05"
                                            
                                            validate={[ required, number,]}
                                        />
                              </Col>
                            

                            <Col sm="0">
                            <Label className="moveLittleInCPR">per tag/label </Label>
                            </Col>
                        </Row>
              </Col>

              <Col>
                    <Label className="subHeadingLabels" style={{marginLeft:"1.2em"}}>Custom Logo</Label>
                        <Row>
                            <Col sm="0"><p className="moveRight">$</p></Col>
                            <Col sm="4">
                            <Field
                                            name="CustomLogo"
                                            component={renderField}
                                            type="text"
                                            label="0.00"
                                            validate={[ required, number,]}
                                        />
                            </Col>
                           
                            <Col sm="0">
                            <Label className="moveLittleInCPR">per tag/label </Label>
                            </Col>
                        </Row>
              </Col>


              <Col>
                    <Label className="subHeadingLabels" style={{marginLeft:"1.2em"}}>Custom Pricing</Label>
                        <Row>
                            <Col sm="0"><p className="moveRight">$</p></Col>
                            <Col sm="4">

                         
                            <Field
                                            name="CustomPricing"
                                            component={renderField}
                                            type="text"
                                            label="0.10"
                                            validate={[ required, number,]}
                                        />
                            </Col>
                            <Col sm="0">
                            <Label className="moveLittleInCPR">per tag/label </Label>
                            </Col>
                        </Row>
              </Col>


              <Col>
                    <Label className="subHeadingLabels" style={{marginLeft:"1.2em"}}>Custom Application</Label>
                        <Row>
                            <Col sm="0"><p className="moveRight">$</p></Col>
                            <Col sm="4">

                           
                            <Field
                                            name="CustomApplication"
                                            component={renderField}
                                            type="text"
                                            label="0.20"
                                            validate={[ required, number,]}
                                        />
                            </Col>
                            <Col sm="0">
                            <Label className="moveLittleInCPR">per tag/label </Label>
                            </Col>
                        </Row>
              </Col>



          </Row>

       

<div className="parentButtons">

{/* 
          <Row >
            <Col sm="10">
            </Col>
                    <Col sm="1">
                    <Button  className="buttonTopMargin" outline color="secondary" type="button" disabled={pristine || submitting} onClick={reset}  >Cancel</Button>
                    </Col>

                  <Col sm="1">
                  <Button  className="buttonTopMargin" color="primary" type="submit" style={{backgroundColor:"#357ebd"}} onClick={handleSubmit(onSubmit)} disabled={pristine || submitting}  >Save</Button>
                  </Col>
            </Row>
 */}





                        <div align="right" className="action_area_left">
                              <button className="button_style_Tools_Setting_Cancel"  disabled={pristine || submitting} onClick={reset} >Cancel</button>
                              <button className="button_style_Tools_Setting_Save" onClick={handleSubmit(onSubmit)} disabled={pristine || submitting}  >Save</button>
                        </div> 
            


            </div>

            </div>  
         
      </Collapse>


    </>
  );
}


export default reduxForm({
  form: 'CustomerPrintRates', // a unique identifier for this form
})(CustomerPrintRates);
