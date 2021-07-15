import React, { useState,useEffect } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Collapse, Label} from 'reactstrap';
import {connect} from "react-redux";
import {handleChangeFilter,saveNoticationData,getNotificationData} from "../../../actions/customerSettingAction";
//import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
//import validators from './validators'
// import * as BiIcons from "react-icons/bs";
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



const Notification = (props) => {
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);
    const [notificationError,setNotificationError] = useState(["",""])
    const [checkedData,setCheckedData] = useState(false)
  
    useEffect(() => {
      props.getNotificationData()
    },[isOpen]);

  
 const handleDataChange = (e)=>{
  //  alert("hi")
  const some_array = [...notificationError]

   if(e.target.id ==="ready_to_late_notice"){
     if(isNaN(e.target.value))some_array[0] = 'Must be a number'
      else some_array[0] = "" 
  }

   if(e.target.id ==="reserve_expiry_notice"){
    if(isNaN(e.target.value))some_array[1] = 'Must be a number'
    else some_array[1] = ""
   }
  //  alert(reserve_expiry_notice)
  //  if(ready_to_late_notice !=="" && reserve_expiry_notice !==""){
  //    console.log(isNaN(parseInt(ready_to_late_notice))==true ,isNaN(parseInt(reserve_expiry_notice))==true)
  //   if(isNaN(parseInt(ready_to_late_notice))==true &&  isNaN(parseInt(reserve_expiry_notice))==true){
    if(ready_to_late_notice >0 && reserve_expiry_notice>0)
      setCheckedData(true)
    else setCheckedData(false)
    

  //   }else{
  //     setCheckedData(false)

  //   }
  //  }else{
  //   setCheckedData(false)

   
  
    // 
    // else  

   setNotificationError(some_array)

   props.handleChangeFilter(e.target.value,e.target.id)
   
  //  if(e.target.id ==="")
  //  setNotificationError(some_array)


 }
 const saveNotfication = ()=>{
   let obj = {}
   obj.ready_to_late_notice = ready_to_late_notice
   obj.reserve_expiry_notice = reserve_expiry_notice
   obj.status =1
  //  alert("f")
   props.saveNoticationData(obj)
 }



  const {ready_to_late_notice,reserve_expiry_notice} = props.customerData;
  return (
    <>

      <div color="primary" onClick={toggle} className="SubHeader">
      
      <Label className="subFont">Notifications</Label>
      <span className="updownSymbolContainer"  style={{paddingTop:4}}> 
      {isOpen ?   <img src="assets/img/arrow-icon2.svg" alt=""/> :  <img src="assets/img/arrow-icon.svg" alt=""/> } 
        </span>
        
        </div>
      <Collapse isOpen={isOpen}>
  
         <div className="docDetails" style={{marginTop:"-12px"}}>
         <p className="sub_menu_nameD"> Customer Notifications</p>
                  {/* <Label className="secondHeader">
                  Customer Notification
                  </Label> */}
          </div>
           
          <div className="containerBox">

                    <div className="row_1_Notification">

                      <div className="notification_label">
                            <label>READY to LATE Notice<span> <FaIcon.FiAlertCircle className="alertIcon" /></span></label>
                            <input placeholder={""}  type="number" className="textRight_OrderSettings" value={ready_to_late_notice} onChange={handleDataChange} id="ready_to_late_notice"/><span className="smallFont">days remaining</span>
                              <div className="row_1">
                              { <span style={{color:"red"}}>{notificationError[0]}</span>}
                                </div> 
                            {/* <Field
                                            name="ReserveExpiryNotice1"
                                            component={renderField2}
                                            type="text"
                                            label="2"
                                            validate={[ required, number, minValue2]}
                                            value={props.customerData.customerNotification[0]}
                                        /> */}
                      </div>

                      <div className="notification_label">
                            <label>Reserve Expiry Notice <span><FaIcon.FiAlertCircle className="alertIcon" /></span></label>
                            <input placeholder={""}  type="number" className="textRight_OrderSettings" value={reserve_expiry_notice} onChange={handleDataChange} id="reserve_expiry_notice"/><span className="smallFont">days (Setting not used if set to 0)</span>
                              <div className="row_1">
                              { <span style={{color:"red"}}>{notificationError[1]}</span>}
                                </div> 
                      </div>

                      <div className="notification_label"></div>

                    </div>
                    <div align="right" className="action_area_left" style={{marginRight:180}}>
                        <button className="button_style_Tools_Setting_Cancel">Cancel</button>
                        <button className={"button_style_Tools_Setting_Save"}
                        onClick={saveNotfication}>Save</button>
                  </div> 

                        
                         


            </div> 
               


       
      </Collapse>
    </>
  );
}

// export default reduxForm({
//   form: 'notification',
// })(Notification);
const mapStateToProps = (state)=>(
  {
    customerData:state.customerReducer
  }

)

const form = reduxForm({ form: 'Notification' });
export default connect(mapStateToProps, {handleChangeFilter,saveNoticationData,getNotificationData})(form(Notification));


