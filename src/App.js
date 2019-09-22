import React from 'react';
import './scss/main.scss';
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from  './components/Home';
import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Merriweather:300,300i,400,400i,700,700i,900,900i|Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i&display=swap&subset=latin-ext');
  * {
    font-family: 'Open Sans','Merriweather', sans-serif;
  }
`


function App() {
  return (
     <HashRouter>
       <GlobalStyles/>
        <>
          <Switch>
            <Route exact path={`/`} component={Home}/>
          </Switch>
        </>
    </HashRouter>
  );
}

export default App;
