import React, { Component } from 'react';
import styled from 'styled-components';
import img from './../assets/3-Columns-Background.png';

const BackgroundImg = styled.div`
  background-image: url(${img});
  width: 100%;
  height: 350px;
  background-size: contain;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Column = styled.div`
  width: 20%;
  padding: 0 5%;
  text-align: center;
`;
const ColumnNumber = styled.div`
  font-weight: 300;
  font-size: 5rem; 
  padding-bottom: 20px;
`;
const ColumnTitle = styled.div`
  font-size: 1rem; 
  padding-bottom: 20px;
`;
const ColumnDescription = styled.div`
  font-family: Merriweather;
  font-weight: 300;
  font-size: 0.8rem; 
  padding-bottom: 20px;
`;

class HomeThreeColumns extends Component {
  state = {  }
  render() { 
    return (
      <BackgroundImg>
        <Column>
          <ColumnNumber>10</ColumnNumber>
          <ColumnTitle>ODDANYCH WORKÓW</ColumnTitle>
          <ColumnDescription>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</ColumnDescription>
        </Column>
        <Column>
          <ColumnNumber>5</ColumnNumber>
          <ColumnTitle>WSPARTYCH ORGANIZACJI</ColumnTitle>
          <ColumnDescription>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</ColumnDescription>
        </Column>
        <Column>
          <ColumnNumber>7</ColumnNumber>
          <ColumnTitle>ZORGANIZOWANY ZBIÓREK</ColumnTitle>
          <ColumnDescription>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</ColumnDescription>
        </Column>
      </BackgroundImg>
    );
  }
}
 
export default HomeThreeColumns;