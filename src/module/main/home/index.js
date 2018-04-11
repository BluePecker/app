import React from 'react';
import {Button, Text} from '@shoutem/ui';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {Animated, View,} from 'react-native';
import {StackNavigator} from 'react-navigation';
import MapView from 'react-native-maps';

import Album from 'module/main/home/album';
import Detail from 'module/main/home/detail';
import Snap from 'module/main/home/snap';

export default StackNavigator({
    Snap  : {
        screen           : Snap,
        navigationOptions: ({navigation}) => ({
            headerTitle: (
                <Button styleName="clear">
                    <Text style={{
                        fontSize  : 24,
                        height    : 35,
                        lineHeight: 45,
                        color     : '#ffffff'
                    }}>微忆</Text>
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
    Album : {
        screen: Album,
    },
    Detail: {
        screen           : Detail,
        navigationOptions: ({navigation}) => ({
            header: <MapView
                style={{width: 425, height: 150, borderBottomColor: 'transparent',}}

                initialRegion={{
                    latitude      : 30.537686,
                    longitude     : 104.068578,
                    latitudeDelta : 0.0005,
                    longitudeDelta: 0.0002,
                }}

                showsScale={true}
            />,
            // headerLeft: (
            //     <Button styleName="clear" onPress={() => alert('GoBack')}>
            //         <IonIcon size={26} name="ios-arrow-back" color="#ffffff"/>
            //     </Button>
            // ),
        }),
    },
}, {
    transitionConfig : () => ({
        transitionSpec: {duration: 250}
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
    initialRouteName : 'Snap',
});