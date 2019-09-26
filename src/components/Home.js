import React, { Component } from 'react';
import HomeHeader from './HomeHeader';
import HomeThreeColumns from './HomeThreeColumns';
import HomeSimpleSteps from './HomeSimpleSteps';
import HomeAboutUs from './HomeAboutUs';
import HomeWhoWeHelp from './HomeWhoWeHelp';
import HomeContact from './HomeContact';
import styled from 'styled-components';


const HomeContainer = styled.div`
  
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 90vw;
  overflow: hidden;
  // border: 1px solid red;
`;

class Home extends Component {
  state = {  }
  render() { 
    return (
      <HomeContainer>
        <HomeHeader />
        <HomeThreeColumns />
        <HomeSimpleSteps />
        <HomeAboutUs/>
        <HomeWhoWeHelp />
        <HomeContact />
      </HomeContainer>
    );
  }
}
 
export default Home;