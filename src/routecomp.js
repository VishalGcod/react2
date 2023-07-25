import { Link } from 'react-router-dom';
import { styled } from "styled-components";
import itachi from "./itachi-uchiha-naruto-minimal-art-red-background-5k-2880x1800-7749.jpg";

export const Login = () => {
  return <h1>This Is Login</h1>;
};

export const About = () => {
  return (
    <div>
        <h1>This Is About</h1>
        <h1>This Is About</h1>
    </div>
  );
};

export const NavTxt = () => {
  return (
    <div>
      <Header>
        <Imgdiv>
          <img
            src={itachi}
            alt="image"
            style={{ height: "65px", width: "65px", borderRadius: "50%" }}
          ></img>
        </Imgdiv>
        <Impdiv>
          <input
            type="search"
            placeholder="search"
            style={{ height: "23px" }}
          ></input>
          <button>search</button>
        </Impdiv>
        <Nav>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/about">About</Link>
        </Nav>
      </Header>
    </div>
  );
};

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgb(31, 44, 51);
  height: 12dvh;
  position: fixed;
  top: 0;
  width: 100%;
`;

const Imgdiv = styled.div`
  display: flex;
  width: 40%;
  justify-content: flex-start;
  margin-left: 2%;
  align-items: center;
`;

const Nav = styled.div`
  font-size: 25px;
  font-weight: 600;
  display: flex;
  width: 30%;
  justify-content: space-around;
  align-items: center;
`;
const Impdiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
