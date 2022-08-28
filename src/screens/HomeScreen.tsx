import useFetchSpec from "../hooks/useFetchSpec";
import {useContext} from "react";
import {OpenApiContext} from "../contexts/openApiContext";

const HomeScreen = () => {
  const { state } = useContext(OpenApiContext);

  useFetchSpec();

  if (state.isFetching) {
    return (
      <header className="header">
        <h1>Loading...</h1>
      </header>
    )
  }

  return (
    <>
      <header className="header">
        <h1>{ state.openApi.info.title }</h1>
      </header>

      <div className="container">
        <div className="section">
          <h2>Introduction</h2>

          <p>{ state.openApi.info.description }</p>
        </div>

        <div className="section">
          <h2>Servers</h2>

          <ul>
            { state.openApi.servers.map((server: any, index: number) => (
              <li key={ `server-${index}` }>
                { server.url }
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default HomeScreen
