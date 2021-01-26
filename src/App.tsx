import React from 'react';
import { Provider } from 'react-redux';
import Routes from './routes';
import GlobalStyle from './styles/global';
import store from './store/store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Routes />
      <GlobalStyle />
    </Provider>
  );
}

export default App;
