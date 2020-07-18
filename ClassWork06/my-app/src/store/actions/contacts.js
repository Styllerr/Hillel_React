import api from '../../api';

export const SET_CONTACTS = 'SET/CONTACTS';

export const getContacts = () => (dispatch) => {

    api.get().then( resp => dispatch({
        type: SET_CONTACTS,
        payload: resp.data
    }))
}