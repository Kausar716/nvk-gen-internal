import React, { useEffect, useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import DatePicker from 'react-date-picker';
import {connect} from "react-redux";
import {deleteCustomerAddress,deleteCustomer,deleteCustomerContact,UpdateCustomerData,getAllCustomer,resetContact,getcustomerAddressByaddressId,resetAddressFileds,getDataByContactId,getcustomerAddress,updateContactData,getCustomerContacts,getAllTermsMethods,getAllStatusMethods,resetCustomerFilds,addCustomerData,handleExchangeData,getAllCustomerType,getCustomerById,setPageNumber,handleRadioFilter,handleSearchFilter,handleAplhabetFilter,typeOfActionShow} from "../../actions/customerSettingAction";
import { saveSupplierData } from '../../actions/supplierManagementAction';
import InfoModal from "../../components/Modal/InfoModal"
import SuccessModal from "../../components/Modal/SuccessModal"
import ContactsModal from "../../components/Modal/ContactsModal"
import InputMask from 'react-input-mask';
import AddressModal from "../../components/Modal/AddressModal"

function AddCustomer(props) {
    const [value, onChange] = useState(new Date());
    const [addCustomertoggle,setAddCustomertoggle] = useState(false)
    const [customerObject,setCustomerObject] = useState({})
    const [customer_name,setCustomer_name] = useState("")
    const [type,setType] = useState([])
    const [primaryContact,setPrimaryContact] = useState("")
    const [fax,setFax] = useState("")
    const [website_url,setWebsiteUrl] = useState("")
    const [notes,setNotes] = useState("")
    const [ alternativeId,setAlternativeId] =  useState("")
    const [customer_id,setCustomer_id] = useState("")
    const [errorObj,setErrorObject] = useState({customer_name:0,fax:0,taxExemptNumber:0})
    const [errorCount, setErrorCount] = useState(0)
    const [taxExemptNumber,setTaxExemptNumber] = useState("")
    const [taxExemp,setTaxExemp] = useState(false)
    const [dispatchType,setDispatchType] = useState(false)
    const [poRequired,setPoRequired] = useState(false)
    const [reStock,setReStock] = useState(false)
    const [isOpen1, setIsOpen1] = useState(false);
	const [message,setMessage] = useState([]);
    const [checkedData,setCheckedData] = useState(false)
    const[actionType,setactionType] = useState("add")
    const[actionTypeAddress,setactionTypeAddress] = useState("add")
	const toggle1 = () => setIsOpen1(!isOpen1);
    const [enableUrl,setEnableUrl] = useState(false)

    const [isOpen2, setIsOpen2] = useState(false);
	const [message2,setMessage2] = useState([]);
	const toggle2 = () => setIsOpen2(!isOpen2);

    const [isOpenContacs, setisOpenContacs] = useState(false);
	// const [message2,setMessage2] = useState([]);
	const toggleForContact = () => {
        setactionType("add")
        props.resetContact()
        setisOpenContacs(!isOpenContacs)
    }

    const [isOpenAddress, setisOpenAddress] = useState(false);
	// const [message2,setMessage2] = useState([]);
	const toggleForAddress = () => {
        setactionTypeAddress("add")
        setisOpenAddress(!isOpenAddress)
        // alert("hi")
    }
    const {deleteCustomer,customerDataById,customerTypeList,action,customerStatusList,customerTermList,customerContact,customerContactList,customerAddress,customerAddressList} = props.customerData
    console.log()
    useEffect (()=>{
        props.getAllCustomerType()
        props.getAllStatusMethods()
        props.getAllTermsMethods()
        props.getCustomerContacts(customerContact.customer_id)
        props.getcustomerAddress(customerAddress.customer_id)
    },[reStock])

    const validate = () =>{
    
    }
    const handleInput= (e)=>{
        console.log(e.target.value,e.target.id)
        setCheckedData(true)
        let indexValue = null
        if(e.target.id ==="type"){
            let type = customerDataById.type
            type.map((value,index)=>{
                if(value === e.target.value) indexValue = index
            })
            if(indexValue !== null) type.splice(indexValue,1)
            else type.push(e.target.value)

            props.handleExchangeData(type,e.target.id,"customerDataById")
        }else if(e.target.id ==="alert"){
            let alert = parseInt(customerDataById.alert)===1?0:1
            props.handleExchangeData(alert,e.target.id,"customerDataById")

        }else if(e.target.id ==="prospect"){
            let prospect = parseInt(customerDataById.prospect)==1?0:1
            props.handleExchangeData(prospect,e.target.id,"customerDataById")
        }
        else if(e.target.id ==="status"){
            let prospect = parseInt(customerDataById.status)==1?0:1
            props.handleExchangeData(prospect,e.target.id,"customerDataById")
        }
        else if(e.target.id =="delivery"){
            props.handleExchangeData("Delivery","dispatch_type","customerDataById")

        }
        else if(e.target.id =="pickup"){
            props.handleExchangeData("Pickup","dispatch_type","customerDataById")

        }else if(e.target.id =="tax_exempt" || e.target.id =="tax_exempt1")
        {
            let tax_exempt = customerDataById.tax_exempt ==0?1:0
            props.handleExchangeData(tax_exempt,"tax_exempt","customerDataById")
        }else if(e.target.id =="p_o_req" || e.target.id =="p_o_req1"){
            let tax_exempt = customerDataById.p_o_req ==0?1:0
            props.handleExchangeData(tax_exempt,"p_o_req","customerDataById")

        }else if(e.target.id =="restockNo1" || e.target.id =="restockNo"){
            let restock_fee = customerDataById.restock_fee ==0?1:0
            props.handleExchangeData(restock_fee,"restock_fee","customerDataById")

        }else if(e.target.id =="discount_by_line_item" || e.target.id =="discount_by_line_item1"){
            let discount_by_line_item = customerDataById.discount_by_line_item ==0?1:0
            props.handleExchangeData(discount_by_line_item,"discount_by_line_item","customerDataById")
        }else if(e.target.id=="website_url"){
            var patt = new RegExp(/^(https?|ftp):\/\/(\S+(:\S*)?@)?(([1-9]|[1-9]\d|1\d\d|2[0-1]\d|22[0-3])(\.([0-9]|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])){2}(\.([1-9]|[1-9]\d|1\d\d|2[0-4]\d|25[0-4]))|(([a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(\.([a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(\.([a-z\u00a1-\uffff]{2,})))(:\d{2,5})?(\/[^\s]*)?$/);
            var res = patt.test(e.target.value);
            // console.log(res)
            if(res === false){
                setEnableUrl(false)

            }else{
                setEnableUrl(true)
            }

        }
        // else if(e.target.id =="tax_exempt_no" || e.target.id =="tax_exempt_no")
        else{
            // alert("fee_percent")
            props.handleExchangeData(e.target.value,e.target.id,"customerDataById")

        }
       
    }
    const handleSubmit=()=>{
  
    }
    const handleTabClick=()=>{
        // alert("in")
    }
    const handleClose  = ()=>{
        props.resetCustomerFilds()
        props.getAllCustomer()
        props.typeOfActionShow("")
    }
    const validation  = ()=>{
        // alert(customerDataById.reason)

        let errosList = []
        if(customerDataById.name==="")
        errosList.push("Please Add Name")
        if(customerDataById.type.length ===0)
        errosList.push("Please Select Type")
        if(customerDataById.status==0 && (customerDataById.notes ===null || customerDataById.notes ==="")){
            errosList.push("Please add reason")
            return errosList

        }
        if(customerDataById.website_url){
            var patt = new RegExp(/^(https?|ftp):\/\/(\S+(:\S*)?@)?(([1-9]|[1-9]\d|1\d\d|2[0-1]\d|22[0-3])(\.([0-9]|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])){2}(\.([1-9]|[1-9]\d|1\d\d|2[0-4]\d|25[0-4]))|(([a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(\.([a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(\.([a-z\u00a1-\uffff]{2,})))(:\d{2,5})?(\/[^\s]*)?$/);
            var res = patt.test(customerDataById.website_url);
            // console.log(res)
            if(res === false){
                errosList.push("Website formate sould be https://www.example.com formate")
            return errosList
            }else{
                return errosList

            }
                // console.log(customerDataById.website_url.match(i))
        }
        else  return errosList
       
        // if(){

        // }
        
        
    }
    
  
    const saveCustomerData1 = (type)=>{
        // validation()
        // e.preventDefault()
        // return
        let errorCount = validation()
        console.log()
        if(errorCount.length>0){
            setIsOpen1(true)
            setMessage(errorCount)
            return


        }
        setCheckedData(false)
        // delete customerDataById.id
        // alert("hello")
        if(customerDataById.id== undefined){
            props.addCustomerData(customerDataById).then(data=>{
           
          
                if(type =="done"){
                    props.resetCustomerFilds()
                   
                    setMessage2(["Customer Saved successfully"])
                    setIsOpen2(true)
                    // props.resetCustomerFilds()
                    props.getAllCustomer().then(data=>{
                        
    
    
                        setTimeout(
                            function() {
                                props.typeOfActionShow("")
                            }
                            .bind(this),
                            1000
                        );
    
                    })
                   
                    // props.typeOfActionShow("")
                    // setTimeout(cancelData()(), 100000);
                    
    
                }else{
                    setIsOpen2(true)
                    setMessage2(["Customer Saved successfully"])
                    // props.resetCustomerFilds()
                    // props.typeOfActionShow("")
    
                }
              
    
                // else 
    
    
            })

        }else{
            props.UpdateCustomerData(customerDataById).then(data=>{
           
          
                if(type =="done"){
                    props.resetCustomerFilds()
                   
                    setMessage2(["Customer Data Updated Successfully"])
                    setIsOpen2(true)
                    props.resetCustomerFilds()
                    props.getAllCustomer().then(data=>{
                        
    
    
                        setTimeout(
                            function() {
                                props.typeOfActionShow("")
                            }
                            .bind(this),
                            1000
                        );
    
                    })
                   
                    // props.typeOfActionShow("")
                    // setTimeout(cancelData()(), 100000);
                    
    
                }else{
                    setIsOpen2(true)
                    setMessage2(["Customer Data Updated Successfully"])
                    // props.resetCustomerFilds()
                    // props.typeOfActionShow("")
    
                }
              
    
                // else 
    
    
            })
            
        }
   
    }
    const updateCustomerData = (e)=>{
        e.preventDefault()
        props.addCustomerData(customerDataById)
        
    }
    const cancelData= (type)=>{
        props.resetCustomerFilds()
        props.getAllCustomer()
        props.typeOfActionShow("")
      
    }
    const deleteCustomerContactData =(id)=>{
        props.deleteCustomerContact(id).then(data=>{
            props.getCustomerContacts()
        })

    }
    const deleteAddress =(id)=>{
        props.deleteCustomerAddress(id).then(data=>{
            props.getcustomerAddress()
        })

    }
    const editContact=(id)=>{
        setisOpenContacs(true)
        props.getDataByContactId(id)
        setactionType("edit")
    }

    const editAddress =(id)=>{
        setisOpenAddress(true)
        props.getcustomerAddressByaddressId(id)
        setactionTypeAddress("edit")
    }
    const addAdrress=()=>{
        props.resetAddressFileds()
        setisOpenAddress(true)

    }
    const deleteCustomerData =(id)=>{
        // alert(id)
       props.deleteCustomer(id).then(data=>{
        props.typeOfActionShow("")
        props.getAllCustomer()
       })

    }
    const openNewLink = ()=>{
        // console.log(customerDataById)
        // window.open(customerDataById.website_url,'_blank')
        // document.location = 'http://facebook.com/'
        // window.open(customerDataById.website_url, '_blank');
        let url = document.getElementById("website_url").value
        window.open(url, '_blank');
        // window.location.href = url
    }

    console.log(customerDataById)
    return (
        <div>
            	<InfoModal status={isOpen1} message={message} modalAction={toggle1}/>
                <SuccessModal status={isOpen2} message={message2} modalAction={toggle2}/>
                <ContactsModal status={isOpenContacs}  modalAction={toggleForContact} type={actionType}/>
                <AddressModal status={isOpenAddress} modalAction={toggleForAddress} type={actionTypeAddress}/>
            <div class="contentHeader bg-white d-md-flex justify-content-between align-items-center">
            <h1 class="page-header mb-0"><img src="assets/img/customer-ic-lg.svg" alt=""/>{addCustomertoggle?"Add":"Edit"} Customer <span class="text-green">{addCustomertoggle?"":customer_id}</span></h1>
				<div class="topbarCtrls mt-3 mt-md-0">
                    <a href="#" class="btn ml-2 mt-3 mt-md-0">
                        <span class="d-flex align-items-center text-left">
                            <img src="assets/img/print-ic-btn.svg" alt=""/>
                            <span class="ml-2"><b>Print</b></span>
                        </span>
                    </a>
				</div>
			</div>
            <div class="px-md-3 mt-3 pb-4">
                <div class="bg-white px-3 py-3 my-3 cardShadow">
                    <div class="row align-items-center">
                     <div class="col-md-12 col-lg-6 d-md-flex justify-content-between editCustSec">
                     {addCustomertoggle?"": <div>
                                <label>Complete Orders</label>
                                <h1>0</h1>
                                <div><a href="">View Orders</a></div>
                            </div>}
                            {addCustomertoggle?"":      <div>
                                <label>Active Orders</label>
                                <h1>0</h1>
                                <div><a href="">View Orders</a></div>
                            </div>}
                            {addCustomertoggle?"":    <div>
                                <label>Active Quotes    </label>
                                <h1>0</h1>
                                <div><a href="">View Orders</a></div>
                            </div>}
                            {addCustomertoggle?"":<div class="lastOdrDate">
                                <label>Last Order</label>
                                <h4>Not Available</h4>
                            </div>}
                        </div>
                        <div class="col-md-12 col-lg-6 mt-3 mt-lg-0 text-lg-right">
                            <div class="topbarCtrls mt-3 mt-md-0 d-flex flex-wrap justify-content-md-end">
                            {/* {addCustomertoggle?"":  <a href="#" class="btn active">
                                    <span class="d-flex align-items-center text-left">
                                        <img src="assets/img/pdf-ic.svg" alt=""/>
                                        <span class="ml-2"><b>Contact PDF</b></span>
                                    </span>
                                </a>} */}
                                <button   onClick={()=>checkedData==true?saveCustomerData1("save"):""}  className={"btn btn-primary btn-md ml-3"}>
                                    <span class="d-flex align-items-center text-left" onClick={handleSubmit}>
                                        {/* <img src="assets/img/save-ic.svg" alt=""/> */}
                                        <i class="fas fa-file-pdf" style={{fontSize:"20px"}}></i>
                                        <span class="ml-2"  style={{fontSize:"17px"}}>Contact PDF</span>
                                    </span>
                                </button>
                                {/* "btn btn-primary btn-lg ml-3":"btn btn-primary btn-lg ml-3" */}
                                <button   onClick={()=>checkedData==true?saveCustomerData1("save"):""}  className={checkedData==true? "btn btn-primary btn-md ml-3":"btn btn-secondary btn-md ml-3"} disabled={checkedData==true?false:true}>
                                    <span class="d-flex align-items-center text-left" onClick={handleSubmit}>
                                        {/* <img src="assets/img/save-ic.svg" alt=""/> */}
                                        <i className="fa fa-save" style={{fontSize:"20px"}}></i>
                                        <span class="ml-2"  style={{fontSize:"17px"}}>Save</span>
                                    </span>
                                </button>
                                <button   onClick={()=>checkedData==true?saveCustomerData1("done"):""}  className={checkedData==true? "btn btn-primary btn-md ml-3":"btn btn-secondary btn-md ml-3"} disabled={checkedData==true?false:true}>
                                    <span class="d-flex align-items-center text-left">
                                        {/* <img src="assets/img/saveDone-ic.svg" alt="" /> */}
                                        <i className="fa fa-save" style={{fontSize:"20px"}}></i>
                                        <span class="ml-2"  style={{fontSize:"17px"}}>Save &amp; Done</span>
                                    </span>
                                </button>
                                <a href="#" class=" ml-2 mt-3 mt-md-0">
                                    <img src="assets/img/close-ic.svg" alt="" onClick={handleClose}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-white px-3 py-3 my-3 cardShadow">
                    <div class="row align-items-center">
                        <div class="col-md-6">
                            <h2>Customer Details</h2>
                            <div class="d-flex align-items-center">
                                <div class=" d-flex align-items-center mr-4 my-md-2 mt-3 mt-md-0" >
                                    {/* <div class="switcher ml-2 pr-2" >
                                        <input type="checkbox" id="alert"  onChange={handleInput} name="switcher_checkbox_alert"  checked={parseInt(customerDataById.alert) ===1?"checked":""}  />
                                        <label  style={{cursor:"pointer"}} for="switcher_checkbox_alert"></label>
                                    </div>
                                    Alert */}
                                    <div class="switcher ml-2 pr-2">
                                                <input type="checkbox" id="alert"  onChange={handleInput}  name="switcher_checkbox_alert"  checked={parseInt(customerDataById.alert) ===1?"checked":""}/>
                                                <label for="alert"></label>
                                            </div>
                                            Alert
                                </div>
                             
                                {/* </div> */}
                                <div class=" d-flex align-items-center mr-4 my-md-2 mt-3 mt-md-0">
                                <div class="switcher ml-2 pr-2">
                                                <input type="checkbox" id="prospect"   onChange={handleInput} checked={parseInt(customerDataById.prospect) ===1?"checked":""}  />
                                                <label for="prospect"></label>
                                            </div>
                                         Prospect
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 text-md-right">
                            <div class="d-flex flex-wrap align-items-center justify-content-md-end">
                             {action=="edit"?<div class="mt-5 mt-md-0">
                                    <a  class="text-danger f-s-18 f-w-600" onClick={()=>deleteCustomerData(customerDataById.id)}><i class="fa fa-trash" style={{fontSize:30}}></i>  </a>
                                </div>:""}
                                <div class=" d-flex align-items-center mr-4 my-md-2 mt-3 mt-md-0">
                                                    <p style={{marginLeft:"14%",marginTop:"16px"}}>Active</p>
                                    <div class="switcher ml-2 pr-2">
                                                <input type="checkbox" id="status"  onChange={handleInput}  name="status"  checked={parseInt(customerDataById.status) ===1?"checked":""}/>
                                                <label for="status"></label>
                                            </div>
                                   
                                </div>
                                <div class=" d-flex align-items-center mr-4 my-md-2 mt-3 mt-md-0">
                                    <span class="mr-2 f-s-18"><strong>Level</strong></span>
                                    <select class="form-control" onChange={handleInput} id="level">
                                        <option value={0}>Normal</option>
                                            {customerStatusList.active.map(type=>{
                                                return(<option value={parseInt(type.id)} selected={parseInt(type.id) == parseInt(customerDataById.level)?"selected":""}>{type.status_level}</option>)
                                            })}
                                        </select>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            
                <Tabs>
                    <TabList>
                        <Tab>Customer Information</Tab>
                        <Tab>Order Settings</Tab>
                        <Tab>Contacts</Tab>
                        <Tab>Addresses</Tab>
                        {/* <Tab>Print Catalog</Tab> */}
                    </TabList>
                    <TabPanel>
                        <div class="bg-white cardShadow px-3 py-3 mt-3">
                            <form onSubmit={action ==="add"?saveCustomerData1:updateCustomerData}>
                                <h2>Customer Information</h2>
                                <hr/>
                                <div class="row mt-3" style={{display:customerDataById.alert ==1?"block":"none"}}>
                                    <div  class="col-md-8 col-lg-8">
                                    <label>Alert Details<span class="text-danger">*</span></label>
                                        <input type="text" className="form-control" placeholder="ADD DETAILS HERE" id="alert_data" onChange={handleInput}/>
                                    </div>
                                </div>
                
                    
                                <div class="row mt-3">
                                  <div class="col-md-8 col-lg-4">
                                        <label>Customer Name<span class="text-danger">*</span></label>
                                        <input type="text" class="form-control" id="name" value={customerDataById.name} onChange={handleInput} placeholder="Customer Name"/>
                                        {/* {errorObj.customer_name!==0?<span style={{fontSize:"small",color:"red"}}>Enter Valid Name</span>:""} */}
                                    </div>
                                    {/* <div class="col-md-2 col-lg-2 mt-2 mt-md-0">
                                        <label>Type<span class="text-danger">*</span></label>
                                        <select class="form-control" onChange={handleInput} id="type">
                                            {customerTypeList.active.map(type=>{
                                                return(<option value={type.id}>{type.customer_type}</option>)
                                            })}
                                        </select>
                                    </div> */}
                                    <div class="col-md-8 col-lg-8 mt-2 mt-md-0">
                                    <label>Type<span class="text-danger">*</span></label>
                                        <div style={{border:"1px solid lightgray",height:"40px",borderRadius:3,paddingLeft:10,paddingTop:7}}>
                                        {customerTypeList.active.map(type=>{
                                          
                                                return (<div class="form-check form-check-inline" style={{paddingRight:10}}>
                                            <input style={{cursor:"pointer"}} class="form-check-input" type="checkbox" name="active" id="type"  value={type.id} checked={customerDataById.type.filter(id=>parseInt(id) ===parseInt(type.id)).length>0} onChange={handleInput}/>
                                            <label class="form-check-label" for="activePlants">{type.customer_type}  </label>
                                        </div>)
                                                
                                         
                                    
                                        })}


                                        </div>

                                    
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-md-8 col-lg-8">
                                        <label>Primary Contact</label>
                                       <div style={{height:"auto",borderRadius:3,marginTop:1}}>{
                                       
                                        customerContactList.active.map(contactData=>{
                                            
                                            if(parseInt(contactData.primary_contact) ==1){
                                                return(
                                                    <div>
                                                    <div >
                                                    {/* <p class="mb-0 f-w-600">{contactData.first_name+" "+contactData.last_name}</p> */}
                                            <label class="text-muted f-w-400">{contactData.email}</label>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label class="text-muted f-w-400 mb-0"><strong>Phone 1:</strong> {contactData.phone1}</label>
                                                    <label class="text-muted f-w-400 mb-0"><strong>Phone 2:</strong> {contactData.phone2}</label>
                                                </div>
                                                <div class="col-md-6">
                                                    <label class="text-muted f-w-400 mb-0"><strong>Xt: </strong> {contactData.phone1_ext}</label>
                                                </div>
                                            </div>
                                            {/* <div>
                                                <div class="custom-control custom-checkbox mt-2">
                                                    <input type="checkbox" class="custom-control-input" id="customCheck1" checked={contactData.primary_contact==1?true:false} disabled={true}/>
                                                    <label class="custom-control-label f-w-400" for="customCheck1">This person is the primary contact</label>
                                                </div>
                                                <div class="custom-control custom-checkbox mt-2">
                                                    <input type="checkbox" class="custom-control-input" id="customCheck2"  checked={contactData.all_communication==1?true:false} disabled={true}/>
                                                    <label class="custom-control-label f-w-400" for="customCheck2">This person receives all communication</label>
                                                </div>
                                            </div> */}
                                            {/* <div class="row mt-3">
                                                <div class="col-md-6">
                                                    <a href="#" class="">
                                                        <img src="assets/img/moreDetails-ic.svg" alt=""/>
                                                    </a>
                                                    <a  class=" ml-2" onClick={()=>editContact(contactData.id)}>
                                                        <img src="assets/img/edit.svg" alt="" />
                                                    </a>
                                                </div>
                                            
                                            </div> */}
                                                        </div>
                                                        </div>
                                                )
                                                
                                            }
                                        })
                                           
                                           }</div>
                                    </div>
                                    <div class="col-md-4 col-lg-4 mt-2 mt-md-0">
                                        <label>Fax</label>
                                        <InputMask className={"form-control"} mask="(999) 999-9999" maskChar={""} id={"fax"} value={customerDataById.fax} onChange={handleInput} placeholder="(xxx) xxx-xxxx"/>
                                        {/* <input type="number" id="fax" class="form-control" name="fax" value={customerDataById.fax} onChange={handleInput} /> */}
                                        {errorObj.fax!==0?<span style={{fontSize:"small",color:"red"}}>Entered Number is invalid</span>:""}
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-md-8 col-lg-8">
                                        <label>Website</label>
                                        <div class="d-flex">
                                            <input type="url" class="form-control" placeholder="https://www.Example.com" name="website_url" id="website_url" value={customerDataById.website_url}  onChange={handleInput} pattern="[Hh][Tt][Tt][Pp][Ss]?:\/\/(?:(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)(?:\.(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)*(?:\.(?:[a-zA-Z\u00a1-\uffff]{2,}))(?::\d{2,5})?(?:\/[^\s]*)?"/>
                                            <button class="btn btn-outline-secondary btn-lg ml-2" disabled={enableUrl==false?true:false} onClick={enableUrl==false?"":openNewLink}>
                                            {/* <a  href={enableUrl==false?"#":customerDataById.website_url} target={enableUrl==false?"_self":"_blank"} >Visit</a> */}
                                            Visit
                                            </button>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-lg-4 mt-2 mt-md-0">
                                        <label>Alternative ID <small>(Up tp 5 Char..)</small></label>
                                        <input type="text" class="form-control" name="alternativeId" id="alternative_id" value={customerDataById.alternative_id} onChange={handleInput} maxLength={5} placeholder="Alternate ID"/>
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-md-12 col-lg-12 mt-2 mt-md-0">
                                        <label>Customer Notes <small>(Internal Only)</small></label>
                                        <textarea rows="" cols=""  class="form-control" name="notes" value={customerDataById.notes} onChange={handleInput} id="notes" placeholder="Add Notes..."/>
                                    </div>
                                </div>

                                {/* <div class="row mt-3">
                                    <div class="col-md-12 text-md-right">
                                        <a >
                                        <button type="button" class="btn btn-outline-secondary btn-lg" onClick={cancelData}
                                       
                                        >Cancel</button>
                                        </a>
                                        <button type="submit" class="btn btn-primary btn-lg ml-3"  >{action=="add"?"Save":"Update"}</button>
                                    </div>
                                </div> */}

                            </form>
                          
                        </div>
                    </TabPanel>
                    <TabPanel >
                    {/* <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="inactive" id="inactive" value="" checked={this.state.customerListStatus === "inactive"?true:false} onClick={this.handleRadioClick}/>
                                        <label class="form-check-label" for="archivedPlants">Inactive Only</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="All" id="all" value="" checked={this.state.customerListStatus === "All"?true:false} onClick={this.handleRadioClick}/>
                                        <label class="form-check-label" for="allPlants">All</label>
                                    </div> */}
                        <div class="bg-white cardShadow px-3 py-3 mt-3">
                            <form>
                                <h2>Order Settings</h2>
                                <hr/>
                                <div class="row mt-3">
                                    <div class="col-md-8 col-lg-8">
                                        <label>Dispatch Type</label>
                                        <div class="d-flex">
                                            <div class="custom-control custom-radio">
                                                <input type="radio" id="delivery" name="delivery" value={"Delivery"} checked = {customerDataById.dispatch_type =="Delivery"?true:false} class="custom-control-input" onClick={handleInput} />
                                               
                                                <label class="custom-control-label" for="delivery">Discount</label>
                                            </div>
                                            <div class="custom-control custom-radio ml-4">
                                                <input type="radio" id="pickup" name="pickup" value={"Pickup"}  checked = {customerDataById.dispatch_type =="Pickup"?true:false} onClick={handleInput} class="custom-control-input" />
                                                <label class="custom-control-label" for="pickup">Pick up</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-md-3 col-lg-2">
                                        <label>Tax Exempt</label>
                                        <div class="d-flex">
                                            <div class="custom-control custom-radio">
                                                <input type="radio" id="tax_exempt1" name="tax_exempt1" value={0} checked = {customerDataById.tax_exempt ==0?true:false} class="custom-control-input" onClick={handleInput} />
                                               
                                                <label class="custom-control-label" for="tax_exempt1">No</label>
                                            </div>
                                            <div class="custom-control custom-radio ml-4">
                                                <input type="radio" id="tax_exempt" name="tax_exempt" value={1}  checked = {customerDataById.tax_exempt ==1?true:false} onClick={handleInput} class="custom-control-input" />
                                                <label class="custom-control-label" for="tax_exempt">Yes</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-lg-2 mt-3 mt-md-0">
                                        <div class="d-flex">
                                            <div>
                                                <label>Tax Exempt Number</label>
                                                <input type="number" class="form-control" name={"taxExemptNumber"}  style={{textAlign:"right"}} value={customerDataById.tax_exempt_no} id="tax_exempt_no" onChange={handleInput} disabled={customerDataById.tax_exempt==1?false:true} placeholder="0.00"/>
                                                {/* {errorObj.taxExemptNumber!==0?<span style={{fontSize:"small",color:"red"}}>Enter Valid Name</span>:""} */}

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-md-3 col-lg-2">
                                        <label>P.O. Required</label>
                                        <div class="d-flex">
                                            <div class="custom-control custom-radio">
                                                <input type="radio" id="p_o_req" name="p_o_req" class="custom-control-input" value={0} checked = {customerDataById.p_o_req ==0?true:false} onClick={handleInput} />
                                                <label class="custom-control-label" for="p_o_req">No</label>
                                            </div>
                                            <div class="custom-control custom-radio ml-4">
                                                <input type="radio" id="p_o_req1" name="p_o_req1" class="custom-control-input" value={1} checked = {customerDataById.p_o_req ==1?true:false} onClick={handleInput} />
                                                <label class="custom-control-label" for="p_o_req1">Yes</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-9 col-lg-10 mt-3 mt-md-0">
                                        <div class="row">
                                            <div class="col-md-4">
                                                <label>Units</label>
                                                <select class="form-control" disabled={customerDataById.p_o_req ==1?false:true} onChange={handleInput} id="unit_of_measurement">
                                                    <option selected={customerDataById.unit_of_measurement =="Metric"?"selected":""} value="Metric">Metric</option>
                                                    <option selected={customerDataById.unit_of_measurement =="Imperial"?"selected":""} value="Imperial">Imperial</option>
        
                                                </select>
                                            </div>
                                       
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-3">
                                <div class="col-md-4 mt-3 mt-md-0">
                                                <label>Payment Terms</label>
                                                <select class="form-control" onChange={handleInput} id="payment_terms">
                                                    <option value={0}>None</option>
                                                {/* {customerTermList.active.map()}
                                                    {/* <option>Imperial</option>
                                                    <option>Option 1</option>
                                                    <option>Option 2</option> */}
                                                    {/* getAllTermsMethods */}
                                                    {customerTermList.active.map(type=>{
                                          
                                          return ( <option value={type.id} selected={parseInt(type.id) === parseInt(customerDataById.payment_terms)}>{type.term}</option>)
                                          
                                   
                              
                                  })}
                                                </select>
                                            </div>
                                            <div class="col-md-4 mt-3 mt-md-0">
                                                <label>Currency</label>
                                                <select class="form-control" onChange={handleInput} id="currency">
                                                    <option value={"Canadian Dollar"} selected={customerDataById.currency=="Canadian Dollar"?"selected":""}>Canadian Dollar</option>
                                                    <option  value={"U.S. Dollar"} selected={customerDataById.currency=="U.S. Dollar"?"selected":""}>U.S. Dollar</option>
                                                   
                                                </select>
                                            </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-md-10 col-lg-10">
                                        <div class="row">
                                           
                                            <div class="col-md-3 mt-3 mt-md-0" style={{paddingTop:8}}>
                                          <label>Discount By Line Item</label>
                                               
                                                <div class="d-flex">
                                            <div class="custom-control custom-radio">
                                                <input type="radio" id="discount_by_line_item" name="discount_by_line_item" class="custom-control-input" value={0} checked = {customerDataById.discount_by_line_item ==0?true:false} onClick={handleInput} />
                                                <label class="custom-control-label" for="discount_by_line_item">No</label>
                                            </div>
                                            <div class="custom-control custom-radio ml-4">
                                                <input type="radio" id="discount_by_line_item1" name="discount_by_line_item1" class="custom-control-input" value={1} checked = {customerDataById.discount_by_line_item ==1?true:false} onClick={handleInput} />
                                                <label class="custom-control-label" for="discount_by_line_item1">Yes</label>
                                            </div>
                                        </div>
                                            </div>
                                            <div class="col-md-4 mt-3 mt-md-0"  style={{marginLeft:"-5%"}}>
                                                <label>Discount</label>
                                                <input type="number" class="form-control" style={{textAlign:"right"}} value={customerDataById.discount} onChange={handleInput} id="discount" step="0.001" disabled={customerDataById.discount_by_line_item==1?false:true}  placeholder={"0.00"}/>
                                            </div>
                                       
                                      
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-3">
                                <div class="col-md-10 col-lg-10">
                                        <div class="row">
                             
                                            <div class="col-md-3 mt-3 mt-md-0"  style={{paddingTop:8}}>
                                                <label>Restock Fees</label>
                                                <div class="d-flex">
                                                    <div class="custom-control custom-radio">
                                                        <input type="radio" id="restockNo" name="restockNo" class="custom-control-input" onChange={handleInput} checked={customerDataById.restock_fee ==0?true:false}/>
                                                        <label class="custom-control-label" for="restockNo">No</label>
                                                    </div>
                                                    <div class="custom-control custom-radio ml-4">
                                                        <input type="radio" id="restockNo1" name="restockNo1" class="custom-control-input" onChange={handleInput} checked={customerDataById.restock_fee ==1?true:false}/>
                                                        <label class="custom-control-label" for="restockNo1">Yes</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-4 mt-3 mt-md-0"  style={{marginLeft:"-5%"}}>
                                {/* <div class="col-md-4 mt-3 mt-md-0"> */}
                                                <label>Fee%</label>
                                                <input type="number" class="form-control" value={customerDataById.fee_percent} id="fee_percent" step="0.01" onChange={handleInput} disabled={customerDataById.restock_fee==1?false:true} placeholder="0.00"/>
                                            </div>
                                            </div>
                                            </div>
                                </div>
                            </form>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div class="bg-white cardShadow px-3 py-3 mt-3">
                            <form>
                                <h2>Contacts</h2>
                                <hr/>
                                <div class="row mt-3">
                                    {/* <div class="col-md-6 col-lg-4"> */}
                                        {/* <div class="contactCard"> */}
                                            {customerContactList.active.map(contactData=>{
                                                return(
                                                    <div class="col-md-6 col-lg-4">
                                                    <div class="contactCard">
                                                    <p class="mb-0 f-w-600">{contactData.first_name+" "+contactData.last_name}</p>
                                            <label class="text-muted f-w-400">{contactData.email}</label>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label class="text-muted f-w-400 mb-0"><strong>Phone 1:</strong> {contactData.phone1}</label>
                                                    <label class="text-muted f-w-400 mb-0"><strong>Phone 2:</strong> {contactData.phone2}</label>
                                                </div>
                                                <div class="col-md-6">
                                                    <label class="text-muted f-w-400 mb-0"><strong>Xt: </strong> {contactData.phone1_ext}</label>
                                                </div>
                                            </div>
                                            <div>
                                                <div class="custom-control custom-checkbox mt-2">
                                                    <input type="checkbox" class="custom-control-input" id="customCheck1" checked={contactData.primary_contact==1?true:false} disabled={true}/>
                                                    <label class="custom-control-label f-w-400" for="customCheck1">This person is the primary contact</label>
                                                </div>
                                                <div class="custom-control custom-checkbox mt-2">
                                                    <input type="checkbox" class="custom-control-input" id="customCheck2"  checked={contactData.all_communication==1?true:false} disabled={true}/>
                                                    <label class="custom-control-label f-w-400" for="customCheck2">This person receives all communication</label>
                                                </div>
                                            </div>
                                            <div class="row mt-3">
                                                <div class="col-md-6">
                                                    <a href="#" class="">
                                                        <img src="assets/img/moreDetails-ic.svg" alt=""/>
                                                    </a>
                                                    <a  class=" ml-2" onClick={()=>editContact(contactData.id)}>
                                                        <img src="assets/img/edit.svg" alt="" />
                                                    </a>
                                                </div>
                                                <div class="col-md-6 text-right">
                                                    <a href="#" class=" ml-2">
                                                        <img src="assets/img/delete.svg" alt="" onClick={()=>deleteCustomerContactData(contactData.id)}/>
                                                    </a>
                                                </div>
                                            </div>
                                                        </div>
                                                        </div>
                                                )
                                            })
                                          
                                       }
                                    {/* </div> */}
                                   
                                {/* </div> */}
                                </div>
                                <div class="row mt-3">
                                    <div class="col-md-12 text-right">
                                        <span>Minimum 1 Contact required</span>
                                        <button type="button" class="btn btn-primary btn-lg ml-3" onClick={toggleForContact} disabled={customerDataById.id === undefined?true:false}>Add</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div class="bg-white cardShadow px-3 py-3 mt-3">
                            <form>
                                <h2>Addresses</h2>
                                <hr/>
                                <div class="row mt-3">
                                    {customerAddressList.active.map(data=>{
                                        return(<div class="col-md-6 col-lg-4">
                                        <div class="contactCard">
                                            <p class="mb-0 f-s-16 f-w-600">{data.address1}<br/>
                                               </p>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="custom-control custom-checkbox mt-2">
                                                        <input type="checkbox" class="custom-control-input" id="customCheck1" checked={parseInt(data.billing_address)==1?true:false} disabled={true}/>
                                                        <label class="custom-control-label f-w-400" for="customCheck1">Billing Address</label>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="custom-control custom-checkbox mt-2">
                                                        <input type="checkbox" class="custom-control-input" id="customCheck2" checked={parseInt(data.delivery_address)==1?true:false} disabled={true}/>
                                                        <label class="custom-control-label f-w-400" for="customCheck2">Delivery Address</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row mt-3">
                                                <div class="col-md-12">
                                                    <a href="#" class="">
                                                        <img src="assets/img/location-pin.svg" alt=""/> Show on Google Maps
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="row mt-3">
                                                <div class="col-md-6">
                                                    <a href="#" class="">
                                                        <img src="assets/img/moreDetails-ic.svg" alt=""/>
                                                    </a>
                                                    <a href="#" class=" ml-2">
                                                        <img src="assets/img/edit.svg" alt="" onClick={()=>{editAddress(data.id)}}/>
                                                    </a>
                                                </div>
                                                <div class="col-md-6 text-right">
                                                    <a href="#" class=" ml-2">
                                                        <img src="assets/img/delete.svg" alt="" onClick={()=>{deleteAddress(data.id)}}/>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>)
                                    })}
                                  </div>
                                <div class="row mt-3">
                                    <div class="col-md-12 text-right">
                                        <span>Minimum 1 Contact required</span>
                                        <button type="button" class="btn btn-primary btn-lg ml-3" onClick={addAdrress} disabled={customerDataById.id === undefined?true:false}>Add</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div class="bg-white cardShadow px-3 py-3 mt-3">
                            <form>
                                <h2>Print Catalog</h2>
                                <hr/>
                                <div class="row mt-3">
                                    <div class="col-md-4">
                                        <label>Requires Print Catalog</label>
                                        <input type="text" class="form-control" value="Yes" />
                                    </div>
                                    <div class="col-md-4 mt-3 mt-md-0">
                                        <label>Quantity</label>
                                        <select class="form-control">
                                            <option>5</option>
                                            <option>Option 1</option>
                                            <option>Option 2</option>
                                        </select>
                                    </div>
                                </div>
                                
                            </form>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    )
}

const mapStateToProps = (state)=>(
    {
        customerData:state.customerReducer
    }
)
export default connect(mapStateToProps,{deleteCustomer,deleteCustomerContact,deleteCustomerAddress,
    typeOfActionShow, getAllCustomerType,UpdateCustomerData,resetContact,
    handleExchangeData,addCustomerData,getcustomerAddress,resetAddressFileds,getcustomerAddressByaddressId,getDataByContactId,resetCustomerFilds,getAllCustomer,getAllStatusMethods,getAllTermsMethods,getCustomerContacts,updateContactData
     





})(AddCustomer)
