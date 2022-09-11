import styled from "styled-components";

const Sidebar = styled.div((props) => ({
  background: props.theme.sideBar.background,
  borderRight: `1px solid ${props.theme.borderColor.lightGrey}`,
  width: '320px',
  minWidth: '320px',
  a: {
    textDecoration: 'none',
    display: 'block',
    padding: '10px 20px',
    '&:hover': {
      background: 'rgba(0,0,0,.02)',
    },
    '&.active': {
      background: 'rgba(0,0,0,.05)',
    }
  }
}))

export default Sidebar
