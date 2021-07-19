import React, {Component} from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import SupplierAccountReasons from './SupplierAccountReasons';
import SupplierCategories from './SupplierCategories';
import SupplierDeliveryLocation from './SupplierDeliveryLocation';



class SupplierSettingIndex extends Component {
    render() {
        return (
            <div>
                <div class="contentHeader bg-white d-flex justify-content-between align-items-center">
                    <h1 class="page-header mb-0"> 
                    {/* <img src="assets/img/product-green.svg" alt=""/> */}
                     Supplier Settings</h1>
                    {/* <div class="">
                        <a href="javascript:;">
                            <img src="assets/img/add.svg" alt=""/>
                        </a>
                        <a href="javascript:;" class="ml-2">
                            <img src="assets/img/preview.svg" alt=""/>
                        </a>
                        <a href="javascript:;" class="ml-2">
                            <img src="assets/img/print.svg" alt=""/>
                        </a>
                    </div> */}
                </div>
                <div class="px-md-3 mt-3">
                    <Tabs>
                        <TabList>
                            <Tab style={{bottom:"0px"}}>Supplier Account Reasons</Tab>
                            <Tab style={{bottom:"0px"}}>Supplier Delivery Locations</Tab> 
                            <Tab style={{bottom:"0px"}}>Supplier Categories</Tab> 
                                               
                        </TabList>
                      
                        <TabPanel>
                             <SupplierAccountReasons/>
                        </TabPanel>

                        <TabPanel>
                            <SupplierDeliveryLocation/>
                        </TabPanel>

                        <TabPanel>
                            <SupplierCategories/>
                        </TabPanel>

                    </Tabs>
                </div>
            </div>
        )
    }

}

export default SupplierSettingIndex;