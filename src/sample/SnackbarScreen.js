import React from 'react';
import {
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
                    <TextInput style={{flex: 1, padding: 0}}
                               placeholder="点击这里召唤键盘"
                               underlineColorAndroid="transparent"/>
                </View>

                <View style={css.buttonBox}>
                    <Button title="LENGTH_SHORT" onPress={() => {
                        Snackbar.show({
                            title: '你好，再见！',
                            duration: Snackbar.LENGTH_SHORT,
                        });
                    }}/>
                </View>

                <View style={css.buttonBox}>
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
                </View>

                <View style={css.buttonBox}>
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
                </View>

                <View style={css.buttonBox}>
                    <Button title="setTimeout" onPress={() =>
                        setTimeout(() => {
                            Snackbar.show({
                                title: '我来晚了，再见！',
                                duration: Snackbar.LENGTH_SHORT,
                            });
                        }, 3000)
                    }/>
                </View>

            </ScrollView>
        );
    }


}

const SnackbarStyle = {
    buttonBox: {
        paddingVertical: 5,
    },
    inputBox: {
        backgroundColor: '#fff',
        height: 40,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginBottom:5,
    }
};
