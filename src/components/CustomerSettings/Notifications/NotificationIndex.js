import React, { useState,useEffect } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Collapse, Label,Tooltip} from 'reactstrap';
import {connect} from "react-redux";
import "./main.css"
import ReactTooltip from 'react-tooltip';
import CustomerActionModal from '../../Modal/CustomerActionModal';
import {handleChangeFilter,saveNoticationData,getNotificationData} from "../../../actions/customerSettingAction";
import SuccessModal from '../../Modal/SuccessModal';
// import ActionModal from '../../Modal/ActionModal';
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
    const [isOpen1, setIsOpen1] = useState(false);
    const [successMessage,setSuccessMessage] = useState([])
    const toggle1  = ()=>setIsOpen1(!isOpen);
    const toggle = () => setIsOpen(!isOpen);
    const [notificationError,setNotificationError] = useState(["",""])
    const [checkedData,setCheckedData] = useState(false)
    const [tooltipOpen, setTooltipOpen] = useState(false);
    const [open,setOpen] = useState(false)
    const [message,setMessage] = useState("")
    const [type, setType] = useState("")

    const toggleTool = () => setTooltipOpen(!tooltipOpen);
    const [tooltipOpen1, setTooltipOpen1] = useState(false);

    const toggleTool1 = () => setTooltipOpen1(!tooltipOpen1);
  
    useEffect(() => {
      props.getNotificationData()
    },[isOpen]);

    const resetData = ()=>{
      props.getNotificationData()

    }
 const handleDataChange = (e)=>{
   setCheckedData(true)
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
  setIsOpen1(true)
   setSuccessMessage(["Notfication saved successfully"])
 
   let obj = {}
   obj.ready_to_late_notice = ready_to_late_notice
   obj.reserve_expiry_notice = reserve_expiry_notice
   obj.status =1
  //  alert("f")
   props.saveNoticationData(obj)
 }

 const cancel = ()=>{
  setOpen(false)
  // setId(0)
  setType("")
  setMessage("")
   
}
const confirm = ()=>{
   if(type==="save"){
    saveNotfication()
    

   }

  setOpen(false)
  // setId(0)
  setType("")
  setMessage("")
}
const confirmAction = (type)=>{
if(type=="save"){
    setType(type)
    setMessage("Are you sure you want to Save?")

}
setOpen(true)
// setId(id)
}

  const {ready_to_late_notice,reserve_expiry_notice} = props.customerData;
  console.log(ready_to_late_notice)
  return (
    <>
<CustomerActionModal cancel={cancel} confirm={confirm} open={open} message={message}/>
      <div color="primary" onClick={toggle} className="SubHeader">
      <SuccessModal status={isOpen1} message={successMessage} modalAction={toggle1}/>
      
      <Label className="subFont">Customer Notifications</Label>
      <span className="updownSymbolContainer"  style={{paddingTop:4}}> 
      {isOpen ?   <img src="assets/img/arrow-icon2.svg" alt=""/> :  <img src="assets/img/arrow-icon.svg" alt=""/> } 
        </span>
        
        </div>
      <Collapse isOpen={isOpen}>
  
         {/* <div className="docDetails" style={{marginTop:"-12px"}}> */}
         {/* <p className="sub_menu_nameD"> Customer Notifications</p> */}
                  {/* <Label className="secondHeader">
                  Customer Notification
                  </Label> */}
          {/* </div> */}
           
          <div className="containerBox">

                    <div className="row_1_Notification">
                    {/* <div>
      <p>Somewhere in here is a <span style={{textDecoration: "underline", color:"blue"}} href="#" id="TooltipExample">tooltip</span>.</p>
      <Tooltip    className="in" id="tooltip-top" placement="right" isOpen={tooltipOpen} target="TooltipExample" toggle={toggleTool} >
      <p>Set the number of days after the requested date for order
      in READY state waiting for pickup or shipment.</p>
      </Tooltip>
    </div> */}

                      <div className="notification_label">
                      <p style={{marginBottom:"2px",fontWeight:"bold"}}>READY to LATE Notice <i id="TooltipExample" style={{borderRadius:"50%",fontSize:"9px",border:"1px solid #5287F5",width:"4%",textAlign:"center",padding:"3.3px",color:"#5287F5"}} class="fa fa-info"></i>
       
                            <Tooltip    className="in" id="tooltip-top" placement="right" isOpen={tooltipOpen} target="TooltipExample" toggle={toggleTool} >
                                <p>Set the number of days after the requested date for order in READY state waiting for pickup or shipment.</p>
                            </Tooltip></p>
                            <input placeholder={"0"}  type="number" className="textRight_OrderSettings" value={ready_to_late_notice} onChange={handleDataChange} id="ready_to_late_notice"/><span className="smallFont">days (Setting not used if set to 0)</span>
                              <div className="row_1">
                              { <span style={{color:"red"}}>{notificationError[0]}</span>}
                                </div> 
    
                      </div>

                      <div className="notification_label">
                            <p style={{marginBottom:"2px",fontWeight:"bold"}}>Reserve Expiry Notice <i   style={{borderRadius:"50%",fontSize:"9px",border:"1px solid #5287F5",width:"4%",textAlign:"center",padding:"3.3px",color:"#5287F5",marginBottom:"-3px"}} class="fa fa-info" id="TooltipExample1"></i>
                            <Tooltip    className="in" id="tooltip-top1" placement="right" isOpen={tooltipOpen1} target="TooltipExample1" toggle={toggleTool1} >
                                <p>Set the number of days remaining on the order reservation date.</p>
                            </Tooltip> 
                            </p>
                            <input placeholder={"0"}  type="number" className="textRight_OrderSettings" value={reserve_expiry_notice} onChange={handleDataChange} id="reserve_expiry_notice"/><span className="smallFont">days remaining</span>
                              <div className="row_1">
                              { <span style={{color:"red"}}>{notificationError[1]}</span>}
                                </div> 
                      </div>

                      <div className="notification_label"></div>

                    </div>
                    <div align="right" className="action_area_left" style={{marginRight:180}}>
                        <button  class="btn btn-outline-secondary btn-md" style={{height:40,width:75,fontSize:14}} onClick={resetData} disabled={checkedData==true?false:true}>Reset</button>
                        <button className={"button_style_Tools_Setting_Save"}
                        onClick={()=>confirmAction("save")}  disabled={checkedData==true?false:true}>Save</button>
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


