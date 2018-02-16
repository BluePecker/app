import * as Redux from 'redux';

const container = {init: (state = {}, action) => state};

const store = Redux.createStore(container.init);

export const Inject = (namespace, model) => {
    if (model && !Reflect.has(container || {}, namespace)) {
        container[namespace] = model;
        let reducers = {};
        Object.keys(container).map(key => {
            if (key !== 'init') {
                const reducer = new (container[key]().Reducer);
                reducers[key] = (state = reducer.defaultState || {}, action) => {
                    const {type, ...metadata} = action;
                    const method = (type || '').replace(`${key}/`, '');
                    return Reflect.has(reducer, method) ? reducer[method](state, metadata) : state;
                }
            } else {
                reducers[key] = container.init;
            }
        });
        store.replaceReducer(Redux.combineReducers(reducers));
    }
};

export const Resolve = n => Reflect.has(container || {}, n) ? container[n] : null;

export default store;