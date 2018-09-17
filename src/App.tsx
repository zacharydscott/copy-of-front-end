import * as React from "react";
import "./App.css";
// import RegisterUser from "./components/register-user";
// import Login from "./components/login";
// import NewWorkout from "./components/new-workout";
import logo from "./logo.svg";
import { store } from "./store";
import { Provider } from "react-redux";
import ViewWorkout from "./components/view-workout";

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <ViewWorkout/>
          {/* <NewWorkout /> */}
          <p className="App-intro">
            To get started, edit <code>src/App.tsx</code> and save to reload.
          </p>
        </div>
      </Provider>
    );
  }
}

export default App;
