import ParametersList from "./../components/ParametersList";
import ResponseList from "./../components/ResponseList";
import Sample from "./../components/Sample";
import {useParams} from "react-router-dom";
import useFetchSpec from "../hooks/useFetchSpec";
import {filterByTag} from "../lib/paths";
import {useContext} from "react";
import {StateContext} from "../state/stateProvider";

function ReferenceScreen() {
  let { endpoint } = useParams();

  const { state } = useContext(StateContext);

  useFetchSpec();

  if (state.openApi.isFetching) {
    return (
      <header className="header">
        <h1>Loading...</h1>
      </header>
    )
  }

  const tag = endpoint || '';
  const openApi = state.openApi.data;
  const host = openApi.servers[0].url;

  const endpoints = filterByTag(openApi, tag);

  return (
    <>
      <header className="header">
        <h1>{ openApi.info.title } \ References</h1>
      </header>

      <div className="container">
        <div className="heading">
          <h1>{ tag.replace('-', ' ') }</h1>
        </div>

        On this page:

        <ul>
          { endpoints.map(endpoint => (
            <li>
              <a
                href={ `#${endpoint.summary.replaceAll(' ', '-')}` }
                title={ `Go to ${endpoint.summary}` }
              >{ endpoint.summary }</a></li>
          ))}
        </ul>

        { endpoints.map((endpoint, index: number) => {
          const path = endpoint;

          return (
            <div key={ `method-${index}` } className="section">
              <h2 id={ path.summary.replaceAll(' ', '-') }>{ path.summary }</h2>

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
