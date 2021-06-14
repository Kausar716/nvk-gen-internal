/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React,  {  useEffect,useState } from 'react' ;
import {connect} from "react-redux";
//import {Button,Badge,Form,Input,FormGroup,CustomInput,Label,Pagination,PaginationItem,PaginationLink,Table, Row,Col} from 'reactstrap'
//import {getAllImageAssets} from "../Utility/Utility";
//import '../ProductManagement/index.css'

import PlantTable from './PlantTable'
//import GeneralSettings from './GeneralSettings'

import ActionModal from '../Modal/ActionModal';
//import SkuList from './SkuList'
import ModalData from '../Modal'
import {
    //plant actions
    createPlantAction ,
    updatePlantAction, 
    deletePlantAction ,
     getAllPlantAction,
     duplicatePlant,

    //page Redirects action
    plantPageReDirectAction,
    plantSubPageReDirectAction,
    serachPlant,
    radioSearch,
    searchCategoryApplyAction



    

}from "../../actions/plantManagerAction";
import {
    getAllPlantCategories

}from "../../actions/categoryAction";


const  PlantManager=(props)=> {

    //const [disable,setDisable] = useState(false)
    const [id,setId] = useState(0)
    const [selectedRadio,setRadio] =useState("all")
    const [open,setOpen] = useState(false)
    const [message,setMessage] = useState("")
    const [type, setType] = useState("")
    const [categoryId,setCategoryId] = useState(0)

// const productFormAction = ()=>{
//         this.props.getProductPage("general")
//         this.setState({plantPageToOpen:"general"})
        
//     }
//     const pageRenderAction = (pageType) =>{
//         props.getProductPage(pageType)
//     }
    useEffect(()=>{
        props.getAllPlantAction()
        props.getAllPlantCategories()
    },[])
    // const addPlant =()=>{
    //     console.log("working")
    //     props.createPlantAction()
    // }
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
    //         setMessage("Are you sure you want to delete this plant and its related SKUs?")

    //     }else{
    //         setType(type)
    //         setMessage("Are you sure you want to duplicate this plant and all its related SKU and plant information?")

    //     }
    //     setOpen(true)
    //     setId(id)
    // }
        const getValue = (e)=>{
            console.log(e.target.value)
            props.serachPlant(e.target.value)

        }
        const radioSearchAction =(e)=>{
            console.log(e.target.id)
            props.radioSearch(e.target.id)
            setRadio(e.target.id)

        }
        const searchBasedOnCategory = (e) =>{
            // console.log(e.target.value)
            setCategoryId(e.target.value)

        }
        // const searchCategoryApply = () =>{
        //     if(categoryId === 0)
        //     return
        //     // console.log(categoryId)
        //     props.searchCategoryApplyAction(categoryId)

        // }
        const resetData = () =>{
            props.getAllPlantAction()
            setRadio("all")
            setCategoryId(0)
            

        }
    


    const {plantData} = props.plantData
    const {plantCategoryData} =  props.categoryData
    console.log(plantData)


    return (
        <div>
            <ModalData/>
             
             <ActionModal cancel={cancel} confirm={confirm} open={open} message={message}/>
            <div class="contentHeader bg-white d-flex justify-content-between align-items-center">
				<h1 class="page-header mb-0">Plant Manager</h1>
				<div class="">
					<a href="javascript:;">
						<img src="assets/img/add.svg" alt=""/>
					</a>
					<a href="javascript:;" class="ml-2">
						<img src="assets/img/preview.svg" alt=""/>
					</a>
					<a href="javascript:;" class="ml-2">
						<img src="assets/img/print.svg" alt=""/>
					</a>
				</div>
			</div>
			<div class="contentWrapper">
				<div class="row">
					<div class="col-xl-12 col-md-12">
						<div class="bg-white p-15">
                            <div class="form-group row">
                                <div class="col-md-5 col-lg-5">
                                    <label for="plantSearch">Plant Search</label>
                                    <div class="searchInput">
                                        <button type="submit" class="btn btn-search">
                                            <img src="assets/img/search.svg" alt=""/>
                                        </button>
                                        {/* <input type="text" class="form-control" placeholder="Search"/> */}
                                        <input class="form-control" 
                                                type="text" 
                                                autocomplete={"off"}
                                                placeholder="Search" onChange={getValue} id="search"/>
                                    </div>
                                </div>
                                <div class="col-md-5 col-lg-5 mt-2 mt-md-0">
                                    <label for="Category">Category</label>
                                    {/* <select class="form-control">
                                        <option>None</option>
                                    </select> */}

                                    <select class="form-control"  id="sub_category" onChange={searchBasedOnCategory}>
                                        <option value={0}>None</option>
                                    {plantCategoryData.map(plantCategory=>{
                                        return(
                                            <option value={plantCategory.id}  selected={categoryId ===plantCategory.id?"selected":""} >{plantCategory.name} </option>
                                        )
                                    })
                                        
                                    }
                                    </select>


                                </div>
                                <div class="col-md-2 col-lg-2">
                                    <a href="javascript:;" onClick={resetData} class="d-block topSpace">Reset</a>
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-md-12">
                                    <div class="form-check form-check-inline">
                                    <input class="form-check-input"  type="radio" checked={selectedRadio ==="active"?"checked":""} name="radio1" onClick={radioSearchAction} id="active"/>
                                        {/* <input class="form-check-input" type="radio" name="radio_default_inline" id="activePlants" value=""/> */}
                                        <label class="form-check-label" for="activePlants">Active Plants</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="radio1" checked={selectedRadio ==="archive"?"checked":""} onClick={radioSearchAction} id="archive"/>
                                        {/* <input class="form-check-input" type="radio" name="radio_default_inline" id="archivedPlants" value=""/> */}
                                        <label class="form-check-label" for="archivedPlants">Archived Plants</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                    <input type="radio" name="radio1"checked={selectedRadio ==="all"?"checked":""}  onClick={radioSearchAction} id="all"/>
                                        {/* <input class="form-check-input" type="radio" name="radio_default_inline" id="allPlants" value=""/> */}
                                        <label class="form-check-label" for="allPlants">All Plants</label>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            
                            <PlantTable/>

						</div>
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
export default connect(mapStateToProps,{
        //plant actions
        createPlantAction ,
        updatePlantAction, 
        deletePlantAction ,
         getAllPlantAction,
         duplicatePlant,

         //plant page redirect
         plantPageReDirectAction,
         plantSubPageReDirectAction,

         //plant category
         getAllPlantCategories,

         radioSearch,
            serachPlant,
            searchCategoryApplyAction
})(PlantManager)
