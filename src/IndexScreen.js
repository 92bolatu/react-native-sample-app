import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';
import Indexes from "./Indexes";

export default class IndexScreen extends React.Component {
    static navigationOptions = {
        headerTitle: 'Index',
    };

    constructor(props) {
        super(props);

        this.state = {
            link: Object.keys(Indexes)
        };
    }

    render() {

        console.log(this.props.navigation.getScreenProps());
        return (
            <View>

                {this.state.link.map((x, i) => (
                    <Button key={i} title={x} onPress={() => this.props.navigation.navigate(x)}/>))}
            </View>
        );
    }


}

