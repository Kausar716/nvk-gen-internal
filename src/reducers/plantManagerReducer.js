// import {v4 as v4} from 'uuid';
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
    
        //Plant page redirects action
    
        PAGE_PLANT_REDIRECT_ACTION,
        SUB_PLANT_PAGE_REDIRECT_ACTION,
    
        // Plant INPUT HANDLE
        HANDLE_PLANT_INPUT_DATA,
        HANDLE_PLANT_TAG_INPUT_DATA,
        HANDLE_PLANT_SKU_INPUT_DATA,

        // pagination
        SET_PLANT_PAGE_NUMBER,
        SET_PLANT_SKU_PAGE_NUMBER,
        


        //ERROR_HANDLE
        ERROR_HANDLE,

        //search plant
        HANDLE_SEARCH_INPUT,
        HANDLE_RADIO_TOGGLE,
        HANDLE_CATEGORY_SEARCH,

        GET_ALL_ATTRIBUtTES

} from '../actions/types';
// import {getAllImageAssets} from "../";

const initialSatate = {
    backupData:[],
  plantData:[],
  plantSkuData:[],
  plantPageToOpen:"all",
  actionType:"add",
  plantPageNumber:0,
  plantSkuPageNumber:0,
  needAction: false,
  plantDataById:{

    genus: "",
    alternate_genus: "",
    series: "",
    species: "",
    cultivar1: "",
    cultivar2: "",
    introduction_year: "",
    hardiness_zone: "",
    royality: "",
    patent: "",
    category_id: 3,
    in_production: "",
    archived: 0,
    discontinued: 0,
    notes: "",

  },
  plantSkuDataById:{
    sku_code: "",
    product_id: null,
    plant_id: "",
    each_cost: null,
    each_price: null,
    sale_price: null,
    sale_expiry_date: null,
    volume_quantity: null,
    volume_price_per_unit: null,
    sku_item_name: null,
    subcategory: null,
    archived: 0,
    discontinued: 0,
    location: null,
    status: 1,
    attributes_subattributes:[]

  },
  tagsData: [],
  status:false

}

export default function(state = initialSatate, action){
    console.log(action)
    
    switch(action.type){
        // plant page redirects
        case PAGE_PLANT_REDIRECT_ACTION:
            return{            
                ...state,
                plantPageToOpen:action.page,
                actionType:action.actionType,
                plantDataById     :   {
                    genus: "",
                    alternate_genus: "",
                    series: "",
                    species: "",
                    cultivar1: "",
                    cultivar2: "",
                    introduction_year: "",
                    hardiness_zone: "",
                    royality: "",
                    patent: "",
                    category_id: 3,
                    in_production: "",
                    archived: 0,
                    discontinued: 0,
                    notes: "",
                },
                plantSkuDataById         :   {
                    sku_code: "",
    product_id: null,
    plant_id: "",
    each_cost: null,
    each_price: null,
    sale_price: null,
    sale_expiry_date: null,
    volume_quantity: null,
    volume_price_per_unit: null,
    sku_item_name: null,
    subcategory: null,
    archived: 0,
    discontinued: 0,
    location: null,
    status: 1,
    attributes_subattributes:[]
            
            
                },
                message:"",
                needAction:false,
                tagsData:[],
                actionType:"add"


            }
            case SUB_PLANT_PAGE_REDIRECT_ACTION:
                return{
                    ...state,
                    plantPageToOpen:action.page
                    
                }




        case GET_ALL_PLANT_ACTION:
            return{
                ...state,
                plantData:action.payload,
                backupData:action.payload

            }


            //pagination action 
            case SET_PLANT_PAGE_NUMBER:
                return{
                    ...state,
                    plantPageNumber:action.pageNumber
                }
            case GET_SPECIFIED_PLANT_ACTION:{
                return{
                    ...state,
                    ...state,
                    plantDataById:action.payload.data,
                    tagsData:JSON.parse(action.payload.data.common_name),
                    needAction:false,
                    actionType:action.actionType

                }
            }
        case HANDLE_PLANT_INPUT_DATA:{
            return{
                ...state,
                plantDataById:{...state.plantDataById, [action.itemId]:action.itemValue},
                needAction:true
            }
        }
        case HANDLE_PLANT_SKU_INPUT_DATA:{
            if(action.itemValue == "None"){
                let attributeValue = state.plantSkuDataById.attributes_subattributes
                let filteredAttribute = attributeValue.filter(filterData=>filterData.attribute_id != action.itemId)
                return{
                    ...state,
                    plantSkuDataById:{...state.plantSkuDataById,attributes_subattributes:filteredAttribute},
                    needAction:true
                }
            }
            if(!isNaN(action.itemId)){

                let attibuteData = {attribute_id:parseInt(action.itemId),subattribute_id:parseInt(action.itemValue)}
                let attributeValue = state.plantSkuDataById.attributes_subattributes
                let filteredAttribute = attributeValue.filter(filterData=>filterData.attribute_id != action.itemId)
                filteredAttribute.push(attibuteData)
                return{
                    ...state,
                    plantSkuDataById:{...state.plantSkuDataById,attributes_subattributes:filteredAttribute},
                    needAction:true
                }

            }else{
                return{
                    ...state,
                    plantSkuDataById:{...state.plantSkuDataById, [action.itemId]:action.itemValue},
                    needAction:true
                }
            }
        
        }
        case ERROR_HANDLE:
            return{
                ...state,
                status:action.status,
                message:action.message
            }



            // get all plant sku data
        case GET_ALL_PLANT_SKU_ACTION:
            return{
                ...state,
                plantSkuData:action.payload,

            }
        case SET_PLANT_SKU_PAGE_NUMBER:
            return{
                ...state,
                plantSkuPageNumber:action.skuPageNumber
            
            }
        case GET_PLANT_SPECIFIED_SKU_ACTION:
            return{
                ...state,
                plantSkuDataById:{...action.payload.data.sku,attributes_subattributes:action.payload.data.attributes}
            }
        case DELETE_PLANT_ACTION:
            return{
                ...state,
                needAction:false,
                actionType:"add",

            }


            //search plant 
            case HANDLE_SEARCH_INPUT:
                // console.log(action.payload)
                // let a = state.plantData.filter(filterData=>filterData.patent==action.payload)
                // console.log(a)
            
                    // filterData.patent==action.payload
                // })
                if(action.payload.trim() ==""){
                    return{
                        ...state,
                        plantData:state.backupData

                    }

                }else{
                    return{
                        ...state,
                        plantData:state.backupData.filter(filterData=>filterData.patent==action.payload.trim())
                    }

                }
            case HANDLE_RADIO_TOGGLE:
                if(action.payload =="active"){
                    return{
                        ...state,
                        plantData:state.backupData.filter(filterData=>filterData.archived==0)
    
                    }

                }
                if(action.payload =="archive"){
                    return{
                        ...state,
                        plantData:state.backupData.filter(filterData=>filterData.archived==1)
    
                    }
                }
                if(action.payload =="all"){
                    return{
                        ...state,
                        plantData:state.backupData
    
                    }
                    
                    
                }
            case HANDLE_CATEGORY_SEARCH:
                return{
                    ...state,
                    plantData:state.backupData.filter(filterData=>filterData.category_id ==action.payload)
                }
           

            
              

        
     






  
            default:
                return state
    }

}