
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Dimensions } from 'react-native';
import AppContainer from './src/appContainer'
import { Provider } from 'react-redux'
import configStore from './src/redux/store'
import api from './src/api'
Object.common = {}
Object.common.getWidth = (Dimensions.get('screen').width)
Object.common.getHeight = (Dimensions.get('screen').height)

let store = configStore()
export default class App extends Component {
  constructor(props) {
    super(props)
    api.setStore(store)
  }
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

