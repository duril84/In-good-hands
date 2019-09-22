import React, { Component } from 'react';
import Button from './Button';
import styled from 'styled-components';
import decoration from './../../assets/Decoration.svg'

const Main = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transform: translateY(80%);
`;

const Description = styled.div`
  font-size: 1.9rem;
  padding-bottom: 33px;
`;

const Decoration = styled.div`
  background-image: url(${decoration});
  background-size: contain;
  background-repeat: no-repeat;
  width: 253px;
  height: 33px;
  padding-bottom: 33px;
`;

const Buttons = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

class HeaderMain extends Component {
  state = {  }
  render() { 
    return (
      <Main>
        <Description>
          Zacznij pomagać!<br/>Oddaj niechciane rzeczy w zaufane ręce
        </Description>
        <Decoration/>
        <Buttons> 
          <Button mainHeader>ODDAJ<br/>RZECZY</Button>
          <Button mainHeader>ZORGANIZUJ<br/>ZBIÓRKĘ</Button>
        </Buttons>
      </Main>
    );
  }
}
 
export default HeaderMain;