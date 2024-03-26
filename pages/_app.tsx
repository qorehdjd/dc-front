import Head from 'next/head';
import React from 'react';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';

import wrapper, { persistor } from '@/store';
import { PersistGate } from 'redux-persist/integration/react';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ul {
    list-style: none;
  }
  ol {
    list-style: none;
  }
  html {
    font-size: 10px;
  }
`;

function App({ Component, ...rest }: { Component: React.ElementType }) {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <GlobalStyle />
          <Head>
            <meta charSet='utf-8' />
            <title>dcinside</title>
          </Head>
          <Component {...props.pageProps} />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
