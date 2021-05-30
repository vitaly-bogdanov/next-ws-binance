import { FC } from 'react';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import { useStore } from '../main/redux';

import '../styles/globals.css';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const store = useStore(pageProps.initialReduxState);
  return (
    <Provider store={store}>
      <Component { ...pageProps } />
    </Provider>
  );
};

export default App;