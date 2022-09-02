import React from "react";
import styled from "styled-components";

const ListItem = styled.div`
  border-top: 1px solid ${props => props.theme.borderColor.lightGrey};
  padding: 15px 0;
  
  p {
    margin: 15px 0 0;
  }
`

export default ListItem
