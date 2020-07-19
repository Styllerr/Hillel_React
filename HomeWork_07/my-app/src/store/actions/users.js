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
export const ACTION_DEL_USER = 'ACTION/DEL/USER';
export function delUser(id) {
    return ((dispatch) => {
        api.delete('/users/' + id).then((resp) => dispatch({
            type: ACTION_DEL_USER,
            payload: id
        })
        )
    })
}

