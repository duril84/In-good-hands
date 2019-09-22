import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavigationTop = styled.div`
  display: flex;
  padding: 0 20px;
`;

const NavigationTop = () => {
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
}

export default NavigationTop;