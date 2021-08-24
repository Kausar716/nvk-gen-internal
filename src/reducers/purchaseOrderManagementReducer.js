import {GET_PURCHASE_ORDER_LIST} from '../actions/types';




const initialSatate = {
   
    purchaseOrderList:[],
    purchaseOrderListBackup:[]
} 

export default  function purchaseOrderManagement(state = initialSatate, action){
    console.log(action.payload)
       switch(action.type){
           // page action
           case GET_PURCHASE_ORDER_LIST:
               return{
                   ...state,
                   purchaseOrderList:action.payload
               }
               default :
            return{
                ...state
            }
            }
            
        }