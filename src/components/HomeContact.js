import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ReactComponent as Decoration } from "../assets/Decoration.svg";
import instagram from "../assets/Instagram.svg";
import facebook from "../assets/Facebook.svg";
import background from "../assets/Background-Contact-Form.jpg";
import Button from './header/Button';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 80vw;
  height: 80vh;
  overflow: hidden;
  margin-top: 10vh;
`;

const Background = styled.div`
  width: 80%;
  height: 80vh;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: contain;
  opacity: 0.25;
  position: absolute;
  transform: translateX(10%) scale(1.2);
  z-index: -1;
`;

const Title = styled.div`
  font-size: 2.1rem;
  font-weight: 300;
  padding-bottom: 25px;
`;

const Receive = styled.div`
  width: ${props => props.small && '45%'};
  width: ${props => props.big && '100%'};
  font-size: 2.1rem;
  font-weight: 500;
  padding-bottom: 25px;
`;

const ReceiveTitle = styled.div`
  font-size: 0.9rem;
  font-family: Open Sans;
  font-weight: 700;
`;

const ReceiveData = styled.input`
  width: 100%;
  font-size: 1rem;
  font-family: Open Sans;
  font-weight: 700;
  color: #737373;
  opacity: 0.5;
  box-sizing:border-box;
  border: none;
  border-bottom: 1px solid ${props => props.errors ? 'red' : '#737373'};
  background: none;
  box-shadow: none;
  &:placeholder {
    color: #737373;
    opacity: 0.2;
    font-family: $font-base;
  }
  &:focus {
    outline:none;
  }
`;

const ReceiveDataTextarea = styled.textarea`
  width: 100%;
  height: 12vh;
  font-size: 1rem;
  font-family: Open Sans;
  font-weight: 700;
  color: #737373;
  opacity: 0.5;
  box-sizing:border-box;
  border: none;
  border-bottom: 1px solid ${props => props.errors ? 'red' : '#737373'};
  background: none;
  box-shadow: none;
  &:placeholder {
    color: #737373;
    opacity: 0.2;
    font-family: $font-base;
  }
  &:focus {
    outline:none;
  }
`;

const Right = styled.form`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 60px;
`;

const ValidateData = styled.div`
  color: red;
  font-size: 0.8rem;
  height: 1rem;
`;

const Success = styled.div`
  color: green;
  font-size: 0.8rem;
  height: 2rem;
  padding-top: 20px;
`;

const Footer = styled.footer`
  width: 100%; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  transform: translateY(15vh);
  h1 {
    width: 80%;
    display: flex;
    justify-content: center;
    font-size: 1.2rem;
  }
  div {
    display: flex;
    justify-content: space-between;
    img {
      padding: 1vh 1vw;
    }
  }
`

const HomeContact = () => {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [message,setMessage] = useState('');
  const [correctName,  setCorrectName] = useState(true);
  const [correctEmail,  setCorrectEmail] = useState(true);
  const [correctMessage,  setCorrectMessage] = useState(true);
  const [status, setStatus] = useState('error');
  const [errors, setErrors] = useState(null);

  const validateName = name => {
    const reg = /^[a-zA-Z]+$/;
    return reg.test(name);
  }

  const validateEmail = email => {
    const reg = /\S+@\S+\.\S+/;
    return reg.test(email);
  }

  const validateMessage = message => {
    return message.length > 120 ? true : false;
  }

  const sendMesage = () => {
    const data = {name,email,message};
    
    fetch(`https://fer-api.coderslab.pl/v1/portfolio/contact`, 
        {
            headers: {
              "Content-Type": "application/json"
            },
            method: 'POST',
            body: JSON.stringify(data)
        })   
        .then(resp => resp.json()) 
        .then(dataFromApi => {
            console.log(dataFromApi)
            setStatus(dataFromApi.status)
            if ( dataFromApi.status === 'error') {
              setErrors(dataFromApi.errors)
            }
        })
        .catch(err => {
          console.error(err);
        });
    setCorrectName(validateName(name));
    setCorrectEmail(validateEmail(email));
    setCorrectMessage(validateMessage(message));
  }

  useEffect(()=> {

  }, [name,email,message]);

  return (
    <Container name="Contact">
      <Background />
      <Right>
        <Title>Skontaktuj się z nami</Title>
        <Decoration/>
        <Success>{ status === 'success'  && <div><div>Wiadomość została wysłana!</div><div>Wkrótce się skontaktujemy.</div></div> }</Success>
        <Top>
          <Receive small> 
            <ReceiveTitle>Wpisz swoje imię</ReceiveTitle>
            <ReceiveData 
              errors={!correctName}
              onChange={e=>setName(e.target.value)}
              placeholder={'Podaj imię...'}>
            </ReceiveData>
            <ValidateData>{ !correctName && 'Podane imię jest nieprawidłowe!'}</ValidateData>  
          </Receive>
          <Receive small> 
            <ReceiveTitle>Wpisz swój email</ReceiveTitle>
            <ReceiveData
              errors={!correctEmail}
              onChange={e=>setEmail(e.target.value)}
              placeholder={'Podaj email...'}>
            </ReceiveData> 
            <ValidateData>{ !correctEmail && 'Podane email jest nieprawidłowy!'}</ValidateData>  
          </Receive>
        </Top>
        <Receive big> 
          <ReceiveTitle>Wpisz swoją wiadomość</ReceiveTitle>
          <ReceiveDataTextarea
            errors={!correctMessage}
            onChange={e=>setMessage(e.target.value)}
            placeholder={'Wpisz wiadomość...'}>
          </ReceiveDataTextarea> 
          <ValidateData>{ !correctMessage && 'Wiadomość musi mieć conajmniej 120 znaków!'}</ValidateData>  
        </Receive>
      </Right>
      <Button send onClick={() => sendMesage()}>Wyślij</Button>
      <Footer>
        <h1>Copyright by Coders Lab</h1>
        <div>
            <img src={instagram} alt="instagram icon"/>
            <img src={facebook} alt="facebook icon"/>
        </div>
      </Footer>
    </Container>
  );
}
 
export default HomeContact;