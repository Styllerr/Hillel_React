import api from '../../api';

export const ACTION_SET_USERS = 'ACTION/SET/USERS';
export function getUsers() {
    return ((dispatch) => {
        api.get('/users').then((respons) => dispatch({
            type: ACTION_SET_USERS,
            payload: respons.data
        })
        )
    })
}

export const ACTION_SET_ALBUMS = 'ACTION/SET/ALBUMS';
export function getAlbums() {
    return ((dispatch) => {
        api.get('/albums').then((respons) => dispatch({
            type: ACTION_SET_ALBUMS,
            payload: respons.data
        })
        )
    })
}
export const ACTION_SET_USER_FOR_EDIT = 'ACTION/SET/USER/FOR/EDIT';
export function editUser(id) {
    return {
        type: ACTION_SET_USER_FOR_EDIT,
        payload: id,
    }
}
export const ACTION_SET_BLANK = 'ACTION/SET/BLANK';
export function blankUser() {
    return {
        type: ACTION_SET_BLANK,
    }
}


export const ACTION_CREATE_USER = 'ACTION/CREATE/USER';
export function createUser(data) {
    return ((dispatch) => {
        api.post('/users/', data).then((resp) => dispatch({
            type: ACTION_CREATE_USER,
            payload: resp.data
        })
        )
    })
}
export const ACTION_DEL_USER = 'ACTION/DEL/USER';
export function delUser(id) {
    return ((dispatch) => {
        api.delete('/users/' + id).then(() => dispatch({
            type: ACTION_DEL_USER,
            payload: id
        })
        )
    })
}

export const ACTION_INPUT_CHANGE = 'ACTION/INPUT/CHANGE';
export function inputChange(name, value) {
    return {
        type: ACTION_INPUT_CHANGE,
        payload: { [name]: value }
    }
}
