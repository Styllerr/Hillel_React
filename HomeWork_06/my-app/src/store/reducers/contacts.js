const { ADD_CONTACT, ACTION_FORM_SHOW, ACTION_INPUT_CHANGE, ACTION_FORM_CANCEL } = require("../actions/contacts");

const BLANK_CONTACT = {
    name: '',
    surname: '',
    phone: null,
}

const initialState = {
    items: [
        {
            id: 1,
            name: 'Ivan',
            surname: 'Petrov',
            phone: 380995556677,
        },
        {
            id: 2,
            name: 'Petr',
            surname: 'Ivanov',
            phone: 380995677722,
        },
    ],
    ...BLANK_CONTACT
    ,
    isFormShow: false,
    isInputValid: false,
    isFormValid: false,
    cencelButtonName: 'Cancel',
}

export default function (state = initialState, { type, payload }) {
    switch (type) {
        case ACTION_FORM_SHOW:
            console.log('Form showed');
            return { ...state, isFormShow: true };

        case ACTION_FORM_CANCEL:
            console.log('Form cenceled');
            return { ...state, ...BLANK_CONTACT, isFormShow: false,}

        case ACTION_INPUT_CHANGE:
            console.log(state, payload);

            return { ...state, [payload.name]: payload.value };

        case ADD_CONTACT:
            console.log('Add contact: ', payload)
            return { ...state, items: [...state.contacts.items, payload] }
        default:
            return state;
    }
}

