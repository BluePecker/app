import React from 'react';
import {Button, Text} from '@shoutem/ui';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {Animated, View,} from 'react-native';
import {StackNavigator} from 'react-navigation';

import Snap from 'module/main/home/snap';
import Album from 'module/main/home/album';

export default StackNavigator({
    Snap : {
        screen: Snap
    },
    Album: {
        screen: Album,
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
                }}>微忆</Text>
            </Button>
        ),
        headerLeft       : (
            <Button styleName="clear">
                <IonIcon size={26} name="md-menu" color="#ffffff"/>
            </Button>
        ),
        headerRight      : (
            <Button styleName="clear">
                <IonIcon size={26} name="md-add" color="#ffffff"/>
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