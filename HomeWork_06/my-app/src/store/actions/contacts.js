export const ADD_CONTACT = 'ADD/CONTACT';
export const EDIT_CONTACT = 'EDIT/CONTACT';
export const DELETE_CONTACT = 'DELETE/CONTACT';
export const ACTION_FORM_SHOW = 'ACTION/FORM/SHOW';
export const ACTION_INPUT_CHANGE = 'ACTION/INPUT/CHANGE';
export const ACTION_FORM_CANCEL = 'ACTION/FORM/CANCEL';



export function onFormShow() {
    return { type: ACTION_FORM_SHOW }
}

export function cancelForm() {
    return { type: ACTION_FORM_CANCEL }
}

export function onInputChange(data) {
    return {
        type: ACTION_INPUT_CHANGE,
        payload: data,
    }
}



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

