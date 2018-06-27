import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';
import Snackbar from 'react-native-snackbar';

const link = 'https://raw.githubusercontent.com/92bolatu/react-native-sample-app/master/src/sample/SnackbarScreen.js';

export class SnackbarScreen extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: 'Snackbar',
            headerRight: (<Button onPress={() => navigation.navigate('Source', {link: link})} title="</>"/>),
        };
    };


    render() {
        return (
            <View>

                <Text>Snackbar</Text>
            </View>
        );
    }


}

