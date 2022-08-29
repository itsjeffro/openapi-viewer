import useFetchSpec from "../hooks/useFetchSpec";
import {useContext} from "react";
import {StateContext} from "../state/stateProvider";
import Container from "../components/Container";
import Section from "../components/Section";
import Header from "../components/Header";

const HomeScreen = () => {
  const { state } = useContext(StateContext);

  useFetchSpec();

  if (state.openApi.isFetching) {
    return (
      <Header>
        <h1>Loading...</h1>
      </Header>
    )
  }

  const openApi = state.openApi.data;

  return (
    <>
      <Header>
        <h1>{ openApi.info.title }</h1>
      </Header>

      <Container>
        <Section>
          <h2>Introduction</h2>

          <p>{ openApi.info.description }</p>
        </Section>

        <Section>
          <h2>Servers</h2>

          <ul>
            { openApi.servers.map((server: any, index: number) => (
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
