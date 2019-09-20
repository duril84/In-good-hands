import React, { Component } from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';

class NavigationTop extends Component {
  state = {  }
  render() { 
    return (
      <div className="header_navigation-top">
        <Link exact to={`/logowanie`}>
          <Button>Zaloguj</Button>
        </Link>
        <Link exact to={`/rejestracja`}>
          <Button>Załóż konto</Button>
        </Link>
      </div>
    );
  }
}
 
export default NavigationTop;