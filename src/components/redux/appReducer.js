import {STEP_INCREMENT, RESET_VALUE, FLOORS_AMOUNT, TYPE_STRUCTURE, TYPE_MATERIAL} from "./types";

const initialState = {
    showStep: true,
    step: 1,
    floorsAmount: 1,
    typOfStructures: {"house": 1, "garage": 2},
    typOfChosenStructure: "",
    materials: {
        house: {
            1: "Кирпич",
            2: "Шлакоблок",
            3: "Деревяный брус",
        },
        garage: {
            2: "Шлакоблок",
            4: "Металл",
            5: "Сендвич-панели"
        },
    },
    typeOfChosenMaterials: "",
    chosenMaterial: "",
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case STEP_INCREMENT:
            return {...state, step: state.step + 1}
        case RESET_VALUE:
            return {
                ...state,
                step: 1,
                floorsAmount: 1,
                typeOfMaterialStructure: "",
                showStep: true,
                typOfChosenStructure: "",
                typeOfChosenMaterials: "",
                chosenMaterial: ""
            }
        case FLOORS_AMOUNT:
            return {...state, floorsAmount: action.payload}
        case TYPE_MATERIAL:
            return {...state, chosenMaterial: action.payload}
        case TYPE_STRUCTURE:
            return {
                ...state,
                typeOfChosenMaterials: state.materials[action.payload],
                typOfChosenStructure: state.typOfStructures[action.payload]
            }
        default:
            return state
    }
}