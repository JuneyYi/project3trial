import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import PersistentDrawerLeft from './components/drawer/Drawer';
import Footer from './components/footer/Footer';
import Homepage from './components/homepage/Homepage';
import QuestionPage from './components/question/QuestionPage';


function App() {
  return (
    
    <Router>
      {/* hamburger */}
      <PersistentDrawerLeft/>

      <Route exact path="/" render={props => (
        // index page
      <Homepage/>
        // question page
      // <QuestionPage/>

      )}
      />
      <Footer/>

    </Router>
  );
}

export default App;
