import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
    Screen,
    View,
    Tile,
    Subtitle,
    ImageBackground,
    Title,
    ListView,
    NavigationBar,
    Divider,
    Button,
    Text
} from '@shoutem/ui';

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


    render() {
        const {test, state: {name}} = this.props;

        return (
            <Screen>
                <NavigationBar
                    leftComponent={(
                        <Button>
                            <Icon name="ios-add" />
                        </Button>
                    )}
                    centerComponent={<Title>TITLE</Title>}
                    rightComponent={(
                        <Button styleName="clear">
                            <Text>Post</Text>
                        </Button>
                    )}
                    styleName='inline'
                />

                <ListView
                    data={[
                        {
                            "name"   : "Gaspar Brasserie",
                            "address": "185 Sutter St, San Francisco, CA 94109",
                            "image"  : {"url": "https://shoutem.github.io/static/getting-started/restaurant-1.jpg"},
                        },
                        {
                            "name"   : "Chalk Point Kitchen",
                            "address": "527 Broome St, New York, NY 10013",
                            "image"  : {"url": "https://shoutem.github.io/static/getting-started/restaurant-2.jpg"},
                        },
                        {
                            "name"   : "Kyoto Amber Upper East",
                            "address": "225 Mulberry St, New York, NY 10012",
                            "image"  : {"url": "https://shoutem.github.io/static/getting-started/restaurant-3.jpg"},
                        },
                        {
                            "name"   : "Sushi Academy",
                            "address": "1900 Warner Ave. Unit A Santa Ana, CA",
                            "image"  : {"url": "https://shoutem.github.io/static/getting-started/restaurant-4.jpg"},
                        },
                        {
                            "name"   : "Sushibo",
                            "address": "35 Sipes Key, New York, NY 10012",
                            "image"  : {"url": "https://shoutem.github.io/static/getting-started/restaurant-5.jpg"},
                        },
                        {
                            "name"   : "Mastergrill",
                            "address": "550 Upton Rue, San Francisco, CA 94109",
                            "image"  : {"url": "https://shoutem.github.io/static/getting-started/restaurant-6.jpg"},
                        }
                    ]}
                    renderRow={this.renderRow}
                />
            </Screen>
        );
    }
}

export default Inject({namespace: 'main/home', component: Home, model: Model});