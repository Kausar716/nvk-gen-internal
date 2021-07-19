/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { Component } from 'react'
import {connect} from "react-redux";
// import './style.css';
import {getAllProductManufacturers,handleProductManufacturerInputAction,handleAddProductManufacturer,handleDragDrop,handleProductManufacturerDelete} from '../../actions/productManufacturerAction'

class Manufacturer extends Component {

    onDragOver = (ev)=>{
        ev.preventDefault();
    }
    onDragStart=(ev, id)=>{
        ev.dataTransfer.setData("id",id)
    }
    componentDidMount(){
        this.props.getAllProductManufacturers()
    }
    onDrop=(ev,cat)=>{
        let id= ev.dataTransfer.getData("id");        
        let tasks = this.props.productManufacturerList.filter((task)=>{
            return JSON.stringify(task.id) === id;
        });
        let doProcess = false;
        if (cat === 'active' && tasks[0].status === 0) {
            doProcess = true;
        }
        if (cat === 'inactive' && tasks[0].status === 1) {
            doProcess = true;
        }
        if (doProcess === true) {
            let result= this.props.handleDragDrop(tasks[0])
            result.then(res=>{
                this.props.getAllProductManufacturers()
            })  
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
        this.props.handleProductManufacturerInputAction(e.target.value)
    }
    handleAddProductManufacturer = (e)=>{
        if(this.props.name){
        let result = this.props.handleAddProductManufacturer(this.props.name)
        result.then(res=>{
            this.props.getAllProductManufacturers()
        })
    }
        
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
                                        <input type="text" className="form-control" name="name" value={this.props.name}   placeholder="Name" onChange={this.handleProductManufacturerInputAction}/>
                                    </div>
                                    <div className="col-md-6 col-lg-3" onClick={this.handleAddProductManufacturer}>
                                        <a href="javascript:" className="d-flex align-items-center">
                                            <i className="fa fa-plus-circle fa-2x mr-2"></i> Add New Manufacturer
                                        </a>
                                    </div>
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
                                        <img style={{width:"5em"}} src="./assets/img/Genral_Icons/DragDragtoplace-move.svg" alt="Settings"/>
                                    </div>
                                    <div>
                                        <img style={{width:"5em"}} src="./assets/img/Genral_Icons/DragDragto_place.svg" alt="Settings"/>
                                    </div>
                                    <div className="deleteSpace" onDragOver={(e)=>{this.onDragOver(e)}} onDrop={(e)=>this.onDelete(e)}>
                                        <img style={{width:"5em"}} src="./assets/img/Genral_Icons/Drag _Drop_remove_red.svg" alt="Settings"/>
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
    name:state.productManufacturerData.name
    }
    )
    export default connect(mapStateToProps,{
        getAllProductManufacturers,
        handleProductManufacturerInputAction,
        handleAddProductManufacturer,
        handleDragDrop,
        handleProductManufacturerDelete        
    })(Manufacturer)

