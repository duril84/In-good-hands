import React, { Component } from 'react';
import NavigationTop from './NavigationTop';
import NavigationBottom from './NavigationBottom';
import styled from 'styled-components';

const StyledNavigation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 60vw;
  position: absolute;
  right: 10vh;
  top: 0;
`;

class Navigation extends Component {
  state = {  }
  render() { 
    return (
      <StyledNavigation>
        <NavigationTop />
        <NavigationBottom />
        { this.props.children }
      </StyledNavigation>
    );
  }
}
 
export default Navigation;