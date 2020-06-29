export const ADD_TODO = 'ADD/TODO';
export const TOGGLE_TODO = 'TOGGLE/TODO';
export const CHANGE_INPUT = 'CHANGE/INPUT'

export function add(todo) {
    return {
        type: ADD_TODO,
        payload: todo,

    }
}
export function changeInput(title) {
    return {
        type: CHANGE_INPUT,
        payload: title,
    }
}
export function toggle() {
    return {
        type: TOGGLE_TODO,
    }
}
