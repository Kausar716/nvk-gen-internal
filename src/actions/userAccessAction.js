import {
    GET_ROLES_LIST,
    SHOW_ROLE,   
    config,
    axios,
    UPDATE_ROLE,
    DELETE_ROLE,
    ADD_ROLE 
   } from './types';
   
//    export const getUsersList = (dispatch) => {
    export const getRolesList = () => dispatch => {
       axios.get("/api/roles-list",config).then(res=>{ 
           console.log(res)
           dispatch({
                   type:GET_ROLES_LIST,
                   payload:res.data.data
       
               })
           })
   }

    export const showRole = (id) => dispatch => {
       axios.get(`/api/show-role/${id}`,config).then(res=>{     
           dispatch({
                   type:SHOW_ROLE,
                   payload:res.data    
               })
           })
   }

   export const addRoler = (RoleData) => dispatch => {
       console.log(RoleData)
       RoleData.role="1"
       RoleData.password="pass"
       RoleData.status="1"
       return axios.post(`/api/add-role`,RoleData,config).then(res=>{  
        console.log(res)  
      
        dispatch({
                type:ADD_ROLE,
                payload:res.data    
            })
        })
        .catch(message=>{
            console.log(message)
        })
        
    }

    export const updateRole = (userData) => dispatch => {
        console.log(userData)
        // userData.role="1"
        // userData.password="pass"
        // userData.status="1"
        return axios.post(`/api/update-role/${userData.id}`,userData,config).then(res=>{  
         console.log(res)  
       
         dispatch({
                 type:UPDATE_ROLE,
                 payload:res.data    
             })
         })
         .catch(message=>{
             console.log(message)
         })
         
   }

   export const deleteRole = (userData) => dispatch => {
    console.log(userData)
    // userData.role="1"
    // userData.password="pass"
    // userData.status="1"
    return axios.post(`/api/update-user/${userData.id}`,userData,config).then(res=>{  
     console.log(res)  
   
     dispatch({
             type:DELETE_ROLE,
             payload:res.data    
         })
     })
     .catch(message=>{
         console.log(message)
     })
     
    }
   