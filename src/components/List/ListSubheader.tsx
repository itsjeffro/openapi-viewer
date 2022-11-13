import React from "react";
import styled from "@emotion/styled";

interface Props {
  disablePadding?: boolean;
}
const ListSubheader = styled.li`
  padding: ${(props: Props) => !props.disablePadding ? '' : '0 20px'};
`

export default ListSubheader
