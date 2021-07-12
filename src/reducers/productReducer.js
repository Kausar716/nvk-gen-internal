/* eslint-disable no-unused-vars */
// import {v4 as uuidv4} from 'uuid';

import actions from 'redux-form/lib/actions';
import {    
    //PRODUCT ACTION

    CREATE_PRODUCT_ACTION,
    UPDATE_PRODUCT_ACTION,
    DELETE_PRODUCT_ACTION,
    GET_ALL_PRODUCT_ACTION,
    GET_SPECIFIED_PRODUCT_ACTION,
    GET_SKU_SPECIFIED_PRODUCT,

    // SKU ACTION

    CREATE_SKU_ACTION,
    UPDATE_SKU_ACTION,
    DELETE_SKU_ACTION,
    GET_ALL_SKU_ACTION,
    GET_SPECIFIED_SKU_ACTION,
    UPDATE_SKU_ACTION_CLEAR,

    //PAGE REDIRECTS ACTION

    PAGE_REDIRECT_ACTION,
    SUB_PAGE_REDIRECT_ACTION,
    SET_PAGE_NUMBER,
    SET_SKU_PAGE_NUMBER,
    
    // INPUT HANDLE
    HANDLE_INPUT_DATA,
    HANDLE_TAG_INPUT_DATA,
    HANDLE_SKU_INPUT_DATA,
    ERROR_HANDLE,

    // filter category Data
    FILTER_CATEGORY_DATA,
    FILTER_GET_ALL_CATEGORY_DATA,
    FILTER_GET_SLECTED_CATEGORY_DATA,
    FILTER_GET_SLECTED_CATEGORY_SUB_DATA,
    HANDLE_SEARCH_PINPUT


} from '../actions/types';
let minMonth = new Date().getMonth()
let minDate = new Date().getDate()
let minDateFormate = minDate.toString().length===1?"0"+minDate:minDate
let minMonthFormate = minMonth.toString().length===1?"0"+(minMonth+1):(minMonth+1)



const initialSatate = {
   
    productData         :   [],
    skuData             :   [],
    poduct_idStoring:'',
   
    productDataById     :   {
        name:"",
        category_id:null,
        subcategory_id:null,
        manufacturer_id:null,
        archived:0,
        internal_notes:"",
        discontinued:0,
        status:1
    },
    skuDataById         :   {
        each_cost:null,
        each_price:null,
        sale_price:null,
        sale_expiry_date:new Date().getFullYear()+"-"+minMonthFormate+"-"+minDateFormate,
        sku_item_name:"",
        subcategory:null,
        discontinued:null,
        archived:null,
        status:1,
        supplier_id:1,
       


    },
    pageToOpen          :   "product",  // pageToOpen can be general, sku and product
    actionType          :   "add",      //action type can be add, edit, delete, and update
    status              :   false,      //status is used for modal if false close modal if true open modal,
    message             :   [],         // message is used for success and error messages
    productPageNumber   :   0,
    skuPageNumber       :   0,
    pageNumber          :   0,
    tagsData            :   [],
    needAction          :   false,
    backupData          :[],
    ae_product_id:"",
    productDataBySKUlist:[],

}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialSatate, action){
 //console.log("actions", action)
   
    switch(action.type){
        // page action
        case PAGE_REDIRECT_ACTION:
            return{
                ...state,
                pageToOpen:action.page,
                actionType:action.actionType,
                productDataById     :   {
                    name:"",
                    category_id:null,
                    subcategory_id:null,
                    manufacturer_id:null,
                    archived:0,
                    internal_notes:"",
                    discontinued:0,
                    status:1,
                },
                skuDataById         :   {
                    each_cost:null,
                    each_price:null,
                    sale_price:null,
                    sale_expiry_date:new Date().getFullYear()+"-"+minMonthFormate+"-"+minDateFormate,
                    sku_item_name:"",
                    subcategory:0,
                    discontinued:0,
                    status:1,
                    supplier_id:1,
                    archived:0,
                    //id:null
            
            
                },
                message:[],
                needAction:false,
                tagsData:[],
                skuValidation:{
                    each_cost:{
                        errorMessage:"",
                      
                    },
                    each_price:{
                        errorMessage:"",
                      
                    
                    },
                    sale_price:{
                        errorMessage:""
                       
                    },
                    sku_item_name:{
                        errorMessage:""
                    },
                    sub_category:{
                        errorMessage:""
                    }
                
                }

            }
            
         

        case SUB_PAGE_REDIRECT_ACTION:
            return{
                 ...state,
                 
                pageToOpen:action.page,
                productID:action.productID
            }

        //product action
        case GET_ALL_PRODUCT_ACTION:
//debugger;
console.log("actions", action.payload.data)
            return{
                 ...state,
                productData:action.payload.data,
                backupData:action.payload.data,
            }

        case GET_SKU_SPECIFIED_PRODUCT:
            //debugger;
           return {
                ...state,
                productDataBySKUlist:action.payload.data,
                //backupData:action.payload.data,

            }
            
        case GET_SPECIFIED_PRODUCT_ACTION:
           // debugger;
            //console.log("GET_SPECIFIED_PRODUCT_ACTION",action.payload.data)
            return{
                ...state,
                productDataById:action.payload.data,
                tagsData:JSON.parse(action.payload.data.common_name),
                needAction:false,
                actionType:action.actionType
            }
        case CREATE_PRODUCT_ACTION:
            return{
                ...state,
                needAction:false,
                ae_product_id:action.ae_product_id

            }
        case UPDATE_PRODUCT_ACTION:
            return{
                ...state,
                needAction:false
            }
        case DELETE_PRODUCT_ACTION:
            return{
                ...state,
                actionType:"add",
                productDataById     :   {
                    name:"",
                    category_id:null,
                    subcategory_id:null,
                    manufacturer_id:null,
                    archived:0,
                    internal_notes:"",
                    discontinued:0
                },
                skuDataById         :   {
                    each_cost:null,
                    each_price:null,
                    sale_price:null,
                    sale_expiry_date:null,
                    sku_item_name:null,
                    subcategory:null,
                    discontinued:0,
                    status:1,
                    archived:0,
                    supplier_id:1,
                    //id:null
                },
                needAction:false,
                tagsData:[]
            }

            case DELETE_SKU_ACTION:
                return{
                    ...state,
                    actionType:"add",
                    productDataById     :   {
                        name:"",
                        category_id:null,
                        subcategory_id:null,
                        manufacturer_id:null,
                        archived:0,
                        internal_notes:"",
                        discontinued:0
                    },
                    skuDataById         :   {
                        each_cost:null,
                        each_price:null,
                        sale_price:null,
                        sale_expiry_date:null,
                        sku_item_name:null,
                        subcategory:null,
                        discontinued:0,
                        status:1,
                        archived:0,
                        supplier_id:1,
                        //id:null
                    },
                    needAction:false,
                    tagsData:[]
                }
    //sku action
    case GET_ALL_SKU_ACTION:
       
        return{
            ...state,
            skuData:[...action.payload.data]
        
        }
    case UPDATE_SKU_ACTION:
        return{
        
            ...state,
            needAction:false
            
        }


    case CREATE_SKU_ACTION:
        return{
            //const skuData = state.
            ...state, 
            needAction:false
            // skuData:[...action.payload.data]
        };


    case UPDATE_SKU_ACTION_CLEAR:
        return{
            ...state,
            actionType:"add",
            productDataById     :   {
                name:"",
                category_id:null,
                subcategory_id:null,
                manufacturer_id:null,
                archived:0,
                internal_notes:"",
                discontinued:0
            },
            skuDataById         :   {
                each_cost:"",
                each_price:"",
                sale_price:"",
                sale_expiry_date:new Date(),
                sku_item_name:"",
                subcategory:null,
                discontinued:0,
                status:1,
                archived:0,
                supplier_id:1,
                //id:null
        
        
            },
            // eslint-disable-next-line no-dupe-keys
            actionType:"add",
            needAction:false,
            tagsData:[]
        }
    case GET_SPECIFIED_SKU_ACTION:
        return{
            
           ...state,
            skuDataById:action.payload,
            // productDataById:action.payload.data,
            //     tagsData:JSON.parse(action.payload.data.common_name),
                needAction:false,
                actionType:"edit"
        }

            
        // pagination action
        case SET_PAGE_NUMBER:
            return{
                ...state,
                pageNumber:action.pageNumber
            }
        case SET_SKU_PAGE_NUMBER:
            return{
                ...state,
                skuPageNumber:action.skuPageNumber
            }
        //input handle action
        case HANDLE_INPUT_DATA:
            return{
                ...state,
                productDataById:{...state.productDataById, [action.itemId]:action.itemValue},
                needAction:true

            }
        case HANDLE_SKU_INPUT_DATA:
            return{
                ...state,
                skuDataById:{...state.skuDataById,[action.itemId]:action.itemValue},
                needAction:true
            }
        //filter handle
        case FILTER_CATEGORY_DATA:
            return{
                ...state,
                productData:state.productData.filter(product=>
                    (product.category_id === action.categoryId) &&  
                    (product.subcategory_id ===  action.subCategoryId))
            
                }
        case FILTER_GET_ALL_CATEGORY_DATA:
            console.log("all cat")
            return{
                ...state,

            }

        case FILTER_GET_SLECTED_CATEGORY_DATA:
            // JSON.stringify(product.category_id )===action.categoryId
            return{
                ...state,
                productData:state.backupData.filter(product=>JSON.stringify(product.category_id )===action.categoryId)
            }
        case FILTER_GET_SLECTED_CATEGORY_SUB_DATA:
            //debugger;
            console.log("action123456", action)
            console.log("cat sub cat",state.productData)
         
            return{
                ...state,
                //productData:state.productData.filter(product=>(JSON.stringify(product.category_id)===action.categoryId && JSON.stringify(product.subcategory_id) ===  action.subCategoryId))
                productData:state.productData.filter(product=>( JSON.stringify(product.subcategory_id) ===  action.subCategoryId))
            }
        case ERROR_HANDLE:
            return{
                ...state,
                status:action.status,
                message:action.message
            }


            case HANDLE_SEARCH_PINPUT:
                //debugger;
                var optionVal = -1;
                var categoryVal = "";
                // if(action.payload.option ==="active"){
                //     optionVal = 0;
                // }
                // if(action.payload.option ==="archive"){
                //     optionVal = 1;
                // }
                categoryVal = action.payload.category;
                if(action.payload.category.trim() ==="" && optionVal === -1 && categoryVal === "0"){
                    return{
                        ...state,
                        productData:state.backupData
                    }
                }else{
                    return{
                        ...state,
                        productData:state.backupData.filter(
                            filterData=>(filterData.name===action.payload.category.trim() || action.payload.category.trim()==="") &&
                            (filterData.category_id === Number(categoryVal) || categoryVal === "0")
                            )
                    }

                }



        default:
            return state
     

        
    }

}