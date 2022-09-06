import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --base-bg: #22212C;
    --base-card-bg: #302F3D;
    --base-text: #837E9F;
    --base-tag-bg: #CB92B1;
    --base-img-green: #00FF00;
    --icon-javascript: #E7DE79;
    --icon-typescript: #2f74a9

    --main-font: 'Merriweather Sans', sans-serif;
  }

    * {
    margin:0;
    padding:0;
    box-sizing: border-box;
    }
    
    a{
      color: inherit;
      text-decoration: none;
    }

    body {
    background-color: var(--base-bg);
    color: var(--base-text);
    -webkit-font-smoothing: antialiased;
    font-family: var(--main-font);
  }
`;