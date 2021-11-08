import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  :root {
    --color-black: rgb(8, 8, 10);
    --color-darkgrey: rgb(20, 20, 22);
    --color-grey: rgb(24, 24, 26);
    --color-lightgrey: rgb(30, 30, 32);
    --color-darkwhite: rgb(248, 248, 250);
    --color-white: #fff;
    --color-primary: rgb(58, 12, 162);
    --color-secondary: rgb(66, 16, 180);
    --color-tertiary: rgb(200, 236, 238);
    --color-quaternary: rgb(180, 236, 238);
    --color-shadow: rgba(32, 32, 34, 0.2);
    --weight-light: 300;
    --weight-regular: 400;
    --weight-medium: 500;
    --weight-bold: 600;
    --weight-black: 700;
  }
`;
 
export default GlobalStyle;
