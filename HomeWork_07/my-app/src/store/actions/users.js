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