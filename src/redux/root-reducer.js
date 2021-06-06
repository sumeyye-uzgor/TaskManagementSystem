import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['']
}
const INITIAL_STATE = {

}
const rootReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default persistReducer(persistConfig, rootReducer);