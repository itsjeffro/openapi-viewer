import { Global, useTheme } from "@emotion/react";
import * as React from "react";

export const GlobalStyle = () => {
  const theme: any = useTheme();

  const styles = `
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
      background: ${theme.body.background};
      color: ${theme.fontColor.primary};
      font-size: ${theme.fontSize.base};
      font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
      -moz-osx-font-smoothing: grayscale;
    }
  
    a {
      color: ${theme.linkColor.idle};
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
      font-size: ${theme.fontSize.base};
    }
  `

  return <Global styles={styles} />
}
