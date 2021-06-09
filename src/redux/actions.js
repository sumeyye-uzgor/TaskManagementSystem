import types from "./types"

export const setUserToken = ( userToken ) => ( {
    type: types.SET_USER_TOKEN,
    payload: userToken
})