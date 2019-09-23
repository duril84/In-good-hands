import React, { Component } from 'react';
import styled from 'styled-components';
import decoration from './../assets/Decoration.svg';
import signature from './../assets/Signature.svg';
import img from './../assets/People.jpg';

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 80px 0;
`;

const Img = styled.div`
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  width: 50%;
  height: 85vh;
`;

const AboutUs = styled.div`
  width: 50%;
  height: 85vh;
  background-color: #F0F1F1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto 0;
`;

const Title = styled.div`
  font-size: 2.1rem;
  font-weight: 500;
  padding: 20% 0 30px 0;
`;

const Decoration = styled.div`
  background-image: url(${decoration});
  background-size: contain;
  background-repeat: no-repeat;
  width: 230px;
  height: 30px;
  padding-bottom: 33px;
`;

const Description = styled.div`
  width: 70%;
  font-size: 1.65rem;
  line-height: 3.2rem;
  text-align: center;
`;

const Signature = styled.div`
  background-image: url(${signature});
  background-size: contain;
  background-repeat: no-repeat;
  width: 200px;
  height: 200px;
  margin: 30px 120px;
  align-self: flex-end;
`;

class HomeAboutUs extends Component {
  state = {  }
  render() { 
    return (
      <Container>
        <AboutUs>
          <Title>Onas</Title>
          <Decoration />
          <Description>
            Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.
          </Description>
          <Signature />
        </AboutUs>
        <Img />
      </Container>
    );
  }
}
 
export default HomeAboutUs;