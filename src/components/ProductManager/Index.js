/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react' ;
import {connect} from "react-redux";
import { Link } from "react-router-dom";
//import {getAllImageAssets} from "../Utility/Utility";
// import '../ProductManagement/index.css'
// import GeneralSettings from './GeneralSettings'
// import SkuList from './SkuList'
import ProductTable from './ProductTable'
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

    //category Filter
    handleCategory

} from "../../actions/productAction";
import {
    getAllCategoriesAction,
    getAllSubCategoriesAction,

    //manufacture actions
    getAllManufactureAction

} from '../../actions/categoryAction'
//import './index.css'
//import * as BsIcons from "react-icons/bs";
//import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import ModalData from '../Modal'
//const IconAssets =  getAllImageAssets();


const  ProductManagement = (props) =>{
    const [category,setCategory] = useState("All")
    const [subCategory,setsubCategory] = useState(0)
    const [disable,setDisable] = useState(false)
    const [id,setId] = useState(0)
    const [open,setOpen] = useState(false)
    const [message,setMessage] = useState("")
    const [type, setType] = useState("")

    const {categoryData,subCategoryData} = props.categoryData
        useEffect(()=>{
            props.getAllProductAction()
            props.getAllCategoriesAction()
            props.getAllSubCategoriesAction()
            props.getAllManufactureAction()

        // eslint-disable-next-line react-hooks/exhaustive-deps
        },[])

        const handleCategoryData =(e)=>{
            console.log(e.target.value)
            if(e.target.id ==="category"){
                if(e.target.value==="All"){
                    setDisable(true)
                    
                }else{
                    setDisable(false)
                }
                setCategory(e.target.value)

                
            }
            else if(e.target.id ==="subcategory"){
                setsubCategory(e.target.value)

            }
        }
        // const handleFilter  = ()=>{
        //     console.log(category,subCategory)
        //     props.handleCategory(category,subCategory) 

        // }
        const resetFilter = () =>{
            setCategory("All")
            setsubCategory("0")
            props.getAllProductAction()

        }

   
   
        // const paginationChange =(event, page)=>{
        //     props.setPageNumber(page-1)
        // }
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
       
        //const {pageToOpen,actionType,productDataById} = props.productData
        // const {categoryData,subCategoryData} = props.categoryData
    return (
        <div>
            <ModalData/>
             <ActionModal cancel={cancel} confirm={confirm} open={open} message={message}/>
            <div className="contentHeader bg-white d-flex justify-content-between align-items-center">
				<h1 className="page-header mb-0">Product Manager</h1>
				<div class="topbarCtrls mt-3 mt-md-0">
                <Link to="/addProduct"> <a href="#" class="btn active">
                   <span class="d-flex align-items-center text-left">
                            <img src="assets/img/plant-ic-btn.svg" alt=""/>
                         <span class="ml-2"><b>Add Product</b></span>
                        </span>
                    </a></Link> 
                    <a href="#" class="btn ml-2">
                        <span class="d-flex align-items-center text-left">
                            <img src="assets/img/search-ic-btn.svg" alt=""/>
                            <span class="ml-2"><b>Preview</b></span>
                        </span>
                    </a>
                    <a href="#" class="btn ml-2 mt-3 mt-md-0">
                        <span class="d-flex align-items-center text-left">
                            <img src="assets/img/print-ic-btn.svg" alt=""/>
                            <span class="ml-2"><b>Print</b></span>
                        </span>
                    </a>
				</div>
			</div>
			<div className="contentWrapper">
				<div className="row">
					<div className="col-xl-12 col-md-12">
						<div className="bg-white p-15">
                            <div className="form-group row">
                                <div className="col-md-5 col-lg-5 mt-2 mt-md-0">
                                    <label for="Category">Category</label>
                                    {/* <select className="form-control">
                                        <option>None</option>
                                    </select> */}
                                    <select className="form-control" style={{fontWeight:"200", color:"#606060"}}  id="category" onChange={handleCategoryData} onClick={handleCategoryData}>
                                    <option value="All" selected={category==="All"?"selected":""}>All</option>
                                    {categoryData.map(categoryData=>{
                                        return(<option value={categoryData.id} key={categoryData.id} selected={category===categoryData.id?"selected":""}>{categoryData.name}</option>)
                                    })
                                    }
        
                
                                </select>
                                </div>
                                <div className="col-md-5 col-lg-5 mt-2 mt-md-0">
                                    <label for="subCategory">Sub Category</label>
                                    {/* <select className="form-control">
                                        <option>None</option>
                                    </select> */}
                                     <select className="form-control" disabled={disable?true:false} style={{fontWeight:"200",  color:"#606060"}}  id="subcategory" onChange={handleCategoryData}  onClick={handleCategoryData}>
                                <option  value="0" selected={subCategory==="0"?"selected":""}>None</option>
                                    {subCategoryData.map(subCategoryData=>{
                                        return(<option selected={subCategory===subCategoryData.id?"selected":""} value={subCategoryData.id} key={subCategoryData.id}>{subCategoryData.name}</option>)
                                    })
                                    }
                                        
                                </select>
                                </div>
                                <div className="col-md-2 col-lg-2">
                                    <a href="javascript:;" onClick={resetFilter} className="d-block topSpace">Reset</a>
                                </div>
                            </div>
                             <hr/>
                                    <ProductTable />
                            


						</div>
					</div>
				</div>
			</div>
        </div>
        )
    }



const mapStateToProps = (state)=> ({
    productData : state.productData,
    categoryData: state.categoryData
})

export default connect(mapStateToProps,
{
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

//category Data
getAllCategoriesAction,

//sub category Data
getAllSubCategoriesAction,

// manufacture data
getAllManufactureAction,

//filter catgeory
handleCategory
}
)(ProductManagement)
