import React from 'react';
import {
  StyleSheet,
  Button,
  Text,
  View,
} from 'react-native';

import MapView, { Polyline, Marker } from 'react-native-maps';

export default class MapScreen extends React.Component {
  static navigationOptions = {
    title: 'Map',
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'flex-start' }}>
        <View>
          <Text>footer</Text>
        </View>
        <View style={styles.container}>
          <MapView style={styles.map}
            followsUserLocation={true}
            region={{
              latitude: 50,
              longitude: 50,
              latitudeDelta: 0,
              longitudeDelta: 0
            }}
            showsUserLocation={true}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 100,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
});