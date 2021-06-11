import axios from "axios"
import { store } from "../redux/store"
import {setUserToken} from "../redux/actions"

export const loginAsync = async ( email ) =>
{
    const response = await axios.post( "http://localhost:5000/api/auth/login", { email } )
    if ( !response.message ) {
        const payload = response.data.payload
        await store.dispatch( setUserToken({ token: payload.jwtToken, id: payload.id, department: payload.department, name: payload.name })  )
        axios.defaults.headers.common[ 'Authorization' ] =
            'Bearer ' + response.data.payload.jwtToken;
        return {isError:false}
    }
    else {
        return {...response, isError: true}
    }
}

export const getAllTasksAsync = async () =>
{
    const response = await axios.get( "http://localhost:5000/api/task" )
    if ( !response.message ) {
        return { data: [...response.data.payload], isError: false }
    }
    else {
        return { ...response, isError: true }
    }
}

export const getMyTasksAsync = async () =>
{
    const response = await axios.get( "http://localhost:5000/api/task/my-tasks" )
    if ( !response.message ) {
        return { data: [...response.data.payload], isError: false }
    }
    else {
        return { ...response, isError: true }
    }
}

export const getPendingTasksAsync = async () =>
{
    const response = await axios.get( "http://localhost:5000/api/task/pendings" )
    if ( !response.message ) {
        return { data: [...response.data.payload], isError: false }
    }
    else {
        return { ...response, isError: true }
    }
}
export const getTaskDetailsAsync = async (id) =>
{
    const response = await axios.get( `http://localhost:5000/api/task/${id}` )
    if ( !response.message ) {
        return { data: [...response.data.payload], isError: false }
    }
    else {
        return { ...response, isError: true }
    }
}
export const createTaskAsync = async ({title, description, assignedDepartment}) =>
{
    const response = await axios.post( "http://localhost:5000/api/task", {title, description, assignedDepartment} )
    if ( !response.message ) {
        return {isError: false }
    }
    else {
        return { ...response, isError: true }
    }
}

export const editTaskAsync = async ( id, { task: { title, description } }) =>
{
    const response = await axios.put( `http://localhost:5000/api/task/${id}`, {title, description} )
    if ( !response.message ) {
        return {isError: false }
    }
    else {
        return { ...response, isError: true }
    }
}

export const deleteTaskAsync = async (id) =>
{
    const response = await axios.delete( `http://localhost:5000/api/task/${id}` )
    if ( !response.message ) {
        return {isError: false }
    }
    else {
        return { ...response, isError: true }
    }
}

export const completeTaskAsync = async (id) =>
{
    const response = await axios.get( `http://localhost:5000/api/task/complete/${id}` )
    if ( !response.message ) {
        return {isError: false }
    }
    else {
        return { ...response, isError: true }
    }
}

export const rejectTaskAsync = async (id) =>
{
    const response = await axios.get( `http://localhost:5000/api/task/reject/${id}` )
    if ( !response.message ) {
        return {isError: false }
    }
    else {
        return { ...response, isError: true }
    }
}

