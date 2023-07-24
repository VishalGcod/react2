import React , { Component}  from 'react';
import "./App.css";
import { Apis, Header } from "./reactPart2";
import { Formdta, Par } from "./form";
import itachi from "./itachi-uchiha-naruto-minimal-art-red-background-5k-2880x1800-7749.jpg";
import { Fill } from './practiceasses3';
import { Flexdiv } from './practiceasses3';
import { Disp } from './newtry';
import { Next } from './next';
import { Posting } from './post ';

function App() {
  //     const [rating, setRating] = useState('');

  //     const handleRatingChange = (newValue) => {
  //       setRating(newValue);
  //     };
  return (
    <div className="App">
      {/* <Disp/> */}
      {/* <h1>hi</h1>
      <Par/> */}
      <Formdta/>
       {/* <Header/> */}
      {/* <div> */}
      {/* <Fill/> */}
      {/* </div> */}
      <div>
      {/* <Apis/> */}
      </div>
      {/* <StarRating rating={rating} onChange={handleRatingChange} /> */}
      {/* <p>Current Rating: {rating}</p> */}
      {/* <Next/> */}
      {/* <Posting/> */}
    </div>
  );
}

export default App;
