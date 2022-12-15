import styled from '@emotion/styled';

export const Sidebar = styled.div`
  background: ${(props: any) => props.theme.sideBar.background};
  border-right: 1px solid ${(props: any) => props.theme.borderColor.lightGrey};
  width: 320px;
  min-width: 320px;
  overflow-y: scroll;

  a {
    text-decoration: none;
    display: block;
    padding: 8px 20px;
    color: #111;

    &:hover {
      background: rgba(0, 0, 0, 0.05);
    }

    &.active {
      background: rgba(0, 0, 0, 0.05);
    }
  }

  li {
    position: relative;
  }

  li li:before {
    content: '';
    position: absolute;
    left: 20px;
    height: 100%;
    border-left: 1px solid rgba(0, 0, 0, 0.12);
    width: 1px;
    top: 0;
  }

  li li a {
    padding-left: 40px;
  }
`;
