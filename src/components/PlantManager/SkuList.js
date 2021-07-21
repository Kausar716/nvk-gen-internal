/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
/* eslint-disable react/jsx-no-duplicate-props */
import React, { useState,useEffect } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import DatePicker from 'react-date-picker';
import {Button,Badge,Form,Input,FormGroup,CustomInput,Label,Pagination,PaginationItem,PaginationLink,Table,Select} from 'reactstrap'
import {connect} from "react-redux";
import {getAllAttributesAction} from "../../actions/attributeAction";
import TablePagination from '../Pagination'
import ActionModal from '../Modal/ActionModal'
import {
createPlantSkuAction ,
updatePlantSkuAction ,
deletePlantSkuAction ,
getAllPlantSkuAction ,
showSpecifiedPlantSkuAction ,
setPlantSkuPageNumber,
handlePlantSkuInputAction,
deletePlantAction,
deleteSkuAction,
getSpecifiedPlantAction,
showSinglePlantSkuAction,
plantPageReDirectAction
   
} from "../../actions/plantManagerAction";
import {
    deleteProductAction
} from "../../actions/plantManagerAction"
// import ReactPaginate from 'react-paginate'


const SkuList = (props)=>{
    const [pageNumber,setPageNumber] = useState(0)
    const [startDate,setStartDate] = useState(new Date())
    const [message,setMessage] = useState("")
    const [type, setType] = useState("")
    const [pageSize, setPageSize] =useState(15)
    const [errorObj,setErrorObj] = useState({ each_cost:0,each_price:0,sale_price:0  })
    const [errorCount,setErrorCount] = useState(0)
    const [each_costError,setEach_costError] =useState(false)
    const [each_priceError,setEach_priceError] = useState(false)
    const [sales_priceError,setSales_priceError] = useState(false)
    const [volume_priceError, setVolume_priceError] = useState(false)
    const handleChange=(date)=> {
        setStartDate(date)
      }
      useEffect(()=>{
          props.getAllAttributesAction()
          props.getAllPlantSkuAction()
      },[])
    
      const onFormSubmit=(e)=> {
        e.preventDefault();
        console.log(this.state.startDate)
      }
      const paginationChange =(event, page)=>{
        props.setPlantSkuPageNumber(page-1)
    }
    const handleChange1 = (e) =>{
        console.log(e.target);
        let dateInformate = e.target.value
        props.handlePlantSkuInputAction("sale_expiry_date",dateInformate)

    }
    const handleInput =(e)=>{
        let errorcount =errorCount
        let errorobj =errorObj
        if(e.target.id  === "each_cost" ){
            errorobj.each_cost=0
            errorcount--
            setEach_costError(false)
        }
        if(e.target.id  === "each_price" ){
            errorobj.each_price=0
            errorcount--
            setEach_priceError(false)
        }
        if(e.target.id  === "sale_price" ){
            errorobj.sale_price=0
            errorcount--
            setSales_priceError(false)
        }
        if(e.target.id === "volume_price_per_unit"){
            errorobj.volume_price_per_unit=0
            errorcount--
            setVolume_priceError(false)
        }
        setErrorObj(errorobj)
       setErrorCount(errorcount)
       console.log(e.target.id)
       console.log(e.target.value)
        if(e.target.id =="archived") props.handlePlantSkuInputAction(e.target.id,e.target.value ==1?0:1)
        else if(e.target.id =="status") props.handlePlantSkuInputAction(e.target.id,e.target.value ==1?0:1)
        else props.handlePlantSkuInputAction(e.target.id,e.target.value)

    }
    const handleValidation = () => {
//         let returnValue=true
//         let errorcount =errorCount
//         let errorobj =errorObj
//       if(plantDataById.genus.length === 0){
//        returnValue= false
//        errorobj.genus=1
//        errorcount++
//       }
//       if(plantDataById.species.length === 0){
//        returnValue= false
//        errorobj.species=1
//        errorcount++
//       }
//    //    if(plantDataById.categoryData.length === 0){
//    //     returnValue= false
//    //     errorobj.categoryData=1
//    //     errorcount++
//    //    }
//       setErrorObj(errorobj)
//       setErrorCount(errorcount)

   }
   const handleSubmit = ()=>{
    // let validate = handleValidation()  
    // if(validate)
    // props.updateSkuAction(skuDataById.product_id,skuDataById,skuValidation)
   }
    const [id,setId] = useState(0)
    const [open,setOpen] = useState(false)

    const cancel = ()=>{
       setOpen(false)
       setId(0)
        
    }
    const confirm = ()=>{
       console.log(id)
       props.deleteSkuAction(id)
       setOpen(false)
       setId(0)
   }
 
   const confirmAction = (id,type)=>{
    if(type=="delete"){
        setType(type)
        setMessage("Are you sure you want to delete this SKU?")

    }else{
        setType(type)
        setMessage("Are you sure you want to duplicate this product and all its related SKU and plant information?")

    }
    setOpen(true)
    setId(id)
}
   const getSpecifiedplant = (skudata,data,value) =>{
     console.log(id)
      window.scrollTo(100, -100)
      props.showSinglePlantSkuAction(skudata.id,"edit","sku")
   
   }
   const submitAction = (e) => {
       console.log(props.plantData)
    if(!each_costError&& !each_priceError&& !sales_priceError && !volume_priceError){
    if(e.target.id === "dontRetain"){
    if(actionType ==="add" || actionType === "edit"){
    props.createPlantSkuAction(props.plantData.ae_plant_id,plantSkuDataById)
    props.plantPageReDirectAction("all","plant")
    }
    else if(actionType ==="sku"){ 
        props.updatePlantSkuAction(plantSkuDataById.id,plantSkuDataById)
        props.plantPageReDirectAction("all","plant")

    }
    }
    else if(e.target.id === "retain"){
        if(actionType ==="add" || actionType === "edit"){
            props.createPlantSkuAction(props.plantData.ae_plant_id,plantSkuDataById)
             
        }
        else if(actionType ==="sku"){ 
            props.updatePlantSkuAction(plantSkuDataById.id,plantSkuDataById)
        }
       
    }
    }
   }
   const handleCancel = ()=>{
    props.plantPageReDirectAction("all","plant")
   }


   console.log(props.plantData);
      const {plantData,plantSkuData,plantSkuPageNumber,needAction,plantSkuDataById,plantSkuDataList,actionType} = props.plantData
      const plantPerPage = pageSize;
      const totalLength = plantSkuDataList.length;
      const pagesVisited = plantSkuPageNumber*pageSize;
      const displayPlantSkuList = plantSkuDataList.slice(pagesVisited,pagesVisited+plantPerPage)
      const pageCount = Math.ceil(plantSkuDataList.length/plantPerPage)
        const {allAttributes} = props.attributeData
        console.log(allAttributes)
        let minMonth = new Date().getMonth()
        let minDate = new Date().getDate()
        let minDateFormate = minDate.toString().length==1?"0"+minDate:minDate
        let minMonthFormate = minMonth.toString().length==1?"0"+(minMonth+1):(minMonth+1)
        console.log(new Date().getFullYear()+"-"+(new Date().getMonth()+1)+"-"+new Date().getDate())
        console.log(props.plantData)
        console.log(props.plantData.plantSkuDataList)
        let selectedForm =plantSkuDataById.attributes_subattributes.filter(attributeObj=>{
            if(attributeObj.attribute_id === 1){
               return attributeObj.subattribute_id
           }
       })[0]
       let selectedCaliper =plantSkuDataById.attributes_subattributes.filter(attributeObj=>{
        if(attributeObj.attribute_id === 5){
           return attributeObj.subattribute_id
       }
       })[0] 
        let selectedHeight =plantSkuDataById.attributes_subattributes.filter(attributeObj=>{
        if(attributeObj.attribute_id === 4){
        return attributeObj.subattribute_id
        }
        })[0]  
        let selectedPackaging =plantSkuDataById.attributes_subattributes.filter(attributeObj=>{
            if(attributeObj.attribute_id === 3){
            return attributeObj.subattribute_id
        }
        })[0]
        let selectedVolumeQuality =plantSkuDataById.attributes_subattributes.filter(attributeObj=>{
        if(attributeObj.attribute_id === 6){
        return attributeObj.subattribute_id
        }
        })[0]
        let flag=0
        if(plantSkuDataById){       
            if(!plantSkuDataById.each_cost || !plantSkuDataById.each_price || !plantSkuDataById.sale_price){
                flag=1
                
            }
            if(plantSkuDataById.attributes_subattributes.length === 0){
                flag=1
            }
            else if(plantSkuDataById.attributes_subattributes.length>0){
                let checkForData
                checkForData= plantSkuDataById.attributes_subattributes.filter(attributeData=>{
                    return(attributeData.attribute_id === 3)
                })
                console.log(checkForData)
                if(checkForData.length === 0){
                    flag=1
                }
            }
            
        }
        const handleBlur =(evt)=>{

            var charCode = (evt.which) ? evt.which : evt.keyCode;
            console.log(evt.target.id)
            let id = evt.target.id
            let characterCheck = evt.target.value.match(/^\d+(\.\d+)?$/);
           if(characterCheck === null){
               if(id === "each_cost"){
                setEach_costError(true)
               }
               if(id === "each_price"){
                setEach_priceError(true)
               }
               if(id=== "sale_price"){
                setSales_priceError(true)
               }
               if(id=== "volume_price_per_unit"){
                setVolume_priceError(true)
               }
           
            
           }
           
           }
           let volumeQualityList=[]
           if(allAttributes.length>0)
           volumeQualityList= allAttributes.filter(formData=>formData.id === 6)
        //   .map(filterData=>{
        //     return (filterData.sub_attributes.map(subData=>{
        //         return(<option value={subData.id}>{subData.value}</option>)
        //     }))
        // })      value                    
        
 
      
        return(
        <div>
            <ActionModal cancel={cancel} confirm={confirm} open={open} message={message}/>
                <div>
                            <div class="bg-white px-3 py-3 mt-3" style={{marginLeft:"1em", marginRight:"0.5em",paddingRight:"1em"}}>
                                <form>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <h3>GENERATED SKU</h3>{plantSkuDataById.sku_code}
                                        </div>
                                        <div class="col-md-6 d-flex justify-content-end">
                                            <div class=" d-flex align-items-center my-md-2 mt-3 mt-md-0">
                                                Archive
                                                <div class="switcher ml-2">
                                                    <input type="checkbox" name="archived" 
                                                     id="archived" onChange={handleInput} value={plantSkuDataById.archived} checked={plantSkuDataById.archived===0?false:true}/>
                                                    <label for="archived"></label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col-md-6 col-lg-3">
                                            <label>Form</label>
                                            <select class="form-control"  id={allAttributes.length>0?allAttributes.filter(formData=>formData.id ==1)[0]["id"]:"form"} onChange={handleInput} 
                                            value={selectedForm?selectedForm.subattribute_id:""} disabled={(actionType === "sku")}>
                                                 <option>None</option>
                                                {allAttributes.length>0?allAttributes.filter(formData=>formData.name ==="Form").map(filterData=>{
                                                    return (filterData.sub_attributes.map(subData=>{
                                                        return(<option value={subData.id}>{subData.value}</option>)
                                                    }))
                                                })                          
                                                :""}
                                            </select>
                                        </div>
                                        <div class="col-md-6 col-lg-3 mt-2 mt-md-0">
                                            <label>Caliper</label>
                                            <select class="form-control" id={allAttributes.length>0?allAttributes.filter(formData=>formData.name ==="Caliper")[0]["id"]:"caliper"} onChange={handleInput}
                                            value={selectedCaliper?selectedCaliper.subattribute_id:""} disabled={(actionType === "sku")}>
                                            <option>None</option>
                                            {allAttributes.length>0?allAttributes.filter(formData=>formData.name =="Caliper").map(filterData=>{
                                                    return (filterData.sub_attributes.map(subData=>{
                                                        return(<option value={subData.id}>{subData.value}</option>)
                                                    }))
                                                })                          
                                                :""}
                                            </select>
                                        </div>
                                        <div class="col-md-6 col-lg-3 mt-2 mt-md-0">
                                            <label>Height</label>
                                            <select class="form-control" id="height" id={allAttributes.length>0?allAttributes.filter(formData=>formData.name =="Height")[0]["id"]:"height"} onChange={handleInput}
                                            value={selectedHeight?selectedHeight.subattribute_id:""} disabled={( actionType === "sku")}>
                                            <option>None</option>
                                            {allAttributes.length>0?allAttributes.filter(formData=>formData.name ==="Height").map(filterData=>{
                                                    return (filterData.sub_attributes.map(subData=>{
                                                        return(<option value={subData.id}>{subData.value}</option>)
                                                    }))
                                                })                          
                                                :""}
                                            </select>
                                        </div>
                                        <div class="col-md-6 col-lg-3 mt-2 mt-md-0">
                                            <label>Packaging <span class="text-danger">*</span></label>
                                            <select class="form-control" id="packaging" id={allAttributes.length>0?allAttributes.filter(formData=>formData.id === 3)[0]["id"]:"packaging"} onChange={handleInput}
                                            value={selectedPackaging?selectedPackaging.subattribute_id:""} disabled={(actionType === "sku")}>
                                            <option>None</option>
                                            {allAttributes.length>0?allAttributes.filter(formData=>formData.name ==="Packaging").map(filterData=>{
                                                    return (filterData.sub_attributes.map(subData=>{
                                                    
                                                        return(<option value={subData.id}>{subData.value}</option>)
                                                    }))
                                                })                          
                                                :""}
                                            </select>
                                        </div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col-md-6 col-lg-3">
                                            <label>Each Cost <span class="text-danger">*</span></label>
                                            <input type="text" onBlur={handleBlur} class="form-control text-right" placeholder="0.00" id="each_cost" value={plantSkuDataById.each_cost} onChange={handleInput}/>
                                            {each_costError?<span style={{fontSize:"small",color:"red"}}>Enter Valid Each Cost</span>:""}
                                        </div>
                                        <div class="col-md-6 col-lg-3 mt-2 mt-md-0">
                                            <label>Each Price <span class="text-danger">*</span></label>
                                            <input type="text" onBlur={handleBlur} class="form-control text-right" placeholder="0.00" id="each_price" value={plantSkuDataById.each_price} onChange={handleInput}/>
                                            {each_priceError?<span style={{fontSize:"small",color:"red"}}>Enter Valid Each Price</span>:""}
                                        </div>
                                        <div class="col-md-6 col-lg-3 mt-2 mt-md-0">
                                            <label>Sale Price <span class="text-danger">*</span></label>
                                            <input type="text" onBlur={handleBlur} class="form-control text-right" placeholder="0.00" id="sale_price" value={plantSkuDataById.sale_price} onChange={handleInput}/>
                                            {sales_priceError?<span style={{fontSize:"small",color:"red"}}>Enter Valid Sale Price</span>:""}
                                        </div>
                                        <div class="col-md-6 col-lg-3 mt-2 mt-md-0">
                                            <label>Sales Expiry Date</label>
                                            <div class="row">
                                                <div class="col-md-12 col-lg-12 d-flex">
                                                    <div>
                                                        {/* <DatePicker value={plantSkuDataById.sale_expiry_date} min={new Date().getFullYear()+"-"+minMonthFormate+"-"+minDateFormate}
                                                         onChange={handleChange1}/> */}
                                                    <input type="date" onChange={handleChange1} className="dateDesign" disabled={plantSkuDataById.status==0?true:false}
                                                     value={plantSkuDataById.sale_expiry_date} min={new Date().getFullYear()+"-"+minMonthFormate+"-"+minDateFormate} />

                                                    </div>
                                                    <div class="d-flex align-items-center flex-wrap ml-2">
                                                        Active
                                                        <div class="switcher switcher-sm ml-2 pr-2">
                                                            <input type="checkbox" id="status" onChange={handleInput} value={plantSkuDataById.status} checked={plantSkuDataById.status==0?false:true}/>
                                                            <label for="status"></label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col-md-6 col-lg-3">
                                            <label>Volume Quality <span class="text-danger">*</span></label>
                                            <select class="form-control" id={"volume_quantity"} onChange={handleInput} 
                                            value={selectedVolumeQuality?selectedVolumeQuality.subattribute_id:""}>
                                            <option>None</option>
                                            {allAttributes.length>0?allAttributes.filter(formData=>formData.name ==="Volume_Quality").map(filterData=>{
                                                    return (filterData.sub_attributes.map(subData=>{
                                                        return(<option value={subData.id}>{subData.value}</option>)
                                                    }))
                                                })                          
                                                :""}
                                            </select>
                                        </div>
                                        <div class="col-md-6 col-lg-3 mt-2 mt-md-0">
                                            <label>Volume Price per unit</label> 
                                            {/* <input type="checkbox"  /> */}
                                            <input type="text" onBlur={handleBlur} class="form-control text-right" placeholder="0.00" value={plantSkuDataById.volume_price_per_unit}id="volume_price_per_unit" onChange={handleInput}/>
                                            {volume_priceError?<span style={{fontSize:"small",color:"red"}}>Enter Valid Volume Price Per Unit</span>:""}
                                            
                                            {/* <select class="form-control"><option>Select</option><option>Option 1</option><option>Option 2</option></select> */}
                                        </div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col-md-12 text-md-right">
                                            
                                            <button type="button" class="btn btn-primary btn-lg" disabled={(needAction===true && flag===0)?false:true} id="dontRetain" onClick={submitAction}
                                                 >{(actionType ==="add" || actionType === "edit")?"Add SKU":"Update SKU"}</button>
                                            <button type="button" class="btn btn-outline-secondary btn-lg ml-3" id="retain" disabled={(needAction===true && flag===0)?false:true} onClick={submitAction}>{(actionType ==="add" || actionType === "edit")?"Add SKU & Retain":"Update SKU & Retain"}</button>
                                            <button type="button" class="btn btn-outline-secondary btn-lg ml-3" id="retain" onClick={handleCancel}>Return to Plant Manager</button>

                                        </div>
                                    </div>
                                </form>
                            </div>
                               <div className="row_1" style={{marginTop:"1em", marginLeft:"1em"}}>
                            <div>
                            <label className="greenText">{"Showing " + (plantSkuPageNumber>0 ? (pageSize*((plantSkuPageNumber)))+1 : ((plantSkuPageNumber)+1))+  "  to  " +  (plantSkuPageNumber>0 ? (((pageSize*((plantSkuPageNumber)))+pageSize)>totalLength ? totalLength : ((pageSize*((plantSkuPageNumber)))+pageSize)) : ((((plantSkuPageNumber)+1)*pageSize)>totalLength?totalLength:(((plantSkuPageNumber)+1)*pageSize)))   + "  of   "  +   totalLength }</label>
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
                    <TablePagination pageChange={paginationChange} pageCount={pageCount} pageNumber={plantSkuPageNumber+1}/>
                    </div>
                    </div>
                            <div className="form-group row mt-3" style={{marginLeft:"0.42em", marginRight:"0.5em"}}>
                                <div className="col-md-12">
                                    <table id="plantDetails" class="table table-striped w-100">
                                        <thead>
                                            <tr>
                                                <th class="text-nowrap">Status</th>
                                                <th class="text-nowrap">SKU</th>
                                                <th class="text-nowrap text-center">Each Cost</th>
                                                <th class="text-nowrap text-center">Each Price</th>
                                                <th class="text-nowrap text-center">Sale Price</th>
                                                <th class="text-center">Sale Active</th>
                                                <th class="text-nowrap">Volume Price Per Unit</th>
                                                <th class="text-nowrap">Volume QTY</th>
                                                <th class="text-nowrap text-center">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                        {
                        displayPlantSkuList.map(skuData=>{
                           
                            return(
                                            <tr>
                                                <td>{skuData.archived ===0?"Active":"Inactive"}</td>
                                                <td>{skuData.sku_code}</td>
                                                <td class="text-right">{skuData.each_cost}</td>
                                                <td class="text-right">{skuData.each_price}</td>
                                                <td class="text-right">{skuData.sale_price}</td>
                                                <td class="text-center">
                                                    <div class="custom-control custom-checkbox mb-1 text-center">
                                                        <input type="checkbox" class="custom-control-input"checked={skuData.status==0?false:true}/>
                                                        <label class="custom-control-label" for="customCheck1"></label>
                                                    </div>
                                                </td>

                                                <td class="text-right">{skuData.volume_price_per_unit}</td>
                                                <td class="text-right">{skuData.volume_quantity}</td>
                                                <td class="text-center">
                                                    <span>
                                                        {/* <a href="javascript:;"> */}
                                                            <img src="assets/img/edit.svg" alt="" onClick={()=>getSpecifiedplant(skuData,"edit","sku")}/>
                                                        {/* </a> */}
                                                    </span>
                                                    {/* duplicate doesnt exeist for sku */}
                                                    {/* <span>
                                                        {/* <a href="javascript:;"> 
                                                            {/* <img src="assets/img/duplicate.svg" alt=""/> */}
                                                        {/* </a> */}
                                                    {/* </span>  */}
                                                    <span>
                                                        {/* <a href="javascript:;"> */}
                                                            <img src="assets/img/delete.svg" alt="" onClick={()=>confirmAction(skuData.id,"delete")}/>
                                                        {/* </a> */}
                                                    </span>
                                                </td>
                                            </tr>                                       
                                        )
                                        })
                                    }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
        </div>
     )
    }
    // )=>props.plantPageReDirectAction("plant","add")
const mapStateToProps = (state)=> ({
    plantData:state.plantData,
    attributeData:state.attributeData
})
export default connect(mapStateToProps,{
    createPlantSkuAction ,
    updatePlantSkuAction ,
    deletePlantSkuAction ,
    getAllPlantSkuAction ,
    showSpecifiedPlantSkuAction ,
    getAllAttributesAction,
    setPlantSkuPageNumber,
    handlePlantSkuInputAction,
    deletePlantAction,
    deleteSkuAction,
    getSpecifiedPlantAction,
    showSinglePlantSkuAction,
    plantPageReDirectAction
})(SkuList)