
import {
    //Plant ACTION
    CREATE_PLANT_ACTION,
    UPDATE_PLANT_ACTION,
    DELETE_PLANT_ACTION,
    GET_ALL_PLANT_ACTION,
    GET_SPECIFIED_PLANT_ACTION,
    DUPLICTE_PLANT,

    // Plant SKU ACTION
    CREATE_PLANT_SKU_ACTION,
    UPDATE_PLANT_SKU_ACTION,
    DELETE_PLANT_SKU_ACTION,
    GET_ALL_PLANT_SKU_ACTION,

    GET_PLANT_SPECIFIED_SKU_ACTION,
    GET_SINGLE_PLANT_SKU,

    //Plant page redirects action

    PAGE_PLANT_REDIRECT_ACTION,
    SUB_PLANT_PAGE_REDIRECT_ACTION,

    // Plant INPUT HANDLE
    HANDLE_PLANT_INPUT_DATA,
    //HANDLE_PLANT_TAG_INPUT_DATA,
    HANDLE_PLANT_SKU_INPUT_DATA,

    // axios config
    config,
    axios,
    //SUB_PAGE_REDIRECT_ACTION,

    ERROR_HANDLE,

    //filter category
    // FILTER_CATEGORY_DATA

    //pagiantion
    SET_PLANT_PAGE_NUMBER,
    SET_PLANT_SKU_PAGE_NUMBER,


    //search plant
    HANDLE_SEARCH_INPUT,
    HANDLE_RADIO_TOGGLE,
    HANDLE_CATEGORY_SEARCH

} from './types';



/**
* Product Action
* The following functions are used to perform actions on Product using API's
    1. create product API
    2. update product API
    3. delete product API
    4. get all product  API
    5.get specified product API
*/
// console.log("working 2")
// let plantData = {
//     genus:"genus",
// species:"species",
// cultivar1:"cultivar1",
// //common_name[]:[name1,name2,name3]
// category_id:3,
// status:1,
// main_content_web:"main content of web",
// bullet_point_web:"bullet point",
// growing_maintenance_tips_web:"maintenance tips",
// alternate_genus:"test",
// series:"test",
// patent:"test",
// royality:"test",
// hardiness_zone:"test",
// introduction_year:2023,
// attributes:[
// {
//     id:1,
//     subattributes:[
//         {
//             id:1,
//             value:"hello"
//         }
//     ]
// }
// ]
// "attributes[0][id]":1,
// "attributes[0][subattributes][0][id]":1,
// "attributes[1][id]":2,
// "attributes[1][subattributes][1][id]":3,
// "attributes[2][id]":3,
// "attributes[2][subattributes][2][id]":4,
export const createPlantAction = (plantData,tags) => dispatch => {
    console.log(plantData)
    let errorArray=[];
    if(plantData.genus.trim().length ===0 ) errorArray.push("Add plant genus")
    if(plantData.species.trim().length ===0 ) errorArray.push("Add plant species")
    if(plantData.category_id.trim().length ===0 ) errorArray.push("Add Category")
    if(errorArray.length===0){
        plantData["common_name"] = tags.length===0?["Tag"]:tags
        axios.post(`/api/add-plant`,plantData,config).then(res=>{
          
            errorArray.push("Plant Added successfully")            
            dispatch(getAllPlantAction())
            dispatch(showSpecifiedPlantSkuAction(res.data.data.plant.plant_id))
         
            dispatch({
                type:ERROR_HANDLE,
                message:errorArray,
                status:true
            },
            dispatch(plantSubPageReDirectAction("sku")))
           
            dispatch({
                type:CREATE_PLANT_ACTION,
                ae_plant_id:res.data.data.plant.plant_id,
                createdPlantData:res.data.data.plant

            })
    
        })
        .catch(error=>{
            // errorArray.push("Please select mandate fileds")
            dispatch({
                type:ERROR_HANDLE,
                message:errorArray,
                status:true
            })
            
        })  

    }else{
        dispatch({
            type:ERROR_HANDLE,
            message:errorArray,
            status:true
        })

    }
}



export const updatePlantAction = (data,id,tag) => dispatch => {
   
    data["common_name"] = tag
        axios.post(`/api/update-plant/${id}`, data, config).then(res=>{
            console.log(res.data.data.plant_id)
            dispatch(getAllPlantAction())
            let error = []
            error.push("Plant Updated successfully")
            
            dispatch(getAllPlantAction())
            dispatch(showSpecifiedPlantSkuAction(res.data.data.plant_id))
         
            dispatch({
                type:ERROR_HANDLE,
                message:error,
                status:true
            },
            dispatch(plantSubPageReDirectAction("sku")))
           
            dispatch({
                type:UPDATE_PLANT_ACTION,
                ae_plant_id:res.data.data.plant_id,
                createdPlantData:res.data.data.plant

            })

        })
}




export const deletePlantAction = (id) => dispatch => {
    let error = []
    axios.post(`/api/delete-plant/${id}`,null,config).then(res=>{ 
        dispatch(getAllPlantAction())
        //dispatch(getAllPlantSkuAction())
        // dispatch(deleteSkuAction(id))
        dispatch({
            type:DELETE_PLANT_ACTION
        })
        error.push("Plant deleted successfully",)
        dispatch({
            type:ERROR_HANDLE,
            message:error,
            status:true
        })
        })


}
export const deleteSkuAction = (id) => dispatch => {
    let error = []
    console.log(id)
    axios.post(`/api/delete-sku/${id}?type=plant`,null,config).then(res=>{ 
        console.log(res)       
        dispatch({
            type:DELETE_PLANT_SKU_ACTION
        })
        error.push("Plant SKU deleted successfully",)
        dispatch({
                        type:ERROR_HANDLE,
                        message:error,
                        status:true
                    })
                    dispatch(showSpecifiedPlantSkuAction(JSON.stringify(res.data.data.plant_id)))
                    // dispatch(getAllPlantAction())
                    // dispatch(getAllPlantSkuAction())
        })


}
export const duplicatePlant = (id) =>dispatch=>{
    let error = []
    console.log(id)
    axios.get(`/api/duplicate-plant/${id}`,config).then(res=>{ 
        console.log(res)
        dispatch(getAllPlantAction())
        dispatch(getAllPlantSkuAction())
        // dispatch(showSinglePlantSkuAction(res.data.data.product_id))
        dispatch({
            type:DUPLICTE_PLANT
        })
        error.push("Plant duplicated successfully  successfully",)
        dispatch({
                        type:ERROR_HANDLE,
                        message:error,
                        status:true
                    })
        }).catch(err=>{
        })

}
export const getAllPlantAction = () => dispatch => {
    axios.get("/api/plants",config).then(res=>{ 
        dispatch({
                type:GET_ALL_PLANT_ACTION,
                payload:res.data.data
    
            })
        })

}



export const getSpecifiedPlantAction = (id, actionType="edit",pageToOpen="general") => dispatch => {
    axios.get(`/api/plant/${id}`,config).then(res=>{ 
        console.log(res.data)
        dispatch(showSpecifiedPlantSkuAction(id))
        dispatch(plantPageReDirectAction(pageToOpen,actionType))
        dispatch({
                type:GET_SPECIFIED_PLANT_ACTION,
                payload:res.data,
                actionType:actionType
    
            })
        })

}



/**
* Product SKU Action
* The following functions are used to perform actions on product SKU  using API's
    1. add SKU API
    2. get all SKU API
    3. show specified SKU API
    4. update sku API
    5. delete SKU API
*/
export const createPlantSkuAction = (id, data, actionType="add") => dispatch => {
    let error = []
    let  packagedata =[]
    console.log(data)
    if(data.each_cost==0||data.each_cost =="" ||data.each_cost==null) error.push("Add Each Cost") 
    if(data.each_price ==0||data.each_price ==""||data.each_price==null) error.push(" Add Each Price")
    if(data.sale_price ==0||data.sale_price == ""||data.sale_price==null) error.push("Add Sale Price") 
    if(data.sale_price ==0||data.sale_price == ""||data.sale_price==null) error.push("Add Sale Price") 
    if(data.attributes_subattributes){
         packagedata = data.attributes_subattributes.filter(obj=>{
            return(obj.attribute_id === 3)
        })
    }
    if(packagedata.length===0)error.push(" Select Packaging ")
    // if(data.subcategory ==0||data.subcategory == null||data.subcategory==null) error.push("Select Sub Category")
    // if(data.sku_item_name==null ||data.sku_item_name.trim().length ==0 ) error.push("Add Sku Item Name")
    let copyData = data
    copyData.subcategory_id = data.subcategory
    copyData.each_cost= data.each_cost
    copyData.each_price= data.each_price
    delete copyData.subCategory
    copyData.supplier_id = "1"
    copyData.sale_expiry_date = "2021-07-09"
    delete copyData.product_id
    delete copyData.plant_id
   
    // delete copyData.discontinued
    // delete copyData.sku_code
    delete copyData.subcategory
    delete copyData.subcategory_id
    // delete copyData.volume_price_per_unit
    // delete copyData.volume_quantity
    // delete copyData.archived
    // delete copyData.sale_expiry_date
    // copyData.attributes_subattributes=[
    //     {
    //         "attribute_id":1,
    //         "subattribute_id":1
    //     },
    //     {
    //          "attribute_id":3,
    //         "subattribute_id":4
    //     },
    //     {
    //          "attribute_id":4,
    //         "subattribute_id":6
    //     }
    // ]
    copyData.id=id
    copyData.type = "plant"
   
        
    console.log(copyData,"plantcheck")
    console.log(id)


    if(error.length===0){
      console.log(copyData)
        axios.post(`/api/add-sku`,copyData,config).then(res=>{ 
            console.log(res)
            // dispatch(getAllProductAction())
            dispatch(showSpecifiedPlantSkuAction(id))
            // dispatch(getSpecifiedProductAction(id,"edit","sku"))
            // dispatch(pageReDirectAction("sku",actionType))
            dispatch(getAllPlantSkuAction(id))
            dispatch({
                type:CREATE_PLANT_SKU_ACTION
            })
            error.push("SKU created successfully")
            dispatch({
                type:ERROR_HANDLE,
                message:error,
                status:true
            })
            // dispatch(plantPageReDirectAction(actionType = "all"))
            }).catch(error1=>{
                console.log(error1)
                error.push("Please add Plant first")
                dispatch({
                    type:ERROR_HANDLE,
                    message:error,
                    status:true
                })
    
            })
    }else{
        dispatch({
            type:ERROR_HANDLE,
            message:error,
            status:true
        })

    }

}
export const updatePlantSkuAction = (id, data, actionType="edit") => dispatch => {
    let error = []
    // if(data.each_cost==0||data.each_cost =="" ||data.each_cost==null) error.push("Add Each Cost") 
    // if(data.each_price ==0||data.each_price ==""||data.each_price==null) error.push(" Add Each Price")
    // if(data.sale_price ==0||data.sale_price == ""||data.sale_price==null) error.push("Add Sale Price") 
    // if(data.subcategory ==0||data.subcategory == null||data.subcategory==null) error.push("Select Sub Category")
    // if(data.sku_item_name==null ||data.sku_item_name.trim().length ==0 ) error.push("Add Sku Item Name")
    console.log(data)
    delete data.sub_category_id 
    delete data.sku_item_name 
    
    if(error.length===0){
        // delete data["id"]
        data.type = "plant"
        axios.post(`/api/update-sku/${id}`,data,config).then(res=>{ 
            console.log(res)
            // dispatch(getAllProductAction())
            
            // dispatch(getSpecifiedProductAction(id,"edit","sku"))
            // dispatch(pageReDirectAction("sku",actionType))
            dispatch(getAllPlantSkuAction(id))
            dispatch({
                type:UPDATE_PLANT_SKU_ACTION,
                actionType:actionType
            })
            error.push("SKU updated successfully")
            
            dispatch(showSpecifiedPlantSkuAction(res.data.data.plant_id))
            dispatch({
                type:ERROR_HANDLE,
                message:error,
                status:true
            })
            }).catch(error1=>{
                console.log(error1)
                error.push("Please add Plant first")
                dispatch({
                    type:ERROR_HANDLE,
                    message:error,
                    status:true
                })
    
            })
    }else{
        dispatch({
            type:ERROR_HANDLE,
            message:error,
            status:true
        })

    }


}
export const deletePlantSkuAction = (id) => dispatch => {



}
export const getAllPlantSkuAction = (id) => dispatch => {
    axios.get("api/skus/plants",config).then(res=>{ 
        dispatch({
                type:GET_ALL_PLANT_SKU_ACTION,
                payload:res.data.data
    
            })
        })


}
export const showSpecifiedPlantSkuAction = (id) => dispatch => {
    console.log(id)
    axios.get(`/api/skus/plants/${id}`,config).then(res=>{ 
        console.log(res.data)
        dispatch({
                type:GET_PLANT_SPECIFIED_SKU_ACTION,
                payload:res.data    
            })
        })
}

export const showSinglePlantSkuAction = (id,data, actionType="edit") => dispatch => {
  
console.log(id)

     axios.get(`/api/sku/${id}?type=plant`,config).then(res=>{ 
         console.log(res)
        //axios.get(`/api/skus/products/${id}`,config).then(res=>{ 

      
        console.log("showSpecifiedSkuAction",res.data.data)
     
        dispatch({
                type:GET_SINGLE_PLANT_SKU,
                payload:res.data.data,
                plantSkuDataById:res.data.data,
                actionType:actionType
    
            })
        })

}






/**
* Page Redirects Action
* The following functions are used to redirecting product page
* Redirects to add Product page
* Redirects to edit product page

*/
export const plantPageReDirectAction = (page,actionType) => {
    return{
        type:PAGE_PLANT_REDIRECT_ACTION,
        page:page,
        actionType:actionType
    }


}
export const plantSubPageReDirectAction = (page) => {
    return{
        type:SUB_PLANT_PAGE_REDIRECT_ACTION,
        page:page,
    }


}
export const setPlantPageNumber = (pageNumber) => {
    return{
        type:SET_PLANT_PAGE_NUMBER,
        pageNumber:pageNumber,
    }

  
  }
export const setPlantSkuPageNumber = (skuPageNumber) =>{
    return{
        type:SET_PLANT_SKU_PAGE_NUMBER,
        skuPageNumber:skuPageNumber,

    }
    


}
  


/**
* Input Action
* handle input action
*/

export const handlePlantInputAction = (id, value) =>dispatch=>{
    dispatch({
        type:HANDLE_PLANT_INPUT_DATA,
        itemId:id,
        itemValue:value
    })

}
export const handlePlantSkuInputAction =(id,value) =>dispatch=>{

    dispatch({ 
        type:HANDLE_PLANT_SKU_INPUT_DATA,
        itemId:id,
        itemValue:value
    })

}
export const handlePlantTagAction = (id, value) =>dispatch=>{

}

//handle category Filter action
export const handlePlantCategory = (category,subCategory) =>dispatch=>{

}





//search plant
export const serachPlant = (data) =>dispatch=>{
    //console.log(data)
    dispatch({
        type:HANDLE_SEARCH_INPUT,
        payload:data,
    })

}
 export const radioSearch = (data) =>dispatch=>{
     dispatch({
         type:HANDLE_RADIO_TOGGLE,
         payload:data
     })
 }
 export const searchCategoryApplyAction = (id)=>dispatch=>{
     dispatch({
        type:HANDLE_CATEGORY_SEARCH,
        payload:id

     })

 }










