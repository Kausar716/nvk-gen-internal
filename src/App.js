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
import {createBrowserHistory} from 'history';
import {checkLogin} from "./actions/authAction";
import SignIn from './components/SignIn/index'
//import Sidebar from "./components/Sidebar";
import CommingSoon from './components/commingSoon'
import PlantSettings from './components/PlantSettings/PlantSettings';
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
            
    {/* {authKey.loggedIn ? <> */}
      <div id="page-container" className="fade page-sidebar-fixed page-header-fixed">
       


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
                  <Route path="/productManager">
                  <Nav />
                  <Left />
                    <ProductManager/>
                  </Route>

                  <Route path="/commingsoon">
                  <Nav />
                  <Left />
                <CommingSoon/>
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