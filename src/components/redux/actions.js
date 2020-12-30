import {STEP_INCREMENT, RESET_VALUE, FLOORS_AMOUNT, TYPE_STRUCTURE, TYPE_MATERIAL, RESULT} from "./types";

export function changeStep() {
    return {
        type: STEP_INCREMENT
    }
}

export function resetValue() {
    return {
        type: RESET_VALUE
    }
}

export function changeFloorsAmount(amount) {
    return {
        type: FLOORS_AMOUNT,
        payload: Number(amount)
    }
}

export function getTypeOfStructure(type) {
    return {
        type: TYPE_STRUCTURE,
        payload: type
    }
}

export function getChosenMaterial(type) {
    return {
        type: TYPE_MATERIAL,
        payload: type
    }
}

export function getResult(state, length, height) {
    const building = state.typOfChosenStructure;
    const floors = state.floorsAmount;
    const material = state.chosenMaterial;
    return async dispatch => {
        const response = await fetch(`https://data.techart.ru/lab/json/?building=${building}&height=${floors}` +
            `&material=${material}&sizex=${Number(length)}&sizey=${Number(height)}`)
        const json = await response.json();
        console.log(json)
        dispatch({type: RESULT, payload: json})
    }
}