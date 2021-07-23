import {React,useState,useEffect} from 'react';
import {connect} from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {modalAction} from "../../actions/productAction";
import {handleSupplierExchnageData,getAllSuppliersContact,updateSupplierContact,addSuppplierContact} from "../../actions/supplierManagementAction";

 const SupplierContactModal = (props) => {
     const {status,type} =props
   const {supplierContact,supplierDataById} = props.supplierData
   const [error,setError] = useState("")
   
   useEffect(() => {
    setError("")

},[supplierDataById])
   console.log(supplierContact)
   const handleInput= (e)=>{
    setError("")
       if(e.target.id =="primary_contact"){
           let primary = supplierContact.primary_contact ==1?0:1
           props.handleSupplierExchnageData(primary,e.target.id,"supplierContact")
       }else if(e.target.id =="receives_all"){
        let all = supplierContact.receives_all ==1?0:1
        props.handleSupplierExchnageData(all,e.target.id,"supplierContact")

       }else{
        props.handleSupplierExchnageData(e.target.value,e.target.id,"supplierContact")
       } 
    }
    const saveData =(e)=>{
        e.preventDefault();
        // alert("saving")
       
        if(supplierDataById.id !== undefined){
            setError("")
            supplierContact.supplier_id  = supplierDataById.id
            if(supplierContact.id == undefined){
                props.addSuppplierContact(supplierContact).then(data=>{
                    props.modalAction()
                 console.log(supplierDataById)
                    // alert(customerDataById.customer_id)
                    props.getAllSuppliersContact(supplierDataById.id)
                    // props.getsupplierContacts(customerDataById.customer_id)
                    
                })
    
            }else{
                props.updateSupplierContact(supplierContact).then(data=>{
                    props.modalAction()
                    console.log(supplierDataById)
                    props.getAllSuppliersContact(supplierDataById.id)
                    
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
            <div class="col-md-12 col-lg-12">
                <label>First Name<span class="text-danger">*</span></label>
                <input type="text" class="form-control" id="contact_name" value={supplierContact.contact_name} onChange={handleInput}/>
                {/* {errorObj.customer_name!==0?<span style={{fontSize:"small",color:"red"}}>Enter Valid Name</span>:""} */}
            </div>
            {/* <div class="col-md-6 col-lg-6">
                <label>Last Name<span class="text-danger">*</span></label>
                <input type="text" class="form-control" id="last_name" value={""}  value={supplierContact.last_name}  onChange={handleInput}/>
                {/* {errorObj.customer_name!==0?<span style={{fontSize:"small",color:"red"}}>Enter Valid Name</span>:""} */}
            {/* </div> */}
        </div>
        <div class="row mt-3">
            <div class="col-md-12 col-lg-12">
                <label>Email <span class="text-danger">*</span></label>
                <input type="email" class="form-control" id="contact_email" value={""} value={supplierContact.contact_email}  onChange={handleInput}/>
                {/* {errorObj.customer_name!==0?<span style={{fontSize:"small",color:"red"}}>Enter Valid Name</span>:""} */}
            </div>
        
        </div>
        <div class="row mt-3">
            <div class="col-md-6 col-lg-6">
                <label>Phone 1<span class="text-danger">*</span></label>
                <input type="number" class="form-control" id="phone1" value={""} value={supplierContact.phone1}  onChange={handleInput}/>
                {/* {errorObj.customer_name!==0?<span style={{fontSize:"small",color:"red"}}>Enter Valid Name</span>:""} */}
            </div>
            <div class="col-md-6 col-lg-6">
                <label>Phone 2<span class="text-danger">*</span></label>
                <input type="number" class="form-control" id="phone2" value={""} value={supplierContact.phone2}  onChange={handleInput}/>
                {/* {errorObj.customer_name!==0?<span style={{fontSize:"small",color:"red"}}>Enter Valid Name</span>:""} */}
            </div>
        </div>
   
  
  
        <div class="row mt-3">
        {/* <div class="d-flex"> */}
        <div class="col-md-6 col-lg-6">
            <div className="custom-control custom-checkbox mb-1">
                <input type="checkbox" className="custom-control-input" id={"primary_contact"} onChange={handleInput} checked={parseInt(supplierContact.primary_contact)==1?true:false}/>
                <label className="custom-control-label" for={"primary_contact"}>This person is the primary contact</label>
            </div>
            </div>
            <div class="col-md-6 col-lg-6">
            <div className="custom-control custom-checkbox mb-1">
                <input type="checkbox" className="custom-control-input" id={"receives_all"} onChange={handleInput}  checked={parseInt(supplierContact.receives_all)==1?true:false}/>
                <label className="custom-control-label" for={"receives_all"}>This person receives all communication</label>
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
        supplierData:state.supplierData,
    }
)
export default connect(mapStateToProps,{
    handleSupplierExchnageData,getAllSuppliersContact,updateSupplierContact,addSuppplierContact

     





})(SupplierContactModal)
