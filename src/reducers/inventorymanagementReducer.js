import {
    GET_LOCATION_LIST,
    GET_Plant_CATEGORY_LIST, 
    GETSUPPLIER_LIST,
    GET_ALL_PLANT_INVENTORY_ACTION,
    PRODUCT_INVENTORY_FILTER,
    GET_ALL_PRODUCT_INVENTORY_ACTION,
    PLANT_INVENTORY_FILTER
   } from '../actions/types';


const initialSatate = {
 locationList:[],
 locationListBackup:[],
 plantCategoryList:[],
 plantCategoryListBackup:[],
 plantInventoryData:[],
 backupPlantInventoryData:[],
 PlantNameToBeSearched:""
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
        
        case GET_LOCATION_LIST:
            return{
                ...state,
                locationList:action.payload,
                locationListBackup:action.payload              
            }
        case GET_Plant_CATEGORY_LIST:

            return{
                ...state,
                plantCategoryList:action.payload,
                plantCategoryListBackup:action.payload              
            }
            case GET_ALL_PLANT_INVENTORY_ACTION:
                let returnPlantAllList=[]
                if(action.payload.length>0){
                    returnPlantAllList = groupArray(action.payload)
                }
                return{
                    ...state,
                    plantInventoryData:returnPlantAllList,
                    backupPlantInventoryData:action.payload
    
                }
            case PLANT_INVENTORY_FILTER:
                let returnPlantList = groupArray(action.payload)
                return{
                    ...state,
                    plantInventoryData:returnPlantList
                }
            case PRODUCT_INVENTORY_FILTER:
                let returnProductList = groupArray(action.payload)
                return{
                    ...state,
                    productInventoryData:returnProductList
                }
            case GET_ALL_PRODUCT_INVENTORY_ACTION:
                console.log(action.payload)
                let returnProducAlltList = groupArray(action.payload)
                console.log(returnProducAlltList)
                return{
                    ...state,
                    productInventoryData:returnProducAlltList
                }
            default:
                return state
    }

}
export default inventoryManagementReducer


