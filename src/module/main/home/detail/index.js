import React, {Component} from 'react';
import Parallax from 'react-native-parallax-scroll-view';
import {Animated, Dimensions, View, Text} from 'react-native';
import MapView from 'react-native-maps';
import Image from 'react-native-fast-image';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Wave from 'component/Wave';
import Css from './css';
import Inject from 'module';
import Model from 'model/main/home/detail';

const window = Dimensions.get('window');
const GOLDEN_RATIO = 0.618 * window.width;

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {sealPos: new Animated.Value(0), scale: new Animated.Value(1),};
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
            <View style={Css._calloutWrapper}>
                <Text style={Css._calloutPublicTime}>
                    2018/05/20 12:01
                </Text>
            </View>
        </Animated.View>
    );

    parallaxForeground = () => (
        <View style={{width: window.width, height: GOLDEN_RATIO}}>
            <Animated.View
                style={[Css._sealWrapper, {
                    bottom: this.state.sealPos,
                }]}
            >
                <View style={Css._sealCircle}>
                    <Animated.Image
                        style={[Css._sealCircleAvatar, {
                            height      : this.state.scale.interpolate({
                                inputRange : [0.00, 1.00],
                                outputRange: [0.10 * window.width, 0.20 * window.width],
                            }),
                            width       : this.state.scale.interpolate({
                                inputRange : [0.00, 1.00],
                                outputRange: [0.10 * window.width, 0.20 * window.width],
                            }),
                            borderRadius: this.state.scale.interpolate({
                                inputRange : [0.00, 1.00],
                                outputRange: [0.05 * window.width, 0.10 * window.width],
                            }),
                            transform   : [{
                                translateY: this.state.scale.interpolate({
                                    inputRange : [0.000, 1.000],
                                    outputRange: [0.065 * window.width, 0.000],
                                })
                            }],
                        }]}
                        source={{uri: 'https://wx4.sinaimg.cn/mw690/7529eb5fgy1fqgz5l6332j22c02c0npe.jpg'}}
                    />
                </View>
                <View style={Css._sealRectangle}>
                    <Text style={Css._sealRectangleUsername}>
                        卖萌的小怪
                    </Text>
                </View>
            </Animated.View>
        </View>
    );

    parallaxFixed = () => (
        <Animated.View
            style={{width: window.width, height: 75, position: 'absolute', top: 0, left: 0,}}
        >
            <Animated.View
                style={{
                    width        : window.width, height: 45, position: 'absolute', bottom: 0,
                    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
                    paddingLeft  : 16, paddingRight: 16,
                }}
            >
                <Ionicons name="ios-arrow-back" color="#ffff" size={24}/>
                <Ionicons name="md-more" color="#ffff" size={24}/>
            </Animated.View>
        </Animated.View>
    );

    render() {
        return (
            <Parallax
                fadeOutBackground={true}
                fadeOutForeground={false}
                parallaxHeaderHeight={GOLDEN_RATIO}
                backgroundScrollSpeed={10}
                outputScaleValue={8.3}
                renderBackground={this.parallaxBackground}
                renderForeground={this.parallaxForeground}
                renderFixedHeader={this.parallaxFixed}
                stickyHeaderHeight={75}
                scrollEvent={({nativeEvent: {contentOffset: {y}}}) => {
                    const distance = GOLDEN_RATIO - y;
                    if (distance >= 0.320 * window.width) {
                        this.state.scale.setValue(1);
                        this.state.sealPos.setValue(0);
                    } else if (distance >= 0.256 * window.width) {
                        this.state.scale.setValue(1);
                        this.state.sealPos.setValue(distance - 0.320 * window.width);
                    } else if (distance >= 0.200 * window.width) {
                        this.state.scale.setValue((distance - 0.2 * window.width) / (0.056 * window.width));
                    } else {
                        this.state.scale.setValue(0);
                        this.state.sealPos.setValue(-0.064 * window.width);
                    }
                }}
                showsVerticalScrollIndicator={false}
            >

            </Parallax>
        );
    }
}

export default Inject({namespace: 'main/home/detail', component: Detail, model: Model});