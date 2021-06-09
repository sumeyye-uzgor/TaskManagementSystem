import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import types from "./types"

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['']
}
const INITIAL_STATE = {
    userToken: "",
    allTasks: null,
}
const rootReducer = (state = INITIAL_STATE, action) => {
    switch ( action.type ) {
        case types.SET_USER_TOKEN:
            return {
                ...state,
                userToken: action.payload,
            }
        case types.SET_ALL_TASKS:
            return {
                ...state,
                allTasks: action.payload
            }
        default:
            return state
    }
}

export default persistReducer(persistConfig, rootReducer);