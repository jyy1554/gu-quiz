import React from 'react';
import './css/index.css';

function Result() {
  return (
    <div className='result'>
      <div className='wrapper'>
        <div className='result-container'>
          <div className='score-container'>
            <div className='tell-score'>당신의 점수는</div>
            <div className='score'>1점!</div>
            <div className='msg'>아이쿠 손이 미끄러졌네ㅠ.ㅠ</div>
          </div>
          <div className='goback-btn'>
            <button className='go-welcome'>메인으로</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;