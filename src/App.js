import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import React, { Fragment } from 'react';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import TempHome from './pages/TempHome';


function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/temphome" element={<TempHome />} />
        </Routes>
      </Router>
    </Fragment>
  )
}

export default App;
