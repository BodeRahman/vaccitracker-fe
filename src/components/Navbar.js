/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png'
import LoginButton from './LoginButton';
import SignUpButton from './SignUpButton';

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-md bg-light "
      aria-label="Eighth navbar example"
    >
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Vaccitracker logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample07"
          aria-controls="navbarsExample07"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample07">
          <ul className="navbar-nav me-auto mb-2 mb-md-0"></ul>
          <div className="justify-content-end mb-1">
            <Link to="/login">
              <LoginButton text="Login"></LoginButton>
            </Link>
          </div>
          <div className="mb-1">
            <Link to="/signup">
              <SignUpButton
                class="btn"
                text="Get started for free"
                type="submit"
              ></SignUpButton>
            </Link>
          </div>
        </div>
      </div>
    </nav>
    
  );
}

export default Navbar