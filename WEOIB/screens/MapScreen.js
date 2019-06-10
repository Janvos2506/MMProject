import React from 'react';
import {
  StyleSheet,
  Image,
  View,
  Animated,
  Easing,
  Text,
  TouchableHighlight
} from 'react-native';
import { Location } from 'expo';
import { Constants, Permissions, BarCodeScanner } from 'expo';
import MapView, { Polyline, Marker } from 'react-native-maps';
import compassNeedle from '../resources/compassNeedle.png';

export default class MapScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.RotateValueHolder = new Animated.Value(0);
    this.state = {
      scanning: false,
      markers: [{
        latitude: 51.849582,
        longitude: 5.874064,
      }],
      allMarkers: [

      ],
      angle: 0,
      target: {
        long: 5.9519785,
        lat: 51.9869388
      },
      heading: 0,
      first: true,
      correction: 0
    }
  }

  StartImageRotateFunction() {
    this.RotateValueHolder.setValue(-this.state.heading);
    Animated.timing(this.RotateValueHolder, {
      toValue: -this.state.heading,
      duration: 1,
      easing: Easing.linear,
    }).start(() => this.StartImageRotateFunction());
  }

  mod = (x, n) => (x % n + n) % n

  calculateAngle = async (marker) => {
    let pos = await this.getPosition();

    let lng1 = pos.long;
    let lat1 = pos.lat;

    let lng2 = marker.longitude;
    let lat2 = marker.latitude;

    let dLon = (lng2 - lng1);
    let y = Math.sin(dLon) * Math.cos(lat2);
    let x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLon);
    let brng = this.toDeg(Math.atan2(y, x));
    let angle = 360 - ((brng + 360) % 360);
    this.setState({ angle: angle });
    console.log(angle);
  }


  getPosition = async () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        position => {
          const long = position.coords.longitude;
          const lat = position.coords.latitude;
          resolve({ lat, long })
        },
        error => Alert.alert(error.message),
        { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000 }
      );
    })
  }

  toRad = (deg) => deg * Math.PI / 180;
  toDeg = (rad) => rad * 180 / Math.PI;

  async componentDidMount() {

    Location.watchHeadingAsync((headingAll) => {
      let heading = headingAll.magHeading;
      heading = (heading - (this.state.correction));
      heading = this.mod(heading + 180, 360);
      this.setState({ heading: heading })
      if (this.state.first) {
        this.setState({ correction: headingAll.magHeading, first: false })
      }
    })

    this.StartImageRotateFunction();
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
    this.calculateAngle(this.state.markers[0]);

  }

  toggleQRCodeScanner = () => {
    let scanning = !this.state.scanning;
    this.setState({ scanning: scanning })
  }

  render() {
    if (this.state.scanning) {
      return this.getQRScanner()
    }

    const interpolatedRotateAnimation = this.RotateValueHolder.interpolate({
      inputRange: [0, 360],
      outputRange: ['0deg', '360deg']
    });

    return (
      <View style={{ flex: 1, justifyContent: 'flex-start' }}>
        <View style={styles.container}>
          <MapView style={styles.map}
            followsUserLocation={false}
            initialRegion={{
              latitude: 51.849582,
              longitude: 5.874064,
              latitudeDelta: 0,
              longitudeDelta: 0
            }}
            showsUserLocation={true}
          >
            {this.state.markers.map((marker, index) => <Marker
              coordinate={marker} key={index}
              description={'description'}
            />)}
          </MapView>
          <View style={{ position: 'absolute', left: '5%', top: '60%' }}>
            <Animated.View style={[{ transform: [{ rotate: interpolatedRotateAnimation }] }]}>
              <TouchableHighlight onPress={() => this.props.navigation.navigate('ARViewScreen')}>
                <Image source={compassNeedle} ></Image>
              </TouchableHighlight>
            </Animated.View>
          </View>
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
    top: 0,
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