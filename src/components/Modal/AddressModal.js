import React from 'react';
import {connect} from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {modalAction} from "../../actions/productAction";
import { countryDetails } from '../Help/countryList';
import {addCustomerContact,handleExchangeData,getcustomerAddress,addcustomerAddress,updateContactData,getCustomerContacts,updatecustomerAddress} from "../../actions/customerSettingAction";

 const AddressModal = (props) => {
     const {status,type} =props
   const {customerAddress,customerDataById} = props.customerData
  
             
   let allCountry = Object.keys(countryDetails);
        
   let allStates ;
   // let countZipRegix
//    if(supplierData.supplierLocation){
     
       if(customerAddress.country && customerAddress.country !== "Select Country"){
        if(countryDetails[customerAddress.country])
           allStates = countryDetails[customerAddress.country][0];
        //    this.countZipRegix=countryDetails[customerAddress.country][1][0]
        //    console.log(this.countZipRegix)
           // console.log(this.state.clientData.country)
       }
//    }
   const handleInput= (e)=>{
       if(e.target.id =="billing_address"){
           let primary = parseInt(customerAddress.primary_contact) ==1?0:1
           props.handleExchangeData(primary,e.target.id,"customerAddress")
       }else if(e.target.id =="delivery_address"){
        let all = parseInt(customerAddress.delivery_address) ==1?0:1
        props.handleExchangeData(all,e.target.id,"customerAddress")

       }else{
        props.handleExchangeData(e.target.value,e.target.id,"customerAddress")
       } 
    }
    const saveData =(e)=>{
        e.preventDefault();
        // alert("saving")
        if(type=="add"){
            props.addcustomerAddress(customerAddress).then(data=>{
                props.modalAction()
                // alert(customerDataById.customer_id)
                props.getcustomerAddress(customerDataById.id)
                // props.getCustomerContacts(customerDataById.customer_id)
                
            })

        }else{
            props.updatecustomerAddress(customerAddress).then(data=>{
                props.modalAction()
                console.log(customerDataById)
                props.getcustomerAddress(customerDataById.id)
                
            })

        }
     
      

    }

  return (
  
    <div>
      {/* <Button color="danger" onClick={toggle}>{buttonLabel}</Button> */}
      <Modal isOpen={status} size="lg">
        <ModalHeader><p style={{textAlign:"center",fontSize:25}}>{type==="add"?"Add":"Edit"} Contacts</p> </ModalHeader>
        <form onSubmit={saveData}>
        <ModalBody >
          
        <div class="row mt-3">
            <div class="col-md-3 col-lg-3">
                <label>City<span class="text-danger">*</span></label>
                <input type="text" class="form-control" id="city" value={customerAddress.city} onChange={handleInput}/>
                {/* {errorObj.customer_name!==0?<span style={{fontSize:"small",color:"red"}}>Enter Valid Name</span>:""} */}
            </div>
            <div class="col-md-3 col-lg-3">
                <label>Country<span class="text-danger">*</span></label>
                <select className="form-control"  id="country"  value={customerAddress.country}   placeholder="country" onChange={handleInput}>
                    <option>{customerAddress.country}</option>
                    {allCountry.map((country, i)=>{
                        return <option id={allCountry[i]}>{allCountry[i]}</option>
                    })}
                    {/* <option value="Canada" selected={supplierData.supplierLocation.country =="Canada"?"selected":""}>Canada</option>
                    <option value="India" selected={supplierData.supplierLocation.country =="India"?"selected":""}>India</option>
                    <option value="Africa" selected={supplierData.supplierLocation.country =="Africa"?"selected":""}>Africa</option> */}
                </select>
                {/* {errorObj.customer_name!==0?<span style={{fontSize:"small",color:"red"}}>Enter Valid Name</span>:""} */}
            </div>
            <div class="col-md-3 col-lg-3">
                <label>State<span class="text-danger">*</span></label>
                <select className="form-control"  id="state"  value={customerAddress.state}  onChange={handleInput}>
                <option>{customerAddress.state}</option>
                {allStates && allStates.map((c, i)=>{
                        return <option id={allStates[i]}>{allStates[i]}</option>
                })}
                    {/* <option value="Ontario" selected={supplierData.supplierLocation.state =="Ontario"?"selected":""}>Ontario</option>
                    <option value="Alberta" selected={supplierData.supplierLocation.state =="Alberta"?"selected":""}>Alberta</option>
                    <option value="Quebec" selected={supplierData.supplierLocation.state =="Quebec"?"selected":""}>Quebec</option> */}
                </select>
                {/* {errorObj.customer_name!==0?<span style={{fontSize:"small",color:"red"}}>Enter Valid Name</span>:""} */}
            </div>
            <div class="col-md-3 col-lg-3">
                <label>Zip<span class="text-danger">*</span></label>
                <input type="text" class="form-control" id="zip" value={""}  value={customerAddress.zip}  onChange={handleInput}/>
                {/* {errorObj.customer_name!==0?<span style={{fontSize:"small",color:"red"}}>Enter Valid Name</span>:""} */}
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-md-6 col-lg-6">
                <label>Address 1<span class="text-danger">*</span></label>
                <textarea  class="form-control" id="address1" value={""} value={customerAddress.address1}  onChange={handleInput}></textarea>
                {/* {errorObj.customer_name!==0?<span style={{fontSize:"small",color:"red"}}>Enter Valid Name</span>:""} */}
            </div>
            <div class="col-md-6 col-lg-6">
                <label>Address 2<span class="text-danger">*</span></label>
                <textarea  class="form-control" id="address2" value={""} value={customerAddress.address2}  onChange={handleInput}></textarea>
                {/* {errorObj.customer_name!==0?<span style={{fontSize:"small",color:"red"}}>Enter Valid Name</span>:""} */}
            </div>
        </div>
   
        <div class="row mt-3">
            <div class="col-md-6 col-lg-6">
                <label>Lat<span class="text-danger">*</span></label>
                <input type="number" class="form-control" id="lat" value={""} value={customerAddress.lat}  onChange={handleInput}/>
                {/* {errorObj.customer_name!==0?<span style={{fontSize:"small",color:"red"}}>Enter Valid Name</span>:""} */}
            </div>
            <div class="col-md-6 col-lg-6">
                <label>Lang<span class="text-danger">*</span></label>
                <input type="number" class="form-control" id="long" value={""}  value={customerAddress.long}  onChange={handleInput}/>
                {/* {errorObj.customer_name!==0?<span style={{fontSize:"small",color:"red"}}>Enter Valid Name</span>:""} */}
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-md-12 col-lg-12">
                <label>Notes <span class="text-danger">*</span></label>
                <textarea  class="form-control" id="notes" value={""} value={customerAddress.notes}  onChange={handleInput}></textarea>
                {/* {errorObj.customer_name!==0?<span style={{fontSize:"small",color:"red"}}>Enter Valid Name</span>:""} */}
            </div>
        
        </div>
  
        <div class="row mt-3">
        {/* <div class="d-flex"> */}
        <div class="col-md-6 col-lg-6">
            <div className="custom-control custom-checkbox mb-1">
                <input type="checkbox" className="custom-control-input" id={"billing_address"} name="billing_address" onChange={handleInput} checked={parseInt(customerAddress.billing_address)==1?true:false}/>
                <label className="custom-control-label" for={"billing_address"}>billing_address</label>
            </div>
            </div>
            <div class="col-md-6 col-lg-6">
            <div className="custom-control custom-checkbox mb-1">
                <input type="checkbox" className="custom-control-input" id={"delivery_address"} name="delivery_address" onChange={handleInput}  checked={parseInt(customerAddress.delivery_address)==1?true:false}/>
                <label className="custom-control-label" for={"delivery_address"}>delivery_address</label>
            </div>
            {/* </div> */}
            {/* <div class="custom-control custom-radio">
                <input type="checkbox" id="delivery" name="delivery" value={"Delivery"}  class="custom-control-input" onClick={""} />
                
                <label class="custom-control-label" for="delivery">Discount</label>
            </div>
            <div class="custom-control custom-radio ml-4">
                <input type="checkbox" id="pickup" name="delivery" value={"Pickup"}  onClick={""} class="custom-control-input" />
                <label class="custom-control-label" for="delivery">Pick up</label>
            </div> */}
        </div>
        </div>


        </ModalBody>
        <ModalFooter>
          <Button color="secondary" style={{backgroundColor:"#2296f3",border:"1px solid white",width:120}} type="submit" >{type==="add"?"Save":"Update"}</Button>
          <Button color="secondary" onClick={props.modalAction} style={{backgroundColor:"#2296f3",border:"1px solid white",width:120}}>Cancel</Button>
        </ModalFooter>
        </form>
      </Modal>
    </div>
  );
}


const mapStateToProps = (state)=>(
    {
        customerData:state.customerReducer
    }
)
export default connect(mapStateToProps,{
addCustomerContact,handleExchangeData,updateContactData,getCustomerContacts,getcustomerAddress,addcustomerAddress,updatecustomerAddress
     





})(AddressModal)
