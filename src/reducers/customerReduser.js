
import {
    GET_CUSTOMER_LIST,
    SET_PAGE_NUMBER,
    HANDLE_ALL_FILTER,
    FILTER_DATA_BY_RADIO,
    FILTER_DATA_BY_SEARCH,
    FILTER_DATA_BY_ALPHA,
    HANDLE_INPUT
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
   ready_to_late_notice:"",
   reserve_expiry_notice:""
   
//    filterData:[]
  }

 const customerReducer = (state = initialSatate, action)=>{
    console.log(action)
    console.log(state)
    // alert(action.type)x
    
    switch(action.type){
      

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