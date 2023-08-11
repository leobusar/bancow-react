import thunk from "redux-thunk";
import {createStore, applyMiddleware, combineReducers } from "redux";
import {PersonReducer} from '../reducers'

const  initialState = {}
const reducers = combineReducers({
    personReducer: PersonReducer,
}); 

const middleware = [thunk]

const store = createStore(
    reducers,
    initialState,
    applyMiddleware(...middleware)
)

export default store;

