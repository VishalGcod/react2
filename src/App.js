import React, { Component } from "react";
import "./App.css";
// import { Apis, Header } from "./reactPart2";
import { Formdta, Par } from "./form";
import itachi from "./itachi-uchiha-naruto-minimal-art-red-background-5k-2880x1800-7749.jpg";
import { Fill } from "./practiceasses3";
import { Flexdiv } from "./practiceasses3";
import { Disp } from "./newtry";
import { Next } from "./next";
import { Posting } from "./post ";
import { Home } from "./axiosrequests";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import {Login, About, NavTxt } from "./routecomp";

function App() {
  return (
    <div className="App">
      <Router>
      <div>
          <NavTxt/>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div> 
      </Router>
      {/* <Disp/> */}
      {/* <Par/>  */}
      {/* <Formdta/> */}
      {/* <Header/> */}
      {/* <div> */}
      {/* <Fill/> */}
      {/* </div> */}
      <div>{/* <Apis/> */}</div>
      {/* <StarRating rating={rating} onChange={handleRatingChange} /> */}
      {/* <p>Current Rating: {rating}</p> */}
      {/* <Next/> */}
      {/* <Posting/> */}
      {/* <Home /> */}
    </div>
  );
}

export default App;
