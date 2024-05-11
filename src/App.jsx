import React from "react";
import Heading from "./Heading";
import List from './List'
import janakimg from './photos/janakimg.jpeg';

/*
const utuber="thta";
function sot(){

 let currDate= new Date(2024, 5, 2, 11);
 currDate=currDate.getHours(); let greeting="";
    if( currDate>=1 && currDate<=12){
      greeting='Good morning';
    }else if(currDate>=12 && currDate<19){
      greeting='Good evening';
    }else{
      greeting="Good Night";
    }
    return(
        <>
            <div>
                <h1>Hello Sir,<span>{greeting}</span></h1>
            </div>
        </>
    )
};
function old(){
    let name="my Fear"
    return name;
}


 export default utuber;
 export {sot,old};
*/

// function add(a,b){
//    let sum=a+b;
//    return sum;
// }
// function sub(a,b){
//     let sub= a-b;
//     return sub;
// }
 
// export default add;
// export {sub};
//import React, {useState} from "react";
//import { useState } from 'react';
 /* const NewApp =() =>{
  let newTime=new Date().toLocaleTimeString();
const [count,setCount]=useState(0);
const IncNum=()=>{
   setCount(newTime);
}

  return (
    <>
      <h1>{count}</h1>
      <button onClick={IncNum}> Click Me</button>
    </>
  )
}
export default NewApp;*/

/*
const UpdateTime=()=>{
  let time = new Date().toLocaleTimeString();
  const [ctime,setCtime]=useState(time);
  const Newtime=()=>{
    time= new Date().toLocaleTimeString();
    setCtime(time);
  }
 

setInterval(Newtime,1000);
return(
  <>
    <h1>{ctime}</h1>
  </>
)
};
export default UpdateTime;*/
/*
 const Query= ()=>{
  const purple="#8e44ad";
  const [bg,setbg]=useState(purple);
  const bgChange=()=>{
    let newColor="#34495e";
    setbg(newColor);
  }
  return(
    <>
      <div style={{backgroundColor:"bg"}}>
        <button onClick={bgChange}>
          Click Me
        </button>
      </div>
    </>
  )
 };
 export default Query;
 

 const Newforms=()=>{
  /*const [name,setName]=useState();
  const[fullName,setFullName]=useState();
  const[pass,setPass]=useState();
  const[lastnew,setlastnew]=useState();*/
  /*const [fullName,setFullName]=useState({
    fname:'',lname:'',
  })
  const InputEvent=(event)=>{
    const value=event.target.value;
    const name=event.target.name;
  }
  setFullName((preValue)=>{
    if(name==='fname'){
      return{
      fname:value,
      lname:preValue.lname,
      };
      else if(name==="lname"){
        return{
          fname:value,
          lname:preValue.lname,
          };
      }
    }
  })

  const onSubmit=(event)=>{
    event.preventDefault();
  alert("form Submitted");
  }
  return(<>
    <div className="main_div"> 
    <form>
      <h1> Hello{fullName} {fullName.fname}{fullName.lname}
      </h1>
      <input type="text"  placeholder="Enter your Name" name='fname'onChange={InputEvent} value={fullName.fname} ></input>
      <input type="password" placeholder="Enter your password " name="lname" onChange={InputEvent} value={fullName.lname}></input>
      <button onClick={onSubmit}>Click me</button>
      </form>
    </div>
  </>
  );
 };
 export default Newforms;*/