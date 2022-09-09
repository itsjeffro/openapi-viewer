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
    marginRight: props.marginRight,
    marginLeft: props.marginLeft,
    marginTop: props.marginTop,
    marginBottom: props.marginBottom,

    width: props.width,
    maxWidth: props.maxWidth,
    height: props.height,
    maxHeight: props.maxHeight,

    overflowX: props.overflowX,
    overflowY: props.overflowY,
  }
})

export default Box
