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
 HANDLE_INPUT,
 axios,
 config
 } from './types'

 export const saveNoticationData = ()=>dispatch=>{

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