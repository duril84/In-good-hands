import React, { Component } from 'react';
import HomeHeader from './HomeHeader';
import HomeThreeColumns from './HomeThreeColumns';
import HomeSimpleSteps from './HomeSimpleSteps';
import HomeAboutUs from './HomeAboutUs';
import HomeWhoWeHelp from './HomeWhoWeHelp';
import HomeContact from './HomeContact';
import HomeFooter from './HomeFooter';


class Home extends Component {
  state = {  }
  render() { 
    return (
      <div className="home_container">
        <HomeHeader />
        <HomeThreeColumns />
        <HomeSimpleSteps />
        <HomeAboutUs />
        <HomeWhoWeHelp />
        <HomeContact />
        <HomeFooter />
      </div>
    );
  }
}
 
export default Home;