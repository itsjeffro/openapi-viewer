import {NavLink} from "react-router-dom";
import Divider from "./Divider";

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
      <div className="sidebar">
        <div className="sidebar__heading">
          <strong>OpenAPI Viewer</strong>
        </div>

        <ul>
          <li className="sidebar__item">
            <NavLink to={ `/` }>Home</NavLink>
          </li>
        </ul>

        <Divider />

        <ul>
          <li className="sidebar__item">
            <h5>Reference</h5>
          </li>
          { pages.map((page) => (
            <li key={ `path-${page.tag}` } className="sidebar__item">
              <NavLink
                className={({ isActive }) => isActive ? 'active' : '' }
                to={ `/references/${page.tag}` }
              >{ page.name }</NavLink>
            </li>
          )) }
        </ul>
      </div>

      <div className="content-wrapper">
        { props.children }
      </div>
    </>
  )
}

export default Layout
