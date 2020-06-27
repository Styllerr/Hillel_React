const ADD_TODO = 'add new todo';
const TOGGLE_TODO = 'mark todo';

function add({ id, title }) {
    return {
        type: ADD_TODO,
        payload: {
            id,
            title,
            isDone: false,
        }
    }
}

function toggle({ isDone }) {
    return {
        type: TOGGLE_TODO,
        payload: {
            isDone: false,
        }
    }
}