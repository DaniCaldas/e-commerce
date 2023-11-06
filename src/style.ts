import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        font-family: font, sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        @font-face {
            font-family: 'font';
            src: url('./fonts/Roboto-Black.ttf');
        }
    }
    body{
        background-color: #F4F3EE;
    }
`;

const Body = styled.main`
    height: 400vh;
    
`;

const H1 = styled.h1`
    font-size: 2.5rem ;
    color: #252525;
    padding: 20px;
`;
export{
    Body,
    H1
}