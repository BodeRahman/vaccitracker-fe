import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from './pages/Home';
import React, { Fragment } from 'react';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import TempHome from './pages/TempHome';
import Reminders from './pages/Reminders';
import Child from './pages/Child';
import VaccinationWiki from './pages/VaccinationWiki';

import AddChildren from './pages/AddChildren'; 

import ProtectedRoutes from './config/ProtectedRoutes';
import AuthHome from './pages/AuthHome';

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/temphome" element={<TempHome />} />
          <Route path="/reminders" element={<Reminders />} />
          <Route path="/children" element={<Child />} />
          <Route path="/vaccination-wiki" element={<VaccinationWiki />} />
          <Route path="/addchildren" element={<AddChildren />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/home" element={<AuthHome />} />
          </Route>
        </Routes>
      </Router>
      <ToastContainer />
    </Fragment>
  )
}

export default App;
