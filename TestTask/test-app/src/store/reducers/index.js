import { CHANGE_INPUT } from "../actions";

const initialState = { title: 'any' }

export default function (state = initialState, { type, payload }) {
    switch (type) {
        case CHANGE_INPUT:
            console.log('reducer get payload: ', payload);
            return { ...state, title: payload };
        default:
            return state;
    }
} 