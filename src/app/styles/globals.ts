'use client';

import { css } from '@emotion/react';

const globalStyles = css`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        height: 100vh;
        font-family: 'Arial', sans-serif;
        background-color:rgb(23, 23, 24);
        color: #333;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    ul, ol {
        list-style: none;
    }

    button {
        cursor: pointer;
        border: none;
        background: none;
    }
`;

export default globalStyles;