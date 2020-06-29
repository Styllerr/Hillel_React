import { ADD_TODO, TOGGLE_TODO, CHANGE_INPUT } from "../actions";

const initialState = {
    todos: [],
    title: '',
    isDone: false,
};


export default function (state = initialState, { type, payload }) {
    switch (type) {
        case ADD_TODO:
            return { ...state, todo: [...state.todos, payload], }
        case TOGGLE_TODO:
            return {
                ...state, isDone: !state.isDone,
            }
        case CHANGE_INPUT:
            return { ...state, title: payload, }

        default:
            return state

    }
}