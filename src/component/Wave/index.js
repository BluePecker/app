import React, {Component} from 'react';
import {Animated} from 'react-native';

export default class Wave extends Component {
    constructor(props) {
        super(props);
        this.state = {animated: new Animated.Value(0)}
        this.state.animated.addListener(({value}) => {
            value === 1 && Animated.timing(this.state.animated, {toValue: 0, duration: 0}).start(() => {
                Animated.timing(this.state.animated, {toValue: 1, duration: 1000}).start();
            });
        });
    }

    componentDidMount() {
        Animated.timing(this.state.animated, {toValue: 1, duration: 1000}).start();
    }

    render() {
        const {style, scale} = this.props;
        return (
            <Animated.View
                style={[
                    {
                        height: 4, width: 4, borderRadius: 2, backgroundColor: 'red',
                    }, style, {
                        opacity  : this.state.animated.interpolate({
                            inputRange : [0, 0.25, 0.50, 0.75, 1.0],
                            outputRange: [1, 0.95, 0.75, 0.30, 0.1],
                        }),
                        transform: [{
                            scale: this.state.animated.interpolate({
                                inputRange : [0, 1],
                                outputRange: [1, scale || 4],
                            }),
                        }],
                    },
                ]}
            />
        );
    }
}