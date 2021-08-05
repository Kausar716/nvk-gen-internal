/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { Component } from 'react';
import * as MdIcons from "react-icons/md";
import {connect} from "react-redux";
// import './style.css';
import {getAllProductManufacturers,handleProductManufacturerInputAction,handleAddProductManufacturer,
    handleDragDrop,handleManufacturerDragSort,handleProductManufacturerDelete, showSpecificProductSettingManufacture, updateProductSettingManufacture} from '../../actions/productManufacturerAction'

class Manufacturer extends Component {
    constructor(props){
        super()
            this.state={
                errorObj:{
                    formSku:0
                },
                sortId: 0,
                activeId: 0,
                isEditing:false,
                name:'',
            }
        
    }
    onDragOver = (ev)=>{
        ev.preventDefault();
    }
    onDragStart=(ev, id)=>{
        ev.dataTransfer.setData("id",id)
        let activeId=this.state.activeId
        activeId=id;
        this.setState({activeId})
    }
    componentDidMount(){
        this.props.getAllProductManufacturers()
    }
    onMouseLeave =((ev, id)=>{
        let sortId=this.state.sortId
        sortId=id;
        this.setState({sortId})
    })
    onDrop=(ev,cat)=>{
        let id= ev.dataTransfer.getData("id");        
        let tasks = this.props.productManufacturerList.filter((task)=>{
            return JSON.stringify(task.id) === id;
        });
        let doProcess = false;
        let alertmsg = 0;
        if (cat === 'active' && tasks[0].status === 0) {
            doProcess = true;
            alertmsg = 1;
        }
        if (cat === 'inactive' && tasks[0].status === 1) {
            doProcess = true;
            alertmsg = 2;
        }
        if (doProcess === true) {
            let result= this.props.handleDragDrop(tasks[0])
            result.then(res=>{
                this.props.getAllProductManufacturers()
            })  
        }
        if (doProcess === false && cat === 'active' && tasks[0].status === 1 && this.state.sortId !== this.state.activeId) {
            let result= this.props.handleManufacturerDragSort(this.state.activeId, this.state.sortId)
            result.then(res=>{
                this.props.getAllProductManufacturers()
            }) 
            alertmsg = 3;
        }
        if (alertmsg === 1){
            alert('Successfully Moved from Inactive to Active');
        }
        if (alertmsg === 2){
            alert('Successfully Moved from Active to Inactive');
        }
        if (alertmsg === 3){
            alert('Sort Successfully Done');
        }
    }
    onDelete =(ev)=>{
        let id= ev.dataTransfer.getData("id");
        let result= this.props.handleProductManufacturerDelete(id)
        result.then(res=>{
            this.props.getAllProductManufacturers()
        })
    }
    handleProductManufacturerInputAction = (e)=>{
        this.setState({
            name:e.target.value
        })
        this.props.handleProductManufacturerInputAction(e.target.value)
    }
    handleAddProductManufacturer = (e)=>{
        if(this.props.name){
        let result = this.props.handleAddProductManufacturer(this.props.name)
        result.then(res=>{
            this.props.getAllProductManufacturers()
        })
        alert('Added Successfully Done');
    }

    this.setState({
       
        name:"",
        
    })
        
}


handleAddCategoryUpdate=()=>{
    // debugger;
  // this.props.handleSubAttributeUpdate(e.target.id)
  
  let updateID = parseInt(this.props.showSpecificProductManufacture.id)
  let updateObject={}
  updateObject.name=this.state.name
 // updateObject.id=this.props.showSpeciSubA.id
     
      let res1=   this.props.updateProductSettingManufacture(updateID, updateObject)
      res1.then(res=>{
          this.props.getAllProductManufacturers()
      })

      this.setState({
          isEditing:false,
          name:""
      })
}




handleEditClick2 =(t)=> {

    console.log("ttt", t)
    // debugger;
     
 this.setState({
     name: t.name,
     isEditing:true,
     selectedID:t.id
 })
 this.props.handleProductManufacturerInputAction(...this.state.name)
 // this.props.handleCategoryInputAction("Category",...this.state.name)
  this.props.showSpecificProductSettingManufacture(t.id)
}





render() 
{
    var tasks={
        inactive:[],
        active:[],
    }
    if(this.props.productManufacturerList){
         this.props.productManufacturerList.forEach((t)=>{
             console.log(t)
            if(t.status === 1){
                tasks.active.push(t)
            }
            else if(t.status=== 0){
                tasks.inactive.push(t)
            }
         })
    }
        return (
            <div>
                <div className="bg-white">
                    <h4 className="p-15 mb-0">Manufacturers</h4>
                    <hr className="m-0"/>
                    <div className="ContentSection p-15">
                        <div className="row">
                            <div className="col-md-12 col-lg-12">
                                <p>Manufacturer Name</p>
                                <div className="row d-flex align-items-center">
                                    <div className="col-md-6 col-lg-6">  
                                        <input type="text" 
                                        className={this.state.isEditing===false ? "form-control" : "formControl2 abcd" }
                                        name="manufacture"
                                        value={this.state.name}
                                          placeholder="Name" onChange={this.handleProductManufacturerInputAction}/>
                                    </div>

                                    {/* <div className="col-md-6 col-lg-3" onClick={this.handleAddProductManufacturer}>
                                        <a href="javascript:" className="d-flex align-items-center">
                                            <i className="fa fa-plus-circle fa-2x mr-2"></i> Add New Manufacturer
                                        </a>
                                    </div> */}

                                    {this.state.isEditing ? (

                                                // <div className="col-md-6 col-lg-3" onClick={this.handleAddCategoryUpdate}>
                                                // <a href="javascript:" className="d-flex align-items-center">
                                                //     <i className="fa fa-plus-circle fa-2x mr-2"></i> Update Manufacturer
                                                // </a>
                                                // </div>


                                                <div className="col-md-6 col-lg-3" onClick={this.handleAddCategoryUpdate}>
                                                        <div>
                                                        <a href="javascript:" className="d-flex align-items-center">
                                                            <i className="fa fa-plus-circle fa-2x mr-2"></i> Update Manufacturer
                                                        </a>
                                                        </div>  

                                                        <div className="col-md-6 col-lg-3"  onClick={()=>{this.setState({isEditing:false})}}>
                                                        <a href="javascript:" className="d-flex align-items-center cancel_signlebox" style={{marginLeft:"13em"}}>
                                                            Cancel 
                                                        </a>
                                                        </div>
                                                </div>



                                                

                                                ):
                                                (
                                                <div className="col-md-6 col-lg-3" onClick={this.handleAddProductManufacturer}>
                                                <a href="javascript:" className="d-flex align-items-center">
                                                <i className="fa fa-plus-circle fa-2x mr-2"></i> Add New Manufacturer
                                                </a>
                                                </div>  
                                    )}   




                                </div>
                            </div>
                        </div>
                        <div class="row mt-5 mb-4">
                            <div class="col">
                                <div class="card midCard">
                                    <div class="card-header">
                                        Inactive
                                    </div>


                                    <div class="card-body cardBg"
                                    onDragOver={(e)=>this.onDragOver(e)}
                                    onDrop={(e)=>{this.onDrop(e,"inactive")}}>
                                        <ul class="list-unstyled">
                                            {tasks.inactive.map(t=>{
                                            return <li id={t.id} name={t.name} onDragStart={(e)=>this.onDragStart(e, t.id)} onDelete={(e)=>this.onDelete(e, t.id)} draggable >
                                                        <a className="d-flex justify-content-between align-items-center">
                                                            <span id="Wheathers">{t.name}</span>
                                                        </a>
                                                    </li>
                                            })}
                                        </ul>
                                        


                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1">
                                <div className="midControls d-flex flex-column justify-content-around">
                                    <div>
                                        <img style={{width:"5em"}} src="./assets/img/Genral_Icons/DragDragtoplace-move.png" alt="Settings"/>
                                    </div>
                                    <div>
                                        <img style={{width:"5em"}} src="./assets/img/Genral_Icons/DragDragto_place.png" alt="Settings"/>
                                    </div>
                                    <div className="deleteSpace" onDragOver={(e)=>{this.onDragOver(e)}} onDrop={(e)=>this.onDelete(e)}>
                                        <img style={{width:"5em"}} src="./assets/img/Genral_Icons/Drag _Drop_remove_red.png" alt="Settings"/>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card midCard">
                                    <div class="card-header">
                                        Active
                                    </div>
                                    <div class="card-body cardBg" onDragOver={(e)=>{this.onDragOver(e)}} onDrop={(e)=>this.onDrop(e,"active")}>
                                    <ul class="list-unstyled">
                                            {tasks.active.map(t=>{
                                            return <li id={t.id} name={t.name} onDragStart={(e)=>this.onDragStart(e, t.id)} onMouseLeave={(e)=>this.onMouseLeave(e, t.id)} onDelete={(e)=>this.onDelete(e, t.id)} draggable >
                                                        <a className="d-flex justify-content-between align-items-center">
                                                            <span id="Wheathers" className={this.state.isEditing===false  ? "" :this.state.selectedID === t.id ? "reasonBackground" : " "}>{t.name}</span>
                                                            <span style={{float:"right",fontSize:20, cursor:"pointer", color:"#629c44"}}><MdIcons.MdEdit  
                                                                onClick={() =>this.handleEditClick2(t)}
                                                                /></span>
                                                        </a>
                                                    </li>
                                            })}
                                    </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

     const mapStateToProps = (state)=> (
         {
    productManufacturerList:state.productManufacturerData.productManufacturerData,
    temp:state,
    name:state.productManufacturerData.name,
    showSpecificProductManufacture:state.productManufacturerData.showSpecificProductManufacture
    }
    )
    export default connect(mapStateToProps,{
        getAllProductManufacturers,
        handleProductManufacturerInputAction,
        handleAddProductManufacturer,
        handleDragDrop,
        handleManufacturerDragSort,
        handleProductManufacturerDelete,
        updateProductSettingManufacture,
        showSpecificProductSettingManufacture,      
    })(Manufacturer)

