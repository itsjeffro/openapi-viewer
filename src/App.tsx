import { ThemeProvider } from '@emotion/react';
import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './components/GlobalStyle';
import { Layout } from './components/Layout';
import ReferenceScreen from './screens/ReferenceScreen';
import HomeScreen from './screens/HomeScreen';
import StateProvider from './state/stateProvider';
import theme from './theme';

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
