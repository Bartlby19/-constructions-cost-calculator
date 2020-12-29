import {STEP_INCREMENT, RESET_VALUE, FLOORS_AMOUNT, TYPE_STRUCTURE} from "./types";

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


// export function showAlert(text) {
//     return dispatch => {
//         dispatch({
//             type: SHOW_ALERT,
//             payload: text
//         });
//         setTimeout(() => {
//             dispatch(hideAlert())
//         }, 3000)
//     }
// }
//
// export function hideAlert() {
//     return {
//         type: HIDE_ALERT
//     }
// }
//
// export function fetchPost() {
//     return async dispatch => {
//         dispatch(showLoader())
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
//         const json = await response.json();
//         dispatch({type: FETCH_POSTS, payload: json})
//         dispatch(hideLoader())
//
//     }
//
// }