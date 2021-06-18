import React, { useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import DatePicker from 'react-date-picker';

const SkuList=()=> {
    const [value, onChange] = useState(new Date());
    return (
        <div>
                <div>
                            <div class="bg-white px-3 py-3 mt-3">
                                <form>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <h3>GENERATED SKU:</h3>
                                        </div>
                                        <div class="col-md-6 d-flex justify-content-end">
                                            <div class=" d-flex align-items-center my-md-2 mt-3 mt-md-0">
                                                Archive
                                                <div class="switcher ml-2">
                                                    <input type="checkbox" name="switcher_checkbox_2" id="switcher_checkbox_2" value="2"/>
                                                    <label for="switcher_checkbox_2"></label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mt-3">
                                    <div class="col-md-6 col-lg-3">
                                            <label>SKU Item Name: <span class="text-danger">*</span></label>
                                            <input type="text" class="form-control text-right" placeholder="" value="$1.25"/>
                                        </div>
                                        <div class="col-md-6 col-lg-3 mt-2 mt-md-0">
                                           
                                        </div>
                                        <div class="col-md-6 col-lg-3 mt-2 mt-md-0">
                                            <label>Sub-Category: <span class="text-danger">*</span></label>
                                            <select class="form-control">
                                                <option>Select</option>
                                                <option>Option 1</option>
                                                <option>Option 2</option>
                                            </select>
                                        </div>

                                        <div class="col-md-6 col-lg-3 mt-2 mt-md-0">
                                            <label>Packaging: <span class="text-danger">*</span></label>
                                            <select class="form-control">
                                                <option>Select</option>
                                                <option>Option 1</option>
                                                <option>Option 2</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col-md-6 col-lg-3">
                                            <label>Each Cost: <span class="text-danger">*</span></label>
                                            <input type="text" class="form-control text-right" placeholder="" value="$1.25"/>
                                        </div>
                                        <div class="col-md-6 col-lg-3 mt-2 mt-md-0">
                                            <label>Each Price: <span class="text-danger">*</span></label>
                                            <input type="text" class="form-control text-right" placeholder="" value="$1.25"/>
                                        </div>
                                        <div class="col-md-6 col-lg-3 mt-2 mt-md-0">
                                            <label>Sale Price: <span class="text-danger">*</span></label>
                                            <input type="text" class="form-control text-right" placeholder="" value="$1.25"/>
                                        </div>
                                        <div class="col-md-6 col-lg-3 mt-2 mt-md-0">
                                            <label>Sales Expiry Date:</label>
                                            <div class="row">
                                                <div class="col-md-12 col-lg-12 d-flex">
                                                    <div>
                                                        <DatePicker onChange={onChange} value={value} />
                                                    </div>
                                                    <div class="d-flex align-items-center flex-wrap ml-2">
                                                        Active
                                                        <div class="switcher switcher-sm ml-2 pr-2">
                                                            <input type="checkbox" name="switcher_checkbox_date" id="switcher_checkbox_date" value="2"/>
                                                            <label for="switcher_checkbox_date"></label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col-md-6 col-lg-3">
                                            <label>Volume Quality: <span class="text-danger">*</span></label>
                                            <select class="form-control"><option>Select</option><option>Option 1</option><option>Option 2</option></select>
                                        </div>
                                        <div class="col-md-6 col-lg-3 mt-2 mt-md-0">
                                            <label>Volume Price per unit:</label>
                                            <select class="form-control"><option>Select</option><option>Option 1</option><option>Option 2</option></select>
                                        </div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col-md-12 text-md-right">
                                            <button type="button" class="btn btn-primary btn-lg">Add SKU &amp; Clear</button>
                                            <button type="button" class="btn btn-outline-secondary btn-lg ml-3">Add SKU &amp; Retain</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="bg-white px-3 py-3 my-3">
                                <table id="plantDetails" class="table table-striped w-100 table-responsive">
                                    <thead>
                                        <tr>
                                            <th class="text-nowrap">Status</th>
                                            <th class="text-nowrap">SKU</th>
                                            <th class="text-nowrap">Each Cost</th>
                                            <th class="text-nowrap">Each Price</th>
                                            <th class="text-nowrap">Sale Price</th>
                                            <th class="text-nowrap">Sale Active</th>
                                            <th class="text-nowrap">Volume Per Unit</th>
                                            <th class="text-nowrap">Volume QTY</th>
                                            <th class="text-nowrap text-center">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Active</td>
                                            <td>26-TF-Test 2June-BBP</td>
                                            <td>11.50</td>
                                            <td>11.28</td>
                                            <td>11.50</td>
                                            <td class="text-center">
                                                <div class="custom-control custom-checkbox mb-1">
                                                    <input type="checkbox" class="custom-control-input" id="customCheck1"/>
                                                    <label class="custom-control-label" for="customCheck1"></label>
                                                </div>
                                            </td>
                                            <td>0</td>
                                            <td>-</td>
                                            <td class="text-center">
                                                <span>
                                                    <a href="javascript:;">
                                                        <img src="assets/img/edit.svg" alt=""/>
                                                    </a>
                                                </span>
                                                <span>
                                                    <a href="javascript:;">
                                                        <img src="assets/img/duplicate.svg" alt=""/>
                                                    </a>
                                                </span>
                                                <span>
                                                    <a href="javascript:;">
                                                        <img src="assets/img/delete.svg" alt=""/>
                                                    </a>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Active</td>
                                            <td>26-TF-Test 2June-BBP</td>
                                            <td>11.50</td>
                                            <td>11.28</td>
                                            <td>11.50</td>
                                            <td class="text-center">
                                                <div class="custom-control custom-checkbox mb-1">
                                                    <input type="checkbox" class="custom-control-input" id="customCheck1"/>
                                                    <label class="custom-control-label" for="customCheck1"></label>
                                                </div>
                                            </td>
                                            <td>0</td>
                                            <td>-</td>
                                            <td class="text-center">
                                                <span>
                                                    <a href="javascript:;">
                                                        <img src="assets/img/edit.svg" alt=""/>
                                                    </a>
                                                </span>
                                                <span>
                                                    <a href="javascript:;">
                                                        <img src="assets/img/duplicate.svg" alt=""/>
                                                    </a>
                                                </span>
                                                <span>
                                                    <a href="javascript:;">
                                                        <img src="assets/img/delete.svg" alt=""/>
                                                    </a>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Active</td>
                                            <td>26-TF-Test 2June-BBP</td>
                                            <td>11.50</td>
                                            <td>11.28</td>
                                            <td>11.50</td>
                                            <td class="text-center">
                                                <div class="custom-control custom-checkbox mb-1">
                                                    <input type="checkbox" class="custom-control-input" id="customCheck1"/>
                                                    <label class="custom-control-label" for="customCheck1"></label>
                                                </div>
                                            </td>
                                            <td>0</td>
                                            <td>-</td>
                                            <td class="text-center">
                                                <span>
                                                    <a href="javascript:;">
                                                        <img src="assets/img/edit.svg" alt=""/>
                                                    </a>
                                                </span>
                                                <span>
                                                    <a href="javascript:;">
                                                        <img src="assets/img/duplicate.svg" alt=""/>
                                                    </a>
                                                </span>
                                                <span>
                                                    <a href="javascript:;">
                                                        <img src="assets/img/delete.svg" alt=""/>
                                                    </a>
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
        </div>
    )
}

export default SkuList
