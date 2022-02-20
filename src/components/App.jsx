import React, { Component } from 'react';
import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Welcome from './Welcome/Welcome';
class App extends Component {
  render() {
    return (
      <div className="App">
        <head>
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        </head>
        <div class="layout-container">
          <Header />
          <Welcome />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;