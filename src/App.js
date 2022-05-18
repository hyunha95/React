/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '역삼 우동 맛집';
  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동 맛집', '파이썬독학']);
  // let [글제목2, c] = useState("강남 우동 맛집");
  // let [글제목3, d] = useState("파이썬독학");
  let [따봉, 따봉변경] = useState(0);

  let num = [1, 2];
  // let a = num[0];
  // let e = num[1];
  let [a, e] = [1, 2];

  function 함수(){
    console.log(1);
  }


  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={ {color : 'red', fontSize : '16px'} }>ReactBlog</h4>
      </div>

      <button onClick={()=> {
        let copy = [...글제목];
        copy[0] = '여자코드 추천';
        글제목변경(copy);
      }}>글수정</button>

      <div className='list'>
        <h4>{ 글제목[0] } <span onClick={ () => { 따봉변경(따봉+1) }}>👍</span> { 따봉 } </h4>
        <p>2월 17일 발행</p>
      </div>


      <div className='list'>
        <h4>{ 글제목[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div>
      
    </div>
  );
}

export default App;
