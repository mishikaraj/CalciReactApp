import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const fname="mishika";
const lname="raj";
const currdate=new Date().toLocaleDateString();
const img1="https://picsum.photos/200/300";
const img2="https://picsum.photos/250/300";
const img3="https://picsum.photos/300/300";



ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  [
 <h1>Hello World!!</h1>,
 <h2>{`my name is ${fname} ${lname}`}</h2>,
<p> My first app in React</p>,
<p>curr date is ={currdate}</p>,
<img src={img1}/>,
<img src={img2}/>,
<img src={img3}/>,
  ],
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
