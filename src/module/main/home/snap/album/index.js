import React, {Component} from 'react';
import Modal from 'react-native-modal';
import {Screen, Button, View, Text} from '@shoutem/ui';
import Carousel from 'react-native-looped-carousel';
import {ScrollView, TouchableHighlight, Animated, StyleSheet} from 'react-native';
import * as Progress from 'react-native-progress';
import CachedImage from 'component/CacheImage';

import Css from './css';

const AnimatedImage = Animated.createAnimatedComponent(CachedImage);

class Swiper extends Carousel {
    _renderPageInfo = (total) => {
        if (total <= 1) return null;
        let dots = [];
        for (let i = 0; i < total; i++) {
            dots.push(React.cloneElement(<View
                style={{
                    backgroundColor: i !== this.state.currentPage ?
                        (this.props.dotColor || 'rgba(255,255,255,0.2)') :
                        (this.props.activeDotColor || 'rgba(255,255,255,1)'),
                    width          : 8,
                    height         : 8,
                    borderRadius   : 4,
                    marginLeft     : 3,
                    marginRight    : 3,
                    marginTop      : 3,
                    marginBottom   : 3
                }}
            />, {key: i}));
        }
        return (
            <View style={{
                position       : 'absolute',
                bottom         : 25,
                left           : 0,
                right          : 0,
                flexDirection  : 'row',
                flex           : 1,
                justifyContent : 'center',
                alignItems     : 'center',
                backgroundColor: 'transparent'
            }}>
                {dots}
            </View>
        );
    }
}

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
                    style={{flex: 1}}
                    autoplay={false}
                    pageInfo
                    currentPage={index}
                    pageInfoBackgroundColor={'rgba(255, 255, 255, 0.25)'}
                    pageInfoTextStyle={{color: '#ffffff'}}
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
                                onScroll={event => {
                                    this.state.offset[num] = event.nativeEvent.contentOffset.y;
                                    this.setState({offset: this.state.offset})
                                }}
                                scrollEventThrottle={32}
                            >
                                <TouchableHighlight
                                    onPress={this.onModalPress}
                                    activeOpacity={1}
                                    underlayColor={'rgba(0, 0, 0, 0)'}
                                    style={{
                                        height, width,
                                        backgroundColor: 'transparent',
                                        zIndex         : 3,
                                        ...StyleSheet.absoluteFillObject,
                                    }}
                                >
                                    <View
                                        style={{
                                            height, width,
                                            backgroundColor: 'transparent'
                                        }}
                                    >
                                        <Progress.Circle
                                            color={'rgba(250,250,250,1)'}
                                            indeterminate={true}
                                            animated={false}
                                            size={40}
                                            progress={0.4}
                                            style={{
                                                justifyContent: 'center',
                                                alignItems    : 'center',

                                                height,
                                                width,
                                                zIndex: 1,
                                                ...StyleSheet.absoluteFillObject,
                                            }}
                                            unfilledColor={'rgba(200,200,200,0.2)'}
                                        />
                                    </View>
                                </TouchableHighlight>
                                <TouchableHighlight
                                    onPress={this.onModalPress}
                                    activeOpacity={1}
                                    underlayColor={'rgba(0, 0, 0, 0)'}
                                    style={{
                                        height: scaleY * w > height ? scaleY * w : height, width: width,
                                    }}
                                >
                                    <View
                                        style={{
                                            height        : scaleY * w > height ? scaleY * w : height, width: width,
                                            ...StyleSheet.absoluteFillObject,
                                            alignItems    : 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <AnimatedImage
                                            resizeMode={'stretch'}
                                            source={{uri: item.uri,}}
                                            style={{
                                                position : 'absolute',
                                                top      : position.y,
                                                left     : position.x,
                                                zIndex   : 1,
                                                width    : w,
                                                height   : h,
                                                transform: [
                                                    {
                                                        translateX: this.state.animated.interpolate({
                                                            inputRange : [0, 1],
                                                            outputRange: [0, (width - w) / 2 - position.x],
                                                        }),
                                                    },
                                                    {
                                                        translateY: this.state.animated.interpolate({
                                                            inputRange : [0, 1],
                                                            outputRange: [this.state.offset[`${num}`] || 0,
                                                                ((scaleY * w > height ? scaleY * w : height) - h) / 2 - position.y
                                                            ],
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
                                            }}
                                            onLoad={this.onOriginalLoad}
                                        />
                                        <AnimatedImage
                                            resizeMode={'stretch'}
                                            source={{uri: item.thumbnail,}}
                                            style={{
                                                position : 'absolute',
                                                top      : position.y,
                                                left     : position.x,
                                                zIndex   : 2,
                                                width    : w,
                                                height   : h,
                                                transform: [
                                                    {
                                                        translateX: this.state.animated.interpolate({
                                                            inputRange : [0, 1],
                                                            outputRange: [0, (width - w) / 2 - position.x],
                                                        }),
                                                    },
                                                    {
                                                        translateY: this.state.animated.interpolate({
                                                            inputRange : [0, 1],
                                                            outputRange: [this.state.offset[`${num}`] || 0,
                                                                ((scaleY * w > height ? scaleY * w : height) - h) / 2 - position.y
                                                            ],
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
                                                opacity  : this.state.thumbnailOpcity.interpolate({
                                                    inputRange : [0, 1],
                                                    outputRange: [0, 1],
                                                }),
                                            }}
                                            onLoad={this.onThumbnailLoad}
                                        />
                                    </View>
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
            animated       : new Animated.Value(0),
            offset         : {},
            visible        : false,
            params         : {source: [], index: 0, x: 0, y: 0, w: 0, h: 0},
            thumbnailOpcity: new Animated.Value(0),
        };
    }

    convertPosition(n, i, x, y, w, h) {
        y += (parseInt(n / 3) - parseInt(i / 3)) * 0.3152 * w;
        x += (n % 3 - i % 3) * 0.3152 * w;
        return {x, y};
    }

    onModalShow(params) {
        Animated.timing(this.state.animated, {
            toValue: 1, duration: 250
        }).start();
        this.setState({visible: true, offset: {}, params});
    }

    onModalPress = () => Animated.timing(this.state.animated, {
        toValue : 0,
        duration: 250
    }).start(() => this.setState({visible: false}));

    onOriginalLoad = () => Animated.timing(this.state.thumbnailOpcity, {toValue: 0, duration: 250}).start();

    onThumbnailLoad = () => Animated.timing(this.state.thumbnailOpcity, {toValue: 1, duration: 250}).start();
};