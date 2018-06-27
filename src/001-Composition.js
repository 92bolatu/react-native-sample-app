import React from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ImageBackground
} from 'react-native';

import styles from './Styles';

export class Composition extends React.Component {
    static navigationOptions = {
        headerTitle: 'Composition',
    };

    render() {
        return (
            <View style={styles.container}>
                <Box title="TITLE"
                     footer={<View><Text>-- FOOTER JSX OBJECT --</Text></View>}>
                    <View>
                        <Text>I am children - the contained code</Text>
                    </View>
                </Box>
            </View>);
    }
}

class Box extends React.Component {
    render() {
        let css = BoxStyle;
        return (
            <View style={css.container}>
                {this.props.title && (<View style={css.title}><Text>{this.props.title}</Text></View>)}
                {this.props.children}
                {this.props.footer}
            </View>);
    }
}

const BoxStyle = {
    container: {
        margin: 10,
        borderColor: '#0094ff',
        borderWidth: 1,
        padding: 10,
    },
    title: {
        borderColor: '#0094ff',
        borderBottomWidth: 1,
        paddingBottom: 5,
        marginBottom: 5,
        alignItems: 'center'
    }
};