import { ThemeProvider } from '@emotion/react';
import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { GlobalStyle } from './components/GlobalStyle';
import theme from './theme';
import HomeScreen from './screens/HomeScreen';
import ReferenceScreen from './screens/ReferenceScreen';
import StateProvider from './state/stateProvider';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StateProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/references/:endpoint" element={<ReferenceScreen />} />
          </Routes>
        </Layout>
      </StateProvider>
    </ThemeProvider>
  );
}

export default App;
