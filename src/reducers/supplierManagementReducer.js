import {
    ADD_SUPPLIER,
    ADD_SUPPLIER_DELIVERY_LOCATION,
    ADD_SUPPLIER_CONTACT ,
    ADD_SUPPLIER_CATEGORY, 
    CREATE_SUPPLIER_ADDRESS,
    ADD_SUPPLIER_REASON, 
   
    GET_ALL_SUPPLIER ,
    GET_ALL_SUPPLIER_ADDRESS,
    GET_ALL_SUPPLIER_CONTACT ,
    GET_ALL_SUPPLIER_DELIVERY_LOCATION, 
    GET_ALL_SUPPLIER_CATEGORIES,
    GET_ALL_SUPPLIER_REASONS, 
    GET_SPECIFIED_SUPPLIER_DELIVERY_LOCATION ,
    GET_SPECIFIED_SUPPLIER_REASON, 
    GET_SPECIFIED_SUPPLIER_ADDRESS,
    GET_SPECIFIED_SUPPLIER_CONTACT,
    GET_SPECIFIED_SUPPLIER ,
    GET_SPECIFIED_SUPPLIER_CATEGORY, 
   
    UPDATE_SUPPLIER ,
    UPDATE_SUPPLIER_REASON ,
    UPDATE_SUPPLIER_ADDRESS,
    UPDATE_SUPPLIER_CONTACT,
    UPDATE_SUPPLIER_DELIVERY_LOCATION, 
    UPDATE_DELIVERY_CATEGORY,
   
    DELETE_SUPPLIER ,
    DELETE_SUPPLIER_REASON, 
    DELETE_SUPPLIER_ADDRESS ,
    DELETE_SUPPLIER_DELIVERY_LOCATION,
    DELETE_SUPPLIER_CONTACT,
    DELETE_SUPPLIER_CATEGORY,
   
    REMOVE_SUPPLIER_REASON_FROM_ACTIVE_TO_INACTIVE ,
    REMOVE_SUPPLIER_REASON_FROM_INACTIVE_TO_ACTIVE, 
    ADD_ALL_SUPPLIER_REASON_FROM_INACTIVE_ACTIVE, 

    FETCH_SUPPLIER_ERROR,
    FETCH_SUPPLIER_LOADING,
    FETCH_SUPPLIER_SUCCESS,

    EDIT_SUPPLIER_ERROR,
    EDIT_SUPPLIER_SUCCESS,

    DELETE_SUPPLIER_ERROR,
    DELETE_SUPPLIER_SUCCESS,



    config,
    axios,

} from '../actions/types';






const defaultState={
    supplierInfo:[],
    error:null,
    isLoading:false
};

const supplierManagementReducer =(state=defaultState, action)=>{
        switch(action.type){
            case FETCH_SUPPLIER_SUCCESS:
                return {...state, supplierInfo:action.payload}

            case FETCH_SUPPLIER_LOADING:
                return {...state, isLoading:action.payload};


            case FETCH_SUPPLIER_ERROR:
                return {...state, error:action.payload};

            case GET_ALL_SUPPLIER:
                return {...state, supplierInfo:action.payload};


            case ADD_SUPPLIER:
                const suppliers = state.suppliers.concat(action.payload);
                return {...state, suppliers}

            default:
                return state;

        }
       
}

export default supplierManagementReducer;