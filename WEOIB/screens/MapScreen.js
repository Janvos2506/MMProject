import React from 'react';
import {
  StyleSheet,
  Button,
  Text,
  View,
} from 'react-native';
import { Constants, Permissions, BarCodeScanner } from 'expo';

import MapView, { Polyline, Marker } from 'react-native-maps';

export default class MapScreen extends React.Component {
  static navigationOptions = {
    title: 'Map',
  };

  constructor(props) {
    super(props);
    this.state = {
      scanning: false,
      markers: []
    }
  }

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  toggleQRCodeScanner = () => {
    let scanning = !this.state.scanning;
    this.setState({ scanning: scanning })
  }

  render() {
    if (this.state.scanning) {
      return this.getQRScanner()
    }

    return (
      <View style={{ flex: 1, justifyContent: 'flex-start' }}>
        <View>
          <Button
            onPress={this.toggleQRCodeScanner}
            title="QR"
            color="#841584"
            accessibilityLabel="scan qr code"
          />
          <Button
            onPress={() => this.props.navigation.navigate('SafeSearch')}
            title="Safe"
            color="#841584"
            accessibilityLabel="search safe"
          />
        </View>
        <View style={styles.container}>
          <MapView style={styles.map}
            followsUserLocation={false}
            region={{
              latitude: 50,
              longitude: 50,
              latitudeDelta: 0,
              longitudeDelta: 0
            }}
            showsUserLocation={true}
          >
            {this.state.markers.map(marker => <Marker
              coordinate={marker} key={marker.lat}
              description={'description'}
            />)}
          </MapView>
        </View>
      </View>
    );
  }

  handleBarCodeScanned = ({ type, data }) => {
    let markers = this.state.markers;
    let codeMarker = JSON.parse(data);
    let marker = { latitude: codeMarker.lat, longitude: codeMarker.long };

    markers.push(marker);
    this.setState({ markers: markers });
    this.toggleQRCodeScanner();
  }

  getQRScanner = () => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-start',
        }}>

        <BarCodeScanner
          onBarCodeScanned={this.state.scanned ? undefined : this.handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />

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