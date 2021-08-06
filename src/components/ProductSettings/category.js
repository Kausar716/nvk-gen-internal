import React, {useState} from 'react' ;
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';









const Category=(props)=> {


    // isEditing:false,
    // name:'',
    // subName:'',
    // subName2:'',
    // selectedID:'',
    // btnLabelAdd:'Add New Characterstics',
    // btnLabelUpdate: 'Update Characterstics',
    // btnLabelCancel:'Cancel',

    // btnLabelAdd2:'Add New Feature',
    // btnLabelUpdate2: 'Update Feature',

    const [isEditing,setsEditing] = useState(false)
    const [name,setName] = useState("")
    const [subName,setSubName] = useState("")
    const [selectedID,setselectedID] = useState("")
    const [btnLabelAdd,setbtnLabelAdd] = useState("Add New Category")
    const [btnLabelUpdate,setbtnLabelUpdate] = useState("Update Category")

    const [btnLabelAdd2,setbtnLabelAdd2] = useState("Add New Sub Category")
    const [btnLabelUpdate2,setbtnLabelUpdate2] = useState("Update Sub Category")


    const [btnLabelCancel,setbtnLabelCancel] = useState("Cancel")
    




    const [category,setCategory] = useState("")
    const [subCategory,setSubCategory] = useState("")

    const handleCategory = (e) => {
        setCategory(e.target.value)
    }
    const handleSubCategory = (e) => {
        setSubCategory(e.target.value)
    }

    const handleAddCategory = (e) => {
        e.preventDefault()
        console.log(category)
      
    }
    const handleAddSubCategory = (e) => {
        e.preventDefault()
        console.log(subCategory)
      
    }


    return(
        <>       
         <div class="bg-white">
                            <h4 class="p-15 mb-0">Categories</h4>
                            <hr class="m-0"/>
                            <div class="ContentSection p-15">
                                <div class="row">
                                    <div class="col-md-6">
                                        <p>Main Category Name</p>
                                        <div>
                                            <input type="text" class="form-control" placeholder="Name"  onChange={handleCategory}/>
                                        </div>
                                        {/* <div class="d-flex justify-content-md-end mt-2" onClick={handleAddCategory}>
                                            <a href="javascript;" class="d-flex align-items-center">
                                                <i class="fa fa-plus-circle fa-2x mr-2"></i> Add New Category
                                            </a>
                                        </div> */}



                                        <div className="d-flex justify-content-md-end mt-2" >
                                            <div >
                                                <a href="javascript:" className="d-flex align-items-center" > 
                                                    <i className="fa fa-plus-circle fa-2x mr-2"></i> {isEditing ? btnLabelUpdate : btnLabelAdd }
                                                </a>
                                            </div>
                                            <div className="d-flex justify-content-md-end mt-2"  >
                                                <a href="javascript:" className="d-flex align-items-center" style={{marginLeft:"2.5em", marginTop:"-6px"}}>
                                                    <i className="fa fa-times-circle fa-2x mr-2"></i> {btnLabelCancel} 
                                                </a>
                                            </div>
                                        </div> 


                                    </div>
                                    <div class="col-md-6">
                                        <p>Sub-category Name</p>
                                        <div>
                                            <input type="text" class="form-control" placeholder="Name" onChange={handleSubCategory}/>
                                        </div>
                                        {/* <div class="d-flex justify-content-md-end mt-2" onClick={handleAddSubCategory} >
                                            <a href="javascript;" class="d-flex align-items-center">
                                                <i class="fa fa-plus-circle fa-2x mr-2"></i> Add New Sub-category
                                            </a>
                                        </div> */}

                                    <div className="d-flex justify-content-md-end mt-2" >
                                            <div >
                                                <a href="javascript:" className="d-flex align-items-center" > 
                                                    <i className="fa fa-plus-circle fa-2x mr-2"></i> {isEditing ? btnLabelUpdate2 : btnLabelAdd2 }
                                                </a>
                                            </div>
                                            <div className="d-flex justify-content-md-end mt-2"  >
                                                <a href="javascript:" className="d-flex align-items-center" style={{marginLeft:"2.5em", marginTop:"-6px"}}>
                                                    <i className="fa fa-times-circle fa-2x mr-2"></i> {btnLabelCancel} 
                                                </a>
                                            </div>
                                        </div> 

                                    </div>
                                </div>
                                <div class="row mt-5">
                                    <div class="col">
                                        <div class="card midCard">
                                            <div class="card-header">
                                                Inactive
                                            </div>
                                            <div class="card-body cardBg">
                                               <ul class="list-unstyled">
                                                   <li>
                                                        <a href="javascript;" class="d-flex justify-content-between align-items-center">
                                                            <span>Attracts Birds 01</span>
                                                            <i class="fa fa-th"></i>
                                                        </a>
                                                   </li>
                                                   <li>
                                                        <a href="javascript;" class="d-flex justify-content-between align-items-center">
                                                            <span>Attracts Birds 02</span>
                                                            <i class="fa fa-th"></i>
                                                        </a>
                                                   </li>
                                                   <li>
                                                        <a href="javascript;" class="d-flex justify-content-between align-items-center">
                                                            <span>Attracts Birds 03</span>
                                                            <i class="fa fa-th"></i>
                                                        </a>
                                                   </li>
                                               </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-1">
                                        <div className="midControls d-flex flex-column justify-content-around">
                                            <div>
                                                <a href="javascript;">
                                                    {/* <i className="fas fa-angle-double-right"></i> */}
                                                    <img style={{width:"5em",marginLeft:"-10px"}} src="./assets/img/Genral_Icons/DragDragtoplace-move.svg" alt="Settings"/>
                                                </a>
                                            </div>
                                            <div>
                                                <a href="javascript;">
                                                    {/* <i className="fas fa-arrows-alt"></i> */}
                                                    <img style={{width:"5em", marginLeft:"-10px"}} src="./assets/img/Genral_Icons/DragDragto_place.svg" alt="Settings"/>
                                                </a>
                                            </div>
                                            <div>
                                                <a href="javascript;" className="icDelete">
                                                <img style={{width:"5em", marginLeft:"-10px"}} src="./assets/img/Genral_Icons/Drag _Drop_remove_red.svg" alt="Settings"/>
                                                    {/* <i className="fas fa-trash"></i> */}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="card midCard">
                                            <div class="card-header">
                                                Active
                                            </div>
                                            <div class="card-body cardBg">
                                               <ul class="list-unstyled">
                                                   <li class="hasChild">
                                                        <a href="javascript;" class="d-flex justify-content-between align-items-center">
                                                            <span>Attracts Birds 01</span>
                                                            <i class="fa fa-th"></i>
                                                        </a>
                                                        <ul class="list-unstyled childUl">
                                                            <li>
                                                                <a href="javascript;" class="d-flex justify-content-between align-items-center">
                                                                    <span>Attracts Birds 01</span>
                                                                    <i class="fa fa-th"></i>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="javascript;" class="d-flex justify-content-between align-items-center">
                                                                    <span>Attracts Birds 01</span>
                                                                    <i class="fa fa-th"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                   </li>
                                                   <li>
                                                        <a href="javascript;" class="d-flex justify-content-between align-items-center">
                                                            <span>Attracts Birds 02</span>
                                                            <i class="fa fa-th"></i>
                                                        </a>
                                                   </li>
                                                   <li>
                                                        <a href="javascript;" class="d-flex justify-content-between align-items-center">
                                                            <span>Attracts Birds 03</span>
                                                            <i class="fa fa-th"></i>
                                                        </a>
                                                   </li>
                                               </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
    </>
    )




}
export default Category