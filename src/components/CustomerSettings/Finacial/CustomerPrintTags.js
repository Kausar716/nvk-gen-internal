import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Collapse,   Row, Col, Label} from 'reactstrap';
import {connect} from "react-redux";
import {handleChangeFilter,saveNoticationData,savecustomPrintData,handleExchangeData} from "../../../actions/customerSettingAction";
//import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
// import * as BiIcons from "react-icons/bs";

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
  const handleInputData =(e)=>{
    props.handleExchangeData(e.target.value,e.target.id,"customerTag")

  }

  const saveExchangeData = ()=>{
    let obj={}
    obj.base_price = customerTag.base_price
    obj.custom_logo = customerTag.custom_logo
    obj.custom_pricing = customerTag.custom_pricing
    obj.custom_application = customerTag.custom_application
    obj.status = 1
    props.savecustomPrintData(obj)
  }
  
  const { handleSubmit, pristine, reset, submitting,customerTag } = props.customerData;
  return (
    <>
      <div color="primary" onClick={toggle}  className="SubHeader">
      <Label className="subFont">Customer Print Rates</Label>
      <span className="updownSymbolContainer"> 
      {isOpen ?  <img src="assets/img/arrow-icon2.svg" alt=""/> :  <img src="assets/img/arrow-icon.svg" alt=""/> } 
        </span>
        
        </div>
      <Collapse isOpen={isOpen}>
        
                <div className="docDetails" style={{marginTop:"-12px"}}>
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
                            <input type="number" className="textRight" style={{width:"115%"}} id="base_price" value={customerTag.base_price}  onChange={handleInputData}/>
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
                            <input type="number" className="textRight" style={{width:"115%"}} id="custom_logo" value={customerTag.custom_logo}  onChange={handleInputData}/>
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

                            <input type="number" className="textRight" style={{width:"115%"}} id="custom_pricing" value={customerTag.custom_pricing}  onChange={handleInputData}/>
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

                           
                            <input type="number" className="textRight" style={{width:"115%"}} id="custom_application" value={customerTag.custom_application}  onChange={handleInputData}/>
                            </Col>
                            <Col sm="0">
                            <Label className="moveLittleInCPR">per tag/label </Label>
                            </Col>
                        </Row>
              </Col>
              <Col xs="12">
              <div align="right" className="action_area_left">
                              <button  class="btn btn-outline-secondary btn-md" style={{height:40,width:75,fontSize:14}}  >Cancel</button>
                              <button className="button_style_Tools_Setting_Save" onClick={saveExchangeData}>Save</button>
                        </div> 
            
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





                     


            </div>

            </div>  
         
      </Collapse>


    </>
  );
}
const mapStateToProps = (state)=>(
  {
    customerData:state.customerReducer
  }

)


const form = reduxForm({ form: 'Notification' });
export default connect(mapStateToProps, {handleChangeFilter,saveNoticationData,savecustomPrintData,handleExchangeData})(form(CustomerPrintRates));