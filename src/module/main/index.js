import React, {Component} from 'react';
import {TabNavigator, TabBarBottom} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from 'module/main/home';
import Mark from 'module/main/mark';
import Mine from 'module/main/mine';

export default TabNavigator({
    "main/home": {
        screen           : Home,
        navigationOptions: {
            tabBarLabel: '首页',
            tabBarIcon : ({tintColor}) => <Icon name="ios-disc" size={18} color={tintColor}/>,
        }
    },
    "main/mark": {
        screen           : Mark,
        navigationOptions: {
            tabBarLabel: '快照',
            tabBarIcon : ({tintColor}) => <Icon name="md-expand" size={18} color={tintColor}/>,
        }
    },
    "main/find": {
        screen           : Mark,
        navigationOptions: {
            tabBarLabel: '发现',
            tabBarIcon : ({tintColor}) => <Icon name="md-wifi" size={18} color={tintColor}/>,
        }
    },
    "main/message": {
        screen           : Mark,
        navigationOptions: {
            tabBarLabel: '消息',
            tabBarIcon : ({tintColor}) => <Icon name="md-notifications" size={18} color={tintColor}/>,
        }
    },
    "main/mine": {
        screen           : Mine,
        navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon : ({tintColor}) => <Icon name="ios-contact" size={18} color={tintColor}/>,
        }
    },
}, {
    navigationOptions: ({navigation}) => ({
        tabBarIcon: ({focused, tintColor}) => {
            const {routeName} = navigation.state;
            let iconName;
            if (routeName === 'Home') {
                iconName = `ios-information-circle${focused ? '' : '-outline'}`;
            } else if (routeName === 'Settings') {
                iconName = `ios-options${focused ? '' : '-outline'}`;
            }

            // You can return any component that you like here! We usually use an
            // icon component from react-native-vector-icons
            return <Icon name={iconName} size={25} color={tintColor}/>;
        },
    }),
    tabBarComponent  : TabBarBottom,
    tabBarPosition   : 'bottom',
    animationEnabled : false,
    swipeEnabled     : false,
    tabBarOptions    : {
        activeTintColor  : 'tomato',
        inactiveTintColor: 'gray',
    },
});