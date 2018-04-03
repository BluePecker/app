import React, {Component} from 'react';

import {
    View,
    Text,
} from '@shoutem/ui';

import Inject from 'module';
import Css from './css';
import Model from 'model/main/home';

class Modal extends Component {
    render() {
        return (
            <View>
                <Text>Modal -> hello word!!!</Text>
            </View>
        );
    }
}

export default Inject({namespace: 'main/home/modal', component: Modal, model: Model})