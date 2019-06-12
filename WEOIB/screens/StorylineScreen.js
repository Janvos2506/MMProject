import React from 'react';
import {
  ImageBackground
} from 'react-native';
import background from '../resources/storyline.jpg'


export default class StorylineScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <ImageBackground source={background} style={{ width: '100%', height: '100%' }} resizeMode='cover'>
      </ImageBackground>
    );
  }
}