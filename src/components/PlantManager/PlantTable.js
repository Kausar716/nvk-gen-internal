import React,  { useState , useEffect} from 'react' ;
//import {Button,Badge,Form,Input,FormGroup,CustomInput,Label,Pagination,PaginationItem,PaginationLink,Table} from 'reactstrap'
import {connect} from "react-redux";
// import ReactPaginate from 'react-paginate'
import ActionModal from '../Modal/ActionModal'
import Loader from '../ProductManager/Loader'
//import { useTable, usePagination } from 'react-table'
import {
    //plant actions
    createPlantAction ,
    updatePlantAction, 
    deletePlantAction ,
     getAllPlantAction,
     getSpecifiedPlantAction,
     duplicatePlant,
     setPlantPageNumber,
     plantPageReDirectAction,
    plantSubPageReDirectAction


    

}from "../../actions/plantManagerAction";

import {dPageNumberList} from '../../reducers/listOfNumbers'
import TablePagination from '../Pagination';
import './index.css';
//import GeneralSettings from './GeneralSettings';

const PlantTable=(props)=> {
    const [id,setId] = useState(0)
    const [open,setOpen] = useState(false)
    const [message,setMessage] = useState("")
    const [type, setType] = useState("")

    const [pageSize, setPageSize] =useState(15)
    const cancel = ()=>{
        setOpen(false)
        setId(0)
        setType("")
        setMessage("")
         
     }
     const confirm = ()=>{
         if(type==="delete"){
            props.deletePlantAction(id)

         }else{
             props.duplicatePlant(id)
         }
   
        setOpen(false)
        setId(0)
        setType("")
        setMessage("")
    }

    
    const paginationChange =(event, page)=>{
        props.setPlantPageNumber(page-1)
    }


    const {plantData,plantPageNumber} = props.plantData
    const totalLength = plantData.length
    const plantPerPage = pageSize;
    const pagesVisited = plantPageNumber*pageSize;
    const displayPlantList = plantData.slice(pagesVisited,pagesVisited+plantPerPage)
    const pageCount = Math.ceil(plantData.length/plantPerPage)
    console.log("plantData.length",plantData.length)
    console.log("pageCountpageCount", pageCount)
    const {plantCategoryData} =  props.categoryData

   const abcd = props.dPageNumberList
   console.log("abcd", abcd)
   const confirmAction = (id,type)=>{
    if(type==="delete"){
        setType(type)
        setMessage("Are you sure you want to delete this plant and its related SKUs?")

    }else{
        setType(type)
        setMessage("Are you sure you want to duplicate this plant and all its related SKU and plant information?")

    }
    setOpen(true)
    setId(id)
}

    return (

        <div>
            
              <ActionModal cancel={cancel} confirm={confirm} open={open} message={message}/>


              <div className="row_1">

                    <div>
                    <label className="greenText">{"Showing " + (plantPageNumber>0 ? (pageSize*((plantPageNumber)))+1 : ((plantPageNumber)+1))+  "  to  " +  (plantPageNumber>0 ? (((pageSize*((plantPageNumber)))+pageSize)>totalLength ? totalLength : ((pageSize*((plantPageNumber)))+pageSize)) : ((((plantPageNumber)+1)*pageSize)>totalLength?totalLength:(((plantPageNumber)+1)*pageSize)))   + "  of   "  +   totalLength }</label>
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
                    <TablePagination pageChange={paginationChange} pageCount={pageCount} pageNumber={plantPageNumber+1}/>
                    </div>

                </div>
                            <div className="form-group row mt-3">
                                <div className="col-md-12">
                                    <table id="plantDetails" className="table table-striped w-100">
                                        <thead>
                                            <tr>
                                                <th className="text-nowrap">Status</th>
                                                <th className="text-nowrap text-center">Plant ID</th>
                                                <th className="text-nowrap">Plant Name</th>
                                                <th className="text-nowrap">Category</th>
                                                <th className="text-nowrap text-center">In Production</th>
                                                <th className="text-nowrap text-center">Discontinued</th>
                                                <th className="text-nowrap text-center">Archived</th>
                                                <th className="text-nowrap text-center">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                        {displayPlantList.map(({id,status, plantName, location, category, onWebsite, PrintCatalog, Discontinued, archived, patent,category_id,plant_id,genus})=>{
                                             let id2 ="discontinue"
                                             let id3 ="Archived"
                                             let id4 ="Production"
                                             return(     
                                            <tr>
                                                <td style={{color:status==="1" ? "black" :"red"}}>{status === "1" ?"Active":"Inactive"}</td>
                                                <td className="text-nowrap text-center">{plant_id}</td>
                                                <td>{genus}</td>
                                                <td>
                                                    {/* backgroundColor:product.archived == 0?"#ffffff":"#cccccc"{plantCategoryData.length>0?plantCategoryData.filter(cat=>cat.id===category_id)[0]["name"]:""} */}
                                                    {plantCategoryData.length>0?plantCategoryData.filter(cat=>cat.id===category_id)[0]?plantCategoryData.filter(cat=>cat.id===category_id)[0]["name"]:"":""}
                                                    </td>
                                                <td className="text-center">
                                                <div className="custom-control custom-checkbox mb-1">
                                                        <input type="checkbox" className="custom-control-input" id={id4.concat(plant_id)} />
                                                        <label className="custom-control-label" for={id4.concat(plant_id)}></label>
                                                    </div>
                                                </td>
                                                <td className="text-center">
                                                    <div className="custom-control custom-checkbox mb-1">
                                                        <input type="checkbox" className="custom-control-input" id={id2.concat(plant_id)} />
                                                        <label className="custom-control-label" for={id2.concat(plant_id)}></label>
                                                    </div>
                                                </td>


                                                <td className="text-center">
                                                    <div className="custom-control custom-checkbox mb-1">
                                                            <input type="checkbox" className="custom-control-input" checked={archived===1?"checked":""} id={id3.concat(plant_id)}/>
                                                            <label className="custom-control-label" for={id3.concat(plant_id)}></label>
                                                    </div>
                                                </td>


                                                <td className="text-center">
                                                    <span>
                                                        {/* <a href="javascript;"> */}
                                                            <img src="assets/img/edit.svg" alt="" onClick={()=>props.getSpecifiedPlantAction(plant_id)}/>
                                                        {/* </a> */}
                                                    </span>
                                                    <span>
                                                        {/* <a href="javascript;"> */}
                                                            <img src="assets/img/duplicate.svg" alt=""  onClick={()=>props.duplicatePlant(plant_id)} />
                                                        {/* </a> */}
                                                    </span>
                                                    <span>
                                                        {/* <a href="javascript;"> */}
                                                            <img src="assets/img/delete.svg" alt="" onClick={()=>confirmAction(plant_id,"delete")}/>
                                                        {/* </a> */}
                                                    </span>
                                                </td>
                                            </tr>)
                                        })}
                                

                                        </tbody>
                                    </table>
                                    <div className="centerItem">
                                    <p >{plantData.length===0?"Plant Data loading ":""} <Loader /></p>
                                    </div>
                                   
                                </div>
                            </div>
        </div>
    )
}

const mapStateToProps = (state)=> ({
    plantData:state.plantData,
    categoryData: state.categoryData

})
export default connect(mapStateToProps,{  //plant actions
    createPlantAction ,
    updatePlantAction, 
    deletePlantAction ,
     getAllPlantAction,
     getSpecifiedPlantAction,
     duplicatePlant,
     setPlantPageNumber,
     dPageNumberList,
     plantPageReDirectAction,
     plantSubPageReDirectAction
    })(PlantTable)
