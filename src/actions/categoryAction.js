import {
    // PRODUCT CATEGORY ACTION

    GET_ALL_PRODUCT_CATEGORIES_ACTION,

    // PRODUCT SUB CATEGORY ACTION
    GET_ALL_PRODUCT_SUB_CATEGORIES_ACTION,

    //MANUFACTURE action
    GET_ALL_MANUFACTURE_ACTON,


    ///GET_ALL_PLANT_CATEGORIES
    GET_ALL_PLANT_CATEGORIES,


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