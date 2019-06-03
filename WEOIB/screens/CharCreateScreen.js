import React from 'react';
import {
    StyleSheet,
    Button,
    Text,
    View,
} from 'react-native';


export default class CharCreateScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>CharCreation</Text>
                <Button
                    title="Spelen"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
            </View>
        );
    }
}

