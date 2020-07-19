import { ACTION_SET_USERS, ACTION_SET_ALBUMS, ACTION_DEL_USER } from "../actions/users";

const initialState = {
    items: [],
    albums: [],
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
        case ACTION_DEL_USER:
            return {
                ...state, items: state.items.filter((item) => item.id !== payload)
            }
        default:
            return state;
    }
} 