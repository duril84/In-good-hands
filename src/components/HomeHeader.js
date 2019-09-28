import React, { Component } from 'react';
import Navigation from './header/Navigation';
import styled from 'styled-components';
import img from './../assets/Home-Hero-Image.jpg';
import HeaderMain from './header/HeaderMain';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  height: 100vh;
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
      <Container name="Home">
        <HeaderImg />
        <Navigation>
          <HeaderMain />
        </Navigation>
      </Container>
    );
  }
}
 
export default HomeHeader;