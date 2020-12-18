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
let greeting='';


const cssStyle={ 
}


let currDate=new Date(2020,12,6 ,14);
currDate=currDate.getHours();

if(currDate>=1 && currDate<12)
{
  greeting="Good Morning";
  cssStyle.color="green";
}
else if(currDate>12&& currDate<=19)
{
  greeting="Good AfterNoon";
  cssStyle.color="Orange";
}
else{
  greeting="Good Night";
  cssStyle.color="Black";
}


ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
//   [
//  <h1 className="heading">Hello World!!</h1>,
//  <h2>{`my name is ${fname} ${lname}`}</h2>,
 
// <p>curr date is ={currdate}</p>,

//  <div className="img_div">



// <img src={img1}/>,

// <img src={img2}/>,
// <img src={img3}/>,
// </div>,
//   ],


  <h1> hello Mam , <span style={cssStyle}>{greeting}</span></h1>,  
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
