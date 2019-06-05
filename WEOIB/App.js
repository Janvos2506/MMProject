
import { createStackNavigator, createAppContainer } from "react-navigation";
import React from 'react';
import HomeScreen from './screens/HomeScreen'
import MapScreen from './screens/MapScreen'
import SafeSearchScreen from './screens/SafeSearchScreen'
import LoginScreen from './screens/LoginScreen'
import CharCreateScreen from './screens/CharCreateScreen'
import GameSelectionScreen from './screens/GameSelectionScreen';
import MasterMindScreen from './screens/MasterMindScreen'
import RegistrationScreen from "./screens/RegistrationScreen";
import SelectionScreen from "./screens/SelectionScreen";
import SpeurtochtOverviewScreen from "./screens/SpeurtochtOverviewScreen";
import GameScreen from "./screens/GameScreen";
import ProfileScreen from "./screens/ProfileScreen";
const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Map: MapScreen,
    SafeSearch: SafeSearchScreen,
    LoginScreen: LoginScreen,
    CharCreateScreen: CharCreateScreen,
    GameSelectionScreen: GameSelectionScreen,
    MasterMindScreen: MasterMindScreen,
    RegistrationScreen: RegistrationScreen,
    SelectionScreen: SelectionScreen,
    SpeurtochtOverviewScreen: SpeurtochtOverviewScreen,
    GameScreen: GameScreen,
    ProfileScreen: ProfileScreen
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