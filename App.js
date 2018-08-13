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









export default createStackNavigator({
  login: Login,  
  register: Register,
  dashboard: Dashboard
})