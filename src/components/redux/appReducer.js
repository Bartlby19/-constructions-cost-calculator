import {STEP_INCREMENT} from "./types";

const initialState = {
    step: 1,

}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case STEP_INCREMENT:
            return {...state, step: action.payload}
        // case HIDE_LOADER:
        //     return {...state, loading: false}
        default:
            return state
    }
}