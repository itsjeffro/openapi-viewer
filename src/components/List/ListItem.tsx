import React from "react";
import styled from "@emotion/styled";

interface Props {
  disablePadding?: boolean
}

export const ListItem = styled.li`
  list-style: none;
  padding: ${(props: Props) => props.disablePadding ? '0' : '15px 0'};
  
  p {
    margin: 15px 0 0;
  }
`;
