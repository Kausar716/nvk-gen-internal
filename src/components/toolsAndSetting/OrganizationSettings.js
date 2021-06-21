import React from 'react'

export class OrganizationSettings extends React.Component {  
    render(){
    return (
        <div clas="userManagementSection">
               <div class="contentHeader bg-white d-flex justify-content-between align-items-center">
                    <h1 class="page-header mb-0 d-flex align-items-center">
                        <img src="assets/img/tools-ic-lg.svg" class="mr-2"/>Organization Settings
                    </h1>
                </div>
                <div class="px-md-3 mt-3">
                <div class="pb-4">
                    <div class="bg-white">
                        <div class="row mb-3 mb-md-0">
                            <div class="col-md-6 col-lg-6">
                                <h2 class="p-15 mb-0">Document Details</h2>
                            </div>
                        </div>
                        <div class="ContentSection p-15">
                            <div class="row">
                                <div class="col-md-12 col-lg-12">
                                    <div class="bg-grey-transparent-2 text-center px-2 py-2">
                                        <p class="m-0">The following details will appear on all printed items including invoices, orders, bills of loading, etc.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-md-4 col-lg-3">
                                    <div class="bg-grey-transparent-2 text-center px-3 py-3">
                                        <div class="logCircle mb-3">
                                            <img src="assets/img/nvk-circle-logo.png" />
                                        </div>
                                        <a href="#" class="btn btn-primary btn-block btnGroup">
                                            <span class="d-flex align-items-center justify-content-around">
                                                <span class="f-s-20">Upload</span>
                                            </span>
                                            <img src="assets/img/upload-ic-white.svg" alt=""/>
                                        </a>
                                        <a href="#" class="btn bg-red-transparent-3 btn-block btnGroup mt-3">
                                            <span class="d-flex align-items-center justify-content-around">
                                                <span class="f-s-20 text-danger">Remove</span>
                                            </span>
                                            <img src="assets/img/bin-ic-red.svg" alt=""/>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-md-8 col-lg-9 mt-3 mt-md-0">
                                    <div class="row form-group">
                                        <div class="col-md-12">
                                            <label>Name</label>
                                            <input type="text" placeholder="Name" class="form-control" />
                                        </div>
                                    </div>
                                    <div class="row form-group">
                                        <div class="col-md-12">
                                            <label>Sending Email Address</label>
                                            <input type="text" placeholder="Dispatch Email Address" class="form-control" />
                                        </div>
                                    </div>
                                    <div class="row form-group">
                                        <div class="col-md-6">
                                            <label>Phone</label>
                                            <input type="text" placeholder="XXX - XXXXXXXXXX" class="form-control" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row mt-3 mt-lg-0">
                                <div class="col-md-12 col-lg-12">
                                    <div class="row form-group">
                                        <div class="col-md-6">
                                            <label>Main Title (Body)</label>
                                            <input type="text" placeholder="Name" class="form-control" />
                                        </div>
                                        <div class="col-md-6">
                                            <label>Secondary Title (Body)</label>
                                            <input type="text" placeholder="Address 01" class="form-control" />
                                        </div>
                                    </div>
                                    <div class="row form-group">
                                        <div class="col-md-6">
                                            <label>Main (Body)</label>
                                            <textarea class="form-control" rows="5">Address 01</textarea>
                                        </div>
                                        <div class="col-md-6">
                                            <label>Secondary (Body)</label>
                                            <textarea class="form-control" rows="5">Address 02</textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md-12 col-lg-12 text-md-right mt-3 mt-md-0">
                            <button type="button" class="btn btn-outline-secondary btn-lg">Cancel</button>
                            <button type="button" class="btn btn-primary btn-lg ml-3">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    }
    }
    export default OrganizationSettings
