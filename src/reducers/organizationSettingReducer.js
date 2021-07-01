import {
    GET_ORGANIZATION_LIST,
    ADD_ORGANIZATION,  
    SHOW_ORGANIZATION, 
    UPDATE_ORGANIZATION,
    DELETE_ORGANIZATION, 
    HANDLE_ORGANIZATION_INPUT_DATA,
    UPLOAD_ORGANIZATION_IMAGE,
    REMOVE_USER_IMAGE
   } from '../actions/types';

const initialSatate = {
    organizationData:{ name:"",
    sendingEmail:"",
    phone:"",
    mainTitle:"",
    secondaryTitle:"",
    mainBody:"",
    secondartBody:"",
    id:"2",
    logo:""
}
}
 const organizationReduser = (state = initialSatate, action)=> {
     console.log(action)
     console.log(state)
  
    switch(action.type){
        
        case GET_ORGANIZATION_LIST:
            return{
                ...state,
                organizationData:action.payload              
            }
        case SHOW_ORGANIZATION:
            
            return{
                organizationData:action.payload
            }
        case UPDATE_ORGANIZATION:{
            return {
                ...state,
                organizationData:action 
            }
        }
        case ADD_ORGANIZATION:{
            return{
                ...state,
                organizationData:action              
            }
        }
        case DELETE_ORGANIZATION:{
            return{
                ...state
            }
        }
        case UPLOAD_ORGANIZATION_IMAGE:{
            return{
                ...state,
                organizationData:action
            }
        }
        case REMOVE_USER_IMAGE:{
            return{
                ...state,
                removedData:action
            }
        }
        case HANDLE_ORGANIZATION_INPUT_DATA:{
            return{
                ...state,
                organizationData:{...state.organizationData, [action.organizationId]:action.organizationValue}               
                
            }
        }
        

            default:
                return state
    }

}
export default organizationReduser