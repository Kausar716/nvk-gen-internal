import {
    GET_ROLES_LIST,
    SHOW_ROLE,   
    UPDATE_ROLE,
    DELETE_ROLE,
    ADD_ROLE 
   } from '../actions/types';

const initialSatate = {
    users:[]
}
 const userAccessReduser = (state = initialSatate, action)=> {
     console.log(action)
    
    switch(action.type){
        
        case GET_ROLES_LIST:
            return{
                ...state,
                roles:action              
            }
        case SHOW_ROLE:
            
            return{
                ...state,
                role:state.roles.filter(user=>user.id === action.payload)
            }
        case UPDATE_ROLE:{
            return {
                ...state,
                users:action 
            }
        }
        case ADD_ROLE:{
            return{
                ...state,
                users:action              
            }
        }

            default:
                return state
    }

}
export default userAccessReduser