import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Robot from "../assets/robot.gif";
export default function Accueil() {
  const [userName, setUserName] = useState("");
  useEffect(async () => {
    setUserName(
      await JSON.parse(
        localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
      ).username
    );
  }, []);
  return (
    <Container>
      <img src={Robot} alt="" />
      <h1>
        Hey,<span>{userName}!</span>
      </h1>
      <h3>Choose a contact to start chatting</h3>
    </Container>
  );
}

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
color: white;
flex-direction: column;

padding: 2rem;

box-shadow: 0 1px 20px #181414; 

img {
  height: 10rem;
  border-radius: 50%;
  box-shadow: 0 8px 20px #181414; 
  border: 5px solid #2276e2; 
  margin-bottom: 2rem; 
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05); 
    box-shadow: 0 8px 20px #2276e2;
  }
}

span {
  color: #2276e2; 
  font-size: 1.5rem;
  margin-top: 2rem;
  font-weight: bold;
  text-shadow: 2px 2px 10px #181414; 
  background: rgba(40, 36, 36, 0.8); 
  padding: 0.5rem 1rem;

  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(34, 118, 226, 0.8); 
    color: white; 
  }
}
`;
