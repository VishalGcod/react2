import { Link } from "react-router-dom";
import styled from "styled-components";
import itachi from "./itachi-uchiha-naruto-minimal-art-red-background-5k-2880x1800-7749.jpg";

import React from 'react';

const NotFound = () => {
  return (
    <Otherdivs>
      <h1>404 Not Found</h1>
      <p>The requested page could not be found.</p>
    </Otherdivs>
  );
};

export default NotFound;

export const Login = () => {
  return (
    <Otherdivs>
      <h1>This Is Login</h1>
    </Otherdivs>
  );
};

export const About = () => {
  return (
    <Otherdivs>
      <h1>This Is About</h1>
    </Otherdivs>
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
        <Nav>
          <Links to="/">Home</Links>
          <Links to="/login">Login</Links>
          <Links to="/about">About</Links>
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
  width: 60%;
  justify-content: flex-start;
  margin-left: 2%;
  align-items: center;
`;

const Nav = styled.div`
  font-size: 25px;
  font-weight: 600;
  display: flex;
  width: 40%;
  justify-content: space-around;
  align-items: center;
`;

const Otherdivs = styled.div`
  margin-top: 150px;
`;

const Links=styled(Link)`
color:white;
text-decoration:none;
`;