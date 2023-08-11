import {SET_PERSON_EDIT} from "../types";

export  const setPersonEdit  = (personEdit) => (dispatch, getState) => {
    try {
        console.log(personEdit, getState)
        dispatch({
            type: SET_PERSON_EDIT, 
            payload: {
                personEdit
            }
        })

    }catch (error){
        console.log(error);
    }
}