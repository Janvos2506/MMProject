import React from 'react';
import {
  StyleSheet,
  Button,
  Text,
  View,
} from 'react-native';


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Button
          title="Spelen"
          onPress={() => this.props.navigation.navigate('Map')}
        />
      </View>
    );
  }
}

