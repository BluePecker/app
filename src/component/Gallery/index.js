import React, {Component} from 'react';
import {NativeModules} from 'react-native';
import {Button, Image, View} from '@shoutem/ui';

import Css from './css';

export default class Gallery extends Component {

    render() {
        const {
            source,
            css: {wrapper, large, small},
            onPress
        } = this.props;

        return (
            <View
                style={wrapper}
            >{source.slice(0, 9).map((item, index) => {
                return (
                    <Button
                        style={source.length > 1 ? small : large}
                        onPress={(e) => {
                            NativeModules.UIManager.measure(e.target, (x, y, width, height, pageX, pageY) => {
                                onPress(source, index, x, y, width, height);
                            });

                        }}
                        key={index}
                    >
                        <Image source={{uri: item.uri}} styleName="medium-square"/>
                    </Button>
                );
            })}</View>
        );
    }
}