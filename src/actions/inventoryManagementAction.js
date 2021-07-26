import {
    GET_LOCATION_LIST,
    GET_PLANT_CATEGORY_LIST,   
    GET_MANUFACTURER_CATEGORY_LIST,
    GETSUPPLIER_LIST,
    PLANT_INVENTORY_FILTER,
    PRODUCT_INVENTORY_FILTER,
    GET_ALL_PLANT_INVENTORY_ACTION,
    GET_PRODUCT_CATEGORY_LIST,
    GET_ALL_PRODUCT_INVENTORY_ACTION,
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
                type:GET_PLANT_CATEGORY_LIST,
                payload:res.data.data    
            })
        })
}
export const getManufacturerList = () => dispatch => {
    axios.get("/api/manufacture-list",config).then(res=>{ 
        console.log(res)
        dispatch({
                type:GET_MANUFACTURER_CATEGORY_LIST,
                payload:res.data.data    
            })
        })
}
export const getProductCategoryList = () => dispatch => {
    axios.get("/api/product-categories",config).then(res=>{ 
        console.log(res)
        dispatch({
                type:GET_PRODUCT_CATEGORY_LIST,
                payload:res.data.data    
            })
        })
    }


export const getFilterResult = (data) => dispatch => {
    console.log(data)
    let obj={}
    obj["supplier_id"]=data.selectedSupplierId !== ""?parseInt(data.selectedSupplierId):"" 
    obj["category"]=data.selecredCategoryID
    obj["plant_search"]="genus"
    obj["plant_search_param"]=data.plantSearchName
    obj["sku_search"]="sku_code"
    obj["sku_search_param"]=data.skuSearchName
    obj["location"]=""
    obj["batch_code"]=""   
    return  axios.post("/api/plant-search",obj,config).then(res=>{ 
        console.log(res)
    console.log(data)
    let resultArray = []
    if(!data.allPlantRadio)
    resultArray= res.data.data.filter(obj=>obj.status=== "1")
    else
    resultArray = res.data.data
    console.log(resultArray.length)
        dispatch({
                type:PLANT_INVENTORY_FILTER,
                payload:resultArray
    
            })
        })
}

export const getPlantList = () => dispatch => {
let obj={}

    return  axios.post("/api/plant-inventory-search",obj,config).then(res=>{ 
        console.log(res)
        dispatch({
                type:GET_ALL_PLANT_INVENTORY_ACTION,
                payload:res.data.data
    
            })
        })

}
export const getProductList = () => dispatch => {
    let obj={}
    
        return  axios.post("/api/product-search",obj,config).then(res=>{ 
            console.log(res)
           
            dispatch({
                    type:GET_ALL_PRODUCT_INVENTORY_ACTION,
                    payload:res.data.data
        
                })
            })
    
    }


    export const getProductFilterResult = (data) => dispatch => {
        console.log(data)
     
        let obj={}
        obj["supplier_id"]=1
        obj["category"]=data.selecredCategoryID!== ""?parseInt(data.selecredCategoryID):""
        obj["product_search"]=data.productSearchName
        obj["product_search_param"]=""
        obj["sku_search"]="sku_code"
        obj["sku_search_param"]=data.productSkuSearchName
        obj["location"]=""
        obj["batch_code"]=""
       
        
    
    
       
        return  axios.post("/api/product-search",obj,config).then(res=>{ 
            console.log(res)
     
            dispatch({
                    type:PRODUCT_INVENTORY_FILTER,
                    payload:res.data.data
        
                })
            })
    
    }