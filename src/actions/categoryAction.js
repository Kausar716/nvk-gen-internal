import {
    // PRODUCT CATEGORY ACTION

    GET_ALL_PRODUCT_CATEGORIES_ACTION,

    // PRODUCT SUB CATEGORY ACTION
    GET_ALL_PRODUCT_SUB_CATEGORIES_ACTION,

    //MANUFACTURE action
    GET_ALL_MANUFACTURE_ACTON,


    ///GET_ALL_PLANT_CATEGORIES
    GET_ALL_PLANT_CATEGORIES,
    HANDLE_CATEGORY_INPUT_DATA,
    HANDLE_ADD_PLANT_CATEGORY,
    HANDLE_DRAG_PLANT_CATEGORY,
    HANDLE_CATEGORY_DELETE,

    // axios config
    config,
    axios

} from './types';

// category data
export const getAllCategoriesAction = () => dispatch => {
    axios.get("/api/product-categories",config).then(res=>{ 
        console.log(res.data)
    dispatch({
            type:GET_ALL_PRODUCT_CATEGORIES_ACTION,
            payload:res.data

        })
    })
}
//sub category data
export const getAllSubCategoriesAction = () => dispatch => {
    axios.get("/api/subcategories",config).then(res=>{ 
        console.log(res)
    dispatch({
            type:GET_ALL_PRODUCT_SUB_CATEGORIES_ACTION,
            payload:res.data

        })
    })
}
//manufacture data
export const getAllManufactureAction = () => dispatch =>{
    axios.get("/api/manufacture-list",config).then(res=>{ 
        console.log(res)
    dispatch({
            type:GET_ALL_MANUFACTURE_ACTON,
            payload:res.data

        })
    })
}
export const getAllPlantCategories = ()=> dispatch =>{
    axios.get("/api/plant-categories",config).then(res=>{ 
        console.log(res)
    dispatch({
            type:GET_ALL_PLANT_CATEGORIES,
            payload:res.data

        })
    })

}
export const handleCategoryInputAction = (name) =>dispatch=>{
    console.log(name)
 dispatch({
     type:HANDLE_CATEGORY_INPUT_DATA,
     name:name
    
 })
}
export const handleAddCategory = (data) =>dispatch=>{
    console.log(data)
    let plantCategoryObject={}
    plantCategoryObject.name=data
    plantCategoryObject.status="1"
    // console.log(name)plant-add-category
    return axios.post("/api/plant-add-category",plantCategoryObject,config).then(res=>{ 
        console.log(res)
    dispatch({
            type:HANDLE_ADD_PLANT_CATEGORY,
            payload:res.data

        })
    })
}
export const handleDragDrop = (data) =>dispatch=>{
    console.log(data)
    let plantCategoryObject={}
    // plantCategoryObject.name=data
  
    if(data.status === "1"){
        plantCategoryObject.status="0"
    }
    else {
        plantCategoryObject.status="1"
    }
    return axios.post(`/api/plant-update-category/${data.id}`,plantCategoryObject,config).then(res=>{ 
        console.log(res)
    dispatch({
            type:HANDLE_DRAG_PLANT_CATEGORY,
            payload:res.data

        })
    })
}
export const handleCategoryDelete = (id) =>dispatch=>{
    let deleteId = parseInt(id)
    console.log(`/api/plant-delete-category/${deleteId}`)
    console.log(typeof(deleteId))

 
    return axios.post(`/api/plant-delete-category/${deleteId}`,config).then(res=>{ 
        console.log(res)
    dispatch({
            type:HANDLE_CATEGORY_DELETE,
            payload:res.data

        })
    })
}
