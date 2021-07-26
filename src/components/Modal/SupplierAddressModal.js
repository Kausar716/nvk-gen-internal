import {React,useState,useEffect} from 'react';
import {connect} from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {modalAction} from "../../actions/productAction";
import { countryDetails } from '../Help/countryList';
import {handleSupplierExchnageData,getAllSuppliersContact,UpdateAddress,addSupplierAddress,getAllAddress} from "../../actions/supplierManagementAction";

 const SupplierAddressModal = (props) => {
     const {status,type} =props
   const {supplierAddress,supplierAddressList,supplierDataById} = props.supplierData
   const [error,setError] = useState("")

   useEffect(() => {
       setError("")

   },[])
  
             
   let allCountry = Object.keys(countryDetails);
        
   let allStates ;
   // let countZipRegix
//    if(supplierData.supplierLocation){
     
       if(supplierAddress.country && supplierAddress.country !== "Select Country"){
        if(countryDetails[supplierAddress.country])
           allStates = countryDetails[supplierAddress.country][0];
        //    this.countZipRegix=countryDetails[customerAddress.country][1][0]
        //    console.log(this.countZipRegix)
           // console.log(this.state.clientData.country)
       }
//    }
   const handleInput= (e)=>{
       if(e.target.id =="billing_address"){
           let primary = parseInt(supplierAddress.billing_address) ==1?0:1
           props.handleSupplierExchnageData(primary,e.target.id,"supplierAddress")
       }else if(e.target.id =="shipping_address"){
        let all = parseInt(supplierAddress.shipping_address) ==1?0:1
        props.handleSupplierExchnageData(all,e.target.id,"supplierAddress")

       }else{
        props.handleSupplierExchnageData(e.target.value,e.target.id,"supplierAddress")
       } 
    }
    const saveData =(e)=>{
        e.preventDefault();
        // alert("saving")
       
        if(supplierDataById.id !== undefined){
            setError("")
            supplierAddress.supplier_id  = supplierDataById.id
            if(supplierAddress.id == undefined){
                props.addSupplierAddress(supplierAddress).then(data=>{
                    props.modalAction()
                 console.log(supplierDataById)
                    // alert(customerDataById.customer_id)
                    props.getAllAddress(supplierDataById.id)
                    // props.getsupplierContacts(customerDataById.customer_id)
                    
                })
    
            }else{
                props.UpdateAddress(supplierAddress).then(data=>{
                    props.modalAction()
                    console.log(supplierDataById)
                    props.getAllAddress(supplierDataById.id)
                    
                })
    

        }

        }else{
            setError("Please add Supplier first")
        }
     
      

    }

  return (
  
    <div>
      {/* <Button color="danger" onClick={toggle}>{buttonLabel}</Button> */}
      <Modal isOpen={status} size="lg">
        <ModalHeader><p style={{textAlign:"center",fontSize:25}}>{type==="add"?"Add":"Edit"} Address</p> </ModalHeader>
        <form onSubmit={saveData}>
        <ModalBody >
        <p style={{color:"red"}}>{error}</p>
          
        <div class="row mt-3">
            <div class="col-md-3 col-lg-3">
                <label>City<span class="text-danger">*</span></label>
                <input type="text" class="form-control" id="city" value={supplierAddress.city} onChange={handleInput}/>
                {/* {errorObj.customer_name!==0?<span style={{fontSize:"small",color:"red"}}>Enter Valid Name</span>:""} */}
            </div>
            <div class="col-md-3 col-lg-3">
                <label>Country<span class="text-danger">*</span></label>
                <select className="form-control"  id="country"  value={supplierAddress.country}   placeholder="country" onChange={handleInput}>
                    <option>{supplierAddress.country}</option>
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
                <select className="form-control"  id="state"  value={supplierAddress.state}  onChange={handleInput}>
                <option>{supplierAddress.state}</option>
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
                <input type="text" class="form-control" id="zip" value={""}  value={supplierAddress.zip}  onChange={handleInput}/>
                {/* {errorObj.customer_name!==0?<span style={{fontSize:"small",color:"red"}}>Enter Valid Name</span>:""} */}
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-md-6 col-lg-6">
                <label>Address 1<span class="text-danger">*</span></label>
                <textarea  class="form-control" id="supplier_address" value={""} value={supplierAddress.supplier_address}  onChange={handleInput}></textarea>
                {/* {errorObj.customer_name!==0?<span style={{fontSize:"small",color:"red"}}>Enter Valid Name</span>:""} */}
            </div>
            <div class="col-md-6 col-lg-6">
                <label>Address 2<span class="text-danger">*</span></label>
                <textarea  class="form-control" id="supplier_address1" value={""} value={supplierAddress.supplier_address1}  onChange={handleInput}></textarea>
                {/* {errorObj.customer_name!==0?<span style={{fontSize:"small",color:"red"}}>Enter Valid Name</span>:""} */}
            </div>
        </div>
   
        <div class="row mt-3">
            <div class="col-md-6 col-lg-6">
                <label>Lat<span class="text-danger">*</span></label>
                <input type="number" class="form-control" id="lat" value={""} value={supplierAddress.lat}  onChange={handleInput}/>
                {/* {errorObj.customer_name!==0?<span style={{fontSize:"small",color:"red"}}>Enter Valid Name</span>:""} */}
            </div>
            <div class="col-md-6 col-lg-6">
                <label>Lang<span class="text-danger">*</span></label>
                <input type="number" class="form-control" id="long" value={""}  value={supplierAddress.long}  onChange={handleInput}/>
                {/* {errorObj.customer_name!==0?<span style={{fontSize:"small",color:"red"}}>Enter Valid Name</span>:""} */}
            </div>
        </div>
        {/* <div class="row mt-3">
            <div class="col-md-12 col-lg-12">
                <label>Notes <span class="text-danger">*</span></label>
                <textarea  class="form-control" id="notes" value={""} value={customerAddress.notes}  onChange={handleInput}></textarea>
                {/* {errorObj.customer_name!==0?<span style={{fontSize:"small",color:"red"}}>Enter Valid Name</span>:""} */}
            {/* </div> */}
        
        {/* </div>  */}
  
        <div class="row mt-3">
        {/* <div class="d-flex"> */}
        <div class="col-md-6 col-lg-6">
            <div className="custom-control custom-checkbox mb-1">
                <input type="checkbox" className="custom-control-input" id={"billing_address"} name="billing_address" onChange={handleInput} checked={parseInt(supplierAddress.billing_address)==1?true:false}/>
                <label className="custom-control-label" for={"billing_address"}>billing_address</label>
            </div>
            </div>
            <div class="col-md-6 col-lg-6">
            <div className="custom-control custom-checkbox mb-1">
                <input type="checkbox" className="custom-control-input" id={"shipping_address"} name="shipping_address" onChange={handleInput}  checked={parseInt(supplierAddress.shipping_address)==1?true:false}/>
                <label className="custom-control-label" for={"shipping_address"}>delivery_address</label>
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
        supplierData:state.supplierData
    }
)
export default connect(mapStateToProps,{
    handleSupplierExchnageData,getAllSuppliersContact,UpdateAddress,addSupplierAddress,getAllAddress
     





})(SupplierAddressModal)