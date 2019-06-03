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
import female from '../resources/female.png'


export default class CharCreateScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            naam: 'Naam',
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
                    </View>
                    <View style={styles.charSelectorContainer}>
                        <Image source={male} style={{ height: '100%' }} resizeMode={'contain'}></Image>
                    </View>

                    <View style={styles.buttonContainer}>
                        <TouchableHighlight style={[styles.pillButton, styles.blue]}
                            onPress={() => this.props.navigation.navigate('SelectionScreen')}>
                            <Text style={[styles.pillButtonText]}>Begin</Text>
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
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 64,
        justifyContent: 'center',
        marginBottom: 10,
        alignItems: 'center'
    },
    pillButtonText: {
        color: '#ffffff',
        fontSize: 20
    },
    transparentGray: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)'
    },
    charSelectorContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        width: "100%",
        height: "40%",
        marginBottom: 10
    }
});

