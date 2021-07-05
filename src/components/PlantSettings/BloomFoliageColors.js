import React, { Component } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import * as MdIcons from "react-icons/md";
//import { Field, reduxForm } from 'redux-form';
//import {  Row} from 'reactstrap';


// fake data generator
const getItems = (count, offset = 0) =>
    Array.from({ length: count }, (v, k) => k).map(k => ({
        id: `Areca Palms-${k + offset}`,
        content: `Areca Palms`
    }));

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};


/**
 * Moves an item from one list to another list.
 */
 const move = (source, destination, droppableSource, droppableDestination, droppableDestination2) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;
    //result[droppableDestination2.droppableId] = destClone;
    console.log("result", result)
    return result;
    
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,
    height:40,
    padding:7,
    color:"#ffffff",
    // border:"3px dotted red",

    // change background colour if dragging
    background: isDragging ? '#b4b4b4' : '#5287f5',

    // styles we need to apply on draggables
    ...draggableStyle
});

const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? 'lightblue' : 'lightgrey',
    padding: grid,
    width: 250
});





class BloomFoliageColors extends Component  {
   
    state = {
        items: [{content:"Fern",id:"01"}, {content:"Areca Palm",id:"02"},{content:"Peacelilly",id:"03"}],
        // items: getItems(3),
        //selected: getItems(1, 3),
        selected:[{content:"Draceena",id:"04"}, {content:"Spider Plant",id:"05"}],
        delete:[],
        event: "",
        itemSelectedList:'',
        isselectCheckbox:false,
        checkedItems: new Map(),  
    };

     /**
     * A semi-generic way to handle multiple lists. Matches
     * the IDs of the droppable container to the names of the
     * source arrays stored in the state.
     */
      id2List = {
        droppable: 'items',
        droppable2: 'selected',
        droppable3: 'delete'
    };

    getList = id => this.state[this.id2List[id]];

    onDragEnd = result => {
        const { source, destination } = result;

        // dropped outside the list
        if (!destination) {
            console.log("not droped in droppable");
            return;
          }
          if (
            destination.index === source.index &&
            destination.droppableId === source.draggableId
          ) {
            console.log("droped in same place");
            return;
          }

        //   const itemCopy = { ...state[source.droppableId].items[source.index] };
        //   setstate((prev) => {
        //     prev = { ...prev };
        //     prev[source.droppableId].items.splice(source.index, 1);
        //     prev[destination.droppableId].items.splice(
        //       destination.index,
        //       0,
        //       itemCopy
        //     );
        //     return prev;
        //   });
      

        if (source.droppableId === destination.droppableId) {
            const items = reorder(
                this.getList(source.droppableId),
                source.index,
                destination.index
            );

            let state = { items };

            if (source.droppableId === 'droppable2') {
                state = { selected: items };
            }

            if (source.droppableId === 'droppable3') {
                state = { delete: items };
            }

            this.setState(state);
        } else {
            const result = move(
                this.getList(source.droppableId),
                this.getList(destination.droppableId),
                source,
                destination
            );

            this.setState({
                items: result.droppable,
                selected: result.droppable2,
                delete:result.droppable3,
            });
        }
    };


    change = v => {
        v.preventDefault();
        this.setState({
          event: v.target.value
        });
      };


      handleKeyPress = (k,event) => {
        
        if (k.charCode === 13 && this.state.event.trim() !== "") {
          let items = this.state.items;
          // TODO: use real id of the event here instead of length
          const id = items.length;
          items.push({
            id: `event-${id}`,
            content: this.state.event
          });
          this.setState({
            event: ""
          });
        }
        
      };



      deleteIndex = index => {
        console.log("index deleting",index);
        let items = this.state.items;
        items.splice(index, 1);
        this.setState({
          items
        });
      };

      onItemSelect = (index) => {
          console.log("abcd", index)
          
        
      };


      handleChange(event) {  
        var isChecked = event.target.checked;  
        var item1 = event.target.value;  
           
        this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item1, isChecked) }));  
  }  
  

    render() {
    return (
        <>
            <div className="bg-white">
                            <h4 className="p-15 mb-0">Bloom &amp; Foliage Colors</h4>
                            <hr className="m-0"/>
                            <div className="ContentSection p-15">
                                <div className="row">
                                    <div className="col-md-12 col-lg-12">
                                        <p>Color Name</p>
                                        <div className="row d-flex align-items-center">
                                            <div className="col-md-6 col-lg-9">  
                                                {/* <input type="text" className="form-control" placeholder=""/> */}
                                                <input className="form-control"
                                                        value={this.state.event}
                                                        onChange={this.change.bind(this)}
                                                        onKeyPress={this.handleKeyPress.bind(this)}
                                                        />
                                            </div>
                                            <div className="col-md-6 col-lg-3"  >
                                                <a  className="d-flex align-items-center">
                                                    <i className="fa fa-plus-circle fa-2x mr-2"></i> Add New Color
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <DragDropContext onDragEnd={this.onDragEnd}>
                                <div class="row mt-5 mb-4">
                                    <div class="col">
                                        <div class="card zoneCard">
                                            <div class="card-header">
                                                Inactive
                                            </div>
                                            <div class="card-body cardBg">
                                            
                                                <Droppable droppableId="droppable">
                                                    {(provided, snapshot) => (
                                                        <div className="sub_drop_box2">
                                                            <div className="inactive_drop"
                                                            
                                                                ref={provided.innerRef}
                                                                >
                                                                    {/* <p style={{color:"#357ebd"}}>Inactive</p> */}
                                                                {this.state.items.map((item, index) => (
                                                                    <Draggable
                                                                        style={{background:"red", backgroundColor:"red"}}
                                                                        key={item.id}
                                                                        draggableId={item.id}
                                                                        index={index}>
                                                                        {(provided, snapshot) => (
                                                                                <div 
                                                                                // onClick={this.onItemSelect}
                                                                                ref={provided.innerRef}
                                                                                {...provided.draggableProps}
                                                                                {...provided.dragHandleProps}
                                                                                style={getItemStyle(
                                                                                    snapshot.isDragging,
                                                                                    provided.draggableProps.style
                                                                                )}>
                                                                            {/* <input type="checkbox" id={index} value={item.id} onChange={this.handleChange} /> */}
                                                                            <p onClick={this.onItemSelect(index)} key={item.id} >{item.content}<span style={{float:"right",fontSize:20}}><MdIcons.MdDelete  onClick={this.deleteIndex.bind(this, index)} /></span></p>
                                                                            </div>
                                                                            
                                                                        )}
                                                                    </Draggable>
                                                                ))}
                                                                {provided.placeholder}
                                                            </div>

                                                        </div>
                                    
                                                    )}
                                                </Droppable>

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
                                            <div>
                           
                                                    <div>
                                                        <Droppable droppableId="delete">
                                                        {(provided, snapshot) => (
                                                            <div  ref={provided.innerRef} className="testingBorder">
                                                                <div>
                                                              
                                                                    <img style={{width:"3em"}} src="./assets/img/Genral_Icons/Drag _Drop_remove_red.svg" alt="Settings"/>
                                                                </div>
                                                            </div>
                                                            )}
                                                        </Droppable>
                                                    </div>
                                            
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="card zoneCard">
                                            <div class="card-header">
                                                Active
                                            </div>
                                            <div class="card-body cardBg">
                                            <Droppable droppableId="droppable2">
                                                {(provided, snapshot) => (
                                                    <div  className="sub_drop_box4">
                                                        <div className="inactive_drop"
                                                        ref={provided.innerRef}
                                                    > 
                                                        {this.state.selected.map((item, index) => (
                                                            <Draggable
                                                                key={item.id}
                                                                draggableId={item.id}
                                                                index={index}>
                                                                {(provided, snapshot) => (
                                                                    <div 
                                                                        ref={provided.innerRef}
                                                                        {...provided.draggableProps}
                                                                        {...provided.dragHandleProps}
                                                                        style={getItemStyle(
                                                                            snapshot.isDragging,
                                                                            provided.draggableProps.style
                                                                        )}
                                                                        >
                                                                    {item.content}<span style={{float:"right",fontSize:20}}></span>
                                                                    </div>
                                                                )}
                                                            </Draggable>
                                                        ))}
                                                        {provided.placeholder}
                                                    </div>

                                                    </div>
                                            
                                                )}
                                            </Droppable>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </DragDropContext>
                            </div>
                            {/* </DragDropContext> */}
                        </div>




        </>
    )
}
}

export default BloomFoliageColors
