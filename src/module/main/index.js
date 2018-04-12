import React, {Component} from 'react';
import {
    StackNavigator,
    TabNavigator,
    TabBarBottom,
} from 'react-navigation';
import {View} from '@shoutem/ui';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from 'module/main/home';
import Detail from 'module/main/home/detail';
import Mark from 'module/main/mark';
import Notice from 'module/main/notice';
import Mine from 'module/main/mine';

export default StackNavigator({
    'main'            : {
        screen           : TabNavigator({
            'main/home'   : {
                screen           : Home,
                navigationOptions: {
                    tabBarLabel: '首页',
                    tabBarIcon : ({tintColor}) => <Icon name="ios-disc" size={24} color={tintColor}/>,
                }
            },
            'main/dig'    : {
                screen           : Mark,
                navigationOptions: {
                    tabBarLabel: '发现',
                    tabBarIcon : ({tintColor}) => <Icon name="md-wifi" size={24} color={tintColor}/>,
                }
            },
            'main/message': {
                screen           : Notice,
                navigationOptions: {
                    tabBarLabel: '消息',
                    tabBarIcon : ({tintColor}) => <Icon name="md-notifications" size={24} color={tintColor}/>,
                }
            },
            'main/mine'   : {
                screen           : Mine,
                navigationOptions: {
                    tabBarLabel: '我的',
                    tabBarIcon : ({tintColor}) => <Icon name="ios-contact" size={24} color={tintColor}/>,
                }
            },
        }, {
            tabBarComponent : TabBarBottom,
            tabBarPosition  : 'bottom',
            animationEnabled: false,
            swipeEnabled    : false,
            tabBarOptions   : {
                inactiveTintColor: '#BDC3C7',
                labelStyle       : {
                    fontSize: 14,
                },
                activeTintColor  : '#FA729B',
            },
        }),
        navigationOptions: ({navigation}) => ({header: <View/>,}),
    },
    // 需要全屏展示的界面
    'main/home/detail': {
        screen           : Detail,
        navigationOptions: ({navigation}) => ({header: <View/>,}),
    },
}, {
    initialRouteName: 'main',
});


