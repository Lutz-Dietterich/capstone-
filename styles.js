import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: system-ui;
    background-color: #fff7f7;
    color: darkslategray;
    letter-spacing: 0.5px;
  }
`;
