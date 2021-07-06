
import React, { Component } from 'react'
import {connect} from "react-redux";
// import './style.css';
import {getAllSubAttribute,handleAttributeDragDrop,handleAttributeDelete,handleZoneInputAction,handleAddZone} from '../../actions/attributeAction'

    class Form extends Component {
            constructor(props){
                super()
                    this.state={
                        errorObj:{
                            formName:0,
                            formSku:0
                        }
                    }
                
            }
         onDragOver = (ev)=>{
            ev.preventDefault();
        }
        onDragStart=(ev, id)=>{
            console.log("dragstart:", id);
            ev.dataTransfer.setData("id",id)
        }
        componentDidMount(){
            this.props.getAllSubAttribute(1)
        }
        onDrop=(ev,cat)=>{
            let id= ev.dataTransfer.getData("id");
            let tasks = this.props.zoneCategoryList.filter((task)=>{                
                   return JSON.stringify(task.id) === id;
            });
            console.log(tasks)
            let result= this.props.handleAttributeDragDrop(tasks[0])
            result.then(res=>{
            this.props.getAllSubAttribute(1)
           })
        }
        onDelete =(ev)=>{
           let id= ev.dataTransfer.getData("id");
           console.log(id)
           let result= this.props.handleAttributeDelete(id)
           result.then(res=>{
            this.props.getAllSubAttribute(1)
           })
        }
        handleZoneInputAction = (e)=>{
            let errorObj=this.state.errorObj
            if(e.target.name === "formSku"){
            errorObj.formSku=0
            this.setState({errorObj})}
            this.props.handleZoneInputAction(e.target.name,e.target.value)
        }
        handleAddCategory = (e)=>{
       
            let zoneObj={}
            zoneObj.attribute_id=1
            zoneObj.value = this.props.formName           
            zoneObj["childrens"] =[
                {'children_name':'SKU value',
                'children_value':this.props.formSku
            }
            ]
            zoneObj.status=1
            console.log(zoneObj)
            if(this.validate()){
            let result = this.props.handleAddZone(zoneObj)
            result.then(res=>{
                this.props.getAllSubAttribute(1)
            })
        }        
        }
        validate = ()=>{
            let errorObj = this.state.errorObj
            if(this.props.formSku.length === 0){
                errorObj.formSku=1
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
                            <h4 className="p-15 mb-0"> Form</h4>
                            <hr className="m-0"/>
                            <div className="ContentSection p-15">
                            <div className="row">
                                    <div className="col-md-6">
                                        <p>Form Name</p>
                                        <div>
                                            <input type="text" className="form-control" name="formName" value={this.props.formName}   placeholder="" onChange={this.handleZoneInputAction}/>
                                            
                                        </div>
                                        <div className="d-flex justify-content-md-end mt-2">
                                            {/* <a href="javascript;" className="d-flex align-items-center">
                                                <i className="fa fa-plus-circle fa-2x mr-2"></i> Add New Section
                                            </a> */}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <p>SKU Value<span style={{color:"red"}}>*</span></p>
                                        <div>
                                            <input type="text" className="form-control" placeholder="" name="formSku" value={this.props.formSku}    onChange={this.handleZoneInputAction}/>
                                            {this.state.errorObj.formSku!==0?<span style={{fontSize:"small",color:"red"}}>Enter SKU Value</span>:""}
                                        </div>
                                        <div className="d-flex justify-content-md-end mt-2" onClick={this.handleAddCategory}>
                                            <a href="#" className="d-flex align-items-center">
                                                <i className="fa fa-plus-circle fa-2x mr-2"></i> Add New Form
                                            </a>
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
                                                   {tasks.inactive.map(t=>{
                                                    return <li id={t.id} name={t.id} onDragStart={(e)=>this.onDragStart(e, t.id)} onDelete={(e)=>this.onDelete(e, t.id)} draggable >
                                                                 <a href="#" class="">
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
                                                <a href="javascript;">
                                                    {/* <i className="fas fa-angle-double-right"></i> */}
                                                    <img style={{width:"3em"}} src="./assets/img/Genral_Icons/DragDragtoplace-move.svg" alt="Settings"/>
                                                </a>
                                            </div>
                                            <div>
                                                <a href="javascript;">
                                                    {/* <i className="fas fa-arrows-alt"></i> */}
                                                    <img style={{width:"3em"}} src="./assets/img/Genral_Icons/DragDragto_place.svg" alt="Settings"/>
                                                </a>
                                            </div>
                                            <div className="deleteSpace" onDragOver={(e)=>{this.onDragOver(e)}} onDrop={(e)=>this.onDelete(e)}>
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
                                                   {tasks.active.map(t=>{
                                                    return <li id={t.id} name={t.id} onDragStart={(e)=>this.onDragStart(e, t.id)} onDelete={(e)=>this.onDelete(e, t.id)} draggable >
                                                                 <a href="#" class="">
                                                                <span id="Wheathers">{t.value}</span>
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
formName:state.attributeData.subAttributeName.formName,
formSku:state.attributeData.subAttributeName.formSku
}
)
export default connect(mapStateToProps,{
    getAllSubAttribute,
    handleAttributeDragDrop,
    handleAttributeDelete,
    handleZoneInputAction,
    handleAddZone      
})(Form)