import React, {Component} from 'react';
import {connect} from 'react-redux';
import store, {Inject, Resolve} from 'model';

export default (config = {}) => {
    let setting = {
        namespace: '',
        model    : '',
        component: <div></div>,
    }

    Object.keys(config).forEach(key => setting[key] = config[key]);

    // 将模型注入绑定
    Inject(setting.namespace, setting.model);

    class Container extends Component {
        render() {
            return <this.props.setting.component {...this.props}/>;
        }

        // todo componentDidMount...
    }

    Container.defaultProps = {setting};

    return connect((state, props) => {
        const {namespace} = setting;
        return Object.assign({}, {props}, {state: state[namespace] || state});
    }, dispatch => {
        const {namespace} = setting, method = dispatch;

        dispatch = (action, metadata, global = false) => {
            method({
                type: global ? action : `${namespace}/${action}`,
                ...metadata
            });
        };

        let actions = {}, model = Resolve(namespace);
        const dispatches = !model ? {} : new (model(store.getState()[namespace], dispatch).Dispatch);
        Object.keys(dispatches).forEach(name => {
            actions[name] = new Proxy(dispatches[name], {
                apply(target, ctx, args) {
                    return Reflect.apply(target, ctx, args);
                }
            });
        });

        return {dispatch, ...actions};
    })(Container);
};