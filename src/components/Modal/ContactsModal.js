import {React,useState,useEffect} from 'react';
import {connect} from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {modalAction} from "../../actions/productAction";
import {addCustomerContact,handleExchangeData,savingContactData,updateContactData,getCustomerContacts} from "../../actions/customerSettingAction";

 const ContactsModal = (props) => {
     const {status,type} =props
   const {customerContact,customerDataById} = props.customerData
   const [error,setError] = useState("")
   
   useEffect(() => {
    setError("")

},[customerDataById])
   console.log(customerContact)
   const handleInput= (e)=>{
    setError("")
       if(e.target.id =="primary_contact"){
           let primary = customerContact.primary_contact ==1?0:1
           props.handleExchangeData(primary,e.target.id,"customerContact")
       }else if(e.target.id =="all_communication"){
        let all = customerContact.all_communication ==1?0:1
        props.handleExchangeData(all,e.target.id,"customerContact")

       }else{
        props.handleExchangeData(e.target.value,e.target.id,"customerContact")
       } 
    }
    const saveData =(e)=>{
        e.preventDefault();
        // alert("saving")
       
        if(customerDataById.id !== undefined){
            setError("")
            customerContact.customer_id  = customerDataById.id
            if(type=="add"){
                props.addCustomerContact(customerContact).then(data=>{
                    props.modalAction()
                 console.log(customerDataById)
                    // alert(customerDataById.customer_id)
                    props.getCustomerContacts(customerDataById.id)
                    // props.getCustomerContacts(customerDataById.customer_id)
                    
                })
    
            }else{
                props.updateContactData(customerContact).then(data=>{
                    props.modalAction()
                    console.log(customerDataById)
                    props.getCustomerContacts(customerDataById.id)
                    
                })
    

        }

        }else{
            setError("Please add customer first")
        }
     
      

    }

  return (
  
    <div>
      {/* <Button color="danger" onClick={toggle}>{buttonLabel}</Button> */}
      <Modal isOpen={status} size="lg">
        <ModalHeader><p style={{textAlign:"center",fontSize:25}}>{type==="add"?"Add":"Edit"} Contacts</p> </ModalHeader>
        <form onSubmit={saveData}>
        <ModalBody >
            <p style={{color:"red"}}>{error}</p>
          
        <div class="row mt-3">
            <div class="col-md-6 col-lg-6">
                <label>First Name<span class="text-danger">*</span></label>
                <input type="text" class="form-control" id="first_name" value={customerContact.first_name} onChange={handleInput}/>
                {/* {errorObj.customer_name!==0?<span style={{fontSize:"small",color:"red"}}>Enter Valid Name</span>:""} */}
            </div>
            <div class="col-md-6 col-lg-6">
                <label>Last Name<span class="text-danger">*</span></label>
                <input type="text" class="form-control" id="last_name" value={""}  value={customerContact.last_name}  onChange={handleInput}/>
                {/* {errorObj.customer_name!==0?<span style={{fontSize:"small",color:"red"}}>Enter Valid Name</span>:""} */}
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-md-6 col-lg-6">
                <label>Phone 1<span class="text-danger">*</span></label>
                <input type="number" class="form-control" id="phone1" value={""} value={customerContact.phone1}  onChange={handleInput}/>
                {/* {errorObj.customer_name!==0?<span style={{fontSize:"small",color:"red"}}>Enter Valid Name</span>:""} */}
            </div>
            <div class="col-md-6 col-lg-6">
                <label>phone1 ext<span class="text-danger">*</span></label>
                <input type="text" class="form-control" id="phone1_ext" value={""}  value={customerContact.phone1_ext}  onChange={handleInput}/>
                {/* {errorObj.customer_name!==0?<span style={{fontSize:"small",color:"red"}}>Enter Valid Name</span>:""} */}
            </div>
        </div>
   
        <div class="row mt-3">
            <div class="col-md-6 col-lg-6">
                <label>Phone 2<span class="text-danger">*</span></label>
                <input type="number" class="form-control" id="phone2" value={""} value={customerContact.phone2}  onChange={handleInput}/>
                {/* {errorObj.customer_name!==0?<span style={{fontSize:"small",color:"red"}}>Enter Valid Name</span>:""} */}
            </div>
            <div class="col-md-6 col-lg-6">
                <label>phone2 ext<span class="text-danger">*</span></label>
                <input type="text" class="form-control" id="phone2_ext" value={""}  value={customerContact.phone2_ext}  onChange={handleInput}/>
                {/* {errorObj.customer_name!==0?<span style={{fontSize:"small",color:"red"}}>Enter Valid Name</span>:""} */}
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-md-12 col-lg-12">
                <label>Email <span class="text-danger">*</span></label>
                <input type="email" class="form-control" id="email" value={""} value={customerContact.email}  onChange={handleInput}/>
                {/* {errorObj.customer_name!==0?<span style={{fontSize:"small",color:"red"}}>Enter Valid Name</span>:""} */}
            </div>
        
        </div>
        <div class="row mt-3">
            <div class="col-md-12 col-lg-12">
                <label>Notes <span class="text-danger">*</span></label>
                <textarea  class="form-control" id="text" value={""}  value={customerContact.Notes}  onChange={handleInput}></textarea>
                {/* {errorObj.customer_name!==0?<span style={{fontSize:"small",color:"red"}}>Enter Valid Name</span>:""} */}
            </div>
        
        </div>
  
        <div class="row mt-3">
        {/* <div class="d-flex"> */}
        <div class="col-md-6 col-lg-6">
            <div className="custom-control custom-checkbox mb-1">
                <input type="checkbox" className="custom-control-input" id={"primary_contact"} onChange={handleInput} checked={parseInt(customerContact.primary_contact)==1?true:false}/>
                <label className="custom-control-label" for={"primary_contact"}>This person is the primary contact</label>
            </div>
            </div>
            <div class="col-md-6 col-lg-6">
            <div className="custom-control custom-checkbox mb-1">
                <input type="checkbox" className="custom-control-input" id={"all_communication"} onChange={handleInput}  checked={parseInt(customerContact.all_communication)==1?true:false}/>
                <label className="custom-control-label" for={"all_communication"}>This person receives all communication</label>
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
addCustomerContact,handleExchangeData,updateContactData,getCustomerContacts
     





})(ContactsModal)
