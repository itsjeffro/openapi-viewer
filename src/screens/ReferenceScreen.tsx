import ParametersList from "./../components/ParametersList";
import ResponseList from "./../components/ResponseList";
import Sample from "./../components/Sample";
import {useParams} from "react-router-dom";
import useFetchSpec from "../hooks/useFetchSpec";

function ReferenceScreen() {
  let { endpoint } = useParams();

  const tag = endpoint || '';

  const { isLoading, data } = useFetchSpec();

  if (isLoading) {
    return (
      <header className="header">
        <h1>Loading...</h1>
      </header>
    )
  }

  const host = data.servers[0].url;

  let endpoints: any[] = [];

  Object.keys(data.paths).map(path => {
    const resourcePath = data.paths[path];

    Object.keys(data.paths[path]).map((method) => {
      const tags = resourcePath[method].tags;

      if (tags[0] === tag) {
        endpoints = [
          ...endpoints,
          {
            method: method,
            path: path,
            ...resourcePath[method]
          }
        ]
      }
    });
  });

  return (
    <>
      <header className="header">
        <h1>{ data.info.title }</h1>
      </header>

      <div className="section">
        { endpoints.map((endpoint, index: number) => {
          const path = endpoint;

          return (
            <div key={ `method-${index}` } className="section-endpoint">
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
