import React, {Component} from 'react';
import {NativeModules, Modal, Text} from 'react-native';
import Swiper from 'react-native-swiper';
import {Button, Image, View, ImageGallery, ImageGalleryOverlay, Screen} from '@shoutem/ui';
import Icon from 'react-native-vector-icons/EvilIcons';

import Css from './css';

class JiuGongGe extends Component {

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
                        <Button
                            style={source.length > 1 ? small : large}
                            key={index}
                            onPress={(e) => {
                                NativeModules.UIManager.measure(e.target, (x, y, width, height, pageX, pageY) => {
                                    onPress && onPress(source, index, x, y, width, height);
                                });
                            }}
                        >
                            <Image source={{uri: item.uri, cache: 'force-cache'}} styleName="medium-square"/>
                        </Button>
                    );
                })}</View>
            </View>
        );
    }
}

class Gallery extends Component {
    render() {
        const {visible, index, images, close, share} = this.props;
        return (
            <Modal
                visible={visible}
            >
                <Screen style={Css._mask}>
                    <Swiper
                        showsPagination
                        renderPagination={(index, total, ctx) => {
                            return (
                                <View style={Css._header}>
                                    <View style={Css._left}>
                                        <Button styleName="clear" onPress={() => {
                                            close && close();
                                        }}>
                                            <Icon name="close" style={Css._close} size={25}/>
                                        </Button>
                                    </View>
                                    <View style={Css._middle}>
                                        <Text style={Css._index}>{`${index + 1}/${total}`}</Text>
                                    </View>
                                    <View style={Css._right}>
                                        <Button styleName="clear" onPress={() => {
                                            share && share();
                                        }}>
                                            <Icon name="share-apple" style={Css._share} size={25}/>
                                        </Button>
                                    </View>
                                </View>
                            );
                        }}
                    >{
                        images.map((item, index) => {
                            return (
                                <View
                                    style={Css._swiper}
                                    key={index}
                                >
                                    <Image
                                        source={{
                                            uri  : item.uri,
                                            cache: 'force-cache'
                                        }}
                                        style={Css._swiperImage}
                                        resizeMode={"contain"}
                                    />
                                </View>
                            );
                        })
                    }</Swiper>
                </Screen>
            </Modal>
        );
    }
}

export {Gallery, JiuGongGe};