export const CHANGE_INPUT = 'input/change';

export function onChangeInput(value) {
    return {
        type: CHANGE_INPUT,
        payload: value
    }
} 