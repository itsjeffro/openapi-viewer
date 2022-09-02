import styled from "styled-components";

interface Props {
  variant: string
  theme: any
}

const variants = {
  primary: {
    background: '#0c5ecc',
    color: '#fff',
  }
}

const Badge = styled.span`
  padding: 1px 9px;
  line-height: 1.5em;
  display: inline-block;
  border-radius: 5px;
  font-size: ${(props: Props) => variants[props.variant] || props.theme.fontSize.small};
  background: #eeefef;
  color: ${(props: Props) => variants[props.variant] || '#111'}
`

export default Badge
