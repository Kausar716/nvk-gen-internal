import React,  { Component } from 'react' ;
// import {v4 as uuidv4} from 'uuid';
import {Button,Badge,Form,Input,FormGroup,Label} from 'reactstrap'
// import { Left } from 'react-bootstrap/lib/Media';


class ForgotPassowrd extends Component{
    state = {
        email:'',
        password:''
    }

    onChange =(e)=>{
        this.setState({[e.target.name]:e.target.value})

    }
    render(){
        return(
            <div className="signin">
             <Form className="signin_form">
                <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                    <Label for="password" className="me-sm-2">New Password</Label>
                    <Input type="password" name="email" id="password" placeholder="New Password" />
                </FormGroup>
                <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                    <Label for="Password" className="me-sm-2">Repeat Password</Label>
                    <Input type="password" name="password" id="Password" placeholder="Repeat Password"/>
                </FormGroup>
                <br/>
                <div style={{marginTop:7}}>
                <FormGroup >
                    <Label>
                    {/* <p className="infostyle">I forgot my passord</p> */}
                    <Button className="loginbutton" style={{backgroundColor:"#FF8C00",border:"1px solid white"}}>Submit</Button>
                    </Label>
                </FormGroup>
                    
                </div>
            </Form>
   
            </div>
        )
    }

}
export default ForgotPassowrd

