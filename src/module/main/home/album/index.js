import React, {Component} from 'react';

import {
    Text,
    View,
    Image,
    Button,
    Screen,
} from '@shoutem/ui';
import Swiper from 'react-native-swiper';
import {Modal, Animated, ScrollView,} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

import Inject from 'module';
import Css from './css';
import Model from 'model/main/home';

class FadeInView extends Component {
    state = {
        fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
    }

    componentDidMount() {
        Animated.timing(                  // Animate over time
            this.state.fadeAnim,            // The animated value to drive
            {
                toValue : 1,                   // Animate to opacity: 1 (opaque)
                duration: 1000,              // Make it take a while
            }
        ).start();                        // Starts the animation
    }

    render() {
        let {fadeAnim} = this.state;

        return (
            <Animated.View                 // Special animatable View
                style={{
                    ...this.props.style,
                    opacity: fadeAnim,         // Bind opacity to animated value
                }}
            >
                {this.props.children}
            </Animated.View>
        );
    }
}


class Album extends Component {

    constructor(props) {
        super(props);
        this.state = {
            scaleX    : new Animated.Value(1),
            scaleY    : new Animated.Value(1),
            translateX: new Animated.Value(0),
            translateY: new Animated.Value(0),
        };
    }

    componentDidMount() {
        var h = require('Dimensions').get('window').height;
        var w = require('Dimensions').get('window').width;
        const {source, index, width, height, x, y} = this.props.navigation.state.params;

        Animated.parallel([
            Animated.spring(this.state.scaleX, {
                toValue: w / width,
            }),
            Animated.spring(this.state.scaleY, {
                toValue: w / width * (source[index].height / source[index].width),
            }),
            Animated.spring(this.state.translateX, {
                toValue: w / 2 - (x + width / 2),
            }),
            Animated.spring(this.state.translateY, {
                toValue: h / 2 - (y + height / 2),
            })
        ]).start();
    }

    render() {
        var h = require('Dimensions').get('window').height;
        var w = require('Dimensions').get('window').width;
        const {source, index, width, height, x, y} = this.props.navigation.state.params;

        return (
            <Modal style={{backgroundColor: '#000'}}>
                <Swiper
                    index={0}
                    showsPagination
                    // renderPagination={(index, total, ctx) => {
                    //     return (
                    //         <View style={Css._header}>
                    //             <View style={Css._left}>
                    //                 <Button styleName="clear" onPress={() => {
                    //                     close && close();
                    //                 }} style={{margin: 0, padding: 0}}>
                    //                     <Icon name="close" style={Css._close} size={20}/>
                    //                 </Button>
                    //             </View>
                    //             <View style={Css._middle}>
                    //                 <Text style={Css._index}>{`${index + 1}/${total}`}</Text>
                    //             </View>
                    //             <View style={Css._right}>
                    //                 <Button styleName="clear" onPress={() => {
                    //                     share && share();
                    //                 }} style={{margin: 0, padding: 0}}>
                    //                     <Icon name="share-apple" style={Css._share} size={20}/>
                    //                 </Button>
                    //             </View>
                    //         </View>
                    //     );
                    // }}
                    bounces
                    automaticallyAdjustContentInsets
                >
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{
                            height         : w / width * (source[index].height / source[index].width) * width > h ? w / width * (source[index].height / source[index].width) * width : h,
                            width          : w,
                        }}
                    >
                        <Animated.Image
                            style={{
                                width          : width,
                                height         : height,
                                top            : y,
                                left           : x,
                                position       : 'absolute',

                                transform: [
                                    {
                                        translateX: this.state.translateX,
                                    },
                                    {
                                        translateY: this.state.translateY,
                                    },
                                    {
                                        scaleX: this.state.scaleX,
                                    },
                                    {
                                        scaleY: this.state.scaleY,
                                    },
                                ],

                                // transform      : [{
                                //     matrix: [
                                //         w / width, 0, 0, 0,
                                //         0, w / width * (source[index].height / source[index].width), 0, 0,
                                //         0, 0, 1, 0,
                                //         // 图片高度小于屏幕高度时
                                //         // w / 2 - (x + width / 2), h / 2 - (y + height / 2), 0, 1,
                                //         // 图片高度大于屏幕高度时
                                //         w / 2 - (x + width / 2), (w / width * (source[index].height / source[index].width) * width) / 2 - (y + height / 2), 0, 1,
                                //     ]
                                // }],
                            }}
                            source={{
                                cache     : 'force-cache',
                                resizeMode: 'contain',
                                uri       : source[index].uri,
                            }}
                        />
                    </ScrollView>
                    <ScrollView
                        style={{
                            height         : h,
                            width          : w,
                        }}
                    >
                        <Animated.Image
                            style={{
                                height: h,
                                width : w,
                            }}
                            source={{
                                cache     : 'force-cache',
                                resizeMode: 'contain',
                                uri       : source[0].uri,
                            }}
                        />
                    </ScrollView>
                </Swiper>
            </Modal>
        );
    }
}

export default Inject({namespace: 'main/home/modal', component: Album, model: Model})