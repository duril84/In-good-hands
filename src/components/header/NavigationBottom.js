import React, { Component } from 'react';
import Button from './Button';
import { Link } from 'react-scroll';
import styled from 'styled-components';

const StyledNavigationBottom = styled.div`
  display: flex;
  ul {
    display: flex;
    list-style: none;
  }
`;

class NavigationBottom extends Component {
  state = {  }
  render() { 
    return (
      <StyledNavigationBottom>
        <ul>
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
      </StyledNavigationBottom>
    );
  }
}
 
export default NavigationBottom;