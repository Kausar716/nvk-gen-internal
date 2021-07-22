/* eslint-disable no-case-declarations */
import {
    ADD_SUPPLIER,
    // ADD_SUPPLIER_DELIVERY_LOCATION,
    // ADD_SUPPLIER_CONTACT ,
    // ADD_SUPPLIER_CATEGORY, 
    // CREATE_SUPPLIER_ADDRESS,
    // ADD_SUPPLIER_REASON, 
   
    GET_ALL_SUPPLIER ,
    // GET_ALL_SUPPLIER_ADDRESS,
    // GET_ALL_SUPPLIER_CONTACT ,
    // GET_ALL_SUPPLIER_DELIVERY_LOCATION, 
    // GET_ALL_SUPPLIER_CATEGORIES,
    // GET_ALL_SUPPLIER_REASONS, 
    // GET_SPECIFIED_SUPPLIER_DELIVERY_LOCATION ,
    // GET_SPECIFIED_SUPPLIER_REASON, 
    // GET_SPECIFIED_SUPPLIER_ADDRESS,
    // GET_SPECIFIED_SUPPLIER_CONTACT,
    // GET_SPECIFIED_SUPPLIER ,
    // GET_SPECIFIED_SUPPLIER_CATEGORY, 
   
    // UPDATE_SUPPLIER ,
     UPDATE_SUPPLIER_REASON ,
    // UPDATE_SUPPLIER_ADDRESS,
    // UPDATE_SUPPLIER_CONTACT,
    // UPDATE_SUPPLIER_DELIVERY_LOCATION, 
    // UPDATE_DELIVERY_CATEGORY,
   
    // DELETE_SUPPLIER ,
    // DELETE_SUPPLIER_REASON, 
    // DELETE_SUPPLIER_ADDRESS ,
    // DELETE_SUPPLIER_DELIVERY_LOCATION,
    // DELETE_SUPPLIER_CONTACT,
    // DELETE_SUPPLIER_CATEGORY,
   
    // REMOVE_SUPPLIER_REASON_FROM_ACTIVE_TO_INACTIVE ,
    // REMOVE_SUPPLIER_REASON_FROM_INACTIVE_TO_ACTIVE, 
    // ADD_ALL_SUPPLIER_REASON_FROM_INACTIVE_ACTIVE, 

    FETCH_SUPPLIER_ERROR,
    FETCH_SUPPLIER_LOADING,
    FETCH_SUPPLIER_SUCCESS,




 GET_SUPPLIER_LIST ,
 SET_SUPPLIER_PAGE_NUMBER,
 FILTER_SUPPLIER_DATA_BY_RADIO ,
 FILTER_SUPPLIER_BY_SEARCH,
FILTER_SUPPLIER_BY_ALPHA,
ADD_FINANCES_SUPPLIER_DATA,
HANDLE_SUPPLIER_INPUT_EXCHANGE,
ADD_SUPPLIER_ACCOUNTS,
GET_SUPPLIER_ACCOUNTS,
GET_SUPPLIER_CATEGORY,
ADD_SUPPLIER_CATEGORY,
ADD_SUPPLIER_LOCATION,
GET_SUPPLIER_LOCATION,
GET_EXCHANGE_SUPPLIER_DATA,
SHOW_SPECIFIC_SUPPLIER_REASON,
HANDLE_REASON_INPUT_ACTION,
SHOW_SPECIFIC_SUPPLIER_CATEGORY,
UPDATE_SUPPLIER_CATEGORY,

    // EDIT_SUPPLIER_ERROR,
    // EDIT_SUPPLIER_SUCCESS,

    // DELETE_SUPPLIER_ERROR,
    // DELETE_SUPPLIER_SUCCESS,



    // config,
    // axios,

} from '../actions/types';






const defaultState={
    supplierInfo:[],
    specificSubAttribute:[],
    supplierCategoryList:[],
    specificCategorySubAttribute:[],
    error:null,
    subAttributeName:{},
    isLoading:false,
    supplierList:[],
    pageNumber:0,
    searchFilter:"",
    radioFilter:"active",
    alphabetSearch:"All",
    inactiveData:[],
    activeData:[],
    supplierExchange:{
        from_currency:"CAD",
        to_currency:"US",
        exchange_rate:0,
        exchange_date:new Date().getFullYear()+"-"+(new Date().getMonth().toString().length===1?"0"+(new Date().getMonth()+1):new Date().getMonth())+"-"
        +(new Date().getDate().toString().length===1?"0"+(new Date().getDate()):new Date().getDate())

    },
    supplierReason:{
        reason:""
    },
    supplierReasonList:{
        active:[],
        inactive:[]
    },
    supplierCategory:{
        category:""

    },
    supplierCategoryList:{
        active:[],
        inactive:[]

    },
    supplierLocation:{
        location: "",
        address: "",
        city: "",
        state: "Select State",
        country: "Select Country" ,
        zip: "",
        lat: "",
        long: "",
    },
    supplierLocationList:{
        active:[],
        inactive:[]

    }
};

const supplierManagementReducer =(state=defaultState, action)=>{
    console.log(action.payload)
        switch(action.type){
            case GET_EXCHANGE_SUPPLIER_DATA:
                return{
                    ...state,
                    supplierExchange:action.payload.data

                }

            case GET_SUPPLIER_LOCATION:
                return{
                    ...state,
                    supplierLocationList:action.payload.data

                }
                case ADD_SUPPLIER_LOCATION:
                    return{
                        ...state,
                        supplierLocation:{
                            location: "",
                            address: "",
                            city: "",
                            state: "",
                            country: "",
                            zip: "",
                            lat: "",
                            long: "",
                        }
                        
                        
                    }

            case GET_SUPPLIER_CATEGORY:
                return{
                    ...state,
                    supplierCategoryList:action.payload.data
                   


                }
            case ADD_SUPPLIER_CATEGORY:
                return{
                    ...state,
                    supplierCategory:{
                        category:""
                
                    }

                }

            case ADD_SUPPLIER_ACCOUNTS:
                return{
                    ...state,
                    supplierReason:{
                        reason:""
                    }



                }
            case GET_SUPPLIER_ACCOUNTS:
                return{
                    ...state,
                    supplierReasonList:action.payload.data
                }

                case UPDATE_SUPPLIER_REASON:
                    return{
                        ...state,
                        supplierReasonList:action.payload.data
                    }

                    case UPDATE_SUPPLIER_CATEGORY:
                        return{
                            ...state,
                            supplierCategoryList:action.payload.data
                        }

                    case SHOW_SPECIFIC_SUPPLIER_REASON:{
                        // debugger;
                         //console.log(action.payload.data[0].subattributes)UPDATE_SUPPLIER_CATEGORY
                         return{
                              ...state,
                             specificSubAttribute:action.payload.data
                        }
                     }


                     case SHOW_SPECIFIC_SUPPLIER_CATEGORY:{
                        // debugger;
                         //console.log(action.payload.data[0].subattributes)
                         return{
                              ...state,
                             specificCategorySubAttribute:action.payload.data
                        }
                     }

                     case HANDLE_REASON_INPUT_ACTION:
                        return{
                            ...state,
                            subAttributeName:{...state.subAttributeName,[action.name]:action.value}
                        }
            // switch(action.type){UPDATE_SUPPLIER_REASON
      

                // plant page redirects
                case ADD_FINANCES_SUPPLIER_DATA:
                    return{
                        ...state,
                        supplierExchange:{...action.payload.data}
                    }
                    case HANDLE_SUPPLIER_INPUT_EXCHANGE:
                        return{
                            ...state,
                            [action.dataType]:{...state[action.dataType],[action.id]:action.data}
                    
                        }
                case GET_SUPPLIER_LIST :
                    return{
                        ...state,
                        supplierList:[...action.payload.data.active],
                        inactiveData:[...action.payload.data.inactive],
                        duplicateData:[...action.payload.data.active,...action.payload.data.inactive],
                        activeData:[...action.payload.data.active]         
                    }
                    case SET_SUPPLIER_PAGE_NUMBER:
                        return{
                            ...state,
                            pageNumber:action.pageNumber
                        }
                    case FILTER_SUPPLIER_BY_SEARCH:
                        let datatoShow = []
                        let searchedData = []
                        if(state.radioFilter === "active") datatoShow = state.activeData
                        else if(state.radioFilter === "inactive") datatoShow = state.inactiveData
                        else datatoShow = state.duplicateData
        
                        if(state.alphabetSearch ==="All" && action.searchData !=="")searchedData = datatoShow.filter(filterData=>filterData.supplier_name.toLowerCase().includes(action.searchData.toLowerCase()))
                        else if(action.searchData !=="" && state.alphabetSearch !=="All") searchedData = datatoShow.filter(filterData=>(filterData.supplier_name.toLowerCase().charAt(0)===state.alphabetSearch.toLowerCase().charAt(0)) &&(filterData.supplier_name.toLowerCase().charAt(0)===action.searchData.toLowerCase().charAt(0)))
                        else if(action.searchData  ==="" && state.alphabetSearch !=="All") searchedData = datatoShow.filter(filterData=>filterData.supplier_name.toLowerCase().charAt(0)===state.alphabetSearch.toLowerCase().charAt(0))
                        else if(action.searchData  ==="" && state.alphabetSearch  ==="All") searchedData = datatoShow
        
                        
        
                        return{
                            ...state,
                            supplierList:searchedData,
                            searchFilter:action.searchData
                        }
                    case FILTER_SUPPLIER_DATA_BY_RADIO:
                        let radioData = []
                        if(action.actionType === "active") radioData = state.activeData
                        if(action.actionType === "inactive") radioData = state.inactiveData
                        if(action.actionType === "all") radioData = state.duplicateData
                    return{
                        ...state,
                        supplierList:radioData,
                        radioFilter:action.actionType
        
                    }
                    case FILTER_SUPPLIER_BY_ALPHA:
                        let datatoShow1 = []
                        let searchedData1 = []
                        if(state.radioFilter === "active") datatoShow1 = state.activeData
                        else if(state.radioFilter === "inactive") datatoShow1 = state.inactiveData
                        else datatoShow1 = state.duplicateData
        
                        if(state.searchFilter ==="" && action.alphaData !=="All") searchedData1 = datatoShow1.filter(filterData=>filterData.supplier_name.toLowerCase().charAt(0)===action.alphaData.toLowerCase().charAt(0))
                        else if(state.searchFilter !=="" && action.alphaData ==="All")searchedData1 = datatoShow1.filter(filterData=>(filterData.supplier_name.toLowerCase().charAt(0)===state.searchFilter.toLowerCase().charAt(0)))
                        // else if(action.alphaData ==="All" && state.searchFilter !=="")searchedData1 = datatoShow1.filter(filterData=>(filterData.supplier_name.toLowerCase().charAt(0)===state.searchFilter.toLowerCase().charAt(0)))
                        else if(state.searchFilter !=="" && action.alphaData !=="All")searchedData1 = datatoShow1.filter(filterData=>(filterData.supplier_name.toLowerCase().charAt(0)===action.alphaData.toLowerCase().charAt(0)) &&(filterData.supplier_name.toLowerCase().charAt(0)===state.searchFilter.toLowerCase().charAt(0)))
                        else if(state.searchFilter ==="" && action.alphaData ==="All")searchedData1 = datatoShow1
                       
        
                        return{
                            ...state,
                            supplierList:searchedData1,
                            alphabetSearch:action.alphaData
                        }
        
            


















            case FETCH_SUPPLIER_SUCCESS:
                return {...state, supplierInfo:action.payload}

            case FETCH_SUPPLIER_LOADING:
                return {...state, isLoading:action.payload};


            case FETCH_SUPPLIER_ERROR:
                return {...state, error:action.payload};

            case GET_ALL_SUPPLIER:
                return {...state, supplierInfo:action.payload};
                    

            case ADD_SUPPLIER:
                const suppliers = state.suppliers.concat(action.payload);
                return {...state, suppliers}

            default:
                return state;

        }
       
}

export default supplierManagementReducer;