import React from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    ScrollView,
    Button,
    Alert
} from 'react-native';
import Snackbar from 'react-native-snackbar';
import styles from '../Styles';

const link = 'https://raw.githubusercontent.com/92bolatu/react-native-sample-app/master/src/sample/SnackbarScreen.js';

export class SnackbarScreen extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: 'Snackbar',
            headerRight: (<Button onPress={() => navigation.navigate('Source', {link: link})} title="</>"/>),
        };
    };

    render() {
        let css = SnackbarStyle;
        return (
            <ScrollView style={styles.simpleContainer}>

                <View style={css.inputBox}>
                    <TextInput style={{flex: 1, padding: 0}} placeholder="点击这里召唤键盘"/>
                </View>

                <Button title="LENGTH_SHORT" onPress={() => {
                    Snackbar.show({
                        title: '你好，再见！',
                        duration: Snackbar.LENGTH_SHORT,
                    });
                }}/>

                <Button title="LENGTH_LONG" onPress={() => {
                    Snackbar.show({
                        title: '再见，顺便带走你的钱包了',
                        duration: Snackbar.LENGTH_LONG,
                        action: {
                            title: 'NO',
                            color: 'red',
                            onPress: () => Alert.alert('', 'Action Event'),
                        },
                    });
                }}/>

                <Button title="LENGTH_INDEFINITE" onPress={() => {
                    Snackbar.show({
                        title: '再见，出门送送我啊！',
                        duration: Snackbar.LENGTH_INDEFINITE,
                        action: {
                            title: 'OKEY',
                            color: 'green',
                            onPress: () => Alert.alert('', 'Action Event'),
                        },
                    });
                }}/>

            </ScrollView>
        );
    }


}

const SnackbarStyle = {
    inputBox: {
        backgroundColor: '#fff',
        height: 40,
        paddingVertical: 5,
        paddingHorizontal: 10
    }
};
