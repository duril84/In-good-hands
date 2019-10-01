import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from "react-redux";



const StyledNavigationTop = styled.div`
  display: flex;
  padding: 0 20px;
`;

const Hello = styled.div`
  color: #737373;
  background-color: transparent;
  font-size: 0.7rem;
  padding: 9px 10px;
`;


const NavigationTop = props => {
    if ( !props.pageStore.user ) {
     return (
        <StyledNavigationTop>
          <Link exact to={`/logowanie`}>
            <Button lightButton>Zaloguj</Button>
          </Link>
          <Link exact to={`/rejestracja`}>
            <Button lightButton>Załóż konto</Button>
          </Link>
        </StyledNavigationTop>
      );
    } else {
      return (
        <StyledNavigationTop>
          <Hello >Cześć { props.pageStore.user }</Hello>
          <Link exact to={`/oddaj-rzeczy`}>
            <Button lightButton>Oddaj rzeczy</Button>
          </Link>
          <Link exact to={`/wylogowano`}>
            <Button lightButton>Wyloguj</Button>
          </Link>
        </StyledNavigationTop>
      );
    }
}



const mapStateToProps = (state) => {
  return {
    pageStore: state.pageStore
  }
};

//const mapDispatchToProps = dispatch => ({ fetch: data => dispatch(usersFetched(data)) });
//const mapDispatchToProps = { usersFetched, userLogin };

// const HHContainer = connect(mapStateToProps, mapDispatchToProps)(HomeHeader);

// export default HHContainer;

export default connect(mapStateToProps, null)(NavigationTop);