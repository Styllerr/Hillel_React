import { ACTION_SET_USERS, ACTION_SET_ALBUMS, ACTION_DEL_USER, ACTION_CREATE_USER, ACTION_INPUT_CHANGE } from "../actions/users";

const initialState = {
    items: [],
    albums: [],
    id: null,
    name: '',
    username: '',
    email: '',
    phone: '',
    isUsersLoading: false,
}

export default function (state = initialState, { type, payload }) {
    switch (type) {
        case ACTION_SET_USERS:
            return {
                ...state, items: [...payload], isUsersLoading: true,
            }
        case ACTION_SET_ALBUMS:
            return {
                ...state, albums: [...payload]
            }
        case ACTION_CREATE_USER:
            console.log('Create ne user: ', payload);
            return {
                ...state, items: [...state.items, payload],
            }
        case ACTION_DEL_USER:
            return {
                ...state, items: state.items.filter((item) => item.id !== payload)
            }
        case ACTION_INPUT_CHANGE:
            return {
                ...state, ...payload
            }

        default:
            return state;
    }
} 