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
    ERROR_HANDLE,
    GET_ADD_TO_ORDER_LIST,
    HANDLE_SEARCH_ORDERED_LIST,
    HANDLE_DMQTY,
    HANDLE_ADD_ALL,
    GET_CURRENT_PO_ORDER,
    HANDLE_SINGLE_ITEM_ADDITION,
    GET_CURRENT_PO_ORDER_HISTORY

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
      console.log(data)
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


export const getAddToOrderList = () => dispatch => {
  let errorArray=[];
  // if(plantData.genus.trim().length ===0 ) errorArray.push("Add plant genus")
  axios.get(`/api/add-to-purchase-order-search?type=plant`,config).then(res=>{
    console.log(res)
     
      dispatch({
          type:GET_ADD_TO_ORDER_LIST,
          payload:res.data.data

      })
      dispatch({
        type:ERROR_HANDLE,
        message:errorArray,
        status:true
    })
  })
}

export const serachOrderedList = (plant,sku)=>{
  return{
    type:HANDLE_SEARCH_ORDERED_LIST,
    plant,
    sku
  }
}
export const handledumyQty=(sku_code,dumyQty)=>{
  console.log(sku_code,dumyQty)
  
  return{
    type:HANDLE_DMQTY,
    sku_code,
    dumyQty
  }
}


export const getCurrentOrder = (currentPoId)=> dispatch => {
 let errorArray = []
  axios.get(`/api/purchase-order-item-list/${currentPoId}`,config).then(res=>{
    console.log(res)
     debugger;
      dispatch({
          type:GET_CURRENT_PO_ORDER,
          payload:res.data.data

      })
      dispatch({
        type:ERROR_HANDLE,
        message:errorArray,
        status:true
    })
  })

}


export const getOrderHistory = (currentPoId)=> dispatch => {
  let errorArray = []
  if(currentPoId){
   axios.get(`/api/po-logs/${currentPoId}`,config).then(res=>{
     console.log(res)
      debugger;
       dispatch({
           type:GET_CURRENT_PO_ORDER_HISTORY,
           payload:res.data.data
 
       })
       dispatch({
         type:ERROR_HANDLE,
         message:errorArray,
         status:true
     })
   })
  }
 }


export const handleAddAll = (groupedArray,poId) => dispatch => {
let orderedListForUpdation = []
  groupedArray.map(order=>{
    order.map(subOrder=>{
      if(subOrder.dumyQty!==""){
        let inputObj={}
        inputObj['plant_id'] = subOrder.plant_id
        inputObj['qty'] = subOrder.dumyQty
        inputObj['name'] = subOrder.plant_name
        inputObj['size'] = subOrder.size
        inputObj['SKU'] = subOrder.sku_code
        inputObj['nvk_price'] = subOrder.nvk_price
        inputObj['volume_rate'] = subOrder.volume_quantity_value
        inputObj['item_customer_notes'] = ""
        inputObj['item_internal_notes'] = ""

        

        orderedListForUpdation.push(inputObj)
      }
    })
  })
  let orderedObject = {}
  orderedObject['type'] = "plant"
  orderedObject['items']  = orderedListForUpdation
  console.log(orderedObject)
  debugger;
  let errorArray=[];
  // if(plantData.genus.trim().length ===0 ) errorArray.push("Add plant genus")
  if(orderedListForUpdation.length>0){
  axios.post(`/api/add-purchase-order-item/${poId}`,orderedObject,config).then(res=>{
    console.log(res)
    debugger;
     
      dispatch({
          type:HANDLE_ADD_ALL,
          payload:res.data.data

      })
      dispatch({
        type:ERROR_HANDLE,
        message:errorArray,
        status:true
    })
  })
}
}