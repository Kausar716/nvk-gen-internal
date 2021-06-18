import React,  { useEffect,useState } from 'react';
import {connect} from "react-redux";

const GeneralSettings=()=> {
    return (
        <div>
            <div class="bg-white px-3 py-3 mt-3">
                            <form>
                                <div class="row">
                                    <div class="col-md-12 d-md-flex flex-wrap align-items-center">
                                
                                        <div class=" d-flex align-items-center mr-4 my-md-2 mt-3 mt-md-0">
                                            <div class="switcher ml-2 pr-2">
                                                <input type="checkbox" name="switcher_checkbox_2" id="switcher_checkbox_2" value="2"/>
                                                <label for="switcher_checkbox_2"></label>
                                            </div>
                                            Discountiued
                                        </div>
                                        <div class=" d-flex align-items-center mr-4 my-md-2 mt-3 mt-md-0">
                                            <div class="switcher ml-2 pr-2">
                                                <input type="checkbox" name="switcher_checkbox_2" id="switcher_checkbox_2" value="2"/>
                                                <label for="switcher_checkbox_2"></label>
                                            </div>
                                            Archive
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-md-6 col-lg-3">
                                        <label>Item Name: <span class="text-danger">*</span></label>
                                        <input type="text" class="form-control" placeholder=""/>
                                    </div>
                                    <div class="col-md-6 col-lg-6 mt-2 mt-md-0">
                                        <label>Common Name(s):</label>
                                        <input type="text" class="form-control" placeholder=""/>
                                    </div>
                          
                                </div>
                               
                                <div class="row mt-3">
                                    <div class="col-md-6 col-lg-3">
                                        <label>Category: <span class="text-danger">*</span></label>
                                        <select class="form-control"><option>Select</option><option>Option 1</option><option>Option 2</option></select>
                                    </div>
                                   
                                    <div class="col-md-6 col-lg-3 mt-2 mt-md-0">
                                        <label>Manufacturer: <span class="text-danger">*</span></label>
                                        <select class="form-control"><option>Select</option><option>Option 1</option><option>Option 2</option></select>
                                    </div>
                                </div>

                                <div class="row mt-3">
                                    <div class="col-md-12">
                                        <label>Internal Notes <small>(Not shown to customer)</small> :</label>
                                        <textarea class="form-control" rows="4"></textarea>
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-md-12 text-md-right">
                                        <button type="button" class="btn btn-outline-secondary btn-lg">Cancel</button>
                                        <button type="button" class="btn btn-primary btn-lg ml-3">update</button>
                                    </div>
                                </div>
                            </form>
                        </div>
        </div>
    )
}

export default GeneralSettings
