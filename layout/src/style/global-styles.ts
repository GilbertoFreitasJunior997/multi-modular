import { createGlobalStyle } from "styled-components";
import colors from "./colors";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;

        box-sizing: border-box;

        font-family: 'Roboto', sans-serif;
        font-size: 1em;
        color: ${colors.dark}
        
        transition: all 200ms ease-in-out;
    }

    body {
        min-width: 100vw;
        width: 100vw;
        min-height: 100vh;
        height: 100vh;
    }
`;
