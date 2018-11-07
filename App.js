import React, {Component} from 'react';
import {View} from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store'
import Home from './src/pages/Home'
import MyList from './src/pages/MyList'
import Detail from './src/pages/Detail'

import { createBottomTabNavigator } from 'react-navigation'

const MyApp = createBottomTabNavigator({
  "News": {
    screen: Home
  },
  "Read Later": {
    screen: MyList
  },
  Detail: {
    screen: Detail
  }

}, {
  initialRouteName: "News"
})

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MyApp/>
      </Provider>
    );
  }
}

export default App
