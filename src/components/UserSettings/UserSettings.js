/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { Component } from 'react'
import {connect} from "react-redux";
import * as MdIcons from "react-icons/md";
// import './style.css';
import {getAllSubAttribute,handleAttributeDragDrop,handleAttributeDragSort,handleAttributeDelete,handlePositionInputAction,handleAddPosition,handleSubAttributeUpdate, showSubSubAttribute} from '../../actions/attributeAction'

    class Categories extends Component {
        constructor(props){
            super()
                this.state={
                    errorObj:{
                        formSku:0
                    },
                    sortId: 0,
                    activeId: 0,
                    positionEdit:false,
                    todo:"123",
                    currentList:{value:"1"},
                    positionName:'',
                   // postData:this.props.showSpeciSubA
                }
            
        }
         onDragOver = (ev)=>{
            ev.preventDefault();
        }
        onDragStart=(ev, id)=>{
            console.log("dragstart:", id);
            ev.dataTransfer.setData("id",id)
            let activeId=this.state.activeId
            activeId=id;
            this.setState({activeId})
        }
        componentDidMount(){
            this.props.getAllSubAttribute(16)
            this.props.showSubSubAttribute()
        }
        onMouseLeave =((ev, id)=>{
            let sortId=this.state.sortId
            sortId=id;
            this.setState({sortId})
        })
        onDrop=(ev,cat)=>{
            let id= ev.dataTransfer.getData("id");
            let tasks = this.props.positionCategoryList.filter((task)=>{                
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
                let result= this.props.handleAttributeDragDrop(tasks[0])
                result.then(res=>{
                    this.props.getAllSubAttribute(16)
                })   
            }
            if (doProcess === false && cat === 'active' && tasks[0].status === 1 && this.state.sortId !== this.state.activeId) {
                let result= this.props.handleAttributeDragSort(this.state.activeId, this.state.sortId)
                result.then(res=>{
                    this.props.getAllSubAttribute(16)
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
           console.log(id)
           let result= this.props.handleAttributeDelete(id)
           result.then(res=>{
            this.props.getAllSubAttribute(16)
           })
        }


        updateSubAttList =(e,id)=>{
            this.setState({
                 ...this.state.currentList, text:e.target.value 
            });
            console.log("currentList", this.state.currentList)

            this.props.handleSubAttributeUpdate(id)
           // let id= e.dataTransfer.getData("id");
            console.log("aaa", e.target.id, id)

        }
        
        handlePositionInputAction = (e)=>{
            this.props.handlePositionInputAction(e.target.name,e.target.value)
        }

        handlePositionInputActionEdit = (e)=>{


            this.setState({
               // positionName: {...this.props.showSpeciSubA.value, value:e.target.value }
                // positionName:this.props.handlePositionInputAction(e.target.name,e.target.value), value:e.target.value
            })
            
            // const {target:{name,value,id}} =e;
            // this.setState({[name]:value})
            this.props.showSubSubAttribute(e.target.id)

          
           // this.props.handlePositionInputAction(e.target.name,e.target.value)
        }

        handleAddCategory = (e)=>{
       
            let positionObj={}
            positionObj.attribute_id=16
            positionObj.value = this.props.positionName
            positionObj.status=1
            console.log(positionObj)
            let result = this.props.handleAddPosition(positionObj)
            result.then(res=>{
                this.props.getAllSubAttribute(16)
            })
            alert('Added Successfully Done');
        }



        handleEditClick2 =(t)=> {
            // let positionObj={}
            // positionObj.status=1
            // positionObj.id=id
            this.props.showSubSubAttribute(t.id)




            // set editing to true
            //setIsEditing(true);
            // set the currentTodo to the todo item that was clicked
            //setCurrentTodo({ ...todo });
          }

          handleEditInputChange=(e)=>{
          


            this.props.handleSubAttributeUpdate()

          }


        render() {

          //  console.log("showSpeciSubA",this.state.postData)
        console.log(this.props.temp)
        var tasks={
            inactive:[],
            active:[],
        }

        if(this.props.positionCategoryList){

            this.props.positionCategoryList.forEach((t)=>{
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
                            <h4 className="p-15 mb-0">Positions</h4>
                            <hr className="m-0"/>
                            <div className="ContentSection p-15">
                                <div className="row">
                                    <div className="col-md-12 col-lg-12">
                                        <p>Position</p>

                                        <div className="row d-flex align-items-center">
                                        <div className="col-md-6 col-lg-9">  
                                                <input type="text" className="form-control" name="position" 
                                                 value={this.props.name} 
                                                // value={this.state.positionName}
                                                 placeholder="" onChange={this.handlePositionInputAction}/>
                                            </div>
                                            <div className="col-md-6 col-lg-3" onClick={this.handleAddCategory}>
                                                <a href="javascript:" className="d-flex align-items-center">
                                                    <i className="fa fa-plus-circle fa-2x mr-2"></i> Add New Position
                                                </a>
                                            </div>
                                        </div>


                                        <div className="row d-flex align-items-center">
                                        <div className="col-md-6 col-lg-9">  
                                                <input type="text" className="form-control" name="position" 
                                                 // value={this.props.name} 
                                                 value={this.props.showSpeciSubA.value}  
                                                 id={this.props.showSpeciSubA.id}  placeholder="" 
                                                onChange={this.handlePositionInputActionEdit}/>
                                            </div>
                                            <div className="col-md-6 col-lg-3" onChange={this.handleEditInputChange}>
                                                <a href="javascript:" className="d-flex align-items-center">
                                                    <i className="fa fa-plus-circle fa-2x mr-2"></i> Edit New Position
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
                                                    return <li id={t.id} name={t.id} onDragStart={(e)=>this.onDragStart(e, t.id)} onDelete={(e)=>this.onDelete(e, t.id)} draggable >
                                                                  <a className="d-flex justify-content-between align-items-center">
                                                                <span id="Wheathers">{t.value}</span>
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
                                                    return <li id={t.id} name={t.id} onDragStart={(e)=>this.onDragStart(e, t.id)} onMouseLeave={(e)=>this.onMouseLeave(e, t.id)} onDelete={(e)=>this.onDelete(e, t.id)} draggable >
                                                                 <a className="d-flex justify-content-between align-items-center">

                                                                <span id="Wheathers">{t.value}</span>
                                                                <button onClick={() =>this.handleEditClick2(t)}>Edit</button>
                                                                {/* <span style={{float:"right",fontSize:20, cursor:"pointer", color:"#629c44"}}><MdIcons.MdEdit  
                                                                 onClick={(e)=>this.updateSubAttList(e, t.id)} 
                                                                /></span> */}
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
        // console.log(state)
         {
        
   positionCategoryList:state.attributeData.subAttribute,
    temp:state,
    // name:state.categoryData.name
    positionName:state.attributeData.subAttributeName.position,
    showSpeciSubA: state.attributeData.specificSubAttribute
    }
    )
    export default connect(mapStateToProps,{
        getAllSubAttribute,
        handleAttributeDragDrop,
        handleAttributeDragSort,
        handleAttributeDelete,
        handleSubAttributeUpdate,
        handlePositionInputAction,
        handleAddPosition ,
        showSubSubAttribute     
    })(Categories)




