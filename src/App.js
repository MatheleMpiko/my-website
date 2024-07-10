import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Aboutus from './pages/Aboutus';
import Features from './pages/Features';
import Contactus from './pages/Contactus';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact component={Home} />
          <Route path='/aboutus' component={Aboutus} />
          <Route path='/features' component={Features} />
          <Route path='/contactus' component={Contactus} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
