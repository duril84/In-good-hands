import React from 'react';
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
export default props => {
  return (
    <HomeContainer>
      { props.children }
      <HomeThreeColumns />
      <HomeSimpleSteps />
      <HomeAboutUs/>
      <HomeWhoWeHelp />
      <HomeContact />
    </HomeContainer>
  );

}
 