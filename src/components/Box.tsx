import styled from "styled-components";

interface Props {
  flex?: string | number
  paddingRight?: string | number
  width?: string | number
  maxWidth?: string | number
  overflowX?: string
}

const Box = styled.span((props) => {
  return {
    flex: props.flex,
    paddingRight: props.paddingRight,
    paddingLeft: props.paddingLeft,
    paddingTop: props.paddingTop,
    paddingBottom: props.paddingBottom,
    width: props.width,
    maxWidth: props.maxWidth,
    overflowX: props.overflowX,
  }
})

export default Box
