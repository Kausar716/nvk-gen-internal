/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react'

export class Dashboard extends Component {  
    render() {
    return (
        <div class="p-md-20 pt-3">
            <div class="row">
                <div class="col-md-6 col-lg-4">
                    <div class="p-20 dashCards dashcardHvr cursorPointer">
                        <h3 class="text-center">Customer Quotes &amp; Orders</h3>
                        <div class="text-center my-4 dashIcon">
                            <img src="./assets/img/customer-quotes-lg.svg" alt="Customer Quotes &amp; Orders"/>
                        </div>
                        <div class="row">
                            <div class="col-6 col-md-6">
                                <p>Open</p>
                                <h4>72</h4>
                            </div>
                            <div class="col-6 col-md-6 text-right">
                                <p>Drafts</p>
                                <h4>50</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="p-20 dashCards dashcardHvr cursorPointer">
                        <h3 class="text-center">Purchase Orders</h3>
                        <div class="text-center my-4 dashIcon">
                            <img src="./assets/img/purchase-orders-lg.svg" alt="Purchase Orders"/>
                        </div>
                        <div class="row">
                            <div class="col-6 col-md-6">
                                <p>Open</p>
                                <h4>72</h4>
                            </div>
                            <div class="col-6 col-md-6 text-right">
                                <p>Drafts</p>
                                <h4>50</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="p-20 dashCards dashcardHvr cursorPointer">
                        <h3 class="text-center">Inventory Management</h3>
                        <div class="text-center my-4 dashIcon">
                            <img src="./assets/img/inventory-lg.svg" alt="Inventory Management"/>
                        </div>
                        <div class="row">
                            <div class="col-6 col-md-6">
                                <p>Tasks Availble</p>
                                <h4>72</h4>
                            </div>
                            <div class="col-6 col-md-6 text-right">
                                <p>Requests Availble</p>
                                <h4>50</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="p-20 dashCards dashcardHvr cursorPointer">
                        <h3 class="text-center">Tools & Settings</h3>
                        <div class="text-center my-4">
                            <img src="./assets/img/settings-lg.svg" alt="Settings"/>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="p-20 dashCards dashcardHvr cursorPointer">
                        <h3 class="text-center">Reports</h3>
                        <div class="text-center my-4">
                            <img src="./assets/img/reports-lg.svg" alt="Reports"/>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="p-20 dashCards helpCard text-center">
                       <h4>Need Help?</h4>
                       <p class="mt-4">
                           <span>Genesys Support</span>
                           contact@nvknurseries.com
                       </p>
                       <p class="mt-4">
                           <span>Human Resources</span>
                           contact@nvknurseries.com
                       </p>
                       <p class="mt-2">Staff Directory <a href="javascript:;">Click here</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}}

export default Dashboard