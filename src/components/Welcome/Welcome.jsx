import React, { Component } from "react";
import Button from '@mui/material/Button';
import MouseOverPopover from './components/MouseOverPopover';
import './css/index.css';

class Welcome extends Component {
  render() {
    return (
      <div className="welcome">
        <div className="wrapper">
          <span className="info-icon">
            <MouseOverPopover />
          </span>
          <div className="title-container">
            <div className="main-title">구 이름 맞추기</div>
            <div className="sub-title">누가누가 서울 고수인가?!</div>
            <div className="button-container">
              <Button variant="contained" size="large">게임시작</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;

