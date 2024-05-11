import React from 'react';
import ReactDOM from 'react-dom';
//import ReactDOM from 'react-dom/client';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';



//import reportWebVitals from './reportWebVitals';

/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

ReactDOM.render(
  <><App/>
  </>,
  //document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();*/


//lecture 8
/*import React from "react";
import ReactDOM from "react-dom"
//var ReactDOM=require('react-dom');
ReactDOM.render([<h1>Hello Nimmi</h1>,<p>new World</p>,<ol>
  <li>Dark</li><li>My dolo</li><li>New York</li><li>Wednesday</li>
</ol>], document.getElementById("root"));
 
var h1=document.createElement("h1");
h1.innerHTML="thapa technical subscribe";
document.getElementById("root").appendChild(h1);*/
// import React from "react";
// import ReactDOM from "react-dom";
/*const name="raj";
const n2='sharma';
ReactDOM.render(
  <>
     <h1>{`my name is ${name} ${n2}`}</h1>
     <p>hello nimmi</p>
  </>,document.getElementById('root'));
*/
/*   const currDate= new Date().toLocaleDateString(); 
const currtime= new Date().toLocaleTimeString(); 
ReactDOM.render(
  <>
    <h1> Nimmi Sharma</h1> 
    <p> current date ={currDate}</p>
    <p>today time = {currtime} </p>
  </>,
  document.getElementById('root')
);
*/
/*   challenge 
import './index.css';
let currDate= new Date(2024,5,5,14);
 
currDate=currDate.getHours();
let greeting="";
const cssStyle={};
if( currDate>=1 && currDate<=12){
  greeting='Good morning';
  cssStyle.color='green';
}else if(currDate>=12 && currDate<19){
  greeting='Good evening';
  cssStyle.color='blue';
}else{
  greeting="Good Night";
  cssStyle.color="pink";
}
ReactDOM.render(
  <><div> <h1 >Hello Sir,<span className="new"> {greeting} </span></h1> </div></>,
document.getElementById('root'))

*/

/*import App from "./App.jsx";
ReactDOM.render(
 <App /> ,document.getElementById('root')
)*/
/*
ReactDOM.render(<App/>,document.getElementById('root')
);*/
/*
import ae,{sot,old} from "./App.jsx";
ReactDOM.render(
  <>
    <ol>
      <li>New one</li>
      <li>{ ae}</li>
      <li>{sot}</li>
      <li>{old}</li>
    </ol>
  </>,document.getElementById('root')
);*/

/*
import add,{sub} from './App.jsx';

ReactDOM.render(
  <>
    <ul>
      <li>Sum of two number is{add(40,4)}</li>
      <li>sub of two number is{sub(30,3)}</li>
    </ul>
  </>,document.getElementById('root')
);*/
 //import Card from "./Cards"
//import  "./index.css"

/*ReactDOM.render(
  <>
    <h1 className="heading_style" >List of 5 netflix series</h1>
    <Card imgsrc=""
     title="new Series"
     sname="Very Parivarik"
      link="https://www.netflix.com/in/" />
    <Card imgsrc=""
     title="Netflix Series"
     sname="Stranger Things"
      link="https://www.netflix.com/in/" />
  </>,document.getElementById('root')
);
*/
/*
import sdata from "./sdata";
import Netflix from './netflix ';
//function ncard(val){
  const ncard=(val)=>{// fat arrow function
     
  return(
    <Card
    key={val.id}
    sname={val.sname}
      imgsrc={val.imgsrc}
      title={val.title}
      link={val.link}
    />
  );
}
const favseries='amazon';
const FavSeries=()=>{
if(favseries==='netflix' ){
  <Netflix/>
}else{
  return(
    <Card
    key={sdata[2].id}
    sname={sdata[2].sname}
      imgsrc={sdata[2].imgsrc}
      title={sdata[2].title}
      link={sdata[2 ].links}
    />
  )
}
}*/

import Navbar from './components/Navbar';
import { Carousel } from 'bootstrap';
import CarouselPage from './components/ImagesSlider';

ReactDOM.render(
  <>
  <Navbar/>
  <CarouselPage/>

    </>
  ,document.getElementById('root')
);
