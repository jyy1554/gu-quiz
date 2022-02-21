import React, { Component } from 'react';
import './css/index.css';

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div className='container'>
          <div className="left"></div>
          <div className="right"></div>
        </div>
      </div>
    );
  }
}

export default Header;