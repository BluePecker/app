import React, {Component} from 'react';
import Modal from 'react-native-modal';
import {Screen, Button, View, Text} from '@shoutem/ui';
import Carousel from 'react-native-looped-carousel';
import Css from 'module/main/home/snap/album/css';
import {ScrollView, TouchableHighlight, Animated, StyleSheet} from 'react-native';

import * as Progress from 'react-native-progress';
import * as Animatable from 'react-native-animatable';
import FastImage from 'react-native-fast-image';

// const Image = Animatable.createAnimatableComponent(FastImage);
const Image = Animated.createAnimatedComponent(FastImage);

class Swiper extends Carousel {
    _renderPageInfo = (total) => {
        if (total <= 1) return null;
        let dots = [];
        for (let i = 0; i < total; i++) {
            dots.push(React.cloneElement(<View
                style={{
                    backgroundColor: i === this.state.currentPage ?
                        (this.props.activeDotColor || 'rgba(255, 255, 255, 1)') :
                        (this.props.dotColor || 'rgba(255, 255, 255, 0.2)'),
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
                                    // console.log(event.nativeEvent.contentOffset.y);
                                    // this.state.offset[num] = event.nativeEvent.contentOffset.y;
                                    // this.setState({offset: this.state.offset})
                                }}
                                scrollEventThrottle={32}
                            >
                                {/*<Progress.Pie*/}
                                {/*animated={false}*/}
                                {/* indeterminate={true}*/}
                                {/*showsText={true}*/}
                                {/*unfilledColor={'rgba(200, 200, 200, 0.1)'}*/}
                                {/*size={40}*/}
                                {/*color={'rgba(250, 250, 250, 0.5)'}*/}
                                {/*progress={.2}*/}
                                {/*formatText={progress => {*/}
                                {/*return `${Math.round(progress * 100)}%`;*/}
                                {/*}}*/}
                                {/*style={{*/}
                                {/*position      : 'absolute',*/}
                                {/*top           : 0,*/}
                                {/*left          : 0,*/}
                                {/*right         : 0,*/}
                                {/*bottom        : 0,*/}
                                {/*zIndex        : 10,*/}
                                {/*height,*/}
                                {/*width,*/}
                                {/*justifyContent: 'center',*/}
                                {/*alignItems    : 'center',*/}
                                {/*}}*/}
                                {/*/>*/}
                                {/*<Progress.Circle*/}
                                {/*animated={false}*/}
                                {/*indeterminate={true}*/}
                                {/*// showsText={true}*/}
                                {/*unfilledColor={'rgba(200, 200, 200, 0.2)'}*/}
                                {/*size={40}*/}
                                {/*color={'rgba(250, 250, 250, 1)'}*/}
                                {/*progress={.4}*/}
                                {/*formatText={progress => {*/}
                                {/*return `${Math.round(progress * 100)}%`;*/}
                                {/*}}*/}
                                {/*style={{*/}
                                {/*position      : 'absolute',*/}
                                {/*top           : 0,*/}
                                {/*left          : 0,*/}
                                {/*right         : 0,*/}
                                {/*bottom        : 0,*/}
                                {/*zIndex        : 10,*/}
                                {/*height,*/}
                                {/*width,*/}
                                {/*justifyContent: 'center',*/}
                                {/*alignItems    : 'center',*/}
                                {/*}}*/}
                                {/*textStyle={{*/}
                                {/*position      : 'relative',*/}
                                {/*}}*/}
                                {/*>*/}
                                {/*<View*/}
                                {/*style={{*/}
                                {/*position      : 'absolute',*/}
                                {/*top           : 0,*/}
                                {/*left          : 0,*/}
                                {/*right         : 0,*/}
                                {/*bottom        : 0,*/}
                                {/*zIndex        : 10,*/}
                                {/*height,*/}
                                {/*width,*/}
                                {/*justifyContent: 'center',*/}
                                {/*alignItems    : 'center',*/}
                                {/*}}*/}
                                {/*>*/}
                                {/*<Text*/}
                                {/*style={{*/}
                                {/*color: 'red',*/}
                                {/*// fontSize: textSize / 4.5,*/}
                                {/*fontWeight: '300',*/}
                                {/*}}*/}
                                {/*>*/}
                                {/*{'40%'}*/}
                                {/*</Text>*/}
                                {/*</View>*/}
                                {/*</Progress.Circle>*/}
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
                                    {/*<View*/}
                                    {/*style={{*/}
                                    {/*height        : scaleY * w > height ? scaleY * w : height, width: width,*/}
                                    {/*...StyleSheet.absoluteFillObject,*/}
                                    {/*alignItems    : 'center',*/}
                                    {/*justifyContent: 'center',*/}
                                    {/*}}*/}
                                    {/*>*/}
                                    {/*<Image*/}
                                    {/*resizeMode={FastImage.resizeMode.stretch}*/}
                                    {/*source={{*/}
                                    {/*uri: item.uri,*/}
                                    {/*}}*/}
                                    {/*style={{*/}
                                    {/*width, height  : h * scaleY,*/}
                                    {/*backgroundColor: 'red',*/}
                                    {/*}}*/}
                                    {/*/>*/}

                                    {/*<Animated.Image*/}
                                    {/*resizeMode={FastImage.resizeMode.stretch}*/}
                                    {/*source={{*/}
                                    {/*uri: item.uri,*/}
                                    {/*}}*/}
                                    {/*style={{*/}
                                    {/*position : 'absolute',*/}
                                    {/*top      : position.y,*/}
                                    {/*left     : position.x,*/}
                                    {/*zIndex   : 10,*/}
                                    {/*width    : w,*/}
                                    {/*height   : h,*/}
                                    {/*transform: [*/}
                                    {/*{*/}
                                    {/*translateY: this.state.animated.interpolate({*/}
                                    {/*inputRange : [0, 1],*/}
                                    {/*outputRange: [this.state.offset[`${num}`] || 0, (scaleY * w > height ?*/}
                                    {/*(scaleY * w) : height) / 2 - (position.y + h / 2)*/}
                                    {/*],*/}
                                    {/*}),*/}
                                    {/*},*/}
                                    {/*{*/}
                                    {/*translateX: this.state.animated.interpolate({*/}
                                    {/*inputRange : [0, 1],*/}
                                    {/*outputRange: [0, width / 2 - (position.x + w / 2)],*/}
                                    {/*}),*/}
                                    {/*},*/}
                                    {/*{*/}
                                    {/*scaleX: this.state.animated.interpolate({*/}
                                    {/*inputRange : [0, 1],*/}
                                    {/*outputRange: [1, width / w],*/}
                                    {/*}),*/}
                                    {/*},*/}
                                    {/*{*/}
                                    {/*scaleY: this.state.animated.interpolate({*/}
                                    {/*inputRange : [0, 1],*/}
                                    {/*outputRange: [1, scaleY],*/}
                                    {/*}),*/}
                                    {/*},*/}
                                    {/*],*/}
                                    {/*}}*/}
                                    {/*onLoad={this.onOriginalLoad}*/}
                                    {/*/>*/}
                                    <Image
                                        resizeMode={FastImage.resizeMode.stretch}
                                        source={{
                                            uri  : item.uri,
                                            cache: 'force-cache',
                                        }}
                                        style={{
                                            position : 'absolute',
                                            top      : position.y,
                                            left     : position.x,
                                            zIndex   : 10,
                                            width    : w,
                                            height   : h,
                                            transform: [
                                                {
                                                    translateY: this.state.animated.interpolate({
                                                        inputRange : [0, 1],
                                                        outputRange: [this.state.offset[`${num}`] || 0,
                                                            ((scaleY * w > height ? scaleY * w : height) - h) / 2 - position.y
                                                        ],
                                                    }),
                                                },
                                                {
                                                    translateX: this.state.animated.interpolate({
                                                        inputRange : [0, 1],
                                                        outputRange: [0, (width - w) / 2 - position.x],
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
                                            // opacity  : this.state.thumbnailOpcity.interpolate({
                                            //     inputRange : [0, 1],
                                            //     outputRange: [0, 1],
                                            // }),
                                        }}
                                        // onLoad={this.onThumbnailLoad}
                                    />
                                    {/*</View>*/}
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

    toModalShow(params) {
        Animated.timing(this.state.animated, {
            toValue: 1, duration: 250
        }).start();
        this.setState({visible: true, offset: {}, params});
    }

    onOriginalLoad = () => Animated.timing(this.state.thumbnailOpcity, {toValue: 0, duration: 250}).start();

    onThumbnailLoad = () => Animated.timing(this.state.thumbnailOpcity, {toValue: 1, duration: 250}).start();
};