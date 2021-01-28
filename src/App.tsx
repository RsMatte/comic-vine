import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Routes from './routes';
import GlobalStyle from './styles/global';
import { store, persistor } from './store/store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
        <GlobalStyle />
        <ToastContainer autoClose={3000} hideProgressBar closeOnClick />
      </PersistGate>
    </Provider>
  );
}

export default App;
