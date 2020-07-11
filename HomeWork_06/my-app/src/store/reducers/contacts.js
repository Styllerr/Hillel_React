import {
    ACTION_ADD_CONTACT,
    ACTION_FORM_SHOW,
    ACTION_INPUT_CHANGE,
    ACTION_FORM_CANCEL,
    ACTION_SET_CONTACTS
} from '../actions/contacts';


const initialState = {
    items: [],
    name: '',
    surname: '',
    phone: '',
    isFormShow: false,
    isInputValid: false,
    isFormValid: false,
    cancelButtonName: 'Cancel',
}

const BLANK_CONTACT = {
    name: '',
    surname: '',
    phone: '',
}
export default function (state = initialState, { type, payload }) {
    switch (type) {
        case ACTION_SET_CONTACTS:
            return { ...state, items: payload };

        case ACTION_FORM_SHOW:
            console.log('Form showed');
            return { ...state, isFormShow: true };

        case ACTION_FORM_CANCEL:
            console.log('Form cenceled');
            return { ...state, ...BLANK_CONTACT, isFormShow: false, }

        case ACTION_INPUT_CHANGE:
            console.log(state, payload);

            return { ...state, [payload.name]: payload.value };

        case ACTION_ADD_CONTACT:
            console.log('Add contact: ', payload)
            return { ...state, items: [...state.items, payload] }
        default:
            return state;
    }
}

