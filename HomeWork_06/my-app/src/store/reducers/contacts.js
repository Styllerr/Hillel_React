const { ADD_CONTACT } = require("../actions/contacts");

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
    name: '',
    surname: '',
    phone: null
}

export default function (state = initialState, { type, payload }) {
    switch (type) {
        case ADD_CONTACT:
            console.log('Add contact: ', payload)
            return { ...state, items: [...state.contacts.items, payload] }
        default:
            return state;
    }
}