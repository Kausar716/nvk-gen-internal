/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-duplicate-props */
import React, { useEffect, useState} from "react"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import DatePicker from 'react-date-picker';

import {Button,Badge,Form,Input,FormGroup,CustomInput,Label,Pagination,PaginationItem,PaginationLink,Table} from 'reactstrap'
import {connect} from "react-redux";
import {} from "../../actions/productAction";
//import ReactPaginate from 'react-paginate'
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import TablePagination from '../Pagination'
import ActionModal from '../Modal/ActionModal'
// import { Field, reduxForm } from 'redux-form'
import { reduxForm ,Field} from 'redux-form/immutable';
import {
    //product actions
    deleteProductAction ,
    getSpecifiedProductAction,
    getAllSpecifiedSkuProductList,

} from "../../actions/productAction";
import {
createSkuAction, 
updateSkuAction ,
updateSkuActionClear,
deleteSkuAction ,
getAllSkuAction ,
showSpecifiedSkuAction ,
setSkuPageNumber,


//input handle
handleSkuInputAction
    
} from '../../actions/productAction'
import { config } from "../../actions/types";
  
const required = value => value ? undefined : 'Required'
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength15 = maxLength(15)
const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined
const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined
const minValue2 = minValue(2)


const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    {/* <label>{label}</label> */}
    <div>
      <input {...input}  className="inputBoxDesign2" placeholder={label}  type={type}/>
      <p>
      {touched && ((error && <span style={{color:"red", marginLeft:"1em"}}>{error}</span>) || (warning && <span>{warning}</span>))}
      </p>
      
    </div>
  </div>
)


const onSubmit = (values) =>{
  console.log(values);
}

const SkuList=(props)=> {
   
    const [submitCount, setSubmitCount] = useState(0)
    const [value, onChange] = useState(new Date());
    const [pageSize, setPageSize] =useState(15)
    const [id,setId] = useState(0)
    const [open,setOpen] = useState(false)
   
   
    const {skuData,skuPageNumber,skuDataById,needAction,skuValidation,productDataById, productData,actionType,productDataBySKUlist } = props.productData;
    const {subCategoryData} = props.categoryData;
    //console.log("productDataFINE", props.productData)
    console.log("productDataBySKUlist", productDataBySKUlist)
    //console.log("skuDataByIdskuDataById",skuData)
    useEffect(()=>{
        props.getAllSkuAction()
        props.getAllSpecifiedSkuProductList()
    },[])


    //Finiding last ID in product list
    const product_id_List = productData.map(prId=>prId.product_id)
    let finalPrID = product_id_List.reverse()[0]
    console.log("product_id_List", finalPrID)
   


    const submitAction = (e) =>{
        e.preventDefault();
   
       
         if(submitCount === 0){
            if(needAction){
                if(actionType ==="add")
                props.createSkuAction(product_idFromGeneral,skuDataById)
                //props.createSkuAction(skuDataById.id,skuDataById,skuValidation)
   
                if(actionType ==="edit")
                //debugger;
               
                props.updateSkuAction(skuDataById.id,skuDataById)
                // props.updateSkuAction(skuDataById.id,skuDataById,skuValidation)
                //setSubmitCount(1)
            }
        }
          
     }

    const paginationChange =(event, page)=>{
        props.setSkuPageNumber(page-1)
    }
    const handleInput =(e)=>{
        console.log(e.target.id,e.target.value)
        setSubmitCount(0)
        if(e.target.id ==="archived") props.handleSkuInputAction(e.target.id,e.target.value ===1?0:1)
        else if(e.target.id ==="status") props.handleSkuInputAction(e.target.id,e.target.value ===1?0:1)
        else props.handleSkuInputAction(e.target.id,e.target.value)

    }
    const handleChange1 = (e) =>{
        // alert(data)
        console.log(e.target.value)
        let dateInformate = e.target.value
        props.handleSkuInputAction("sale_expiry_date",dateInformate)

    }
    
   

    const cancel = ()=>{
       setOpen(false)
       setId(0)
        
    }
    const confirm = ()=>{
       //props.deleteProductAction(id)
       props.deleteSkuAction(id)
       setOpen(false)
       setId(0)
   }
   const confirmDelete = (id)=>{
       setOpen(true)
       setId(id)
   }
   const getSpecifiedProduct = async(id,data,value) =>{
     //debugger

     window.scrollTo(100, -100)
    
     
     
      //props.getSpecifiedProductAction(id,"edit","sku")
      props.showSpecifiedSkuAction(id,"edit","sku")
   
   }

console.log("temp",props.temp.productData.ae_product_id)

const product_idFromGeneral =props.temp.productData.ae_product_id
   // validation input  data
console.log("product_idFromGeneral", product_idFromGeneral)
console.log("PRODUCT.ID", productDataById.product_id)
   console.log("actionType12345",actionType)
//    window.addEventListener('scroll', this.listenToScroll)
   //console.log("123",props.productData)


   




    const skuPerPAge = pageSize;
    const totalLength = skuData.length;
    const pagesVisited = skuPageNumber*pageSize;

    const displaySkuList2 = productDataBySKUlist.slice(pagesVisited, pagesVisited+skuPerPAge)
    const totalLength2 = productDataBySKUlist.length;
    const pageCount2 = Math.ceil(productDataBySKUlist.length/skuPerPAge)

    const displaySkuList = skuData.slice(pagesVisited,pagesVisited+skuPerPAge)
    const pageCount = Math.ceil(skuData.length/skuPerPAge)
    let minMonth = new Date().getMonth()
    let minDate = new Date().getDate()
    let minDateFormate = minDate.toString().length===1?"0"+minDate:minDate
    let minMonthFormate = minMonth.toString().length===1?"0"+(minMonth+1):(minMonth+1)
    console.log(new Date().getFullYear()+"-"+(new Date().getMonth()+1)+"-"+new Date().getDate())

    const productIDList = productData.map(pro=>pro.product_id)
    console.log("productIDList", displaySkuList2)
    console.log("productDataByIdskuDataById", productDataById, skuDataById)
    return (
        <div> <ActionModal cancel={cancel} confirm={confirm} open={open} message="Are you sure you want to delete sku?"/>
                <div>
                            <div class="bg-white px-3 py-3 mt-3" style={{marginLeft:"1em", marginRight:"0.5em",paddingRight:"1em"}}>
                                <form>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <h3>GENERATED SKU {skuDataById.sku_code}</h3>
                                        </div>
                                        <div class="col-md-6 d-flex justify-content-end">
                                            <div class=" d-flex align-items-center my-md-2 mt-3 mt-md-0">
                                                Archive
                                                <div class="switcher ml-2">
                                                    <input type="checkbox" name="archived" id="archived" onChange={handleInput} value={skuDataById.archived} checked={skuDataById.archived===0?false:true}/>
                                                    <label for="archived"></label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mt-3">
                                    <div class="col-md-6 col-lg-4">
                                            <label>SKU Item Name <span class="text-danger">*</span></label>
                                            <input type="text" class="form-control text-right" placeholder="" value="$1.25"
                                            id="sku_item_name" value={skuDataById.sku_item_name} onChange={handleInput} />
                                        </div>
                                        {/* <div class="col-md-6 col-lg-3 mt-2 mt-md-0">
                                        </div> */}
                                        <div class="col-md-6 col-lg-4 mt-2 mt-md-0">
                                            <label>Sub-Category <span class="text-danger">*</span></label>
                                            <select class="form-control"  id="subcategory" onChange={handleInput}>
                                            <option value="0">None</option>
                                            <option value="0">None</option>
                            {subCategoryData.map(subcategory=>{
                                return (<option value={subcategory.id} selected={subcategory.id===skuDataById.subcategory?"selected":""}>{subcategory.name}</option>)

                            })}
                          
                                            </select>
                                        </div>

                                        <div class="col-md-6 col-lg-4 mt-2 mt-md-0">
                                            <label>Location <span class="text-danger">*</span></label>
                                            <select class="form-control">
                                                <option>Select</option>
                                                <option>Option 1</option>
                                                <option>Option 2</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col-md-6 col-lg-3">
                                            <label>Each Cost <span class="text-danger">*</span></label>
                                            <input type="text" class="form-control text-right" placeholder="" value="$1.25"
                                             id="each_cost" onChange={handleInput} value={skuDataById.each_cost} min="0" />
                                        </div>
                                        <div class="col-md-6 col-lg-3 mt-2 mt-md-0">
                                            <label>Each Price <span class="text-danger">*</span></label>
                                            <input type="text" class="form-control text-right" placeholder="" value="$1.25"
                                            id="each_price"  onChange={handleInput} value={skuDataById.each_price} min="0"/>
                                        </div>
                                        <div class="col-md-6 col-lg-3 mt-2 mt-md-0">
                                            <label>Sale Price <span class="text-danger">*</span></label>
                                            <input type="text" class="form-control text-right" placeholder="" value="$1.25"
                                             id="sale_price" onChange={handleInput} value={skuDataById.sale_price} min="0"/>
                                        </div>
                                        <div class="col-md-6 col-lg-3 mt-2 mt-md-0">
                                            <label>Sales Expiry Date</label>
                                            <div class="row">
                                                <div class="col-md-12 col-lg-12 d-flex">
                                                    <input type="date" onChange={handleChange1} style={{padding:"0px",height:"2.5em"}} value={skuDataById.sale_expiry_date} min={new Date().getFullYear()+"-"+minMonthFormate+"-"+minDateFormate} value={skuDataById.sale_expiry_date}/>
                                                    {/* <div>
                                                        <DatePicker onChange={handleChange1} value={value} 
                                                        min={new Date().getFullYear()+"-"+minMonthFormate+"-"+minDateFormate} 
                                                        value={skuDataById.sale_expiry_date}/>
                                                    </div> */}
                                                    <div class="d-flex align-items-center flex-wrap ml-2">
                                                        Active
                                                        <div class="switcher switcher-sm ml-2 pr-2">
                                                            <input type="checkbox" name="switcher_checkbox_date" id="switcher_checkbox_date" value="2"
                                                            onChange={handleInput} value={skuDataById.status} checked={skuDataById.status===0?false:true} />
                                                            <label for="switcher_checkbox_date"></label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            
                                    <div class="row mt-3">
                                        <div class="col-md-12 text-md-right">
                                            <button 
                                            // type="button" class="btn btn-primary btn-lg"
                                            className={needAction===true?"btn btn-primary btn-lg ml-3":"btn btn-primary btn-lg ml-3"} 
                                            disabled={submitCount===0?needAction===true?false:true:true} 
                                            onClick={submitAction}
                                             //disabled={needAction===true?false:true} 
                                             //onClick={()=>{ props.createSkuAction( finalPrID,skuDataById,skuValidation);}} 
                                            
                                             > {actionType==="add"?"Add SKU":"Update SKU"}
                                                 {/* Add SKU &amp; Clear */}
                                                 </button>


                                            <button type="button" class="btn btn-outline-secondary btn-lg ml-3"
                                            disabled={needAction===true?false:true} onClick={()=>props.updateSkuActionClear(skuDataById.id,skuDataById)}>Add SKU &amp; Retain</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="row_1" style={{marginTop:"1em", marginLeft:"1em"}}>
                            <div>
                            {/* <label className="greenText">
                                {"Showing " + (skuPageNumber>0 ? (pageSize*((skuPageNumber)))+1 : ((skuPageNumber)+1))+  "  to  " +  (skuPageNumber>0 ? 
                                (((pageSize*((skuPageNumber)))+pageSize)>totalLength ? totalLength : ((pageSize*((skuPageNumber)))+pageSize)) : 
                                ((((skuPageNumber)+1)*pageSize)>totalLength?totalLength:(((skuPageNumber)+1)*pageSize)))   + "  of   "  +   totalLength }</label> */}

                            <label className="greenText">{"Showing " + (skuPageNumber>0 ? (pageSize*((skuPageNumber)))+1 : ((skuPageNumber)+1))+  "  to  " + 
                             (skuPageNumber>0 ? (((pageSize*((skuPageNumber)))+pageSize)>totalLength2 ? totalLength2 : ((pageSize*((skuPageNumber)))+pageSize)) :
                              ((((skuPageNumber)+1)*pageSize)>totalLength2?totalLength2:(((skuPageNumber)+1)*pageSize)))   + "  of   "  +   totalLength2 }</label>
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



                    <div className="skuPagination">
                    <TablePagination pageChange={paginationChange} pageCount={pageCount2} pageNumber={skuPageNumber+1}/>
                    </div>
                    </div>

                            <div className="form-group row mt-3" style={{marginLeft:"0.42em", marginRight:"0.5em"}}>
                            <div className="col-md-12">
                                <table id="plantDetails" class="table table-striped w-100 ">
                                    <thead>
                                        <tr>
                                            <th class="text-nowrap">Status</th>
                                            <th class="text-nowrap">SKU</th>
                                            <th class="text-nowrap">Each Cost</th>
                                            <th class="text-nowrap">Each Price</th>
                                            <th class="text-nowrap">Sale Price</th>
                                            <th class="text-nowrap">Sale Active</th>
                                            <th class="text-nowrap">Volume Per Unit</th>
                                            <th class="text-nowrap">Volume QTY</th>
                                            <th class="text-nowrap text-center">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                    {displaySkuList2.map((sku)=>{

                                            // {let abc= productIDList.filter(pID =>pID.includes(sku.product_id).map(filterIDs=>
                                            //     <li>{filterIDs}</li>
                                            //     ))}
                                                
                                           // product_idFromGeneral   
                                           //productDataById.product_id
                                           //console.log(sku.product_id);
                                           // console.log("AB12345", sku.product_id, product_idFromGeneral, productDataById.product_id)
                                            //  if(sku.product_id=== (product_idFromGeneral ? product_idFromGeneral  : productDataById.product_id)){




                                            
                        return(

                                        <tr key={sku.id}>
                                            <td>{sku.archived===0?"Active":"Archived"}</td>
                                            <td>{sku.sku_code}</td>
                                            <td>{sku.each_cost}</td>
                                            <td>{sku.each_price}</td>
                                            <td>{sku.sale_price}</td>
                                            <td class="text-center">
                                                {/* <div class="custom-control custom-checkbox mb-1">
                                                    <input type="checkbox" class="custom-control-input" id="customCheck1"/>
                                                    <label class="custom-control-label" for="customCheck1"></label>
                                                </div> */}
                                                <i className={sku.status===1?'bx bx-check':'bx bx-x'}></i>
                                            </td>
                                            <td>{sku.volume_price_per_unit}</td>
                                            <td>{sku.volume_quantity}</td>
                                            <td class="text-center">
                                                <span>
                                                   
                                                        <img src="assets/img/edit.svg" alt="" onClick={()=>getSpecifiedProduct(sku.id, "edit","sku")}/>
                                                   
                                                </span>
                                                {/* <span>
                                                    <a href="javascript:;">
                                                        <img src="assets/img/duplicate.svg" alt=""  onClick={()=>confirmDelete(sku.product_id)}/>
                                                    </a>onClick={()=>confirmAction(product.product_id,"delete")}
                                                </span> */}
                                                <span>
                                                    <a href="javascript:;">
                                                        <img src="assets/img/delete.svg" alt="" onClick={()=>confirmDelete(sku.id,"delete","sku")}/>
                                                    </a>
                                                </span>
                                            </td>
                                        </tr>
                                    
                                    
                        )
                        // }
                    })}
                
                                    </tbody>
                                </table>
                            </div>
                            </div>
                        </div>
        </div>
    )
}


const mapStateToProps = (state)=> ({
    productData:state.productData,
    temp:state,
    categoryData:state.categoryData
})
function validate(values) {
    const errors = {};
  
    //Validate the inputs from values
    if(!values.email) {
      errors.title = "Enter an email!";
    }
    if(!values.password) {
      errors.categories = "Enter a password!";
    }
    //If errors is empty, the form is fine to submit
    //If errors has any properties, redux form assumes form is invalid
    return errors;
  }


export default reduxForm({
    validate,
    form: 'SkuList'
  })(connect(mapStateToProps, {

    //sku actions
    createSkuAction, 
    updateSkuAction ,
    updateSkuActionClear,
    deleteSkuAction ,
    getAllSkuAction ,
    showSpecifiedSkuAction,
    setSkuPageNumber,

    // product actions
    deleteProductAction ,
    getSpecifiedProductAction,
    getAllSpecifiedSkuProductList,

    //handle sku input
    handleSkuInputAction

})(SkuList));



