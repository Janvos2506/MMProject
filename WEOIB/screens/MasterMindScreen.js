import React from 'react';
import {
    StyleSheet,
    Button,
    Text,
    View,
    TouchableHighlight,
    ImageBackground
} from 'react-native';
import gameBackground from '../resources/mastermind.jpg'
import { ScrollView } from 'react-native-gesture-handler';


export default class MasterMindScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            currentSelection: [],
            options: [],
            code: '6348'
        }
    }

    addOption = (option) => () => {
        let { currentSelection } = this.state;
        let { options } = this.state;
        currentSelection.push(option);
        if (currentSelection.length == 4) {
            options.push(currentSelection);
            currentSelection = [];
        }
        this.setState({ currentSelection, options });
    }

    getButton = (number) => {
        return (
            <TouchableHighlight onPress={this.addOption(number)} style={styles.codeButton}><View></View></TouchableHighlight>
        )
    }

    checkCode = (code) => {
        let ret = [];
        let correctCode = [...this.state.code];

        if (code.join() == correctCode.join())
            this.props.navigation.navigate('ARViewScreen');

        [...code].forEach((c, i) => {
            if (correctCode[i] == c)
                ret.push(<Text key={i}>X</Text>)
            else if (this.state.code.indexOf(c) > -1)
                ret.push(<Text key={i}>O</Text>)
        })
        return ret;
    }

    render() {
        return (
            <ImageBackground source={gameBackground} style={{ width: '100%', height: '100%', alignItems: 'center' }} resizeMode='stretch'>
                <View style={{ height: "65%", width: "100%", paddingTop: "25%", paddingBottom: "2%", paddingLeft: '15%', paddingRight: '15%' }}>
                    <View style={{ height: '80%' }}>
                        <ScrollView ref={ref => this.scrollView = ref}
                            onContentSizeChange={(contentWidth, contentHeight) => {
                                this.scrollView.scrollToEnd({ animated: true });
                            }}>
                            {this.state.options.map((o, i) => <Text key={i} style={styles.codeText}>{o} {this.checkCode(o)}</Text>)}
                        </ScrollView>
                    </View>
                    <View style={{ height: '20%' }}>
                        <Text style={styles.codeText}>{this.state.currentSelection}</Text>
                    </View>
                </View>
                <View style={{ height: "35%", width: "100%", paddingLeft: "10%", paddingRight: "10%", flex: 1, flexDirection: 'column' }}>
                    <View style={{ width: "100%", flex: 1, flexDirection: 'row' }}>
                        {this.getButton('1')}
                        {this.getButton('2')}
                        {this.getButton('3')}
                        {this.getButton('4')}

                    </View>
                    <View style={{ width: "100%", flex: 1, flexDirection: 'row' }}>
                        {this.getButton('5')}
                        {this.getButton('6')}
                        {this.getButton('7')}
                        {this.getButton('8')}
                    </View>
                    <View style={{ width: "100%", flex: 1, flexDirection: 'row' }}>

                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    codeText: {
        color: '#00ff00',
        fontSize: 40
    },
    container: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'column-reverse',
        paddingBottom: 20,
        alignItems: 'stretch'
    },
    row: {
        backgroundColor: "red",
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center'
    },
    codeButton: {
        width: "20%",
        height: "100%",
        marginRight: 20
    },
    entryRow: {
        flex: 1,
        backgroundColor: 'red',
        height: 50
    }
});

