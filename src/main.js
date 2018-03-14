/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Main from 'module/main';

EStyleSheet.build({$rem: Dimensions.get('window').width / 100});

export default class App extends Component {
    render() {
        return (
            <Provider store={require('model').default}>
                <Main/>
            </Provider>
        );
    }
}
