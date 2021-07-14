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
 axios,
 config
 } from './types'

 export const handleDragDropCustomer = (data) =>dispatch=>{
    console.log(data)
    let plantCategoryObject={}
    // plantCategoryObject.name=data
  
    if(data.status == 1){
        plantCategoryObject.status=0
    }
    else {
        plantCategoryObject.status=1
    }
    return axios.post(`/api/update-customer-type/${data.id}`,plantCategoryObject,config).then(res=>{ 
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