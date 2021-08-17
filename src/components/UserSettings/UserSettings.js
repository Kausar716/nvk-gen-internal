/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { Component } from 'react'
import {connect} from "react-redux";
import * as MdIcons from "react-icons/md";
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';
import Sortable from 'sortablejs'
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
                    btnLabelCancel:'Cancel',
                    deleteon:false,
                    active:[],inactive:[]
                }
            
        }

        // componentDidMount(){
        //     this.props.getAllSubAttribute(16)
        //     this.props.showSubSubAttribute()
        // }
        getCatgoryData = ()=>{
            let data = {};
            let active= this.props.positionCategoryList.filter(data=>data.status ==1)
           let inactive=this.props.positionCategoryList.filter(data=>data.status ==0)
            this.setState({active:active,inactive:inactive})
        }
        onDragOver = (ev)=>{
            ev.preventDefault();
        }
        startIDData  =(e)=>{
            this.setState({selectedID:e.item.id})
        }
        onAddData = (evt)=>{
            console.log(evt)
            evt.preventDefault()
        
        //     const referenceNode = (evt.nextSibling && evt.nextSibling.parentNode !== null) ? evt.nextSibling : null; 
        //  evt.from.insertBefore(evt.item, null); 
        
        }
        onMoveData = (evt,ui)=>{
        
           if(evt.from.id == evt.to.id){
               if(evt.willInsertAfter ==true)
            this.props.handleAttributeDragSort(evt.dragged.id,evt.related.id,"down")
            else  this.props.handleAttributeDragSort(evt.dragged.id,evt.related.id,"up")
        
           }else{
               if(evt.from.id =="categoryActive"){
                  let task= this.state.active.filter(data=>data.id ==evt.dragged.id)
                  //console.log(task)
                  if(task.length > 0){
                    this.props.handleAttributeDragDrop(task[0]).then(data=>{
                    //     this.props.getAllPlantCategories().then(()=>{
                    //     confirmAlert({
                    //     title: 'Action',
                    //     message: 'Successfully Moved from Active to InActive',
                    //     buttons: [
                    //         {
                    //         label: 'Ok'
                    //         }
                    //     ]
                    // });
                    // this.getCatgoryData()
              
                    // })
                })
        
                }
        
               }else if(evt.from.id =="categoryInactive"){
                   //console.log(evt.dragged.id,evt.related.id)
                let task= this.state.inactive.filter(data=>data.id ==evt.dragged.id)
                //console.log(task)
                if(task.length > 0){
                    this.props.handleAttributeDragDrop(task[0]).then(data=>{
                //         this.props.getAllPlantCategories().then(()=>{
                //             this.props.getAllPlantCategories().then(()=>{
                                // confirmAlert({
                                //     title: 'Action',
                                //     message: 'Successfully Moved from InActive to Active',
                                //     buttons: [
                                //         {
                                //         label: 'Ok'
                                //         }
                                //     ]
                                // });
                //                 this.getCatgoryData()
                //             })
                //             // this.getCatgoryData() 
                //         })
                //     })
        
                // }
                
               })
            }
        
           }
        }
        }
        componentDidMount(){
            // this.props.getAllSubAttribute(5)
            var elData = document.getElementById('categoryActive');
            var elData1 = document.getElementById('categoryInactive');
            this.props.getAllSubAttribute(16).then(()=>{
                // alert("ji")
                this.getCatgoryData()
            })
            // this.props.getAllSubAttribute(14)
            new Sortable(elData, {
                group: 'shared',
                animation: 150,
                onAdd:this.onAddData.bind(this),
                onStart: this.startIDData.bind(this),
                onMove:this.onMoveData.bind(this)
            })
            new Sortable(elData1, {
                group: 'shared',
                animation: 150,
                onAdd:this.onAddData.bind(this),
                onStart: this.startIDData.bind(this),
                onMove:this.onMoveData.bind(this),
             
        
                // onFilter:function(){
                //     alert("hi")
                // }
            })
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
            let id= this.state.selectedID
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
            this.setState({deleteon:true})
            result.then(res=>{
                this.setState({deleteon:false})
                this.props.getAllSubAttribute(16).then(dat=>{
                    this.getCatgoryData()
                })
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
                    this.props.getAllSubAttribute(16).then(dat=>{
                        this.getAllcategory()
                    })
                })
                // confirmAlert({
                //     title: 'Added Successfully',
                //     message: 'Package ',
                //     buttons: [
                //       {
                //         label: 'Ok'
                //       }
                //     ]
                // });
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
                            this.props.getAllSubAttribute(16).then(dat=>{
                                this.getCatgoryData()
                            })
                        })
                        if (this.state.isEditing) {
                            // confirmAlert({
                            //     title: 'Updated Successfully',
                            //     message: 'User Position ',
                            //     buttons: [
                            //     {
                            //         label: 'Ok'
                            //     }
                            //     ]
                            // });
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
                isEditing:true,
                selectedID:t.id
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
                                          >
                                                <ul class="list-unstyled" id="categoryInactive">
                                                   {this.state.inactive.map(t=>{
                                                    return <li id={t.id} >
                                                                 <a className="d-flex justify-content-between align-items-center">

                                                                <span id="Wheathers" className={this.state.isEditing && this.state.selectedID ===t.id? "reasonBackground" : " "}>{t.value}</span>
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
                                    <div className="col-lg-1" >
                                        <div className="midControls d-flex flex-column justify-content-around">
                                            <div>
                                            <i class="fas fa-angle-double-right" style={{fontSize:40,color:"gray"}}></i>
                                                <p style={{fontSize:"14px",fontWeight:"bold",color:"gray",textAlign:"center"}}>Drag & Drop to Place</p>
                                               
                                            </div>
                                            <div>
                                            <i class="fas fa-arrows-alt" style={{fontSize:40,color:"gray"}}></i>
                                                <p style={{fontSize:"14px",fontWeight:"bold",color:"gray",textAlign:"center"}}>Drag To Sort</p>
                                                
                                            </div>
                                            <div className="deleteSpace" onDragOver={(e)=>{this.onDragOver(e)}} onDrop={(e)=>this.onDelete(e)}>
                                                <i className ={`fa fa-trash ${this.state.deleteon==true?"trashShake":""}`}style={{fontSize:35,color:"red"}} ></i>
                                                <p style={{fontSize:"14px",fontWeight:"bold",color:"gray",textAlign:"center"}}>Drag & Drop Here to Remove</p>
                                                {/* <img style={{width:"5em"}} src="./assets/img/Genral_Icons/Drag _Drop_remove_red.png" alt="Settings" className="trashShake"/> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="card midCard">
                                            <div class="card-header">
                                                Active
                                            </div>
                                            <div class="card-body cardBg">
                                            <ul class="list-unstyled" id="categoryActive">
                                                   {this.state.active.map(t=>{
                                                    return <li id={t.id} >
                                                                 <a className="d-flex justify-content-between align-items-center">
                                                                <span id="Wheathers" className={this.state.isEditing===false  ? "" :this.state.selectedID === t.id ? "reasonBackground" : " "}>{t.value}</span>
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




