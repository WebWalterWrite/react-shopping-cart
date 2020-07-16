import styled from 'styled-components/macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const IconStyled = styled(FontAwesomeIcon)`
  color: ${props => props.color || "#f6f6f5"};
  font-size: ${props => `${props.size}em`};
`;

