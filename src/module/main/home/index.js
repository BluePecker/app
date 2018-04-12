import React from 'react';
import {Button, Text} from '@shoutem/ui';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {View,} from 'react-native';
import {StackNavigator} from 'react-navigation';

import Detail from 'module/main/home/detail';
import Snap from 'module/main/home/snap';

export default StackNavigator({
    'main/home/snap'  : {
        screen           : Snap,
        navigationOptions: ({navigation}) => ({
            headerTitle: (
                <Button styleName="clear">
                    <Text style={{
                        fontSize  : 24,
                        height    : 35,
                        lineHeight: 45,
                        color     : '#ffffff'
                    }}>Vaiee</Text>
                </Button>
            ),
            headerLeft : (
                <Button styleName="clear">
                    <IonIcon size={26} name="md-menu" color="#ffffff"/>
                </Button>
            ),
            headerRight: (
                <Button styleName="clear">
                    <IonIcon size={26} name="md-add" color="#ffffff"/>
                </Button>
            ),
            headerStyle: {
                backgroundColor  : '#FA729B',
                borderBottomColor: 'transparent',
                height           : 35,
            },
        }),
    },
    'main/home/detail': {
        screen           : Detail,
        navigationOptions: ({navigation}) => ({header: <View/>,}),
    },
}, {
    transitionConfig : () => ({
        transitionSpec: {duration: 250},
    }),
    headerMode       : 'screen',
    navigationOptions: {
        //     headerTransparent: true,
        //     headerTitle      : (
        //         <Button styleName="clear">
        //             <Text style={{
        //                 fontSize  : 24,
        //                 height    : 35,
        //                 lineHeight: 45,
        //                 color     : '#ffffff'
        //             }}>微忆</Text>
        //         </Button>
        //     ),
        //     headerLeft       : (
        //         <Button styleName="clear">
        //             <IonIcon size={26} name="md-menu" color="#ffffff"/>
        //         </Button>
        //     ),
        //     headerRight      : (
        //         <Button styleName="clear">
        //             <IonIcon size={26} name="md-add" color="#ffffff"/>
        //         </Button>
        //     ),
        //     headerStyle: {
        //         backgroundColor  : '#FA729B',
        //         borderBottomColor: 'transparent',
        //         height           : 35,
        //     },
    },
    initialRouteName : 'main/home/snap',
});