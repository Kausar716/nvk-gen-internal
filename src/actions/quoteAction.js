import {
    // FILTER_DATA_BY_ALPHABETIC_PO,
    // FILTER_DATA_BY_SEARCH_SN_PO,
    // SET_PAGE_NUMBER_PO,
    // GET_PURCHASE_ORDER_LIST,


    ADD_NEW_QUOTE,
    HANDLE_INPUT_QUOTE,
    UPDATE_QUOTE,
    UPDATE_NEW_QUOTE,
    SEARCH_PLANT_PRODUCT,
    FILTER_PLANT_MANAGER_QUOTE_ACTION,


    axios,
    config
    } from './types'

    export const searchPlantProductAPI =(data)=>dispatch => {
        return axios.post("/api/quote-plantsearch",null,config).then(res=>{ 
      
            console.log(res)
            dispatch({
                type:SEARCH_PLANT_PRODUCT,
                payload:res.data
            })
        })
        
    }
    export const addNewQuote = (data) => dispatch => {
        //debugger;
        return axios.post("/api/add-quote",data,config).then(res=>{ 
      
            console.log(res)
            dispatch({
                type:ADD_NEW_QUOTE,
                payload:res.data
            })
        })
    }
    export const addToQuoteUpdate = (data) => dispatch => {
        //debugger;

        return axios.post(`/api/update-quote-details/${data.id}`,data,config).then(res=>{ 
      
            console.log(res)
            dispatch({
                type:UPDATE_NEW_QUOTE,
                payload:res.data.data
            })
        })
    }

    export const handleInputChange = (id,value) =>dispatch=>{
        dispatch({
            type:HANDLE_INPUT_QUOTE,
            id:id,
            value:value
        })

    }
    export const updateQuoteData = (quoteData)=>dispatch=>{
        console.log(quoteData)
        dispatch({
            type:UPDATE_QUOTE,
            payload:quoteData
        })

    }

    export const filterHandleData = (id,value)=>dispatch=>{

   return axios.post("/api/quote-plantsearch",null,config).then(res=>{ 
      
            console.log(res)
            dispatch({
                type:FILTER_PLANT_MANAGER_QUOTE_ACTION,
                id:id,
                value:value
            })
        })
    }
