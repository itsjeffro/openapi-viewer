import styled from "@emotion/styled";

export const Sidebar = styled.div`
  background: ${(props: any) => props.theme.sideBar.background};
  border-right: 1px solid ${(props: any) => props.theme.borderColor.lightGrey};
  width: 320px;
  min-width: 320px;

  a {
    text-decoration: none;
    display: block;
    padding: 10px 20px;
    
    &:hover {
      background: rgba(0,0,0,.02),
    }
    
    &.active {
      background: rgba(0,0,0,.05);
    }
  }
`;
