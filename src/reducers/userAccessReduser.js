import {
    GET_ROLES_LIST,
    SHOW_ROLE,   
    UPDATE_ROLE,
    DELETE_ROLE,
    ADD_ROLE ,
    GET_PERMISSION_LIST,
    HANDLE_USER_ACCESS_INPUT_DATA
   } from '../actions/types';

const initialSatate = {
    users:[],
    currentPermission:[],
    currentPermissionNames:[],
    permissionListBackup:[],
    userData:{},
    permissionList:[]
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
        case GET_PERMISSION_LIST:{
            console.log(action)
          
            return{
                ...state,
                permissionList:action,
                permissionListBackup:action.payload  
            }
        }
        case HANDLE_USER_ACCESS_INPUT_DATA:{
            let permissionArray = state.currentPermission
            let currentPermissionNames = state.currentPermissionNames
            console.log(permissionArray)
            console.log(state.permissionListBackup)
            let permissionSelectedObject = state.permissionListBackup.filter(permission=>permission.name===action.permissionName)
            console.log(permissionSelectedObject)
            if(!permissionArray.includes(permissionSelectedObject[0].id)){
                permissionArray.push(permissionSelectedObject[0].id)
                currentPermissionNames.push(permissionSelectedObject[0].name)
            }
           
            else {
               let index = permissionArray.indexOf(permissionSelectedObject[0].id)
               permissionArray.splice(index,1)
               currentPermissionNames.splice(index,1)
            }
            console.log(permissionArray)
            return{
                ...state,
                currentPermission:permissionArray,
                currentPermissionNames:currentPermissionNames
            }
        }

            default:
                return state
    }

}
export default userAccessReduser