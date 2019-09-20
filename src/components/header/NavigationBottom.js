import React, { Component } from 'react';
import Button from './Button';
import { Link } from 'react-scroll';

class NavigationBottom extends Component {
  state = {  }
  render() { 
    return (
      <div className="header_navigation-bottom">
        <ul className="header_navigation-bottom-list">
          <li>
            <Link>
              <Button>Start</Button>
            </Link>
          </li>
          <li>
            <Link>
              <Button>O co chodzi?</Button>
            </Link>
          </li>
          <li>
            <Link>
              <Button>O nas</Button>
            </Link>
          </li>
          <li>
            <Link>
              <Button>Fundacja i organizacje</Button>
            </Link>
          </li>
          <li>
            <Link>
              <Button>Kontakt</Button>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
 
export default NavigationBottom;