import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/index.css';
import MouseOverPopover from './components/MouseOverPopover';
import ShowScore from './containers/ShowScore';
import { useDispatch } from 'react-redux';

function Game() {
  const navigate = useNavigate();
  const dispatch = useDispatch(); //점수를 Result 컴포넌트에 넘겨주기 위해
  const [text, setText] = useState('');

  const [gus, setGus] = useState([]);
  const [display, setDisplay] = useState([]);

  const items = [
    {
      name: '청와대',
      src: "assets/game/청와대.jpg",
      answer: '종로구'
    },
    {
      name: '올림픽공원',
      src: "assets/game/올림픽공원.jpg",
      answer: '송파구'
    },
    {
      name: '63빌딩',
      src: "assets/game/63빌딩.jpg",
      answer: '영등포구'
    },
    {
      name: '상암MBC',
      src: "assets/game/상암MBC.jpg",
      answer: '마포구'
    },
  ]

  useEffect(() => {
    //자동으로 랜덤하게 섞어주기
    items.sort(() => Math.random() - 0.5);
    setDisplay(items[0]);
    setGus(items.slice(1));
  }, [])

  const __goResult = useCallback(
    () => {
      navigate('/result');
    },
    [navigate],
  )

  const __doSubmit = useCallback(
    (e) => {
      e.preventDefault(); //새로고침되지 않기 위해

      if (text === display.answer && gus.length) {
        dispatch({
          type : 'CORRECT'
        });
        const _gus = gus.slice(1);
        setDisplay(gus[0]);
        setGus(_gus);
        console.log(`gus length: ${gus.length}`);
      } else {
        if (text === display.answer) {
          dispatch({
            type : 'CORRECT'
          });
        }
        __goResult();
      }
      setText('');
    }, [text, display, gus, dispatch, __goResult]
  );


  return (
    <div className='game'>
      <div className='wrapper'>
        <img className='gu-img' src={display.src} alt='사진' />
        <div className="score-container">
          <ShowScore />
        </div>
        <span className="map-icon">
          <MouseOverPopover />
        </span>
        <div className='quiz-container'>
          <div className='gu-name'>{display.name}</div>
          <div className='hidden-hint'>힌트 : 숨겨진 힌트</div>
          <form className='answer-container' onSubmit={__doSubmit}>
            <input type='text' placeholder='지역구를 입력하세요' value={text}
              onChange={(e) => setText(e.target.value)} required />
            <button className='submit-btn' type='submit'>입력</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Game;