import React from 'react';
import {
    TextInput,
    View,
    ScrollView,
    Button,
    Alert,
    ToastAndroid
} from 'react-native';
import styles from '../Styles';

const link = 'https://raw.githubusercontent.com/92bolatu/react-native-sample-app/master/src/sample/ToastAndroidScreen.js';


export class ToastAndroidScreen extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: 'ToastAndroid',
            headerRight: (<Button onPress={() => navigation.navigate('Source', {link: link})} title="</>"/>),
        };
    };

    render() {

        return (
            <View style={styles.simpleContainer}>
                <View style={styles.controlContainer}>
                    <Button title="SHORT" onPress={() => {
                        ToastAndroid.show('Android ONLY！on Ios will Yellow box Warning!', ToastAndroid.SHORT);
                    }}/>
                </View>

                <View style={styles.buttonBox}>
                    <Button title="LONG+CENTER" onPress={() => {
                        ToastAndroid.showWithGravity('Android ONLY！on Ios will Red screen error!', ToastAndroid.SHORT, ToastAndroid.CENTER);
                    }}/>
                </View>
            </View>
        );
    }
}