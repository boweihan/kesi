// @flow
import React from 'react';
import { Provider } from 'react-redux';
import Home from 'src/components/Home';
import store from 'src/store/configureStore';
// $FlowFixMe
import { PersistGate } from 'redux-persist/integration/react';

export default class App extends React.Component<{}> {
  render() {
    return (
      <Provider store={store.store}>
        <PersistGate loading={null} persistor={store.persistor}>
          <Home />
        </PersistGate>
      </Provider>
    );
  }
}
