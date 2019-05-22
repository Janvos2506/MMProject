
import { createStackNavigator, createAppContainer } from "react-navigation";
import React from 'react';
import HomeScreen from './screens/HomeScreen'
import MapScreen from './screens/MapScreen'
import SafeSearchScreen from './screens/SafeSearchScreen'
const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Map: MapScreen,
    SafeSearch: SafeSearchScreen
  },
  {
    initialRouteName: "SafeSearch"
  }
);
const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}