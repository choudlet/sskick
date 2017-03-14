import React from "react";
import {Provider} from 'react-redux'
import Scene from '../components/Scene';
import configureStore from '../store/configureStore';

const store = configureStore();

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Scene />
      </Provider>
    )
  }
}

export default Root;
