import {GET_PURCHASE_ORDER_LIST,
    PO_SET_PAGE_NUMBER,
    PO_SET_ALPHABET_SELECTED,
    HANDLE_PURCHASE_ORDER_FILTER,
    ADD_PURCHASE_ORDER,
    SET_SUPPLIER_TO_ADD_PO,
    HANDLE_ORDERDETAILS_INPUT,
    ERROR_HANDLE
} from '../actions/types';




const initialSatate = {
   
    purchaseOrderList:[],
    purchaseOrderListBackup:[],
    productPageNumber   :   0,
    pageNumber          :   0,
    needAction          :   false,
    selectedAlphabet: "All",
    openPoCount:0,
    statusLevel:{open:0,draft:0,closed:0,cancelled:0},
    selectedSupplier:null,
    pageToOpen:"add",
    poData:{
        supplier_id:"",
        order_id:"",
        discount_type:null,
        discount_percent:null,
        job_description:null,
        include_royality:null,
        order_notes:null,
        dispatch_type:null,
        currency:null,
        supplier_order:null
    }

} 
const filterBasedOnAlphabet = (poList,selectedAlphabet,statusLevel)=>{
    console.log(selectedAlphabet)
    if(selectedAlphabet !== "All"&& selectedAlphabet !="")
    return poList.filter(po=>po.supplier_name.charAt(0).toLocaleLowerCase() === selectedAlphabet.toLocaleLowerCase())
    else
    return poList
}
const filterBsedOnCheckBox =(filteredData,statusLevel)=>{
    if(statusLevel.open === 0 && statusLevel.draft===0&& statusLevel.closed===0&& statusLevel.cancelled === 0) 
    return filteredData
    else{
  return filteredData.filter(po=>
        ((statusLevel.open===1?po.p_o_status==="open":false) ||(statusLevel.draft===1?po.p_o_status==="draft":false)||
        (statusLevel.closed===1?po.p_o_status==="closed":false) || (statusLevel.cancelled===1?po.p_o_status==="cancelled":false))
      )
  }
    
}
const getOpenPoCount = (poList)=>{
    if(poList)
    return poList.filter(po=>po.p_o_status === "open").length
    else return 0
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
                case SET_SUPPLIER_TO_ADD_PO:
                    return{
                        ...state,
                        selectedSupplier:action.supplier,
                        poData:{['supplier_id']:action.supplier.id},
                    }
                case HANDLE_ORDERDETAILS_INPUT:
                    return{
                            ...state,
                            poData:{...state.poData, [action.itemId]:action.itemValue},
                        
                    }
                case PO_SET_ALPHABET_SELECTED:

                    let poListForAlphabetSelected = filterBasedOnAlphabet(state.purchaseOrderListBackup,action.selectedAlphabet)
                    console.log(poListForAlphabetSelected)
                    return{
                        ...state,
                        selectedAlphabet:action.selectedAlphabet,
                        purchaseOrderList:poListForAlphabetSelected,
                        openPoCount:getOpenPoCount(poListForAlphabetSelected)
                    }
                case HANDLE_PURCHASE_ORDER_FILTER:
                    console.log(action)
                    let poListForAlphabetFilter = filterBasedOnAlphabet(state.purchaseOrderListBackup,state.selectedAlphabet,state.statusLevel)
                    let poListForcheckBoxSelected = filterBsedOnCheckBox(poListForAlphabetFilter,state.statusLevel)

                    return{
                        ...state,
                        statusLevel:action.statusLevel,
                        purchaseOrderList:poListForcheckBoxSelected
                    }
                case ADD_PURCHASE_ORDER:
                    return{
                        ...state,
                        pO:action
                    }
                    case ERROR_HANDLE:
                        return{
                            ...state,
                            status:action.status,
                            message:action.message
                        }
               default :
            return{
                ...state
            }
            }
            
        }