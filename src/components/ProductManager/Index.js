/* eslint-disable no-unused-vars */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react' ;
import {connect} from "react-redux";
//import { Link } from "react-router-dom";
import { Tab, Tabs, TabList } from 'react-tabs';
//import {getAllImageAssets} from "../Utility/Utility";
// import '../ProductManagement/index.css'
 import GeneralSettings from './GeneralSettings'
 import SkuList from './SkuList'
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
    getAllSpecifiedSkuProductList,

    //page Redirects action
    pageReDirectAction,
    subPageReDirectAction,

    //category Filter
    handleCategory,

    serachProduct


} from "../../actions/productAction";
import {
    getAllCategoriesAction,
    getAllSubCategoriesAction,

    //manufacture actions
    getAllManufactureAction,
    

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
    const [categoryId,setCategoryId] = useState(0)
    const [open,setOpen] = useState(false)
    const [message,setMessage] = useState("")
    const [type, setType] = useState("")
    const [filterSubCategory, setFilterSubCategory]= useState([])
    const product_idFromGeneral =props.temp.productData.ae_product_id
    //const {categoryData,subCategoryData} = props.categoryData
        useEffect(()=>{
            props.getAllProductAction()
            props.getAllCategoriesAction()
            props.getAllSubCategoriesAction()
            props.getAllManufactureAction()
            //props.getAllSpecifiedSkuProductList()

        },[])

        const handleCategoryData =(e)=>{
            let temSub =[];

            console.log(e.target.id)
            console.log("asca0", e.target.value)
            //console.log("propsSubCategory", props.categoryData.subCategoryData)
            if(e.target.id ==="category"){
                // props.handleCategory(e.target.value,"0")
                if(e.target.value==="All"){
                    props.handleCategory("All","0")
                    setDisable(true)
                    
                }else{

                    console.log("abcdfrf", e.target.value)
                    props.handleCategory(e.target.value,"0")
                    setDisable(false)
                }

                temSub = props.categoryData.subCategoryData.filter(cat=>JSON.stringify(cat.category_id)===e.target.value)
                console.log("temSub", temSub)
               
                //?subCategoryData.filter(sub=>sub.id===product.subcategory_id)
                setCategory(e.target.value)
                setFilterSubCategory(temSub)

                
            }

            else if(e.target.id ==="subcategory"){
                alert("ancd")
                console.log("filterSubCategory", filterSubCategory)
                props.handleCategory(filterSubCategory,e.target.value)
                setsubCategory(e.target.value)

            }
        }


        // const searchBasedOnCategory = (e) =>{
        //     props.serachProduct({category: e.target.value})
        //     setCategoryId(e.target.value)
           
        // }


        // const handleFilter  = ()=>{
        //     alert("ABCD")
        //     console.log("ABCD",category,subCategory)
        //     props.handleCategory(category,subCategory) 

        // }
        const resetFilter = () =>{
            setCategory("All")
            setCategoryId("0")
            setsubCategory("0")
            props.getAllProductAction()
           // props.handleCategory(category,subCategory) 

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

       const confirmAction = (id,type)=>{
           if(type==="delete"){
               setType(type)
               setMessage("Are you sure you want to delete this product and its related SKUs?")
   
           }else{
               setType(type)
               setMessage("Are you sure you want to duplicate this product and all its related SKU and plant information?")
   
           }
           setOpen(true)
           setId(id)
       }
       
        // eslint-disable-next-line no-unused-vars
        const {pageToOpen,actionType,productDataById, skuDataById} = props.productData
        const {categoryData,subCategoryData} = props.categoryData
        console.log("subCategoprops.productData" ,props.productData)
    return (
        <div>
            <ModalData/>
             <ActionModal cancel={cancel} confirm={confirm} open={open} message={message}/>
             {pageToOpen === "product" &&
             <div>
            <div className="contentHeader bg-white d-flex justify-content-between align-items-center">
				<h1 className="page-header mb-0">
                <img src="assets/img/product-green.svg" alt=""/>
                    Product Manager</h1>
			    <div class="topbarCtrls mt-3 mt-md-0">
                    {/* <Link to="/addProduct">  */}
                    <a href="#" class="btn active">
                        <span class="d-flex align-items-center text-left" onClick={()=>props.pageReDirectAction("general","add")}>
                            <img src="assets/img/Product_small-white.svg" alt=""/>
                            <span class="ml-2"><b>Add Product</b></span>
                        </span>
                    </a>
                    {/* </Link> */}
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

                                {/* <select className="form-control"  id="category"
                               // onChange={searchBasedOnCategory}
                               onChange={handleCategoryData}
                                 >
                                    <option value="All" selected={category==="All"?"selected":""}>All</option>
                                    {categoryData.map(categoryData=>{
                                        return(<option value={categoryData.id} key={categoryData.id} selected={category===categoryData.id?"selected":""}>{categoryData.name}</option>)
                                    })
                                    }
        
                
                                </select> */}

                                <select className="form-control"  id="category" onChange={handleCategoryData}   >
                                    <option value="All" selected={category==="All"?"selected":""}>All</option>
                                    {categoryData.map(categoryData=>{
                                        return(<option value={categoryData.id} key={categoryData.id} selected={category===categoryData.id?"selected":""}>{categoryData.name}</option>)
                                    })
                                    }
        
                
                                </select>
                                </div>


                                <div className="col-md-5 col-lg-5 mt-2 mt-md-0">
                                    <label for="subCategory">Sub Category</label>

                                {/* <select className="form-control"  disabled={disable?true:false}
                                 id="subcategory" onChange={handleCategoryData}  >
                                <option  value="0" selected={subCategory==="0"?"selected":""}>None</option>
                                    {subCategoryData.map(subCategoryData=>{
                                        return(<option selected={subCategory===subCategoryData.id?"selected":""} value={subCategoryData.id} key={subCategoryData.id}>{subCategoryData.name}</option>)
                                    })
                                    }
                                        
                                </select> */}
                                 <select className="form-control"   disabled={disable?true:false}   id="subcategory" onChange={handleCategoryData}  >
                                <option  value="0" selected={subCategory==="0"?"selected":""}>None</option>
                                    {filterSubCategory.map(subCategoryData=>{
                                        return(<option selected={subCategory===subCategoryData.id?"selected":""} value={subCategoryData.id} key={subCategoryData.id}>{subCategoryData.name}</option>)
                                    })
                                    }
                                        
                                </select>

                                </div>
                                <div className="col-md-2 col-lg-2">
                                    <p onClick={resetFilter} className="d-block  resetlink">Reset</p>
                                    {/* <a href="javascript:;" onClick={handleFilter} className="d-block topSpace">Search</a> */}
                                </div>
                            </div>
                             <hr/>
                                    <ProductTable />
                            </div>
                        </div>
                    </div>
                </div> 
                </div>}
            {(pageToOpen === "general" || pageToOpen === "sku") &&
                    <div className={`show_add_product, add_product_page`}>

                        {/* <p className="headerbar1">Add Product</p>

                        <div className="action_buttons_area2">
                            <span style={{textDecoration:"none",cursor:"pointer"}} className="left_float" ><p className="textNumberBold" style={{marginLeft:"1em"}}>PRODUCT  ID: <span className="textNumberBold2">{productDataById.product_id} </span> </p> </span>
                            <span  className="right_float icons_small"  style={{display:actionType==="add"?"none":"block",cursor:"pointer"}} onClick={()=>confirmAction(productDataById.product_id,"delete")}><i class='bx bxs-trash-alt'></i> <label className="deleteIcon">Delete</label></span>
                            <span  className="right_float icons_small" style={{display:actionType==="add"?"none":"block",cursor:"pointer"}} onClick={()=>confirmAction(productDataById.product_id,"duplicate")}><i class='bx bx-copy' ></i><label className="trashIcon" style={{marginLeft:"-59px"}}>Duplicate</label></span>
                            <span onClick={()=>props.pageReDirectAction("product","add")} style={{textDecoration:"none",cursor:"pointer"}}  className="right_float"><i class='bx bx-arrow-back' ></i><label className="trashIcon" style={{marginLeft:"-49px"}}>Back</label></span>
                        </div>

                        <div style={{clear:"both"}}></div> */}

                            <div> 
                                <div class="contentHeader bg-white d-md-flex justify-content-between align-items-center">
                                    <h1 class="page-header mb-0"><img src="assets/img/product-green.svg" alt=""/> Add Product</h1>
                        
                                </div>
                                    <div class="px-md-3 mt-3">
                                        <div class="px-3 py-3 mb-3 bg-white">
                                            <div class="row align-items-center">
                                                <div class="col-md-6">
                                                    <h2>Product ID {product_idFromGeneral}</h2>
                                                </div>
                                                
                                                <div class="col-md-6 d-flex justify-content-md-end">
                                                <span onClick={()=>props.pageReDirectAction("product","add")} 
                                                style={{textDecoration:"none",cursor:"pointer"}}  className="right_float">
                                                    <i class='bx bx-arrow-back' ></i><label className="trashIcon" style={{marginLeft:"-49px"}}>GoBack</label></span>
                                                    <a href="" class="mx-2">
                                                        <img src="assets/img/copy-ic.svg" alt=""/>
                                                    </a>
                                                    <a href="" class="mx-2">
                                                        <img src="assets/img/trash-ic.svg" alt=""/>
                                                    </a>
                                                    <a href="" class="mx-2">
                                                        <img src="assets/img/left-double-arrow.svg" alt=""/>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <Tabs>
                                            <TabList>
                                                <Tab onClick={()=>props.subPageReDirectAction("general")} >General</Tab>
                                                <Tab onClick={()=>props.subPageReDirectAction("sku")}>SKU Lists</Tab>
                                            </TabList>

                                        </Tabs>
                                    </div>
                            </div>
                    </div>
                }

            {pageToOpen === "general" && <GeneralSettings />}
            {pageToOpen === "sku" && <SkuList/> }
        </div>
       
        )
    }



const mapStateToProps = (state)=> ({
    productData : state.productData,
    categoryData: state.categoryData,
    temp:state,
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
handleCategory,

getAllSpecifiedSkuProductList,

serachProduct
}
)(ProductManagement)
