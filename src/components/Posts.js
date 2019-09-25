import React from 'react';
import styled from 'styled-components';

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  width: 80%;
  font-weight: 300;
  height: 30vh;
`;

const Li = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  border-bottom: 0.75px solid #737373;
  &:nth-child(3n) {
    border-bottom: 0.75px solid transparent;
  }
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 25px 0;
  border-bottom: 1px solid $darkgray;
  &:nth-child(1) {
    width: 60%;
  }
`
const Title = styled.div`
  font-size: 1.5rem;
  font-family: Merriweather;
  font-weight: 200;
`
const Description = styled.div`
  font-size: 0.9rem;
  font-family: Merriweather;
  font-weight: 100;
`

const Posts = ({posts}) => {

  return (
    <Container>
      {posts.map( post => (
        <Li key={post.id} >
          <Column>
            <Title>{post.name}</Title>
            <Description>{post.description}</Description>
          </Column>
          <Column>
            {post.items}
          </Column>
        </Li>
      ))}
      
    </Container>

  )
}
 
export default Posts;