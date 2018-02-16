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