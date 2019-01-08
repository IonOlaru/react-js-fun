import React from "react";
import Form from "./common/form";

class MovieForm extends Form {
  state = {
    data: {},
    errors: {}
  };

  schema = {};

  componentDidMount() {
    console.log(this);
  }

  doSubmit() {
    this.props.history.push("/movies");
  }

  render() {
    const { match, newMovie } = this.props;
    return (
      <React.Fragment>
        <h1>MovieForm</h1>
        <div>
          <i>{newMovie === "true" ? "New" : match.params.id}</i>
          <br />
          { /* prettier-ignore */ }
          <form onSubmit={this.handleSubmit}>
              { /* prettier-ignore */ }
              {this.renderInput("title", "Title")}
              {this.renderInput("numberInStock", "Number in Stock")}
              {this.renderInput("rate", "Rate")}
              {this.renderButton("Save")}
              <select className="form-control">
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
              </select>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default MovieForm;
