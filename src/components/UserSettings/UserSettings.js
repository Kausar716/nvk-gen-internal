/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { Component } from 'react'
import {connect} from "react-redux";
import * as MdIcons from "react-icons/md";
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';
// import './style.css';
import {getAllSubAttribute,handleAttributeDragDrop,handleAttributeDragSort,handleAttributeDelete,handlePositionInputAction,handleAddPosition,handleSubAttributeUpdate, showSubSubAttribute} from '../../actions/attributeAction'

    class UserPosition extends Component {
        constructor(props){
            super()
                this.state={
                    errorObj:{
                        formSku:0,
                        position:0,

                    },
                    sortId: 0,
                    activeId: 0,
                    positionName:'',
                 
                    isEditing:false,
                    name:'',
                    subName:'',
                    subName2:'',
                    selectedID:'',
                    btnLabelAdd:'Add New Position ',
                    btnLabelUpdate: 'Update Position ',
                    btnLabelCancel:'Cancel'
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
                confirmAlert({
                    title: 'Action',
                    message: 'Successfully Moved from Inactive to Active',
                    buttons: [
                      {
                        label: 'Ok'
                      }
                    ]
                });
            }
            if (alertmsg === 2){
                confirmAlert({
                    title: 'Action',
                    message: 'Successfully Moved from Active to InActive',
                    buttons: [
                      {
                        label: 'Ok'
                      }
                    ]
                });
            }
            if (alertmsg === 3){
                confirmAlert({
                    title: 'Action',
                    message: 'Sort Successfully Done',
                    buttons: [
                      {
                        label: 'Ok'
                      }
                    ]
                });
            }
        }

        // onDelete =(ev)=>{
        //    let id= ev.dataTransfer.getData("id");
        //    console.log(id)
        //    let result= this.props.handleAttributeDelete(id)
        //    result.then(res=>{
        //     this.props.getAllSubAttribute(16)
        //    })
        // }


        onDelete =(ev)=>{
            let id= ev.dataTransfer.getData("id");
            confirmAlert({
                title: 'Delete Position ',
                message: 'Are you sure want to delete the Position?',
                buttons: [
                  {
                    label: 'Yes',
                    onClick: () => {this.onDeleteConfirm(id)}
                  },
                  {
                    label: 'No'
                  }
                ]
              });
        }

        
        onDeleteConfirm=(id)=>{
            let result= this.props.handleAttributeDelete(id)
            result.then(res=>{
                this.props.getAllSubAttribute(16)
                confirmAlert({
                    title: 'Delete Position',
                    message: 'Position  ',
                    buttons: [
                      {
                        label: 'Ok'
                      }
                    ]
                  });
            })
        }

        
        handlePositionInputAction = (e)=>{
            this.setState({
                name:e.target.value
            })
           // debugger;
           let errorObj=this.state.errorObj
           if(e.target.name === "position"){
            errorObj.position=0
            this.setState({errorObj})}
            this.props.handlePositionInputAction("position",e.target.value)

            console.log("12344", e.target.name,e.target.value)
        }

      

        handleAddCategory = (e)=>{
       
            let positionObj={}
            positionObj.attribute_id=16
            positionObj.value = this.props.positionName
            positionObj.status=1

            // console.log("positionObj",positionObj, this.props.positionName)
            // let result = this.props.handleAddPosition(positionObj)
            // result.then(res=>{
            //     this.props.getAllSubAttribute(16)
            // })
            // alert('Added Successfully Done');

            // this.setState({
            //     name:""
            // })


            if(this.validate()){
                let result = this.props.handleAddPosition(positionObj)
                result.then(res=>{
                    this.props.getAllSubAttribute(16)
                })
                confirmAlert({
                    title: 'Added Successfully',
                    message: 'Package ',
                    buttons: [
                      {
                        label: 'Ok'
                      }
                    ]
                });
                this.setState({
                    name: "",
                    subName:"",
                    subName2:"",
                    isEditing:false,
                    selectedID:'',
                })
            } 




        }


        validate = ()=>{
            let errorObj = this.state.errorObj
            if(this.state.name.length === 0){
                errorObj.position=1
                this.setState({errorObj})
                return false
            }
           
            return true
            
        }


        handleAddCategoryUpdate=(e)=>{
           // debugger;
            // this.props.handleSubAttributeUpdate(e.target.id)
            let valueName = this.state.name
            let updateID = parseInt(this.props.showSpeciSubA.id)
            let updateObject={}
            updateObject.value=valueName

            console.log("positionName",this.props.positionName)
           // updateObject.id=this.props.showSpeciSubA.id
               
        //  let res=this.props.handleSubAttributeUpdate(updateID, updateObject)
        //         res.then(res=>{
        //             this.props.getAllSubAttribute(16)
        //         })

        //         this.setState({
        //             name:"",
        //             isEditing:false,
                    
        //         })


                if(this.validate()){
                    let res=   this.props.handleSubAttributeUpdate(updateID, updateObject)
                        res.then(res=>{
                            this.props.getAllSubAttribute(16)
                        })
                        if (this.state.isEditing) {
                            confirmAlert({
                                title: 'Updated Successfully',
                                message: 'User Position ',
                                buttons: [
                                {
                                    label: 'Ok'
                                }
                                ]
                            });
                        }
                        this.setState({
                            isEditing:false,
                            name:"",
                            subName:"",
                            subName2:""
                        })
                }
            

        }



        handleEditClick2 =(t)=> {
               // debugger;  
            this.setState({
                name: t.value,
                isEditing:true
            })
            this.props.handlePositionInputAction("position",...this.state.name)
            this.props.showSubSubAttribute(t.id)
            console.log("ttttttt", t,  this.props.handlePositionInputAction())
          }


          handleClear=()=>{
            let errorObj = this.state.errorObj
            errorObj.position=0
            //errorObj.locationTypeShortCode=0
            this.setState({name: "", subName:"", isEditing:false, selectedID:'', errorObj})
        }
   


        render() {
            console.log("positionName",this.props.positionName)
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

        console.log("nameeee", this.props.showSpeciSubA.id, this.props.positionName)
        console.log("finalSubAttributeList", this.props.finalSubAttributeList)
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
                                        <div className="col-md-6 col-lg-6">  
                                                <input type="text"  className={this.state.isEditing===false ? "form-control" : "formControl2 abcd" } name="position" 
                                                value={this.state.name}
                                                 placeholder="" onChange={this.handlePositionInputAction}/>
                                                  {this.state.errorObj.position!==0?<span style={{fontSize:"small",color:"red"}}>Enter position</span>:""}
                                            </div>


                                            {/* {this.state.isEditing ? (
                                                    
                                                <div className="col-md-6 col-lg-3" onClick={this.handleAddCategoryUpdate}>
                                                <div>
                                                <a href="javascript:" className="d-flex align-items-center">
                                                    <i className="fa fa-plus-circle fa-2x mr-2"></i> Update Position
                                                </a>
                                                </div>  

                                                <div className="col-md-6 col-lg-3"  onClick={()=>{this.setState({isEditing:false})}}>
                                                <a href="javascript:" className="d-flex align-items-center cancel_signlebox" style={{marginLeft:"11em"}}>
                                                    Cancel 
                                                </a>
                                                </div>
                                        </div>
                                                       

                                            ):
                                            (
                                                <div className="col-md-6 col-lg-3" onClick={this.handleAddCategory}>
                                                <a href="javascript:" className="d-flex align-items-center">
                                                    <i className="fa fa-plus-circle fa-2x mr-2"></i> Add New Position
                                                </a>
                                                </div>  
                                                )}   */}

                                    <div className="d-flex justify-content-md-end mt-2" >
                                        <div >
                                            <a href="javascript:" className="d-flex align-items-center" onClick={this.state.isEditing ? this.handleAddCategoryUpdate : this.handleAddCategory}> 
                                                <i className="fa fa-plus-circle fa-2x mr-2"></i> {this.state.isEditing ? this.state.btnLabelUpdate : this.state.btnLabelAdd }
                                            </a>
                                        </div>
                                        <div className="d-flex justify-content-md-end mt-2"  onClick={this.handleClear}>
                                            <a href="javascript:" className="d-flex align-items-center" style={{marginLeft:"2.5em", marginTop:"-6px"}}>
                                                <i className="fa fa-times-circle fa-2x mr-2"></i> {this.state.btnLabelCancel} 
                                            </a>
                                        </div>
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
        
   positionCategoryList:state.attributeData.subAttribute,
    temp:state,
    // name:state.categoryData.name
    positionName:state.attributeData.subAttributeName.position,
    showSpeciSubA: state.attributeData.specificSubAttribute,
    finalSubAttributeList: state.attributeData.finalSubAttributeList
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
    })(UserPosition)




