import React from "react";
import styled from "@emotion/styled";

interface Props {
  disablePadding?: boolean;
}
export const ListSubheader = styled.li`
  padding: ${(props: Props) => !props.disablePadding ? '' : '0 20px'};
`
