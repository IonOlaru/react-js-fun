import React from "react";
import Form from "./common/form";
import auth from "../services/authService";
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

  doSubmit = async () => {
    try {
      const { data } = this.state;
      await auth.login(data.username, data.password);
      // this.props.history.push("/");
      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-3" />
          <div className="col-6">
            <h1>Login</h1>
            <form onSubmit={this.handleSubmit}>
              { /* prettier-ignore */ }
              {this.renderInput("username", "Username")}
              {this.renderInput("password", "Password", "password")}
              {this.renderButton("Save")}
            </form>
          </div>
          <div className="col-3" />
        </div>
      </div>
    );
  }
}

export default LoginForm;
