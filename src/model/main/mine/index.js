export default (store, dispatch) => {
    class Reducer {
        defaultState = {
            name: '我的'
        };

        test = (state, metadata) => {
            return Object.assign({}, state, {
                name: '心想事成3!'
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