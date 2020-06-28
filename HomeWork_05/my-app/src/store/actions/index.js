export const ADD_TODO = 'ADD/TODO';
export const TOGGLE_TODO = 'TOGGLE/TODO';
export const CHANGE_INPUT = 'CHANGE/INPUT'

function add(todo) {
    return {
        type: ADD_TODO,
        payload: todo,

    }
}
function changeInput(title) {
    return {
        type: CHANGE_INPUT,
        payload: title,
    }
}
function toggle(isDone) {
    return {
        type: TOGGLE_TODO,
        payload: isDone,
    }
}
