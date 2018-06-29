import React from 'react';
import {
    View,
    Button,
    Alert,
    TextInput,
    ToastAndroid
} from 'react-native';
import Toast, {DURATION} from 'react-native-easy-toast'
import styles from '../Styles';


const link = 'https://raw.githubusercontent.com/92bolatu/react-native-sample-app/master/src/sample/ToastEasyScreen.js';


export class ToastEasyScreen extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: 'ToastEasy',
            headerRight: (<Button onPress={() => navigation.navigate('Source', {link: link})} title="</>"/>),
        };
    };

    render() {

        return (


            <View style={styles.simpleContainer}>

                <View style={styles.inputContainer}>
                    <TextInput style={{flex: 1, padding: 0}}
                               placeholder="点击这里召唤键盘"
                               underlineColorAndroid="transparent"/>
                </View>

                <View style={styles.controlContainer}>
                    <Button title="LENGTH_SHORT" onPress={() => {
                        this.refs.toast.show('hello world!', DURATION.LENGTH_SHORT);
                    }}/>
                </View>

                <View style={styles.buttonBox}>
                    <Button title="FOREVER" onPress={() => {
                        this.refs.toast.show('2000 / Callback', 2000, () => {
                            alert('I\'m callback!')
                        });
                    }}/>
                </View>
                <Toast ref="toast" position='top'/>
            </View>
        );
    }
}