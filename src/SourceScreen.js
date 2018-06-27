import React from 'react';
import {View, Text, Button, Alert} from 'react-native';
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import {atomDark} from 'react-syntax-highlighter/styles/prism';

export default class SourceScreen extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: 'Source',
            headerRight: (<Button onPress={() => Alert.alert('Github', navigation.getParam('link'))} title="<#>"/>),
        };
    };

    constructor(props) {
        super(props);
        this.state = {code: ''};

    }


    componentDidMount() {
        fetch(this.props.navigation.getParam('link'))
            .then((response) => response.text())
            .then((text) => {
                this.setState({code: text});
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        let css = SourceStyle;
        delete  atomDark['class-name'].textDecoration;
        return (
            <View style={css.container}>
                <SyntaxHighlighter
                    language='jsx'
                    wrapLines={true}
                    customStyle={css.custom}
                    style={atomDark}
                    highlighter={"prism"}>
                    {this.state.code}
                </SyntaxHighlighter>
            </View>
        );
    }
}

const SourceStyle = {
    container:
        {
            flex: 1,
            backgroundColor: '#24252c'

        },
    custom: {
        margin: 0,
        borderRadius: 0,
    }
};