import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Segoe UI', 'Roboto', 'Arial', sans-serif;
    background: #f4f6fa;
    color: #222;
    min-height: 100vh;
  }
`;

export const AppWrapper = styled.div`
  min-height: 100vh;
  background: #f4f6fa;
`;