import ParametersList from "./../components/ParametersList";
import ResponseList from "./../components/ResponseList";
import Sample from "./../components/Sample";
import {useParams} from "react-router-dom";
import useFetchSpec from "../hooks/useFetchSpec";
import {filterByTag} from "../lib/paths";
import {useContext} from "react";
import {OpenApiContext} from "../contexts/openApiContext";

function ReferenceScreen() {
  let { endpoint } = useParams();

  const { state } = useContext(OpenApiContext);

  useFetchSpec();

  if (state.isFetching) {
    return (
      <header className="header">
        <h1>Loading...</h1>
      </header>
    )
  }

  const tag = endpoint || '';
  const host = state.openApi.servers[0].url;

  const endpoints = filterByTag(state.openApi, tag);

  return (
    <>
      <header className="header">
        <h1>{ state.openApi.info.title } \ References</h1>
      </header>

      <div className="container">
        <div className="heading">
          <h1>{ tag.replace('-', ' ') }</h1>
        </div>

        { endpoints.map((endpoint, index: number) => {
          const path = endpoint;

          return (
            <div key={ `method-${index}` } className="section">
              <h2>{ path.summary }</h2>

              <div className="endpoint-details">
                <div className="endpoint-details__parameters">
                  <p className="endpoint-details__description">{ path.description }</p>

                  <h4>Parameters</h4>

                  <ParametersList
                    requestBody={ path.requestBody }
                    parameters={ path.parameters }
                  />
                </div>

                <div className="endpoint-details__samples">
                  <h4>Code samples</h4>

                  <Sample
                    host={ host }
                    method={ endpoint.method }
                    defaultPathKey={ endpoint.path }
                    requestBody={ path.requestBody }
                  />

                  <h5>Responses</h5>

                  <ResponseList responseBody={ path }/>
                </div>
              </div>
            </div>
          )
        }) }
      </div>
    </>
  )
}

export default ReferenceScreen
