import useFetchSpec from "../hooks/useFetchSpec";
import {useContext} from "react";
import {StateContext} from "../state/stateProvider";

const HomeScreen = () => {
  const { state } = useContext(StateContext);

  useFetchSpec();

  if (state.openApi.isFetching) {
    return (
      <header className="header">
        <h1>Loading...</h1>
      </header>
    )
  }

  const openApi = state.openApi.data;

  return (
    <>
      <header className="header">
        <h1>{ openApi.info.title }</h1>
      </header>

      <div className="container">
        <div className="section">
          <h2>Introduction</h2>

          <p>{ openApi.info.description }</p>
        </div>

        <div className="section">
          <h2>Servers</h2>

          <ul>
            { openApi.servers.map((server: any, index: number) => (
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
