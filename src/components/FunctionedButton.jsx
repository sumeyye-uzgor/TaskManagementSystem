import React from "react"
import { Button } from "@material-ui/core"
import {deleteTaskAsync, rejectTaskAsync, completeTaskAsync} from "../data/AsyncFetching"
import { withRouter } from "react-router-dom"

function FunctionedButton ({location, history, id, type})
{
    async function handleClick()
    {
        let result;
        result = type === "Delete" ? await deleteTaskAsync( id ) : ( type === "Reject" ? await rejectTaskAsync( id ) : await completeTaskAsync( id ) )
        let message = type==="Delete" ? "Task deleted!" : (type==="Reject" ? "Task Rejected!" : "Task Completed!")
        
        if ( result ) {
            window.alert( message)
            if ( location.pathname.includes("/details") ) {
                history.push("/")
            }
        }
    
    
    }
    return (
        <Button size="small" color="primary" variant="outlined" onClick={ handleClick }>
            {type}
        </Button>
    )
    
}

export default withRouter(FunctionedButton)