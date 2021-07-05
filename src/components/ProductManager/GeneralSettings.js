/* eslint-disable no-unused-vars */

import React,  { useEffect,useState } from 'react';
import {connect} from "react-redux";
import { Link, useHistory } from "react-router-dom";
import './style.css'
import {
    //product actions
    createProductAction ,
    updateProductAction ,
    deleteProductAction ,
    getAllProductAction,
    getSpecifiedProductAction,

    //page Redirects action
    pageReDirectAction,
    subPageReDirectAction,

    // handle input action
    handleInputAction,
    handleTagAction

} from "../../actions/productAction";
import {
    getAllCategoriesAction

} from '../../actions/categoryAction'



const GeneralSettings=(props)=> {
    let history = useHistory();
    const [count, setCount] = useState(0)
    const [submitCount, setSubmitCount] = useState(0)
    const {productData,productDataById,tagsData,actionType,needAction} = props.productData
    const {categoryData,manufactureData} = props.categoryData
    const [toggleForTagInput,setToggle] = useState(true)
     console.log("abcdefg",productDataById)



    const handleInput =(e)=>{
        setSubmitCount(0)
        if(e.target.id ==="archived") props.handleInputAction(e.target.id,e.target.value ===1?0:1)
        else if(e.target.id ==="discontinued") props.handleInputAction(e.target.id,e.target.value ===1?0:1)
        else props.handleInputAction(e.target.id,e.target.value)

    }
    
    const childAdd = (e) =>{
        let commonArray = tagsData
        if(commonArray.length === 0){
         commonArray[count] =e.target.value
         var elem = document.getElementById(count);
         elem.parentNode.removeChild(elem);
         setCount(count+1)
         setToggle(true)
 
        }else{
         commonArray[commonArray.length] =e.target.value
         var elem = document.getElementById(count);
         elem.parentNode.removeChild(elem);
         setCount(count+1)
            setToggle(true)
        }
       

      
     }
     const submitAction = (e) =>{
        e.preventDefault();
       // e.target.reset();
       //debugger;
console.log("TAGDATA", tagsData)
         if(submitCount === 0){
            if(needAction){
                if(actionType ==="add")
                props.createProductAction(productDataById,tagsData)
   
                if(actionType ==="edit")
                props.updateProductAction(productDataById,productDataById.product_id,tagsData)
                setSubmitCount(1)
            }
        }
          
     }
     const addTag = (e) =>{
         if(e.target.id==="tags" && toggleForTagInput){
             var inputTag = document.createElement('input');
             inputTag.id = count
             inputTag.className= "input_tag_edit"
             inputTag.placeholder = "add tag"
             inputTag.onchange = childAdd
             document.getElementById("tags").appendChild(inputTag);  
             setToggle(false)       
         }
     }


     const goToParentPage=()=>{
        history.push("/productManager")

}

   
    return (
        <div>
            <div class="bg-white px-3 py-3 mt-3">
                            <form>
                                <div class="row">
                                    <div class="col-md-12 d-md-flex flex-wrap align-items-center">
                                
                                        <div class=" d-flex align-items-center mr-4 my-md-2 mt-3 mt-md-0">
                                            <div class="switcher ml-2 pr-2">
                                                <input type="checkbox" name="discontinued"  id="discontinued" onChange={handleInput} value={productDataById.discontinued} checked={productDataById.discontinued===0?false:true} />
                                                <label for="discontinued"></label>
                                            </div>
                                            Discountiued
                                        </div>
                                        <div class=" d-flex align-items-center mr-4 my-md-2 mt-3 mt-md-0">
                                            <div class="switcher ml-2 pr-2">
                                                <input type="checkbox"    id="archived"  onChange={handleInput} value={productDataById.archived} checked={productDataById.archived===0?false:true}/>
                                                <label for="archived"></label>
                                            </div>
                                            Archive
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-md-6 col-lg-3">
                                        <label>Item Name <span class="text-danger">*</span></label>
                                        <input type="text" id="name" value={productDataById.name} onChange={handleInput} class="form-control" placeholder=""/>
                                    </div>
                                    <div class="col-md-6 col-lg-6 mt-2 mt-md-0">
                                        <label>Common Name(s)</label>
                                        {/* <input type="text" class="form-control" placeholder=""/> */}
                                        {/* <div id="tags" style={{height:"2.45em",marginLeft:"-3px",marginTop:"0.5px",padding:"6px 0",border:"2px solid #cccccc",borderRadius:"5px"}} onClickCapture={addTag}>
                                            {tagsData.map(tagData=>{
                                            return (<a className="subtag">{tagData}</a>)
                                            }) }

                                        </div> */}

                                        <div id="tags" style={{height:"2.45em",marginLeft:"-3px",marginTop:"0.5px",padding:"6px 0",border:"2px solid #cccccc",borderRadius:"5px"}} onClickCapture={addTag}>
                                            {tagsData.map(tagData=>{
                                            return (<a className="subtag">{tagData}</a>)
                                            }) }

                                        </div>
                                    </div>
                          
                                </div>
                               
                                <div class="row mt-3">
                                    <div class="col-md-6 col-lg-3">
                                        <label>Category <span class="text-danger">*</span></label>
                                        <select class="form-control" id="category_id" onChange={handleInput}>
                                        <option value="0" selected>Select...</option>
                                            <option>Option 1</option>
                                            {categoryData.map(category=>{
                                                return (<option value={category.id} selected={category.id===productDataById.category_id?"selected":""}>{category.name}</option>)

                                            })}
                                        </select>
                                    </div>
                                   
                                    <div class="col-md-6 col-lg-3 mt-2 mt-md-0">
                                        <label>Manufacturer <span class="text-danger">*</span></label>
                                        <select class="form-control"  id="manufacturer_id"  onChange={handleInput}>
                                        <option value="0" selected>None</option>
                                            {manufactureData.map(manufacture=>{
                                                return(<option value={manufacture.id} selected={manufacture.id===productDataById.manufacturer_id?"selected":""}>{manufacture.name}</option>)
                                            })

                                            }
                                        </select>
                                    </div>
                                </div>

                                <div class="row mt-3">
                                    <div class="col-md-12">
                                        <label>Internal Notes <small>(Not shown to customer)</small> </label>
                                        <textarea class="form-control" rows="4" id="internal_notes" value={productDataById.internal_notes} onChange={handleInput} ></textarea>
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-md-12 text-md-right">
                                        <button type="button" class="btn btn-outline-secondary btn-lg"  
                                       onClick={()=>props.pageReDirectAction("product","add")}
                                        // onClick={goToParentPage}
                                        
                                        >Cancel</button>
                                        {/* <button type="reset" class="btn btn-primary btn-lg ml-3"  
                                        disabled={submitCount===0?needAction===true?false:true:true} onClick={submitAction} > 
                                        {actionType==="add"?"Add Product":"Update Product"}</button> */}

                                        <button className={needAction===true?"btn btn-primary btn-lg ml-3":"btn btn-primary btn-lg ml-3"} 
                                            disabled={submitCount===0?needAction===true?false:true:true} onClick={submitAction}>
                                            {actionType==="add"?"Add Product":"Update Product"}
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
        </div>
    )
}

const mapStateToProps = (state)=> ({
    productData:state.productData,
    categoryData:state.categoryData
})

export default connect(mapStateToProps ,{
       //product actions
    createProductAction ,
    updateProductAction ,
    deleteProductAction ,
    getAllProductAction,
    getSpecifiedProductAction,

    //page Redirects action
    pageReDirectAction,
    subPageReDirectAction,
    //category Data
    getAllCategoriesAction,

    // handleinput 
    handleInputAction,
    handleTagAction

})(GeneralSettings)
