import React, { Component } from 'react';
import Navigation from './header/Navigation';
import styled from 'styled-components';
import img from './../assets/Home-Hero-Image.jpg';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  //transform: translate(-483px, 0px);
  // height: 75vh;
  overflow: hidden;
`;

const HeaderImg = styled.div`
  background-image: url(${img});
  width: 100%;
  height: 900px;
  background-repeat: no-repeat;
  background-position: left;
  background-size: contain;
  transform: translateX(-26%);
  position: relative;
`;

class HomeHeader extends Component {
  state = {  }
  render() { 
    return (
      <HeaderContainer>
        <HeaderImg />
        <Navigation />
      </HeaderContainer>
    );
  }
}
 
export default HomeHeader;