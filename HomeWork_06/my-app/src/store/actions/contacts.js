export const ADD_CONTACT = 'ADD/CONTACT';
export const EDIT_CONTACT = 'EDIT/CONTACT';
export const DELETE_CONTACT = 'DELETE/CONTACT';

export function add(contact) {
    return {
        type: ADD_CONTACT,
        payload: contact
    }
}
export function edit(contact) {
    return {
        type: EDIT_CONTACT,
        payload: contact
    }
}
export function del(contact) {
    return {
        type: DELETE_CONTACT,
        payload: contact
    }
}

