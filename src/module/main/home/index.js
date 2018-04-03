import React from 'react';
import {StackNavigator} from 'react-navigation';
import {
    Button,
    Text,
} from '@shoutem/ui';
import {
    Easing,
    Animated,
    View,
} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';

import Feed from 'module/main/home/feed';
import Album from 'module/main/home/album';

export default StackNavigator({
    Feed : {
        screen: Feed
    },
    Album: {
        screen: Album,
        // navigationOptions: ({navigation}) => ({
        //     header: <View></View>
        // }),
    },
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
    transitionConfig : () => {
        return {
            transitionSpec    : {
                duration       : 750,
                easing         : Easing.out(Easing.poly(4)),
                timing         : Animated.timing,
                useNativeDriver: true,
            },
            screenInterpolator: sceneProps => {
                const {layout, position, scene} = sceneProps

                const thisSceneIndex = scene.index
                const width = layout.initWidth

                const translateX = position.interpolate({
                    inputRange : [thisSceneIndex - 1, thisSceneIndex],
                    outputRange: [width, 0],
                })

                return {transform: [{translateX}]}
            },
        }
    },
});