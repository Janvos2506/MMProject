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
import ooijpolder from '../resources/Ooijpolder.jpg'


export default class SpeurtochtOverviewScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      showInformation: false,
      information: "Deze speurtocht gaat over wat er in de Ooijpolder gebeurd is."
    }
  }

  toggleInfo = () => {
    this.setState({
      showInformation: !this.state.showInformation
    });
  }

  render() {
    let infoText = null;
    if (this.state.showInformation == true)
      infoText = <Text style={styles.infoText}>{this.state.information}</Text>
    return (
      <ImageBackground source={background} style={{ width: '100%', height: '100%' }} resizeMode='cover'>
        <View style={styles.MainContainer}>
          <View styles={styles.logoContainer}>
            <TouchableHighlight style={[styles.pillButton, styles.blue]}>
              <Text style={[styles.pillButtonText]}>Speurtocht</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableHighlight onPress={() => this.toggleInfo()}>
              <Image source={ooijpolder} style={{ width: '100%', height: '100%' }} resizeMode={'contain'}></Image>
            </TouchableHighlight>
          </View>

          <View style={styles.infocontainer}>
            {infoText}
          </View>
          <View styles={styles.logoContainer}>
            <TouchableHighlight style={[styles.pillButton, styles.orange]} onPress={() => this.props.navigation.navigate('GameScreen')}>
              <Text style={[styles.pillButtonText]}>Start</Text>
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
    paddingRight: 30,
    height: '50%',
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
  },
  infocontainer: {
    paddingLeft: 30,
    paddingRight: 30,
    height: '23%',
  },
  infoText: {
    color: "#ffffff"
  }
});

