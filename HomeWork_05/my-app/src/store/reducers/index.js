import { ADD_TODO, TOGGLE_TODO, CHANGE_INPUT } from "../actions";

const initialState = {
    todos: [],
    title: '',
};

export default function (state = initialState, {type, payload}) {
    switch (type) {
        case ADD_TODO:
            return { ...state, todos: [...state.todos, payload], };
        case TOGGLE_TODO:
            return {...state, todos: state.todos.map(
                            item => item.id === payload.id ? payload : item),};
        case CHANGE_INPUT:
            return { ...state, title: payload, };

        default:
            return state

    }
}