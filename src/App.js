import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import React, { Fragment } from 'react';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
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
          <Route element={<ProtectedRoutes />}>
            <Route path="/home" element={<AuthHome />} />
          </Route>
        </Routes>
      </Router>
    </Fragment>
  )
}

export default App;
