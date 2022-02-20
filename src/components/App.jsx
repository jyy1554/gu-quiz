import React, { Component } from 'react';
import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Welcome from './Welcome/Welcome';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="layout-container">
          <Header />
          <Welcome />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;