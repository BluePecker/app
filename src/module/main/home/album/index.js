import React, {Component} from 'react';

import {
    Text,
    View,
} from '@shoutem/ui';

import {Modal, Animated,} from 'react-native';

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
        return (
            <View>
                <Modal>
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                        <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
                            <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
                        </FadeInView>
                    </View>
                </Modal>
            </View>
        );
    }
}

export default Inject({namespace: 'main/home/modal', component: Album, model: Model})