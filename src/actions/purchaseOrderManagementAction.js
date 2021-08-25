import {
    GET_PURCHASE_ORDER_LIST,
    axios,
    config,
    PO_PAGE_REDIRECT_ACTION,
    PO_SUB_PAGE_REDIRECT_ACTION,
    PO_SET_PAGE_NUMBER,
    PO_SET_ALPHABET_SELECTED
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
      