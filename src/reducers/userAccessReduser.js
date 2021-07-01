import { act } from 'react-dom/cjs/react-dom-test-utils.production.min';
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
    permissionList:[],
    quotes:[],
    tools:[],
    customer:[],
    user:[]
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
            console.log(action.permissionName)
            console.log(state.permissionListBackup)
            // console.log(action.permissionName === "quotesAll" && action.cheked)
            if(action.permissionName === "quotesAll"){
                let quotesArray = state.permissionListBackup.filter(permission=>permission.group_name==="quotesAndOrders")
                console.log(quotesArray)
                quotesArray.map(premission=>{
                    if(permissionArray.length>0){
                    if(!permissionArray.includes(premission.id)){
                        permissionArray.push(premission.id)
                        currentPermissionNames.push(premission.name)
                    }
                }
                else  {
                    permissionArray.push(premission.id)
                    currentPermissionNames.push(premission.name)
                }
                })
                console.log(currentPermissionNames)
                console.log(permissionArray)

                
            } 
            else
            if(action.permissionName === "toolsAndSettings"){
                let quotesArray = state.permissionListBackup.filter(permission=>permission.group_name==="toolsAndSettings")
                console.log(quotesArray)
                quotesArray.map(premission=>{
                    if(permissionArray.length>0){
                    if(!permissionArray.includes(premission.id)){
                        permissionArray.push(premission.id)
                        currentPermissionNames.push(premission.name)
                    }
                }
                else  {
                    permissionArray.push(premission.id)
                    currentPermissionNames.push(premission.name)
                }
                })
                console.log(currentPermissionNames)
                console.log(permissionArray)

                
            } 
            else
            if(action.permissionName === "customerManagement"){
                let quotesArray = state.permissionListBackup.filter(permission=>permission.group_name==="customerManagement")
                console.log(quotesArray)
                quotesArray.map(premission=>{
                    if(permissionArray.length>0){
                    if(!permissionArray.includes(premission.id)){
                        permissionArray.push(premission.id)
                        currentPermissionNames.push(premission.name)
                    }
                }
                else  {
                    permissionArray.push(premission.id)
                    currentPermissionNames.push(premission.name)
                }
                })
                console.log(currentPermissionNames)
                console.log(permissionArray)

                
            }
            else
            if(action.permissionName === "userManagement"){
                let quotesArray = state.permissionListBackup.filter(permission=>permission.group_name==="userManagement")
                console.log(quotesArray)
                quotesArray.map(premission=>{
                    if(permissionArray.length>0){
                    if(!permissionArray.includes(premission.id)){
                        permissionArray.push(premission.id)
                        currentPermissionNames.push(premission.name)
                    }
                }
                else  {
                    permissionArray.push(premission.id)
                    currentPermissionNames.push(premission.name)
                }
                })
                console.log(currentPermissionNames)
                console.log(permissionArray)

                
            }
            else 
            if(action.permissionName === "additionalPermissionAll"){
                let quotesArray = state.permissionListBackup.filter(permission=>
                    ((permission.group_name==="userManagement") || (permission.group_name==="customerManagement")||(permission.group_name==="toolsAndSettings")))
                console.log(quotesArray)
            
                quotesArray.map(premission=>{
                    if(permissionArray.length>0){
                    if(!permissionArray.includes(premission.id)){
                        permissionArray.push(premission.id)
                        currentPermissionNames.push(premission.name)
                    }
                }
                else  {
                    permissionArray.push(premission.id)
                    currentPermissionNames.push(premission.name)
                }
                })
                console.log(currentPermissionNames)
                console.log(permissionArray)

                
            }
            else 
            if(action.permissionName === "additionalPermissionNone"){
                let quotesArray = state.permissionListBackup.filter(permission=>
                    ((permission.group_name==="userManagement") || (permission.group_name==="customerManagement")||(permission.group_name==="toolsAndSettings")))
                console.log(quotesArray)
                quotesArray.map(premission=>{
                    if(permissionArray.length>0){
                        if(permissionArray.includes(premission.id)){
                            // currentPermissionNames.push(premission.name)
                            let index = permissionArray.indexOf(premission.id)
                            permissionArray.splice(index,1)
                            currentPermissionNames.splice(index,1)
                            
                        }
                }
                
                })
                console.log(currentPermissionNames)
                console.log(permissionArray)

                
            }
           
            else if(action.permissionName === "quotesNone" ){
                let quotesArray = state.permissionListBackup.filter(permission=>permission.group_name==="quotesAndOrders")
                console.log(quotesArray)
                quotesArray.map(premission=>{
                    if(permissionArray.length>0){
                    if(permissionArray.includes(premission.id)){
                        // currentPermissionNames.push(premission.name)
                        let index = permissionArray.indexOf(premission.id)
                        permissionArray.splice(index,1)
                        currentPermissionNames.splice(index,1)
                        
                    }
                }
                
                })
                console.log(currentPermissionNames)
                console.log(permissionArray)

                
            }
            else  if(action.permissionName === "turnOn"){        
                let quotesArray = state.permissionListBackup.filter(permission=>
                    ((permission.group_name==="userManagement") || (permission.group_name==="customerManagement")||(permission.group_name==="toolsAndSettings")|| (permission.group_name==="quotesAndOrders"))
                )
        
                quotesArray.map(premission=>{
                    if(permissionArray.length>0){
                    if(!permissionArray.includes(premission.id)){
                        permissionArray.push(premission.id)
                        currentPermissionNames.push(premission.name)
                    }
                }
                else  {
                    permissionArray.push(premission.id)
                    currentPermissionNames.push(premission.name)
                }
                })
                console.log(currentPermissionNames)
                console.log(permissionArray)

                
            }
            else  if(action.permissionName === "turnOff"){ 
                currentPermissionNames=[]
                currentPermissionNames=[]

             }
            else {
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
        }
            console.log(permissionArray)
            console.log(currentPermissionNames)
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