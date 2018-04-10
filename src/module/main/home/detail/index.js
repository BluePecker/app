import React, {Component} from 'react';

import {
    Screen,
    Text,
} from '@shoutem/ui';
import MapView from 'react-native-maps';

import Inject from 'module';
import Css from './css';
import Model from 'model/main/home';

class Detail extends Component {

    render() {
        return (
            <Screen>
            </Screen>
        );
    }
}

export default Inject({namespace: 'main/home/detail', component: Detail, model: Model});