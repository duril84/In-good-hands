import Button from './header/Button';
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { ReactComponent as Decoration } from "../assets/Decoration.svg";
import Navigation from './header/Navigation';
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 90vw;
  height: 100vh;
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
  height: 270px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 0px 30px 0;
  margin-top: 5vh;

`;

const Receive = styled.div`
  width: ${props => props.small && '45%'};
  width: ${props => props.big && '100%'};
  font-size: 2.1rem;
  font-weight: 500;
  padding-bottom: 25px;
`;

const ReceiveTitle = styled.div`
  font-size: 0.9rem;
  font-family: Open Sans;
  font-weight: 700;
`;

const ReceiveData = styled.input`
  width: 230px;
  font-size: 1rem;
  font-family: Open Sans;
  font-weight: 700;
  color: #737373;
  opacity: 0.5;
  box-sizing:border-box;
  border: none;
  border-bottom: 1px solid ${props => props.errors ? 'red' : '#737373'};
  background: none;
  box-shadow: none;
  &:placeholder {
    color: #737373;
    opacity: 0.2;
    font-family: $font-base;
  }
  &:focus {
    outline:none;
  }
`;



const Buttons = styled.div`
  padding-top: 5vh;
  width: 30%;
  display: flex;
  justify-content: space-between;
`;

const ValidateData = styled.div`
  color: red;
  font-size: 0.8rem;
  height: 1rem;
  align-text: left;
`;

const Register = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [repeatedPassword,setRepeatedPassword] = useState('');
  const [correctEmail,  setCorrectEmail] = useState(true);
  const [correctPassword,  setCorrectPassword] = useState(true);
  const [correctRepeatedPassword,  setCorrectRepeatedPassword] = useState(true);


  const validateEmail = email => {
    const reg = /\S+@\S+\.\S+/;
    return reg.test(email);
  }

  const validatePassword = password => {
    return password.length > 5 ? true : false;
  }

  const validateRepeatedPassword = (password,repeatedPassword) => {
    if (repeatedPassword.length < 6 ) {
      return false;
    }
    return repeatedPassword === password;
  }


  const registration = () =>{
    setCorrectEmail(validateEmail(email));
    setCorrectPassword(validatePassword(password));
    setCorrectRepeatedPassword(validateRepeatedPassword(password,repeatedPassword));
  }

  useEffect(()=> {
  }, []);


  return (
    <Container>
      <Navigation />
      <Title>Załóż konto</Title>
      <Decoration/>
      <Login>
        <Receive login> 
          <ReceiveTitle>Email</ReceiveTitle>
          <ReceiveData 
            errors={!correctEmail}
            onChange={e=>setEmail(e.target.value)}
            type="email"
            placeholder={'Podaj email...'}>
          </ReceiveData>
          <ValidateData>{ !correctEmail && 'Podane email jest nieprawidłowy!'}</ValidateData>  
        </Receive>
        <Receive login> 
          <ReceiveTitle>Hasło</ReceiveTitle>
          <ReceiveData 
            errors={!correctPassword}
            onChange={e=>setPassword(e.target.value)}
            type="password"
            placeholder={'Podaj hasło...'}>
          </ReceiveData>
          <ValidateData>{ !correctPassword && 'Podane hasło jest za krótkie!'}</ValidateData>  
        </Receive>
        <Receive login> 
          <ReceiveTitle>Powtórz hasło</ReceiveTitle>
          <ReceiveData 
            errors={!correctRepeatedPassword}
            onChange={e=>setRepeatedPassword(e.target.value)}
            type="password"
            placeholder={'Powtórz hasło...'}>
          </ReceiveData>
          <ValidateData>{ !correctRepeatedPassword && 'Podane hasła są różne!'}</ValidateData>  
        </Receive>
      </Login>
      <Buttons>
        <Link exact to={`/logowanie`}>
          <Button>Zaloguj</Button>
        </Link>
        <Button onClick={() => registration()}>Załóż konto</Button>
      </Buttons>
      
    </Container>
  );
  
}
 
export default Register;