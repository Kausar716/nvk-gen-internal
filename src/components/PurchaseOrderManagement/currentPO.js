import React, { useEffect, useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import DatePicker from 'react-date-picker';
import {connect} from "react-redux";
import TablePagination from '../Pagination/index';
import {getAllCustomer,handleRadioFilter,handleSearchFilter,handleAlphabetFilter, 
     handleAplhabetFilterBySN,
     handlePurchaseOrderFilert,
     setSupplierToAddPo,handleOrderDetailsInput,addPo,getAddToOrderList,
    getPoSupplierFilter,getPoJobDescription,getPoOrderFilter,getPoPlantProductFilter,getPoSkuFilter,getSupplierOrderFilter

} from "../../actions/purchaseOrderManagementAction";
// import {getAddToOrderList} from "../../actions/supplierManagementAction"
// import initialDetails from './initialDetails';
// import './style.css'
import '../PlantManager/index.css'
import { Link } from "react-router-dom";
import Autosuggest from 'react-autosuggest';
import PurchaseOrderTable from "./purchaseOrderTable"
import ActionModal from '../Modal/ActionModal';



 const CurrentPo = (props) =>{
    const [value, onChange] = useState(new Date());
    useEffect(()=>{
        // props.getAddToOrderList()
    },[])







// console.log(props)
    return (
        <div class="bg-white px-3 py-3 mt-2">
        <form>
            <div class="row">
                <div class="col-md-8">
                    <h2>Currently on thissfvzsfd Purchase Order</h2>
                </div>
                <div class="col-md-4 text-right">
                    <a href="#" class="btn btnGrey">
                        <span class="d-flex align-items-center text-left">
                            <img src="assets/img/addSegment-ic-btn.svg" alt=""/>
                            <span class="ml-2">Add Segment</span>
                        </span>
                    </a>
                    <a href="#" class="btn btnGrey ml-2">
                        <span class="d-flex align-items-center text-left">
                            <img src="assets/img/order-ic-btn.svg" alt=""/>
                            <span class="ml-2">Order</span>
                        </span>
                    </a>
                </div>
            </div>
            <hr/>
            <div class="row mt-3 align-items-center">
                <div class="col-md-12">
                    
                    <div class="form-group row">
                        <div class="col-md-12 table-responsive">
                            <table class="table table-striped purchaseOdrTbl" border="0" width="100%">
                                <thead>
                                    <tr>
                                        <th width="4%" class="">No</th>
                                        <th width="20%" class="">Plant Name/Original SKU</th>
                                        <th width="10%" class="text-center">Size</th>
                                        <th width="10%" class="text-center">Added</th>
                                        <th width="6%" class="text-center">Disc %</th>
                                        <th width="8%" class="text-center">Allocate</th>
                                        <th width="6%" class="text-center">QTY</th>
                                        <th width="6%" class="text-center">Royalty</th>
                                        <th width="7%" class="text-center">NVk Price</th>
                                        <th width="7%" class="text-center">Each Price</th>
                                        <th width="8%" class="text-center">Total</th>
                                        <th width="8%" class="text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td colspan="12" class="p-0">
                                            <table class="table table-striped mb-0" width="100%">
                                                <tr class="movePanel">
                                                    <td colspan="12">
                                                        <div class="row">
                                                            <div class="col-md-8">
                                                                <a href="" class="mr-3">
                                                                    <i class="fas fa-expand-arrows-alt text-dark"></i>
                                                                </a>
                                                                <strong>West Wing Front Gardens</strong>
                                                            </div>
                                                            <div class="col-md-4 text-right">
                                                                <a href="#" class="">
                                                                    <img src="assets/img/close-ic-grey.svg" alt=""/>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                {/* Main Content Row starts here */}
                                                <tr class="tblBgWhite">
                                                    <table class="table table-striped table-no-border" width="100%">
                                                        <tr class="topTitleRow">
                                                            <td>1</td>
                                                            <td  colspan="11">Diervilla x Kodiak® Orange ('G2X88544') - Kodiak® Orange Honeysuckle</td>
                                                        </tr>
                                                        <tr>
                                                            <td width="4%"></td>
                                                            <td width="20%">
                                                                <select class="form-control plantNameSel">
                                                                    <option>43-TF-30-1G</option>
                                                                    <option>Option 1</option>
                                                                    <option>Option 2</option>
                                                                </select>
                                                            </td>
                                                            <td width="10%" class="text-center">150CM 15 gal</td>
                                                            <td width="10%" class="text-center">19/05/2020</td>
                                                            <td width="6%" class="text-center">
                                                                <input type="text" class="form-control w-60 text-right" placeholder="" value="2.0"/>
                                                            </td>
                                                            <td width="8%" class="text-center">
                                                                <select class="form-control w-80">
                                                                    <option>Sales</option>
                                                                    <option>Option 1</option>
                                                                    <option>Option 2</option>
                                                                </select>
                                                            </td>
                                                            <td width="6%" class="text-center">
                                                                <input type="text" class="form-control w-60 text-right" placeholder="" value="10"/>
                                                            </td>
                                                            <td width="6%" class="text-center">0.75</td>
                                                            <td width="7%" class="text-center">9.55</td>
                                                            <td width="7%" class="text-center">
                                                                <input type="text" class="form-control w-60 text-right mx-auto text-green" placeholder="" value="8.25"/>
                                                                <div class="">
                                                                    <span class="mr-2">Disc</span>
                                                                    <span>8.25</span>
                                                                </div>
                                                            </td>
                                                            <td width="8%" class="text-center">
                                                                <span class="text-green controlLabel text-right">90.00</span>
                                                                <div class="">
                                                                    <span class="mr-2">Disc</span>
                                                                    <span>8.25</span>
                                                                </div>
                                                            </td>
                                                            <td width="8%" class="text-center actionTd">
                                                                <div class="d-flex justify-content-center">
                                                                    <a href="#" class="">
                                                                        <img src="assets/img/copy-ic-blue.svg" alt=""/>
                                                                    </a>
                                                                    <div class="dropdown actionDropdown  ml-2">
                                                                        <a href="#" class="dropdown-toggle" id="actionDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                            <i class="fas fa-ellipsis-v"></i>
                                                                        </a>
                                                                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="actionDropdown">
                                                                            <a href="#" class="dropdown-item splitBg" type="button"><span><img src="assets/img/split-ic.svg"/></span> Split</a>
                                                                            <a href="#" class="dropdown-item substituteBg" type="button"><span><img src="assets/img/substitute-ic.svg"/></span> Substitute</a>
                                                                            <a href="#" class="dropdown-item deleteBg" type="button"><span><img src="assets/img/delete-ic.svg"/></span> Delete</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr class="trBgWhite ">
                                                            <td width="4%"></td>
                                                            <td colspan="12"> 
                                                                <img src="assets/img/enter-arrow-red.svg" alt=""/>
                                                                <span class="ml-2">Substitution for Buxus microphla Peergold (Golden Dream Boxwood): 645-1G</span>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </tr>
                                                <tr class="tblBgGrey">
                                                    <table class="table table-striped table-no-border" width="100%">
                                                        <tr class="topTitleRow">
                                                            <td>2</td>
                                                            <td  colspan="11">Diervilla x Kodiak® Orange ('G2X88544') - Kodiak® Orange Honeysuckle</td>
                                                        </tr>
                                                        <tr>
                                                            <td width="4%"></td>
                                                            <td width="20%">
                                                                <select class="form-control plantNameSel">
                                                                    <option>43-TF-30-1G</option>
                                                                    <option>Option 1</option>
                                                                    <option>Option 2</option>
                                                                </select>
                                                            </td>
                                                            <td width="10%" class="text-center">150CM 15 gal</td>
                                                            <td width="10%" class="text-center">19/05/2020</td>
                                                            <td width="6%" class="text-center">
                                                                <input type="text" class="form-control w-60 text-right" placeholder="" value="2.0"/>
                                                            </td>
                                                            <td width="8%" class="text-center">
                                                                <select class="form-control w-80">
                                                                    <option>Sales</option>
                                                                    <option>Option 1</option>
                                                                    <option>Option 2</option>
                                                                </select>
                                                            </td>
                                                            <td width="6%" class="text-center">
                                                                <input type="text" class="form-control w-60 text-right" placeholder="" value="10"/>
                                                            </td>
                                                            <td width="6%" class="text-center">0.75</td>
                                                            <td width="7%" class="text-center">9.55</td>
                                                            <td width="7%" class="text-center">
                                                                <input type="text" class="form-control w-60 text-right mx-auto text-green" placeholder="" value="8.25"/>
                                                                <div class="">
                                                                    <span class="mr-2">Disc</span>
                                                                    <span>8.25</span>
                                                                </div>
                                                            </td>
                                                            <td width="8%" class="text-center">
                                                                <span class="text-green controlLabel text-right">90.00</span>
                                                                <div class="">
                                                                    <span class="mr-2">Disc</span>
                                                                    <span>8.25</span>
                                                                </div>
                                                            </td>
                                                            <td width="8%" class="text-center actionTd">
                                                                <div class="d-flex justify-content-center">
                                                                    <a href="#" class="">
                                                                        <img src="assets/img/copy-ic-green.svg" alt=""/>
                                                                    </a>
                                                                    <div class="dropdown actionDropdown  ml-2">
                                                                        <a href="#" class="dropdown-toggle" id="actionDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                            <i class="fas fa-ellipsis-v"></i>
                                                                        </a>
                                                                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="actionDropdown">
                                                                            <a href="#" class="dropdown-item splitBg" type="button"><span><img src="assets/img/split-ic.svg"/></span> Split</a>
                                                                            <a href="#" class="dropdown-item substituteBg" type="button"><span><img src="assets/img/substitute-ic.svg"/></span> Substitute</a>
                                                                            <a href="#" class="dropdown-item deleteBg" type="button"><span><img src="assets/img/delete-ic.svg"/></span> Delete</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </tr>
                                                <tr class="tblBgWhite">
                                                    <table class="table table-striped table-no-border" width="100%">
                                                        <tr class="topTitleRow">
                                                            <td>3</td>
                                                            <td  colspan="11">Diervilla x Kodiak® Orange ('G2X88544') - Kodiak® Orange Honeysuckle</td>
                                                        </tr>
                                                        <tr>
                                                            <td width="4%"></td>
                                                            <td width="20%">
                                                                <select class="form-contro plantNameSel">
                                                                    <option>43-TF-30-1G</option>
                                                                    <option>Option 1</option>
                                                                    <option>Option 2</option>
                                                                </select>
                                                            </td>
                                                            <td width="10%" class="text-center">150CM 15 gal</td>
                                                            <td width="10%" class="text-center">19/05/2020</td>
                                                            <td width="6%" class="text-center">
                                                                <input type="text" class="form-control w-60 text-right" placeholder="" value="2.0"/>
                                                            </td>
                                                            <td width="8%" class="text-center">
                                                                <select class="form-control w-80">
                                                                    <option>Sales</option>
                                                                    <option>Option 1</option>
                                                                    <option>Option 2</option>
                                                                </select>
                                                            </td>
                                                            <td width="6%" class="text-center">
                                                                <input type="text" class="form-control w-60 text-right" placeholder="" value="10"/>
                                                            </td>
                                                            <td width="6%" class="text-center">0.75</td>
                                                            <td width="7%" class="text-center">9.55</td>
                                                            <td width="7%" class="text-center">
                                                                <input type="text" class="form-control w-60 text-right mx-auto text-green" placeholder="" value="8.25"/>
                                                                <div class="">
                                                                    <span class="mr-2">Disc</span>
                                                                    <span>8.25</span>
                                                                </div>
                                                            </td>
                                                            <td width="8%" class="text-center">
                                                                <span class="text-green controlLabel text-right">90.00</span>
                                                                <div class="">
                                                                    <span class="mr-2">Disc</span>
                                                                    <span>8.25</span>
                                                                </div>
                                                            </td>
                                                            <td width="8%" class="text-center actionTd">
                                                                <div class="d-flex justify-content-center">
                                                                    <a href="#" class="">
                                                                        <img src="assets/img/copy-ic-blue.svg" alt=""/>
                                                                    </a>
                                                                    <div class="dropdown actionDropdown  ml-2">
                                                                        <a href="#" class="dropdown-toggle" id="actionDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                            <i class="fas fa-ellipsis-v"></i>
                                                                        </a>
                                                                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="actionDropdown">
                                                                            <a href="#" class="dropdown-item splitBg" type="button"><span><img src="assets/img/split-ic.svg"/></span> Split</a>
                                                                            <a href="#" class="dropdown-item substituteBg" type="button"><span><img src="assets/img/substitute-ic.svg"/></span> Substitute</a>
                                                                            <a href="#" class="dropdown-item deleteBg" type="button"><span><img src="assets/img/delete-ic.svg"/></span> Delete</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </tr>
                                                <tr class="tblBgGrey">
                                                    <table class="table table-striped table-no-border" width="100%">
                                                        <tr class="topTitleRow">
                                                            <td>4</td>
                                                            <td  colspan="11">Diervilla x Kodiak® Orange ('G2X88544') - Kodiak® Orange Honeysuckle</td>
                                                        </tr>
                                                        <tr>
                                                            <td width="4%"></td>
                                                            <td width="20%">
                                                                <select class="form-control  plantNameSel">
                                                                    <option>43-TF-30-1G</option>
                                                                    <option>Option 1</option>
                                                                    <option>Option 2</option>
                                                                </select>
                                                            </td>
                                                            <td width="10%" class="text-center">150CM 15 gal</td>
                                                            <td width="10%" class="text-center">19/05/2020</td>
                                                            <td width="6%" class="text-center">
                                                                <input type="text" class="form-control w-60 text-right" placeholder="" value="2.0"/>
                                                            </td>
                                                            <td width="8%" class="text-center">
                                                                <select class="form-control w-80">
                                                                    <option>Sales</option>
                                                                    <option>Option 1</option>
                                                                    <option>Option 2</option>
                                                                </select>
                                                            </td>
                                                            <td width="6%" class="text-center">
                                                                <input type="text" class="form-control w-60 text-right" placeholder="" value="10"/>
                                                            </td>
                                                            <td width="6%" class="text-center">0.75</td>
                                                            <td width="7%" class="text-center">9.55</td>
                                                            <td width="7%" class="text-center">
                                                                <input type="text" class="form-control w-60 text-right mx-auto text-green" placeholder="" value="8.25"/>
                                                                <div class="">
                                                                    <span class="mr-2">Disc</span>
                                                                    <span>8.25</span>
                                                                </div>
                                                            </td>
                                                            <td width="8%" class="text-center">
                                                                <span class="text-green controlLabel text-right">90.00</span>
                                                                <div class="">
                                                                    <span class="mr-2">Disc</span>
                                                                    <span>8.25</span>
                                                                </div>
                                                            </td>
                                                            <td width="8%" class="text-center actionTd">
                                                                <div class="d-flex justify-content-center">
                                                                    <a href="#" class="">
                                                                        <img src="assets/img/copy-ic-green.svg" alt=""/>
                                                                    </a>
                                                                    <div class="dropdown actionDropdown  ml-2">
                                                                        <a href="#" class="dropdown-toggle" id="actionDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                            <i class="fas fa-ellipsis-v"></i>
                                                                        </a>
                                                                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="actionDropdown">
                                                                            <a href="#" class="dropdown-item splitBg" type="button"><span><img src="assets/img/split-ic.svg"/></span> Split</a>
                                                                            <a href="#" class="dropdown-item substituteBg" type="button"><span><img src="assets/img/substitute-ic.svg"/></span> Substitute</a>
                                                                            <a href="#" class="dropdown-item deleteBg" type="button"><span><img src="assets/img/delete-ic.svg"/></span> Delete</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-6"></div>
                        <div class="col-md-12 col-lg-6">
                            <div class="greyBox px-3 py-3 totalSec">
                                <div class="row">
                                    <div class="col-md-8 text-right">
                                        <label >Subtotal <span>$</span></label>
                                    </div>
                                    <div class="col-md-2 text-right">
                                        <label >554.30</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-8 text-right">
                                        <label >Discounts <span>$</span></label>
                                    </div>
                                    <div class="col-md-2 text-right">
                                        <label >-9.80</label>
                                    </div>
                                </div>
                                <div class="row text-green subTotLbl">
                                    <div class="col-md-8 text-right">
                                        <label >Subtotal after Discounts <span>$</span></label>
                                    </div>
                                    <div class="col-md-2 text-right">
                                        <label >544.50</label>
                                    </div>
                                </div>
                                <div class="row mb-2">
                                    <div class="col-md-8 d-flex justify-content-end">
                                        <label class="mb-0 d-flex align-items-center">Adjustments  <input type="text" class="form-control mx-2 wid240" placeholder="Add Notes"/> <span>$</span></label>
                                    </div>
                                    <div class="col-md-2 text-right">
                                        <input type="text" class="form-control mx-2 text-right" placeholder="" value="0.00"/>
                                    </div>
                                </div>
                                <div class="row mb-2">
                                    <div class="col-md-8 d-flex justify-content-end">
                                        <label class="mb-0 d-flex align-items-center">Shipping  <input type="text" class="form-control mx-2 wid240" placeholder="Add Notes"/> <span>$</span></label>
                                    </div>
                                    <div class="col-md-2 text-right">
                                        <input type="text" class="form-control mx-2 text-right" placeholder="" value="0.00"/>
                                    </div>
                                </div>
                                <div class="row subTotLbl">
                                    <div class="col-md-8 text-right">
                                        <label>Order Total (CAD) W/O taxes <span>$</span></label>
                                    </div>
                                    <div class="col-md-2 text-right">
                                        <label class="f-s-24">544.50</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
    )
}


const mapStateToProps = (state)=> ({ 
 
    state:state
    

})
export default connect(mapStateToProps,{

    getAddToOrderList,
    setSupplierToAddPo,
    handleOrderDetailsInput,addPo




})(CurrentPo)


