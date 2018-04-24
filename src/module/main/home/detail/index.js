/*
 * This example demonstrates how to use ParallaxScrollView within a ScrollView component.
 */
import React, {Component} from 'react';
import {
    Dimensions,
    Image,
    ListView,
    PixelRatio,
    StyleSheet,
    Text,
    View,
    Animated,
} from 'react-native';
import {
    Button,
} from '@shoutem/ui';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MapView, {Marker} from 'react-native-maps';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

import Wave from 'component/Wave';
import Inject from 'module';
import Css from './css';
import Model from 'model/main/home';

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            }).cloneWithRows([
                'Simplicity Matters',
                'Hammock Driven Development',
                'Value of Values',
                'Are We There Yet?',
                'The Language of the System',
                'Design, Composition, and Performance',
                'Clojure core.async',
                'The Functional Database',
                'Deconstructing the Database',
                'Hammock Driven Development',
                'Value of Values'
            ])
        };
    }

    render() {
        const {
            onScroll = () => {
            }
        } = this.props;
        return (
            <ListView
                ref="ListView"
                style={styles.container}
                dataSource={this.state.dataSource}
                renderRow={(rowData) => (
                    <View key={rowData} style={styles.row}>
                        <Text style={styles.rowText}>
                            {rowData}
                        </Text>
                    </View>
                )}
                renderScrollComponent={props => (
                    <ParallaxScrollView
                        onScroll={onScroll}

                        headerBackgroundColor="#333"
                        stickyHeaderHeight={STICKY_HEADER_HEIGHT}
                        parallaxHeaderHeight={PARALLAX_HEADER_HEIGHT}
                        backgroundSpeed={10}

                        renderBackground={() => (
                            <Animated.View style={Css._header} ref={(e: Object) => this._t = e}>
                                <View
                                    style={{position: 'relative', bottom: 0}}
                                >
                                    <View style={Css._headerMask}/>
                                    <View
                                        style={Css._headerGoBack}
                                    >
                                        <Button styleName="clear" onPress={() => alert('GoBack')}>
                                            <IonIcon size={26} name="ios-arrow-back" color="#ffffff"/>
                                        </Button>
                                    </View>
                                    <View
                                        style={Css._headerAvatar}
                                    >
                                        <Image
                                            style={Css._headerAvatarImage}
                                            source={{
                                                uri  : 'https://cdn.pixabay.com/photo/2018/02/26/16/44/bird-3183441__480.jpg',
                                                cache: 'force-cache',
                                            }}
                                        />
                                    </View>
                                    <MapView
                                        style={Css._headerMap}
                                        initialRegion={{
                                            latitude      : 30.537686,
                                            longitude     : 104.068578,
                                            latitudeDelta : 0.0005,
                                            longitudeDelta: 0.0002,
                                        }}
                                        showsScale={true}
                                    >
                                        <Marker
                                            coordinate={{
                                                latitude : 30.5376799,
                                                longitude: 104.06864,
                                            }}
                                        >
                                            <Wave style={{backgroundColor: 'tomato'}}/>
                                        </Marker>

                                        <Marker
                                            coordinate={{
                                                latitude : 30.5376799,
                                                longitude: 104.06873,
                                            }}
                                        >
                                            <Wave style={{backgroundColor: 'yellow'}}/>
                                        </Marker>
                                    </MapView>
                                    <View
                                        style={Css._headerButton}
                                    >
                                        <Button styleName="clear" onPress={() => alert('GoBack')}>
                                            <Text style={{
                                                color    : '#ffffff',
                                                textAlign: 'center',
                                            }}>{'关注'}</Text>
                                        </Button>
                                    </View>
                                </View>
                            </Animated.View>
                        )}

                        renderForeground={() => (
                            <View key="parallax-header" style={styles.parallaxHeader}>
                                <Image style={styles.avatar} source={{
                                    uri   : 'https://pbs.twimg.com/profile_images/2694242404/5b0619220a92d391534b0cd89bf5adc1_400x400.jpeg',
                                    width : AVATAR_SIZE,
                                    height: AVATAR_SIZE
                                }}/>
                                <Text style={styles.sectionSpeakerText}>
                                    Talks by Rich Hickey
                                </Text>
                                <Text style={styles.sectionTitleText}>
                                    CTO of Cognitec, Creator of Clojure
                                </Text>
                            </View>
                        )}

                        renderStickyHeader={() => (
                            <View key="sticky-header" style={styles.stickySection}>
                                <Text style={styles.stickySectionText}>Rich Hickey Talks</Text>
                            </View>
                        )}

                        renderFixedHeader={() => (
                            <View key="fixed-header" style={styles.fixedSection}>
                                <Text style={styles.fixedSectionText}
                                      onPress={() => this.refs.ListView.scrollTo({x: 0, y: 0})}>
                                    Scroll to top
                                </Text>
                            </View>
                        )}/>
                )}
            />
        );
    }
}

const window = Dimensions.get('window');

const AVATAR_SIZE = 120;
const ROW_HEIGHT = 60;
const PARALLAX_HEADER_HEIGHT = 350;
const STICKY_HEADER_HEIGHT = 70;

const styles = StyleSheet.create({
    container         : {
        flex           : 1,
        backgroundColor: 'black'
    },
    background        : {
        position: 'absolute',
        top     : 0,
        left    : 0,
        width   : window.width,
        height  : PARALLAX_HEADER_HEIGHT
    },
    stickySection     : {
        height        : STICKY_HEADER_HEIGHT,
        width         : 300,
        justifyContent: 'flex-end'
    },
    stickySectionText : {
        color   : 'white',
        fontSize: 20,
        margin  : 10
    },
    fixedSection      : {
        position: 'absolute',
        bottom  : 10,
        right   : 10
    },
    fixedSectionText  : {
        color   : '#999',
        fontSize: 20
    },
    parallaxHeader    : {
        alignItems   : 'center',
        flex         : 1,
        flexDirection: 'column',
        paddingTop   : 100
    },
    avatar            : {
        marginBottom: 10,
        borderRadius: AVATAR_SIZE / 2
    },
    sectionSpeakerText: {
        color          : 'white',
        fontSize       : 24,
        paddingVertical: 5
    },
    sectionTitleText  : {
        color          : 'white',
        fontSize       : 18,
        paddingVertical: 5
    },
    row               : {
        overflow         : 'hidden',
        paddingHorizontal: 10,
        height           : ROW_HEIGHT,
        backgroundColor  : 'white',
        borderColor      : '#ccc',
        borderBottomWidth: 1,
        justifyContent   : 'center'
    },
    rowText           : {
        fontSize: 20
    }
});

export default Inject({namespace: 'main/home/detail', component: Detail, model: Model});
// import React, {Component} from 'react';
// import {
//     Screen,
//     Text,
//     ScrollView,
//     View,
//     Tile,
//     Subtitle,
//     Button,
//     Image,
//     Caption,
// } from '@shoutem/ui';
// import {Animated, UIManager, findNodeHandle, PanResponder} from 'react-native';
// import MapView, {Marker} from 'react-native-maps';
// import IonIcon from 'react-native-vector-icons/Ionicons';
// import {UltimateRefreshView} from 'react-native-ultimate-listview';
//
// import ParallaxScrollView from 'react-native-parallax-scroll-view';
//
// import Wave from 'component/Wave';
//
// import Inject from 'module';
// import Css from './css';
// import Model from 'model/main/home';
//
// class Detail extends Component {
//
//     constructor(props) {
//         super(props);
//         // this.state = {animated: new Animated.Value(0), scrollEnabled: false};
//         // this._height = 0;
//     }
//
//     render() {
//         return (
//             <Screen>
//                 <ParallaxScrollView
//                     backgroundColor="blue"
//                     contentBackgroundColor="pink"
//                     parallaxHeaderHeight={100}
//                     // renderFixedHeader={() => (
//                     //     <Animated.View>
//                     //         <Text>FUCK</Text>
//                     //     </Animated.View>
//                     // )}
//                     renderBackground={() => <Image source={{ uri: `https://placekitten.com/414/350`, width: window.width, height: 350 }}/>}
//                     renderFixedHeader={() => <Text style={{ textAlign: 'right', color: 'white', padding: 5, fontSize: 20 }}>Hello</Text>}
//                     // stickyHeaderHeight={100}
//                     // renderStickyHeader={() => (
//                     //     <Animated.View>
//                     //         <Text>FUCK</Text>
//                     //     </Animated.View>
//                     // )}
//                     // renderScrollComponent={() => <UltimateRefreshView
//                     //
//                     //     ref={(e: Object) => this._c = e}
//                     //
//                     //     style={Css._contentWrapper}
//                     //
//                     //     onRefresh={() => {
//                     //         return true;
//                     //     }}
//                     //     refreshableMode={'advanced'}
//                     //     showsVerticalScrollIndicator={false}
//                     //     // onScroll={async event => {
//                     //     //     const {y} = event.nativeEvent.contentOffset;
//                     //     //     if (this._height == 0) {
//                     //     //         await UIManager.measure(findNodeHandle(this._t), (t1, t2, width, height) => {
//                     //     //             this._height = height;
//                     //     //         });
//                     //     //     }
//                     //     //     if (y >= 0 && y <= this._height) {
//                     //     //         this._t.setNativeProps({style: {height: this._height - y}});
//                     //     //     }
//                     //     // }}
//                     //
//                     //     onMomentumScrollStart={event => console.log('monent')}
//                     //     onScrollBeginDrag={event => console.log('drag begin')}
//                     //     onScrollEndDrag={event => console.log('drag end')}
//                     // >
//                     //     <View>
//                     //         <Caption>10分钟前 发自iphone 7plus</Caption>
//                     //     </View>
//                     //     <View
//                     //         style={{height: 1200, backgroundColor: 'gray'}}
//                     //     >
//                     //         <Tile styleName="clear">
//                     //             <Subtitle
//                     //                 styleName="sm-gutter-horizontal"
//                     //                 style={Css._content}
//                     //             >
//                     //                 {
//                     //                     '尊敬的各位元首，政府首脑，国际组织负责人，部长，尊敬的各位博鳌亚洲论坛现任和候任理事，\n'
//                     //                 }
//                     //             </Subtitle>
//                     //         </Tile>
//                     //     </View>
//                     // </UltimateRefreshView>}
//                     // renderForeground={() => (
//                     //     <Animated.View style={Css._header} ref={(e: Object) => this._t = e}>
//                     //         <View
//                     //             style={{position: 'relative', bottom: 0}}
//                     //         >
//                     //             <View style={Css._headerMask}/>
//                     //             <View
//                     //                 style={Css._headerGoBack}
//                     //             >
//                     //                 <Button styleName="clear" onPress={() => alert('GoBack')}>
//                     //                     <IonIcon size={26} name="ios-arrow-back" color="#ffffff"/>
//                     //                 </Button>
//                     //             </View>
//                     //             <View
//                     //                 style={Css._headerAvatar}
//                     //             >
//                     //                 <Image
//                     //                     style={Css._headerAvatarImage}
//                     //                     source={{
//                     //                         uri  : 'https://cdn.pixabay.com/photo/2018/02/26/16/44/bird-3183441__480.jpg',
//                     //                         cache: 'force-cache',
//                     //                     }}
//                     //                 />
//                     //             </View>
//                     //             <MapView
//                     //                 style={Css._headerMap}
//                     //                 initialRegion={{
//                     //                     latitude      : 30.537686,
//                     //                     longitude     : 104.068578,
//                     //                     latitudeDelta : 0.0005,
//                     //                     longitudeDelta: 0.0002,
//                     //                 }}
//                     //                 showsScale={true}
//                     //             >
//                     //                 <Marker
//                     //                     coordinate={{
//                     //                         latitude : 30.5376799,
//                     //                         longitude: 104.06893,
//                     //                     }}
//                     //                 >
//                     //                     <Wave style={{backgroundColor: 'tomato'}}/>
//                     //                 </Marker>
//                     //
//                     //                 <Marker
//                     //                     coordinate={{
//                     //                         latitude : 30.5376799,
//                     //                         longitude: 104.068578,
//                     //                     }}
//                     //                 >
//                     //                     <Wave style={{backgroundColor: 'yellow'}}/>
//                     //                 </Marker>
//                     //             </MapView>
//                     //             <View
//                     //                 style={Css._headerButton}
//                     //             >
//                     //                 <Button styleName="clear" onPress={() => alert('GoBack')}>
//                     //                     <Text style={{
//                     //                         color    : '#ffffff',
//                     //                         textAlign: 'center',
//                     //                     }}>{'关注'}</Text>
//                     //                 </Button>
//                     //             </View>
//                     //         </View>
//                     //     </Animated.View>
//                     // )}
//                 >
//                     <View style={{height: 500}}>
//                         <Text>Scroll me</Text>
//                     </View>
//                 </ParallaxScrollView>
//
//
//                 {/*<View >*/}
//                 {/*<Animated.View style={Css._header} ref={(e: Object) => this._t = e}>*/}
//                 {/*<View*/}
//                 {/*style={{position: 'relative', bottom: 0}}*/}
//                 {/*>*/}
//                 {/*<View style={Css._headerMask}/>*/}
//                 {/*<View*/}
//                 {/*style={Css._headerGoBack}*/}
//                 {/*>*/}
//                 {/*<Button styleName="clear" onPress={() => alert('GoBack')}>*/}
//                 {/*<IonIcon size={26} name="ios-arrow-back" color="#ffffff"/>*/}
//                 {/*</Button>*/}
//                 {/*</View>*/}
//                 {/*<View*/}
//                 {/*style={Css._headerAvatar}*/}
//                 {/*>*/}
//                 {/*<Image*/}
//                 {/*style={Css._headerAvatarImage}*/}
//                 {/*source={{*/}
//                 {/*uri  : 'https://cdn.pixabay.com/photo/2018/02/26/16/44/bird-3183441__480.jpg',*/}
//                 {/*cache: 'force-cache',*/}
//                 {/*}}*/}
//                 {/*/>*/}
//                 {/*</View>*/}
//                 {/*<MapView*/}
//                 {/*style={Css._headerMap}*/}
//                 {/*initialRegion={{*/}
//                 {/*latitude      : 30.537686,*/}
//                 {/*longitude     : 104.068578,*/}
//                 {/*latitudeDelta : 0.0005,*/}
//                 {/*longitudeDelta: 0.0002,*/}
//                 {/*}}*/}
//                 {/*showsScale={true}*/}
//                 {/*>*/}
//                 {/*<Marker*/}
//                 {/*coordinate={{*/}
//                 {/*latitude : 30.5376799,*/}
//                 {/*longitude: 104.06893,*/}
//                 {/*}}*/}
//                 {/*>*/}
//                 {/*<Wave style={{backgroundColor: 'tomato'}}/>*/}
//                 {/*</Marker>*/}
//
//                 {/*<Marker*/}
//                 {/*coordinate={{*/}
//                 {/*latitude : 30.5376799,*/}
//                 {/*longitude: 104.068578,*/}
//                 {/*}}*/}
//                 {/*>*/}
//                 {/*<Wave style={{backgroundColor: 'yellow'}}/>*/}
//                 {/*</Marker>*/}
//                 {/*</MapView>*/}
//                 {/*<View*/}
//                 {/*style={Css._headerButton}*/}
//                 {/*>*/}
//                 {/*<Button styleName="clear" onPress={() => alert('GoBack')}>*/}
//                 {/*<Text style={{*/}
//                 {/*color    : '#ffffff',*/}
//                 {/*textAlign: 'center',*/}
//                 {/*}}>{'关注'}</Text>*/}
//                 {/*</Button>*/}
//                 {/*</View>*/}
//                 {/*</View>*/}
//                 {/*</Animated.View>*/}
//                 {/*<Animated.View>*/}
//                 {/*<UltimateRefreshView*/}
//
//                 {/*ref={(e: Object) => this._c = e}*/}
//
//                 {/*style={Css._contentWrapper}*/}
//
//                 {/*onRefresh={() => {*/}
//                 {/*return true;*/}
//                 {/*}}*/}
//                 {/*refreshableMode={'advanced'}*/}
//                 {/*showsVerticalScrollIndicator={false}*/}
//                 {/*onScroll={async event => {*/}
//                 {/*const {y} = event.nativeEvent.contentOffset;*/}
//                 {/*if (this._height == 0) {*/}
//                 {/*await UIManager.measure(findNodeHandle(this._t), (t1, t2, width, height) => {*/}
//                 {/*this._height = height;*/}
//                 {/*});*/}
//                 {/*}*/}
//                 {/*if (y >= 0 && y <= this._height) {*/}
//                 {/*this._t.setNativeProps({style: {height: this._height - y}});*/}
//                 {/*}*/}
//                 {/*}}*/}
//
//                 {/*onMomentumScrollStart={event => console.log('monent')}*/}
//                 {/*onScrollBeginDrag={event => console.log('drag begin')}*/}
//                 {/*onScrollEndDrag={event => console.log('drag end')}*/}
//                 {/*>*/}
//                 {/*<View>*/}
//                 {/*<Caption>10分钟前 发自iphone 7plus</Caption>*/}
//                 {/*</View>*/}
//                 {/*<View*/}
//                 {/*style={{height: 1200, backgroundColor: 'gray'}}*/}
//                 {/*>*/}
//                 {/*<Tile styleName="clear">*/}
//                 {/*<Subtitle*/}
//                 {/*styleName="sm-gutter-horizontal"*/}
//                 {/*style={Css._content}*/}
//                 {/*>*/}
//                 {/*{*/}
//                 {/*'尊敬的各位元首，政府首脑，国际组织负责人，部长，尊敬的各位博鳌亚洲论坛现任和候任理事，\n'*/}
//                 {/*}*/}
//                 {/*</Subtitle>*/}
//                 {/*</Tile>*/}
//                 {/*</View>*/}
//                 {/*</UltimateRefreshView>*/}
//                 {/*</Animated.View>*/}
//                 {/*</View>*/}
//             </Screen>
//         );
//     }
// }
//
// export default Inject({namespace: 'main/home/detail', component: Detail, model: Model});