 import {
 GET_CUSTOMER_LIST, 
 ADD_CUSTOMER, 
 SHOW_CUSTOER, 
 UPDATE_CUSTOMER,
 DELETE_CUSTOMER,
 SET_PAGE_NUMBER,
 FILTER_DATA_BY_RADIO,
 FILTER_DATA_BY_SEARCH,
 FILTER_DATA_BY_ALPHA,
 HANLE_DATA_CHANGE,
 HANDLE_INPUT_EXCHANGE,
 ADD_NOTIFICATION,
 ADD_FINANCES_DATA,
 ADD_EMAIL,
 GET_CUSTOMER_NOTIFICATION,
 GET_EMAIL_NOTIFICATION,
 HANDLE_INPUT,
 ADD_INTEREST_DATA,
 ADD_PRINT_DATA,
 ADD_CUSTOMER_TYPE,
 GET_ALL_CUSTOMER_TYPES,
 HANDLE_DRAG_CUSTOMER_CATEGORY,
 GET_CUSTOMER_DELIVERY_LIST,
 ADD_CUSTOMER_DELIVERY,
 GET_CUSTOMER_STATUS,
 ADD_CUSTOMER_STATUS,
 ADD_CUSTOMER_REASON,
 GET_CUSTOMER_REASON,
 GET_CUSTOMER_TERMS,
 ADD_CUSTOMER_TERMS,
 ADD_CUSTOMER_RETURN_REASON,
 GET_CUSTOMER_RETURN_REASON,
 GET_EXCHANGE_DATA,
 axios,
 config
 } from './types'


 export const getAllCustomerExchange = (data)=>dispatch=>{
 
    return axios.get("/api/customerexchangedetail",config).then(res=>{ 
        console.log(res.data)
    dispatch({
            type:GET_EXCHANGE_DATA,
            payload:res.data,

        })
    })
}
 export const saveReturnReasonMethod = (data)=>dispatch=>{
 
    return axios.post("/api/add-customer-reason",data,config).then(res=>{ 
        console.log(res)
        dispatch({
                type:ADD_CUSTOMER_RETURN_REASON,
                payload:res.data   
            })
        })  

}
 export const getAllReturnReasonMethods = () =>dispatch => {
    return axios.get("/api/customer-reason-list",config).then(res=>{ 
        console.log(res.data)
    dispatch({
            type:GET_CUSTOMER_RETURN_REASON,
            payload:res.data,

        })
    })

 }
 export const saveTermsMethod = (data)=>dispatch=>{
 
    return axios.post("/api/add-customer-term",data,config).then(res=>{ 
        console.log(res)
        dispatch({
                type:ADD_CUSTOMER_TERMS,
                payload:res.data   
            })
        })  

}
 export const getAllTermsMethods = () =>dispatch => {
    return axios.get("/api/customer-term-list",config).then(res=>{ 
        console.log(res.data)
    dispatch({
            type:GET_CUSTOMER_TERMS,
            payload:res.data,

        })
    })

 }
 export const saveReasonMethod = (data)=>dispatch=>{
 
    return axios.post("/api/add-customer-account-reason",data,config).then(res=>{ 
        console.log(res)
        dispatch({
                type:ADD_CUSTOMER_REASON,
                payload:res.data   
            })
        })  

}
 export const getAllReasonMethods = () =>dispatch => {
    return axios.get("/api/customer-account-reason-list",config).then(res=>{ 
        console.log(res.data)
    dispatch({
            type:GET_CUSTOMER_REASON,
            payload:res.data,

        })
    })

 }
 export const saveStatusMethod = (data)=>dispatch=>{
 
    return axios.post("/api/add-customer-account-status",data,config).then(res=>{ 
        console.log(res)
        dispatch({
                type:ADD_CUSTOMER_STATUS,
                payload:res.data   
            })
        })  

}
 export const getAllStatusMethods = () =>dispatch => {
    return axios.get("/api/customer-account-status-list",config).then(res=>{ 
        console.log(res.data)
    dispatch({
            type:GET_CUSTOMER_STATUS,
            payload:res.data,

        })
    })

 }
export const saveDeliveryMethod = (data)=>dispatch=>{
 
    return axios.post("/api/add-customer-delivery-method",data,config).then(res=>{ 
        console.log(res)
        dispatch({
                type:ADD_CUSTOMER_DELIVERY,
                payload:res.data   
            })
        })  

}
 export const getAllDeliveryMethods = () =>dispatch => {
    return axios.get("/api/customer-delivery-method-list",config).then(res=>{ 
        console.log(res.data)
    dispatch({
            type:GET_CUSTOMER_DELIVERY_LIST,
            payload:res.data,

        })
    })

 }
export const handleCustomerTypeDelete = (id,apiName)=>dispatch => {
    let plantCategoryObject={}
    return axios.post(`/api/${apiName}/${id}`,plantCategoryObject,config).then(res=>{ 
        console.log(res)
    // dispatch({
    //         type:HANDLE_DRAG_CUSTOMER_CATEGORY,
    //         payload:res.data

    //     })
    })
}

 export const handleDragDropCustomer = (data,type) =>dispatch=>{
    console.log(data)
    let plantCategoryObject={}
    // plantCategoryObject.name=data
  
    if(data.status == 1){
        plantCategoryObject.status=0
    }
    else {
        plantCategoryObject.status=1
    }
    // update-customer-type
    return axios.post(`/api/${type}/${data.id}`,plantCategoryObject,config).then(res=>{ 
        console.log(res)
    dispatch({
            type:HANDLE_DRAG_CUSTOMER_CATEGORY,
            payload:res.data

        })
    })
}
export const getAllCustomerType = ()=>dispatch=>{
    return axios.get("/api/customer-type-list",config).then(res=>{ 
        console.log(res.data)
    dispatch({
            type:GET_ALL_CUSTOMER_TYPES,
            payload:res.data,

        })
    })

}
export const saveCustomerType = (data)=>dispatch=>{
    return axios.post("/api/add-customer-type",data,config).then(res=>{ 
        console.log(res)
        dispatch({
                type:ADD_CUSTOMER_TYPE,
                payload:res.data   
            })
        })      
    }
 export const savecustomPrintData = (data) => dispatch =>{
    axios.post("/api/add-tag",data,config).then(res=>{ 
        console.log(res)
        dispatch({
                type:ADD_PRINT_DATA,
                payload:res.data   
            })
        })

 }
 export const saveFinanceExchangeData =(data)=>dispatch =>{
    console.log(data)
    axios.post("/api/add-customerexchangedetail",data,config).then(res=>{ 
        console.log(res)
        dispatch({
                type:ADD_FINANCES_DATA,
                payload:res.data   
            })
        })

 }
 export const saveIntrestData =(data)=>dispatch =>{
    axios.post("/api/add-customerorderinvoice",data,config).then(res=>{ 
        console.log(res)
        dispatch({
                type:ADD_INTEREST_DATA,
                payload:res.data   
            })
        })

 }
 export const saveNoticationData = (data)=>dispatch=>{
    console.log(data)
    axios.post("/api/add-customernotification",data,config).then(res=>{ 
        console.log(res)
        dispatch({
                type:ADD_NOTIFICATION,
                payload:res.data   
            })
        })
 }
 export const getEmailData =()=>dispatch => {
    axios.get("/api/customerquotereminders",config).then(res=>{ 
        console.log(res.data)
    dispatch({
            type:GET_EMAIL_NOTIFICATION,
            payload:res.data,

        })
    })

 }
 export const saveEmailData=(data)=>dispatch=>{
    console.log(data)
    axios.post("/api/add-customerquotereminder",data,config).then(res=>{ 
        console.log(res)
        dispatch({
                type:ADD_EMAIL,
                payload:res.data   
            })
        })

 }

 export const getNotificationData = ()=>dispatch=>{
    axios.get("/api/customernotifications",config).then(res=>{ 
        console.log(res.data)
    dispatch({
            type:GET_CUSTOMER_NOTIFICATION,
            payload:res.data,

        })
    })
 }
 export const getAllCustomer = (dataType) => dispatch => {
    axios.get("/api/customers-list",config).then(res=>{ 
        console.log(res.data)
    dispatch({
            type:GET_CUSTOMER_LIST,
            payload:res.data,
            dataType:dataType

        })
    })
}
export const handleExchangeData = (data,id,dataType) =>dispatch=>{
    dispatch({
        type:HANDLE_INPUT_EXCHANGE,
        data:data,
        id:id,
        dataType:dataType

    })

}
export const handleChangeFilter = (data,id) =>dispatch =>{
    dispatch({
        type:HANDLE_INPUT,
        data:data,
        id:id

    })
}

export const addCustomer = (data) => dispatch => {
    console.log(data)
   axios.post("/api/add-customer",data,config).then(res=>{ 
       console.log(res)
       dispatch({
               type:ADD_CUSTOMER,
               payload:res.data.data   
           })
       })
}

export const showCustomer = (id) => dispatch => {
    axios.get(`/api/show-customer/${id}`,config).then(res=>{     
        dispatch({
                type:SHOW_CUSTOER,
                payload:res.data    
            })
        })
}

export const updateCustomer = (customerData) => dispatch => {
    console.log(customerData)  
    return axios.post(`/api/update-customer/${customerData.id}`,customerData,config).then(res=>{  
     console.log(res)     
     dispatch({
             type:UPDATE_CUSTOMER,
             payload:res.data    
         })
     })
     .catch(message=>{
         console.log(message)
     })     
}

export const deleteCustomer= (customerData) => dispatch => {
    console.log(customerData)
    return axios.post(`/api/delete-customer/${customerData.id}`,config).then(res=>{  
     console.log(res)  
   
     dispatch({
             type:DELETE_CUSTOMER,
             payload:res.data    
         })
     })
     .catch(message=>{
         console.log(message)
     })
     
}
export const setPageNumber = (pageNumber) => {
    return{
          type:SET_PAGE_NUMBER,
          pageNumber:pageNumber,
      }
  
  }
  export const handleRadioFilter = (data)=>{
    //   if()
      return{
          type: FILTER_DATA_BY_RADIO,
          actionType:data
      }
  }
  export const handleSearchFilter = (data)=>{
    //   if()
      return{
          type:FILTER_DATA_BY_SEARCH,
          searchData:data
      }
  }
  export const handleAplhabetFilter = (data)=>{
    //   if()
      return{
          type:FILTER_DATA_BY_ALPHA,
          alphaData:data
      }
  }
//   export const dataChange = ()=>{
//       return {
//           type:"@@redux-form/BLUR",

//       }
//   }



/// cutomer