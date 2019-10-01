import Button from './header/Button';
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { ReactComponent as Decoration } from "../assets/Decoration.svg";
import Navigation from './header/Navigation';
import { Link } from 'react-router-dom';
import { usersFetched, userLogin } from './../actions';
import { connect } from "react-redux";


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
  height: 180px;
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

const HomeHeader = props => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [correctEmail,  setCorrectEmail] = useState(true);
  const [correctPassword,  setCorrectPassword] = useState(true);

  const validateEmail = email => {
    const reg = /\S+@\S+\.\S+/;
    return reg.test(email);
  }

  const validatePassword = password => {
    return password.length > 5 ? true : false;
  }

  const login = () =>{
    setCorrectEmail(validateEmail(email));
    setCorrectPassword(validatePassword(password));
    console.log(props.pageStore.users);
    if ( props.pageStore.users.find(user => (user.email === email && user.password === password ) ) ) {
      console.log('LogIn');
      props.userLogin(email);
    } else {
      console.log('Błędny login lub hasło');
    }
    console.log(props);
  }

  const loadUsers = () => {
    fetch(`http://localhost:3004/users`)
    .then(resp => resp.json())
    .then(data => {
      props.usersFetched(data);
    })
    .catch(err => console.error(err));
    
  }
  
  useEffect(()=> {
    loadUsers();
  }, []);


  return (
    <Container>
      <Navigation />
      <Title>Zaloguj się</Title>
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

      </Login>
      <Buttons>
        <Link exact to={`/rejestracja`}>
          <Button>Załóż konto</Button>
        </Link>
        <Button onClick={() => login()}>Zaloguj</Button>
        {/* <Button onClick={() => stateShow()}>State próba</Button> */}
      </Buttons>
      
    </Container>
  );
  
}

const mapStateToProps = (state) => {
  return {
    pageStore: state.pageStore
  }
};

//const mapDispatchToProps = dispatch => ({ fetch: data => dispatch(usersFetched(data)) });
const mapDispatchToProps = { usersFetched, userLogin };

const HHContainer = connect(mapStateToProps, mapDispatchToProps)(HomeHeader);

export default HHContainer;