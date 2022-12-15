import styled from '@emotion/styled';

export const Tabs = styled.div`
  padding: 0 15px;
`;

export const Tab = styled.button`
  padding: 18px 10px 16px;
  margin-right: 10px;
  border: 0;
  cursor: pointer;
  background: transparent;
  border-bottom: 2px solid transparent;

  &.active {
    border-color: #ff2f00;
  }
  &.active:hover {
    border-color: #c92b07;
  }
  &:hover {
    border-color: #ddd;
  }
`;
