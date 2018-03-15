export default (store, dispatch) => {
    class Reducer {
        defaultState = {
            name: '首页'
        };

        test = (state, metadata) => {
            return Object.assign({}, state, {
                name: '心想事成1!'
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