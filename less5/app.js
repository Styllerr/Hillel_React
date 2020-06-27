const { createStore } = require('redux');

const initialState = { counts: 0 }
const INCREMENT_ACTION = 'INCREMENT'
const DECREMENT_ACTION = 'DENCREMENT'
const ADD_ACTION = 'ADD'

const increment = () => ({
        type: INCREMENT_ACTION,
    })
const decrement = () => ({
        type: DECREMENT_ACTION,
    })
const add = (payload) => ({
        type: ADD_ACTION,
        payload,
    })

const store = createStore(reducer);

function reducer(state = initialState, { type, payload }) {
    console.log('reducer fired', state, type)


    switch (type) {
        case INCREMENT_ACTION:
            return { counts: state.counts + 1 }
        case DECREMENT_ACTION:
            return { counts: state.counts - 1 }
        case ADD_ACTION:
            return { counts: state.counts + payload }

        default:
            return state;
    }
}

console.dir(store.getState());

store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(decrement())
store.dispatch(add(15))

console.dir(store.getState());