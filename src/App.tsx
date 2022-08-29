import * as React from "react";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ReferenceScreen from "./screens/ReferenceScreen";
import Layout from "./components/Layout";
import StateProvider from "./state/stateProvider";
import routes from "./lib/routes";

function App() {
  const pages = Object.keys(routes).map((route) => {
    return { tag: route, name: routes[route].name }
  })

  return (
    <StateProvider>
      <Layout pages={ pages }>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/references/:endpoint" element={<ReferenceScreen />} />
        </Routes>
      </Layout>
    </StateProvider>
  )
}

export default App;
