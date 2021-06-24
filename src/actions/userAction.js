import {
    GET_USERS_LIST,
    ADD_USER,   
    config,
    axios,
    SHOW_USER, 
    UPDATE_USER,
    DELETE_USER 
   } from './types';
   
//    export const getUsersList = (dispatch) => {
    export const getUsersList = () => dispatch => {
       axios.get("/api/users-list",config).then(res=>{ 
           console.log(res)
           
        
           dispatch({
                   type:GET_USERS_LIST,
                   payload:res.data.data
       
               })
           })
   }
//    export const showUser = id =>{
    export const showUser = (id) => dispatch => {
       axios.get(`/api/show-user/${id}`,config).then(res=>{     
           dispatch({
                   type:SHOW_USER,
                   payload:res.data    
               })
           })
   }

   export const addUser = (userData) => dispatch => {
       console.log(userData)
       userData.role="1"
       userData.password="pass"
       userData.status="1"
       return axios.post(`/api/add-user`,userData,config).then(res=>{  
        console.log(res)  
      
        dispatch({
                type:ADD_USER,
                payload:res.data    
            })
        })
        .catch(message=>{
            console.log(message)
        })
        
    }

    export const updateUser = (userData) => dispatch => {
        console.log(userData)
        // userData.role="1"
        // userData.password="pass"
        // userData.status="1"
        return axios.post(`/api/update-user/${userData.id}`,userData,config).then(res=>{  
         console.log(res)  
       
         dispatch({
                 type:UPDATE_USER,
                 payload:res.data    
             })
         })
         .catch(message=>{
             console.log(message)
         })
         
   }
   