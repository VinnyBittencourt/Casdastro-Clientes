import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        outlone: 0;
        box-sizing: border-box;
    }

    html, body, root {
        min-height: 100%;
    }

    body {
        // background: #7159c1;
        background: white;
        -webkit-font-smoothing: antilased !important;
    }

    body, input, button {
        color: #222;
        font-size: 14px;
        font-family: Arial, Helvetica, Sans-serif;
    }

    button {
        cursor: pointer;
    }
`

