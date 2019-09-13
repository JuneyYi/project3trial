import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import PersistentDrawerLeft from './components/drawer/Drawer';
import Footer from './components/footer/Footer';


function App() {
  return (
    
    <Router>
      <Route exact path="/" render={props => (
      <PersistentDrawerLeft/>
      )}
      />
      <Footer/>

    </Router>
  );
}

export default App;
