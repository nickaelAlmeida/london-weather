import styled, { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background-color: #000000;
  }

  body, h1 {

    font-family: 'Roboto', sans-serif;
    font-size: 25px;
    font-weight: normal;

    color: #FAFDFF;
    -webkit-font-smoothing: antialiased;
  }
`;


export const Header = styled.header`

  display: flex;

  justify-content: space-between;
  align-items: center;

  padding: 15px;
  background-color: #32353E;
`;