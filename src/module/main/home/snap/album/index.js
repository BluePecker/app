import React, {Component} from 'react';
import Modal from 'react-native-modal';
import {Screen, Button, Image, View, Text} from '@shoutem/ui';
import Swiper from 'react-native-swiper';
import Css from 'module/main/home/snap/album/css';
import {Animated, ScrollView, TouchableHighlight} from 'react-native';

export default class Album extends Component {

    render() {
        const {width, height} = require('Dimensions').get('window');
        const {params: {source, index, x, y, w, h}} = this.state;
        return (
            <Modal
                isVisible={this.state.visible}
                animationIn="fadeIn"
                animationOut="fadeOut"
                animationInTiming={5}
                animationOutTiming={20}
                backdropTransitionInTiming={5}
                backdropTransitionOutTiming={20}
                backdropOpacity={1}
                style={{width, height, padding: 0, margin: 0}}
            >
                <Swiper
                    index={index}
                    showsPagination
                    dotStyle={{backgroundColor: '#8b8b8b', opacity: 0.6}}
                    activeDotColor={'#fff'}
                    bounces
                    // automaticallyAdjustContentInsets
                >
                    {source.map((item, num) => {
                        const scaleY = width / w * (item.height / item.width);
                        const position = this.convertPosition(num, index, x, y, width, height);
                        return (
                            <ScrollView
                                contentContainerStyle={{
                                    height: scaleY * w > height ? scaleY * w : height, width: width,
                                }}
                                key={num}
                                showsVerticalScrollIndicator={false}
                                onScroll={event => this.setState({offsetY: event.nativeEvent.contentOffset.y})}
                            >
                                <TouchableHighlight
                                    onPress={() => {
                                        Animated.timing(this.state.animated, {
                                            toValue : 0,
                                            duration: 250,
                                        }).start(() => this.setState({visible: false}));
                                    }}
                                    activeOpacity={1}
                                    underlayColor={'rgba(0, 0, 0, 0)'}
                                    style={{
                                        height: scaleY * w > height ? scaleY * w : height, width: width,
                                    }}
                                >
                                    <Animated.Image
                                        source={{
                                            resizeMode: 'contain',
                                            uri       : item.uri,
                                            cache     : 'force-cache',
                                        }}
                                        style={{
                                            width          : w,
                                            height         : h,
                                            transform      : [
                                                {
                                                    translateY: this.state.animated.interpolate({
                                                        inputRange : [0, 1],
                                                        outputRange: [this.state.offsetY, (scaleY * w > height ?
                                                            (scaleY * w) : height) / 2 - (position.y + h / 2)
                                                        ],
                                                    }),
                                                },
                                                {
                                                    translateX: this.state.animated.interpolate({
                                                        inputRange : [0, 1],
                                                        outputRange: [0, width / 2 - (position.x + w / 2)],
                                                    }),
                                                },
                                                {
                                                    scaleX: this.state.animated.interpolate({
                                                        inputRange : [0, 1],
                                                        outputRange: [1, width / w],
                                                    }),
                                                },
                                                {
                                                    scaleY: this.state.animated.interpolate({
                                                        inputRange : [0, 1],
                                                        outputRange: [1, scaleY],
                                                    }),
                                                },
                                            ],
                                            top            : position.y,
                                            left           : position.x,
                                            position       : 'absolute',
                                            backgroundColor: '#eeeff1',
                                        }}
                                    />
                                </TouchableHighlight>
                            </ScrollView>
                        );
                    })}
                </Swiper>
            </Modal>
        );
    }

    constructor(props) {
        super(props);
        this.state = {
            animated: new Animated.Value(0),
            offsetY : 0,
            visible : false,
            params  : {source: [], index: 0, x: 0, y: 0, w: 0, h: 0},
        };
    }

    convertPosition(n, i, x, y, w, h) {
        y += (parseInt(n / 3) - parseInt(i / 3)) * 0.3152 * w;
        x += (n % 3 - i % 3) * 0.3152 * w;
        return {x, y};
    }

    toModalShow(params) {
        Animated.timing(this.state.animated, {
            toValue: 1, duration: 250
        }).start();
        this.setState({visible: true, offsetY: 0, params});
    }
};