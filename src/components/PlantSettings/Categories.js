
import React, { Component } from 'react'
import './style.css';

export default class Categories extends Component {
    state ={
        tasks:[
            {name:"Christmas tree", category:"inactive", bgcolor:"#cfcbcbf7"},
            {name:"Areac Palm", category:"inactive", bgcolor:"#cfcbcbf7"},
            {name:"Peace lily", category:"active", bgcolor:"#cfcbcbf7"},
        ]
    }


        onDragOver = (ev)=>{
            ev.preventDefault();
        }

        onDragStart=(ev, id)=>{
            console.log("dragstart:", id);
            ev.dataTransfer.setData("id",id)
        }





        onDrop=(ev,cat)=>{
            let id= ev.dataTransfer.getData("id");
            let tasks = this.state.tasks.filter((task)=>{
                if(task.name===id){
                    task.category = cat;
                }
                return task;
            });

            this.setState({
                ...this.state,
                tasks
            })

        }


        onDelete =(eve)=>{
            console.log("eveDELETE",eve )

        }




render() {
    var tasks={
        inactive:[],
        active:[],
    }

    this.state.tasks.forEach((t)=>{
            tasks[t.category].push(
                <div key={t.name} onDragStart={(e)=>this.onDragStart(e, t.name)} onDelete={(e)=>this.onDelete(e, t.name)} draggable className="draggable" style={{backgroundColor:t.bgcolor}}>
                        {t.name}
                </div>
            )
    });
    
        return (
           
                   <div>
               <div className="bg-white">
                            <h4 className="p-15 mb-0">Categories</h4>
                            <hr className="m-0"/>
                            <div className="ContentSection p-15">
                                <div className="row">
                                    <div className="col-md-12 col-lg-12">
                                        <p>Category Name</p>
                                        <div className="row d-flex align-items-center">
                                            <div className="col-md-6 col-lg-9">  
                                                <input type="text" className="form-control"   placeholder=""/>
                                            </div>
                                            <div className="col-md-6 col-lg-3">
                                                <a href="javascript;" className="d-flex align-items-center">
                                                    <i className="fa fa-plus-circle fa-2x mr-2"></i> Add New Category
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-5 mb-4">
                                    <div class="col">
                                        <div class="card zoneCard">
                                            <div class="card-header">
                                                Inactive
                                            </div>


                                            <div class="card-body cardBg"
                                            onDragOver={(e)=>this.onDragOver(e)}
                                            onDrop={(e)=>{this.onDrop(e,"inactive")}}>
                                               <ul class="list-unstyled">
                                                   <li  id="Christmas Trees" name="Christmas Trees"  >
                                                   {tasks.inactive}
                                                   </li>
                                               </ul>
                                               


                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-1">
                                        <div className="midControls d-flex flex-column justify-content-around">
                                            <div>
                                                <a href="javascript;">
                                                    <img style={{width:"3em"}} src="./assets/img/Genral_Icons/DragDragtoplace-move.svg" alt="Settings"/>
                                                </a>
                                            </div>
                                            <div>
                                                <a href="javascript;">
                                                    <img style={{width:"3em"}} src="./assets/img/Genral_Icons/DragDragto_place.svg" alt="Settings"/>
                                                </a>
                                            </div>
                                            <div className="deleteSpace" onDragOver={(e)=>{this.onDragOver(e)}} onDelete={(e)=>this.onDelete(e)}>
                                                <img style={{width:"3em"}} src="./assets/img/Genral_Icons/Drag _Drop_remove_red.svg" alt="Settings"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="card zoneCard">
                                            <div class="card-header">
                                                Active
                                            </div>
                                            <div class="card-body cardBg" onDragOver={(e)=>{this.onDragOver(e)}} onDrop={(e)=>this.onDrop(e,"active")}>
                                            <ul class="list-unstyled">
                                                   <li class="active">
                                                    {tasks.active}
                                                   </li>
                                                   
                                               </ul>
                                                 {/* {tasks.active} */}
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

     
