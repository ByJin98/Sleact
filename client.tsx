import App from '@layouts/App';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

const container: any = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);

// 폴더구조는 자유
// pages -> 페이지별(회원가입 페이지, 로그인 페이지, )
// components -> 짜잘한 컴포넌트들
// layouts -> 공통 레이아웃
