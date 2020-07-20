import  styled, { css } from 'styled-components';
export const global = css`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body{
    height: 100%;
  }
  body{
    font-size: 16px;
  }
  header, footer{
    background: #000000;
    padding: 1em;
    color: #f6f6f5;
  }
  main{
    padding: 1em;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: ${props => props.pos || "center"};
`;