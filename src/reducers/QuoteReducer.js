

import {
    ADD_NEW_QUOTE,
    HANDLE_INPUT_QUOTE
   

    
    // ADD_CUSTOMER, 
    // SHOW_CUSTOER, 
    // UPDATE_CUSTOMER,
    // DELETE_CUSTOMER 
    } from '../actions/types'
   

const initialSatate = {
//    quoteOrderList:[],
    quoteDetails:{
        customer_id: "",
        quote_no:"",
        quote_status: "",
        pricing_year: "",
        currency: "",
        amount: "",
        status: 1
        
    }

}

 const QuoteReducer = (state = initialSatate, action)=>{
    console.log(action.payload)
    console.log(state)
    // alert(action.type)x
    
    switch(action.type){
        case ADD_NEW_QUOTE:
            return{

                ...state,
                quoteDetails:action.payload.data

            }
        case HANDLE_INPUT_QUOTE:
            return{
                ...state,
                quoteDetails:{...state.quoteDetails, [action.id]:action.value}

            }
            default:
                return state
        }
     
    }
    export default QuoteReducer