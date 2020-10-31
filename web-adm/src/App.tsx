import React from 'react';
import { SnackbarProvider } from 'snackfy';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './store';
import GlobalStyle from './styles/global';
import Routes from './routes';

function App() {
  return (
    <SnackbarProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <GlobalStyle/>
          <Routes/>
        </PersistGate>
      </Provider>
    </SnackbarProvider>
  );
}

export default App;