import React, { useState ,useEffect} from 'react';
import { Field, reduxForm } from 'redux-form';
import { Collapse,   Row, Col, Label} from 'reactstrap';
import {connect} from "react-redux";
import CustomerActionModal from '../../Modal/CustomerActionModal';
import {handleChangeFilter,getPrintData,saveNoticationData,savecustomPrintData,handleExchangeData} from "../../../actions/customerSettingAction";
//import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import SuccessModal from '../../Modal/SuccessModal';
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
  const [checkedData,setCheckedData] = useState(false)
  const [isOpen1, setIsOpen1] = useState(false);
  const [successMessage,setSuccessMessage] = useState([])
  const [data,setData] = useState("")
  const toggle1  = ()=>setIsOpen1(!isOpen);
  const [open,setOpen] = useState(false)
  const [message,setMessage] = useState("")
  const [type, setType] = useState("")
  const handleInputData =(e)=>{
    setCheckedData(true)
    let intValue = e.target.value
    // console.log(e.target.value,e.target.id)
    if(e.target.value !=="")
    props.handleExchangeData(intValue,e.target.id,"customerTag")
    else props.handleExchangeData(e.target.value,e.target.id,"customerTag")
    // props.handleExchangeData(e.target.value,"base_price","customerTag")

  }
  useEffect(()=>{
    props.getPrintData()
  },[data])
const resetData = ()=> {
  setCheckedData(false)
  props.getPrintData()
}
const cancel = ()=>{
  setOpen(false)
  // setId(0)
  setType("")
  setMessage("")
   
}
const confirm = ()=>{
   if(type==="save"){
    saveExchangeData()
    

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
  const saveExchangeData = ()=>{
    setCheckedData(false)
    setIsOpen1(true)
    setSuccessMessage(["Customer Print Rates Saved successfully"])
    let obj={}
    obj.base_price = customerTag.base_price
    obj.custom_logo = customerTag.custom_logo
    obj.custom_pricing = customerTag.custom_pricing
    obj.custom_application = customerTag.custom_application
    obj.status = 1
    props.savecustomPrintData(obj)
  }
  const dataTochange =(e)=>{
    setCheckedData(true)
    // let intValue = e.target.value
    if(e.target.value!==""){
      if(Number.isInteger(parseFloat(e.target.value))) {
        let intValue = e.target.value*1.000
        // alert(e.target.value)
      props.handleExchangeData(intValue.toFixed(3),e.target.id,"customerTag")
      }
    
      else{
        // alert()
        let splitValue = e.target.value.split(".")
       if(splitValue[1].length<3){
        let intValue = e.target.value*1.0000
        props.handleExchangeData(intValue.toFixed(3),e.target.id,"customerTag")
       }else{
        props.handleExchangeData(e.target.value,e.target.id,"customerTag")

       }

       
      }
    }
      return
    }
  
  

  const { handleSubmit, pristine, reset, submitting,customerTag } = props.customerData;
  return (
    <>
         <CustomerActionModal cancel={cancel} confirm={confirm} open={open} message={message}/>
      <div color="primary" onClick={toggle}  className="SubHeader">
      <SuccessModal status={isOpen1} message={successMessage} modalAction={toggle1}/>
      
      <Label className="subFont">Customer Print & Tag Rates</Label>
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
                            <input type="number" className="textRight"  placeholder={"0.000"}  step=".001" style={{width:"115%"}} id="base_price" value={props.customerData.customerTag.base_price}  onChange={handleInputData} onBlur={dataTochange}/>
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
                            <input type="number" className="textRight" style={{textAlign:"left"}} placeholder={"0.000"}  step=".001" style={{width:"115%"}} id="custom_logo" value={props.customerData.customerTag.custom_logo}  onChange={handleInputData} onBlur={dataTochange}/>
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

                            <input type="number" className="textRight" placeholder={"0.000"} style={{textAlign:"left"}} step=".001" style={{width:"115%"}} id="custom_pricing" value={props.customerData.customerTag.custom_pricing}  onChange={handleInputData} onBlur={dataTochange}/>
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

                           
                            <input type="number" className="textRight" placeholder={"0.000"}  style={{textAlign:"left"}} step=".001" style={{width:"115%"}} id="custom_application" value={props.customerData.customerTag.custom_application}  onChange={handleInputData} onBlur={dataTochange}/>
                            </Col>
                            <Col sm="0">
                            <Label className="moveLittleInCPR">per tag/label </Label>
                            </Col>
                        </Row>
              </Col>
              <Col xs="12">
              <div align="right" className="action_area_left">
                              <button  class="btn btn-outline-secondary btn-md" style={{height:40,width:75,fontSize:14}}  disabled={checkedData==true?false:true} onClick={resetData}>Reset</button>
                              <button className="button_style_Tools_Setting_Save" disabled={checkedData==true?false:true} onClick={()=>confirmAction("save")}>Save</button>
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
export default connect(mapStateToProps, {handleChangeFilter,getPrintData,saveNoticationData,savecustomPrintData,handleExchangeData})(form(CustomerPrintRates));