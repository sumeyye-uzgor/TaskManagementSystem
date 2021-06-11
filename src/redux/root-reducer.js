import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import types from "./types"

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['']
}
const INITIAL_STATE = {
    userInfo: {
        userToken: "",
        userId: "",
        depatment: null,
        userName: ""
    },
    allTasks: null,
}
const rootReducer = (state = INITIAL_STATE, action) => {
    switch ( action.type ) {
        case types.SET_USER_TOKEN:
            return {
                ...state,
                userInfo: {
                    userToken: action.payload.token,
                    userId: action.payload.id,
                    department: action.payload.department,
                    userName: action.payload.name,
                }
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