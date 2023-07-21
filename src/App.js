import "./App.css";
import { useState } from "react";
import { Apis } from "./reactPart2";
import { Formdta } from "./form";
import itachi from "./itachi-uchiha-naruto-minimal-art-red-background-5k-2880x1800-7749.jpg";

function App() {
  //     const [rating, setRating] = useState('');

  //     const handleRatingChange = (newValue) => {
  //       setRating(newValue);
  //     };
  return (
    <div className="App">
      <Formdta/>
      {/* <Apis /> */}
      {/* <StarRating rating={rating} onChange={handleRatingChange} /> */}
      {/* <p>Current Rating: {rating}</p> */}
    </div>
  );
}

export default App;
