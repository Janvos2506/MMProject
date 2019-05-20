
import { createStackNavigator, createAppContainer } from "react-navigation";
import React from 'react';
import HomeScreen from './screens/HomeScreen'
import MapScreen from './screens/MapScreen'
const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Map: MapScreen
  },
  {
    initialRouteName: "Home"
  }
);
const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}