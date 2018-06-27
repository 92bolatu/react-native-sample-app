import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

export class Index extends React.Component {
    static navigationOptions = {
        headerTitle: 'Index',
    };

    constructor(props) {
        super(props);
        this.state = {
           link:["Composition"]
        };
    }

    render() {
        return (
            <View>
                
                {this.state.link.map((x,i)=>(<Button key={i} title={x} onPress={()=>this.props.navigation.navigate(x)}/>))}
            </View>
        );
    }


}

