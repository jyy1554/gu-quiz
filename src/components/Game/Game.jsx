import React, { Component } from 'react';
import './css/index.css';
import Button from '@mui/material/Button';
import MouseOverPopover from './components/MouseOverPopover';

class Game extends Component {
  render() {
    return (
      <div className='game'>
        <div className='wrapper'>
          <span className="map-icon">
            <MouseOverPopover />
          </span>
          <div className='quiz-container'>
            <div className='quiz'>청와대</div>
            <div className='hidden-hint'>힌트 : 숨겨진 힌트</div>
            <form className='answer-container'>
              <div className='answer-inp'>
                <input type='text' placeholder='지역구를 입력해주세요.' required />
              </div>
              <Button variant="contained" size="large" type="submit">입력</Button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Game;