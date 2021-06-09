import types from "./types"

export const setUserToken = ( userToken ) => ( {
    type: types.SET_USER_TOKEN,
    payload: userToken
} )
export const setAllTasks = ( tasks ) => ( {
    type: types.SET_ALL_TASKS,
    payload: tasks
})