import Button from './header/Button';
import styled from 'styled-components';
import React, { useEffect } from 'react';
import { ReactComponent as Decoration } from "../assets/Decoration.svg";
import Navigation from './header/Navigation';
import { Link } from 'react-router-dom';
import { usersFetched, userLogin, userLogout } from './../actions';
import { connect } from "react-redux";

const Container = styled.div`
  width: 90vw;
  height: 100vh;3
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
  text-align: center;
`;

const Buttons = styled.div`
  padding-top: 5vh;
  width: 30%;
  display: flex;
  justify-content: center;
`;


const Logout = props => {

  const logout = () => {
    props.userLogout();
  }

  useEffect(()=> {
    
    logout();
  }, []);


  return (
    <Container>
      <Navigation />
      <Title>Wylogowanie nastąpiło<br/>pomyślnie!</Title>
      <Decoration/>
      <Buttons>
        <Link exact to={`/`}>
          <Button>Strona główna</Button>
        </Link>
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
const mapDispatchToProps = { usersFetched, userLogin, userLogout };


export default connect(mapStateToProps, mapDispatchToProps)(Logout);