import styled from "styled-components";

const Sidebar = styled.div((props) => ({
  background: props.theme.sideBar.background,
  borderRight: `1px solid ${props.theme.borderColor.lightGrey}`,
  width: '320px',
  minWidth: '320px',
}))

export default Sidebar
