import React from 'react'

function Characterstics() {
    return (
        <>
            <div className="bg-white">
                            <h4 className="p-15 mb-0">Hardiness Zones</h4>
                            <hr className="m-0"/>
                            <div className="ContentSection p-15">
                                <div className="row">
                                    <div className="col-md-6">
                                        <p>Section Name</p>
                                        <div>
                                            <input type="text" className="form-control" placeholder=""/>
                                        </div>
                                        <div className="d-flex justify-content-md-end mt-2">
                                            <a href="javascript;" className="d-flex align-items-center">
                                                <i className="fa fa-plus-circle fa-2x mr-2"></i> Add New Section
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <p>Feature Name</p>
                                        <div>
                                            <input type="text" className="form-control" placeholder=""/>
                                        </div>
                                        <div className="d-flex justify-content-md-end mt-2">
                                            <a href="javascript;" className="d-flex align-items-center">
                                                <i className="fa fa-plus-circle fa-2x mr-2"></i> Add New Feature
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-5">
                                    <div className="col">
                                        <div className="card midCard">
                                            <div className="card-header">
                                                Inactive
                                            </div>
                                            <div className="card-body cardBg">
                                               <ul className="list-unstyled">
                                                   <li>
                                                        <a href="javascript;" className="d-flex justify-content-between align-items-center">
                                                            <span>Attracts Birds 01</span>
                                                            <i className="fa fa-th"></i>
                                                        </a>
                                                   </li>
                                                   <li>
                                                        <a href="javascript;" className="d-flex justify-content-between align-items-center">
                                                            <span>Attracts Birds 02</span>
                                                            <i className="fa fa-th"></i>
                                                        </a>
                                                   </li>
                                                   <li>
                                                        <a href="javascript;" className="d-flex justify-content-between align-items-center">
                                                            <span>Attracts Birds 03</span>
                                                            <i className="fa fa-th"></i>
                                                        </a>
                                                   </li>
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
                                            <div id="delete">
                                                <a href="javascript;" className="icDelete">
                                                <img style={{width:"3em"}} src="./assets/img/Genral_Icons/Drag _Drop_remove_red.svg" alt="Settings"/>
                                                    {/* <i className="fas fa-trash"></i> */}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card midCard">
                                            <div className="card-header">
                                                Active
                                            </div>
                                            <div className="card-body cardBg">
                                               <ul className="list-unstyled">
                                                   <li className="hasChild">
                                                        <a href="javascript;" className="d-flex justify-content-between align-items-center">
                                                            <span>Attracts Birds 01</span>
                                                            <i className="fa fa-th"></i>
                                                        </a>
                                                        <ul className="list-unstyled childUl">
                                                            <li>
                                                                <a href="javascript;" className="d-flex justify-content-between align-items-center">
                                                                    <span>Attracts Birds 01</span>
                                                                    <i className="fa fa-th"></i>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="javascript;" className="d-flex justify-content-between align-items-center">
                                                                    <span>Attracts Birds 01</span>
                                                                    <i className="fa fa-th"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                   </li>
                                                   <li>
                                                        <a href="javascript;" className="d-flex justify-content-between align-items-center">
                                                            <span>Attracts Birds 02</span>
                                                            <i className="fa fa-th"></i>
                                                        </a>
                                                   </li>
                                                   <li>
                                                        <a href="javascript;" className="d-flex justify-content-between align-items-center">
                                                            <span>Attracts Birds 03</span>
                                                            <i className="fa fa-th"></i>
                                                        </a>
                                                   </li>
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

export default Characterstics
