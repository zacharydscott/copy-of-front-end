import * as React from "react";
import './include/bootstrap';
import './include/mdb';
import "./App.css";
import Login from "./components/login";
import { store } from "./store";
import { Provider } from "react-redux";
import {HomeComponent} from "./components/home/home.component";
import {Route, Switch} from "react-router";
import {BrowserRouter} from "react-router-dom";

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
          <BrowserRouter>
              <div>
                  <div id="main-content-container">
                      <Switch>
                          <Route path="/login" component={Login} />
                          <Route path="/home" component={HomeComponent} />
                          <Route component={HomeComponent} />
                      </Switch>
                  </div>
              </div>
          </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
