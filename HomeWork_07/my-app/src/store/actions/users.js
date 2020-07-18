import api from '../../api';

export function getUsers() {
    return ((dispatch) => {
        api.get().then((respons) => dispatch({
            type: ACTION_SET_USERS,
            payload: respons.data
        })
        )
    })
}