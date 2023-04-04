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
    background-color: #f1f1f1f1;
    color: darkslategray;
    letter-spacing: 0.5px;
  }
`;
