import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { HashLink  as Link} from "react-router-hash-link";
import { Divider } from "../Divider";
import { Box } from "../Box";
import { Sidebar } from "../Sidebar";
import { List, ListItem, ListSubheader } from "../List";
import { Text } from "../Text";
import { Flex } from "../Flex";
import { StateContext } from "../../state/stateProvider";
import { slugify } from "../../lib/string";

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

  const menuLinks = {};
  const paths = state?.openApi?.data?.paths || {};

  Object.keys(paths).forEach((key) => {
    const path = paths[key];

    Object.keys(path).forEach((method) => {
      path[method]?.tags.forEach((pathMethod) => {
        menuLinks[pathMethod] = {
          title: pathMethod,
          slug: pathMethod,
          subLinks: [
            ...menuLinks[pathMethod]?.subLinks || [],
            {
              title: path[method].summary,
              anchor: path[method].summary,
            }
          ],
        };
      });
    });
  });

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

          { Object.keys(menuLinks).map((menuLink) => (
            <ListItem key={ `path-${menuLinks[menuLink].slug}` } disablePadding>
              <NavLink
                className={({ isActive }) => isActive ? 'active' : '' }
                to={ `/references/${menuLinks[menuLink].slug}` }
              >{ menuLinks[menuLink].title }</NavLink>
              <Box display="none">
                <List>
                  { menuLinks[menuLink].subLinks.map((subLink) => (
                    <ListItem disablePadding key={slugify(subLink.anchor)}>
                      <Link to={ `/references/${menuLinks[menuLink].slug}#${slugify(subLink.anchor)}` }>
                        - { subLink.title }
                      </Link>
                    </ListItem>
                  )) }
                </List>
              </Box>
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
