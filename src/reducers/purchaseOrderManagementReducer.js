import {GET_PURCHASE_ORDER_LIST,
    PO_SET_PAGE_NUMBER,
    PO_SET_ALPHABET_SELECTED
} from '../actions/types';




const initialSatate = {
   
    purchaseOrderList:[],
    purchaseOrderListBackup:[],
    productPageNumber   :   0,
    pageNumber          :   0,
    needAction          :   false,
    selectedAlphabet: "All",
    openPoCount:0
} 
const filterBasedOnAlphabet = (poList,selectedAlphabet)=>{
    console.log(selectedAlphabet)
    if(selectedAlphabet !== "All"&& selectedAlphabet !="")
    return poList.filter(po=>po.supplier_name.charAt(0).toLocaleLowerCase() === selectedAlphabet.toLocaleLowerCase())
    else
    return poList
}
const getOpenPoCount = (poList)=>{
    return poList.filter(po=>po.p_o_status === "open").length
}

export default  function purchaseOrderManagement(state = initialSatate, action){

       switch(action.type){
           // page action
           case GET_PURCHASE_ORDER_LIST:
                let poList = filterBasedOnAlphabet(action.payload,state.selectedAlphabet)
               return{
                   ...state,
                   purchaseOrderList:poList,
                   purchaseOrderListBackup:action.payload,
                   openPoCount:getOpenPoCount(poList)
               }
               case PO_SET_PAGE_NUMBER:
                return{
                    ...state,
                    pageNumber:action.pageNumber
                }
                case PO_SET_ALPHABET_SELECTED:

                    let poListForAlphabetSelected = filterBasedOnAlphabet(state.purchaseOrderListBackup,action.selectedAlphabet)
                    
                    return{
                        ...state,
                        selectedAlphabet:action.selectedAlphabet,
                        purchaseOrderList:poListForAlphabetSelected,
                        openPoCount:getOpenPoCount(poListForAlphabetSelected)
                    }
               default :
            return{
                ...state
            }
            }
            
        }