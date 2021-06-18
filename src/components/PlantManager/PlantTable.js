import React,  { useState , useEffect} from 'react' ;
//import {Button,Badge,Form,Input,FormGroup,CustomInput,Label,Pagination,PaginationItem,PaginationLink,Table} from 'reactstrap'
import {connect} from "react-redux";
// import ReactPaginate from 'react-paginate'
import ActionModal from '../Modal/ActionModal'
//import { useTable, usePagination } from 'react-table'
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

import {dPageNumberList} from '../../reducers/listOfNumbers'
import TablePagination from '../Pagination';
import './index.css';

const PlantTable=(props)=> {
    const [id,setId] = useState(0)
    const [open,setOpen] = useState(false)
    const [message,setMessage] = useState("")
    const [type, setType] = useState("")

    const [plantPageNum, setPlantPageNum]=useState([])

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



    var displayDropDownList=(()=>{
        let arr=[]
        for(let i=plantPageNum;i<=totalLength;i++){
          if(i%plantPageNum === 0){
       arr.push(i)
          }
        }
        setPlantPageNum(arr)
        console.log("arra", arr)
    }, []);

    console.log("displayDropDownList",displayDropDownList)
    
    // var displayDropDownList =()=>{
    //     let arr=[]
    //             for(let i=plantPageNum;i<=totalLength;i++){
    //               if(i%plantPageNum === 0){
    //            arr.push(i)
    //               }
    //             }
    //             setPlantPageNum(arr)
    // }

    // function displayDropDownList(props){
              
    //     let arr=[]
    //             for(let i=plantPageNum;i<=totalLength;i++){
    //               if(i%plantPageNum === 0){
    //            arr.push(i)
    //               }
    //             }
    //             setPlantPageNum(arr)
    
    // }


    const {plantData,plantPageNumber} = props.plantData
    const totalLength = plantData.length
    const plantPerPage = pageSize;
    const pagesVisited = plantPageNumber*5;
    const displayPlantList = plantData.slice(pagesVisited,pagesVisited+plantPerPage)
    const pageCount = Math.ceil(plantData.length/plantPerPage)
    console.log("plantData.length",plantData.length)
    console.log("pageCountpageCount", pageCount)
    const {plantCategoryData} =  props.categoryData

   const abcd = props.dPageNumberList
   console.log("abcd", abcd)

    return (

        <div>
            {/* <div>
            <div >
                   
                        <select className="form-control2"
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
            </div>
             <div className="pagination_area">
             <TablePagination pageChange={paginationChange} pageCount={pageCount} pageNumber={plantPageNumber+1}/>
            </div> */}
            
              <ActionModal cancel={cancel} confirm={confirm} open={open} message={message}/>


              <div className="row_1">

                    <div>
                    <label className="greenText">{"Showing " + (( plantPageNumber*5)+1 )+  "  to  " +  (pageSize) + "  of   "  +  totalLength }</label>
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
             
            {/* <label className="greenText">{"Showing " + (( plantPageNumber*5)+1 )+  "  to  " +  ((( plantPageNumber+1)*5)>plantCategoryData.length ?plantCategoryData.length:(( plantPageNumber+1)*5))  + "  of   "  +   plantCategoryData.length }</label> */}
            {/* <label className="greenText">{"Showing " + (( plantPageNumber*5)+1 )+  "  to  " +  pageSize + "  of   "  +   plantCategoryData.length }</label> */}
                            <div className="form-group row mt-3">
                                <div className="col-md-12">
                                    <table id="plantDetails" className="table table-striped w-100">
                                        <thead>
                                            <tr>
                                                <th className="text-nowrap">Status</th>
                                                <th className="text-nowrap">Plant ID</th>
                                                <th className="text-nowrap">Plant Name</th>
                                                <th className="text-nowrap">Category</th>
                                                <th className="text-nowrap">In Production</th>
                                                <th className="text-nowrap text-center">Discontinued</th>
                                                <th className="text-nowrap text-center">Archived</th>
                                                <th className="text-nowrap text-center">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                        {displayPlantList.map(({id,status, plantName, location, category, onWebsite, PrintCatalog, Discontinued, archived, patent,category_id,plant_id})=>{
                                             let id2 ="discontinue"
                                             let id3 ="Archived"
                                             return(     
                                            <tr>
                                                <td style={{color:status===1 ? "black" :"red"}}>{status === 1 ?"Active":"Inactive"}</td>
                                                <td>{plant_id}</td>
                                                <td>{patent}</td>
                                                <td>
                                                    {/* backgroundColor:product.archived == 0?"#ffffff":"#cccccc"{plantCategoryData.length>0?plantCategoryData.filter(cat=>cat.id===category_id)[0]["name"]:""} */}
                                                    {plantCategoryData.length>0?plantCategoryData.filter(cat=>cat.id===category_id)[0]?plantCategoryData.filter(cat=>cat.id===category_id)[0]["name"]:"":""}
                                                    </td>
                                                <td></td>
                                                <td className="text-center">
                                                    <div className="custom-control custom-checkbox mb-1">
                                                        <input type="checkbox" className="custom-control-input" id={id2.concat(plant_id)} />
                                                        <label className="custom-control-label" for={id2.concat(plant_id)}></label>
                                                    </div>
                                                </td>


                                                <td className="text-center">
                                                <div className="custom-control custom-checkbox mb-1">
                                                        <input type="checkbox" className="custom-control-input" id={id3.concat(plant_id)}/>
                                                        <label className="custom-control-label" for={id3.concat(plant_id)}></label>
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
     setPlantPageNumber,
     dPageNumberList,
    
    })(PlantTable)
