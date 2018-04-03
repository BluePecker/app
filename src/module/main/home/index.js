import React from 'react';
import {StackNavigator} from 'react-navigation';
import {
    Button,
    Text,
} from '@shoutem/ui';
import IonIcon from 'react-native-vector-icons/Ionicons';

import Feed from 'module/main/home/feed';
import Modal from 'module/main/home/modal';

export default StackNavigator({
    Feed : {screen: Feed},
    Modal: {screen: Modal},
}, {
    initialRouteName : 'Feed',
    onTransitionStart: () => {
        console.log('导航栏切换开始');
    },
    onTransitionEnd  : () => {
        console.log('导航栏切换结束');
    },
    navigationOptions: {
        headerLeft       : (
            <Button styleName="clear">
                <IonIcon size={26} name="md-menu" color="#ffffff"/>
            </Button>
        ),
        headerTitle      :
            <Button styleName="clear">
                <Text style={{
                    fontSize  : 24,
                    height    : 35,
                    lineHeight: 45,
                    color     : '#ffffff'
                }}>DIG-微忆</Text>
            </Button>,
        headerRight      : (
            <Button styleName="clear">
                <IonIcon size={26} name="md-add" color="#ffffff"/>
            </Button>
        ),
        headerTintColor  : '#000',
        headerStyle      : {
            backgroundColor  : '#FA729B',
            borderBottomColor: 'transparent',
            height           : 35,
        },
        headerTransparent: true,
    },
    // headerMode       : 'none',
    // headerMode       : 'screen',
    // mode             : 'modal',
});