import React, { Component } from "react";
import Form from "./common/form";
import Joi from "joi-browser";

class LoginForm extends Form {
  state = {
    data: {
      username: "",
      password: "",
      name: ""
    },
    errors: {}
  };

  // prettier-ignore
  schema = {
    username: Joi.string().required().email().label("Username"),
    password: Joi.string().required().min(5).label("Password"),
    name: Joi.string().required().label("Name")
  };

  doSubmit = () => {
    console.log("Submitted.");
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-3" />
          <div className="col-6">
            <h1>Register</h1>
            <form onSubmit={this.handleSubmit}>
              { /* prettier-ignore */ }
              {this.renderInput("username", "Username")}
              {this.renderInput("password", "Password", "password")}
              {this.renderInput("name", "Name")}
              {this.renderButton("Register")}
            </form>
          </div>
          <div className="col-3" />
        </div>
      </div>
    );
  }
}

export default LoginForm;
