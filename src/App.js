// 실질적으로 내용울 출력하는 것이 App.js이다.
// react에서는 jsx라는 문법을 따른다. 클래스는 camel 방식을 사용한다.
// app.css에서 css를 관리한다.

import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="gray-background">
      <img src={logo} alt="logo" />
      <h2>Let's develop management System</h2>

    </div>
  );
}

export default App;
