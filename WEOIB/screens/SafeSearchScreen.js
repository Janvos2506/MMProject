import React from 'react';
import {
    StyleSheet, View, Animated, Image, Text, Easing, Alert, Button
} from 'react-native';

import { Location } from 'expo';


export default class SafeSearchScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    constructor() {
        super();
        this.RotateValueHolder = new Animated.Value(0);
        this.state = {
            angle: 0,
            target: {
                long: 5.9519785,
                lat: 51.9869388
            },
            heading: 0,
            first: true
        }
    }

    async componentDidMount() {
        this.StartImageRotateFunction();
        setInterval(async () => {
            let headingAll = await Location.getHeadingAsync();
            let heading = headingAll.magHeading;
            heading = (heading - (this.state.correction));
            heading = this.mod(heading, 360);
            this.setState({ heading: heading })
            if (this.state.first) {
                this.setState({ correction: headingAll.magHeading, first: false })
            }
        }, 1)
    }

    mod = (x, n) => (x % n + n) % n

    calculateAngle = async () => {
        let pos = await this.getPosition();
        let target = this.state.target;

        let lng1 = pos.long;
        let lat1 = pos.lat;

        let lng2 = target.long;
        let lat2 = target.lat;

        let dLon = (lng2 - lng1);
        let y = Math.sin(dLon) * Math.cos(lat2);
        let x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLon);
        let brng = this.toDeg(Math.atan2(y, x));
        let angle = 360 - ((brng + 360) % 360);
        this.setState({ angle: angle });
    }

    toRad = (deg) => deg * Math.PI / 180;
    toDeg = (rad) => rad * 180 / Math.PI;

    getPosition = async () => {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(
                position => {
                    const long = position.coords.longitude;
                    const lat = position.coords.latitude;
                    resolve({ lat, long })
                },
                error => Alert.alert(error.message),
                { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
            );
        })
    }

    StartImageRotateFunction() {
        this.RotateValueHolder.setValue(-this.state.heading);
        Animated.timing(this.RotateValueHolder, {
            toValue: -this.state.heading,
            duration: 1,
            easing: Easing.linear,
        }).start(() => this.StartImageRotateFunction());
    }

    render() {
        const interpolatedRotateAnimation = this.RotateValueHolder.interpolate({
            inputRange: [0, 360],
            outputRange: ['0deg', '360deg']
        });
        return (
            <View style={styles.container}>
                <Text>{this.state.newAngle}</Text>
                <Text>{this.state.heading}</Text>
                <Button title="calibrate" onPress={() => this.setState({ first: true })} />
                <Animated.View style={[{ transform: [{ rotate: interpolatedRotateAnimation }] }]}>
                    <Image
                        style={{
                            width: 5,
                            height: 200
                        }}
                        source={{
                            uri:
                                'https://aboutreact.com/wp-content/uploads/2018/08/logo1024.png',
                        }}
                    />
                </Animated.View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#C2C2C2',
    },
});

