import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

import Inject from 'module';

import Css from './css';

import Model from 'model/main/home';

class Home extends Component {
    render() {
        const {test, state: {name}} = this.props;

        return (
            <View style={Css.container}>
                <Text style={Css.welcome} onClick={test}>{name}</Text>
                <Button
                    onPress={test}
                    title="Press Me"
                    accessibilityLabel="See an informative alert"
                />
            </View>
        );
    }
}

export default Inject({namespace: 'main/home', component: Home, model: Model});