import React from 'react';
import {connect} from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {} from "../../actions/productAction";
//import {getAllImageAssets} from "../Utility/Utility";
//import '../Dashboard/index.css'
// import quotes from '../Dashboard/quotes.png'
// import Inventory from '../Dashboard/Inventory.png'

// import { Left } from 'react-bootstrap/lib/Media';
//import * as BsIcons from "react-icons/fa";


//const IconAssets =  getAllImageAssets();
//console.log(IconAssets)

 const SuccessInUserProfile = (props) => {
  // const toggle = () => {
    
  // }

  return (
    <div>
      {/* <Button color="danger" onClick={toggle}>{buttonLabel}</Button> */}
      <Modal isOpen={props.open}  >
      <ModalHeader><p style={{fontSize:25,color:"#629C44"}}>Success</p></ModalHeader>
        <ModalBody>
        {/* <img  src={IconAssets["Quote-&-Order-Management"]} alt=""/>  text-align: justify;
    margin-left: 7em;
    margin-top: 1em;*/}
      
        <p style={{textAlign:"justify",marginTop:"1em",marginLeft:"7em"}}>{props.message}</p>
        </ModalBody>
        <ModalFooter style={{borderTop:"1px solid white"}}>
          {/* <Button color="primary" onClick={toggle}>Do Something</Button>{' '} */}
          {/* <Button  onClick={()=>props.cancel()} style={{backgroundColor:"white",border:"1px solid lightgray",color:"gray",width:120}}>Cancel</Button> */}
          <Button  onClick={()=>props.confirm()} style={{backgroundColor:"#2296f3",border:"1px solid white",width:120}}>OK</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
const mapStateToProps = (state)=> ({
   
})

export default connect(mapStateToProps,{})(SuccessInUserProfile)
