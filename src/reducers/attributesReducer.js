// import {v4 as v4} from 'uuid';
import {
    //Plant ACTION
    // CREATE_PLANT_ACTION,
    // UPDATE_PLANT_ACTION,
    // DELETE_PLANT_ACTION,
    // GET_ALL_PLANT_ACTION,
    // GET_SPECIFIED_PLANT_ACTION,
    // DUPLICTE_PLANT,

    // // Plant SKU ACTION
    // CREATE_PLANT_SKU_ACTION,
    // UPDATE_PLANT_SKU_ACTION,
    // DELETE_PLANT_SKU_ACTION,
    // GET_ALL_PLANT_SKU_ACTION,
    // GET__PLANT_SPECIFIED_SKU_ACTION,

    // //Plant page redirects action

    // PAGE_PLANT_REDIRECT_ACTION,
    // SUB_PLANT_PAGE_REDIRECT_ACTION,

    // // Plant INPUT HANDLE
    // HANDLE_PLANT_INPUT_DATA,
    // HANDLE_PLANT_TAG_INPUT_DATA,
    // HANDLE_PLANT_SKU_INPUT_DATA,

    // // pagination
    // SET_PLANT_PAGE_NUMBER,


    // //ERROR_HANDLE
    // ERROR_HANDLE,

    GET_ALL_ATTRIBUtTES

} from '../actions/types';
// import {getAllImageAssets} from "../";

const initialSatate = {
    allAttributes:{}
}

export default function(state = initialSatate, action){
console.log(action)

switch(action.type){
    // plant page redirects
    case GET_ALL_ATTRIBUtTES:
        return{
            ...state,
            allAttributes:[...action.payload.data.active,...action.payload.data.inactive]
        }
        default:
            return state
}

}