import React from 'react';
import ReactDOM from 'react-dom';
// import Avatar from './Avatar';
import './index.css';
// import TodoList from './TodoList';
// import App from './APP';
// 引用了来自app.js文件中的React组件，并将此组件命名为app
// import Hw from'./Hw';
// import Profile from './MyFirstComponent';
import Item from './Item'
import PackingList from './PackingList'
import reportWebVitals from './reportWebVitals';
// import Card from'./Card';

ReactDOM.render(
  <React.StrictMode>
    {/* <Profile/> */}
    {/* <Hw /> */}
    {/* <Photo/>
    <Photo/> */}
    {/* <App/> */}
    {/* <Avatar/> */}
    {/* <Card>
      <Avatar
      size={200}
      person={{
        name:'Hedy Lamarr',
        imageld:'yXOvdOSs'
      }}
      />
    </Card> */}
    {/* <TodoList/> */}
    <PackingList>
      <Item
      name="Space suit"
      />
      <Item
      name="Helmet with a golden leaf"
      />
      <Item
      name="Photo of Tam"
      />
    </PackingList>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
