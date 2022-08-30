import ResponseList from "./components/ResponseList";
import Sample from "./components/Sample";
import {useParams} from "react-router-dom";
import useFetchSpec from "../../hooks/useFetchSpec";
import {useContext} from "react";
import {StateContext} from "../../state/stateProvider";
import routes from "../../lib/routes";
import Container from "../../components/Container";
import Section from "../../components/Section";
import Header from "../../components/Header";
import OpenApi from "../../lib/OpenApi";
import {Path} from "../../lib/OpenApi/Paths";
import GeneralOnThisPage from "./components/GeneralOnThisPage";
import GeneralDescription from "./components/GeneralDescription";
import {groupParams} from "../../lib/parameters";
import ParameterDetails from "./components/ParameterDetails";
import BodyDetails from "./components/BodyDetails";

function ReferenceScreen() {
  const { endpoint } = useParams();
  const { state } = useContext(StateContext);

  useFetchSpec();

  if (state.openApi.isFetching) {
    return (
      <Header>
        <h1>Loading...</h1>
      </Header>
    )
  }

  const tagName = endpoint || '';
  const openApi = new OpenApi(state.openApi.data)

  const server = openApi.servers().first();
  const tag = openApi.tags().filterByName(tagName).first();
  const paths = openApi.paths().filterByTagName(tagName).get();

  return (
    <>
      <Header>
        <h1>{ openApi.info().title } \ References</h1>
      </Header>

      <Container>
        <Section>
          <h1>{ routes[tagName].name }</h1>

          <div className="endpoint-general">
            <div className="endpoint-general__description">
              <GeneralDescription tagDescription={ tag.description || ''} />
            </div>

            <div className="endpoint-general__on-this-page">
              <GeneralOnThisPage paths={ paths } />
            </div>
          </div>
        </Section>

        { paths.map((path: Path, index: number) => {
          const pathSummary = path.summary || `${path.method} ${path.name}`;
          const headingId = pathSummary.replaceAll(' ', '-');
          const { headers, paths, queries } = groupParams(path.parameters);

          return (
            <Section key={ `method-${index}` }>
              <h2 id={ headingId }>{ pathSummary }</h2>

              <div className="endpoint-details">
                <div className="endpoint-details__parameters">
                  <p className="endpoint-details__description">{ path.description }</p>

                  <h4>Parameters</h4>

                  <ParameterDetails
                    heading="Headers"
                    parameters={ headers }
                  />

                  <ParameterDetails
                    heading="Path parameters"
                    parameters={ paths }
                  />

                  <ParameterDetails
                    heading="Query parameters"
                    parameters={ queries }
                  />

                  <BodyDetails
                    requestBody={ path.requestBody }
                  />
                </div>

                <div className="endpoint-details__samples">
                  <h4>Code samples</h4>

                  <div className="endpoint-details__method">
                    <Sample
                      host={ server ? server.url : '' }
                      method={ path.method }
                      defaultPathKey={ path.name }
                      requestBody={ path.requestBody }
                    />
                  </div>

                  <h5>Responses</h5>

                  <div className="endpoint-details__response">
                    <ResponseList
                      responses={ path.responses }
                    />
                  </div>
                </div>
              </div>
            </Section>
          )
        }) }
      </Container>
    </>
  )
}

export default ReferenceScreen
