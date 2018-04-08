import React, {Component} from 'react';

import {
    Text,
    View,
    Image,
    Button,
    Screen,
} from '@shoutem/ui';
import Swiper from 'react-native-swiper';
import {Modal, Animated, ScrollView, TouchableHighlight} from 'react-native';
import EvilIcon from 'react-native-vector-icons/EvilIcons';

import Inject from 'module';
import Css from './css';
import Model from 'model/main/home';

class Album extends Component {

    constructor(props) {
        super(props);
        this.state = {
            animated: new Animated.Value(0),
        };
    }

    componentDidMount() {
        Animated.spring(this.state.animated, {toValue: 1}).start();
    }

    convertPosition(n, i, x, y, w, h) {
        y += (parseInt(n / 3) - parseInt(i / 3)) * 0.3152 * w;
        x += (n % 3 - i % 3) * 0.3152 * w;
        return {x, y};
    }

    render() {
        let h = require('Dimensions').get('window').height;
        let w = require('Dimensions').get('window').width;
        const {source, index, width, height, x, y} = this.props.navigation.state.params;

        return (
            <Modal>
                <Swiper
                    index={index}
                    showsPagination
                    dotStyle={{backgroundColor: '#8b8b8b', opacity: 0.6}}
                    activeDotColor={'#fff'}
                    bounces
                    automaticallyAdjustContentInsets
                >
                    {source.map((item, num) => {
                        const scaleY = w / width * (item.height / item.width);
                        const position = this.convertPosition(num, index, x, y, w, h);
                        return (
                            <TouchableHighlight
                                onPress={() => {
                                    this.props.navigation.goBack();
                                    Animated.spring(this.state.animated, {
                                        toValue : 0,
                                        duration: 800,
                                    }).start();
                                }}
                                activeOpacity={1}
                                key={num}
                                underlayColor={'rgba(0, 0, 0, 0.0)'}
                            >
                                <ScrollView
                                    contentContainerStyle={{
                                        height         : scaleY * width > h ? scaleY * width : h,
                                        width          : w,
                                        backgroundColor: '#000',
                                    }}
                                    showsVerticalScrollIndicator={false}
                                >
                                    <Animated.Image
                                        source={{
                                            resizeMode: 'contain',
                                            uri       : item.uri,
                                            cache     : 'force-cache',
                                        }}
                                        style={{
                                            width    : width,
                                            height   : height,
                                            transform: [
                                                {
                                                    translateY: this.state.animated.interpolate({
                                                        inputRange : [0, 1],
                                                        outputRange: [0, (scaleY * width > h ? (scaleY * width) : h) / 2 - (position.y + height / 2)],
                                                    }),
                                                },
                                                {
                                                    translateX: this.state.animated.interpolate({
                                                        inputRange : [0, 1],
                                                        outputRange: [0, w / 2 - (position.x + width / 2)],
                                                    }),
                                                },
                                                {
                                                    scaleX: this.state.animated.interpolate({
                                                        inputRange : [0, 1],
                                                        outputRange: [1, w / width],
                                                    }),
                                                },
                                                {
                                                    scaleY: this.state.animated.interpolate({
                                                        inputRange : [0, 1],
                                                        outputRange: [1, scaleY],
                                                    }),
                                                },
                                            ],
                                            top      : position.y,
                                            left     : position.x,
                                            position : 'absolute',
                                        }}
                                    />
                                </ScrollView>
                            </TouchableHighlight>
                        );
                    })}
                </Swiper>
            </Modal>
        );
    }
}

export default Inject({namespace: 'main/home/modal', component: Album, model: Model})