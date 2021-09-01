import {
    // FILTER_DATA_BY_ALPHABETIC_PO,
    // FILTER_DATA_BY_SEARCH_SN_PO,
    // SET_PAGE_NUMBER_PO,
    // GET_PURCHASE_ORDER_LIST,


    ADD_NEW_QUOTE,
    HANDLE_INPUT_QUOTE,


    axios,
    config
    } from './types'


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

    export const handleInputChange = (id,value) =>dispatch=>{
        dispatch({
            type:HANDLE_INPUT_QUOTE,
            id:id,
            value:value
        })

    }
