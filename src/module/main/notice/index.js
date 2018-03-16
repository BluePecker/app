import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, StatusBar} from 'react-native';
import {
    Button,
    Title,
} from '@shoutem/ui';

import NavigationBar from 'react-native-navbar';

import Screen from 'component/Screen';
import Inject from 'module';
import Icon from 'react-native-vector-icons/Ionicons';

import Model from 'model/main/notice';

class Notice extends Component {

    constructor(props) {
        super(props);
        this.state = {modalVisible: false};
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    render() {
        return (

            <View>
                <NavigationBar
                    title={{
                        title: 'Hello, world',
                    }}
                    rightButton={{
                        title: 'Next',
                        handler: () => alert('hello!'),
                    }}
                    statusBar={{style: 'light-content'}}
                    tintColor={'#FA729B'}
                />
                <Modal
                    // animationType={"slide"}
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        alert("Modal has been closed.")
                    }}
                >

                    <View style={{marginTop: 22}}>
                        <View>
                            <Text>Hello World!</Text>

                            <TouchableHighlight onPress={() => {
                                this.setModalVisible(!this.state.modalVisible)
                            }}>
                                <Text>Hide Modal</Text>
                            </TouchableHighlight>

                        </View>
                    </View>
                </Modal>

                <TouchableHighlight onPress={() => {
                    this.setModalVisible(true)
                }}>
                    <Text>Show Modal</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => {
                    this.setModalVisible(true)
                }}>
                    <Text>Show Modal</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

export default Inject({namespace: 'main/notice', component: Notice, model: Model});