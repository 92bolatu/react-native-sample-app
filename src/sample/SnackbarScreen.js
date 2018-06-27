import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';
import Snackbar from 'react-native-snackbar';

export class SnackbarScreen extends React.Component {
    static navigationOptions = {
        headerTitle: 'Snackbar',
        headerRight: (
            <Button onPress={() => alert('This is a button!')} title="</>"/>
        ),
    };


    render() {
        return (
            <View>

                <Text>Snackbar</Text>
            </View>
        );
    }


}

