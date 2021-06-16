import React,  {useState } from 'react' ;
// import {Table} from 'reactstrap'
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
    const {productData,pageNumber} = props.productData
   
    const [id,setId] = useState(0)
    const [open,setOpen] = useState(false)
    const [message,setMessage] = useState("")
    const [type, setType] = useState("")
    const [pageSize, setPageSize] =useState(15)

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
        if(type==="delete"){
           props.deleteProductAction(id)

        }else{
            props.duplicateProduct(id)
        }
  
       setOpen(false)
       setId(0)
       setType("")
       setMessage("")
   }
//    const confirmAction = (id,type)=>{
//        if(type=="delete"){
//            setType(type)
//            setMessage("Are you sure you want to delete this product and its related SKUs?")

//        }else{
//            setType(type)
//            setMessage("Are you sure you want to duplicate this product and all its related SKU and plant information?")

//        }
//        setOpen(true)
//        setId(id)
//    }
   
   
    const productPerPage = pageSize;
    const pagesVisited = pageNumber*5;
    const displayProductList = productData.slice(pagesVisited,pagesVisited+productPerPage)
    const pageCount = Math.ceil(productData.length/productPerPage)
    const {categoryData} = props.categoryData
    console.log(productData)

     
    return (
        <>
         <ActionModal cancel={cancel} confirm={confirm} open={open} message={message}/>
         <div className="row_1">

                            <div>
                            <label className="greenText">{"Showing " + (( pageNumber*5)+1 )+  "  to  " + pageSize  + "  of   "  +   productData.length }</label>
                            </div>
                    <div >
                        <label className="greenText">Show</label>
                                    <select 
                                        value={pageSize}
                                        onChange={e => {
                                            setPageSize(Number(e.target.value))
                                        }}
                                        >
                                        {[15, 25, 50, 100, 250,500].map(pageSize => (
                                            <option key={pageSize} value={pageSize}>
                                             {pageSize}
                                            </option>
                                        ))}
                                    </select>
                            </div>

                
                          
                <div >
                    <TablePagination pageChange={paginationChange} pageCount={pageCount} pageNumber={pageNumber+1}/>
                </div>
         </div>
                
         {/* <label className="greenText">{"Showing " + (( pageNumber*5)+1 )+  "  to  " +  ((( pageNumber+1)*5)>productData.length ?productData.length:(( pageNumber+1)*5))  + "  of   "  +   productData.length }</label> */}
         {/* <label className="greenText">{"Showing " + (( pageNumber*5)+1 )+  "  to  " + pageSize  + "  of   "  +   productData.length }</label> */}
                      <div className="form-group row mt-3">
                                <div className="col-md-12">
                                    <table id="plantDetails" className="table table-striped w-100">
                                        <thead>
                                            <tr>
                                                <th className="text-nowrap">Status</th>
                                                <th className="text-nowrap">Product ID</th>
                                                <th className="text-nowrap">Product Name</th>

                                                <th className="text-nowrap">Location</th>
                                                <th className="text-nowrap">Category</th>
                                                <th className="text-nowrap text-center">On Website</th>
                                                <th className="text-nowrap text-center">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                        {displayProductList.map(product=>{
                                            console.log("Product data", product)
                                            console.log("cacategoryData",categoryData)
                                            console.log("categoryDatacategoryDataLENGTH", categoryData.length)
                                            let id2 ="onwebsite1"
                                            
                                            // var categryFData = categoryData.filter(function(categoryData) {
                                            //     return cat=>cat.id===product.category_id
                                            // })

                                            // var abcd =categoryData.filter(cat=>cat.id===product.category_id)
                                            // console.log("abcd,", abcd);



                                             return(
                                            <tr  key={product.product_id}>
                                                <td>{product.archived===0?"Active":"Archived"}</td>
                                                <td>{product.product_id}</td>
                                                <td>{product.name}</td>
                                                <td>--</td>
                                                <td>
                                              
                                                    {/* {categoryData.length>0 ? categoryData.filter(cat=>cat.id===product.category_id)[0]["name"]:""} */}
                                                    {/* {categoryData.length>0 ? categoryData.filter(cat=>cat.id===product.category_id)[0]["name"]:""} */}
                                                    {categoryData.length>0?categoryData.filter(cat=>cat.id===product.category_id)[0]?categoryData.filter(cat=>cat.id===product.category_id)[0]["name"]:"":""}
                                                    {/* {abcd[0].name} */}
                                                    </td>
                                                <td  className="text-center">
                                                    <div className="custom-control custom-checkbox mb-1">
                                                        <input type="checkbox" className="custom-control-input" id={id2.concat(product.product_id)}/>
                                                        <label className="custom-control-label" for={id2.concat(product.product_id)}></label>
                                                    </div>
                                                </td>
                                                <td className="text-center">
                                                    <span>
                                                        <a href="javascript;">
                                                            <img src="assets/img/edit.svg" alt=""/>
                                                        </a>
                                                    </span>
                                                    <span>
                                                        <a href="javascript;">
                                                            <img src="assets/img/duplicate.svg" alt=""/>
                                                        </a>
                                                    </span>
                                                    <span>
                                                        <a href="javascript;">
                                                            <img src="assets/img/delete.svg" alt=""/>
                                                        </a>
                                                    </span>
                                                </td>
                                            </tr>
                                       
                                            )
                                        })}
                                            
                                        </tbody>
                                    </table>
                                    <p style={{textAlign:"center",color:"red"}}>{productData.length===0?"No Product Found ":""}</p>
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
