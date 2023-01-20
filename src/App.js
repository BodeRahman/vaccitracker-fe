import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import React, { Fragment } from 'react';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Home />
      <Newsletter />
      <Footer />
    </Fragment>
  )
}

export default App;
