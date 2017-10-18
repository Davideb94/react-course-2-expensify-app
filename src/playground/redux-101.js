import { createStore } from 'redux';

const incrementCount = ( { incrementBy = 1 } = {} ) => (
    {
        type: 'INCREMENT',
        incrementBy
    }
);

const decrementCount = ( { decrementBy = 1} = {} ) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count }) => (
    {
        type: 'SET',
        count
    }
);

// Reducers
// 1. Reducers are pure functions
// 2. Never change state or action
//
const countReducer = ( state = { count: 0 }, action ) => {
    switch( action.type ){
        case 'INCREMENT':
            return {
                count: state.count + 1
            };
        case 'DECREMENT':
            return {
                count: state.count - 1
            };
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state
    }
};

const store = createStore( countReducer );

const unsubscribe = store.subscribe(
    () => {
        console.log( store .getState() );
    }
);

store.dispatch( incrementCount() );

store.dispatch( decrementCount() );

store.dispatch( setCount({ count: 101 }) );

unsubscribe();

store.dispatch({
    type: 'RESET'
});