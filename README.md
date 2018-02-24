## RN-快速开发一套代码多端适用的APP
---

#### 项目概要

	本项目是基于RN的一次尝试，通过抽象数据逻辑层和UI交互层以达到快捷/高效/清晰地开发APP。

#### 效果展示

![avatar](./example.gif)
	
#### 项目结构
> a. UI层 src/module
示例代码:

```
import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

import Inject from 'module';

import Css from './css';

import Model from 'model/main/mark';

class Mark extends Component {

    componentDidMount() {
        console.log('init');
    }

    render() {
        const {test, state: {name}} = this.props;

        return (
            <View style={Css.container}>
                <Text style={Css.welcome} onClick={test}>{name}</Text>
                <Button
                    onPress={test}
                    title="Press Me"
                    accessibilityLabel="See an informative alert"
                />
            </View>
        );
    }
}

export default Inject({namespace: 'main/mark', component: Mark, model: Model});
```

> b. 数据层 src/model

示例代码:

```
export default (store, dispatch) => {
    class Reducer {
        defaultState = {
            name: '足迹'
        };

        test = (state, metadata) => {
            return Object.assign({}, state, {
                name: '心想事成2!'
            });
        }
    }

    class Dispatch {
        test = () => {
            dispatch('test');
        }
    }

    return {Reducer, Dispatch};
};
```

> c. 组件层 src/component

略