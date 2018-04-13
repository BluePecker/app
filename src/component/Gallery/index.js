import React, {Component} from 'react';
import {NativeModules, TouchableHighlight, ART} from 'react-native';
import {Button, View} from '@shoutem/ui';

import Image from 'react-native-image-progress';
// import Progress from 'react-native-progress';

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
                                    cache: 'force-cache',
                                }}
                                // indicator={Progress}
                                // indicatorProps={{
                                //     size: 80,
                                //     borderWidth: 0,
                                //     color: 'rgba(150, 150, 150, 1)',
                                //     unfilledColor: 'rgba(200, 200, 200, 0.2)'
                                // }}
                            />
                        </TouchableHighlight>
                    );
                })}</View>
            </View>
        );
    }
};