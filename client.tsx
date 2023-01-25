import App from '@layouts/App';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector('#app'),
);

// 폴더구조는 자유
// pages -> 페이지별(회원가입 페이지, 로그인 페이지, )
// components -> 짜잘한 컴포넌트들
// layouts -> 공통 레이아웃
