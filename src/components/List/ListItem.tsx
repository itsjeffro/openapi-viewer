import React from "react";
import styled from "styled-components";

interface Props {
  disablePadding?: boolean
}

const ListItem = styled.li`
  list-style: none;
  padding: ${(props: Props) => props.disablePadding ? '0' : '15px 0'};
  
  p {
    margin: 15px 0 0;
  }
`

export default ListItem
