import { ACTION_FORM_SHOW } from "../actions/validators";

const initialState = {
    isFormShow: false,
    isInputValid: false,
    isFormValid: false,
}

export default function(state = initialState, { type, payload }) {
switch(type) {
    case ACTION_FORM_SHOW:
        console.log(state);
        return {...state, isFormShow: true}
    default:
    return state;
}
}