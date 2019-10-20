import { ACTION_ADD_BLOCKS, ACTION_CHANGE_STR_TO_FIND } from "../actionsTypes";

const initialState = {
    blocks: [],
    strToFind: "",
}

export const blocksReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_ADD_BLOCKS: {
            return {
                ...state,
                blocks: action.payload
            };
        }
        case ACTION_CHANGE_STR_TO_FIND: {
            return {
                ...state,
                strToFind: action.payload
            }
        }
        default:
            return state;
    }
}