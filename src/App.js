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
import Dashboard from "./components/Dashboard";
import PlantManager from "./components/PlantManager/Index.js";
import ProductManager from "./components/ProductManager/Index.js";
import {createBrowserHistory} from 'history';
export const history = createBrowserHistory({forceRefresh: true})

function App() {
  return (
    
    <Router>
      <Provider store={store}>
      <div id="page-container" class="fade page-sidebar-fixed page-header-fixed">
        <Nav />
        <Left />
          <div id="content" class="content">
            <Switch>
              <Route path="/" exact>
                <Dashboard />
              </Route>
              <Route path="/plantManager">
                <PlantManager/>
              </Route>
              <Route path="/productManager">
                <ProductManager/>
              </Route>
            </Switch>
          </div>
      </div>

      </Provider>
    </Router>
  );
}

export default App;
