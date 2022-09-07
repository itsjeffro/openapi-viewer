import React from "react";
import styled from "styled-components";

const Header = styled.header`
  border-bottom: 1px solid ${props => props.theme.borderColor.lightGrey};
  box-shadow: 0 1px 4px rgb(0 0 0 / 10%);
  padding: 0 30px;
  height: 60px;
  display: flex;
  align-items: center;
`

export default Header
