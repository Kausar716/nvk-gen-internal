import {
    GET_LOCATION_LIST,
    GET_PLANT_CATEGORY_LIST, 
    GET_PRODUCT_CATEGORY_LIST,
    GET_MANUFACTURER_CATEGORY_LIST,
    GETSUPPLIER_LIST,
    GET_ALL_PLANT_INVENTORY_ACTION,
    PRODUCT_INVENTORY_FILTER,
    GET_ALL_PRODUCT_INVENTORY_ACTION,
    PLANT_INVENTORY_FILTER,
    GET_ALL_PLANTMANAGER_INVENTORY_ACTION,
    GET_ALL_PRODUCTMANAGER_INVENTORY_ACTION,
    FILTER_PLANT_MANAGER_INVENTORY_ACTION,
    GET_PLANT_DATA,
    FILTER_PRODUCT_MANAGER_INVENTORY_ACTION,
    RESET_PRODUCT_MANAGER_INVENTORY_ACTION,
   } from '../actions/types';


const initialSatate = {
 locationList:[],
 locationListBackup:[],
 plantCategoryList:[],
 plantCategoryListBackup:[],
 plantInventoryData:[],
 backupPlantInventoryData:[],
 backupProductInventoryData:[],
 PlantNameToBeSearched:"",
 productCategoryList:[],
 productCategoryListBackup:[],
 productInventoryData:[],
 productInventoryDataBackup:[],
 manufacturerList:[],
 manufacturerListDataBackup:[],
 plantData:[],
 productData:[],
 plantFilterIds:{sku_code:"",genus:""},
 productFilterIds:{sku_code:"",name:"",archived:"All"},
 plantBackup:[],
 productBackup:[],

}

const groupArray =(objectToBeReduced)=>{
    let plantSearchResult={}
    if(objectToBeReduced.length>0)
    plantSearchResult=objectToBeReduced.reduce((acc, obj) => {
        const key = obj["id"];
        if (!acc[key]) {
           acc[key] = [];
        }
        // Add object to list for given key's value
        acc[key].push(obj);
        return acc;
    })
    let plantList=[]
    for(let key in plantSearchResult ){
        console.log(plantSearchResult[key])
        if(plantSearchResult[key]){
        if(plantSearchResult[key][0]){
            if(typeof(plantSearchResult[key][0]) === "object")
            plantList.push(plantSearchResult[key])
        }
        
        }
    }
    return plantList

}

const inventoryManagementReducer = (state = initialSatate, action)=> {
    switch(action.type){    
       
        case RESET_PRODUCT_MANAGER_INVENTORY_ACTION:
            return{
                ...state,
                productFilterIds:{},
                productData:state.productBackup
            }
        case FILTER_PLANT_MANAGER_INVENTORY_ACTION:
            let filterIds = state.plantFilterIds
            // if(action.id ==="status" ||action.id==="archived" || )
            // filterIds[action.id] = parseInt(action.value) ==0?1:0
             filterIds[action.id] = action.value
            let filterData = state.plantBackup.filter(plant=>{
                let notFoundCount = 0 
                Object.keys(filterIds).map(id=>{
                    if(filterIds[id] !=="All" && filterIds[id] !=="" ){
                        // let value = undefined
                        let value = filterIds[id]
                        if((id==="status" || id ==="archived" || id ==="status_1") && plant["archived"] == value){
                            
                        }
                        if((id ==="sku_code" || id ==="genus"||id ==="batch_code")  && plant[id].includes(filterIds[id])){

                        }
                        else if(parseInt(plant[id]) === parseInt(filterIds[id])){
                        }else notFoundCount++
                    }
                })
                if(notFoundCount ===0)return plant

            })
         console.log(filterData)
            // ids.location_id
            return{
                ...state,
                plantData:filterData,
                plantFilterIds:filterIds
            }
            case FILTER_PRODUCT_MANAGER_INVENTORY_ACTION:
                // alert()
                let filterIds1 = state.productFilterIds
                if(action.id ==="status" ||action.id ==="archived" ||action.id ==="status_1"){
                    // filterIds1["archived"] =0
                    filterIds1["archived"] =action.value
                }
              
                
                else filterIds1[action.id] = action.value
                let filterData1 = state.productBackup.filter(product=>{
                    let notFoundCount = 0 
                    Object.keys(filterIds1).map(id=>{
                        if(filterIds1[id] !=="All" && filterIds1[id] !==""){
                            if((id==="status" || id ==="archived" || id ==="status_1")){
                                // let value = parseInt(filterIds1[id])
                                if(parseInt(product["archived"]) ===parseInt(filterIds1[id])){
    
                                }
                                
                            }
                            // alert("s")
                            if((id ==="sku_code" || id ==="name"||id ==="batch_code")  && product[id].includes(filterIds1[id])){
    
                            }
                            else if(parseInt(product[id]) === parseInt(filterIds1[id])){
                            }else notFoundCount++
                        }
                    })
                    if(notFoundCount ===0)return product
    
                })
             console.log(filterData1)
                // ids.location_id
                return{
                    ...state,
                    productData:filterData1,
                    productFilterIds:filterIds1
                }
        case GET_PLANT_DATA:
            return{
                ...state,
                plantData:action.payload.data,
                plantBackup:action.payload.data
            }
          
        case GET_LOCATION_LIST:
            return{
                ...state,
                locationList:action.payload,
                locationListBackup:action.payload              
            }
        case GET_PLANT_CATEGORY_LIST:
            return{
                ...state,
                plantCategoryList:action.payload,
                plantCategoryListBackup:action.payload              
            }
        case GET_PRODUCT_CATEGORY_LIST:
            return{ 
                ...state,
                productCategoryList:action.payload,
                productCategoryListBackup:action.payload   
            }
        case GET_MANUFACTURER_CATEGORY_LIST:
            console.log(action.payload)
            return{
                    ...state,
                    manufacturerList:action.payload,
                    manufacturerListDataBackup:action.payload   
            }
            case GET_ALL_PLANT_INVENTORY_ACTION:
                let returnPlantAllList=[]
                if(action.payload.length>0){
                    // returnPlantAllList = groupArray(action.payload)
                }
                return{
                    ...state,
                    plantInventoryData:action.payload,
                    backupPlantInventoryData:action.payload
    
                }
            case PLANT_INVENTORY_FILTER:
                console.log(state.backupPlantInventoryData)
                let backupPlantList = state.backupPlantInventoryData
               let plantResult =  backupPlantList.filter(plantFiltereData=>
                    (action.payload.category !== ""?(parseInt(action.payload.category) === plantFiltereData["category_id "] ):true)&&
                    (action.payload.location?(action.payload.location === plantFiltereData.location_id ):true)&&
                    (action.payload.supplier_id?(action.payload.supplier_id === plantFiltereData.supplier_id ):true)&&
                    (action.payload.plant_search_param !== ""?(plantFiltereData["genus"].toLocaleLowerCase().includes(action.payload.plant_search_param.toLocaleLowerCase())):true)&&
                    (action.payload.sku_search_param?(plantFiltereData.sku_code).toLocaleLowerCase().includes(action.payload.sku_search_param.toLocaleLowerCase() ):true)&&
                    (action.payload.plantActive?(plantFiltereData["plant_status"] === "1" ):true)&&
                    (action.payload.skuActive?(plantFiltereData.archived === 1 ):true)
                )
                // let returnPlantList = groupArray(plantResult)
                return{
                    ...state,
                    plantInventoryData:plantResult
                }
            case PRODUCT_INVENTORY_FILTER:
                // let returnProductList = groupArray(action.payload)
                console.log(action.payload)
                // console.log(state.backupPlantInventoryData)
                let backupProductList = state.backupProductInventoryData
                console.log(backupProductList)
               let productResult =  backupProductList.filter(productFiltereData=>
                    ((action.payload.category !== "" && action.payload.category !== 0)?(action.payload.category === productFiltereData["category_id "] ):true)&&
                    ((action.payload.location !== "" && action.payload.location !== 0)  ?(action.payload.location === productFiltereData.location_id ):true)&&
                    ((action.payload.manufacturer_id !== "" && action.payload.manufacturer_id !== 0) ?(action.payload.manufacturer_id === productFiltereData.manufacturer_id ):true)&&
                    (action.payload.product_search !== ""?(productFiltereData["name"].toLocaleLowerCase().includes(action.payload.product_search.toLocaleLowerCase())):true)&&
                    (action.payload.sku_search_param?(productFiltereData.sku_code).toLocaleLowerCase().includes(action.payload.sku_search_param.toLocaleLowerCase() ):true)&&
                    (action.payload.prodctActive?(productFiltereData["product_status"] === "1" ):true)&&
                    (action.payload.skuActive?(productFiltereData.archived === 1 ):true)
                )
                console.log(productResult)
    
                return{
                    ...state,
                    productInventoryData:productResult,
                    
                }
            case GET_ALL_PRODUCT_INVENTORY_ACTION:
                return{
                    ...state,
                    productData:action.payload.data,
                    productBackup:action.payload.data
                }
            case GET_ALL_PLANTMANAGER_INVENTORY_ACTION:
                return{

                }
            case GET_ALL_PRODUCTMANAGER_INVENTORY_ACTION:
            return{

            }
            default:
                return state
    }

}
export default inventoryManagementReducer


