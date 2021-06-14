// import {GET_USERS,GET_USER} from '../actions/types';
// const initialSatate = {
//     users:[
//         {
//             id:1,
//             firstName:"kausar",
//             lastName:"a",
//             position:"roal",
//             phone:"2323232323",
//             emailId:"kausarbanu716@gmail.com",
//             addressTitle:"title of add",
//             address:"12 ferdsj askdfm"

//         },
//         {
//             id:2,
//             firstName:"asd first name",
//             lastName:"a",
//             position:"roal",
//             phone:"2323232323",
//             emailId:"sdvfd716@gmail.com",
//             addressTitle:"title of add",
//             address:"12 ferdsj askdfm"
//         }
      
//     ],
//     loading:false
// }
// export default function(state = initialSatate, action){
    
//     switch(action.type){
        
//         case GET_USERS:
//             return{
//                 ...state
              
//             }
//             case GET_USER:
                
//                 return{
//                     ...state,
//                    user:state.users.filter(user=>user.id== action.payload)
//                 }
//             // case DELETE_ITEM:
//             //     return{
//             //         ...state,
//             //         items:state.items.filter(item=>item.id != action.payload)

//             //     }
//             //     case ADD_ITEM:
//             //     return{
//             //         ...state,
//             //         items:[action.payload, ...state.items]

//             //     }
//             //     case ITEMS_LOADING:
//             //         return{
//             //             ...state,
//             //             loading:true
    
//             //         }
//             default:
//                 return state
//     }

// }