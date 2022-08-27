import ParametersList from "./../components/ParametersList";
import ResponseList from "./../components/ResponseList";
import Sample from "./../components/Sample";
import {useParams} from "react-router-dom";
import useFetchSpec from "../hooks/useFetchSpec";
import {filterByTag} from "../lib/paths";

function ReferenceScreen() {
  let { endpoint } = useParams();

  const { isLoading, data } = useFetchSpec();

  if (isLoading) {
    return (
      <header className="header">
        <h1>Loading...</h1>
      </header>
    )
  }

  const host = data.servers[0].url;

  const endpoints = filterByTag(data, endpoint || '');

  return (
    <>
      <header className="header">
        <h1>{ data.info.title }</h1>
      </header>

      <div className="container">
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
