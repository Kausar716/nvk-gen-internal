import React,  { useState , useEffect} from 'react' ;
//import {Button,Badge,Form,Input,FormGroup,CustomInput,Label,Pagination,PaginationItem,PaginationLink,Table} from 'reactstrap'
import {connect} from "react-redux";
// import ReactPaginate from 'react-paginate'
import ActionModal from '../Modal/ActionModal'
import {getPurchaseOrderList} from '../../actions/purchaseOrderManagementAction'

const PurchaseOrderTable=(props)=> {

    useEffect(()=>{
        // alert("kk")
        props.getPurchaseOrderList()

    },[])
    let purchaseOrderList= props.purchaseOrderListData
    // this.props.purchaseOrderList
    console.log(purchaseOrderList)
    return (
        <div class="col-md-12 table-responsive">
            <table id="plantDetails" class="table table-striped w-100">
                        <thead>
                            <tr>
                                <th class="text-nowrap">Status</th>
                                <th class="text-nowrap">PO#</th>
                                <th class="text-nowrap">Supplier Name</th>
                                <th class="text-nowrap">Supplier Order</th>
                                <th class="text-nowrap">Created By</th>
                                <th class="text-nowrap">Order Date</th>
                                <th class="text-nowrap">Expected Date</th>
                                <th class="text-nowrap">Dispatch</th>
                                <th class="text-nowrap">Amount</th>
                                <th class="text-nowrap text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {purchaseOrderList.map(purchaseOrder=>{
                                return <tr key={purchaseOrder.supplier_name}>
                                <td><span  class={purchaseOrder.p_o_status==='closed'?'stsBadge stsClosed':purchaseOrder.p_o_status==='Draft'?'stsBadge stsDraft':purchaseOrder.p_o_status==='open'?'stsBadge stsOpen':""}>{purchaseOrder.p_o_status}</span></td>
                                <td><a href="">{purchaseOrder.PO}</a></td>
                                <td>{purchaseOrder.supplier_name}</td>
                                <td>{purchaseOrder.supplier_order}</td>
                                <td>{purchaseOrder.created_by}</td>
                                <td>{purchaseOrder.order_date}</td>
                                <td>{purchaseOrder.expected_date}</td>
                                <td>{purchaseOrder.dispatch_type}</td>
                                <td>{purchaseOrder.amount}</td>
                                <td class="text-center">
                                    <span>
                                        <a href="javascript;">
                                            <img src="assets/img/edit.svg" alt=""/>
                                        </a>
                                    </span>
                                </td>
                            </tr>
                        })}

                        </tbody>
                    </table>
                {/* <div className="centerItem">
                <p >{plantData.length===0?props.loaderMessage:""}
                {(plantData.length===0 && props.loaderMessage === "Loading Data...")?<Loader />:""}
                {(plantData.length===0 && props.loaderMessage === "No Records Found.")?<Loader />:""}</p>
                </div> */}
                
                
            </div>
                           
    )
}

const mapStateToProps = (state)=> ({
    purchaseOrderListData:state.purchaseOrderManagementData.purchaseOrderList,
    // categoryData: state.categoryData

})
export default connect(mapStateToProps,{  
    getPurchaseOrderList
    })(PurchaseOrderTable)
