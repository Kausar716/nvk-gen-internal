import {UPDATE_PATH,GET_PATH} from '../actions/types';
// import {v4 as uuidv4} from 'uuid';
// // import getAllImageAssets from '../components/Utility/Utility'



const initialSatate = {
 path:"Dashboard"
}



const sideReducer =(state=initialSatate, action)=>{
    switch(action.type){
        case GET_PATH:
            return {...state, path:action.payload}
        case UPDATE_PATH:
             return {...state, path:action.payload}
        default:return state

    }
}


export default sideReducer