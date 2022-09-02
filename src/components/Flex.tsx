import styled from "styled-components";

interface Props {
  alignItems?: string
}

const Flex = styled.div`
  display: flex;
  align-items: ${(props: Props) => props.alignItems || 'inherit'}
`

export default Flex