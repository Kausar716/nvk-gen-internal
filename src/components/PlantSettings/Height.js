/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { Component } from 'react'
import {connect} from "react-redux";
import * as MdIcons from "react-icons/md";
// import './style.css';
import {getAllSubAttribute,handleAttributeDragDrop,handleAttributeDragSort,handleAttributeDelete,
    handleZoneInputAction,handleAddZone, handleZoneInputAction2, handleZoneInputAction3, showSubSubAttribute, handleSubAttributeUpdate} from '../../actions/attributeAction'

    class Height extends Component {
        constructor(props){
            super()
                this.state={
                    errorObj:{
                        heightName:0,
                        heightSku:0,
                        heightImperial:0
                    },
                    sortId: 0,
                    activeId: 0,
                    isEditing:false,
                    name:'',
                    subName:'',
                    subName2:'',
                }
            
        }
        bloomColor
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
            this.props.getAllSubAttribute(3)
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
        //     this.props.getAllSubAttribute(3)
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
                    this.props.getAllSubAttribute(3)
                })   
                alertmsg = 3;
            }
            if (doProcess === false && cat === 'active' && tasks[0].status === 1 && this.state.sortId !== this.state.activeId) {
                let result= this.props.handleAttributeDragSort(this.state.activeId, this.state.sortId)
                result.then(res=>{
                    this.props.getAllSubAttribute(3)
                }) 
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
            this.props.getAllSubAttribute(3)
           })
        }
        handleZoneInputAction = (e)=>{
            this.setState({
                name:e.target.value
            })
            
            this.props.handleZoneInputAction(e.target.name,e.target.value)
        }



        handleZoneInputAction2 = (e)=>{
            //debugger;
            console.log("inputAction", e.target.name,e.target.value)
            this.setState({
                subName:e.target.value,
                
            })
            let errorObj=this.state.errorObj
            if(e.target.name === "heightImperial"){
                errorObj.caliperImperial=0
                this.setState({errorObj})}

            this.props.handleZoneInputAction2("heightImperial",e.target.value)
        }


        handleZoneInputAction3 = (e)=>{
            this.setState({
                subName2:e.target.value,
                
            })
            let errorObj=this.state.errorObj
            if(e.target.name === "heightSku"){
            errorObj.caliperSku=0
            this.setState({errorObj})}
            //debugger;
            console.log("inputAction", e.target.name,e.target.value)
           
            this.props.handleZoneInputAction3("heightSku",e.target.value)
        }




        handleEditClick2 =(t)=> {
            console.log("abcdefg", t  )
            // debugger;  
         this.setState({
             name: t.value,
             subName:t.sub_attributeschild[0].value,
             subName2:t.sub_attributeschild[1].value,
             isEditing:true
         })
        //  let formValue={}
        //  formValue={...this.state.name, ...this.state.subName}

         this.props.handleZoneInputAction("heightName",...this.state.name)
         this.props.handleZoneInputAction2("heightImperial",...this.state.subName)
         this.props.handleZoneInputAction3("heightSku",...this.state.subName2)
         this.props.showSubSubAttribute(t.id)
         //console.log("ttttttt", t,  )
       }


       handleAddCategoryUpdate=(e)=>{
        // debugger;
         // this.props.handleSubAttributeUpdate(e.target.id)
         let valueName = this.state.name
         let imperialName = this.state.subName
         let skuName = this.state.subName2
         let updateID = parseInt(this.props.showSpeciSubA.id)
         let updateObject={}
         updateObject.value=valueName
        //  updateObject.attribute_id=1
         updateObject.status=1

         updateObject["childrens"] =[
            {
                children_value:imperialName,
                children_name:'Imperial',
                children_id:this.props.showSpeciSubA.sub_attributeschild[0].id,
            },
            {
                children_value:skuName,
                children_name:'SKU value',
                children_id:this.props.showSpeciSubA.sub_attributeschild[1].id,
                }
        ]

        if(this.validate() ){
            
      let res=   this.props.handleSubAttributeUpdate(updateID, updateObject)
             res.then(res=>{
                 this.props.getAllSubAttribute(3)
             })

             alert('Updated Successfully Done');
            }

             this.setState({
                 isEditing:false,
                 name:"",
                 subName:"",
                 subName2:""
             })

     }







        handleAddCategory = (e)=>{
       
            let zoneObj={}
            zoneObj.attribute_id=3
            zoneObj.value = this.props.heightName           
            zoneObj["childrens"] =[
                {'children_name':'SKU value',
                'children_value':this.state.subName2},
                {'children_name':'Imperial',
                'children_value':this.state.subName}
            ]
            zoneObj.status=1
            console.log(zoneObj)
            if(this.validate() ){
            let result = this.props.handleAddZone(zoneObj)
            result.then(res=>{
                this.props.getAllSubAttribute(3)
            })
            alert('Added Successfully Done');
        }
        
        }
        validate = ()=>{
            let errorObj = this.state.errorObj
            if(this.state.subName.length === 0){
                errorObj.heightImperial=1
                this.setState({errorObj})
                return false
            }
            if(this.state.subName2.length === 0){
                errorObj.heightSku=1
                this.setState({errorObj})
                return false
            }
            return true
            
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
       
        <>
            <div className="bg-white">
                            <h4 className="p-15 mb-0"> Height</h4>
                            <hr className="m-0"/>
                            <div className="ContentSection p-15">
                                <div className="row">
                                        <div className="col-md-4">
                                            <p>Height</p>
                                            <div>
                                                <input type="text" 
                                                 className={this.state.isEditing===false ? "form-control" : "formControl2 abcd" }
                                                 placeholder="Height"  name="heightName" value={this.state.name}    onChange={this.handleZoneInputAction}/>
                                            </div>
                                            <div className="d-flex justify-content-md-end mt-2">
                                                {/* <a href="javascript;" className="d-flex align-items-center">
                                                    <i className="fa fa-plus-circle fa-2x mr-2"></i> Add New Section
                                                </a> */}
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <p>Imperial<span style={{color:"red"}}>*</span></p>
                                            <div>
                                                <input type="text" 
                                                 className={this.state.isEditing===false ? "form-control" : "formControl2 abcd" }
                                                 placeholder=""  name="heightImperial" 
                                                value={this.state.subName}   
                                                 onChange={this.handleZoneInputAction2}/>
                                                {this.state.errorObj.heightImperial!==0?<span style={{fontSize:"small",color:"red"}}>Enter Imperial Value</span>:""}
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <p>SKU Value<span style={{color:"red"}}>*</span></p>
                                            <div>
                                                <input type="text" 
                                                 className={this.state.isEditing===false ? "form-control" : "formControl2 abcd" }
                                                placeholder="Value"  name="heightSku"
                                                 value={this.state.subName2}  
                                                   onChange={this.handleZoneInputAction3}/>
                                                {this.state.errorObj.heightSku!==0?<span style={{fontSize:"small",color:"red"}}>Enter SKU Value</span>:""}
                                            </div>



                                            {this.state.isEditing ? (

                                                <div className="d-flex justify-content-md-end mt-2"  onClick={this.handleAddCategoryUpdate}>
                                                    <div >
                                                    <a href="javascript:" className="d-flex align-items-center">
                                                        <i className="fa fa-plus-circle fa-2x mr-2"></i> Update Height
                                                    </a>
                                                    </div>

                                                    <div className="d-flex justify-content-md-end mt-2"  onClick={()=>{this.setState({isEditing:false})}}>
                                                    <a className="d-flex align-items-center" style={{marginLeft:"2.5em", marginTop:"-6px"}}>Cancel </a>
                                                    
                                                    </div>
                                                </div>


                                                ):
                                                (
                                                <div className="d-flex justify-content-md-end mt-2"  onClick={this.handleAddCategory}>
                                                <a href="javascript:" className="d-flex align-items-center">
                                                <i className="fa fa-plus-circle fa-2x mr-2"></i> Add New Height
                                                </a>
                                                </div>  
                                            )}   





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
                                            <div class="card-body cardBg"
                                            onDragOver={(e)=>this.onDragOver(e)}
                                            onDrop={(e)=>{this.onDrop(e,"active")}}>
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
                        </>
    )
}
}

const mapStateToProps = (state)=> (
    // console.log(state)
     {
    
zoneCategoryList:state.attributeData.subAttribute,
temp:state,
// name:state.categoryData.name 
heightName:state.attributeData.subAttributeName.heightName,
heightSku:state.attributeData.subAttributeName.heightSku,
heightImperial:state.attributeData.subAttributeName.heightImperial,
showSpeciSubA: state.attributeData.specificSubAttribute,
}
)
export default connect(mapStateToProps,{
    getAllSubAttribute,
    handleAttributeDragDrop,
    handleAttributeDragSort,
    handleAttributeDelete,
    handleZoneInputAction,
    handleAddZone, handleZoneInputAction2, handleZoneInputAction3, showSubSubAttribute, handleSubAttributeUpdate      
})(Height)