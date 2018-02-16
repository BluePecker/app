/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {Component} from 'react';
import {Provider} from 'react-redux';

import Main from 'module/main';

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <Provider store={require('model').default}>
                <Main/>
            </Provider>
        );
    }
}
