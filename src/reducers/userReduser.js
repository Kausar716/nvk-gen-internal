import {
    GET_USERS_LIST,
    ADD_USER,   
    SHOW_USER, 
    UPDATE_USER,
    UPLOAD_USER_IMAGE,
    REMOVE_USER_IMAGE,
    DELETE_USER 
   } from '../actions/types';

const initialSatate = {
    users:[]
}
 const userReduser = (state = initialSatate, action)=> {
     console.log(action)
    
    switch(action.type){
        
        case GET_USERS_LIST:
            return{
                ...state,
                users:action              
            }
        case SHOW_USER:
            
            return{
                ...state,
                user:action.payload
            }
        case UPDATE_USER:{
            return {
                ...state,
                users:action 
            }
        }
        case ADD_USER:{
            return{
                ...state,
                users:action              
            }
        }
        case UPLOAD_USER_IMAGE:{
            return{
                ...state,
                user:action
            }
        }
        case REMOVE_USER_IMAGE:{
            return{
                ...state,
                removedData:action
            }
        }

            default:
                return state
    }

}
export default userReduser