import {
    // PRODUCT CATEGORY ACTION

    GET_ALL_ATTRIBUtTES,
    CREATE_ALL_ATTRIBUTES,

    // axios config
    config,
    axios

} from './types';

// category data
export const getAllAttributesAction = () => dispatch => {
    axios.get("/api/attributes",config).then(res=>{ 
        console.log(res.data)
    dispatch({
            type:GET_ALL_ATTRIBUtTES,
            payload:res.data

        })
    })
}

export const createSubAttributeAction = (name,status) => dispatch => {
    axios.post(`api/add-attribute?name=${name}&status=${status}`,config).then(res=>{ 
        console.log(res.data)
        dispatch(getAllAttributesAction())
        dispatch({
            type:CREATE_ALL_ATTRIBUTES
        })
    })
}



