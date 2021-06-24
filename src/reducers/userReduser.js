import {
    GET_USERS_LIST,
    ADD_USER,   
    SHOW_USER, 
    UPDATE_USER,
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
                user:state.users.filter(user=>user.id === action.payload)
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

            default:
                return state
    }

}
export default userReduser