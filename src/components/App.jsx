import React, { Component } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Welcome from './Welcome/Welcome';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Welcome />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;