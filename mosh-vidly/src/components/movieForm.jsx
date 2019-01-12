import React from "react";
import Form from "./common/form";
import { getGenres } from "../services/genreService";
import { getMovie, saveMovie } from "../services/movieService";
import Joi from "joi-browser";

class MovieForm extends Form {
  state = {
    allGenres: [],
    data: {
      title: "",
      genreId: "",
      numberInStock: "",
      dailyRentalRate: ""
    },
    errors: {}
  };

  // prettier-ignore
  schema = {
    _id: Joi.string(),
    title: Joi.string().min(5).required().label("Title"),
    genreId: Joi.string().required().label("Genre"),
    numberInStock: Joi.number().integer().min(0).max(100).required().label("Number in Stock"),
    dailyRentalRate: Joi.number().min(0).max(10).required().label("Rate"),
    fake: Joi.string()
  };

  async populateGenres() {
    const { data: allGenres } = await getGenres();
    this.setState({ allGenres });
  }

  async populateMovie() {
    const movieId = this.props.match.params.id;
    if (movieId === "new") return;

    try {
      const { data: movie } = await getMovie(movieId);
      this.setState({ data: this.mapToViewModel(movie) });
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        return this.props.history.replace("/not-found");
    }
  }

  async componentDidMount() {
    await this.populateGenres();
    await this.populateMovie();
  }

  mapToViewModel(movie) {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate
    };
  }

  async doSubmit() {
    await saveMovie(this.state.data);
    this.props.history.push("/movies");
  }

  render() {
    const { match } = this.props;
    return (
      <React.Fragment>
        <h1>
          MovieForm <i>{"id:" + match.params.id}</i>
        </h1>
        <div>
          { /* prettier-ignore */ }
          <form onSubmit={this.handleSubmit}>
              { /* prettier-ignore */ }
              {this.renderInput("title", "Title")}
              {this.renderDropDown("genreId", "Genre", this.state.allGenres)}
              {this.renderInput("numberInStock", "Number in Stock")}
              {this.renderInput("dailyRentalRate", "Rate")}
              {this.renderButton("Save")}
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default MovieForm;
