import * as React from "react";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import EndpointScreen from "./screens/EndpointScreen";
import Layout from "./components/Layout";

function App() {
  const pages = [
    { tag: 'csrf-token', name: 'CSRF token' },
    { tag: 'legal-entity', name: 'Legal entities' },
  ]

  return (
    <Layout pages={ pages }>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/endpoints/:endpoint" element={<EndpointScreen />} />
      </Routes>
    </Layout>
  )
}

export default App;
