import * as React from "react";
import "./App.css";
import './include/mdb';
// import RegisterUser from "./components/register-user";
// import NewWorkout from "./components/new-workout";
// import ViewWorkout from "./components/view-workout";
import Login from "./components/login";
import Dashboard from "./components/dashboard/dashboard";
import { store } from "./store";
import { Provider } from "react-redux";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {HomeComponent} from "./components/home/home.component";

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
              <div id="main-content-container">
                  <Switch>
                      <Route path="/home" component={HomeComponent} />
                    <Route path="/dashboard" component={Dashboard} />
                      <Route path="/login" component={Login} />
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
