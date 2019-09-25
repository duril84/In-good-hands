import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ReactComponent as Decoration } from "../assets/Decoration.svg";
import Button from './header/Button';
import Posts from './Posts';
import Pagination from './Pagination';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  // height: 80vh;
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

const HomeWhoWeHelp = () => {
  const [chose, setChose] = useState("foundations");
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  useEffect( () => {
    const fetchData = name => {
      fetch(`http://localhost:3004/${name}`)
      .then(resp => resp.json())
      .then(data => {
        setPosts(data);
      }) 
      .catch(err => console.error(err));
    } 
    fetchData(chose);
  }, [chose])

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <Container name="WhoWeHelp">
      <Title>Komu pomagamy?</Title>
      <Decoration />
      <Buttons >
        <Button help onClick={()=>{setChose("foundations");setCurrentPage(1)}}>Fundacjom</Button>
        <Button help onClick={()=>{setChose("organizations");setCurrentPage(1)}}>Organizacjom<br/>pozarządowym</Button>
        <Button help onClick={()=>{setChose("collections");setCurrentPage(1)}}>Lokalnym<br/>zbiórkom</Button>
      </Buttons>
      <Description>
        W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
      </Description>  
      <Posts posts={currentPosts}/>
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
    </Container>
  );

}
 
export default HomeWhoWeHelp;