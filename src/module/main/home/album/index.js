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
import Icon from 'react-native-vector-icons/EvilIcons';

import Inject from 'module';
import Css from './css';
import Model from 'model/main/home';

// class FadeInView extends Component {
//     state = {
//         fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
//     }
//
//     componentDidMount() {
//         Animated.timing(                  // Animate over time
//             this.state.fadeAnim,            // The animated value to drive
//             {
//                 toValue : 1,                   // Animate to opacity: 1 (opaque)
//                 duration: 1000,              // Make it take a while
//             }
//         ).start();                        // Starts the animation
//     }
//
//     render() {
//         let {fadeAnim} = this.state;
//
//         return (
//             <Animated.View                 // Special animatable View
//                 style={{
//                     ...this.props.style,
//                     opacity: fadeAnim,         // Bind opacity to animated value
//                 }}
//             >
//                 {this.props.children}
//             </Animated.View>
//         );
//     }
// }


class Album extends Component {

    constructor(props) {
        super(props);
        this.state = {
            animated: new Animated.Value(0),
        };
    }

    componentDidMount() {
        Animated.parallel([
            Animated.spring(this.state.animated, {toValue: 1}),
        ]).start();
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
                                        <Icon name="close" style={Css._close} size={20}/>
                                    </Button>
                                </View>
                                <View style={Css._middle}>
                                    <Text style={Css._index}>{`${index + 1}/${total}`}</Text>
                                </View>
                                <View style={Css._right}>
                                    <Button styleName="clear" onPress={() => {
                                        share && share();
                                    }} style={{margin: 0, padding: 0}}>
                                        <Icon name="share-apple" style={Css._share} size={20}/>
                                    </Button>
                                </View>
                            </View>
                        );
                    }}
                    bounces
                    automaticallyAdjustContentInsets
                >
                    {
                        source.map((item, num) => {
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
                        })
                    }


                    {/*<TouchableHighlight*/}
                    {/*onPress={() => {*/}
                    {/*this.props.navigation.goBack();*/}
                    {/*}}*/}
                    {/*activeOpacity={1}*/}
                    {/*>*/}
                    {/*<ScrollView*/}
                    {/*showsVerticalScrollIndicator={false}*/}
                    {/*contentContainerStyle={{*/}
                    {/*height         : w / width * (source[index].height / source[index].width) * width > h ? w / width * (source[index].height / source[index].width) * width : h,*/}
                    {/*width          : w,*/}
                    {/*backgroundColor: 'red',*/}
                    {/*}}*/}
                    {/*>*/}
                    {/*<TouchableWithoutFeedback>*/}
                    {/*<Animated.Image*/}
                    {/*style={{*/}
                    {/*width    : width,*/}
                    {/*height   : height,*/}
                    {/*top      : y,*/}
                    {/*left     : x,*/}
                    {/*position : 'absolute',*/}
                    {/*opacity  : this.state.animated.interpolate({*/}
                    {/*inputRange : [0, 1],*/}
                    {/*outputRange: [0.5, 1],*/}
                    {/*}),*/}
                    {/*transform: [{*/}
                    {/*translateX: this.state.animated.interpolate({*/}
                    {/*inputRange : [0, 1],*/}
                    {/*outputRange: [0, w / 2 - (x + width / 2)],*/}
                    {/*}),*/}
                    {/*}, {*/}
                    {/*translateY: this.state.animated.interpolate({*/}
                    {/*inputRange : [0, 1],*/}
                    {/*outputRange: [0, h / 2 - (y + height / 2)],*/}
                    {/*}),*/}
                    {/*}, {*/}
                    {/*scaleX: this.state.animated.interpolate({*/}
                    {/*inputRange : [0, 1],*/}
                    {/*outputRange: [1, w / width],*/}
                    {/*}),*/}
                    {/*}, {*/}
                    {/*scaleY: this.state.animated.interpolate({*/}
                    {/*inputRange : [0, 1],*/}
                    {/*outputRange: [1, w / width * (source[index].height / source[index].width)],*/}
                    {/*}),*/}
                    {/*},],*/}

                    {/*// transform      : [{*/}
                    {/*//     matrix: [*/}
                    {/*//         w / width, 0, 0, 0,*/}
                    {/*//         0, w / width * (source[index].height / source[index].width), 0, 0,*/}
                    {/*//         0, 0, 1, 0,*/}
                    {/*//         // 图片高度小于屏幕高度时*/}
                    {/*//         // w / 2 - (x + width / 2), h / 2 - (y + height / 2), 0, 1,*/}
                    {/*//         // 图片高度大于屏幕高度时*/}
                    {/*//         w / 2 - (x + width / 2), (w / width * (source[index].height / source[index].width) * width) / 2 - (y + height / 2), 0, 1,*/}
                    {/*//     ]*/}
                    {/*// }],*/}
                    {/*}}*/}
                    {/*source={{*/}
                    {/*cache     : 'force-cache',*/}
                    {/*resizeMode: 'contain',*/}
                    {/*uri       : source[index].uri,*/}
                    {/*}}*/}
                    {/*/>*/}
                    {/*</TouchableWithoutFeedback>*/}
                    {/*</ScrollView>*/}
                    {/*</TouchableHighlight>*/}
                </Swiper>
            </Modal>
        );
    }
}

export default Inject({namespace: 'main/home/modal', component: Album, model: Model})