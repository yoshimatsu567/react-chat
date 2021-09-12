import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import ChatApp from '../src/templates/ChatApp';
import { StylesProvider } from '@material-ui/core/styles';
import { store } from '../src/reducks/store/store';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

let persistor = persistStore(store);

ReactDOM.render(
  <StylesProvider injectFirst>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ChatApp />
      </PersistGate>
    </Provider>
  </StylesProvider>,
  document.getElementById('root')
);
