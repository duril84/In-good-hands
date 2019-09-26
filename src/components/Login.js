import React, { Component } from 'react';
import { ReactComponent as Decoration } from "../assets/Decoration.svg";
import Button from './header/Button';
import styled from 'styled-components';

const Container = styled.div`
  width: 90vw;
  height: 90vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 2.1rem;
  font-weight: 500;
  padding-bottom: 30px;
`;

const Login = styled.div`
  background-color: #F0F1F1;
  width: 330px;
  height: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  margin-top: 5vh;
  h2 {
      align-self: flex-start;
      font-weight: 600;
      font-size: 15px;
      margin: 15px 50px;
  }
  input {
      width: 230px;
      border: none;
      border-bottom: 2px solid lightgrey;
      background: none;
  }
`;


const Buttons = styled.div`
  padding-top: 5vh;
  width: 30%;
  display: flex;
  justify-content: space-between;
`;

class HomeHeader extends Component {
  state = {  }
  render() { 
    return (
      <Container>
        <Title>Zaloguj się</Title>
        <Decoration/>
        <Login>
            <h2>Email</h2>
            <input></input>
            <h2>Hasło</h2>
            <input></input>
        </Login>
        <Buttons>
          <Button>Załóż konto</Button>
          <Button>Zaloguj</Button>
        </Buttons>
      </Container>
    );
  }
}
 
export default HomeHeader;