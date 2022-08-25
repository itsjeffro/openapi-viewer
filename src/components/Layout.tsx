import {Link} from "react-router-dom";

const Layout = (props) => {
  const { pages } = props;

  return (
    <div className="main-content">
      <div className="sidebar">
        <div className="sidebar__heading">
          <strong>OpenAPI Viewer</strong>
        </div>

        <ul>
          <li className="sidebar__item">
            <Link to={ `/` }>Home</Link>
          </li>
        </ul>

        <hr />

        <ul>
          <li className="sidebar__item">
            <h5>Reference</h5>
          </li>
          { pages.map((page) => (
            <li key={ `path-${page.tag}` } className="sidebar__item">
              <Link to={ `/endpoints/${page.tag}` }>{ page.name }</Link>
            </li>
          )) }
        </ul>
      </div>

      <div className="content">
        { props.children }
      </div>
    </div>
  )
}

export default Layout
