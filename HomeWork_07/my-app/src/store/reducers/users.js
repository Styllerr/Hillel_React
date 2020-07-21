import { ACTION_SET_USERS, ACTION_SET_ALBUMS, ACTION_DEL_USER, ACTION_CREATE_USER, ACTION_INPUT_CHANGE, ACTION_SET_USER_FOR_EDIT, ACTION_SET_BLANK } from "../actions/users";

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

const BLANK_USER = {
    id: null,
    name: '',
    username: '',
    email: '',
    phone: '',
}
export default function (state = initialState, { type, payload }) {

    function findUser(userId) {
        const data = state.items.find((item) => item.id === userId);
        const {id, name, username, email, phone} = {...data};
        return {id, name, username, email, phone}
    }
    
    switch (type) {
        case ACTION_SET_USERS:
            return {
                ...state, items: [...payload], isUsersLoading: true,
            }
        case ACTION_SET_ALBUMS:
            return {
                ...state, albums: [...payload]
            }
        case ACTION_SET_USER_FOR_EDIT:
            console.log('Editing user: ', findUser(payload));
            return {
                ...state, ...findUser(payload)
            }
        case ACTION_SET_BLANK:
            return {
                ...state, ...BLANK_USER,
            }
        case ACTION_CREATE_USER:
            console.log('Create new user: ', payload);
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