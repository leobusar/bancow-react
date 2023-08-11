import { SET_PERSON_EDIT } from "../types";

const INITIAL_STATE = {
    personEdit: {}
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_PERSON_EDIT: 
            return {
                ...state,
                ...action.payload,
            };

        default:
            return state
    }
}