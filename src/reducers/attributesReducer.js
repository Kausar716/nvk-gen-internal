// import {v4 as v4} from 'uuid';
import {
    GET_ALL_ATTRIBUtTES,
    GET_ALL_SUB_ATTRIBUtTES,
    HANDLE_DRAG_ATTRIBUTE_CATEGORY,
    HANDLE_DELETE_ATTRIBUTE,
    HANDLE_ZONE_INPUT_ACTION,
    HANDLE_ADD_ZONE_ATTRIBUTE,
    HANDLE_POSITION_INPUT_ACTION,
    HANDLE_ADD_POSITION_ATTRIBUTE

} from '../actions/types';
// import {getAllImageAssets} from "../";

const initialSatate = {
    allAttributes:{},
    subAttribute:[],
    subAttributeName:{
        zone:"",
        bloomColor:"",
        volume:"",
        reason:"",
        formName:"",
        formSku:"",
        caliperName:"",
        caliperImperial:"",
        caliperSku:"",
        heightName:"",
        heightImperial:"",
        heightSku:"",
        packagingName:"",
        packagingSku:"",
        characterSectionName:"",
        characterFeatureName:""



    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialSatate, action){
console.log(action)

switch(action.type){
    // plant page redirects
    case GET_ALL_ATTRIBUtTES:
        return{
            ...state,
            allAttributes:[...action.payload.data.active,...action.payload.data.inactive]
        }
    case GET_ALL_SUB_ATTRIBUtTES:{
        console.log(action.payload.data[0].subattributes)
        return{
             ...state,
            subAttribute:action.payload.data[0].subattributes
       }
    }
    case HANDLE_DRAG_ATTRIBUTE_CATEGORY:
        return{
            ...state
        
    }
    case HANDLE_DELETE_ATTRIBUTE:
        return{
            ...state
        }
    case HANDLE_ZONE_INPUT_ACTION:
        return{
            ...state,
            subAttributeName:{...state.subAttributeName,[action.name]:action.value}
        }
    case HANDLE_ADD_ZONE_ATTRIBUTE:
        return{
            ...state
        }
    case HANDLE_POSITION_INPUT_ACTION:
        return{
            ...state,
            subAttributeName:{...state.subAttributeName,[action.name]:action.value}
        }
    case HANDLE_ADD_POSITION_ATTRIBUTE:
        return{
            ...state
        }
     default:
            return state
}

}