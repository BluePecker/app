import React, {Component} from 'react';
import {
    View,
    Tile,
    Subtitle,
    ImageBackground,
    Title,
    Divider,
    Button,
    Text,
    Spinner,
    Row,
    ListView,
    Card,
    Image,
    Caption,
    Screen,
    NavigationBar,
} from '@shoutem/ui';
// import Swiper from 'react-native-swiper';
// import Video from 'react-native-video';
import Album from './album';

import Gallery from 'component/Gallery';

import {TouchableHighlight, StatusBar, StyleSheet} from 'react-native';

import EvilIcon from 'react-native-vector-icons/EvilIcons';
import {UltimateListView} from 'react-native-ultimate-listview';

import Inject from 'module';
import Css from './css';
import Model from 'model/main/home';

class Snap extends Component {
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
            await this.sleep(100);
            startFetch([
                {
                    "name"   : "Mastergrill",
                    "address": "网易这次下血本了！！由梦幻西游核心团队匠心打造〜凝聚了回合制十年研发突破，游戏性和画面感无与伦比的网易次世代在作终于问世。首日登陆即获金武将赵云！连续登陆便可获得超强法师诸葛亮和三国第一战神吕布！戳链下载 >>>",
                    "image"  : {"url": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520942296907&di=794e91d57d9fa4880da5dca8146f129d&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F0dd7912397dda144a5db01a2beb7d0a20df486cb.jpg"},
                },
                // {
                //     "name"   : "Mastergrill",
                //     "address": "网易这次下血本了！！由梦幻西游核心团队匠心打造〜凝聚了回合制十年研发突破，游戏性和画面感无与伦比的网易次世代在作终于问世。首日登陆即获金武将赵云！连续登陆便可获得超强法师诸葛亮和三国第一战神吕布！戳链下载 >>>",
                //     "image"  : {"url": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520942296907&di=794e91d57d9fa4880da5dca8146f129d&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F0dd7912397dda144a5db01a2beb7d0a20df486cb.jpg"},
                // },
                // {
                //     "name"   : "Mastergrill",
                //     "address": "网易这次下血本了！！由梦幻西游核心团队匠心打造〜凝聚了回合制十年研发突破，游戏性和画面感无与伦比的网易次世代在作终于问世。首日登陆即获金武将赵云！连续登陆便可获得超强法师诸葛亮和三国第一战神吕布！戳链下载 >>>",
                //     "image"  : {"url": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520942296907&di=794e91d57d9fa4880da5dca8146f129d&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F0dd7912397dda144a5db01a2beb7d0a20df486cb.jpg"},
                // },
                // {
                //     "name"   : "Mastergrill",
                //     "address": "550 Upton Rue, San Francisco, CA 94109",
                //     "image"  : {"url": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520942296907&di=794e91d57d9fa4880da5dca8146f129d&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F0dd7912397dda144a5db01a2beb7d0a20df486cb.jpg"},
                // },
                // {
                //     "name"   : "Mastergrill",
                //     "address": "550 Upton Rue, San Francisco, CA 94109",
                //     "image"  : {"url": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520942296907&di=794e91d57d9fa4880da5dca8146f129d&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F0dd7912397dda144a5db01a2beb7d0a20df486cb.jpg"},
                // },
                // {
                //     "name"   : "Mastergrill",
                //     "address": "550 Upton Rue, San Francisco, CA 94109",
                //     "image"  : {"url": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520942296907&di=794e91d57d9fa4880da5dca8146f129d&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F0dd7912397dda144a5db01a2beb7d0a20df486cb.jpg"},
                // },
                // {
                //     "name"   : "Mastergrill",
                //     "address": "网易这次下血本了！！由梦幻西游核心团队匠心打造〜凝聚了回合制十年研发突破，游戏性和画面感无与伦比的网易次世代在作终于问世。首日登陆即获金武将赵云！连续登陆便可获得超强法师诸葛亮和三国第一战神吕布！戳链下载 >>>",
                //     "image"  : {"url": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520942296907&di=794e91d57d9fa4880da5dca8146f129d&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F0dd7912397dda144a5db01a2beb7d0a20df486cb.jpg"},
                // },
            ], pageLimit);
        } catch (err) {
            abortFetch(); //manually stop the refresh or pagination if it encounters network error
            console.log(err);
        }
    };

    renderItem = (restaurant, index, separator) => {
        const images = [
            {
                uri      : 'https://avatars3.githubusercontent.com/u/28583275?s=400&u=f466486a2ba5a8012c97c6d44d74f38eafdd7fdd&v=4',
                height   : 200,
                width    : 400,
                thumbnail: 'https://cdn.pixabay.com/photo/2018/02/16/20/38/human-3158541__480.jpg',
            },
            {
                uri      : 'https://cdn.pixabay.com/photo/2018/02/16/20/38/human-3158541__480.jpg',
                height   : 400,
                width    : 400,
                thumbnail: 'https://cdn.pixabay.com/photo/2018/02/16/20/38/human-3158541__480.jpg',
            },
            {
                uri      : 'https://cdn.pixabay.com/photo/2018/03/10/20/26/flowers-3215188__480.jpg',
                height   : 1600,
                width    : 400,
                thumbnail: 'https://cdn.pixabay.com/photo/2018/02/16/20/38/human-3158541__480.jpg',
            },
        ];
        return (
            <TouchableHighlight
                underlayColor={'#ffffff'}
                activeOpacity={1}
                onPress={() => this.props.navigation.navigate('main/home/detail')}
            >
                <Card style={Css._card}>
                    <View styleName="horizontal space-between" style={Css._cardHeader}>
                        <View styleName="horizontal h-start" style={Css._cardHeaderLeft}>
                            <View>
                                <View>
                                    <Image
                                        style={Css._cardHeaderLeftAvatar}
                                        source={{uri: restaurant.image.url}}
                                    />
                                </View>
                            </View>
                            <View style={Css._cardHeaderLeftInfo}>
                                <View>
                                    <Subtitle style={Css._cardHeaderLeftInfoName}>卖萌的小怪</Subtitle>
                                </View>
                                <View>
                                    <Caption>10分钟前 发自iphone 7plus</Caption>
                                </View>
                            </View>
                        </View>
                        <View style={Css._cardHeaderRight}>
                            <Button styleName="clear">
                                <EvilIcon name="sc-telegram" size={28}/>
                            </Button>
                        </View>
                    </View>
                    <View style={Css._cardContent}>
                        <Tile styleName="clear">
                            <Subtitle
                                numberOfLines={4}
                                style={Css._cardContentArticle}
                                styleName="sm-gutter-horizontal"
                            >{restaurant.address}</Subtitle>
                        </Tile>
                    </View>
                    <Gallery
                        source={images}
                        css={{
                            wrapper: Css._gallery,
                            small  : Css._galleryItem
                        }}
                        onPress={(source, index, x, y, w, h) => this.refs.album.onModalShow({
                            source, index, x, y, w, h,
                        })}
                    />
                    <Divider styleName="line"/>
                    <View styleName="horizontal flexible" style={Css._cardFooter}>
                        <Button styleName="full-width muted" style={Css._cardFooterButton}>
                            <EvilIcon name="eye" size={22}/>
                            <Text style={Css._cardFooterButtonText}>4312</Text>
                        </Button>
                        <Button styleName="full-width muted" style={Css._cardFooterButton}>
                            <EvilIcon name="envelope" size={22}/>
                            <Text style={Css._cardFooterButtonText}>4102</Text>
                        </Button>
                        <Button styleName="full-width muted" style={Css._cardFooterButton}>
                            <EvilIcon name="like" size={22}/>
                            <Text style={Css._cardFooterButtonText}>9423</Text>
                        </Button>
                    </View>
                </Card>
            </TouchableHighlight>
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
        this.state = {
            albumVisible: false,
            albumParams : {source: [], index: 0, x: 0, y: 0, w: 0, h: 0}
        };
    }

    componentDidMount() {
        const {navigation: {addListener}} = this.props;
        this._navListener = addListener('didFocus', () => {
            StatusBar.setBarStyle('light-content');
            // isAndroid && StatusBar.setBackgroundColor('#6a51ae');
        });
    }

    componentWillUnmount() {
        this._navListener.remove();
    }

    render() {
        return (
            <Screen>
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
                <Album ref='album'/>
            </Screen>
        );
    }
}


export default Inject({namespace: 'main/home/snap', component: Snap, model: Model});