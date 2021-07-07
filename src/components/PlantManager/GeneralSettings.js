
import React,  { Component,useEffect,useState,Link } from 'react';
import {connect} from "react-redux";

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


    //input handle
    handlePlantInputAction



    

}from "../../actions/plantManagerAction";
import {
    getAllPlantCategories

}from "../../actions/categoryAction";



 const GeneralSettings = (props) =>{
    const [submitCount, setSubmitCount] = useState(0)
    const [count, setCount] = useState(0)
    const [toggleForTagInput,setToggle] = useState(true)
    const [errorObj,setErrorObj] = useState({ genus:0,species:0  })
    const [errorCount,setErrorCount] = useState(0)
 
    const handleInput =(e)=>{
        setSubmitCount(0)
        let errorcount =errorCount
        let errorobj =errorObj
        if(e.target.id  === "genus" ){
            errorobj.genus=0
            errorcount--
        }
        if(e.target.id  === "species" ){
            errorobj.species=0
            errorcount--
        }
        setErrorObj(errorobj)
       setErrorCount(errorcount)
        if(e.target.id ==="archived") props.handlePlantInputAction(e.target.id,e.target.value ===1?0:1)
        else if(e.target.id ==="discontinued") props.handlePlantInputAction(e.target.id,e.target.value ===1?0:1)
        else props.handlePlantInputAction(e.target.id,e.target.value)

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
         elem = document.getElementById(count);
         elem.parentNode.removeChild(elem);
         setCount(count+1)
            setToggle(true)
        }
     }
    //  const handleValidation =()=>{
    //      let returnValue=true
    //      let errorcount =errorCount
    //      let errorobj =errorObj
    //    if(plantDataById.genus.length === 0){
    //     returnValue= false
    //     errorobj.genus=1
    //     errorcount++
    //    }
    //    if(plantDataById.species.length === 0){
    //     returnValue= false
    //     errorobj.species=1
    //     errorcount++
    //    }
    //    setErrorObj(errorobj)
    //    setErrorCount(errorcount)

    //  }


     const submitAction = (e) =>{
         
         //let validate = handleValidation()  
        //  if(validate)
        if(submitCount === 0){
           if(needAction){
               if(actionType ==="add")
               props.createPlantAction(plantDataById,tagsData)
  
               if(actionType ==="edit")
               props.updatePlantAction(plantDataById,plantDataById.plant_id,tagsData)
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

    let currentYear =  new Date().getFullYear()
    let countOfYear = 20;
    var indents = [];
    for (var i = 0; i < countOfYear; i++) {
        indents.push(currentYear+i);
    }
    const {plantData,plantDataById,tagsData,actionType,needAction} = props.plantData
    const {plantCategoryData} =  props.categoryData
        console.log(plantDataById)

    return (
        <div>
            <div class="bg-white px-3 py-3 mt-3" >
                            <form>
                                <div class="row">
                                    <div class="col-md-12 d-md-flex flex-wrap align-items-center">
                                        {/* <div class=" d-flex align-items-center mr-4 my-md-2 mt-3 mt-md-0">
                                            <div class="switcher ml-2 pr-2">
                                                <input type="checkbox" id="discontinued" onChange={handleInput} value={plantDataById.discontinued} checked={plantDataById.discontinued===0?false:true}/>
                                                <label for="switcher_checkbox_2"></label>
                                            </div>
                                            Website
                                        </div> */}
                                        <div class=" d-flex align-items-center mr-4 my-md-2 mt-3 mt-md-0">
                                            <div class="switcher ml-2 pr-2">
                                                <input type="checkbox" id="discontinued" onChange={handleInput} value={plantDataById.discontinued} checked={plantDataById.discontinued===0?false:true}/>
                                                <label for="switcher_checkbox_2"></label>
                                            </div>
                                            In Production
                                        </div>
                                        <div class=" d-flex align-items-center mr-4 my-md-2 mt-3 mt-md-0">
                                            <div class="switcher ml-2 pr-2">
                                                <input type="checkbox"id="discontinued" onChange={handleInput} value={plantDataById.discontinued} checked={plantDataById.discontinued===0?false:true}/>
                                                <label for="switcher_checkbox_2"></label>
                                            </div>
                                            Discountiued
                                        </div>
                                        <div class=" d-flex align-items-center mr-4 my-md-2 mt-3 mt-md-0">
                                            <div class="switcher ml-2 pr-2">
                                                <input type="checkbox" id="archived"  onChange={handleInput} value={plantDataById.archived} checked={plantDataById.archived===0?false:true}/>
                                                <label for="switcher_checkbox_2"></label>
                                            </div>
                                            Archive
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-md-6 col-lg-3">
                                        <label>Genus <span class="text-danger">*</span></label>
                                        <input type="text" class="form-control" placeholder="" id="genus" value={plantDataById.genus} onChange={handleInput}/>
                                        {errorObj.genus!==0?<span style={{fontSize:"small",color:"red"}}>Required</span>:""}
                                        
                                    </div>
                                    <div class="col-md-6 col-lg-3 mt-2 mt-md-0">
                                        <label>Species <span class="text-danger">*</span></label>
                                        <input type="text" class="form-control" placeholder="" id="species" value={plantDataById.species} onChange={handleInput}/>
                                        {errorObj.species!==0?<span style={{fontSize:"small",color:"red"}}>Required</span>:""}
                                    </div>
                                    <div class="col-md-6 col-lg-3 mt-2 mt-md-0">
                                        <label>Cultivar</label>
                                        <input type="text" class="form-control" placeholder="" id="cultivar1" value={plantDataById.cultivar1} onChange={handleInput}/>
                                    </div>
                                    <div class="col-md-6 col-lg-3 mt-2 mt-md-0">
                                        <label>Cultivar 2</label>
                                        <input type="text" class="form-control" placeholder="" id="cultivar2" value={plantDataById.cultivar2} onChange={handleInput}/>
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-md-6 col-lg-3">
                                        <label>Alternate Genus</label>
                                        <input type="text" class="form-control" placeholder="" id="alternate_genus" value={plantDataById.alternate_genus} onChange={handleInput}/>
                                    </div>
                                    <div class="col-md-6 col-lg-3 mt-2 mt-md-0">
                                        <label>Series</label>
                                        <input type="text" class="form-control" placeholder=""  id="series" value={plantDataById.series} onChange={handleInput}/>
                                    </div>
                                    <div class="col-md-6 col-lg-6 mt-2 mt-md-0">
                                        <label>Common Name(s)</label>
                                        {/* <input type="text" class="form-control" placeholder=""/> */}
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
                                        <select class="form-control"  onChange={handleInput}>
                                        {plantCategoryData.map(plantCategory=>{
                                                    return(
                                                        <option value={plantCategory.id}>{plantCategory.name} </option>
                                                    )
                                                })                                       
                                        }
                                        </select>

                                    </div>
                                    {/* <div class="col-md-6 col-lg-3 mt-2 mt-md-0">
                                        <label>Bloom Color:</label>
                                        <select class="form-control"><option>Select</option><option>Option 1</option><option>Option 2</option></select>
                                    </div>
                                    <div class="col-md-6 col-lg-3 mt-2 mt-md-0">
                                        <label>Follage Color:</label>
                                        <select class="form-control"><option>Select</option><option>Option 1</option><option>Option 2</option></select>
                                    </div> */}
                                </div>
                                <div class="row mt-3">
                                    {/* <div class="col-md-6 col-lg-3">
                                        <label>Height:</label>
                                        <div class="d-flex">
                                            <input type="text" class="form-control" placeholder="MIN"/>
                                            <span class="midDash">-</span>
                                            <input type="text" class="form-control" placeholder="MAX"/>
                                            <span class="midDash">-</span>
                                            <select class="form-control">
                                                <option>CM</option>
                                                <option>Option 1</option>
                                                <option>Option 2</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-lg-3 mt-2 mt-md-0">
                                        <label>Spread:</label>
                                        <div class="d-flex">
                                            <input type="text" class="form-control" placeholder="MIN"/>
                                            <span class="midDash">-</span>
                                            <input type="text" class="form-control" placeholder="MAX"/>
                                            <span class="midDash">-</span>
                                            <select class="form-control">
                                                <option>CM</option>
                                                <option>Option 1</option>
                                                <option>Option 2</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-lg-3 mt-2 mt-md-0">
                                        <label>Spacing:</label>
                                        <div class="d-flex">
                                            <input type="text" class="form-control" placeholder="MIN"/>
                                            <span class="midDash">-</span>
                                            <input type="text" class="form-control" placeholder="MAX"/>
                                            <span class="midDash">-</span>
                                            <select class="form-control">
                                                <option>CM</option>
                                                <option>Option 1</option>
                                                <option>Option 2</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-lg-3 mt-2 mt-md-0">
                                        <label>Temperature:</label>
                                        <div class="d-flex">
                                            <input type="text" class="form-control" placeholder="MIN"/>
                                            <span class="midDash">-</span>
                                            <input type="text" class="form-control" placeholder="MAX"/>
                                            <span class="midDash">-</span>
                                            <select class="form-control">
                                                <option>&#8457;</option>
                                                <option>Option 1</option>
                                                <option>Option 2</option>
                                            </select>
                                        </div>
                                    </div> */}
                                </div>
                                <div class="row mt-3">
                                    <div class="col-md-6 col-lg-3">
                                        <label>Patent</label>
                                        <input type="text" class="form-control" placeholder="" id="patent" value={plantDataById.patent} onChange={handleInput}/>
                                    </div>
                                    <div class="col-md-6 col-lg-3 mt-2 mt-md-0">
                                        <label>Royalty</label>
                                        <input type="text" class="form-control" placeholder="" id="royality" value={plantDataById.royality} onChange={handleInput}/>
                                    </div>
                                    <div class="col-md-6 col-lg-3 mt-2 mt-md-0">
                                        <label>Hardiness</label>
                                        {/* <select class="form-control">
                                            <option>Select</option>
                                            <option>Option 1</option>
                                            <option>Option 2</option>
                                        </select> */}
                                        <input type="text" class="form-control" placeholder="" id="hardiness_zone" value={plantDataById.hardiness_zone} onChange={handleInput}/>
                                        
                                    </div>
                                    <div class="col-md-6 col-lg-3 mt-2 mt-md-0">
                                        <label>Introduction Year</label>
                                        <select class="form-control" id="introduction_year" onChange={handleInput}>
                                        {
                                        indents.map(year=>{
                                            return(<option value={year} selected={plantDataById.introduction_year===year?"selected":""}>{year}</option>)
                                        })

                                    }
                                        </select>
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-md-12">
                                        <label>Internal Notes <small>(Not shown to customer)</small> </label>
                                        <textarea class="form-control" rows="4" value={plantDataById.notes} id="notes" onChange={handleInput}></textarea>
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-md-12 text-md-right">
                                        <a href='/plantManager'>
                                        <button type="button" class="btn btn-outline-secondary btn-lg">Cancel</button>
                                        </a>
                                         
                                        
                                        <button type="button" class="btn btn-primary btn-lg ml-3" disabled={submitCount===0?needAction===true?false:true:true} onClick={submitAction} >{actionType==="add"?"Add Plant":"Update Plant"}</button>
                                    </div>
                                </div>
                            </form>
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
    
        //page Redirects action
        plantPageReDirectAction,
        plantSubPageReDirectAction,

        //hande input
        handlePlantInputAction,
        getAllPlantCategories





})(GeneralSettings)



