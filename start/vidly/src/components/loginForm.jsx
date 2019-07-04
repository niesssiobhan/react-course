import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  doSubmit = () => {
    console.log("Submitted");
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;

//----------------Notes---------------//

// when we are validating the username and the passwrod we are first checking to make sure that they have a value or an input for both

// again we have object destructuring in the validate function with the {data} so that we dont have to have this.state.data... we can just have data.username or data.password. this make the code cleaner and easier to read

// return Object.keys(errors).length === 0 ? null : errors;
//in the validate function we are returning 'null' if there are no erros and there has been a value in both input fields

// (let item of result.error.details) errors[item.path[0]] = item.message; this means that we are looking through the details of the error message from Joi and find the key and value pairs that we are looking for

// we have set a disabled property to the button becasue we dont want thr user to try and click the buttonif thet have not filled out both input fields of the username and the password
