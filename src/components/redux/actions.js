import {STEP_INCREMENT} from "./types";

export function createPost(step) {
    return {
        type: STEP_INCREMENT,
        payload: step+1
    }
}

// export function showLoader() {
//     return {
//         type: SHOW_LOADER
//     }
// }
//
// export function hideLoader() {
//     return {
//         type: HIDE_LOADER
//     }
// }
//
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