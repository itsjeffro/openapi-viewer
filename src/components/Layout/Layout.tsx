import {NavLink} from "react-router-dom";
import Divider from "./Divider";
import Box from "./Box";
import Sidebar from "./Sidebar";
import {List, ListItem, ListSubheader} from "./List";
import Text from "./Text";
import Flex from "./Flex";
import {useContext} from "react";
import {StateContext} from "../state/stateProvider";

interface PageInterface {
  tag: string
  name: string
}

interface Props {
  children: any
  pages: PageInterface[]
}

export const Layout = (props: Props) => {
  const { pages } = props;
  const { state } = useContext(StateContext);

  return (
    <>
      <Sidebar>
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
            <Text as="h5">{ state?.openApi?.data?.info?.title }</Text>
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
};
