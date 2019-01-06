import React, { Component } from "react";
import Like from "./common/like";

const MoviesTable = props => {
  const { movies, onDelete, onLike, currentPage, pageSize } = props;

  return (
    <table className="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Genre</th>
          <th>Stock</th>
          <th>Rate</th>
          <th />
          <th />
        </tr>
      </thead>
      <tbody>
        {movies.map((m, index) => (
          <tr key={m._id}>
            <td>
              <b>{(currentPage - 1) * pageSize + index + 1}</b>
            </td>
            <td>{m.title}</td>
            <td>{m.genre.name}</td>
            <td>{m.numberInStock}</td>
            <td>{m.dailyRentalRate}</td>
            <td>
              <Like liked={m.liked} onClick={() => onLike(m)} />
            </td>
            <td>
              <button
                onClick={() => onDelete(m)}
                className="btn btn-danger btn-sm"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MoviesTable;
