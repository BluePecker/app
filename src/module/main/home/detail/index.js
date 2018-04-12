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
} from '@shoutem/ui';
import MapView from 'react-native-maps';
import IonIcon from 'react-native-vector-icons/Ionicons';

import Inject from 'module';
import Css from './css';
import Model from 'model/main/home';

class Detail extends Component {

    render() {
        return (
            <Screen>
                <ScrollView
                    bounces={false}
                    onScrollBeginDrag={event => console.log('drag begin')}
                    onScrollEndDrag={event => console.log('drag end')}
                    showsVerticalScrollIndicator={false}
                    onScroll={event => console.log('scroll')}
                    onMomentumScrollStart={event => console.log('monent')}
                >
                    <View>
                        <View
                            style={Css._header}
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
                            />
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
                        <View
                            style={Css._content}
                        >
                            <View></View>
                            <Tile styleName="clear">
                                <Subtitle
                                    styleName="sm-gutter-horizontal"
                                >
                                    {
                                        '尊敬的各位元首，政府首脑，国际组织负责人，部长，\n' +
                                        '\n' +
                                        '　　尊敬的各位博鳌亚洲论坛现任和候任理事，\n' +
                                        '\n' +
                                        '　　各位来宾，\n' +
                                        '\n' +
                                        '　　女士们，先生们，朋友们：\n' +
                                        '\n' +
                                        '　　仲春时节的海南，山青海碧，日暖风轻。在这个美好的季节里，各国嘉宾汇聚一堂，出席博鳌亚洲论坛2018年年会。海南有一首民歌唱道：“久久不见久久见，久久见过还想见。”今天，有机会在此同各位新老朋友见面，我感到十分高兴。\n' +
                                        '\n' +
                                        '　　首先，我谨代表中国政府和中国人民，并以我个人名义，对各位嘉宾的到来表示诚挚的欢迎！对年会的召开表示热烈的祝贺！\n' +
                                        '\n' +
                                        '　　博鳌亚洲论坛成立以来，立足亚洲，面向世界，在凝聚亚洲共识、促进各方合作、推进经济全球化、推动构建人类命运共同体等方面建言献策，提出许多富有价值的“博鳌方案”，作出了积极贡献。今年是论坛理事会换届之年。借此机会，我谨向即将离任的各位理事表示衷心的感谢！对新当选的各位理事表示热烈的祝贺！\n' +
                                        '\n' +
                                        '　　本届年会以“开放创新的亚洲，繁荣发展的世界”为主题，顺应时代潮流，符合各方期待。相信各位嘉宾和各界人士将畅所欲言，提出真知灼见。\n' +
                                        '\n' +
                                        '　　女士们、先生们、朋友们！\n' +
                                        '\n' +
                                        '　　历史，总是在一些特殊年份给人们以汲取智慧、继续前行的力量。2018年是中国改革开放40周年，也是海南建省办经济特区30周年。海南省可谓“因改革开放而生，因改革开放而兴”。改革开放以来，海南从一个较为封闭落后的边陲岛屿，发展成为中国最开放、最具活力的地区之一，经济社会发展取得巨大成就。'
                                    }
                                </Subtitle>
                            </Tile>
                        </View>
                    </View>
                </ScrollView>
            </Screen>
        );
    }
}

export default Inject({namespace: 'main/home/detail', component: Detail, model: Model});