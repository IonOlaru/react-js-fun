import React, { Component } from "react";
import Input from "./common/input";
import Form from "./common/form";
import Joi from "joi-browser";

class LoginForm extends Form {
  state = {
    data: {
      username: "",
      password: ""
    },
    errors: {}
  };

  // prettier-ignore
  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password")
  };

  // usernameRef = React.createRef();

  componentDidMount() {
    // this.username.current.focus();
  }

  doSubmit = () => {
    console.log("Submitted.");
  };

  render() {
    const { data, errors } = this.state;
    return (
      <div>
        <div className="row">
          <div className="col-3" />
          <div className="col-6">
            <h1>Login</h1>
            <form onSubmit={this.handleSubmit}>
              { /* prettier-ignore */ }
              <Input name="username" value={data.username} label="Username" onChange={this.handleChange} error={errors.username} />
              { /* prettier-ignore */ }
              <Input name="password" value={data.password} label="Password" onChange={this.handleChange} error={errors.password} />
              {/* prettier-ignore  */}
              <button disabled={Object.keys(this.validate()).length > 0} className="btn btn-primary">Login</button>
            </form>
          </div>
          <div className="col-3" />
        </div>
      </div>
    );
  }
}

export default LoginForm;
