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
}
const rootReducer = (state = INITIAL_STATE, action) => {
    switch ( action.type ) {
        case types.SET_USER_TOKEN:
            return {
                ...state,
                userToken: action.payload,
            }
        default:
            return state
    }
}

export default persistReducer(persistConfig, rootReducer);