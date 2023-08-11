import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Hw from './Hw';
// // import，Photo 引入内容在本文档中的文字，from './MyfirstComponent' 引入内容的实际来源
// // 注意：组件文件名：MyfirstComponent，组件function名：Profile（），import引用时引用名改为：Photo
import Photo from './MyFirstComponent';
// import reportWebVitals from '../reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Hw />
    <Photo />
    <Photo />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// reportWebVitals();
