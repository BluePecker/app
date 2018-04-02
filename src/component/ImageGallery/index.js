import React, {Component} from 'react';
import {NativeModules, Modal, Text, TouchableHighlight} from 'react-native';
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
                        <TouchableHighlight
                            key={index}
                            onPress={(e) => {
                                NativeModules.UIManager.measure(e.target, (x, y, width, height, pageX, pageY) => {
                                    onPress && onPress(source, index, x, y, width, height);
                                });
                            }}
                        >
                            <Image
                                style={source.length > 1 ? small : large}
                                source={{
                                    uri  : item.uri,
                                    cache: 'force-cache'
                                }}
                                styleName="medium-square"
                            />
                        </TouchableHighlight>
                    );
                })}</View>
            </View>
        );
    }
}

class Gallery extends Component {
    render() {
        const {visible, index, images, close, share} = this.props;
        const gallery = (images || []).map((item, i) => {
            return (
                <View
                    style={Css._swiper}
                    key={i}
                >
                    <Image
                        source={{
                            uri  : item.uri,
                            // 临时修复图片重叠问题
                            cache: index == i ? 'force-cache' : 'reload',
                        }}
                        resizeMode={"contain"}
                        style={Css._swiperImage}
                    />
                </View>
            );
        });

        return (
            <Modal
                visible={visible}
            >
                <Screen style={Css._mask}>
                    <Swiper
                        index={index || 0}
                        showsPagination
                        renderPagination={(index, total, ctx) => {
                            return (
                                <View style={Css._header}>
                                    <View style={Css._left}>
                                        <Button styleName="clear" onPress={() => {
                                            close && close();
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
                    >{gallery}</Swiper>
                </Screen>
            </Modal>
        );
    }
}

export {Gallery, JiuGongGe};