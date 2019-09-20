import React, { Component } from 'react';
import NavigationTop from './NavigationTop';
import NavigationBottom from './NavigationBottom';
import HeaderMain from './HeaderMain';

class Navigation extends Component {
  state = {  }
  render() { 
    return (
      <div className="header_navigation">
        <NavigationTop />
        <NavigationBottom />
        <HeaderMain />
      </div>
    );
  }
}
 
export default Navigation;