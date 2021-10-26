import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 :root {
    --background: #f0f2f5;
    --red: #e52e4d;
    --blue: #5429cc;
    --green: #33cc95;
    --blue-light: #6933FF;
    --text-title: #363f5f;
    --text-body: #969cb3;
    --shape: #FFFFFF;
  }
*{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
}

body{
    -webkit-font-smoothing: antialiased;
    background: var(--background);
}
body,input,textarea,button{
    font-family:'Poppins',sans-serif;
    font-weight: 400;
}
h1,h2,h3,h4,h5,h6,strong{
    font-weight: 600;
}
button{
    cursor: pointer;
}
[disabled]{
    opacity: 0.6;
    cursor: not-allowed;
}
`;
