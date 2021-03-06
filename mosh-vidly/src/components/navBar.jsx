import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = ({ user }) => {
  return (
    // <nav className="navbar navbar-expand-lg navbar-light bg-light ">
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link className="navbar-brand" to="#">
        #
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          { /* prettier-ignore */ }
          <li className="nav-item"><NavLink className="nav-link" to="/movies">Movies <span className="sr-only">(current)</span></NavLink></li>
          { /* prettier-ignore */ }
          <li className="nav-item"><NavLink className="nav-link" to="/customers">Customers</NavLink></li>
          { /* prettier-ignore */ }
          <li className="nav-item"><NavLink className="nav-link" to="/rentals">Rentals</NavLink></li>
        </ul>
      </div>
      <ul className="nav navbar-nav navbar-right">
        {!user && (
          <React.Fragment>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/register">
                Register
              </NavLink>
            </li>
          </React.Fragment>
        )}
        {user && (
          <React.Fragment>
            <li>
              <NavLink className="nav-link" to="/me">
                Hello {user.name} ({user.email})
              </NavLink>
            </li>
            <NavLink className="nav-link" to="#">
              |
            </NavLink>
            <NavLink className="nav-link" to="/logout">
              Logout
            </NavLink>
          </React.Fragment>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
