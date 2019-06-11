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
import explanation from '../resources/uitleg.png'
import { ScrollView } from 'react-native-gesture-handler';


export default class IntroScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <ImageBackground source={background} style={{ width: '100%', height: '100%' }} resizeMode='cover'>
                <View style={styles.MainContainer}>
                    <View style={styles.logoContainer}>
                        <Image source={logo} style={{ flex: 1, height: undefined, width: undefined }} resizeMode="contain" />
                    </View>
                    <View style={styles.ExplanationContainer}>
                        <ScrollView >
                            <Text style={styles.uitlegTekst}>
                                Welkom bij Wat er Ooijt is Gebeurd. Deze mobiele applicatie neemt je mee terug in de tijd. Beleef de Tweede Wereldoorlog in de Ooijpolder en Duffelt op een leerzame en interactieve manier. Doorloop verschillende speurtochten met verhalen, puzzels en Augmented Reality.
                                </Text>
                <Text style={styles.uitlegTekst}>1. Maak je profiel</Text>
                <Text style={styles.uitlegTekst}>2. Kies een route</Text>
                <Text style={styles.uitlegTekst}>3. Beleef de route</Text>
                <Text style={styles.uitlegTekst}>4. Spaar punten en geef deze uit</Text>
                
                
                        </ScrollView>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableHighlight style={[styles.pillButton, styles.orange]}
                            onPress={() => this.props.navigation.navigate('Home')}>
                            <Text style={[styles.pillButtonText]} >Door naar de applicatie</Text>
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
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 20,
        paddingTop: 30
    },
    orange: {
        backgroundColor: '#ff814c'
    },
    logoContainer: {
        height: '30%',
        paddingLeft: 30,
        paddingRight: 30
    },
    ExplanationContainer: {
        height: '50%',
        paddingLeft: 30,
        paddingRight: 30
    },
    buttonContainer: {
        height: '10%',
        justifyContent: 'space-between',
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
        alignItems: 'center'
    },
    pillButtonText: {
        color: '#ffffff',
        fontSize: 20
    },
    uitlegTekst: {
        color:'white', 
        fontSize: 20
    }
});