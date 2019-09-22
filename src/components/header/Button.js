import styled from 'styled-components';
import colors from './../stylesJSS/colors';

const Button = styled.button`
  color: ${props => props.lightButton ? colors.lightButton.buttonColor : colors.darkButton.buttonColor};
  border: 0.75px solid ${props => props.mainHeader ? colors.darkButton.borderColor : 'transparent'};
  background-color: transparent;
  font-size: ${props => props.lightButton ? '0.7rem' : '0.92rem' };
  font-size: ${props => props.mainHeader && '1.9rem' };
  font-weight: ${props => props.mainHeader && '200' };
  margin: ${props => props.mainHeader && '0 15px' }
  width: ${props => props.mainHeader && '33%' };
  padding: ${props => props.lightButton ? '9px 10px' : '9px 20px' };

  :hover {
    border: 0.75px solid ${props => props.lightButton ? colors.lightButton.borderColor : colors.darkButton.borderColor};
  }
`;
 
export default Button;
