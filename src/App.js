import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";

import { Image, FormData, Option, Para } from "./react-start";
import reactLogo from "./itachi-uchiha-naruto-minimal-art-red-background-5k-2880x1800-7749.jpg";

const arr2 = [
  {
    img: reactLogo,
    id: 1,
    part: "para1",
  },
  {
    img: reactLogo,
    id: 2,
    part: "para2",
  },
  {
    img: reactLogo,
    id: 3,
    part: "para3",
  },
  {
    img: reactLogo,
    id: 4,
    part: "para4",
  },
];

const Head3 = styled.a`
  text-decoration: none;
  color: ${(props) => (props?.colorCode ? props?.colorCode : "red")};
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="navLeft">
          <Option text="home" />
          <Option text="spate" />
        </div>
        <div id="navRight">
          <Option text="data" />
          <Option text="login" />
          <Option text="signup" />
        </div>
      </header>
      <main className="main">
        <div className="main-aside">
          <FormData />
        </div>
        <div className="main-body">
          {arr2?.map((e) => {
            return (
              <div className="cards">
                <img className="img" src={e.img} alt="react logo" />
                <h3>
                  <Head3
                    href="https://www.google.com/search?q=how+to+dynamically+add+paras+in+react&oq=how+to+dynamically+add+paras+in+react&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIJCAEQIRgKGKAB0gENMTY1NjMxNTdqMGoxNagCALACAA&sourceid=chrome&ie=UTF-8"
                    target="_blank"
                    colorCode={"yellow"}
                    style={{}}
                  >
                    {e.id}
                  </Head3>
                </h3>
                <p>{e.part}</p>
              </div>
            );
          })}
        </div>
      </main>
      <footer>
        <div>{/* @this is footer for this landing page */}</div>
        <div></div>
      </footer>
    </div>
  );
}

export default App;
