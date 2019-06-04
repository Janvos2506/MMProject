import React from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  ImageBackground,
  TouchableHighlight
} from 'react-native';
import background from '../resources/background.jpg'
import logo from '../resources/logo.png'


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <ImageBackground source={background} style={{ width: '100%', height: '100%' }} resizeMode='cover'>
        <View style={styles.MainContainer}>
          <View style={styles.logoContainer}>
            <Image source={logo} style={{ flex: 1, height: undefined, width: undefined }} resizeMode="contain" />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableHighlight style={[styles.pillButton, styles.blue]}
              onPress={() => this.props.navigation.navigate('LoginScreen')}>
              <Text style={[styles.pillButtonText]}>Inloggen</Text>
            </TouchableHighlight>

            <TouchableHighlight style={[styles.pillButton, styles.gray]}
              onPress={() => this.props.navigation.navigate('RegistrationScreen')}>
              <Text style={[styles.pillButtonText]} >Aanmelden</Text>
            </TouchableHighlight>

            <TouchableHighlight style={[styles.pillButton, styles.orange]}>
              <Text style={[styles.pillButtonText]} >Uitleg</Text>
            </TouchableHighlight>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 20,
    paddingTop: 30
  },
  blue: {
    backgroundColor: '#46b3a4'
  },
  orange: {
    backgroundColor: '#ff814c'
  },
  gray: {
    backgroundColor: '#795c46'
  },
  logoContainer: {
    height: '40%',
    paddingLeft: 30,
    paddingRight: 30
  },
  buttonContainer: {
    height: '60%',
    justifyContent: 'space-between',
    paddingLeft: 30,
    paddingRight: 30
  },
  pillButton: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 64,
    justifyContent: 'center',
    alignItems: 'center'
  },
  pillButtonText: {
    color: '#ffffff',
    fontSize: 20
  }
});