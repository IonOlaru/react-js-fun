import React from "react";
import Form from "./common/form";
import { getGenres } from "../services/fakeGenreService";
import { getMovie, saveMovie } from "../services/fakeMovieService";
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
    title: Joi.string().required().label("Title"),
    genreId: Joi.string().required().label("Genre"),
    numberInStock: Joi.number().integer().min(0).max(100).required().label("Number in Stock"),
    dailyRentalRate: Joi.number().min(0).max(10).required().label("Rate"),
    fake: Joi.string()
  };

  componentDidMount() {
    const allGenres = getGenres();
    this.setState({ allGenres });

    const movieId = this.props.match.params.id;
    if (movieId === "new") return;

    const movie = getMovie(movieId);
    if (!movie) return this.props.history.replace("/not-found");

    this.setState({ data: this.mapToViewModel(movie) });
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

  doSubmit() {
    saveMovie(this.state.data);
    this.props.history.push("/movies");
  }

  render() {
    const { match } = this.props;
    return (
      <React.Fragment>
        <h1>MovieForm <i>{"id:" + match.params.id}</i></h1>
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
