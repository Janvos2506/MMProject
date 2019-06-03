
import { createStackNavigator, createAppContainer } from "react-navigation";
import React from 'react';
import HomeScreen from './screens/HomeScreen'
import MapScreen from './screens/MapScreen'
import SafeSearchScreen from './screens/SafeSearchScreen'
import LoginScreen from './screens/LoginScreen'
import CharCreateScreen from './screens/CharCreateScreen'
import GameSelectionScreen from './screens/GameSelectionScreen';
import MasterMindScreen from './screens/MasterMindScreen'
const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Map: MapScreen,
    SafeSearch: SafeSearchScreen,
    LoginScreen: LoginScreen,
    CharCreateScreen: CharCreateScreen,
    GameSelectionScreen: GameSelectionScreen,
    MasterMindScreen: MasterMindScreen
  },
  {
    initialRouteName: "LoginScreen"
  }
);
const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}