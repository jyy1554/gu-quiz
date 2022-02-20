import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/index.css';
import MouseOverPopover from './components/MouseOverPopover';

function Game() {
  const navigate = useNavigate();
  const [score, setScore] = useState(0);
  const [userInput, setUserInput] = useState(undefined);

  const __goResult = useCallback(
    () => {
      navigate('/result');
    },
    [navigate],
  )

  const __doSubmit = useCallback(
    (e) => {
      e.preventDefault(); //새로고침되지 않기 위해
      if (userInput === '종로구') {
        setScore(score + 1);
      } else {
        __goResult();
      }
    }, [userInput, score, __goResult]
  );

  //특정값이 변할때마다 useEffect 내 함수를 동기 처리
  useEffect(() => {
    console.log(`userInput: ${userInput}`)
    console.log(`score: ${score}`);
  }, [score]);



  return (
    <div className='game'>
      <div className='wrapper'>
        <span className="map-icon">
          <MouseOverPopover />
        </span>
        <div className='quiz-container'>
          <div className='quiz'>청와대</div>
          <div className='hidden-hint'>힌트 : 숨겨진 힌트</div>
          <form className='answer-container' onSubmit={__doSubmit}>
            <input type='text' placeholder='지역구를 입력하세요'
              onBlur={(e) => setUserInput(e.target.value)} required />
            <button className='submit-btn' type='submit'>입력</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Game;