import {
    GET_LOCATION_LIST,
    GET_Plant_CATEGORY_LIST, 
    GETSUPPLIER_LIST,
   } from '../actions/types';


const initialSatate = {
 locationList:[],
 locationListBackup:[],
 plantCategoryList:[],
 plantCategoryListBackup:[]
}

const inventoryManagementReducer = (state = initialSatate, action)=> {

    switch(action.type){
        
        case GET_LOCATION_LIST:
            return{
                ...state,
                locationList:action.payload,
                locationListBackup:action.payload              
            }
        case GET_Plant_CATEGORY_LIST:
            return{
                ...state,
                plantCategoryList:action.payload,
                plantCategoryListBackup:action.payload              
            }
    
            default:
                return state
    }

}
export default inventoryManagementReducer


