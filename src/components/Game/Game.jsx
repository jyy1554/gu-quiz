import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/index.css';
import MouseOverPopover from './components/MouseOverPopover';
import ShowScore from './containers/ShowScore';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import SentimentDissatisfiedOutlinedIcon from '@mui/icons-material/SentimentDissatisfiedOutlined';
import { useDispatch } from 'react-redux';


function Game() {
  const navigate = useNavigate();
  const dispatch = useDispatch(); //점수를 Result 컴포넌트에 넘겨주기 위해
  const numOfProbs = 4; 

  const [text, setText] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(true);
  const [display, setDisplay] = useState({}); //문제에서 보여지는 객체
  const [gus, setGus] = useState([]); // 그 다음 문제들의 배열
  const inputRef = useRef();

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

  /* useEffect에서 설정한 함수가 가장 처음 렌더링될때만 실행되고 이후 실행할 필요가 없는 경우엔,
  두번째 파라미터에 빈 배열을 넣어주면 됨
  */
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

      if (text === display.answer) {
        setCorrectAnswer(true);
        dispatch({
          type : 'CORRECT'
        });
      } else {
        setCorrectAnswer(false);
      }
      setShowResult(true); // 결과 표시

      setTimeout(() => {
        setShowResult(false); // 결과 안보이게 하기
        setText('');  //입력된 글자 지우기
        inputRef.current.focus();
        
        if(gus.length) {
          const _gus = gus.slice(1,numOfProbs + 1);
          setDisplay(gus[0]);
          setGus(_gus); 
        } else {
          __goResult();
        }
      }, 1000);
      console.log(`gus length: ${gus.length}`);
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
          <div className='hidden-hint'>지도 버튼을 클릭해보세요!</div>
          <div className='input-and-result'>
            {showResult ? ((correctAnswer ? (
                <div className="o-icon">
                  <audio src='assets/music/correct.mp3' autoPlay></audio>
                  <SentimentSatisfiedOutlinedIcon color="success" sx={{ fontSize: 100}} />
                </div>
              ):(
                <div className="x-icon">
                  <audio src='assets/music/wrong.mp3' autoPlay></audio>
                  <SentimentDissatisfiedOutlinedIcon sx={{ color:'red', fontSize: 100}} />
                </div>
              )
            )):(
              <form className='answer-container' onSubmit={__doSubmit}>
                <input type='text' placeholder='지역구를 입력하세요' value={text}
                  onChange={(e) => setText(e.target.value)} ref={inputRef} required />
                <button className='submit-btn' type='submit'>입력</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Game;