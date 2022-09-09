import styled from "styled-components";

const CardHeader = styled.div(props => ({
  padding: '12px 15px',
  borderBottom: `1px solid ${props.theme.borderColor.lightGrey}`,
}))

export default CardHeader
