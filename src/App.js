import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import { Navbar } from "./reactTask";
import Content from "./task";
import { Cont } from "./task";
// import Apps from "./task";
import { FaStar } from "react-icons/fa";
import { DivArea } from "./task2";
import { Star1 } from "./task2";
import Apps from "./task2";
import { useState } from "react";

// import { Image, FormData, Option, Para } from "./react-start";
// import reactLogo from "./itachi-uchiha-naruto-minimal-art-red-background-5k-2880x1800-7749.jpg";

// const arr2 = [
//   {
//     img: reactLogo,
//     id: 1,
//     part: "para1",
//   },
//   {
//     img: reactLogo,
//     id: 2,
//     part: "para2",
//   },
//   {
//     img: reactLogo,
//     id: 3,
//     part: "para3",
//   },
//   {
//     img: reactLogo,
//     id: 4,
//     part: "para4",
//   },
// ];

// const Head3 = styled.a`
//   text-decoration: none;
//   color: ${(props) => (props?.colorCode ? props?.colorCode : "red")};
// `;

function App() {
  const [col, clickcolor] = useState("");
  const handleClick = (index) => {
    const elementId = index;
    console.log("Clicked element ID:", elementId);
    const arr = [
      {
        value: 1,
        color: "red",
      },
    ];
    // arr[index].color
    switch (index) {
      case 0:
        clickcolor("red");
        if (index == 0) {
        }
        break;

      case 1:
        clickcolor("red");
        break;

      case 2:
        clickcolor("orange");
        break;

      case 3:
        clickcolor("green");
        break;

      case 4:
        clickcolor("lightgreen");
        break;

      default:
        break;
    }
  };

  const arr = [
    {
      value: 1,
      color: "red",
    },
  ];
  const renderDivs = () => {
    return [...Array(5)].map((_, index) => (
      <div key={index}>
        <Star1 c={col} onClick={() => handleClick(index)}></Star1>
      </div>
    ));
  };

  return (
    <div className="App">
      <DivArea>{renderDivs()}</DivArea>
    </div>
  );
}

export default App;
