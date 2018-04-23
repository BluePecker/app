import React, {Component} from 'react';
import {
    Screen,
    Text,
    ScrollView,
    View,
    Tile,
    Subtitle,
    Button,
    Image,
    Caption,
} from '@shoutem/ui';
import {Animated, UIManager, findNodeHandle} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {UltimateRefreshView} from 'react-native-ultimate-listview';

import Wave from 'component/Wave';

import Inject from 'module';
import Css from './css';
import Model from 'model/main/home';

class Detail extends Component {

    constructor(props) {
        super(props);
        this.state = {animated: new Animated.Value(0), height: 0};
    }

    render() {
        return (
            <Screen>
                <View
                    style={{position: 'relative', zIndex: 1}}
                >
                    <Animated.View
                        style={Css._header}
                        ref={e => this._t = e}
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
                                    longitude: 104.06893,
                                }}
                            >
                                <Wave style={{backgroundColor: 'tomato'}}/>
                            </Marker>

                            <Marker
                                coordinate={{
                                    latitude : 30.5376799,
                                    longitude: 104.068578,
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
                    </Animated.View>
                    <Animated.View
                        style={{position: 'relative', zIndex: 100}}
                    >
                        <UltimateRefreshView

                            ref={(e: Object) => this._c = e}

                            style={Css._contentWrapper}

                            onRefresh={() => {
                                return true;
                            }}
                            refreshableMode={'advanced'}

                            onScrollBeginDrag={event => console.log('drag begin')}
                            onScrollEndDrag={event => console.log('drag end')}
                            showsVerticalScrollIndicator={false}
                            onScroll={async event => {
                                const {y} = event.nativeEvent.contentOffset;
                                if (this.state.height === 0) {
                                    await UIManager.measure(findNodeHandle(this._t), (t1, t2, width, height) => {
                                        // if (y >= 0 && y <= height) {
                                        //     this._t.setNativeProps({
                                        //         style: {
                                        //             top: -y,
                                        //         }
                                        //     });
                                        // console.log(y);
                                        // this._c.setNativeProps({
                                        //     style: {
                                        //         top: - y,
                                        //     }
                                        // });
                                        // }
                                        this.setState({height: height});
                                    });
                                }
                                if (y >= 0 && y <= this.state.height) {
                                    this._t.setNativeProps({
                                        style: {
                                            top: -y,
                                        }
                                    });
                                    // this._c.scrollTo({ x: 0, y: 0, animated: true });
                                    console.log(this._c.scrollTo);
                                }
                            }}
                            onMomentumScrollStart={event => console.log('monent')}
                        >
                            <View>
                                <Caption>10分钟前 发自iphone 7plus</Caption>
                            </View>
                            <View
                                style={{height: 1200, backgroundColor: 'gray'}}
                            >
                                <Tile styleName="clear">
                                    <Subtitle
                                        styleName="sm-gutter-horizontal"
                                        style={Css._content}
                                    >
                                        {
                                            '尊敬的各位元首，政府首脑，国际组织负责人，部长，尊敬的各位博鳌亚洲论坛现任和候任理事，\n'
                                        }
                                    </Subtitle>
                                </Tile>
                            </View>
                        </UltimateRefreshView>
                    </Animated.View>
                </View>
            </Screen>
        );
    }
}

export default Inject({namespace: 'main/home/detail', component: Detail, model: Model});