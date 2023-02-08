/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FolderPlus, Home, Users, Bell, User, LogOut } from "react-feather";
import { logout, reset } from "../features/auth/authSlice";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

import logo from "../assets/img/sidebar-logo.png";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <>
      <style>
        {`
          .navbar-brand {
            
          }
          
          .navbar .navbar-toggler {
              top: .45rem;
              right: 1rem;
          }
            
          .navbar .form-control {
              padding: .75rem 1rem;
          }

          
          
        `}
      </style>
      <header className="navbar sticky-top flex-md-nowrap p-0 mt-4">
        <NavLink
          className="navbar-brand col-md-3 col-lg-4 me-4  px-3 fs-6 "
          to="/"
        >
          <img
            src={logo}
            alt="Vaccitracker logo"
            className="mx-4"
            style={{ height: "40px", width: "130px" }}
          />
        </NavLink>
        <button
          className="navbar-toggler position-absolute d-md-none collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-nav"></div>
      </header>
      <div className="container-fluid">
        <div className="row">
          <nav
            id="sidebarMenu"
            className="col-md-4 col-lg-4 d-md-block sidebar collapse"
            style={{ backgroundColor: "#054689" }}
          >
            <div className="position-sticky pt-3 sidebar-sticky">
              <ul className="nav flex-column mt-4">
                <li className="nav-item">
                  <a
                    href="/temphome"
                    className="nav-link text-white transi"
                    aria-current="page"
                  >
                    <span className="align-text-bottom m-4">
                      <Home />
                    </span>
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link text-white transi"
                    exact
                    to="/children"
                  >
                    <span className="align-text-bottom m-4">
                      <Users />
                    </span>
                    Children
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link text-white transi"
                    exact
                    to="/vaccination-wiki"
                  >
                    <span className="align-text-bottom m-4">
                      <FolderPlus />
                    </span>
                    Vaccination Wiki
                  </NavLink>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-white transi"
                    href="/upcoming"
                  >
                    <span className="align-text-bottom m-4">
                      <Bell />
                    </span>
                    Reminders
                  </a>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link text-white transi"
                    exact
                    to="/profile"
                  >
                    <span className="align-text-bottom m-4">
                      <User />
                    </span>
                    Profile
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    exact
                    to="/"
                    className="nav-link text-white transi"
                    onClick={onLogout}
                  >
                    <span className="align-text-bottom m-4">
                      <LogOut />
                    </span>
                    Log out
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
