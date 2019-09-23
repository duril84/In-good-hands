import React, { Component } from 'react';
import Button from './Button';
//import * as Scroll from 'react-scroll';
//import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
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

  // componentDidMount() {
 
  //   Events.scrollEvent.register('begin', function(to, element) {
  //     console.log("begin", arguments);
  //   });
 
  //   Events.scrollEvent.register('end', function(to, element) {
  //     console.log("end", arguments);
  //   });
  //   scrollSpy.update();
  //  }
  // componentWillUnmount() {
  //   Events.scrollEvent.remove('begin');
  //   Events.scrollEvent.remove('end');
  // }
  // scrollToTop() {
  //   scroll.scrollToTop();
  // }
  // scrollToBottom() {
  //   scroll.scrollToBottom();
  // }
  // scrollTo() {
  //   scroll.scrollTo(100);
  // }
  // scrollMore() {
  //   scroll.scrollMore(100);
  // }
  // handleSetActive(to) {
  //   console.log(to);
  // }



  render() { 
    return (
      <>
      <StyledNavigationBottom>
        <ul>
          <li>
            <Link to="Home" spy={true} smooth={true} duration={700}>
              <Button>Start</Button>
            </Link>
          </li>
          <li>
            <Link to="SimpleSteps" spy={true} smooth={true} duration={700}>
              <Button>O co chodzi?</Button>
            </Link>
          </li>
          <li>
            <Link to="AboutUs" spy={true} smooth={true} duration={700}>
              <Button>O nas</Button>
            </Link>
          </li>
          <li>
            <Link to="WhoWeHelp" spy={true} smooth={true} duration={700}>
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
      </>
    );
  }
}
 
export default NavigationBottom;