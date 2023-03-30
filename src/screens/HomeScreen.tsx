import { useContext } from 'react';
import useFetchSpec from '../hooks/useFetchSpec';
import OpenApi from '../lib/OpenApi';
import { StateContext } from '../state/stateProvider';
import { Container } from '../components/Container';
import { Header } from '../components/Header';
import { Text } from '../components/Text';
import { Box } from '../components/Box';

const HomeScreen = () => {
  const { state } = useContext(StateContext);

  useFetchSpec();

  if (state.openApi.isFetching) {
    return (
      <Header>
        <Text fontWeight="medium">Loading...</Text>
      </Header>
    );
  }

  const openApi = new OpenApi(state.openApi.data);

  const servers = openApi.servers().get();

  return (
    <>
      <Header>
        <Text fontWeight="medium">{openApi.info().title}</Text>
      </Header>

      <Container>
        <Box paddingTop="30px" paddingBottom="30px">
          <Text as="h2">Introduction</Text>
          <Text as="p">{openApi.info().description}</Text>
        </Box>

        <Box paddingTop="30px" paddingBottom="30px">
          <Text as="h2">Servers</Text>

          <ul>
            {servers.map((server: any, index: number) => (
              <li key={`server-${index}`}>{server.url}</li>
            ))}
          </ul>
        </Box>
      </Container>
    </>
  );
};

export default HomeScreen;
