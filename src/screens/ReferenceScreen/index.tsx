import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '../../components/Box';
import { Container } from '../../components/Container';
import { Divider } from '../../components/Divider';
import { Flex } from '../../components/Flex';
import { Header } from '../../components/Header';
import { Text } from '../../components/Text';
import Sample from './components/Sample';
import GeneralDescription from './components/GeneralDescription';
import ParameterDetails from './components/ParameterDetails';
import BodyDetails from './components/BodyDetails';
import ResponseList from './components/ResponseList';
import useFetchSpec from '../../hooks/useFetchSpec';
import OpenApi from '../../lib/OpenApi';
import { Path } from '../../lib/OpenApi/Paths';
import { groupParams } from '../../lib/parameters';
import { slugify, ucfirst } from '../../lib/string';
import { StateContext } from '../../state/stateProvider';

function ReferenceScreen() {
  const { endpoint } = useParams();
  const { state } = useContext(StateContext);

  useFetchSpec();

  if (state.openApi.isFetching) {
    return (
      <Header>
        <Text fontWeight="medium">Loading...</Text>
      </Header>
    );
  }

  const tagName = endpoint || '';
  const tagHeading = ucfirst(tagName.replace('-', ' '));

  const openApi = new OpenApi(state.openApi.data);
  const server = openApi.servers().first();
  const tag = openApi.tags().filterByName(tagName).first();
  const paths = openApi.paths().filterByTagName(tagName).get();

  return (
    <>
      <Header>
        <Text fontWeight="medium">{openApi.info().title} \ References</Text>
      </Header>

      <Container>
        <Flex gap="15px" flexDirection="column" paddingTop="30px" paddingBottom="30px">
          <Text as="h1" disableMargin>
            {tagHeading}
          </Text>
          <GeneralDescription tagDescription={tag ? tag.description : null} />
        </Flex>

        {paths.map((path: Path, index: number) => {
          const pathSummary = path.summary || `${path.method} ${path.name}`;
          const headingId = slugify(pathSummary);
          const { headers, paths, queries } = groupParams(path.parameters);
          const hasParameters = headers.length > 0 || paths.length > 0 || queries.length > 0 || path.requestBody;

          return (
            <Box key={index}>
              <Divider />

              <Box paddingTop="30px" paddingBottom="30px" key={`method-${index}`}>
                <Text as="h2" id={headingId}>
                  {pathSummary}
                </Text>

                <Flex flexDirection="row">
                  <Flex flexDirection="column" flex="1" padding="0 80px 0 0" gap="30px">
                    <Text as="p" disableMargin>
                      {path.description}
                    </Text>

                    <Box>
                      {hasParameters && (
                        <Text as="h4" disableMargin>
                          Parameters
                        </Text>
                      )}

                      <ParameterDetails heading="Headers" parameters={headers} />
                      <ParameterDetails heading="Path parameters" parameters={paths} />
                      <ParameterDetails heading="Query parameters" parameters={queries} />
                      <BodyDetails requestBody={path.requestBody} />
                    </Box>
                  </Flex>

                  <Box width="580px" maxWidth="580px">
                    <Text as="h4">Code samples</Text>
                    <Sample
                      host={server ? server.url : ''}
                      method={path.method}
                      defaultPathKey={path.name}
                      requestBody={path.requestBody}
                    />
                    <Text as="h5">Responses</Text>
                    <ResponseList responses={path.responses} />
                  </Box>
                </Flex>
              </Box>
            </Box>
          );
        })}
      </Container>
    </>
  );
}

export default ReferenceScreen;
