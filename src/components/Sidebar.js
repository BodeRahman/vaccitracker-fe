/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FolderPlus, Home, Users, Bell, User, LogOut } from 'react-feather';



//import { NavLink } from 'react-router-dom';
import logo from '../assets/img/sidebar-logo.png'

const Sidebar = () => {
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
        <a className="navbar-brand col-md-3 col-lg-4 me-4  px-3 fs-6 " href="#" >
          <img src={logo} alt="Vaccitracker logo" className='mx-4' style={{ height: '40px', width: '130px' }}  />
        </a>
        <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
       
        <div className="navbar-nav">
         
        </div>
      </header>
      <div className="container-fluid">
        <div className="row">
          <nav id="sidebarMenu" className="col-md-4 col-lg-4 d-md-block sidebar collapse" style={{backgroundColor: "#054689"}}>
            <div className="position-sticky pt-3 sidebar-sticky">
              <ul className="nav flex-column mt-4">
                <li className="nav-item">
                  <a className="nav-link text-white" aria-current="page" href="#">
                    <span className="align-text-bottom m-4"><Home /></span>
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    <span className="align-text-bottom m-4"><Users /></span>
                    Children
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    <span className="align-text-bottom m-4"><FolderPlus /></span>
                    Vaccination Wiki
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    <span className="align-text-bottom m-4"><Bell /></span>
                    Reminders
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    <span className="align-text-bottom m-4"><User /></span>
                    Profile
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    <span className="align-text-bottom m-4"><LogOut /></span>
                    Log out
                  </a>
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