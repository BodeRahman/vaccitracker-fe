/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-light " aria-label="Eighth navbar example">
      <div class="container">
        <a class="navbar-brand" href="#">Vaccitracker</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsExample07">
          <ul class="navbar-nav col-lg-6 justify-content-lg-center">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Contact us</a>
            </li>
          </ul>
          <div class="d-lg-flex col-lg-6 justify-content-lg-end">
            <a class="nav-link m-2" href="#">Login</a>
            <button class="btn btn-primary">Get Started for free</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar