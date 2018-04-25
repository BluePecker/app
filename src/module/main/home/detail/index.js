import React, {Component} from 'react';
import Parallax from 'react-native-parallax-scroll-view';
import {Animated, Dimensions, Text} from 'react-native';
import MapView from 'react-native-maps';
import Image from 'react-native-fast-image';

import Wave from 'component/Wave';
import Inject from 'module';
import Model from 'model/main/home/detail';

const window = Dimensions.get('window');
const GOLDEN_RATIO = 0.618 * window.width;

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    parallaxBackground = () => (
        <Animated.View style={{width: window.width, height: GOLDEN_RATIO}}>
            <MapView
                initialRegion={{
                    latitude      : 30.537686,
                    longitude     : 104.068578,
                    latitudeDelta : 0.0005,
                    longitudeDelta: 0.0002,
                }}
                style={{width: window.width, height: 0.8 * window.width}}
            >
                <MapView.Marker
                    coordinate={{
                        latitude : 30.5376799,
                        longitude: 104.06864,
                    }}
                >
                    <Wave style={{backgroundColor: 'tomato'}}/>
                </MapView.Marker>

                <MapView.Marker
                    coordinate={{
                        latitude : 30.5376799,
                        longitude: 104.06873,
                    }}
                >
                    <Wave style={{backgroundColor: 'red'}}/>
                </MapView.Marker>
            </MapView>
            <Animated.View
                style={{
                    position  : 'absolute', bottom: 0,
                    height    : 91.8, width: 100,
                    alignItems: 'center', justifyContent: 'center',
                }}
            >
                <Animated.View
                    style={{
                        height    : 66.8, width: 100,
                        alignItems: 'center', justifyContent: 'center',
                        overflow  : 'hidden',
                    }}
                >
                    <Image
                        style={{
                            height      : 72, width: 72, backgroundColor: 'tomato',
                            borderRadius: 36, position: 'absolute', top: 0,
                        }}
                        source={{uri: 'https://wx4.sinaimg.cn/mw690/7529eb5fgy1fqgz5l6332j22c02c0npe.jpg'}}
                    />
                </Animated.View>
                <Animated.View
                    style={{height: 25, width: 100,}}
                >
                    <Text
                        style={{
                            textAlign      : 'center',
                            lineHeight     : 30,
                            backgroundColor: 'transparent',
                        }}
                    >卖萌的小怪</Text>
                </Animated.View>
            </Animated.View>
        </Animated.View>
    );

    parallaxForeground = () => (
        <Animated.View>


        </Animated.View>
    );

    render() {
        return (
            <Parallax
                parallaxHeaderHeight={GOLDEN_RATIO}
                backgroundSpeed={10}
                renderBackground={this.parallaxBackground}
                renderForeground={this.parallaxForeground}
            >

            </Parallax>
        );
    }
}

export default Inject({namespace: 'main/home/detail', component: Detail, model: Model});