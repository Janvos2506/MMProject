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
import male from '../resources/male.png'
import { ScrollView } from 'react-native-gesture-handler';


export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      header: 'Vrienden'
    }
  }


  updateHeader = (e) => {
    const offset = e.nativeEvent.contentOffset.x;
    if (offset == 0)
      this.setState({ header: 'Vrienden' })
    if (offset == 335)
      this.setState({ header: 'Profiel' })
    if (offset == 670)
      this.setState({ header: 'Leaderboard' })
  }


  render() {
    let infoText = null;
    if (this.state.showInformation == true)
      infoText = <Text style={styles.infoText}>{this.state.information}</Text>
    return (
      <ImageBackground source={background} style={{ width: '100%', height: '100%' }} resizeMode='cover'>
        <View style={styles.MainContainer}>
          <View>
            <TouchableHighlight style={[styles.pillButton, styles.blue, { marginTop: 10 }]}>
              <Text style={[styles.pillButtonText]}>{this.state.header}</Text>
            </TouchableHighlight>
          </View>

          <View style={styles.charSelectorContainer}>
            <ScrollView horizontal={true} pagingEnabled={true} decelerationRate="fast" onMomentumScrollEnd={(e) => this.updateHeader(e)}>
              {/* <Image source={male} style={{ height: '80%' }} resizeMode={'contain'}></Image>
            <Image source={male} style={{ height: '80%' }} resizeMode={'contain'}></Image>
            <Image source={male} style={{ height: '80%' }} resizeMode={'contain'}></Image> */}
              <View style={{ width: 335, height: "100%", backgroundColor: 'red' }}>
                <Text>A</Text>
              </View>

              <View style={{ width: 335, height: "100%", backgroundColor: 'blue' }}>
                <Text>A</Text>
              </View>

              <View style={{ width: 335, height: "100%", backgroundColor: 'white' }}>
                <Text>A</Text>
              </View>
            </ScrollView>
          </View>

          <View>
            <TouchableHighlight style={[styles.pillButton, styles.orange]} onPress={() => this.props.navigation.navigate('GameScreen')}>
              <Text style={[styles.pillButtonText]}>Terug</Text>
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
  },
  charSelectorContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    width: "100%",
    height: "75%",
    marginBottom: 20,
    marginTop: 20
  }
});

