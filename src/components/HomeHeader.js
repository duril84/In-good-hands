import React, { Component } from 'react';
import Navigation from './header/Navigation';


class HomeHeader extends Component {
  state = {  }
  render() { 
    return (
      <div className="header">
        <div className="header_img"> </div>
        <Navigation />
      </div>
    );
  }
}
 
export default HomeHeader;