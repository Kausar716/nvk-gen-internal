/* eslint-disable no-dupe-keys */
// import {v4 as v4} from 'uuid';
import {
        //Plant ACTION
        CREATE_PLANT_ACTION,
        UPDATE_PLANT_ACTION,
        DELETE_PLANT_ACTION,
        GET_ALL_PLANT_ACTION,
        GET_SPECIFIED_PLANT_ACTION,
        DUPLICTE_PLANT,
        UPDATE_CHECK_BOX,
        CHECK_BOX,
    
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
       // HANDLE_PLANT_TAG_INPUT_DATA,
        HANDLE_PLANT_SKU_INPUT_DATA,
        CLEAR_SKU_FIELDS_PLANT,
        // pagination
        SET_PLANT_PAGE_NUMBER,
        SET_PLANT_SKU_PAGE_NUMBER,
        


        //ERROR_HANDLE
        ERROR_HANDLE,

        //search plant
        HANDLE_SEARCH_INPUT,
        // HANDLE_RADIO_TOGGLE,
        // HANDLE_CATEGORY_SEARCH,

        //GET_ALL_ATTRIBUtTES

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
    category_id: "",
    in_production: 1,
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
    archived: "0",
    discontinued: 0,
    location: null,
    status: 1,
    attributes_subattributes:[],


  },
  tagsData: [],
  status:false,
  ae_plant_id:"",
  plantSkuDataList:[]

}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialSatate, action){
    console.log(action)
    switch(action.type){
        // plant page redirects
        case CHECK_BOX:
            let plantData1 = state.plantData
   

            // if(action.typetoshow!=="in_production" && action.obj[action.typetoshow]===1)
            plantData1[action.index] = {...plantData1[action.index],...action.obj}
            // else  plantData1[action.index]["status"] = 1

           
            // console.log(plantData1[action.index])
            console.log(plantData1)
            return{
                ...state,
                plantData:plantData1
            }
        case UPDATE_CHECK_BOX:
            let plantData = state.plantData
            plantData[action.index][action.typetoshow]= action.obj[action.typetoshow]
            return{
                ...state,
                plantData:plantData,
            }
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
                    category_id: "",
                    in_production: 1,
                    archived: 0,
                    discontinued: 0,
                    notes: ""
                },
                plantSkuDataById         :   {
                sku_code: "",
                plant_id: "",
                each_cost: null,
                each_price: null,
                sale_price: null,
                sale_expiry_date: null,
                volume_quantity: null,
                volume_price_per_unit: null,
                sku_item_name: null,
                subcategory: null,
                archived: "0",
                discontinued: 0,
                location: null,
                status: 0,
                attributes_subattributes:[]           
            
                },
                message:"",
                needAction:false,
                tagsData:[],
                actionType:"add",
                plantSkuDataList:[],
                ae_plant_id:""


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


            case CREATE_PLANT_ACTION:
                console.log(action)
                console.log(state)
                return{
                    ...state,
                    needAction:false,
                    ae_plant_id:action.ae_plant_id,
                    createdPlantData:action.createdPlantData,
                    actionType:"edit"
    
                }
             case UPDATE_PLANT_ACTION:
                 return{
                    ...state,
                    needAction:false,
                    ae_plant_id:action.ae_plant_id,
                    createdPlantData:action.createdPlantData
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
                    actionType:action.actionType,
                    ae_plant_id:action.payload.data.plant_id
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
            if(action.itemValue === "None"){
                let attributeValue = state.plantSkuDataById.attributes_subattributes
                let filteredAttribute = attributeValue.filter(filterData=>filterData.attribute_id !== action.itemId)
                return{
                    ...state,
                    plantSkuDataById:{...state.plantSkuDataById,attributes_subattributes:filteredAttribute},
                    needAction:true
                }
            }
            if(!isNaN(action.itemId)){
                let attributeValue = state.plantSkuDataById.attributes_subattributes
                console.log(action.itemValue)
             
                if(action.itemId === 4 || action.itemId === "4" ){
                    console.log(attributeValue)
                    attributeValue.filter(att=>{
                        if(att.attribute_id === 4)
                        console.log(att)
                    })
                  
                }
                let attibuteData = {attribute_id:parseInt(action.itemId),subattribute_id:parseInt(action.itemValue)}
                // let attributeValue = state.plantSkuDataById.attributes_subattributes
                let attributeUpdated = false
                // let filteredAttribute = attributeValue.filter(filterData=>filterData.attribute_id !== action.itemId)
                // filteredAttribute.push(attibuteData)
                if(attributeValue.length>0){
                    attributeValue.map(attributeObj =>{
                        if(attributeObj.attribute_id === parseInt(action.itemId) ){
                            attributeObj.subattribute_id = parseInt(action.itemValue)
                            attributeUpdated = true
                        }
                    })
                     if(!attributeUpdated ){
                        attributeValue.push(attibuteData)
                    }
                }
                else {
                    attributeValue.push(attibuteData)
                }                
                return{
                    ...state,
                    plantSkuDataById:{...state.plantSkuDataById,attributes_subattributes:attributeValue},
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
                plantSkuDataList:action.payload.data
            }
        case DELETE_PLANT_ACTION:
            return{
                ...state,
                needAction:false,
                actionType:"add",
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
                    category_id: "",
                    in_production: 1,
                    archived: 0,
                    discontinued: 0,
                    notes: ""
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
                    archived: "0",
                    discontinued: 0,
                    location: null,
                    status: 1,
                    attributes_subattributes:[],
                  },
                  tagsData: [],
                  status:false,
                  ae_plant_id:"",
                plantSkuDataList:[]

            }
        case DUPLICTE_PLANT:
            return{
                ...state,
                needAction:false,
                actionType:"add",
            }
        case DELETE_PLANT_SKU_ACTION:
            console.log(action)
            return{
                    ...state,
                    actionType:"add",
            }


            //search plant 
            case HANDLE_SEARCH_INPUT:
                var optionVal = -1;
                var categoryVal = "";
                if(action.payload.option ==="active"){
                    optionVal = 0;
                }
                if(action.payload.option ==="archive"){
                    optionVal = 1;
                }
                categoryVal = action.payload.category;
                if(action.payload.plant.trim() ==="" && optionVal === -1 && categoryVal === "0"){
                    return{
                        ...state,
                        plantData:state.backupData
                    }
                }
                if(action.payload.plant.trim() ==="" &&  categoryVal !== "0"){
                    return{
                        ...state,
                        plantData:state.backupData.filter(
                            filterData=>( action.payload.plant==="") &&
                            (filterData.archived===optionVal || optionVal===-1) &&
                            (filterData.category_id === Number(categoryVal) || Number(categoryVal) === 0)
                            )
                    }
                }
                
                else{
                    return{
                        ...state,
                        plantData:state.backupData.filter(
                            filterData=>((filterData.genus?filterData.genus.toLowerCase().indexOf(action.payload.plant.trim().toLowerCase()) > -1:false) || action.payload.plant==="") &&
                            (filterData.archived===optionVal || optionVal===-1) &&
                            (filterData.category_id === Number(categoryVal) || Number(categoryVal) === 0)
                            )
                    }

                }
            // case HANDLE_RADIO_TOGGLE:
            //     if(action.payload ==="active"){
            //         return{
            //             ...state,
            //             plantData:state.backupData.filter(filterData=>filterData.archived===0)
    
            //         }

            //     }
            //     if(action.payload ==="archive"){
            //         return{
            //             ...state,
            //             plantData:state.backupData.filter(filterData=>filterData.archived===1)
    
            //         }
            //     }
            //     if(action.payload ==="all"){
            //         return{
            //             ...state,
            //             plantData:state.backupData
    
            //         }
                    
                    
            //     }
            //     break;
            // case HANDLE_CATEGORY_SEARCH:
            //     return{
            //         ...state,
            //         plantData:state.backupData.filter(filterData=>filterData.category_id === Number(action.payload))
            //     }
                
           case UPDATE_PLANT_SKU_ACTION :
               return{
                ...state, 
                needAction:false
               }
            
            case CREATE_PLANT_SKU_ACTION :
                return{
                    //const skuData = state.
                    ...state, 
                    needAction:false,
                    // skuData:[...action.payload.data]
                };
            case CLEAR_SKU_FIELDS_PLANT:
                return{
                    ...state,
                    plantSkuDataById         :   {
                        sku_code: "",
                        plant_id: "",
                        each_cost: "",
                        each_price: "",
                        sale_price: "",
                        sale_expiry_date: "",
                        volume_quantity: "",
                        volume_price_per_unit: "",
                        sku_item_name: "",
                        subcategory: "",
                        archived: "0",
                        discontinued: 0,
                        location: "",
                        status: 0,
                        attributes_subattributes:[]           
                    
                        }

                }
            case GET_SINGLE_PLANT_SKU:
                console.log(action)
                return{
                    ...state,
                    action:action,
                    actionType:action.actionType,
                    plantSkuDataById:{...action.plantSkuDataById.plant[0],attributes_subattributes:action.plantSkuDataById.attributes_subattributes}

                }
        
  
            default:
                return state
    }

}