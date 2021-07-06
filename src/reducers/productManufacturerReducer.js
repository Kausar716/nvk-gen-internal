// import {v4 as uuidv4} from 'uuid';
import {   
    ///Product Manufacture Action
    GET_ALL_PRODUCT_MANUFACTURES,
    HANDLE_PRODUCT_MANUFACTURE_INPUT_DATA,
    HANDLE_ADD_PRODUCT_MANUFACTURE,
    HANDLE_DRAG_PRODUCT_MANUFACTURE,
    HANDLE_PRODUCT_MANUFACTURE_DELETE

} from '../actions/types';


const initialSatate = {
    productManufacturerData:[],
    name:"",
    status:""  
    
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialSatate, action){
    console.log(action)
   
    switch(action.type){
        case GET_ALL_PRODUCT_MANUFACTURES:
            return{
                ...state,
                productManufacturerData:[...action.payload.data.active,...action.payload.data.inactive],
                name:""

            }
            default:
                return state
        case HANDLE_PRODUCT_MANUFACTURE_INPUT_DATA:
            return{
                ...state,
                name:action.name,
                             
            }
        case HANDLE_ADD_PRODUCT_MANUFACTURE:
            return{
                ...state
            }

        case HANDLE_DRAG_PRODUCT_MANUFACTURE:
            return{
                ...state
            }
        case HANDLE_PRODUCT_MANUFACTURE_DELETE:
            return{
                ...state
            }
    }
 
        
}