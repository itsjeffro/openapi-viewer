import styled from "styled-components";

interface Props {
  fontWeight?: string
  fontSize?: string
  theme?: any
  as?: string
}

const weights = {
  regular: 300,
  medium: 500,
  bold: 700,
}

const sizes = {
  medium: '1.1em',
}

const Text = styled.span((props: Props) => {
  return {
    fontWeight: weights[props.fontWeight] || null,
    fontSize: sizes[props.fontSize] || null,
    ...props.theme.typography[props.as]
  }
})

export default Text
