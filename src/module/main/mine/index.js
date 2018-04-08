import React from 'react';
import {Button, Text} from '@shoutem/ui';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {Animated, View,} from 'react-native';
import {StackNavigator} from 'react-navigation';

import Snap from 'module/main/home/snap';

export default StackNavigator({
    Snap : {
        screen: Snap
    },
}, {
    transitionConfig : () => ({
        transitionSpec: {duration: 250}
    }),
    navigationOptions: {
        headerTransparent: true,
        headerTitle      : (
            <Button styleName="clear">
                <Text style={{
                    fontSize  : 24,
                    height    : 35,
                    lineHeight: 45,
                    color     : '#ffffff'
                }}>我的</Text>
            </Button>
        ),
        headerStyle      : {
            backgroundColor  : '#FA729B',
            borderBottomColor: 'transparent',
            height           : 35,
        },
    },
    initialRouteName : 'Snap',
});