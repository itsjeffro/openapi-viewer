import useFetchSpec from "../hooks/useFetchSpec";
import {useContext} from "react";
import {StateContext} from "../state/stateProvider";
import Container from "../components/Container";
import Section from "../components/Section";
import Header from "../components/Header";
import OpenApi from "../lib/OpenApi";
import Text from "../components/Text";

const HomeScreen = () => {
  const { state } = useContext(StateContext);

  useFetchSpec();

  if (state.openApi.isFetching) {
    return (
      <Header>
        <Text fontWeight="medium">Loading...</Text>
      </Header>
    )
  }

  const openApi = new OpenApi(state.openApi.data);

  const servers = openApi.servers().get();

  return (
    <>
      <Header>
        <Text fontWeight="medium">{ openApi.info().title }</Text>
      </Header>

      <Container>
        <Section>
          <Text as="h2">Introduction</Text>

          <Text as="p">{ openApi.info().description }</Text>
        </Section>

        <Section>
          <Text as="h2">Servers</Text>

          <ul>
            { servers.map((server: any, index: number) => (
              <li key={ `server-${index}` }>
                { server.url }
              </li>
            ))}
          </ul>
        </Section>
      </Container>
    </>
  )
}

export default HomeScreen
