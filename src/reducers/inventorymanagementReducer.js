import {
    GET_LOCATION_LIST,
    GET_Plant_CATEGORY_LIST, 
    GETSUPPLIER_LIST,
    GET_ALL_PLANT_INVENTORY_ACTION,
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
                let plantSearchResult1={}
                if(action.payload.length>0)
                plantSearchResult1=action.payload.reduce((acc1, obj1) => {
                    const key1 = obj1["id"];
                    if (!acc1[key1]) {
                       acc1[key1] = [];
                    }
                    // Add object to list for given key's value
                    acc1[key1].push(obj1);
                    return acc1;
                })
                let plantList1=[]
                for(let key1 in plantSearchResult1 ){
                    console.log(plantSearchResult1[key1])
                    if(plantSearchResult1[key1]){
                    if(plantSearchResult1[key1][0]){
                        if(typeof(plantSearchResult1[key1][0]) === "object")
                        plantList1.push(plantSearchResult1[key1])
                    }
                    
                    }
                }

                return{
                    ...state,
                    plantInventoryData:plantList1,
                    backupPlantInventoryData:action.payload
    
                }
            case PLANT_INVENTORY_FILTER:
                console.log(action)
                console.log(state.backupPlantInventoryData)
              
                    // var i = 0, val, index,
                    //     values = [], result = [];
                    // for (; i < action.payload.length; i++) {
                    //     val = action.payload[i]["id"];
                    //     index = values.indexOf(val);
                    //     if (index > -1)
                    //         result[index].push(action.payload[i]);
                    //     else {
                    //         values.push(val);
                    //         result.push([action.payload[i]]);
                    //     }
                    // }
                    //  console.log(result)
                    
                    let plantSearchResult={}
                    if(action.payload.length>0)
                    plantSearchResult=action.payload.reduce((acc, obj) => {
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
                    console.log(plantList)
                    console.log(plantSearchResult)
             
              
                return{
                    plantInventoryData:plantList
                }
            default:
                return state
    }

}
export default inventoryManagementReducer


