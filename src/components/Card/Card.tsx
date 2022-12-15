import React from 'react';
import styled from '@emotion/styled';

export const Card = styled.div`
  border: 1px solid ${(props: any) => props.theme.borderColor.grey};
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgb(0 0 0 / 4%);
  margin-bottom: 15px;
`;
