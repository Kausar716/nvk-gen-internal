
import {
    GET_CUSTOMER_LIST,
    SET_PAGE_NUMBER,
    HANDLE_ALL_FILTER,
    HANDLE_INPUT_EXCHANGE,
    FILTER_DATA_BY_RADIO,
    FILTER_DATA_BY_SEARCH,
    FILTER_DATA_BY_ALPHA,
    HANDLE_INPUT,
    ADD_NOTIFICATION,
    ADD_EMAIL,
    GET_CUSTOMER_NOTIFICATION,
    GET_EMAIL_NOTIFICATION,
    ADD_FINANCES_DATA,
    ADD_INTEREST_DATA,
    ADD_PRINT_DATA,
    ADD_CUSTOMER_TYPE,
    GET_ALL_CUSTOMER_TYPES,
    HANDLE_DRAG_CUSTOMER_CATEGORY

    
    // ADD_CUSTOMER, 
    // SHOW_CUSTOER, 
    // UPDATE_CUSTOMER,
    // DELETE_CUSTOMER 
    } from '../actions/types'
   

const initialSatate = {
   customerList:[],
   pageNumber:0,
   duplicateData:[],
   activeData:[],
   inactiveData:[],
   radioFilter:"active",
   searchFilter:"",
   alphabetSearch:"All",
   ready_to_late_notice:0,
   reserve_expiry_notice:0,
   first_notice:0,
   second_notice:0,
   quote_set_to_inactive:0,
   customerExchange:{
    from_currency:"CAD",
    to_currency:"US",
    exchange_rate:0,
    exchange_date:new Date()

   },
   customerIntrest:{

    monthly: 0,
    yearly: 0,
    taxrate: 0,
    taxrate_label: "",
    taxrate_number: ""
   },
   customerTag:{
    base_price: 0,
    custom_logo: 0,
    custom_pricing: 0,
    custom_application: 0,
   }
   ,customerTypes:{
    customer_type:"",
    short_code:""
   },
   customerdelivery:{delivery_method:""},
   customerTypeList:{active:[],inactive:[]}
  }

 const customerReducer = (state = initialSatate, action)=>{
    console.log(action)
    console.log(state)
    // alert(action.type)x
    
    switch(action.type){
        case HANDLE_DRAG_CUSTOMER_CATEGORY:
            return{
                ...state
            }
        case GET_ALL_CUSTOMER_TYPES:
            return{
                ...state,
                customerTypeList:action.payload.data

            }
        case ADD_CUSTOMER_TYPE :
            return{
                ...state,
                customerTypes:{customer_type:"",
                short_code:""}
                
            }
        case ADD_PRINT_DATA:
            return{
                ...state,
                customerTag:{...action.payload.data}

            }
        case ADD_INTEREST_DATA:
            return{
                ...state,
                customerIntrest:{...action.payload.data}

            }
      
        case ADD_FINANCES_DATA:
            let date = action.payload.data.exchange_date.split("-")
            let dateInformate = new Date(date[0],date[1]-1,date[2])
            return{
                ...state,
                customerExchange:{...action.payload.data,"exchange_date":dateInformate}

            }
        case HANDLE_INPUT_EXCHANGE:
            return{
                ...state,
                [action.dataType]:{...state[action.dataType],[action.id]:action.data}

            }
        case ADD_EMAIL:
            return{
                ...state,
                first_notice:action.payload.data.first_notice,
                second_notice:action.payload.data.second_notice,
                quote_set_to_inactive:action.payload.data.quote_set_to_inactive
               

            }
            case GET_EMAIL_NOTIFICATION:
            return{
                ...state,
                first_notice:action.payload.data.active[0].first_notice,
                second_notice:action.payload.data.active[0].second_notice,
                quote_set_to_inactive:action.payload.data.active[0].quote_set_to_inactive
               

            }
        case GET_CUSTOMER_NOTIFICATION:
            return{
                ...state,
                ready_to_late_notice:action.payload.data.active[0].ready_to_late_notice,
                reserve_expiry_notice:action.payload.data.active[0].reserve_expiry_notice

            }
        case ADD_NOTIFICATION:
            return{
                ...state,
                ready_to_late_notice:action.payload.data.ready_to_late_notice,
                reserve_expiry_notice:action.payload.data.reserve_expiry_notice

            }

        // plant page redirects
        case HANDLE_INPUT:
            return{
                ...state,
                [action.id]:action.data

            }
     

        case GET_CUSTOMER_LIST :
            return{
                ...state,
                customerList:[...action.payload.data.active],
                inactiveData:[...action.payload.data.inactive],
                duplicateData:[...action.payload.data.active,...action.payload.data.inactive],
                activeData:[...action.payload.data.active]         
            }
            case SET_PAGE_NUMBER:
                return{
                    ...state,
                    pageNumber:action.pageNumber
                }
            case FILTER_DATA_BY_SEARCH:
                let datatoShow = []
                let searchedData = []
                if(state.radioFilter === "active") datatoShow = state.activeData
                else if(state.radioFilter === "inactive") datatoShow = state.inactiveData
                else datatoShow = state.duplicateData

                if(state.alphabetSearch ==="All" && action.searchData !=="")searchedData = datatoShow.filter(filterData=>filterData.name.toLowerCase().includes(action.searchData.toLowerCase()))
                else if(action.searchData !=="" && state.alphabetSearch !=="All") searchedData = datatoShow.filter(filterData=>(filterData.name.toLowerCase().charAt(0)===state.alphabetSearch.toLowerCase().charAt(0)) &&(filterData.name.toLowerCase().charAt(0)===action.searchData.toLowerCase().charAt(0)))
                else if(action.searchData  ==="" && state.alphabetSearch !=="All") searchedData = datatoShow.filter(filterData=>filterData.name.toLowerCase().charAt(0)===state.alphabetSearch.toLowerCase().charAt(0))
                else if(action.searchData  ==="" && state.alphabetSearch  ==="All") searchedData = datatoShow

                

                return{
                    ...state,
                    customerList:searchedData,
                    searchFilter:action.searchData
                }
            case FILTER_DATA_BY_RADIO:
                let radioData = []
                // alert(action.actionType)
                if(action.actionType === "active" && state.searchFilter ==="" && state.alphabetSearch ==="All")radioData = state.activeData
                else if(action.actionType === "active" && state.searchFilter !=="" && state.alphabetSearch ==="All")radioData =state.activeData.filter(data=>data.name.toLowerCase().includes(state.searchFilter.toLowerCase()))
                else if(action.actionType === "active" && state.searchFilter ==="" && state.alphabetSearch !=="All")radioData =state.activeData.filter(filterData=>(filterData.name.toLowerCase().charAt(0)=== state.alphabetSearch.toLowerCase()))

                else if(action.actionType === "active" && state.searchFilter !=="" && state.alphabetSearch !=="All")radioData = state.activeData.filter(filterData=>(filterData.name.toLowerCase().charAt(0)===state.alphabetSearch.toLowerCase().charAt(0)) &&(filterData.name.toLowerCase().charAt(0)===state.searchFilter.toLowerCase().charAt(0)))
                    ////////////////////////////////
                    if(action.actionType === "inactive" && state.searchFilter ==="" && state.alphabetSearch ==="All") radioData = state.inactiveData
                    else if(action.actionType === "inactive" && state.searchFilter !=="" && state.alphabetSearch ==="All")radioData =state.inactiveData.filter(data=>data.name.toLowerCase().includes(state.searchFilter.toLowerCase()))
    
                    else if(action.actionType === "inactive" && state.searchFilter ==="" && state.alphabetSearch !=="All")radioData =state.inactiveData.filter(filterData=>(filterData.name.toLowerCase().charAt(0)=== state.alphabetSearch.toLowerCase()))
    
                    else if(action.actionType === "inactive" && state.searchFilter !=="" && state.alphabetSearch !=="All")radioData = state.inactiveData.filter(filterData=>(filterData.name.toLowerCase().charAt(0)===state.alphabetSearch.toLowerCase().charAt(0)) &&(filterData.name.toLowerCase().charAt(0)===state.searchFilter.toLowerCase().charAt(0)))

                    ////////////////////////////////
                    if(action.actionType === "all" && state.searchFilter ==="" && state.alphabetSearch ==="All") radioData = state.duplicateData
                    else if(action.actionType === "all" && state.searchFilter !=="" && state.alphabetSearch ==="All")radioData =state.duplicateData.filter(data=>data.name.toLowerCase().includes(state.searchFilter.toLowerCase()))
                    else if(action.actionType === "all" && state.searchFilter ==="" && state.alphabetSearch !=="All")radioData =state.duplicateData.filter(filterData=>(filterData.name.toLowerCase().charAt(0)=== state.alphabetSearch.toLowerCase()))
                    else if(action.actionType === "all" && state.searchFilter !=="" && state.alphabetSearch !=="All")radioData = state.duplicateData.filter(filterData=>(filterData.name.toLowerCase().charAt(0)===state.alphabetSearch.toLowerCase().charAt(0)) &&(filterData.name.toLowerCase().charAt(0)===state.searchFilter.toLowerCase().charAt(0)))
            return{
                ...state,
                customerList:radioData,
                radioFilter:action.actionType

            }
            case FILTER_DATA_BY_ALPHA:
                let datatoShow1 = []
                let searchedData1 = []
                if(state.radioFilter === "active") datatoShow1 = state.activeData
                else if(state.radioFilter === "inactive") datatoShow1 = state.inactiveData
                else datatoShow1 = state.duplicateData

                if(state.searchFilter ==="" && action.alphaData !=="All") searchedData1 = datatoShow1.filter(filterData=>filterData.name.toLowerCase().charAt(0)===action.alphaData.toLowerCase().charAt(0))
                else if(state.searchFilter !=="" && action.alphaData ==="All")searchedData1 = datatoShow1.filter(filterData=>(filterData.name.toLowerCase().charAt(0)===state.searchFilter.toLowerCase().charAt(0)))
                // else if(action.alphaData ==="All" && state.searchFilter !=="")searchedData1 = datatoShow1.filter(filterData=>(filterData.name.toLowerCase().charAt(0)===state.searchFilter.toLowerCase().charAt(0)))
                else if(state.searchFilter !=="" && action.alphaData !=="All")searchedData1 = datatoShow1.filter(filterData=>(filterData.name.toLowerCase().charAt(0)===action.alphaData.toLowerCase().charAt(0)) &&(filterData.name.toLowerCase().charAt(0)===state.searchFilter.toLowerCase().charAt(0)))
                else if(state.searchFilter ==="" && action.alphaData ==="All")searchedData1 = datatoShow1
               

                return{
                    ...state,
                    customerList:searchedData1,
                    alphabetSearch:action.alphaData
                }
    
        default:
                return state
    }

}
export default customerReducer