import * as React from "react";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ReferenceScreen from "./screens/ReferenceScreen";
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
        <Route path="/references/:endpoint" element={<ReferenceScreen />} />
      </Routes>
    </Layout>
  )
}

export default App;
