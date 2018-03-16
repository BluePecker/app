import React, {Component} from 'react';
import {
    View,
    Tile,
    Subtitle,
    ImageBackground,
    Title,
    NavigationBar,
    Divider,
    Button,
    Text,
    Spinner,
    Row,
    ListView,
    Card,
    Image,
    Caption,
    InlineGallery,
} from '@shoutem/ui';
import Swiper from 'react-native-swiper';
import Video from 'react-native-video';
import Screen from 'component/Screen';

import {JiuGongGe, Gallery} from 'component/ImageGallery';

import {Modal, TouchableHighlight, StatusBar, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {UltimateListView} from "react-native-ultimate-listview";

import Inject from 'module';

import Css from './css';

import Model from 'model/main/home';

const styles = StyleSheet.create({
    wrapper: {},
    slide1 : {
        flex           : 1,
        justifyContent : 'center',
        alignItems     : 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2 : {
        flex           : 1,
        justifyContent : 'center',
        alignItems     : 'center',
        backgroundColor: '#97CAE5',
    },
    slide3 : {
        flex           : 1,
        justifyContent : 'center',
        alignItems     : 'center',
        backgroundColor: '#92BBD9',
    },
    text   : {
        color     : '#fff',
        fontSize  : 30,
        fontWeight: 'bold',
    }
})

class Home extends Component {
    sleep = (time) => new Promise(resolve => setTimeout(() => resolve(), time));

    onFetch = async (page = 1, startFetch, abortFetch) => {
        try {
            //This is required to determinate whether the first loading list is all loaded.
            let pageLimit = 24;
            // if (this.state.layout === 'grid') pageLimit = 60;
            let skip = (page - 1) * pageLimit;

            //Generate dummy data
            let rowData = Array.from({length: pageLimit}, (value, index) => `item -> ${index + skip}`);

            //Simulate the end of the list if there is no more data returned from the server
            if (page === 10) {
                rowData = [];
            }

            //Simulate the network loading in ES7 syntax (async/await)
            await this.sleep(1000);
            startFetch([
                {
                    "name"   : "Mastergrill",
                    "address": "550 Upton Rue, San Francisco, CA 94109",
                    "image"  : {"url": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520942296907&di=794e91d57d9fa4880da5dca8146f129d&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F0dd7912397dda144a5db01a2beb7d0a20df486cb.jpg"},
                },
                {
                    "name"   : "Mastergrill",
                    "address": "550 Upton Rue, San Francisco, CA 94109",
                    "image"  : {"url": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520942296907&di=794e91d57d9fa4880da5dca8146f129d&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F0dd7912397dda144a5db01a2beb7d0a20df486cb.jpg"},
                },
                {
                    "name"   : "Mastergrill",
                    "address": "550 Upton Rue, San Francisco, CA 94109",
                    "image"  : {"url": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520942296907&di=794e91d57d9fa4880da5dca8146f129d&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F0dd7912397dda144a5db01a2beb7d0a20df486cb.jpg"},
                },
                {
                    "name"   : "Mastergrill",
                    "address": "550 Upton Rue, San Francisco, CA 94109",
                    "image"  : {"url": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520942296907&di=794e91d57d9fa4880da5dca8146f129d&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F0dd7912397dda144a5db01a2beb7d0a20df486cb.jpg"},
                },
                {
                    "name"   : "Mastergrill",
                    "address": "550 Upton Rue, San Francisco, CA 94109",
                    "image"  : {"url": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520942296907&di=794e91d57d9fa4880da5dca8146f129d&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F0dd7912397dda144a5db01a2beb7d0a20df486cb.jpg"},
                },
                {
                    "name"   : "Mastergrill",
                    "address": "550 Upton Rue, San Francisco, CA 94109",
                    "image"  : {"url": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520942296907&di=794e91d57d9fa4880da5dca8146f129d&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F0dd7912397dda144a5db01a2beb7d0a20df486cb.jpg"},
                },
                {
                    "name"   : "Mastergrill",
                    "address": "550 Upton Rue, San Francisco, CA 94109",
                    "image"  : {"url": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520942296907&di=794e91d57d9fa4880da5dca8146f129d&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F0dd7912397dda144a5db01a2beb7d0a20df486cb.jpg"},
                },
            ], pageLimit);
        } catch (err) {
            abortFetch(); //manually stop the refresh or pagination if it encounters network error
            console.log(err);
        }
    };

    renderItem = (restaurant, index, separator) => {
        const images = [
            {uri: 'https://cdn.pixabay.com/photo/2018/02/16/20/38/human-3158541__480.jpg'},
            {uri: 'https://cdn.pixabay.com/photo/2018/03/10/20/26/flowers-3215188__480.jpg'},
            {uri: 'https://cdn.pixabay.com/photo/2018/02/26/16/44/bird-3183441__480.jpg'},
        ];
        return (
            <Card style={Css._card}>
                <View styleName="horizontal space-between">
                    <View styleName="horizontal h-start">
                        <Image styleName="small-avatar" source={{uri: restaurant.image.url}}/>
                        <Subtitle style={{paddingLeft: 8, paddingBottom: 2}}>卖萌的小怪</Subtitle>
                    </View>
                    <Button styleName="clear">
                        <Icon name="ios-aperture-outline" size={25} color='#FA729B'/>
                    </Button>
                </View>
                <View>
                    <Tile>
                        <Title styleName="md-gutter-bottom">{restaurant.name}</Title>
                        <Subtitle styleName="sm-gutter-horizontal" numberOfLines={4}>{restaurant.address}</Subtitle>
                    </Tile>
                </View>

                <JiuGongGe
                    source={images}
                    css={{wrapper: Css._jiugongge, small: Css._jiugonggeItem}}
                    onPress={(source, index) => {
                        this.setModalVisible(true);
                        this.setState({images: images});
                    }}
                />
                {/*<Video*/}
                {/*ref={(ref: Video) => {*/}
                {/*this.video = ref*/}
                {/*}}*/}
                {/*source={require('resource/test.mp4')}*/}
                {/*rate={1}                          // 控制暂停/播放，0 代表暂停paused, 1代表播放normal.*/}
                {/*paused={false}*/}
                {/*volume={1}                   // 声音的放大倍数，0 代表没有声音，就是静音muted, 1 代表正常音量 normal，更大的数字表示放大的倍数*/}
                {/*muted={true}                  // true代表静音，默认为false.*/}
                {/*resizeMode='cover'       // 视频的自适应伸缩铺放行为，*/}
                {/*onLoad={this.onLoad}                       // 当视频加载完毕时的回调函数*/}
                {/*onLoadStart={this.loadStart}            // 当视频开始加载时的回调函数*/}
                {/*onProgress={this.onProgress}   //  进度控制，每250ms调用一次，以获取视频播放的进度*/}
                {/*onEnd={this.onEnd}             // 当视频播放完毕后的回调函数*/}
                {/*onError={this.videoError}    // 当视频不能加载，或出错后的回调函数*/}
                {/*onAudioBecomingNoisy={this.onAudioBecomingNoisy}*/}
                {/*onAudioFocusChanged={this.onAudioFocusChanged}*/}
                {/*repeat={false}                            // 是否重复播放*/}
                {/*style={{height: 200, width: 200}}*/}
                {/*/>*/}
                <Divider styleName="line"/>
                <View styleName="horizontal space-between">
                    <Caption>1 hour ago</Caption>
                    <Caption>15:34</Caption>
                </View>
            </Card>
        );
        return (
            <View>
                <ImageBackground
                    styleName="large-banner"
                    source={{uri: restaurant.image.url}}
                >
                    <Tile>
                        <Title styleName="md-gutter-bottom">{restaurant.name}</Title>
                        <Subtitle styleName="sm-gutter-horizontal">{restaurant.address}</Subtitle>
                    </Tile>
                </ImageBackground>
                <Divider styleName="line"/>
            </View>
        );
    };

    constructor(props) {
        super(props);
        this.state = {modalVisible: false, images: []};
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    componentDidMount() {
        this._navListener = this.props.navigation.addListener('didFocus', () => {
            console.log('mount');

            StatusBar.setBarStyle('light-content');
            // isAndroid && StatusBar.setBackgroundColor('#6a51ae');
        });
    }

    componentWillUnmount() {
        this._navListener.remove();
    }

    click(e) {
        console.log(this, e)
    }

    render() {
        const {test, state: {name}} = this.props;
        return (
            <Screen>
                <NavigationBar
                    leftComponent={(
                        <Button styleName="clear">
                            <Icon size={26} name="md-menu" color="#ffffff"/>
                        </Button>
                    )}
                    centerComponent={<Title style={{
                        fontSize  : 24,
                        height    : 24,
                        minWidth  : 200,
                        textAlign : 'center',
                        lineHeight: 28,
                    }}>DIG-微忆</Title>}
                    rightComponent={(
                        <Button styleName="clear">
                            <Icon size={26} name="md-add" color="#ffffff"/>
                        </Button>
                    )}
                    styleName='clear inline no-border'
                    style={{container: {paddingTop: 26, height: 68, backgroundColor: '#FA729B'}}}
                />

                {/*<Modal*/}
                {/*visible={this.state.modalVisible}*/}
                {/*>*/}
                {/*<Text>1/3</Text>*/}
                {/*<Swiper*/}
                {/*style={styles.wrapper}*/}
                {/*height={200} horizontal={false}*/}
                {/*showsPagination={true}*/}
                {/*dot={<View/>} activeDot={<View/>}*/}
                {/*onIndexChanged={index => alert(index)}*/}
                {/*>*/}


                {/*<View style={styles.slide1}>*/}
                {/*<Text style={styles.text}>Hello Swiper</Text>*/}
                {/*</View>*/}
                {/*<View style={styles.slide2}>*/}
                {/*<Text style={styles.text}>Beautiful</Text>*/}
                {/*</View>*/}
                {/*<View style={styles.slide3}>*/}
                {/*<Text style={styles.text}>And simple</Text>*/}
                {/*</View>*/}
                {/*</Swiper>*/}
                {/*</Modal>*/}

                <Gallery visible={this.state.modalVisible} images={this.state.images}/>

                <UltimateListView
                    onFetch={this.onFetch}
                    item={this.renderItem}
                    refreshableMode="advanced"
                    keyExtractor={(item, index) => `${index}`}
                    displayDate
                    // customRefreshView={(a, b, c) => {
                    //     console.log(a, b, c);
                    // }}
                />
            </Screen>
        );
    }
}

export default Inject({namespace: 'main/home', component: Home, model: Model});