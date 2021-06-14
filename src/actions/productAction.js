
import {
    //PRODUCT ACTION
    CREATE_PRODUCT_ACTION,
    UPDATE_PRODUCT_ACTION,
    DELETE_PRODUCT_ACTION,
    GET_ALL_PRODUCT_ACTION,
    GET_SPECIFIED_PRODUCT_ACTION,
    //DUPLICTE_PRODUCT,


    // SKU ACTION
    //CREATE_SKU_ACTION,
    UPDATE_SKU_ACTION,
    //DELETE_SKU_ACTION,
    GET_ALL_SKU_ACTION,
    GET_SPECIFIED_SKU_ACTION,
    UPDATE_SKU_ACTION_CLEAR,

    //page redirects action

    PAGE_REDIRECT_ACTION,
    SUB_PAGE_REDIRECT_ACTION,
    SET_PAGE_NUMBER,
    SET_SKU_PAGE_NUMBER,

    //INPUT HANDLE
    HANDLE_INPUT_DATA,
    HANDLE_TAG_INPUT_DATA,
    HANDLE_SKU_INPUT_DATA,
    ERROR_HANDLE,

    // axios config
    config,
    axios,

    //filter category
    FILTER_GET_ALL_CATEGORY_DATA,
    FILTER_GET_SLECTED_CATEGORY_DATA,
    FILTER_GET_SLECTED_CATEGORY_SUB_DATA

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

export const createProductAction = (product,tags) => dispatch => {
    let errorArray=[];
    if(product.manufacturer_id===0||product.manufacturer_id ==null) errorArray.push("Select Manufacturer") 
    if(product.category_id ===0||product.category_id == null) errorArray.push(" Select Category")
    if(product.name.trim().length ===0 ) errorArray.push("Add Product Name")
    if(errorArray.length===0){
        product["common_name"] = tags.length===0?["Tag"]:tags
        axios.post(`/api/create-product`,product
        , config).then(res=>{
            errorArray.push("Producted Added successfully")
            dispatch(getAllProductAction())
            dispatch(showSpecifiedSkuAction(res.data.data.product_sku))
         
            dispatch({
                type:ERROR_HANDLE,
                message:errorArray,
                status:true
            },
            dispatch(subPageReDirectAction("sku")))
           
            dispatch({
                type:CREATE_PRODUCT_ACTION
            })
    
        })
        .catch(error=>{
            errorArray.push("Please select mandate fileds")
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
export const updateProductAction = (data,id,tag) => dispatch => {
    data["common_name"] = tag
    axios.post(`/api/update-product/${id}`,data,config).then(res=>{ 
        dispatch(getAllProductAction())
        let error = []
        error.push("Product Updated successfully")
        dispatch({
            type:UPDATE_PRODUCT_ACTION
        })
        dispatch({
            type:ERROR_HANDLE,
            message:error,
            status:true
        })
    })

}
export const deleteProductAction = (id) => dispatch => {
    let error = []
    axios.post(`/api/delete-product/${id}?type=product`,null,config).then(res=>{ 
        dispatch(getAllProductAction())
        dispatch(getAllSkuAction())
        // dispatch(deleteSkuAction(id))
        dispatch({
            type:DELETE_PRODUCT_ACTION
        })
        error.push("Product deleted successfully",)
        dispatch({
            type:ERROR_HANDLE,
            message:error,
            status:true
        })
        })

}
export const getAllProductAction = () => dispatch => {
    axios.get("/api/products",config).then(res=>{ 
    dispatch({
            type:GET_ALL_PRODUCT_ACTION,
            payload:res.data

        })
    })
}

export const getSpecifiedProductAction = (id, actionType="edit",pageToOpen="general") => dispatch => {
    axios.get(`/api/product/${id}`,config).then(res=>{ 
        console.log(res.data)
        dispatch(showSpecifiedSkuAction(id))
        dispatch(pageReDirectAction(pageToOpen,actionType))
        dispatch({
                type:GET_SPECIFIED_PRODUCT_ACTION,
                payload:res.data,
                actionType:actionType
    
            })
        })
   
}
export const duplicateProduct = (id) =>dispatch=>{
    dispatch(getSpecifiedProductAction(id, "add"))
    

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
export const createSkuAction = (id) => dispatch => {

}
export const updateSkuAction = (id, data, actionType="edit") => dispatch => {
    let error = []
    if(data.each_cost===0||data.each_cost ==="" ||data.each_cost==null) error.push("Add Each Cost") 
    if(data.each_price ===0||data.each_price ===""||data.each_price==null) error.push(" Add Each Price")
    if(data.sale_price ===0||data.sale_price === ""||data.sale_price==null) error.push("Add Sale Price") 
    if(data.subcategory ===0||data.subcategory == null||data.subcategory==null) error.push("Select Sub Category")
    if(data.sku_item_name==null ||data.sku_item_name.trim().length ===0 ) error.push("Add Sku Item Name")
    if(error.length===0){
        delete data["id"]
        axios.post(`/api/update-sku/${id}`,data,config).then(res=>{ 
            // dispatch(getAllProductAction())
            dispatch(showSpecifiedSkuAction(id))
            // dispatch(getSpecifiedProductAction(id,"edit","sku"))
            // dispatch(pageReDirectAction("sku",actionType))
            dispatch(getAllSkuAction(id))
            dispatch({
                type:UPDATE_SKU_ACTION
            })
            error.push("SKU updated successfully")
            dispatch({
                type:ERROR_HANDLE,
                message:error,
                status:true
            })
            }).catch(error1=>{
                error.push("Please add Product first")
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
export const updateSkuActionClear = (id,data,actionType="add") =>dispatch=>{
    delete data["id"]
    let error  = []
    if(data.each_cost===0||data.each_cost ==="" ||data.each_cost==null) error.push("Add Each Cost") 
    if(data.each_price ===0||data.each_price ===""||data.each_price==null) error.push(" Add Each Price")
    if(data.sale_price ===0||data.sale_price === ""||data.sale_price==null) error.push("Add Sale Price") 
    if(data.subcategory ===0||data.subcategory == null||data.subcategory==null) error.push("Select Sub Category")
    if(data.sku_item_name==null ||data.sku_item_name.trim().length ===0 ) error.push("Add Sku Item Name")
    if(error.length===0){
    axios.post(`/api/update-sku/${id}`,data,config).then(res=>{ 
        dispatch(getAllProductAction())
        // dispatch(showSpecifiedSkuAction(id))
        // dispatch(getSpecifiedProductAction(id,"add","sku"))
        // dispatch(pageReDirectAction("sku",actionType))
        dispatch(getAllSkuAction())
        dispatch({
            type:UPDATE_SKU_ACTION_CLEAR
        })
        error.push("Product updated successfully and cleared Data")
        dispatch({
            type:ERROR_HANDLE,
            message:error,
            status:true
        })
        })
       
        .catch(error1=>{
            error.push("Please add Product first")
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
export const deleteSkuAction = (id) => dispatch => {
    axios.post(` /api/delete-sku/${id}?type=product`,null,config).then(res=>{ 
        })


}
export const getAllSkuAction = (id) => dispatch => {
    axios.get("/api/skus/products",config).then(res=>{ 
        dispatch({
                type:GET_ALL_SKU_ACTION,
                payload:res.data
    
            })
        })

}
export const showSpecifiedSkuAction = (id) => dispatch => {
    axios.get(`/api/sku/${id}?type=product`,config).then(res=>{ 
        console.log(res.data)
        dispatch({
                type:GET_SPECIFIED_SKU_ACTION,
                payload:res.data,
    
            })
        })

}






/**
* Page Redirects Action
* The following functions are used to redirecting product page
* Redirects to add Product page
* Redirects to edit product page

*/
export const pageReDirectAction = (page,actionType) => {
    return{
        type:PAGE_REDIRECT_ACTION,
        page:page,
        actionType:actionType
    }

}
export const subPageReDirectAction = (page) => {
  return{
        type:SUB_PAGE_REDIRECT_ACTION,
        page:page,
    }

}
export const setPageNumber = (pageNumber) => {
    return{
          type:SET_PAGE_NUMBER,
          pageNumber:pageNumber,
      }
  
  }
export const setSkuPageNumber = (skuPageNumber) =>{
    return{
        type:SET_SKU_PAGE_NUMBER,
        skuPageNumber:skuPageNumber,
    }

}
  


/**
* Input Action
* handle input action
*/

export const handleInputAction = (id, value) =>dispatch=>{
    dispatch({
        type:HANDLE_INPUT_DATA,
        itemId:id,
        itemValue:value
    })

}
export const handleSkuInputAction =(id,value) =>dispatch=>{
    dispatch({
        type:HANDLE_SKU_INPUT_DATA,
        itemId:id,
        itemValue:value
    })

}
export const handleTagAction = (id, value) =>dispatch=>{

    dispatch({
        type:HANDLE_TAG_INPUT_DATA,
        itemId:id,
        itemValue:value
    })

}
export const modalAction =() =>dispatch=>{
    dispatch({
        type:ERROR_HANDLE,
        status:false,
        message:[]
    })
}

//handle category Filter action
export const handleCategory = (category,subCategory) =>dispatch=>{
    console.log(category,subCategory)
    if(category ==="All"){
        // console.log("only all")
        dispatch({
            type:FILTER_GET_ALL_CATEGORY_DATA,
            categoryId:category,
            subCategoryId:subCategory
        })

    }else if(category!=="All" && subCategory ==="0"){
        console.log("all")
        dispatch({
            type:FILTER_GET_SLECTED_CATEGORY_DATA,
            categoryId:category,
            subCategoryId:subCategory
        })

    }else if(category!=="All" && subCategory !=="0"){
        console.log("both")
        dispatch({
            type:FILTER_GET_SLECTED_CATEGORY_SUB_DATA,
            categoryId:category,
            subCategoryId:subCategory
        })

    }
 

}










