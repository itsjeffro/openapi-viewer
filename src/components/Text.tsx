import styled from "styled-components";

interface Props {
  fontWeight: string
}

const weights = {
  regular: 300,
  medium: 500,
  bold: 700,
}

const Text = styled.span`
  font-weight: ${(props: Props) => weights[props.fontWeight] || 300}
`

export default Text
