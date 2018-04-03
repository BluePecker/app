import React, {Component} from 'react';

import {
    Text,
    View,
} from '@shoutem/ui';

import {Modal as NModal} from 'react-native';

import Inject from 'module';
import Css from './css';
import Model from 'model/main/home';

class Modal extends Component {
    render() {
        return (
            <View>
                <NModal>
                    <Text>Modal -> hello word!!!</Text>
                </NModal>
            </View>
        );
    }
}

export default Inject({namespace: 'main/home/modal', component: Modal, model: Model})