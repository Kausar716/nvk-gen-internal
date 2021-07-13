import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {Provider} from 'react-redux';
import store from './store.js';
import Left from "./components/Left";
import Nav from "./components/Nav";
import {connect} from "react-redux";
import Dashboard from "./components/Dashboard";
import PlantManager from "./components/PlantManager/Index.js";
import ProductManager from "./components/ProductManager/Index";
import ProductSettings from './components/ProductSettings/index'
import {createBrowserHistory} from 'history';
import {checkLogin} from "./actions/authAction";
import SignIn from './components/SignIn/SignInPage'
import UserManagement from './components/userManagement/index'
//import Sidebar from "./components/Sidebar";
import ComingSoon from './components/commingSoon'
import PlantSettings from './components/PlantSettings/PlantSettings';
import ForgotPassword from "./components/SignIn/ForgotPassword";
import RegisterNewUser from "./components/SignIn/RegisterNewUser";
import UserSettings from "./components/UserSettings/UserSettingsIndex";
import AddPlant from './components/PlantManager/AddPlant'
import AddProduct from "./components/ProductManager/AddProduct";
import OrganizationSettings from './components/toolsAndSetting/OrganizationSettings'
import StaffDirectory from './components/StaffDirectory'
import CustomerSettings from './components/CustomerSettings/CustomerSettingsIndex'
import SupplierSettingIndex from "./components/SupplierSettings/SupplierSettingIndex";
import CustomerLists from './components/CustomerSettings/CustomerLists'
import InventoryLists from "./components/inventoryManagement/InventoryLists";
import SupplierManagemnet from "./components/SupplierManagemnet";
import PurchaseOrderList from "./components/PurchaseOrder/PurchaseOrders";
import PurchaseOrder from "./components/PurchaseOrder/PurchaseOrderDetails";

export const history = createBrowserHistory({forceRefresh: true})


function App(props) {
  
  const authKey = props.authKey;
  
  console.log("authKey", authKey)
  console.log("loggedIn", authKey.loggedIn)
  return (
    <div >
    
    <Router>
    <Provider store={store}>

    <Route path="/" exact>
                    <SignIn />
                  </Route>

    <Route exact path="/forgot" >
                    <ForgotPassword />
    </Route>

    <Route exact path="/registerNewUser" >
                    <RegisterNewUser />
    </Route>

            

    
    {/* {authKey.loggedIn ? <> */}
      <div id="page-container" className={props.authKey.bdyClass}>

          <div id="content" className="content">


                <Switch>

                <Route path="/plantSettings">
                  <Nav />
                  <Left />
                    <PlantSettings/>
                  </Route>

                  <Route path="/Dashboard" exact>
                  <Nav />
                  <Left />
                    <Dashboard />
                  </Route>
                  <Route path="/plantManager">
                  <Nav />
                  <Left />
                    <PlantManager/>
                  </Route>
                  <Route path="/productsettings">
                  <Nav />
                  <Left />
                    <ProductSettings/>
                  </Route>
                  <Route path="/usermanagement">
                  <Nav />
                  <Left />
                    <UserManagement/>
                  </Route>

                  <Route path="/customerlisting">
                  <Nav />
                  <Left />
                    <CustomerLists/>
                  </Route>

                  
                  <Route path="/productManager">
                  <Nav />
                  <Left />
                    <ProductManager/>
                  </Route>


                  <Route path="/userSetting">
                  <Nav />
                  <Left />
                    <UserSettings/>
                  </Route>


                  <Route path="/customerSettings">
                  <Nav />
                  <Left />
                    <CustomerSettings/>
                  </Route>


                  <Route path="/supplierSettings">
                  <Nav />
                  <Left />
                    <SupplierSettingIndex/>
                  </Route>
                  <Route path="/supplierManagemnet">
                  <Nav />
                  <Left />
                    <SupplierManagemnet/>
                  </Route>

              <Route path="/addPlant">
              <Nav />
                  <Left />
                <AddPlant/>
              </Route>


              <Route path="/addProduct">
              <Nav />
                  <Left />
                <AddProduct/>
              </Route>


              <Route path="/staffDirectory">
              <Nav />
                <Left />
                <StaffDirectory/>
              </Route>

              <Route  path="/organizationSettings" >
              <Nav />
              <Left />
              <OrganizationSettings />
              </Route>
              <Route  path="/inventoryLists" >
              <Nav />
              <Left />
              <InventoryLists />
              </Route>
              <Route path="/PurchaseOrderList">
                  <Nav />
                  <Left />
                <PurchaseOrderList/>
              </Route>
              <Route path="/PurchaseOrder">
                  <Nav />
                  <Left />
                <PurchaseOrder/>
              </Route>
                  <Route path="/comingsoon">
                  <Nav />
                  <Left />
                <ComingSoon/>
              </Route>

                </Switch>
               
          </div>
      </div>

      {/* </>:<SignIn/>} */}
      </Provider>
    </Router>
   

    </div>
  );
}



const mapStateToProps = (state)=> ({
  authKey:state.authKey,
  


})
export default connect(mapStateToProps,{checkLogin})(App)

//export default App;



// export const RootApp= ()=>{
//   return(
//     <div>
//           <Provider store={store}>
//               <Router>
//                 <App />
//               </Router>
//         </Provider>
//     </div>
//   )
// }