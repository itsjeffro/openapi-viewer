import styled from "styled-components";

interface Props {
  flex?: string | number
  paddingRight?: string | number
  width?: string | number
  maxWidth?: string | number
}

const Box = styled.span`
  flex: ${(props: Props) => props.flex || 'inherit'};
  padding-right:  ${(props: Props) => props.paddingRight || 0};
  width:  ${(props: Props) => props.width || 'inherit'};
  max-width:  ${(props: Props) => props.maxWidth || 'inherit'};
`

export default Box
