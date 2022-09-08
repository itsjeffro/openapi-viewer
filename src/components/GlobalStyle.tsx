import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: content-box;
  }
  
  html,
  body {
    height: 100%;
  }

  body {
    background: ${props => props.theme.body.background};
    color: ${props => props.theme.fontColor.primary};
    font-size: ${props => props.theme.fontSize.base};
    font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
    -moz-osx-font-smoothing: grayscale;
  }
  
  a {
    color: ${props => props.theme.linkColor.idle};
  }
  
  ul {
    padding-left: 1em;
    margin: .5em 0;
  }
  
  li {
    padding: 0.2em 0;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-size: ${props => props.theme.fontSize.base};
  }
`

export default GlobalStyle