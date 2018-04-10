import React, {Component} from 'react';

import {
    Screen,
    Text,
} from '@shoutem/ui';

import Inject from 'module';
import Css from './css';
import Model from 'model/main/home';

class Detail extends Component {

    render() {
        return (
            <Screen>
                <Text>Detail</Text>
            </Screen>
        );
    }
}

export default Inject({namespace: 'main/home/detail', component: Detail, model: Model});