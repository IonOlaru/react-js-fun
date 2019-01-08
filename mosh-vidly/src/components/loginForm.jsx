import React, { Component } from "react";
import Input from "./common/input";
import Joi from "joi-browser";

class LoginForm extends Component {
  state = {
    account: {
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

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.account, this.schema, options);
    if (!error) return {};
    const errors = {};

    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;

    /*
    console.log(result);

    const errors = {};
    const { account } = this.state;

    if (account.username.trim() === "")
      errors.username = "Username is required";

    if (account.password.trim() === "")
      errors.password = "Password is required";

    return errors;
    */
  };

  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate();
    //    this.setState({ errors: errors || {} });
    this.setState({ errors });
    if (Object.keys(errors).length !== 0) return;
    console.log("Submitted.");
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema, { abortEarly: false });
    if (!error) return {};
    return error.details[0].message;
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);

    if (Object.keys(errorMessage).length !== 0)
      errors[input.name] = errorMessage;
    else delete errors[input.name];

    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors });
  };

  render() {
    const { account, errors } = this.state;
    return (
      <div>
        <div className="row">
          <div className="col-3" />
          <div className="col-6">
            <h1>Login</h1>
            <form onSubmit={this.handleSubmit}>
              { /* prettier-ignore */ }
              <Input name="username" value={account.username} label="Username" onChange={this.handleChange} error={errors.username} />
              { /* prettier-ignore */ }
              <Input name="password" value={account.password} label="Password" onChange={this.handleChange} error={errors.password} />
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
