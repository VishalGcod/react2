import "./App.css";
import { useState } from "react";
import { Fun2, Fun1 } from "./task-prep";
import Ustates from "./task-prep2";
import { Buttonclick } from "./element";
import { Ta, Para } from "./element";

function App() {
  // const data='hello world'
  // const data2=25
  // const data3= true
  // const data4=[1,2,3]
  // const data5={name:'vishal', age:'22'}
  // const link='https://github.com/VishalGcod/React'
  return (
    <div className="App">
      {/* <div className="Cont">{data}  {data2}</div>
      <div className="Cont">{data2}</div>
      <div className="Cont">{data3}</div>
      <div className="Cont">{data4}</div>
      <div className="Cont">{Math.random()*1000000*Math.random()*1000000}</div>
      <div className="Cont">{[1,2,3,4,5]}</div>
      <a href={link}>GIT</a> */}
      {/* <div className="Cont">{data5}</div> */}
      {/* <Fun1/>
      <Fun2/>
      <Ustates/> */}

      <Buttonclick />
    </div>
  );
}

export default App;
