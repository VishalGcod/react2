import "./App.css";
import { useState } from "react";
import { Fun2, Fun1 } from "./task-prep";
import Ustates from "./task-prep2";
import { Buttonclick } from "./element";
import { Ta, Para } from "./element";
import { Disp } from "./newtry";
import { Rate } from "antd";
import Stars from "./starrating";
import StarRating from "./halfstar";
import { Formdta } from "./form";
import itachi from './itachi-uchiha-naruto-minimal-art-red-background-5k-2880x1800-7749.jpg'
import  styled from "styled-components";

function App() {
    const [rating, setRating] = useState('');
  
    const handleRatingChange = (newValue) => {
      setRating(newValue);
    };
  return (
    <div className="App">
      <Formdta/>
      {/* <StarRating rating={rating} onChange={handleRatingChange} /> */}
      {/* <p>Current Rating: {rating}</p> */}
    </div>
  );
}

export default App;
