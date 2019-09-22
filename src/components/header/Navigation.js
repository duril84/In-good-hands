import React, { Component } from 'react';
import NavigationTop from './NavigationTop';
import NavigationBottom from './NavigationBottom';
import HeaderMain from './HeaderMain';
import styled from 'styled-components';

const StyledNavigation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 60vw;
  position: absolute;
  right: 10vh;
`;

class Navigation extends Component {
  state = {  }
  render() { 
    return (
      <StyledNavigation>
        <NavigationTop />
        <NavigationBottom />
        <HeaderMain />
      </StyledNavigation>
    );
  }
}
 
export default Navigation;