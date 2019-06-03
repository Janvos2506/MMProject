import React from 'react';
import {
    StyleSheet,
    Image,
    Text,
    View,
    TextInput,
    ImageBackground,
    TouchableHighlight
} from 'react-native';
import background from '../resources/background.jpg'
import logo from '../resources/logo.png'


export default class LoginScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            naam: 'Naam',
            wachtwoord: 'Wachtwoord'
        }
    }

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

                        <TextInput style={[styles.pillButton, styles.transparentGray]}
                            onChangeText={(text) => this.setState({ naam: text })}
                            value={this.state.naam}>

                        </TextInput>

                        <TextInput style={[styles.pillButton, styles.transparentGray]}
                            onChangeText={(text) => this.setState({ wachtwoord: text })}
                            value={this.state.wachtwoord}>

                        </TextInput>

                        <TouchableHighlight style={[styles.pillButton, styles.orange]}>
                            <Text style={[styles.pillButtonText]} >Inloggen</Text>
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
    },
    transparentGray: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)'
    }
});

