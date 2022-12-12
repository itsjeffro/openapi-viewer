import { ThemeProvider } from "@emotion/react";
import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { GlobalStyle } from "./components/GlobalStyle";
import routes from "./lib/routes";
import theme from "./theme";
import HomeScreen from "./screens/HomeScreen";
import ReferenceScreen from "./screens/ReferenceScreen";
import StateProvider from "./state/stateProvider";

function App() {
  const pages = Object.keys(routes).map((route) => {
    return { tag: route, name: routes[route].name }
  })

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StateProvider>
        <Layout pages={ pages }>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/references/:endpoint" element={<ReferenceScreen />} />
          </Routes>
        </Layout>
      </StateProvider>
    </ThemeProvider>
  )
}

export default App;
