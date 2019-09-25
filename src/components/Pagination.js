import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const Container = styled.ul`
  display: flex;
  list-style: none;
  width: 100%;
  font-weight: 300;
`;

const Li = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`

const PageNumber = styled.a`
  font-size: 1.5rem;
  font-weight: 100;
  text-decoration: none;
  color: #737373;
  text-align: center;
  border: 0.75px solid transparent;
  &:ative {
    color: #737373;
  }
  &:visited {
    color: #737373;
  }
  &:hover {
    color: #737373;
    border: 0.75px solid #737373;
  }
`

const Pagination = ({postsPerPage, totalPosts, paginate}) => {
  const pageNumbers = [];

  for ( let i=1; i <= Math.ceil(totalPosts /postsPerPage); i++ ) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <Container>
        {pageNumbers.map(number => (
          <Li key={number}>
            <Link to="WhoWeHelp" spy={true} smooth={true} duration={0}>  
              <PageNumber onClick={() => paginate(number) } href="!#">
                {number}
              </PageNumber>
            </Link>
          </Li>
        ))}
      </Container>
    </nav>
  )
}
 
export default Pagination;