import { act } from 'react-dom/cjs/react-dom-test-utils.production.min';
import {
    GET_ROLES_LIST,
    SHOW_ROLE,   
    UPDATE_ROLE,
    DELETE_ROLE,
    ADD_ROLE ,
    GET_PERMISSION_LIST,
    HANDLE_USER_ACCESS_INPUT_DATA,
    SHOW_SELECTED_USER,
    UPDATE_USER_PERMISSION
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
    user:[],
    selectedUser:{}
}
 const userAccessReduser = (state = initialSatate, action)=> {
     console.log(action)
    switch(action.type){
        
        case GET_ROLES_LIST:
            return{
                ...state,
                roles:action.payload              
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
        case SHOW_SELECTED_USER:{
            let selectedUser= action
            let selectedPermissionId = []
            let selectedPermissionName = []
            console.log(action)
            console.log(action.selectedUser.data.permissions )
            debugger;
            action.selectedUser.data.permissions.map(permission=>{
                selectedPermissionId.push(permission.id)
                selectedPermissionName.push(permission.name)
            })
            console.log(selectedPermissionId)
            console.log(selectedPermissionName)
            return{
                ...state,
                selectedUser:action,              
                currentPermission:selectedPermissionId,
                currentPermissionNames:selectedPermissionName
            }
        }
        case UPDATE_USER_PERMISSION:{
            console.log(action)
            // let selectedPermissionId = []
            // let selectedPermissionName = []
            // action.selectedUser.data.permissions.map(permission=>{
            //     selectedPermissionId.push(permission.id)
            //     selectedPermissionName.push(permission.name)
            // })
            return{
                ...state,
                selectedUser:action 
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
                let quotesIndex = currentPermissionNames.indexOf("quotesNone")
                console.log(quotesIndex)
                if(quotesIndex>=0){
                currentPermissionNames.splice(quotesIndex,1)
                
                }
                else if(quotesIndex === -1){
                    currentPermissionNames.push(action.permissionName)
                }

                
            } 
            else if(action.permissionName === "toolsAndSettings"){
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
            else if(action.permissionName === "customerManagement"){
                console.log(action)                
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
            if(action.permissionName === "additionalPermissionYes"){
                let quotesIndex = currentPermissionNames.indexOf("additionalPermissionNo")
                if(quotesIndex>=0){
                    currentPermissionNames.splice(quotesIndex,1)                
                }
                else if(quotesIndex === -1){
                    currentPermissionNames.push(action.permissionName)
                }
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
            if(action.permissionName === "additionalPermissionNo"){
                let quotesIndex = currentPermissionNames.indexOf("additionalPermissionYes")
                if(quotesIndex>=0){
                    currentPermissionNames.splice(quotesIndex,1)                
                }
                else if(quotesIndex === -1){
                    currentPermissionNames.push(action.permissionName)
                }
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
                let quotesIndex = currentPermissionNames.indexOf("quotesAll")
                currentPermissionNames.splice(quotesIndex,1)
                currentPermissionNames.push(action.permissionName)
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