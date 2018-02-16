import React, {Component} from 'react';
import {TabNavigator} from 'react-navigation';

import Home from 'module/main/home';
import Mark from 'module/main/mark';
import Mine from 'module/main/mine';

export default TabNavigator({
    "main/home": {
        screen           : Home,
        navigationOptions: {
            tabBarLabel: '首页',
        }
    },
    "main/mark": {
        screen           : Mark,
        navigationOptions: {
            tabBarLabel: '记忆',
        }
    },
    "main/mine": {
        screen: Mine, navigationOptions: {
            tabBarLabel: '我的',
        }
    },
}, {
    tabBarPosition  : 'bottom',
    swipeEnabled    : false,
    animationEnabled: false,
    tabBarOptions   : {
        labelStyle             : {
            fontSize  : 14,
            lineHeight: 49,
        },
        style                  : {
            height: 49
        },
        //     activeBackgroundColor  : 'white',
        //     activeTintColor        : '#4ECBFC',
        inactiveBackgroundColor: 'white',
        inactiveTintColor      : '#aaa',
        //     // showLabel              : false,
    }
});