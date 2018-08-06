import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class mainNavigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link to="/" className="navbar-brand">
            Home
          </Link>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <Link to="/workouts" className="nav-link">
                Workouts
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/users" className="nav-link">
                Users
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
