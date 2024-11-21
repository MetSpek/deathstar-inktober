import {createGlobalStyle} from "styled-components";

 
const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    :root {
        // Primitives
        --color-white: #fff;
        --color-black: #000;
        --color-light-gray: #D9D9D9;

        --color-primary: #fff;
        --color-secondary: #000;

        --color-background: #222222;
        --color-background-gray-transparent: rgba(217, 217, 217, 0.2);
        --color-background-black-transparent: rgba(0, 0, 0, 0.9);

        // Font properties
        --font: 'Raleway', sans-serif;
        --fw-thin: 100;
        --fw-extra-light: 200;
        --fw-light: 300;
        --fw-regular: 400;
        --fw-medium: 500;
        --fw-semi-bold: 600;
        --fw-bold: 700;
        --fw-extra-bold: 800;
        --fw-black: 900;

        // Font sizes
        --fs-heading-1: 4.8rem;
        --fs-heading-2: 3.6rem;
        --fs-heading-3: 2rem;
        --fs-text: 1.8rem;
        --fs-label: 2rem;
        --fs-tooltip: 1.6rem;
        --fs-button: 2rem;
        --fs-multi-value: 1.6rem;
        --fs-footer: 1.4rem;
    }

    html, body {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        margin: 0;
        padding: 0;
        font-size: 62.5%;
        font-family: var(--font), ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        background-color: var(--color-background);
        line-height: 1.25;
        -webkit-text-size-adjust: 100%;
        tab-size: 4;
        font-feature-settings: normal;

        color: var(--color-primary);
        background-color: var(--color-background);
    }

    h1 {
        font-size: var(--fs-heading-1);
    }

    h2 {
        font-size: var(--fs-heading-2);
    }

    h3 {    
        font-size: var(--fs-heading-3);
    }

`;

export default GlobalStyle;
