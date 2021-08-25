
import {
    FILTER_DATA_BY_ALPHABETIC_PO,
    FILTER_DATA_BY_SEARCH_SN_PO,
    SET_PAGE_NUMBER_PO,
    GET_PURCHASE_ORDER_LIST,
    axios,
    config
    } from './types'
    export const getPurchaseOrderList = () => dispatch => {
        axios.get(`/api/purchase-order-list`,config).then(res=>{
            console.log(res)
            dispatch({
                type:GET_PURCHASE_ORDER_LIST,
                payload:res.data
    
            })
        })
    }


    export const handleSearchFilterByAlpha = (data, data1)=>{
        //   if()
          return{
              type:FILTER_DATA_BY_SEARCH_SN_PO,
              searchDataPO:data
          }
      }
      export const handleAplhabetFilterBySN = (data, data1)=>{
        //   if()
          return{
              type:FILTER_DATA_BY_ALPHABETIC_PO,
              alphaDataPO:data
          }
      }


      export const setPageNumberPo = (pageNumber) => {
        return{
              type:SET_PAGE_NUMBER_PO,
              pageNumber:pageNumber,
          }
      
      }
