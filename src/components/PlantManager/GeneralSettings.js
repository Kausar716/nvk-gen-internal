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
                                            Website
                                        </div>
                                        <div class=" d-flex align-items-center mr-4 my-md-2 mt-3 mt-md-0">
                                            <div class="switcher ml-2 pr-2">
                                                <input type="checkbox" name="switcher_checkbox_2" id="switcher_checkbox_2" value="2"/>
                                                <label for="switcher_checkbox_2"></label>
                                            </div>
                                            In Production
                                        </div>
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
                                        <label>Genus: <span class="text-danger">*</span></label>
                                        <input type="text" class="form-control" placeholder=""/>
                                    </div>
                                    <div class="col-md-6 col-lg-3 mt-2 mt-md-0">
                                        <label>Species: <span class="text-danger">*</span></label>
                                        <input type="text" class="form-control" placeholder=""/>
                                    </div>
                                    <div class="col-md-6 col-lg-3 mt-2 mt-md-0">
                                        <label>Cultivar:</label>
                                        <input type="text" class="form-control" placeholder=""/>
                                    </div>
                                    <div class="col-md-6 col-lg-3 mt-2 mt-md-0">
                                        <label>Cultivar 2:</label>
                                        <input type="text" class="form-control" placeholder=""/>
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-md-6 col-lg-3">
                                        <label>Alternate Genus:</label>
                                        <input type="text" class="form-control" placeholder=""/>
                                    </div>
                                    <div class="col-md-6 col-lg-3 mt-2 mt-md-0">
                                        <label>Series:</label>
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
                                        <label>Bloom Color:</label>
                                        <select class="form-control"><option>Select</option><option>Option 1</option><option>Option 2</option></select>
                                    </div>
                                    <div class="col-md-6 col-lg-3 mt-2 mt-md-0">
                                        <label>Follage Color:</label>
                                        <select class="form-control"><option>Select</option><option>Option 1</option><option>Option 2</option></select>
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-md-6 col-lg-3">
                                        <label>Height:</label>
                                        <div class="d-flex">
                                            <input type="text" class="form-control" placeholder="MIN"/>
                                            <span class="midDash">-</span>
                                            <input type="text" class="form-control" placeholder="MAX"/>
                                            <span class="midDash">-</span>
                                            <select class="form-control">
                                                <option>CM</option>
                                                <option>Option 1</option>
                                                <option>Option 2</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-lg-3 mt-2 mt-md-0">
                                        <label>Spread:</label>
                                        <div class="d-flex">
                                            <input type="text" class="form-control" placeholder="MIN"/>
                                            <span class="midDash">-</span>
                                            <input type="text" class="form-control" placeholder="MAX"/>
                                            <span class="midDash">-</span>
                                            <select class="form-control">
                                                <option>CM</option>
                                                <option>Option 1</option>
                                                <option>Option 2</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-lg-3 mt-2 mt-md-0">
                                        <label>Spacing:</label>
                                        <div class="d-flex">
                                            <input type="text" class="form-control" placeholder="MIN"/>
                                            <span class="midDash">-</span>
                                            <input type="text" class="form-control" placeholder="MAX"/>
                                            <span class="midDash">-</span>
                                            <select class="form-control">
                                                <option>CM</option>
                                                <option>Option 1</option>
                                                <option>Option 2</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-lg-3 mt-2 mt-md-0">
                                        <label>Temperature:</label>
                                        <div class="d-flex">
                                            <input type="text" class="form-control" placeholder="MIN"/>
                                            <span class="midDash">-</span>
                                            <input type="text" class="form-control" placeholder="MAX"/>
                                            <span class="midDash">-</span>
                                            <select class="form-control">
                                                <option>&#8457;</option>
                                                <option>Option 1</option>
                                                <option>Option 2</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-md-6 col-lg-3">
                                        <label>Plant:</label>
                                        <input type="text" class="form-control" placeholder=""/>
                                    </div>
                                    <div class="col-md-6 col-lg-3 mt-2 mt-md-0">
                                        <label>Royalty:</label>
                                        <input type="text" class="form-control" placeholder=""/>
                                    </div>
                                    <div class="col-md-6 col-lg-3 mt-2 mt-md-0">
                                        <label>Hardiness:</label>
                                        <select class="form-control">
                                            <option>Select</option>
                                            <option>Option 1</option>
                                            <option>Option 2</option>
                                        </select>
                                    </div>
                                    <div class="col-md-6 col-lg-3 mt-2 mt-md-0">
                                        <label>Introduction Year:</label>
                                        <select class="form-control">
                                            <option>Select</option>
                                            <option>Option 1</option>
                                            <option>Option 2</option>
                                        </select>
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
