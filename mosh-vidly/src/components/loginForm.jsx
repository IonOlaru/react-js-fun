import React, { Component } from "react";
class LoginForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    console.log("Submitted.");
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-3" />
          <div className="col-6">
            <h1>Login</h1>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">User</label>
                <input id="username" type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input id="password" type="text" className="form-control" />
              </div>
              <button className="btn btn-primary">Login</button>
            </form>
          </div>
          <div className="col-3" />
        </div>
      </div>
    );
  }
}

export default LoginForm;
