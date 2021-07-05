import {
    GET_LOCATION_LIST,
    GET_Plant_CATEGORY_LIST,   
    GETSUPPLIER_LIST,
    config,
    axios
    // DELETE_USER 
   } from './types';
   

    export const getLocationList = () => dispatch => {
       axios.get("/api/location-list",config).then(res=>{ 
           console.log(res)
           
        
           dispatch({
                   type:GET_LOCATION_LIST,
                   payload:res.data.data
       
               })
           })
   }
   export const getCategoryList = () => dispatch => {
    axios.get("/api/plant-categories",config).then(res=>{ 
        console.log(res)
        dispatch({
                type:GET_Plant_CATEGORY_LIST,
                payload:res.data.data    
            })
        })
}

  