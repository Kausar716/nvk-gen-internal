import {
    GET_LOCATION_LIST,
    GET_Plant_CATEGORY_LIST,   
    GETSUPPLIER_LIST,
    PLANT_INVENTORY_FILTER,
    GET_ALL_PLANT_INVENTORY_ACTION,
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

export const getFilterResult = (data) => dispatch => {
    console.log(data)
    let obj={}
    obj["supplier_id"]=0
    obj["category"]=3
    obj["plant_search"]="genus"
    obj["plant_search_param"]=data.plantSearchName
    obj["sku_search"]="sku_code"
    obj["sku_search_param"]=data.skuSearchName
    obj["location"]=""
    obj["batch_code"]=""



   
    return  axios.post("/api/plant-search",obj,config).then(res=>{ 
        console.log(res)
      
        dispatch({
                type:PLANT_INVENTORY_FILTER,
                payload:res.data.data
    
            })
        })

}
export const getPlantList = () => dispatch => {


    return  axios.get("/api/skus/plants",config).then(res=>{ 
        dispatch({
                type:GET_ALL_PLANT_INVENTORY_ACTION,
                payload:res.data.data
    
            })
        })

}
  