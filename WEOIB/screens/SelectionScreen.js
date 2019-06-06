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


export default class SelectionScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <ImageBackground source={background} style={{ width: '100%', height: '100%' }} resizeMode='cover'>
        <View style={styles.MainContainer}>
          <View styles={styles.logoContainer}>
            <Image source={logo} style={{ width: '100%' }} resizeMode={'contain'}></Image>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableHighlight style={[styles.pillButton, styles.blue]}
              onPress={() => this.props.navigation.navigate('SpeurtochtOverviewScreen')}>
              <Text style={[styles.pillButtonText]}>Speurtocht</Text>
            </TouchableHighlight>

            <TouchableHighlight style={[styles.pillButton, styles.blue]}>
              <Text style={[styles.pillButtonText]}>Shop</Text>
            </TouchableHighlight>

            <TouchableHighlight style={[styles.pillButton, styles.blue]} onPress={() => this.props.navigation.navigate('ProfileScreen')}>
              <Text style={[styles.pillButtonText]}>Profiel</Text>
            </TouchableHighlight>

            <TouchableHighlight style={[styles.pillButton, styles.blue]}>
              <Text style={[styles.pillButtonText]}>Uitleg</Text>
            </TouchableHighlight>

            <TouchableHighlight style={[styles.pillButton, styles.orange]}>
              <Text style={[styles.pillButtonText]}>Uitloggen</Text>
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
    backgroundColor: 'red',
    width: '100%',
    height: '100%'
  },
  buttonContainer: {
    paddingLeft: 30,
    paddingRight: 30
  },
  pillButton: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 64,
    justifyContent: 'center',
    marginBottom: 40,
    alignItems: 'center'
  },
  pillButtonText: {
    color: '#ffffff',
    fontSize: 20
  }
});

