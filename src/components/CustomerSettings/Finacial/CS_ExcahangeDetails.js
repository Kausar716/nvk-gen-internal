import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Collapse, Row, Col, Label} from 'reactstrap';
import {connect} from "react-redux";
import {handleChangeFilter,saveNoticationData,getNotificationData,handleExchangeData,saveFinanceExchangeData} from "../../../actions/customerSettingAction";
import {saveSupplierData,handleSupplierExchnageData} from "../../../actions/supplierManagementAction";
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
  // const [customerExchange,setCustomerExchange] = useState({from_currency:"CAD",to_currency:"US",exchange_rate:"",exchange_date:""})
  // const [supplierExchange,setSupplierExchange] = useState({from_currency:"CAD",to_currency:"US",exchange_rate:"",exchange_date:""})

  const { handleSubmit, pristine, reset, submitting,customerExchange } = props.customerData;
  const {supplierExchange} = props.supplierData


  const handleInputData =(e)=>{
    props.handleExchangeData(e.target.value,e.target.id,"customerExchange")

  }
  const handleInputData1 =(e)=>{
    props.handleSupplierExchnageData(e.target.value,e.target.id,"supplierExchange")

  }
  const datePickerData =(data)=>{
    props.handleExchangeData(data,"exchange_date","customerExchange")
}
const datePickerData1 =(data)=>{
  props.handleSupplierExchnageData(data,"exchange_date","supplierExchange")

}
const saveExchangeData = ()=>{
  let obj={}
  obj.from_currency = customerExchange.from_currency
  obj.to_currency = customerExchange.to_currency
  obj.exchange_rate = customerExchange.exchange_rate
  let date = new Date(customerExchange.exchange_date)
  let dateInformate = date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate()
  obj.exchange_date =dateInformate
  props.saveFinanceExchangeData(obj)
let obj1 ={};
obj1.from_currency = supplierExchange.from_currency
obj1.to_currency = supplierExchange.to_currency
obj1.exchange_rate = supplierExchange.exchange_rate
let date1 = new Date(supplierExchange.exchange_date)
let dateInformate1 = date1.getFullYear() + '-' + (date1.getMonth()+1) + '-' + date1.getDate()
  obj1.exchange_date =dateInformate1
props.saveSupplierData(obj1)

}

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
                            <Col><Label className="topSpace">{customerExchange.from_currency}</Label>
                            </Col>
                        </Row>
              </Col>


              <Col>
                  <Label className="subHeadingLabels">To Currency</Label>
                        <Row>
                            <Col><Label className="topSpace">{customerExchange.to_currency}</Label>
                            </Col>
                        </Row>
              </Col>

              <Col className="spacebelow">
                  <Label className="subHeadingLabels">Exchange Rates</Label>
                        <Row>
                            <Col> 
                          
                            <div>
                                <input type="number" className="inputBoxDesign2" placeholder={""} value={customerExchange.exchange_rate} onChange={handleInputData} id="exchange_rate"/> 
                            </div>
                           
                            
                            </Col>
                        </Row>
              </Col>

              <Col>
                  <Label className="subHeadingLabels">Exchange Date</Label>
                        <Row>
                            <Col>
                            <DatePicker  className="inputBoxDesign2" selected={customerExchange.exchange_date} onChange={datePickerData} id="exchange_date_customer"/>
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
                                
                            <div>
                                <input type="number" className="inputBoxDesign2" placeholder={""} value={supplierExchange.exchange_rate} onChange={handleInputData1} id="exchange_rate"/> 
                            </div>
                           
                           
                          
                            </Col>
                        </Row>
              </Col>

              <Col>
                  <Label className="subHeadingLabels">Exchange Date</Label>
                        <Row>
                            <Col>
                            <DatePicker className="inputBoxDesign2" selected={supplierExchange.exchange_date} onChange={datePickerData1} />
                            </Col>
                        </Row>
              </Col>
              <Col xs="12">
              
          <div align="right" className="action_area_left">
                        <button  class="btn btn-outline-secondary btn-md" style={{height:40,width:75,fontSize:14}}>Cancel</button>
                        <button className="button_style_Tools_Setting_Save" onClick={saveExchangeData}>Save</button>
                  </div>
                  </Col> 

          </Row>
          
          
          
          </div>
   


          

      </Collapse>


    </>
  );
}
const mapStateToProps = (state)=>(
  {
    customerData:state.customerReducer,
    supplierData:state.supplierData
  }

)
// export default reduxForm({
//   form: 'CS_ExcahangeDetails',
// })(CS_ExcahangeDetails);
const form = reduxForm({ form: 'Notification' });
export default connect(mapStateToProps, {handleChangeFilter,saveNoticationData,getNotificationData,handleExchangeData,saveFinanceExchangeData,handleSupplierExchnageData,saveSupplierData})(form(CS_ExcahangeDetails));