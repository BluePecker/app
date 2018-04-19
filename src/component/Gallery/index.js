import React, {Component} from 'react';
import {NativeModules, TouchableHighlight} from 'react-native';
import {Button, View} from '@shoutem/ui';

import FastImage from 'react-native-fast-image';
import {createImageProgress} from 'react-native-image-progress';
import * as Progress from 'react-native-progress';

const Image = createImageProgress(FastImage);

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
                                    uri  : item.thumbnail,
                                    cache: 'force-cache',
                                }}
                                indicator={Progress.CircleSnail}
                                indicatorProps={{
                                    size: 40,
                                    //     borderWidth  : 2,
                                    //     color        : 'rgba(255, 255, 255, 0.5)',
                                    //     unfilledColor: 'rgba(155, 155, 155, 0.5)',
                                }}
                                indeterminate={true}
                            />
                        </TouchableHighlight>
                    );
                })}</View>
            </View>
        );
    }
};