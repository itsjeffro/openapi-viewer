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
import Flex from "../../components/Flex";
import Box from "../../components/Box";
import Text from "../../components/Text";

function ReferenceScreen() {
  const { endpoint } = useParams();
  const { state } = useContext(StateContext);

  useFetchSpec();

  if (state.openApi.isFetching) {
    return (
      <Header>
        <Text fontWeight="medium">Loading...</Text>
      </Header>
    )
  }

  const tagName = endpoint || '';
  const tagHeading = routes[tagName] ? routes[tagName].name : tagName;

  const openApi = new OpenApi(state.openApi.data)

  const server = openApi.servers().first();
  const tag = openApi.tags().filterByName(tagName).first();
  const paths = openApi.paths().filterByTagName(tagName).get();

  return (
    <>
      <Header>
        <Text fontWeight="medium">{ openApi.info().title } \ References</Text>
      </Header>

      <Container>
        <Section>
          <Text as="h1">{ tagHeading }</Text>

          <Flex>
            <Box flex="1" paddingRight="80px">
              <GeneralDescription tagDescription={ tag ? tag.description : null} />
            </Box>

            <Box width="580px" maxWidth="580px">
              <GeneralOnThisPage paths={ paths } />
            </Box>
          </Flex>
        </Section>

        { paths.map((path: Path, index: number) => {
          const pathSummary = path.summary || `${path.method} ${path.name}`;
          const headingId = pathSummary.replaceAll(' ', '-');
          const { headers, paths, queries } = groupParams(path.parameters);

          return (
            <Section key={ `method-${index}` }>
              <Text as="h2" id={ headingId }>{ pathSummary }</Text>

              <Flex>
                <Box flex="1" paddingRight="80px">
                  <Text as="p">{ path.description }</Text>

                  <Text as="h4">Parameters</Text>

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
                </Box>

                <Box width="580px" maxWidth="580px" className="endpoint-details__samples">
                  <Text as="h4">Code samples</Text>

                  <div className="endpoint-details__method">
                    <Sample
                      host={ server ? server.url : '' }
                      method={ path.method }
                      defaultPathKey={ path.name }
                      requestBody={ path.requestBody }
                    />
                  </div>

                  <Text as="h5">Responses</Text>

                  <div className="endpoint-details__response">
                    <ResponseList
                      responses={ path.responses }
                    />
                  </div>
                </Box>
              </Flex>
            </Section>
          )
        }) }
      </Container>
    </>
  )
}

export default ReferenceScreen
