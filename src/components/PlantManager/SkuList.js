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
getSpecifiedPlantAction
   
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
        // alert(data)
        console.log(e.target.value)
        let dateInformate = e.target.value
        props.handlePlantSkuInputAction("sale_expiry_date",dateInformate)

    }
    const handleInput =(e)=>{
        if(e.target.id =="archived") props.handlePlantSkuInputAction(e.target.id,e.target.value ==1?0:1)
        else if(e.target.id =="status") props.handlePlantSkuInputAction(e.target.id,e.target.value ==1?0:1)
        else props.handlePlantSkuInputAction(e.target.id,e.target.value)

    }
    const [id,setId] = useState(0)
    const [open,setOpen] = useState(false)

    const cancel = ()=>{
       setOpen(false)
       setId(0)
        
    }
    const confirm = ()=>{
       props.deletePlantAction(id)
       setOpen(false)
       setId(0)
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
   const getSpecifiedplant = (id,data,value) =>{
     
      window.scrollTo(100, -100)
      props.getSpecifiedPlantAction(id,"edit","sku")
   
   }


      const {plantData,plantSkuData,plantSkuPageNumber,needAction,plantSkuDataById} = props.plantData
      const plantPerPage = 5;
      const pagesVisited = plantSkuPageNumber*5;
      const displayPlantSkuList = plantSkuData.slice(pagesVisited,pagesVisited+plantPerPage)
      const pageCount = Math.ceil(plantSkuData.length/plantPerPage)
        const {allAttributes} = props.attributeData
        console.log(displayPlantSkuList)
        let minMonth = new Date().getMonth()
        let minDate = new Date().getDate()
        let minDateFormate = minDate.toString().length==1?"0"+minDate:minDate
        let minMonthFormate = minMonth.toString().length==1?"0"+(minMonth+1):(minMonth+1)
        console.log(new Date().getFullYear()+"-"+(new Date().getMonth()+1)+"-"+new Date().getDate())
        console.log(plantSkuDataById)
        return(
        <div>
                <div>
                            <div class="bg-white px-3 py-3 mt-3">
                                <form>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <h3>GENERATED SKU:</h3>
                                        </div>
                                        <div class="col-md-6 d-flex justify-content-end">
                                            <div class=" d-flex align-items-center my-md-2 mt-3 mt-md-0">
                                                Archive
                                                <div class="switcher ml-2">
                                                    <input type="checkbox" name="switcher_checkbox_2" id="switcher_checkbox_2" value="2"/>
                                                    <label for="switcher_checkbox_2"></label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col-md-6 col-lg-3">
                                            <label>Form:</label>
                                            <select class="form-control">
                                                <option>Select</option>
                                                <option>Option 1</option>
                                                <option>Option 2</option>
                                            </select>
                                        </div>
                                        <div class="col-md-6 col-lg-3 mt-2 mt-md-0">
                                            <label>Caliper:</label>
                                            <select class="form-control">
                                                <option>Select</option>
                                                <option>Option 1</option>
                                                <option>Option 2</option>
                                            </select>
                                        </div>
                                        <div class="col-md-6 col-lg-3 mt-2 mt-md-0">
                                            <label>Height:</label>
                                            <select class="form-control">
                                                <option>Select</option>
                                                <option>Option 1</option>
                                                <option>Option 2</option>
                                            </select>
                                        </div>
                                        <div class="col-md-6 col-lg-3 mt-2 mt-md-0">
                                            <label>Packaging: <span class="text-danger">*</span></label>
                                            <select class="form-control">
                                                <option>Select</option>
                                                <option>Option 1</option>
                                                <option>Option 2</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col-md-6 col-lg-3">
                                            <label>Each Cost: <span class="text-danger">*</span></label>
                                            <input type="text" class="form-control text-right" placeholder="" value="$1.25"/>
                                        </div>
                                        <div class="col-md-6 col-lg-3 mt-2 mt-md-0">
                                            <label>Each Price: <span class="text-danger">*</span></label>
                                            <input type="text" class="form-control text-right" placeholder="" value="$1.25"/>
                                        </div>
                                        <div class="col-md-6 col-lg-3 mt-2 mt-md-0">
                                            <label>Sale Price: <span class="text-danger">*</span></label>
                                            <input type="text" class="form-control text-right" placeholder="" value="$1.25"/>
                                        </div>
                                        <div class="col-md-6 col-lg-3 mt-2 mt-md-0">
                                            <label>Sales Expiry Date:</label>
                                            <div class="row">
                                                <div class="col-md-12 col-lg-12 d-flex">
                                                    <div>
                                                        <DatePicker value={plantSkuDataById.sale_expiry_date} min={new Date().getFullYear()+"-"+minMonthFormate+"-"+minDateFormate} value={plantSkuDataById.sale_expiry_date}/>
                                                    </div>
                                                    <div class="d-flex align-items-center flex-wrap ml-2">
                                                        Active
                                                        <div class="switcher switcher-sm ml-2 pr-2">
                                                            <input type="checkbox" id="archived" onChange={handleInput} value={plantSkuDataById.status} checked={plantSkuDataById.status==0?false:true}/>
                                                            <label for="switcher_checkbox_date"></label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col-md-6 col-lg-3">
                                            <label>Volume Quality: <span class="text-danger">*</span></label>
                                            <select class="form-control" id={allAttributes.length>0?allAttributes.filter(formData=>formData.name =="Volume_Quality")[0]["id"]:"Volume_Quality"} onChange={handleInput} >
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
                                            <label>Volume Price per unit:</label> 
                                            <input type="checkbox" id="volume_price_per_unit" onChange={handleInput}/>
                                            
                                            {/* <select class="form-control"><option>Select</option><option>Option 1</option><option>Option 2</option></select> */}
                                        </div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col-md-12 text-md-right">
                                            <button type="button" class="btn btn-primary btn-lg" disabled={needAction==true?false:true} onClick={()=>props.updatePlantSkuAction(plantSkuDataById.plant_id,plantSkuDataById)}>Add SKU &amp; Clear</button>
                                            <button type="button" class="btn btn-outline-secondary btn-lg ml-3" disabled={needAction===true?false:true} onClick={()=>props.updatePlantSkuAction(plantSkuDataById.plant_id,plantSkuDataById)}>Add SKU &amp; Retain</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="bg-white px-3 py-3 my-3">
                                <table id="plantDetails" class="table table-striped w-100 table-responsive">
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

                                    {
                    displayPlantSkuList.map(skuData=>{
                        return(
                                        <tr>
                                            <td>{skuData.archived ==0?"Active":"Inactive"}</td>
                                            <td>{skuData.sku_code}</td>
                                            <td>{skuData.each_cost}</td>
                                            <td>{skuData.each_price}</td>
                                            <td>{skuData.sale_price}</td>
                                            <td class="text-center">
                                                <div class="custom-control custom-checkbox mb-1">
                                                    <input type="checkbox" class="custom-control-input"checked={skuData.status==0?false:true}/>
                                                    <label class="custom-control-label" for="customCheck1"></label>
                                                </div>
                                            </td>
                                            <td>{skuData.volume_price_per_unit}</td>
                                            <td>{skuData.volume_quantity}</td>
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
                                    })
                                  }
                                    </tbody>
                                </table>
                            </div>
                        </div>
        </div>
     )
    }

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
   getSpecifiedPlantAction
})(SkuList)