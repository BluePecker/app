import React, {Component} from 'react';

import {
    Text,
    View,
    Image,
} from '@shoutem/ui';

import {Modal, Animated, ScrollView,} from 'react-native';

import Inject from 'module';
import Css from './css';
import Model from 'model/main/home';

class FadeInView extends Component {
    state = {
        fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
    }

    componentDidMount() {
        Animated.timing(                  // Animate over time
            this.state.fadeAnim,            // The animated value to drive
            {
                toValue : 1,                   // Animate to opacity: 1 (opaque)
                duration: 1000,              // Make it take a while
            }
        ).start();                        // Starts the animation
    }

    render() {
        let {fadeAnim} = this.state;

        return (
            <Animated.View                 // Special animatable View
                style={{
                    ...this.props.style,
                    opacity: fadeAnim,         // Bind opacity to animated value
                }}
            >
                {this.props.children}
            </Animated.View>
        );
    }
}


class Album extends Component {
    render() {
        var h = require('Dimensions').get('window').height;
        var w = require('Dimensions').get('window').width;
        const {source, index, width, height, x, y} = this.props.navigation.state.params;

        console.log(source[index].height / source[index].width);
        return (
            <Modal style={{backgroundColor: '#000'}}>
                <FadeInView>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{height: 1000}}
                    >
                        <Animated.Image
                            style={{
                                width          : width,
                                height         : height,
                                top            : y,
                                left           : x,
                                position       : 'absolute',
                                backgroundColor: '#000',
                                transform      : [{
                                    matrix: [
                                        w / width, 0, 0, 0,
                                        0, w / width * (source[index].height / source[index].width), 0, 0,
                                        0, 0, 1, 0,
                                        w / 2 - (x + width / 2), h / 2 - (y + height / 2), 0, 1,
                                    ]
                                }],
                            }}
                            source={{uri: source[index].uri, cache: 'force-cache'}}
                        />
                    </ScrollView>
                </FadeInView>
                {/*<FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>*/}
                {/*<Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>*/}
                {/*</FadeInView>*/}
            </Modal>
        );
    }
}

export default Inject({namespace: 'main/home/modal', component: Album, model: Model})