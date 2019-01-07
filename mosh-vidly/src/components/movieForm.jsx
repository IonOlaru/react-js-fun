import React, { ReactFragment, Component } from "react";

const MovieForm = ({ match, history }) => {
  return (
    <React.Fragment>
      <h1>MovieForm</h1>
      <div>
        {match.params.id}
        <br />
        <button
          className="btn btn-primary"
          onClick={() => history.push("/movies")}
        >
          Save
        </button>
      </div>
    </React.Fragment>
  );
};

export default MovieForm;
