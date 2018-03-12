import React, {Component} from 'react';
import {
    NavigationBar,
    View,
    Text,
    Title,
    ImageBackground
} from '@shoutem/ui';

import Screen from 'component/Screen';
import Inject from 'module';

import Css from './css';

import Model from 'model/main/mine';

class Mine extends Component {
    render() {
        const {test, state: {name}} = this.props;

        return (
            <Screen>
                <ImageBackground
                    source={{uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-3.png'}}
                    style={{width: 375, height: 70}}
                >
                    <NavigationBar
                        styleName='inline no-border clear'
                        centerComponent={
                            <Title style={{
                                fontSize: 24, height: 24, minWidth: 200, textAlign: 'center', lineHeight: 28
                            }}>我的</Title>
                        }
                        style={{
                            container: {paddingTop: 26, height: 140, backgroundColor: '#54C7FC'}
                            // container: {paddingTop: 26, height: 140, backgroundColor: '#FF96C4'}
                        }}
                    />
                </ImageBackground>
            </Screen>
        );
    }
}

export default Inject({namespace: 'main/mine', component: Mine, model: Model});