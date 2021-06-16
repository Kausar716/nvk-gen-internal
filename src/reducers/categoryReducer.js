// import {v4 as uuidv4} from 'uuid';
import {   
    //PRODUCT CATEGORY ACTION

    GET_ALL_PRODUCT_CATEGORIES_ACTION,
    GET_ALL_PRODUCT_SUB_CATEGORIES_ACTION,

    //manufacture action
    GET_ALL_MANUFACTURE_ACTON,



    // GET_ALL_PLANT_CATEGORIES
    GET_ALL_PLANT_CATEGORIES

} from '../actions/types';


const initialSatate = {
    categoryData:[],
    subCategoryData:[],
    manufactureData:[],
    plantCategoryData:[]
}


export default function(state = initialSatate, action){
    console.log(action)
   
    switch(action.type){

        //category data
        case GET_ALL_PRODUCT_CATEGORIES_ACTION:
            return{
                ...state,
                categoryData:[...action.payload.data.active,...action.payload.data.inactive]
            }

           //sub category data
        case GET_ALL_PRODUCT_SUB_CATEGORIES_ACTION:
            return{
                ...state,
                subCategoryData:[...action.payload.data.active,...action.payload.data.inactive]
            }

        // manufacture data
        case GET_ALL_MANUFACTURE_ACTON:
            return{
                ...state,
                manufactureData:[...action.payload.data.active,...action.payload.data.inactive]

            }
            default:
                return state
        case GET_ALL_PLANT_CATEGORIES:
            return{
                ...state,
                plantCategoryData:[...action.payload.data.active,...action.payload.data.inactive]

            }
    }
 
        
}