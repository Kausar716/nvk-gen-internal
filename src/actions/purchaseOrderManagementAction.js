import {
    GET_PURCHASE_ORDER_LIST,
    axios,
    config
    } from './types'
    export const getPurchaseOrderList = () => dispatch => {
        axios.get(`/api/purchase-order-list`,config).then(res=>{
            console.log(res)
            dispatch({
                type:GET_PURCHASE_ORDER_LIST,
                payload:res.data.data
    
            })
        })
    }
