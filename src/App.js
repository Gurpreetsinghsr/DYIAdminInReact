import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./components/login/login";
import DefaultPage from "./components/login/defaultPage";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/default" component={DefaultPage}></Route>
        <Route path="/" exact component={Login}></Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
