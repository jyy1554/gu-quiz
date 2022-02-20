import React, { Component } from 'react';
import './css/index.css';

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div className='ad-container'>
          <div className="ad-left"></div>
          <div className="ad-right"></div>
        </div>
      </div>
    );
  }
}

export default Header;