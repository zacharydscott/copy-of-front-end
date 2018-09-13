import * as React from 'react';
import './App.css';
import './include/mdb';
import {HomeComponent} from "./components/home/home.component";
import {Route, Switch} from "react-router";
import {BrowserRouter} from "react-router-dom";


class App extends React.Component {
  public render() {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <div id="main-content-container">
                        <Switch>
                            <Route path="/home" component={HomeComponent} />
                            <Route component={HomeComponent} />
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        </div>

    );
  }
}

export default App;
