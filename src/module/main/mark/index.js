import React, {Component} from 'react';
import {
    Title,
    NavigationBar,
    ImageBackground,
} from '@shoutem/ui';

import {StatusBar} from 'react-native';
import Screen from 'component/Screen';
import Inject from 'module';

import Css from './css';

import Model from 'model/main/mark';

class Mark extends Component {

    componentDidMount() {
        console.log('init');
    }

    render() {
        const {test, state: {name}} = this.props;

        return (
            <Screen>
                <StatusBar barStyle="light-content" backgroundColor='#000000'/>
                <NavigationBar
                    styleName="clear inline"
                    centerComponent={<Title>TITLE</Title>}
                />
            </Screen>
        );
    }
}

export default Inject({namespace: 'main/mark', component: Mark, model: Model});