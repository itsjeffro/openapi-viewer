import {NavLink} from "react-router-dom";
import Divider from "./Divider";
import Box from "./Box";
import Sidebar from "./Sidebar";
import {List, ListItem, ListSubheader} from "./List";
import Text from "./Text";
import Flex from "./Flex";

interface PageInterface {
  tag: string
  name: string
}

interface Props {
  children: any
  pages: PageInterface[]
}

const Layout = (props: Props) => {
  const { pages } = props;

  return (
    <>
      <Sidebar className="sidebar">
        <Flex alignItems="center" height="60px" padding="0 20px">
          <strong>OpenAPI Viewer</strong>
        </Flex>

        <List>
          <ListItem disablePadding>
            <NavLink to={ `/` }>Home</NavLink>
          </ListItem>
        </List>

        <Divider />

        <List>
          <ListSubheader disablePadding>
            <Text as="h5">Reference</Text>
          </ListSubheader>

          { pages.map((page) => (
            <ListItem key={ `path-${page.tag}` } disablePadding>
              <NavLink
                className={({ isActive }) => isActive ? 'active' : '' }
                to={ `/references/${page.tag}` }
              >{ page.name }</NavLink>
            </ListItem>
          )) }
        </List>
      </Sidebar>

      <Box overflowX="auto" width="100%">
        { props.children }
      </Box>
    </>
  )
}

export default Layout
