import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './css/index.css';

function Result() {
  const navigate = useNavigate();
  const score = useSelector(state => state.score);
  const dispatch = useDispatch();

  const __goMain = useCallback(
    () => {
      dispatch({
        type:'START'
      });
      navigate('/');
    },
    [dispatch, navigate],
  )

  return (
    <div className='result'>
      <div className='wrapper'>
        <div className='result-container'>
          <div className='score-container'>
            <div className='tell-score'>당신의 점수는</div>
            <div className='score'>{score}점!</div>
            <div className='msg'>한번 더 고고?</div>
          </div>
          <div className='goback-btn' onClick={__goMain}>
            <button className='go-welcome'>메인으로</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;