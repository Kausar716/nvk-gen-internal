/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { Component } from 'react'
import {connect} from "react-redux";
import * as MdIcons from "react-icons/md";
// import './style.css';
import {getAllSubAttribute,handleAttributeDragDrop,handleAttributeDragSort,handleAttributeDelete,
    handleZoneInputAction,handleAddZone, showSubSubAttribute, handleSubAttributeUpdate,handleZoneInputAction2} from '../../actions/attributeAction'

    class VolumeTiers extends Component {
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
            console.log("dragstart:", id);
            ev.dataTransfer.setData("id",id)
            let activeId=this.state.activeId
            activeId=id;
            this.setState({activeId})
        }
        componentDidMount(){
            this.props.getAllSubAttribute(11)
        }
        onMouseLeave =((ev, id)=>{
            let sortId=this.state.sortId
            sortId=id;
            this.setState({sortId})
        })
        onDrop=(ev,cat)=>{
            let id= ev.dataTransfer.getData("id");
            let tasks = this.props.zoneCategoryList.filter((task)=>{                
                   return JSON.stringify(task.id) === id;
            });
        //     console.log(tasks)
        //     let result= this.props.handleAttributeDragDrop(tasks[0])
        //     result.then(res=>{
        //     this.props.getAllSubAttribute(11)
        //    })
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
                    this.props.getAllSubAttribute(11)
                })   
            }
            if (doProcess === false && cat === 'active' && tasks[0].status === 1 && this.state.sortId !== this.state.activeId) {
                let result= this.props.handleAttributeDragSort(this.state.activeId, this.state.sortId)
                result.then(res=>{
                    this.props.getAllSubAttribute(11)
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
            this.props.getAllSubAttribute(11)
           })
        }
        handleZoneInputAction = (e)=>{
            this.setState({
                name:e.target.value
            })

            this.props.handleZoneInputAction("volume",e.target.value)
        }
        handleAddCategory = (e)=>{
       
            let zoneObj={}
            zoneObj.attribute_id=11
            zoneObj.value = this.props.volume
            zoneObj.status=1
            console.log(zoneObj)
            if(this.props.volume){
            let result = this.props.handleAddZone(zoneObj)
            result.then(res=>{
                this.props.getAllSubAttribute(11)
            })
            alert('Added Successfully Done');
        }
        
        }


        handleAddCategoryUpdate=(e)=>{
            // debugger;
             // this.props.handleSubAttributeUpdate(e.target.id)
             let valueName = this.state.name
             let updateID = parseInt(this.props.showSpeciSubA.id)
             let updateObject={}
             updateObject.value=valueName
 
             //console.log("positionName",this.props.positionName)
            // updateObject.id=this.props.showSpeciSubA.id
                
          let res=   this.props.handleSubAttributeUpdate(updateID, updateObject)
                 res.then(res=>{
                     this.props.getAllSubAttribute(11)
                 })
 
                 this.setState({
                     isEditing:false,
                     name:""
                 })
 
         }

        handleEditClick2 =(t)=> {
            console.log("abcdefg", t  )
            // debugger;  
         this.setState({
             name: t.value,
             isEditing:true
         })
         this.props.handleZoneInputAction("volume",this.state.name)
         this.props.showSubSubAttribute(t.id)
         console.log("ttttttt", t,  )
       }





        render() {
        console.log(this.props.temp)
        var tasks={
            inactive:[],
            active:[],
        }
        if(this.props.zoneCategoryList){
            this.props.zoneCategoryList.forEach((t)=>{
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
                            <h4 className="p-15 mb-0">Volume Tiers</h4>
                            <hr className="m-0"/>
                            <div className="ContentSection p-15">
                                <div className="row">
                                    <div className="col-md-12 col-lg-12">
                                        <p>Volume Tier</p>
                                        <div className="row d-flex align-items-center">
                                            <div className="col-md-6 col-lg-6">  
                                                <input type="text"
                                                 className={this.state.isEditing===false ? "form-control" : "formControl2 abcd" }
                                                 name="volume"
                                                  value={this.state.name}
                                                  placeholder="Tier" onChange={this.handleZoneInputAction}/>
                                            </div>


                                            {this.state.isEditing ? (
                                                <div className="col-md-6 col-lg-3" onClick={this.handleAddCategoryUpdate}>
                                                        <div >
                                                        <a href="javascript:" className="d-flex align-items-center">
                                                            <i className="fa fa-plus-circle fa-2x mr-2"></i> Update Volume Tier
                                                        </a>
                                                        </div>

                                                        <div className="col-md-6 col-lg-3"  onClick={()=>{this.setState({isEditing:false})}}>
                                                                <a href="javascript:" className="d-flex align-items-center cancel_signlebox"  style={{marginLeft:"13em"}}>
                                                                    Cancel 
                                                                </a>
                                                            </div>
                                                </div>

                                                        ):
                                                        (
                                                        <div className="col-md-6 col-lg-3" onClick={this.handleAddCategory}>
                                                        <a href="javascript:" className="d-flex align-items-center">
                                                        <i className="fa fa-plus-circle fa-2x mr-2"></i> Add New Volume Tier
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
                                                    return <li id={t.id} name={t.id} onDragStart={(e)=>this.onDragStart(e, t.id)} onMouseLeave={(e)=>this.onMouseLeave(e, t.id)} onDelete={(e)=>this.onDelete(e, t.id)} draggable >
                                                                 <a className="d-flex justify-content-between align-items-center">
                                                                <span id="Wheathers">{t.value}</span>
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
        // console.log(state)
         {
        
   zoneCategoryList:state.attributeData.subAttribute,
    temp:state,
    // name:state.categoryData.name
    volume:state.attributeData.subAttributeName.volume,
    showSpeciSubA: state.attributeData.specificSubAttribute,
    }
    )
    export default connect(mapStateToProps,{
        getAllSubAttribute,
        handleAttributeDragDrop,
        handleAttributeDragSort,
        handleAttributeDelete,
        handleZoneInputAction,
        showSubSubAttribute,
        handleAddZone,
        handleSubAttributeUpdate ,
        handleZoneInputAction2     
    })(VolumeTiers)

