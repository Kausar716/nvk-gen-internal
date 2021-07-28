import React, { useState,useEffect } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Collapse, Row, Col, Label} from 'reactstrap';
import {connect} from "react-redux";
import {handleChangeFilter,getAllCustomerExchange,saveNoticationData,getNotificationData,handleExchangeData,saveFinanceExchangeData} from "../../../actions/customerSettingAction";
import {saveSupplierData,handleSupplierExchnageData,getAllSupplierExchange} from "../../../actions/supplierManagementAction";
import DatePicker from "react-datepicker";
import SuccessModal from '../../Modal/SuccessModal';
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
  const [checkedData,setCheckedData] =useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [successMessage,setSuccessMessage] = useState([])
  const toggle1  = ()=>setIsOpen1(!isOpen);
  // const [customerExchange,setCustomerExchange] = useState({from_currency:"CAD",to_currency:"US",exchange_rate:"",exchange_date:""})
  // const [supplierExchange,setSupplierExchange] = useState({from_currency:"CAD",to_currency:"US",exchange_rate:"",exchange_date:""})

  const { handleSubmit, pristine, reset, submitting,customerExchange } = props.customerData;
  const {supplierExchange} = props.supplierData


  const handleInputData =(e)=>{
    setCheckedData(true)
    props.handleExchangeData(e.target.value,e.target.id,"customerExchange")

  }
  const handleInputData1 =(e)=>{
    setCheckedData(true)
    props.handleSupplierExchnageData(e.target.value,e.target.id,"supplierExchange")

  }
  const datePickerData =(e)=>{
    setCheckedData(true)
    props.handleExchangeData(e.target.value,"exchange_date","customerExchange")
}
const datePickerData1 =(e)=>{
  console.log(e.target.value)
  setCheckedData(true)
  props.handleSupplierExchnageData(e.target.value,"exchange_date","supplierExchange")

}
const saveExchangeData = ()=>{
  setCheckedData(false)
  setSuccessMessage(["Customer Exchange Rates Saved successfully"])
  // toggle1(true)
  setIsOpen1(true)
  props.saveFinanceExchangeData(customerExchange)
  props.saveSupplierData(supplierExchange)

}
const resetData = ()=>{
  props.getAllCustomerExchange()
  props.getAllSupplierExchange()

}
useEffect(()=>{
  props.getAllCustomerExchange()
  props.getAllSupplierExchange()

},[handleSubmit])

  const [startDate, setStartDate] = useState(new Date());
  console.log(customerExchange)

  let dateInformate = customerExchange.exchange_date
  let split1 = dateInformate.split("-")
  let month = split1[1]
  let date = split1[2]
  let month1
  let date1
  if(month.toString().length ==1) {
    month1 = "0"+month
  }else{
    month1 = month

  }
  if(month.toString().length ==1) {
    date1 = "0"+date
  }else{
    date1 = date

  }
  let dateToShow = split1[0]+"-"+month1+"-"+date1

  let dateInformate1 = supplierExchange.exchange_date
  let split2 = dateInformate1.split("-")
  let month2 = split2[1]
  let date2 = split2[2]
  let month3
  let date3
  if(month2.toString().length ==1) {
    month3 = "0"+month2
  }else{
    month3 = month2

  }
  if(date2.toString().length ==1) {
    date3 = "0"+date2
  }else{
    date3 = date2

  }
  let dateToShow2 = split2[0]+"-"+month3+"-"+date3


  return (
    <>
    
      <div color="primary" onClick={toggle}  className="SubHeader">
      <SuccessModal status={isOpen1} message={successMessage} modalAction={toggle1}/>
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
                   <p className="sub_menu_nameD"> Customer Exchange Rates</p>
          </div>


<div >


 


          <Row className="containerBox">
              <Col>
                    <Label className="subHeadingLabels">From Currency</Label>
                        <Row>
                            <Col><p className="topSpace">{customerExchange.from_currency}</p>
                            </Col>
                        </Row>
              </Col>


              <Col>
                  <Label className="subHeadingLabels">To Currency</Label>
                        <Row>
                            <Col><p className="topSpace">{customerExchange.to_currency}</p>
                            </Col>
                        </Row>
              </Col>

              <Col className="spacebelow">
                  <Label className="subHeadingLabels" style={{marginLeft:6}}>Exchange Rate</Label>
                        <Row>
                            <Col> 
                          
                            <div>
                                <input type="number" placeholder={"0.000"} className="inputBoxDesign2"  value={customerExchange.exchange_rate>"0"?customerExchange.exchange_rate:""} onChange={handleInputData} id="exchange_rate" step=".001"/> 
                            </div>
                           
                            
                            </Col>
                        </Row>
              </Col>

              <Col>
                  <Label className="subHeadingLabels" style={{marginLeft:6}}>Exchange Date</Label>
                        <Row>
                            <Col>
                            {/* <DatePicker  className="inputBoxDesign2" selected={customerExchange.exchange_date} onChange={datePickerData} id="exchange_date_customer"/> */}
                            <input type="date" onChange={datePickerData} className="dateDesign"  
                                                    value={dateToShow} />
                            </Col>
                        </Row>
              </Col>

          </Row>

  
          <div className="docDetails" style={{marginTop:"-16px"}}>
          <p className="sub_menu_nameD">  Supplier Exchange</p>
                  {/* <Label className="secondHeader">
                  Suppliear Exchange Details
                  </Label> */}
          </div>
          <Row className="containerBox">
              <Col>
                    <Label className="subHeadingLabels">From Currency</Label>
                        <Row>
                            <Col><p className="topSpace">CAD</p>
                            </Col>
                        </Row>
              </Col>


              <Col>
                  <Label className="subHeadingLabels">To Currency</Label>
                        <Row>
                            <Col><p className="topSpace">US</p>
                            </Col>
                        </Row>
              </Col>

              <Col  className="spacebelow">
                  <Label className="subHeadingLabels" style={{marginLeft:6}}>Exchange Rate</Label>
                        <Row>
                            <Col> 
                                
                            <div>
                                <input type="number" step=".001" className="inputBoxDesign2" placeholder={"0.000"} value={supplierExchange.exchange_rate>"0"?supplierExchange.exchange_rate:""}    onChange={handleInputData1} id="exchange_rate"/> 
                            </div>
                           
                           
                          
                            </Col>
                        </Row>
              </Col>

              <Col>
                  <Label className="subHeadingLabels" style={{marginLeft:6}}>Exchange Date</Label>
                        <Row>
                            <Col>
                            {/* <DatePicker className="inputBoxDesign2" selected={supplierExchange.exchange_date} onChange={datePickerData1} /> */}
                            {/* dateDesign */}
                            <input type="date" onChange={datePickerData1} className="dateDesign"  
                                                    value={dateToShow2} />
                            </Col>
                        </Row>
              </Col>
              <Col xs="12">
              
          <div align="right" className="action_area_left">
                        <button  class="btn btn-outline-secondary btn-md" style={{height:40,width:75,fontSize:14}} disabled={checkedData==true?false:true} onClick={resetData}>Cancel</button>
                        <button className="button_style_Tools_Setting_Save" onClick={saveExchangeData}  disabled={checkedData==true?false:true}>Save</button>
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
export default connect(mapStateToProps, {getAllSupplierExchange,getAllCustomerExchange,handleChangeFilter,saveNoticationData,getNotificationData,handleExchangeData,saveFinanceExchangeData,handleSupplierExchnageData,saveSupplierData})(form(CS_ExcahangeDetails));