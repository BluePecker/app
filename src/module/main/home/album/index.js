import React, {Component} from 'react';

import {
    Text,
    View,
    Image,
    Button,
    Screen,
} from '@shoutem/ui';
import Swiper from 'react-native-swiper';
import {Modal, Animated, ScrollView, TouchableHighlight, TouchableWithoutFeedback} from 'react-native';
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

    convertPosition(n, i, x, y) {
        y += (n / 3 - i / 3) * 100;
        x += (n % 3 - i % 3) * 100;
        return {x, y};
    }

    render() {
        var h = require('Dimensions').get('window').height;
        var w = require('Dimensions').get('window').width;
        const {source, index, width, height, x, y} = this.props.navigation.state.params;

        console.log(width, height, x, y);

        return (
            <Modal>
                <Swiper
                    index={index}
                    showsPagination
                    renderPagination={(index, total, ctx) => {
                        return (
                            <View style={Css._header}>
                                <View style={Css._left}>
                                    <Button styleName="clear" onPress={() => {
                                        this.props.navigation.goBack();
                                        Animated.spring(this.state.animated, {
                                            toValue : 0,
                                            duration: 800,
                                        }).start();
                                    }} style={{margin: 0, padding: 0}}>
                                        <EvilIcon name="close" style={Css._close} size={20}/>
                                    </Button>
                                </View>
                                <View style={Css._middle}>
                                    <Text style={Css._index}>{`${index + 1}/${total}`}</Text>
                                </View>
                                <View style={Css._right}>
                                    <Button styleName="clear" onPress={() => {
                                        share && share();
                                    }} style={{margin: 0, padding: 0}}>
                                        <EvilIcon name="share-apple" style={Css._share} size={20}/>
                                    </Button>
                                </View>
                            </View>
                        );
                    }}
                    bounces
                    automaticallyAdjustContentInsets
                >
                    {source.map((item, num) => {
                        const scaleY = w / width * (item.height / item.width);
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
                            >
                                <ScrollView
                                    showsVerticalScrollIndicator={false}
                                    contentContainerStyle={{
                                        height         : scaleY * width > h ? scaleY * width : h,
                                        width          : w,
                                        backgroundColor: '#000',
                                    }}
                                >
                                    <TouchableWithoutFeedback>
                                        <Animated.Image
                                            source={{
                                                resizeMode: 'contain',
                                                uri       : item.uri,
                                                cache     : 'force-cache',
                                            }}
                                            style={{
                                                width    : width,
                                                height   : height,
                                                top      : y,
                                                left     : x,
                                                position : 'absolute',
                                                opacity  : this.state.animated.interpolate({
                                                    inputRange : [0, 1],
                                                    outputRange: [0.5, 1],
                                                }),
                                                transform: [
                                                    {
                                                        translateX: this.state.animated.interpolate({
                                                            inputRange : [0, 1],
                                                            outputRange: [0, w / 2 - (x + width / 2)],
                                                        }),
                                                    },
                                                    {
                                                        translateY: this.state.animated.interpolate({
                                                            inputRange : [0, 1],
                                                            outputRange: [0, scaleY * width > h ? (scaleY * width) / 2 - (y + height / 2) : h / 2 - (y + height / 2)],
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
                                            }}
                                        />
                                    </TouchableWithoutFeedback>
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