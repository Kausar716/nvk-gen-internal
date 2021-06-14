// import {v4 as v4} from '';
import {SIGN_IN_AUTH,CHECK_LOGIN} from '../actions/types';
// import {getAllImageAssets} from "../";

const initialSatate = {
   
        emailId:"nvk@gmail.com",
        password:"password123",
        loading:false,
        loggedIn:false,
        error:false
    
}
export default function(state = initialSatate, action){
    switch(action.type){

            case SIGN_IN_AUTH:
                console.log(action,"yes logged in data1")
                return{
                    ...state,
                    // loggedIn:true

                }
            case CHECK_LOGIN:
                console.log(action.payload)
                return {
                    ...state,
                    loggedIn:(action.payload.emailId == state.emailId && action.payload.password == state.password),
                    error:(action.payload.emailId != state.emailId && !action.payload.password != state.password)
                   
                   
                }
            default:
                return state
    }

}