import React,  { useState } from 'react' ;
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';









const Manufacturer=(props)=> {
    return(
        <>       <div class="bg-white">
                            <h4 class="p-15 mb-0">Manufacturers</h4>
                            <hr class="m-0"/>
                            <div class="ContentSection p-15">
                                <div class="row">
                                    <div class="col-md-12 col-lg-12">
                                        <p>Manufacturer Name</p>
                                        <div class="row d-flex align-items-center">
                                            <div class="col-md-6 col-lg-9">  
                                                <input type="text" class="form-control" placeholder=""/>
                                            </div>
                                            <div class="col-md-6 col-lg-3">
                                                <a href="javascript:;" class="d-flex align-items-center">
                                                    <i class="fa fa-plus-circle fa-2x mr-2"></i> Add New Manufacturer
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
                                            <div class="card-body cardBg">
                                               <ul class="list-unstyled">
                                                   <li class="active">
                                                        <a href="javascript:;" class="">
                                                            <span>Christmas Trees</span>
                                                        </a>
                                                   </li>
                                                   <li>
                                                        <a href="javascript:;" class="">
                                                            <span>Wheathers</span>
                                                        </a>
                                                   </li>
                                                   <li>
                                                        <a href="javascript:;" class="">
                                                            <span>Attracts Birds</span>
                                                        </a>
                                                   </li>
                                                   <li>
                                                        <a href="javascript:;" class="">
                                                            <span>Wheathers</span>
                                                        </a>
                                                   </li>
                                                   <li>
                                                        <a href="javascript:;" class="">
                                                            <span>Attracts Birds</span>
                                                        </a>
                                                   </li>
                                                   <li>
                                                        <a href="javascript:;" class="">
                                                            <span>Wheathers</span>
                                                        </a>
                                                   </li>
                                                   <li>
                                                        <a href="javascript:;" class="">
                                                            <span>Attracts Birds</span>
                                                        </a>
                                                   </li>
                                                   <li>
                                                        <a href="javascript:;" class="">
                                                            <span>Wheathers</span>
                                                        </a>
                                                   </li>
                                                   <li>
                                                        <a href="javascript:;" class="">
                                                            <span>Attracts Birds</span>
                                                        </a>
                                                   </li>
                                               </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-1">
                                        <div class="midControls d-flex flex-column justify-content-around">
                                            <div>
                                                <a href="javascript:;">
                                                    <i class="fas fa-angle-double-right"></i>
                                                </a>
                                            </div>
                                            <div>
                                                <a href="javascript:;">
                                                    <i class="fas fa-arrows-alt"></i>
                                                </a>
                                            </div>
                                            <div>
                                                <a href="javascript:;" class="icDelete">
                                                    <i class="fas fa-trash"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="card zoneCard">
                                            <div class="card-header">
                                                Active
                                            </div>
                                            <div class="card-body cardBg">
                                            <ul class="list-unstyled">
                                                   <li class="active">
                                                        <a href="javascript:;" class="">
                                                            <span>Broadleaf Evergrens</span>
                                                        </a>
                                                   </li>
                                                   <li>
                                                        <a href="javascript:;" class="">
                                                            <span>Bulbs</span>
                                                        </a>
                                                   </li>
                                                   <li>
                                                        <a href="javascript:;" class="">
                                                            <span>Evergreens</span>
                                                        </a>
                                                   </li>
                                                   <li>
                                                        <a href="javascript:;" class="">
                                                            <span>Frems</span>
                                                        </a>
                                                   </li>
                                                   <li>
                                                        <a href="javascript:;" class="">
                                                            <span>Fruits</span>
                                                        </a>
                                                   </li>
                                                   <li>
                                                        <a href="javascript:;" class="">
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
    </>
    )




}
export default Manufacturer