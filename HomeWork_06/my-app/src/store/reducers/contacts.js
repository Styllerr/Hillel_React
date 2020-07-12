import {
    ACTION_ADD_CONTACT,
    ACTION_DELETE_CONTACT,
    ACTION_FORM_SHOW,
    ACTION_INPUT_CHANGE,
    ACTION_FORM_CANCEL,
    ACTION_SET_CONTACTS,
    ACTION_VALIDATE_INPUT,
    ACTION_VALIDATE_FORM,
} from '../actions/contacts';


const initialState = {
    items: [],
    id: null,
    name: '',
    surname: '',
    phone: '',
    isFormShow: false,
    isInputValid: {
        name: false,
        surname: false,
        phone: false
    },
    isFormValid: false,
    cancelButtonName: 'Cancel',
}

const BLANK_CONTACT = {
    id: null,
    name: '',
    surname: '',
    phone: '',
    isFormShow: false,
    isInputValid: {
        name: false,
        surname: false,
        phone: false
    },
    isFormValid: false,
}
export default function (state = initialState, { type, payload }) {
    switch (type) {
        case ACTION_SET_CONTACTS:
            return { ...state, items: payload };

        case ACTION_FORM_SHOW:
            return { ...state, isFormShow: true };

        case ACTION_FORM_CANCEL:
            return { ...state, ...BLANK_CONTACT }

        case ACTION_INPUT_CHANGE:
            return { ...state, [payload.name]: payload.value };

        case ACTION_ADD_CONTACT:
            return { ...state, items: [...state.items, payload] };

        case ACTION_DELETE_CONTACT:
            return { ...state, items: state.items.filter((item) => item.id !== payload) };
        case ACTION_VALIDATE_INPUT:
            return {
                ...state, isInputValid: { ...state.isInputValid, ...payload },
                isFormValid: Object.values(state.isInputValid).every((item) => item ? true : false)
            };
        case ACTION_VALIDATE_FORM:
            return {
                ...state, isFormValid: Object.values(state.isInputValid).every((item) => item ? true : false)
            };


        default:
            return state;
    }
}

