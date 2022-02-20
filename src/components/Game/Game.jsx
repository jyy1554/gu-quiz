import React from 'react';
import './css/index.css';
import Button from '@mui/material/Button';
import MouseOverPopover from './components/MouseOverPopover';

function Game() {
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
            <input type='text' placeholder='지역구를 입력하세요' required />
            <button className='submit-btn' type='submit'>입력</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Game;