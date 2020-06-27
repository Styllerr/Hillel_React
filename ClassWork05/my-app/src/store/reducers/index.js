import { CHANGE_INPUT } from "../actions";

const initialState = {
    id: null,
    value: 'any',
    isDone: false,
}

export default function rootReducer(state= initialState, {type, payload}) {
    switch (type) {
        case CHANGE_INPUT:
            return {...state, value: payload}
    
        default:
            return state;
    }
}