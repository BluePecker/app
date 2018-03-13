import React, {Component} from 'react';
import {
    View,
    Tile,
    Subtitle,
    ImageBackground,
    Title,
    NavigationBar,
    Divider,
    Button,
    Text,
    Spinner,
    Row,
    ListView,
} from '@shoutem/ui';
import Screen from 'component/Screen';

import Icon from 'react-native-vector-icons/Ionicons';
import {UltimateListView} from "react-native-ultimate-listview";

import Inject from 'module';

import Css from './css';

import Model from 'model/main/home';

class Home extends Component {

    renderRow(restaurant) {
        return (
            <View>
                <ImageBackground
                    styleName="large-banner"
                    source={{uri: restaurant.image.url}}
                >
                    <Tile>
                        <Title styleName="md-gutter-bottom">{restaurant.name}</Title>
                        <Subtitle styleName="sm-gutter-horizontal">{restaurant.address}</Subtitle>
                    </Tile>
                </ImageBackground>
                <Divider styleName="line"/>
            </View>
        );
    }

    sleep = (time) => new Promise(resolve => setTimeout(() => resolve(), time));

    onFetch = async (page = 1, startFetch, abortFetch) => {
        try {
            //This is required to determinate whether the first loading list is all loaded.
            let pageLimit = 24;
            // if (this.state.layout === 'grid') pageLimit = 60;
            let skip = (page - 1) * pageLimit;

            //Generate dummy data
            let rowData = Array.from({length: pageLimit}, (value, index) => `item -> ${index + skip}`);

            //Simulate the end of the list if there is no more data returned from the server
            if (page === 10) {
                rowData = [];
            }

            //Simulate the network loading in ES7 syntax (async/await)
            await this.sleep(2000);
            startFetch([
                {
                    "name"   : "Mastergrill",
                    "address": "550 Upton Rue, San Francisco, CA 94109",
                    "image"  : {"url": "https://shoutem.github.io/static/getting-started/restaurant-6.jpg"},
                },
                {
                    "name"   : "Mastergrill",
                    "address": "550 Upton Rue, San Francisco, CA 94109",
                    "image"  : {"url": "https://shoutem.github.io/static/getting-started/restaurant-6.jpg"},
                },
                {
                    "name"   : "Mastergrill",
                    "address": "550 Upton Rue, San Francisco, CA 94109",
                    "image"  : {"url": "https://shoutem.github.io/static/getting-started/restaurant-6.jpg"},
                },
                {
                    "name"   : "Mastergrill",
                    "address": "550 Upton Rue, San Francisco, CA 94109",
                    "image"  : {"url": "https://shoutem.github.io/static/getting-started/restaurant-6.jpg"},
                },
                {
                    "name"   : "Mastergrill",
                    "address": "550 Upton Rue, San Francisco, CA 94109",
                    "image"  : {"url": "https://shoutem.github.io/static/getting-started/restaurant-6.jpg"},
                },
                {
                    "name"   : "Mastergrill",
                    "address": "550 Upton Rue, San Francisco, CA 94109",
                    "image"  : {"url": "https://shoutem.github.io/static/getting-started/restaurant-6.jpg"},
                },
                {
                    "name"   : "Mastergrill",
                    "address": "550 Upton Rue, San Francisco, CA 94109",
                    "image"  : {"url": "https://shoutem.github.io/static/getting-started/restaurant-6.jpg"},
                },
                {
                    "name"   : "Mastergrill",
                    "address": "550 Upton Rue, San Francisco, CA 94109",
                    "image"  : {"url": "https://shoutem.github.io/static/getting-started/restaurant-6.jpg"},
                },
                {
                    "name"   : "Mastergrill",
                    "address": "550 Upton Rue, San Francisco, CA 94109",
                    "image"  : {"url": "https://shoutem.github.io/static/getting-started/restaurant-6.jpg"},
                },
                {
                    "name"   : "Mastergrill",
                    "address": "550 Upton Rue, San Francisco, CA 94109",
                    "image"  : {"url": "https://shoutem.github.io/static/getting-started/restaurant-6.jpg"},
                },
            ], pageLimit);
        } catch (err) {
            abortFetch(); //manually stop the refresh or pagination if it encounters network error
            console.log(err);
        }
    };

    renderItem = (restaurant, index, separator) => {
        return (
            <View>
                <ImageBackground
                    styleName="large-banner"
                    source={{uri: restaurant.image.url}}
                >
                    <Tile>
                        <Title styleName="md-gutter-bottom">{restaurant.name}</Title>
                        <Subtitle styleName="sm-gutter-horizontal">{restaurant.address}</Subtitle>
                    </Tile>
                </ImageBackground>
                <Divider styleName="line"/>
            </View>
        );
    };

    render() {
        const {test, state: {name}} = this.props;

        return (
            <Screen>
                <NavigationBar
                    leftComponent={(
                        <Button styleName="clear">
                            <Icon size={26} name="md-menu"/>
                        </Button>
                    )}
                    centerComponent={<Title style={{
                        fontSize  : 24,
                        height    : 24,
                        minWidth  : 200,
                        textAlign : 'center',
                        lineHeight: 28,
                    }}>DIG-微忆</Title>}
                    rightComponent={(
                        <Button styleName="clear">
                            <Icon size={26} name="md-add"/>
                        </Button>
                    )}
                    styleName='clear inline no-border'
                    style={{container: {paddingTop: 26, height: 68, backgroundColor: '#FA729B'}}}
                />

                <UltimateListView
                    onFetch={this.onFetch}
                    item={this.renderItem}
                    refreshableMode="advanced"
                    keyExtractor={(item, index) => `${index}`}
                    displayDate
                    // customRefreshView={(a, b, c) => {
                    //     console.log(a, b, c);
                    // }}
                />
            </Screen>
        );
    }
}

export default Inject({namespace: 'main/home', component: Home, model: Model});