import React, { Component } from "react";
import LoginFooter from "./loginFooter";
import LoginHeader from "./loginHeader";
import LoginMiddlePart from "./loginMiddilePart";

class Login extends Component {
  render() {
    return (
      <React.Fragment>
        <LoginHeader></LoginHeader>
        <LoginMiddlePart></LoginMiddlePart>
        <LoginFooter></LoginFooter>
      </React.Fragment>
    );
  }
}

export default Login;
