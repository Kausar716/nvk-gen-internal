

import {
    ADD_NEW_QUOTE,
    HANDLE_INPUT_QUOTE,
    UPDATE_QUOTE,
    UPDATE_NEW_QUOTE
   

    
    // ADD_CUSTOMER, 
    // SHOW_CUSTOER, 
    // UPDATE_CUSTOMER,
    // DELETE_CUSTOMER 
    } from '../actions/types'
   

const initialSatate = {
//    quoteOrderList:[],
    quoteDetails:{
        source:"",
        ordered_by:"",
        bill_to:"",
        purchase_order:"",
        requested_date:"",
        requested_time:"AM",
        currency:"",
        email_to:"",
        job_description:"",
        units:"",
        discount:"0.00",
        discount_by_line_item:1,
        archive_quote_timeframe:"",
        show_pricing_op:"",
        flag_as_reminder:"0",
        order_notes:"",
        status:"1",
        customer_id: "",
        quote_no: "",
        quote_status: "",
        pricing_year: "",
        amount: null,
        
    }

}

 const QuoteReducer = (state = initialSatate, action)=>{
    console.log(action.payload)
    console.log(action.payload)
    // alert(action.type)x
    
    switch(action.type){
        case ADD_NEW_QUOTE:
            return{

                ...state,
                quoteDetails:action.payload.data

            }
        case UPDATE_QUOTE:
            return{
                ...state,
                quoteDetails:{...state.quoteDetails,...action.payload}

            }
        case HANDLE_INPUT_QUOTE:
            return{
                ...state,
                quoteDetails:{...state.quoteDetails, [action.id]:action.value}

            }
        case UPDATE_NEW_QUOTE:
            return{
                ...state,
                quoteDetails:{...state.quoteDetails, [action.id]:action.value}

            }
            default:
                return state
        }
     
    }
    export default QuoteReducer