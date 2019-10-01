import React from 'react';
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import { connect } from 'react-redux';
import { usersFetched } from './actions';

import Home from  './components/Home';
import HomeHeader from './components/HomeHeader';
import HHContainer from  './components/Login';
import Register from  './components/Register';
import Logout from  './components/Logout';


import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Merriweather:300,300i,400,400i,700,700i,900,900i|Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i&display=swap&subset=latin-ext');
  * {
    font-family: 'Open Sans','Merriweather', sans-serif;
  }
`
class App extends React.Component {
  state = {  }
  componentDidMount() {
    // fetch(`http://localhost:3004/users`)
    // .then(resp => resp.json())
    // .then(data => {
    //   this.props.usersFetched(data);
    // })
    // .catch(err => console.error(err));
  
    // fetch("http://localhost:3004/users")
    // .then(res => res.json())
    // .then(json => { this.props.usersFetched(json)}); // (1)
  }
  render() { 
    return (
     <div>
       <GlobalStyles/>
        
        <Router>
          <Switch>
            <Route exact path={`/`} 
              render={ props => (
                <Home>
                  <HomeHeader />
                </Home>
            )}/>
            <Route path={`/logowanie`}
              render={ props => (
                <Home>
                  <HHContainer />
                </Home>
            )}/>
            <Route path={`/rejestracja`} 
              render={ props => (
                <Home>
                  <Register />
                </Home>
            )}/>
            <Route path={`/wylogowano`} 
              render={ props => (
                <Home>
                  <Logout />
                </Home>
            )}/>
          </Switch>
          </Router>
        </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}
const mapDispatchToProps = { usersFetched };

const AppContainer= connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
