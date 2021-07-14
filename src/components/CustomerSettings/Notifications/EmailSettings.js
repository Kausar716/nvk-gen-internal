import React, { useState,useEffect } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Collapse,  Row, Col, Label} from 'reactstrap';
import {connect} from "react-redux";
import InfoModal from "../../Modal/InfoModal"
import {handleChangeFilter,saveNoticationData,getNotificationData,saveEmailData,getEmailData} from "../../../actions/customerSettingAction";

import '../style.css';
// import * as BiIcons from "react-icons/bs";

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
	const [isOpen1, setIsOpen1] = useState(false);
	const [message,setMessage] = useState([]);
    const toggle = () => setIsOpen(!isOpen);
	const toggle1 = () => setIsOpen1(!isOpen1);


	const handleDataChange = (e)=>{
		props.handleChangeFilter(e.target.value,e.target.id)

	}
	const handleSaveData = (e)=>{
		if(parseInt(first_notice)==0 && parseInt(second_notice) ==0 && parseInt(quote_set_to_inactive==0)){

			setMessage(["Values can't be zero"])
			setIsOpen1(true)
		}else if(parseInt(second_notice)<parseInt(first_notice)){

			setMessage(["Second Notice should be greater than first Notice"])
			setIsOpen1(true)

		}else if(parseInt(second_notice)>parseInt(quote_set_to_inactive)){
			alert()

			setMessage(["Quote set to inactive should be greater than second Notice"])
			setIsOpen1(true)
		}else{
			let obj = {}
			obj.first_notice = first_notice
			obj.second_notice = second_notice
			obj.quote_set_to_inactive = quote_set_to_inactive
			obj.status =1
			props.saveEmailData(obj)

		}

	}
	useEffect(()=>{
		props.getEmailData()

	},[isOpen])

  const { handleSubmit, pristine, reset, submitting,first_notice,second_notice,quote_set_to_inactive } = props.customerData;
  return (
    <div>
		<InfoModal status={isOpen1} message={message} modalAction={toggle1}/>
        <div onClick={toggle}  className="SubHeader">
        <Label className="subFont">Email Settings</Label>
        <span className="updownSymbolContainer"> 
        {isOpen ?  <img src="assets/img/arrow-icon2.svg" alt=""/> :  <img src="assets/img/arrow-icon.svg" alt=""/> } 
        </span>
          
          </div>
        <Collapse isOpen={isOpen}>
           
                <div className="docDetails" style={{marginTop:"-12px"}}>
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
                              	<div>
        							<input type="number" placeholder={""}   className="textRightESetting" id="first_notice" value={first_notice} onChange={handleDataChange}/>
        							<Row>
        								{<span style={{color:"red", marginLeft:"1.1em"}}>{""}</span> }
        							</Row>
        
      							</div>
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
                              	<div>
        							<input type="number" placeholder={""}   className="textRightESetting" id="second_notice" value={second_notice} onChange={handleDataChange}/>
        							<Row>
        								{<span style={{color:"red", marginLeft:"1.1em"}}>{""}</span> }
        							</Row>
        
      							</div>
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
                              	<div>
        							<input type="number" placeholder={""}   className="textRightESetting" id="quote_set_to_inactive" value={quote_set_to_inactive} onChange={handleDataChange}/>
        							<Row>
        								{<span style={{color:"red", marginLeft:"1.1em"}}>{""}</span> }
        							</Row>
        
      							</div>
                            </Col>

                              <Col>
                            <Label  className="moveLeftESetting">days
                              </Label>
                            </Col>
                            </Row>
                    </Col>
                    <Col sm="6">
                    </Col>
                    <Col>
                    
                    <div align="right" className="action_area_left">
                              <button className="button_style_Tools_Setting_Cancel">Cancel</button>
                              <button className="button_style_Tools_Setting_Save" onClick={handleSaveData}>Save</button>
                        </div> 
                    </Col>
                    </Row>


        </Collapse>
      
   
    </div>
  );
};
const mapStateToProps = (state)=>(
	{
	  customerData:state.customerReducer
	}
  
  )

const form = reduxForm({ form: 'Notification' });
export default connect(mapStateToProps, {handleChangeFilter,saveNoticationData,getNotificationData,saveEmailData,getEmailData})(form(EmailSetting));
