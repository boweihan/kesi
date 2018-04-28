import React from 'react';
import { Provider } from 'react-redux';
import Home from 'src/components/Home';
import store from 'src/store/configureStore';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}
