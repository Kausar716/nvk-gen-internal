import { keys } from '@material-ui/core/styles/createBreakpoints';
import { formValues } from 'redux-form';

import smAddress from '../components/apis/smAddress'

// import {contactsSuppliers} from '../components/SupplierManagement/Supplier_Contacts/data';
import {

    ADD_SUPPLIER_CONTACT_ERROR ,
    ADD_SUPPLIER_CONTACT_LOADING,
    ADD_SUPPLIER_CONTACT_SUCCESS ,
   
    DELETE_SUPPLIER_CONTACT_ERROR ,
    DELETE_SUPPLIER_CONTACT_LOADING ,
    DELETE_SUPPLIER_CONTACT_SUCESS ,
       
    EDIT_SUPPLIER_CONTACT_ERROR,
    EDIT_SUPPLIER_CONTACT_LOADING ,
    EDIT_SUPPLIER_CONTACT_SUCCESS,
       
    FETCH_SUPPLIER_CONTACT_ERROR ,
    FETCH_SUPPLIER_CONTACT_LOADING,
    FETCH_SUPPLIER_CONTACT_SUCCESS ,



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

} from './types';


//CREATE

export const createSupplierInfo =(supplierInfo)=>{
    const data ={
        supplierName:supplierInfo.supplier_name,
        fax:supplierInfo.fax,
        alternative_ID: supplierInfo.alternative_id,
        wesite:supplierInfo.website,
        SupplierNotes:supplierInfo.supplier_notes,
    }

    return (dispatch)=>{
        return  axios.post("/api/add-supplier",config, data)
            .then(response =>{
                
                   // debugger;
            }).catch(error =>{

            });

    }

}





export const fetchSupplierSuccess = (data)=>{
    return{
        type:"FETCH_SUPPLIER_SUCCESS",
        payload:data,
    }
}



export const fetchSupplierLoading =(data) =>{
    return{
        type:FETCH_SUPPLIER_LOADING,
        payload:data,
    }
}


export const fetchSupplierError =(data) =>{

    // debugger;
    return{
        type:FETCH_SUPPLIER_ERROR,
        payload:data,
    }
}



export const getAllSupplierAction = () => dispatch => {
    axios.get("/api/suppliers",config).then(res=>{ 
    dispatch({
            type:GET_ALL_SUPPLIER,
            payload:res.data

        })

        .catch(error =>{
            const errorMsg = error.message
        })
    })
}


const normalizeResponse=(data)=>{
    const arr = data.map(item=>{
        const key = Object.keys(item);

        keys.forEach(k=>{
            item[k.toLocaleLowerCase()] =item[k];
            delete item[k];
        })

        return item;
    })

    return arr;
}


export const getSupplierData =()=>{
    let isLoading = true;

    return(dispatch)=>{
        dispatch(fetchSupplierLoading(isLoading));

        return axios.get("/api/suppliers",config)
            .then(response =>{
                const data = normalizeResponse(response.data.data.active);

        // dispatch({
        //     type: 'GET_ALL_SUPPLIER',
        //     payload:response.data
        // })

                    dispatch(fetchSupplierSuccess(data));
                    isLoading = false;
                    dispatch(fetchSupplierLoading(isLoading));
        
    })

    .catch(error =>{

        const errorPayload={};
        errorPayload['statusText'] =error.response.statusText;
        errorPayload['status'] =error.response.status;

        dispatch(fetchSupplierError(errorPayload));

        console.log("getSupplierData ERROR", error);
        isLoading=false;
        dispatch(fetchSupplierLoading(isLoading));
     });
    
    };
    
}


export const addSupplierDetails = (userObj)=>{
    return(dispatch)=>{
        axios.post("/api/add-supplier",config, userObj)
        .then(response=>{
            console.log("Addresponse", response)
            
            dispatch({
                type:'ADD_SUPPLIER',
                payload:response.data

            })
        })

        .catch(error =>{
            console.log("ADD_SUPPLIER Error", error)
         });
        
    }

}



//CONTACT DETAILS HERE


export const fetchContactSupplierSuccess =(data)=>{
//   debugger;

    return{
        type: FETCH_SUPPLIER_CONTACT_SUCCESS,
        payload: data,
    }
} 

export const ferchSupplierContactsLoading = (data)=>{
        // debugger
    return{
        type: FETCH_SUPPLIER_CONTACT_LOADING,
        payload:data,
    };
};


export const fetchSupplierContactError=(data)=>{
    // debugger
    return {
        type:FETCH_SUPPLIER_CONTACT_ERROR,
        payload:data,
    }
}


const normalizeResponse_contact=(data)=>{
    const arr = data.map(item=>{
        const key = Object.keys(item);

        keys.forEach(k=>{
            item[k.toLocaleLowerCase()] =item[k];
            delete item[k];
        })

        return item;
    })

    return arr;
}


export const fetchContactSupplier=()=>{
       


    let isLoading = true;

    return (dispatch)=>{
        // dispatch(ferchSupplierContactsLoading(isLoading));
       return axios.get("api/suppliers-contacts",config)
                .then(response=>{
                    //debugger;
                     console.log("RESPONSEHERE",response )
                    
                            const data =normalizeResponse_contact(response.data.data.active);
                            dispatch(fetchContactSupplierSuccess(data));
                            isLoading=false;
                            dispatch(ferchSupplierContactsLoading(isLoading));
                }).catch(error=>{
                            const errorPayload = {};
                            errorPayload['statusText'] =error.response.statusText;
                            errorPayload['status'] =error.response.status;
                            dispatch(fetchSupplierContactError(errorPayload))

                        isLoading=false;
                        dispatch(ferchSupplierContactsLoading(isLoading));

                });
    }
}



//CREATE
export const createSupplierContactInfoSuccess =(data)=>{

    return{
        type:ADD_SUPPLIER_CONTACT_SUCCESS,
        payload:data,
    }
}


export const createSupplierContactInfoError =(data)=>{
    return {
        type:ADD_SUPPLIER_CONTACT_ERROR,
        payload:data,

    }
}



export const createSupplierContactInfo =(contact)=>{
      //debugger;
        if(contact.id){
            const data = {
                id:contact.id,
                supplier_id:1,
                contact_name: contact.contact_name,
                contact_email:contact.contact_email,
                phone1:contact.phone1,
                phone2:contact.phone2,
                status:contact.status,
            };


            return(dispatch)=>{
                dispatch(editSupplierContactInfo(data))
            }

        }

        else{

            const data={
                supplier_id:1,
                contact_name: contact.contact_name,
                contact_email:contact.contact_email,
                phone1:contact.phone1,
                phone2:contact.phone2,
                status:contact.status,
        
            };
                return(dispatch)=>{
                    console.log("postapi", data)
                        return axios.post(`api/add-supplier-contact`,data, config)
                            .then(response=>{
                                
                                console.log("addcontactSupplier Response", response)
                                const id = response.data.data.id;
                                console.log("id of created supplier here", id);
                                
                                axios.get(`api/supplier-contact/${id}`,config)
                                
                                    .then(response=>{
                                     
                                            dispatch(createSupplierContactInfoSuccess(response.data.data));
        
                                    }).catch(error=>{
                                        const errorPayload ={}
                                        errorPayload['statusText'] =error.response.statusText;
                                        errorPayload['status'] =error.response.status;
                                        dispatch(createSupplierContactInfoError(error));
                                    })
        
                            }).catch(error=>{
                                const errorPayload ={}
                                errorPayload['statusText'] =error.response.statusText;
                                errorPayload['status'] =error.response.status;
                                dispatch(createSupplierContactInfoError(error));
                            });
                            
                        
                }

        }

  

}



//EDIT

export const editSupplierContactInfoError =(data)=>{
    return{
        type:EDIT_SUPPLIER_CONTACT_ERROR,
        payload:data
    }

}

export const editSupplierContactInfoSuccess =(data)=>{
    return{
        type:EDIT_SUPPLIER_CONTACT_SUCCESS,
        payload:data,
    }
}


export const  editSupplierContactInfo =(data)=>{

    console.log("editSupplierContactInfo", data)
    const id=data.id;


    return(dispatch)=>{
        return axios.post(`api/update-supplier-contact/${id}`,data, config)
                   
            .then(()=>{
                    return axios.get(`api/supplier-contact/${id}`,data, config)
                        .then(response=>{
                           dispatch(editSupplierContactInfo(response.data.data));
                        }).catch(error=>{
                            const errorPayload ={};
                            errorPayload['statusText'] =error.response.statusText;
                            errorPayload['status'] =error.response.status;
                            dispatch(editSupplierContactInfoError(errorPayload));
                        })
            }).catch((error)=>{

                // const errorPayload ={};
                // errorPayload['statusText'] =error.response.statusText;
                // errorPayload['status'] =error.response.status;
                // dispatch(editSupplierContactInfoError(errorPayload));

            })
    }
}


//DELETE



//FETCH



//ADDRESS SUPPLIER STARTS FROM HERE


export const createAddress =formValues => async (dispatch) =>{
    const data={
        supplier_id:1,
        contact_name:'Bangalore',
        shipping_address:'Bangalore',
        billing_address:'bangalore',
        status:1,
    };
    const FinalValue = {...data, ...formValues}
        const response = await smAddress.post('/api/add-supplier-address', FinalValue, config);
console.log("CETEADDRESS",response )
        dispatch({type:CREATE_SUPPLIER_ADDRESS, payload:response.data.data});  
    
};
export const getAddress =() =>async dispatch=>{
    const response = await smAddress.get('/api/supplier-addresses', config);
    // debugger;
        console.log("responeforGETALL", response)
    dispatch({type:GET_ALL_SUPPLIER_ADDRESS, payload:response.data.data.active}); 
};


export const getSpecifiedAddress=(id)=> async dispatch =>{
    const response = await smAddress.get(`/api/supplier-address/${id}`, config);
    dispatch({type:GET_SPECIFIED_SUPPLIER_ADDRESS, payload:response.data.data});
};

export const updateAddress=(id, formValues)=>async dispatch=>{
    const data={
        supplier_id:1,
        contact_name:'Bangalore',
        shipping_address:'Bangalore',
        billing_address:'bangalore',
        status:1,
    };
    const FinalValue = {...data, ...formValues}
    const response = await smAddress.put(`/api/update-supplier-address/${id}`,FinalValue , config);
    dispatch({type:UPDATE_SUPPLIER_ADDRESS, payload:response.data.data});
};



export const deleteAddress=(id)=>async dispatch=>{
    await smAddress.delete(`/api/delete-supplier-address/${id}`);
    dispatch({type:DELETE_SUPPLIER_ADDRESS,payload:id});
};



export const onClickValueID =(id)=>{



}





// export const createContact = (formValues) => dispatch => {

//     const data={
//         supplier_id:1,
//         contact_name: '',
//         contact_email:'',
//         phone1:'',
//         status:1,
//     };
//     let error = []
//     axios.post(`/api/add-supplier-contact/${id}?type=product`,null,config).then(res=>{ 
//         dispatch(getAllProductAction())
//         dispatch(getAllSkuAction())
//         // dispatch(deleteSkuAction(id))
//         dispatch({
//             type:DELETE_PRODUCT_ACTION
//         })
//         error.push("Product deleted successfully",)
//         dispatch({
//             type:ERROR_HANDLE,
//             message:error,
//             status:true
//         })
//         })