import {
    GET_PURCHASE_ORDER_LIST,
    axios,
    config,
    PO_PAGE_REDIRECT_ACTION,
    PO_SUB_PAGE_REDIRECT_ACTION,
    PO_SET_PAGE_NUMBER,
    PO_SET_ALPHABET_SELECTED,
    PO_GET_SUPPLIER_FILTER,
    PO_GET_JOBDESCRIPTION_FILTER,
    PO_GET_ORDER_FILTER,
    PO_GET_PLANT_PRODUCT_FILTER,
    PO_GET_SKU_PLANT_PRODUCT_FILTER,
    PO_GET_SUPPLIER_ORDER_FILTER,
    HANDLE_PURCHASE_ORDER_FILTER,
    ADD_PURCHASE_ORDER,
    SET_SUPPLIER_TO_ADD_PO,
    HANDLE_ORDERDETAILS_INPUT,
    ERROR_HANDLE

    } from './types'
    export const getPurchaseOrderList = () => dispatch => {
        axios.get(`/api/purchase-order-list`,config).then(res=>{
            console.log(res)
            dispatch({
                type:GET_PURCHASE_ORDER_LIST,
                payload:res.data.data
    
            })
        })
    }
    export const poPageReDirectAction = (page,actionType) => {
        return{
            type:PO_PAGE_REDIRECT_ACTION,
            page:page,
            actionType:actionType
        }
    
    }
    export const poSubPageReDirectAction = (page, productID) => {
      return{
            type:PO_SUB_PAGE_REDIRECT_ACTION,
            page:page,
           // productID:productID
        }
    
    }
    export const poSetPageNumber = (pageNumber) => {
        return{
              type:PO_SET_PAGE_NUMBER,
              pageNumber:pageNumber,
          }
      
      } 
      export const setAlphabetSelected = (alphabet)=>{
        return{
            type:PO_SET_ALPHABET_SELECTED,
            selectedAlphabet:alphabet,
        }
      }
      export const getPoSupplierFilter = (name)=>{
        return{
            type:PO_GET_SUPPLIER_FILTER,
            supplierName:name
        }
      }
      export const getPoJobDescription = (name)=>{
        return{
            type:PO_GET_JOBDESCRIPTION_FILTER,
            supplierName:name
        }
      }
      export const getPoOrderFilter = (name)=>{
        return{
            type:PO_GET_ORDER_FILTER,
            supplierName:name
        }
      }
      export const getPoPlantProductFilter = (name)=>{
        return{
            type:PO_GET_PLANT_PRODUCT_FILTER,
            supplierName:name
        }
      }
      export const getPoSkuFilter = (name)=>{
        return{
            type:PO_GET_SKU_PLANT_PRODUCT_FILTER,
            supplierName:name
        }
      }
      export const getSupplierOrderFilter = (name)=>{
        return{
            type:PO_GET_SUPPLIER_ORDER_FILTER,
            supplierName:name
        }
      }
      export const handlePurchaseOrderFilert = (statusLevel)=>{
        return{
          type:HANDLE_PURCHASE_ORDER_FILTER,
          statusLevel:statusLevel,
        }
    }
    export const addPo = (data) => dispatch => {
      let errorArray=[];
      if(data){
      // if(plantData.genus.trim().length ===0 ) errorArray.push("Add plant genus")
      axios.post(`/api/add-purchase-order`,data,config).then(res=>{
          console.log(res)
          errorArray.push("Order Updated successfully")
          dispatch({
              type:ADD_PURCHASE_ORDER,
              payload:res.data.data
  
          })
          dispatch({
            type:ERROR_HANDLE,
            message:errorArray,
            status:true
        })
      })
    }
    else{
      dispatch({
          type:ERROR_HANDLE,
          message:errorArray,
          status:true
      })

  }
  }
  export const setSupplierToAddPo = (supplier)=>{
    return{
      type:SET_SUPPLIER_TO_ADD_PO,
      supplier:supplier,
    }
}

export const handleOrderDetailsInput = (id,value)=>{
  return{
    type:HANDLE_ORDERDETAILS_INPUT,
    itemId:id,
    itemValue:value
  }
}
      