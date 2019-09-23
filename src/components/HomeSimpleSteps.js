import React, { Component } from 'react';
import styled from 'styled-components';
import decoration from './../assets/Decoration.svg'
import icon1 from './../assets/Icon-1.svg'
import icon2 from './../assets/Icon-2.svg'
import icon3 from './../assets/Icon-3.svg'
import icon4 from './../assets/Icon-4.svg'
import Button from './header/Button';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-size: 2.1rem;
  font-weight: 500;
  padding: 60px 0 30px 0;
`;

const Decoration = styled.div`
  background-image: url(${decoration});
  background-size: contain;
  background-repeat: no-repeat;
  width: 230px;
  height: 30px;
  padding-bottom: 33px;
`;

const Steps = styled.div`
  display: flex;
  width: 66%;
  padding: 0 20%;
  padding-top: 33px;
  padding-bottom: 33px;
  margin-bottom: 33px;
  background-color:  #F0F1F1; 
`;

const Step = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Icon = styled.div`
  background-image: url(${props => props.icon});
  background-size: contain;
  background-repeat: no-repeat;
  width: 100px;
  height: 45px;
  padding-bottom: 33px;
  transform: translateX(10%);
`;
const Info = styled.div`
  width: 50%;
  height: 35px;
  padding-top: 10px;
  padding-bottom: 20px;
`;

const Description = styled.div`
  width: 60%;
  height: 45px;
  font-size: 0.9rem;
`;

class HomeSimpleSteps extends Component {
  state = {  }
  render() { 
    return (
      <Container name="SimpleSteps">
        <Title>Wystarczą 4 proste kroki</Title>
        <Decoration />

        <Steps>
          <Step>
            <Icon icon={icon1} />
            <Info>Wybierz rzeczy</Info>
            <Description>ubrania, zabawki,<br/> sprzęt i inne</Description>
          </Step>
          <Step>
            <Icon icon={icon2}  />
            <Info>Spakuj je</Info>
            <Description>skorzystaj z<br/> worków na śmieci</Description>
          </Step>
          <Step>
            <Icon icon={icon3}  />
            <Info>Zdecyduj komu chcesz pomóc</Info>
            <Description>wybierz zaufane<br/> miejsce</Description>
          </Step>
          <Step>
            <Icon icon={icon4}  />
            <Info>Zamów kuriera</Info>
            <Description>kurier przyjedzie<br/> w dogodnym terminie</Description>
          </Step>
        </Steps>
        <Button mainHeader>ODDAJ<br/>RZECZY</Button>
      </Container>
    );
  }
}
 
export default HomeSimpleSteps;