import {combineReducers} from 'redux';
//import itemReducer from './itemReducer';
//import sideMenuItemReducer from './sideMenuItemReducer';
import authReducer from './authReducer';
import productReducer from './productReducer'
import { reducer as formReducer } from 'redux-form';
//import usersReducer from './userReduser'
//import plantSettingReducer from './plantSettingsReducers'
import categoryReducer from './categoryReducer'
import  plantManagerReducer from './plantManagerReducer'
import dashboardReducer from './dashboardReducer'

import supplierManagementReducer from './supplierManagementReducer'
import  attributesReducer from './attributesReducer'
import contactsSuppliers from './supplierContactReducer';
import AddressManagementReducerSM from './contactManagementReducerSM';
import dlistOfNumberReducer from './listOfNumbers';
import sideReducer from './sideMenuItemReducer'
import userReduser from './userReduser'
import userAccessReduser from './userAccessReduser'
import organizationReduser from './organizationSettingReducer'
import customerReducer from './customerReduser'
import plantSettingAttributeReducer from './plantSettingAttributeReducer';
import inventoryManagementReducer from './inventorymanagementReducer';
import productManufacturerReducer from './productManufacturerReducer';
import PurchaseOrderReducer from './purchaseOrderReducer';
// import supplierManagementReducer from './supplierManagementReducer';


export default combineReducers({
    authKey:authReducer,
    productData:productReducer,
    categoryData:categoryReducer,
    form: formReducer,
    plantData:plantManagerReducer,
    supplierData: supplierManagementReducer,
    dashboardData:dashboardReducer,
    contactsData:contactsSuppliers,
    addressSM: AddressManagementReducerSM,
    attributeData:attributesReducer,
    dlistOfNumber:dlistOfNumberReducer,
    sideMenu:sideReducer,
    userReduser:userReduser,
    userAccessReduser:userAccessReduser,
    organizationReduser:organizationReduser,
    customerReducer:customerReducer,
    plantSettingAttribute: plantSettingAttributeReducer,
    inventoryManagementReducer:inventoryManagementReducer,
    productManufacturerData:productManufacturerReducer,
    PurchaseOrderReducer:PurchaseOrderReducer
    
})