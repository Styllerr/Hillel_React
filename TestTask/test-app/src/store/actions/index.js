export const CHANGE_INPUT = 'CHANGE/INPUT';

export function change(value) {
    console.log('action get value', value)
    return {
        type: CHANGE_INPUT,
        payload: value,
    }
}