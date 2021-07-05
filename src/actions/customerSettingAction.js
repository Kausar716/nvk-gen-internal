 import {
 GET_CUSTOMER_LIST, 
 ADD_CUSTOMER, 
 SHOW_CUSTOER, 
 UPDATE_CUSTOMER,
 DELETE_CUSTOMER,
 axios,
 config
 } from './types'

 export const getAllCustomer = () => dispatch => {
    axios.get("/api/customers-list",config).then(res=>{ 
        console.log(res.data)
    dispatch({
            type:GET_CUSTOMER_LIST,
            payload:res.data

        })
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