import React from 'react'

function UserSettings() {
    return (
        <div>
               <div className="bg-white">
                            <h4 className="p-15 mb-0">Position Name</h4>
                            <hr className="m-0"/>
                            <div className="ContentSection p-15">
                                <div className="row">
                                    <div className="col-md-12 col-lg-12">
                                        <p>Position Name</p>
                                        <div className="row d-flex align-items-center">
                                            <div className="col-md-6 col-lg-9">  
                                                <input type="text" className="form-control" placeholder=""/>
                                            </div>
                                            <div className="col-md-6 col-lg-3">
                                                <a href="javascript;" className="d-flex align-items-center">
                                                    <i className="fa fa-plus-circle fa-2x mr-2"></i> Add New Position
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-5 mb-4">
                                    <div className="col">
                                        <div className="card zoneCard">
                                            <div className="card-header">
                                                Inactive
                                            </div>
                                            <div className="card-body cardBg">
                                               <ul className="list-unstyled">
                                                   <li className="active">
                                                        <a href="javascript;" className="">
                                                            <span>Christmas Trees</span>
                                                        </a>
                                                   </li>
                                                   <li>
                                                        <a href="javascript;" className="">
                                                            <span>Wheathers</span>
                                                        </a>
                                                   </li>
                                                   <li>
                                                        <a href="javascript;" className="">
                                                            <span>Attracts Birds</span>
                                                        </a>
                                                   </li>
                                                   <li>
                                                        <a href="javascript;" className="">
                                                            <span>Wheathers</span>
                                                        </a>
                                                   </li>
                                                   <li>
                                                        <a href="javascript;" className="">
                                                            <span>Attracts Birds</span>
                                                        </a>
                                                   </li>
                                                   <li>
                                                        <a href="javascript;" className="">
                                                            <span>Wheathers</span>
                                                        </a>
                                                   </li>
                                                   <li>
                                                        <a href="javascript;" className="">
                                                            <span>Attracts Birds</span>
                                                        </a>
                                                   </li>
                                                   <li>
                                                        <a href="javascript;" className="">
                                                            <span>Wheathers</span>
                                                        </a>
                                                   </li>
                                                   <li>
                                                        <a href="javascript;" className="">
                                                            <span>Attracts Birds</span>
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
                                                    <i className="fas fa-angle-double-right"></i>
                                                </a>
                                            </div>
                                            <div>
                                                <a href="javascript;">
                                                    <i className="fas fa-arrows-alt"></i>
                                                </a>
                                            </div>
                                            <div>
                                                <a href="javascript;" className="icDelete">
                                                    <i className="fas fa-trash"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card zoneCard">
                                            <div className="card-header">
                                                Active
                                            </div>
                                            <div className="card-body cardBg">
                                            <ul className="list-unstyled">
                                                   <li className="active">
                                                        <a href="javascript;" className="">
                                                            <span>Broadleaf Evergrens</span>
                                                        </a>
                                                   </li>
                                                   <li>
                                                        <a href="javascript;" className="">
                                                            <span>Bulbs</span>
                                                        </a>
                                                   </li>
                                                   <li>
                                                        <a href="javascript;" className="">
                                                            <span>Evergreens</span>
                                                        </a>
                                                   </li>
                                                   <li>
                                                        <a href="javascript;" className="">
                                                            <span>Frems</span>
                                                        </a>
                                                   </li>
                                                   <li>
                                                        <a href="javascript;" className="">
                                                            <span>Fruits</span>
                                                        </a>
                                                   </li>
                                                   <li>
                                                        <a href="javascript;" className="">
                                                            <span>Grasses</span>
                                                        </a>
                                                   </li>
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

export default UserSettings