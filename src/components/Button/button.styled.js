import styled from "styled-components/macro";

export const ButtonBox = styled.div`
 background: ${props => props.color};
 display: flex;
 align-items: center; 
 justify-content: center;
 padding: .8em;
 cursor: pointer;
 >svg{
   width: fit-content;
 }
  button{
    width: fit-content;
    border: none;
    color: #ffffff;
    font-weight: bold;
    background: transparent;
    text-transform: uppercase;
    text-align: left;
    margin-left: .3em;
  }
`;