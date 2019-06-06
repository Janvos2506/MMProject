import React from 'react';
import {
    StyleSheet,
    Image,
    Text,
    View,
    ImageBackground,
    TouchableHighlight
} from 'react-native';
import ooijpolderButton from '../resources/OoijpolderButton.png'
import logo from '../resources/logo.png'
import gameBackground from '../resources/gameBackground.jpg'


export default class GameScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <ImageBackground source={gameBackground} style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }} resizeMode='stretch'>
                <TouchableHighlight style={{
                    position: 'absolute', top: 0, left: 0, width: "50%", height: "50%", flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text></Text>
                </TouchableHighlight>
                <TouchableHighlight style={{
                    position: 'absolute', top: 0, left: "50%", width: "50%", height: "50%", flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }} onPress={() => this.props.navigation.navigate('SelectionScreen')}>
                    <Text></Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => this.props.navigation.navigate('Map')} style={{
                    position: 'absolute', top: "50%", left: 0, width: "50%", height: "50%", flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text></Text>
                </TouchableHighlight>
                <TouchableHighlight style={{
                    position: 'absolute', top: "50%", left: "50%", width: "50%", height: "50%", flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text></Text>
                </TouchableHighlight>
            </ImageBackground >
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        padding: 20,
        paddingTop: 30
    },
    cornerButton: {
        borderWidth: 0.5,
        borderColor: '#d6d7da',
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
        paddingTop: 20,
        paddingBottom: 20,
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

