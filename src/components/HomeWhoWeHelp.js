import React, { Component } from 'react';
import styled from 'styled-components';
import { ReactComponent as Decoration } from "../assets/Decoration.svg";
import Button from './header/Button';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 0;
`;

const Title = styled.div`
  font-size: 2.1rem;
  font-weight: 500;
  padding-bottom: 30px;
`;

const Buttons = styled.div`
  display: flex;
  width: 50%;
  padding: 40px;
  justify-content: space-evenly;
`;

const Description = styled.div`
  width: 40%;
  font-size: 1.25rem;
  line-height: 2rem;
  text-align: center;
  padding: 40px;
`;

const Pagination = styled.div`
  width: 80%;
  height: 450px;
  border: 1px solid blue;
`;

class HomeWhoWeHelp extends Component {
  state = {  }
  render() { 
    return (
      <Container name="WhoWeHelp">
        <Title>Komu pomagamy?</Title>
        <Decoration />
        <Buttons >
          <Button help>Fundacjom</Button>
          <Button help>Organizacjom<br/>pozarządowym</Button>
          <Button help>Lokalnym<br/>zbiórkom</Button>
        </Buttons>
        <Description>
          W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
        </Description>  
        <Pagination />
      </Container>
    );
  }
}
 
export default HomeWhoWeHelp;