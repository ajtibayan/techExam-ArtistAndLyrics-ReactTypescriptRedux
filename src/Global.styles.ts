import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";

export const GlobalStyles = createGlobalStyle`
    ${normalize}

    body {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    h2 {
        position: absolute;
        top: 1px;
        left: 1px;
        margin: 0;
        padding: 0 5px;
        background-color: #767676;
        border: 1px solid #676767;
        border-radius: 5px;
        color: white;
        font-size: 1rem;
    }

    section {
        border-radius: 5px;
    }

    button {
        border-radius: 5px;
    }
`;
