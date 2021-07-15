import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Collapse ,Row,  Label} from 'reactstrap';
import {connect} from "react-redux";
import {handleExchangeData,saveNoticationData,getNotificationData,saveIntrestData,saveFinanceExchangeData} from "../../../actions/customerSettingAction";
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
  const handleChangeData = (e) =>{
    props.handleExchangeData(e.target.value,e.target.id,"customerIntrest")

  }

  const saveExchangeData = ()=>{
    let obj={}
    obj.monthly = customerIntrest.monthly
    obj.yearly = customerIntrest.yearly
    obj.taxrate = customerIntrest.taxrate
    obj.taxrate_label = customerIntrest.taxrate_label
    obj.taxrate_number = customerIntrest.taxrate_number
    obj.status = 1
    props.saveIntrestData(obj)
  
  }

  const { handleSubmit, pristine, reset, submitting,customerIntrest} = props.customerData;
  
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
                          <input type="number"     className="textRightIntrestRate" id="monthly" value={customerIntrest.monthly} onChange={handleChangeData}/><span style={{padding:"4px"}}>%</span>
                    </div>


                    <div className="intrestRate_label"  style={{marginLeft:"-19em"}}>
                          <label>Yearly</label>
                          <input type="number"     className="textRightIntrestRate" id="yearly" value={customerIntrest.yearly}  onChange={handleChangeData}/><span style={{padding:"4px"}}>%</span>
                    </div>


                    <div className="intrestRate_label" style={{marginLeft:"-19em"}}>
                          <label>Tax Rate</label>
                          <input type="number"     className="textRightIntrestRate" id="taxrate" value={customerIntrest.taxrate}  onChange={handleChangeData}/><span style={{padding:"4px"}}>%</span>
                    </div>


                      <div className="intrestRate_label" style={{marginLeft:"-19em"}}>
                            <label>Tax Rate Label</label>
                            <input type="text"  placeholder={""}    className="textRightTax" id="taxrate_label" value={customerIntrest.taxrate_label}  onChange={handleChangeData}/>
                      </div>


                      <div className="intrestRate_label" style={{marginLeft:"-11em"}}>
                            <label>Tax Rate Number</label>
                            <input type="text"  placeholder={""}    className="textRightTax" id="taxrate_number" value={customerIntrest.taxrate_number}  onChange={handleChangeData}/>
                      </div>
            </div>
            
            <div align="right" className="action_area_left"  >
                              <button className="button_style_Tools_Setting_Cancel"    >Cancel</button>
                              <button className="button_style_Tools_Setting_Save"   onClick={saveExchangeData}>Save</button>
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
export default connect(mapStateToProps, {handleExchangeData,saveIntrestData,saveFinanceExchangeData})(form(InrestRates));
