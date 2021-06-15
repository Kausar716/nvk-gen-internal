import React,  { useState } from 'react' ;
//import {Button,Badge,Form,Input,FormGroup,CustomInput,Label,Pagination,PaginationItem,PaginationLink,Table} from 'reactstrap'
import {connect} from "react-redux";
// import ReactPaginate from 'react-paginate'
import ActionModal from '../Modal/ActionModal'
import {
    //plant actions
    createPlantAction ,
    updatePlantAction, 
    deletePlantAction ,
     getAllPlantAction,
     getSpecifiedPlantAction,
     duplicatePlant,
     setPlantPageNumber


    

}from "../../actions/plantManagerAction";
import TablePagination from '../Pagination';
import './index.css';

const PlantTable=(props)=> {
    const [id,setId] = useState(0)
    const [open,setOpen] = useState(false)
    const [message,setMessage] = useState("")
    const [type, setType] = useState("")
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
    // const confirmAction = (id,type)=>{
    //     if(type=="delete"){
    //         setType(type)
    //         setMessage("Are you sure you want to delete this product and its related SKUs?")

    //     }else{
    //         setType(type)
    //         setMessage("Are you sure you want to duplicate this product and all its related SKU and plant information?")

    //     }
    //     setOpen(true)
    //     setId(id)
    // }
    
    const paginationChange =(event, page)=>{
        props.setPlantPageNumber(page-1)
    }

    const {plantData,plantPageNumber} = props.plantData
    const plantPerPage = 5;
    const pagesVisited = plantPageNumber*5;
    const displayPlantList = plantData.slice(pagesVisited,pagesVisited+plantPerPage)
    const pageCount = Math.ceil(plantData.length/plantPerPage)
    console.log(plantPageNumber)
    const {plantCategoryData} =  props.categoryData
    return (
        <div>
              <ActionModal cancel={cancel} confirm={confirm} open={open} message={message}/>
              <div className="pagination_area">
            <TablePagination pageChange={paginationChange} pageCount={pageCount} pageNumber={plantPageNumber+1}/>
            </div>
            <label className="greenText">{"Showing " + (( plantPageNumber*5)+1 )+  "  to  " +  ((( plantPageNumber+1)*5)>plantCategoryData.length ?plantCategoryData.length:(( plantPageNumber+1)*5))  + "  of   "  +   plantCategoryData.length }</label>
           
                            <div class="form-group row mt-3">
                                <div class="col-md-12">
                                    <table id="plantDetails" class="table table-striped w-100">
                                        <thead>
                                            <tr>
                                                <th class="text-nowrap">Status</th>
                                                <th class="text-nowrap">Plant ID</th>
                                                <th class="text-nowrap">Plant Name</th>
                                                <th class="text-nowrap">Category</th>
                                                <th class="text-nowrap">In Production</th>
                                                <th class="text-nowrap text-center">Discontinued</th>
                                                <th class="text-nowrap text-center">Archived</th>
                                                <th class="text-nowrap text-center">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                        {displayPlantList.map(({id,status, plantName, location, category, onWebsite, PrintCatalog, Discontinued, archived, patent,category_id,plant_id})=>{
                                             let id2 ="discontinue"
                                             let id3 ="Archived"
                                             return(     
                                            <tr>
                                                <td>{status === 1 ?"Active":"Inactive"}</td>
                                                <td>{plant_id}</td>
                                                <td>{patent}</td>
                                                <td>
                                                    {/* {plantCategoryData.length>0?plantCategoryData.filter(cat=>cat.id===category_id)[0]["name"]:""} */}
                                                    {plantCategoryData.length>0?plantCategoryData.filter(cat=>cat.id===category_id)[0]?plantCategoryData.filter(cat=>cat.id===category_id)[0]["name"]:"":""}
                                                    </td>
                                                <td></td>
                                                <td class="text-center">
                                                    <div class="custom-control custom-checkbox mb-1">
                                                        <input type="checkbox" class="custom-control-input" id={id2.concat(plant_id)} />
                                                        <label class="custom-control-label" for={id2.concat(plant_id)}></label>
                                                    </div>
                                                </td>


                                                <td class="text-center">
                                                <div class="custom-control custom-checkbox mb-1">
                                                        <input type="checkbox" class="custom-control-input" id={id3.concat(plant_id)}/>
                                                        <label class="custom-control-label" for={id3.concat(plant_id)}></label>
                                                    </div>
                                                </td>


                                                <td class="text-center">
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
                                            </tr>)
                                        })}
                                

                                        </tbody>
                                    </table>
                                    <p style={{textAlign:"center",color:"red"}}>{plantData.length===0?"No Plant Found ":""}</p>

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
     setPlantPageNumber
    
    })(PlantTable)
