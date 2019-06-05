import React from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  ImageBackground,
  TouchableHighlight,
  TextInput
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
            <View style={{ backgroundColor: '#ffffff', width: "100%", height: 5, marginTop: 10 }}></View>
            <ScrollView horizontal={true} pagingEnabled={true} decelerationRate="fast" onMomentumScrollEnd={(e) => this.updateHeader(e)}>
              <View style={{ width: 335, height: "100%" }}>
                <TouchableHighlight style={[styles.pillButtonSmall, styles.blue]}>
                  <Text style={[styles.pillButtonText]}>Vrienden toevoegen</Text>
                </TouchableHighlight>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={styles.friendNameTag}>Nick</Text>
                  <Text style={styles.friendNameTag}>Jason</Text>
                  <Text style={styles.friendNameTag}>Pieter</Text>
                  <Text style={styles.friendNameTag}>Sjoerd</Text>
                  <Text style={styles.friendNameTag}>Michael</Text>
                </View>
              </View>

              <View style={{
                width: 335, height: "100%", justifyContent: 'center',
                alignItems: 'center'
              }}>
                <Image source={male} style={{ height: '80%' }} resizeMode={'contain'}></Image>

                <TextInput style={[styles.pillButtonInput, styles.transparentGray]} textAlign={'center'}
                  onChangeText={(text) => this.setState({ school: text })}
                  value={"Naam"}>
                </TextInput>
                <TextInput style={[styles.pillButtonInput, styles.transparentGray]} textAlign={'center'}
                  onChangeText={(text) => this.setState({ school: text })}
                  value={"Wachtwoord"}>
                </TextInput>

              </View>

              <View style={{ width: 335, height: "100%" }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={styles.friendNameTag}>#1 Nick</Text>
                  <Text style={styles.friendNameTag}>#2 Jason</Text>
                  <Text style={styles.friendNameTag}>#3 Pieter</Text>
                  <Text style={styles.friendNameTag}>#4 Sjoerd</Text>
                  <Text style={styles.friendNameTag}>#5 Michael</Text>
                </View>
              </View>
            </ScrollView>
          </View>

          <View>
            <TouchableHighlight style={[styles.pillButton, styles.orange]} onPress={() => this.props.navigation.navigate('SelectionScreen')}>
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
  friendNameTag: {
    color: 'rgba(255,255,255,0.5)',
    marginBottom: 10,
    fontSize: 25
  },

  pillButtonInput: {
    borderRadius: 64,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5,
    padding: 5,
    width: "50%",
    justifyContent: 'center',
    alignItems: 'center',
  },

  pillButtonSmall: {
    borderRadius: 64,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    padding: 10
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
  },
  transparentGray: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)'
  }
});

