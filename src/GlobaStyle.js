import { createGlobalStyle, GlobalStyleComponent } from "styled-components";
import { Link } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding:0;
        margin:0;
        font-family: 'Poppins', sans-serif;
    }
    body {

        background: #0f1624;
        color: #fff;
    }
    li {
        list-style: none
    }
`;
export default GlobalStyle;
