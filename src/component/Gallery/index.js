import React, {Component} from 'react';
import {NativeModules, TouchableHighlight, Image} from 'react-native';
import {Button, View} from '@shoutem/ui';

import Css from './css';

export default class Gallery extends Component {
    render() {
        const {
            source,
            css: {wrapper, large, small},
            onPress
        } = this.props;
        return (
            <View>
                <View
                    style={wrapper}
                >{source.slice(0, 9).map((item, index) => {
                    return (
                        <TouchableHighlight
                            key={index}
                            onPress={(e) => {
                                NativeModules.UIManager.measure(e.target, (t1, t2, width, height, x, y) => {
                                    onPress && onPress(source, index, x, y, width, height);
                                });
                            }}
                            activeOpacity={1}
                            underlayColor={'#ffffff'}
                        >
                            <Image
                                style={source.length > 1 ? small : large}
                                source={{
                                    uri  : item.uri,
                                    cache: 'force-cache'
                                }}
                                styleName="medium-square"
                            />
                        </TouchableHighlight>
                    );
                })}</View>
            </View>
        );
    }
};