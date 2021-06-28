
import {
    GET_CUSTOMER_LIST
    // ADD_CUSTOMER, 
    // SHOW_CUSTOER, 
    // UPDATE_CUSTOMER,
    // DELETE_CUSTOMER 
    } from '../actions/types'
   

const initialSatate = {
   customerList:[]
  }

 const customerReducer = (state = initialSatate, action)=>{
    console.log(action)
    console.log(state)
    // alert(action.type)x
    
    switch(action.type){
        // plant page redirects
        case GET_CUSTOMER_LIST :
            return{
                ...state,
                payload:action.payload.data              
            }
    
        default:
                return state
    }

}
export default customerReducer