import React from 'react';
import {View, Text,Button} from 'react-native';
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import {atomDark} from 'react-syntax-highlighter/styles/prism';
//registerLanguage('jsx', jsx);


export default class SourceScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('link', 'A Nested Details Screen'),
            headerTitle: 'Composition.js',
            headerRight: (
                <Button
                    onPress={() => alert('This is a button!')}
                    title="Info"
                />
            ),
        };
    };


    constructor(props) {
        super(props);
        this.state = {
            code: '',
            link: '',
            stat: 0

        };

    }


    componentDidMount() {
        var file = 'https://raw.githubusercontent.com/92bolatu/react-native-sample-app/master/src/001-Composition.js';
        fetch(file)
            .then((response) => response.text())
            .then((text) => {
                console.log(text);
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
}