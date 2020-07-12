import api from '../../api';

export const ACTION_SET_CONTACTS = 'ACTION/SET/CONTACTS';
export const ACTION_ADD_CONTACT = 'ACTION/ADD/CONTACT';
export const ACTION_DELETE_CONTACT = 'ACTION/DELETE/CONTACT';
export const ACTION_FORM_SHOW = 'ACTION/FORM/SHOW';
export const ACTION_INPUT_CHANGE = 'ACTION/INPUT/CHANGE';
export const ACTION_FORM_CANCEL = 'ACTION/FORM/CANCEL';
export const ACTION_VALIDATE_INPUT = 'ACTION/VALIDATE/INPUT';
export const ACTION_VALIDATE_FORM = 'ACTION/VALIDATE/FORM';



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
export function validate(name, valid) {
    return {
        type: ACTION_VALIDATE_INPUT,
        payload: {[name]: valid}
    }
}
export function validateForm() {
    return {type: ACTION_VALIDATE_FORM}
}

export function add() {
    return function (dispath, getState) {
        let {name, surname, phone} = getState().contacts;
        let contact = {name, surname, phone}

        api.post('', contact).then((resp) => dispath({
            type: ACTION_ADD_CONTACT,
            payload: resp.data
        })
        )
        dispath(cancelForm());
    }
}

export function del(id) {
    return function(dispatch) {
        api.delete(id).then(({data}) => dispatch(
            {
                type: ACTION_DELETE_CONTACT,
                payload: data.id
            }
        ))
    }
}

export function fetchTodos() {
    return function (dispatch) {
        api.get().then((resp) => dispatch(setContacts(resp.data)));
    };
}