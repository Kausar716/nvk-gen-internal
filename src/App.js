import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Left from "./components/Left";
import Nav from "./components/Nav";
import Dashboard from "./components/Dashboard";
import PlantManager from "./components/PlantManager";
import ProductManager from "./components/ProductManager";

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
