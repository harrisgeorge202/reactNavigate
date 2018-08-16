/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Login from './app/components/Login';
import Dashboard from './app/components/Dashboard';
import Register from './app/components/Register';
import Sidebar from './app/components/Sidebar';
import CreateEvent from './app/components/CreateEvent/createEvent';


import { DrawerNavigator } from 'react-navigation'


class App extends Component{

  static navigationOptions = {
      header: null
  }

  render() {
    return (
<AppStack />
    );
  }
}


const AppStack = DrawerNavigator({
  login: { screen: Login },
  dashboard: { screen: Dashboard},
  register: { screen: Register},
  createEvent: {screen: CreateEvent}
  
}, {
  // contentComponent: ({navigation}) => <Sidebar />
  contentComponent: Sidebar
  
})

// export default App






export default createStackNavigator({
  app: App,    
  login: Login,  
  dashboard: Dashboard,
  register: Register,
  
})