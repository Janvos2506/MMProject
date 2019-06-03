import React from 'react';
import {
    StyleSheet,
    Button,
    Text,
    View,
    TouchableHighlight
} from 'react-native';


export default class MasterMindScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            currentSelection: [],
            options: []
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

    getRow = (start) => {
        let rows = [];
        for (let i = start; i < start + 4; i++)
            rows.push(
                <TouchableHighlight key={i} style={styles.codeButton} onPress={this.addOption(i)}>
                    <View>
                        <Text>{i}</Text>
                    </View>
                </TouchableHighlight>)
        return (
            <View style={styles.row}>
                {rows}
            </View>)
    }

    render() {
        return (
            <View style={styles.container}>

                {this.getRow(4)}
                {this.getRow(0)}

                <View style={styles.row}>
                    {this.state.currentSelection.map(r =>
                        <View style={styles.entryRow}>
                            <Text>{r}</Text>
                        </View>
                    )}
                </View>

                {this.state.options.map(o => {
                    return (
                        <View style={styles.row}>
                            {o.map(r =>
                                <View style={styles.entryRow}>
                                    <Text>{r}</Text>
                                </View>)
                            }
                        </View>
                    )
                })}
            </View >
        );
    }
}

const styles = StyleSheet.create({
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
        flex: 1,
        backgroundColor: 'blue',
        height: 50
    },
    entryRow: {
        flex: 1,
        backgroundColor: 'red',
        height: 50
    }
});

