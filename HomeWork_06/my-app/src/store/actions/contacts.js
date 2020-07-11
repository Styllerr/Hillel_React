import api from '../../api';

export const ACTION_SET_CONTACTS = 'ACTION/SET/CONTACTS';
export const ACTION_ADD_CONTACT = 'ACTION/ADD/CONTACT';
export const ACTION_EDIT_CONTACT = 'ACTION/EDIT/CONTACT';
export const DELETE_CONTACT = 'DELETE/CONTACT';
export const ACTION_FORM_SHOW = 'ACTION/FORM/SHOW';
export const ACTION_INPUT_CHANGE = 'ACTION/INPUT/CHANGE';
export const ACTION_FORM_CANCEL = 'ACTION/FORM/CANCEL';


export function setContacts(data) {
    return {
        type: ACTION_SET_CONTACTS,
        payload: data,
    };
}
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



export function add(name, surname, phone) {
    let contact = {name, surname, phone}
    return function (dispath) {
        console.log(contact);
        api.post('', contact).then((resp) => dispath({
            type: ACTION_ADD_CONTACT,
            payload: resp.data
        })
        )
        dispath(cancelForm());
    }
}

export function edit(contact) {
    return {
        type: ACTION_EDIT_CONTACT,
        payload: contact
    }
}
export function del(contact) {
    return {
        type: DELETE_CONTACT,
        payload: contact
    }
}

export function fetchTodos() {
    return function (dispatch) {
        api.get().then((resp) => dispatch(setContacts(resp.data)));
    };
}