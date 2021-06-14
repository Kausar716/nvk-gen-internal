import React,  { Component,useEffect,useState } from 'react' ;
import {Table} from 'reactstrap'
import {connect} from "react-redux";
import ActionModal from '../Modal/ActionModal'
import {
    //product actions
    createProductAction ,
    updateProductAction ,
    deleteProductAction ,
    getAllProductAction,
    getSpecifiedProductAction,
    duplicateProduct,

    //page Redirects action
    pageReDirectAction,
    subPageReDirectAction,
    setPageNumber

} from "../../actions/productAction";
import {
    getAllCategoriesAction

} from '../../actions/categoryAction'
//import ReactPaginate from 'react-paginate'
import TablePagination from '../Pagination'

const ProductTable  = (props) => {
    const {productData,pageNumber,productDataById} = props.productData
   
    const [id,setId] = useState(0)
    const [open,setOpen] = useState(false)
    const [message,setMessage] = useState("")
    const [type, setType] = useState("")


    const paginationChange =(event, page)=>{
        props.setPageNumber(page-1)
    }
    const cancel = ()=>{
       setOpen(false)
       setId(0)
       setType("")
       setMessage("")
        
    }
    const confirm = ()=>{
        if(type=="delete"){
           props.deleteProductAction(id)

        }else{
            props.duplicateProduct(id)
        }
  
       setOpen(false)
       setId(0)
       setType("")
       setMessage("")
   }
   const confirmAction = (id,type)=>{
       if(type=="delete"){
           setType(type)
           setMessage("Are you sure you want to delete this product and its related SKUs?")

       }else{
           setType(type)
           setMessage("Are you sure you want to duplicate this product and all its related SKU and plant information?")

       }
       setOpen(true)
       setId(id)
   }
   
   
    const productPerPage = 5;
    const pagesVisited = pageNumber*5;
    const displayProductList = productData.slice(pagesVisited,pagesVisited+productPerPage)
    const pageCount = Math.ceil(productData.length/productPerPage)
    const {categoryData} = props.categoryData
    console.log(productData)

     
    return (
        <>
         <ActionModal cancel={cancel} confirm={confirm} open={open} message={message}/>
         <div className="pagination_area">
         <TablePagination pageChange={paginationChange} pageCount={pageCount} pageNumber={pageNumber+1}/>
         </div>
         <label className="greenText">{"Showing " + (( pageNumber*5)+1 )+  "  to  " +  ((( pageNumber+1)*5)>productData.length ?productData.length:(( pageNumber+1)*5))  + "  of   "  +   productData.length }</label>
                      <div class="form-group row mt-3">
                                <div class="col-md-12">
                                    <table id="plantDetails" class="table table-striped w-100">
                                        <thead>
                                            <tr>
                                                <th class="text-nowrap">Status</th>
                                                <th class="text-nowrap">Product ID</th>
                                                <th class="text-nowrap">Product Name</th>

                                                <th class="text-nowrap">Location</th>
                                                <th class="text-nowrap">Category</th>
                                                <th class="text-nowrap text-center">On Website</th>
                                                <th class="text-nowrap text-center">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                        {displayProductList.map(product=>{
                                             return(
                                            <tr  key={product.product_id}>
                                                <td>{product.archived==0?"Active":"Archived"}</td>
                                                <td>{product.product_id}</td>
                                                <td>{product.name}</td>
                                                <td>--</td>
                                                <td>{categoryData.length>0?categoryData.filter(cat=>cat.id==product.category_id)[0]["name"]:""}</td>
                                                <td  class="text-center">
                                                    <div class="custom-control custom-checkbox mb-1">
                                                        <input type="checkbox" class="custom-control-input" id="onwebsite1"/>
                                                        <label class="custom-control-label" for="onwebsite1"></label>
                                                    </div>
                                                </td>
                                                <td class="text-center">
                                                    <span>
                                                        <a href="javascript:;">
                                                            <img src="assets/img/edit.svg" alt=""/>
                                                        </a>
                                                    </span>
                                                    <span>
                                                        <a href="javascript:;">
                                                            <img src="assets/img/duplicate.svg" alt=""/>
                                                        </a>
                                                    </span>
                                                    <span>
                                                        <a href="javascript:;">
                                                            <img src="assets/img/delete.svg" alt=""/>
                                                        </a>
                                                    </span>
                                                </td>
                                            </tr>
                                       
                                            )
                                        })}
                                            
                                        </tbody>
                                    </table>
                                </div>
                            </div>
        </>
    )
}


const mapStateToProps = (state)=> ({
    productData:state.productData,
    categoryData:state.categoryData
})
export default connect(mapStateToProps,{
    //product actions
    createProductAction ,
    updateProductAction ,
    deleteProductAction ,
    getAllProductAction,
    getSpecifiedProductAction,
    getAllCategoriesAction,
    duplicateProduct,

    //page Redirects action
    pageReDirectAction,
    subPageReDirectAction,
    setPageNumber

})(ProductTable)
