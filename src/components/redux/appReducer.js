import {STEP_INCREMENT, RESET_VALUE, FLOORS_AMOUNT, TYPE_STRUCTURE} from "./types";

const initialState = {
    step: 1,
    floorsAmount: 1,
    typeOfStructure: ""
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case STEP_INCREMENT:
            return {...state, step: state.step + 1}
        case RESET_VALUE:
            return {...state, step: 1, floorsAmount: 1, typeOfStructure: ""}
        case FLOORS_AMOUNT:
            return {...state, floorsAmount: action.payload}
        case TYPE_STRUCTURE:
            return {...state, typeOfStructure: action.payload}
        default:
            return state
    }
}