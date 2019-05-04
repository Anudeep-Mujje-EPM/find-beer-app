import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator,createAppContainer } from 'react-navigation';

import HomeScreen from './Components/Home/HomeScreen'
import SearchTabNavigator from './Components/Search/SearchTabNavigator'

const App = createStackNavigator({
  HomeScreen: { screen : HomeScreen },
  SearchTabNavigator:{ screen: SearchTabNavigator }
},{initialRouteName: 'HomeScreen'})

export default createAppContainer(App)