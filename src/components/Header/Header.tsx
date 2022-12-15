import React from 'react';
import styled from '@emotion/styled';

export const Header = styled.header`
  border-bottom: 1px solid ${(props: any) => props.theme.borderColor.lightGrey};
  padding: 0 30px;
  height: 60px;
  display: flex;
  align-items: center;
`;
