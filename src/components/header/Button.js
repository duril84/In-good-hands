import styled from 'styled-components';

const Button = styled.button`
  color: ${props => props.lightButton ? '#737373' : '#3C3C3C'};
  border: 0.75px solid ${props => props.mainHeader ? '#3C3C3C' : 'transparent'};
  border: 0.75px solid ${props => props.send ? '#3C3C3C' : 'transparent'};
  background-color: transparent;
  font-size: ${props => props.lightButton ? '0.7rem' : '0.92rem' };
  font-size: ${props => props.mainHeader && '1.9rem' };
  font-size: ${props => props.help && '1.4rem' };
  font-weight: ${props => props.mainHeader && '200' };
  margin: ${props => props.mainHeader && '0 15px' }
  width: ${props => props.mainHeader && '280px' };
  width: ${props => props.send && '140px' };
  height: ${props => props.send && '50px' };
  padding: ${props => props.lightButton ? '9px 10px' : '9px 20px' };
  :hover {
    border: 0.75px solid ${props => props.lightButton ? '#FAD648' : '#3C3C3C'};
  }
`;
 
export default Button;
