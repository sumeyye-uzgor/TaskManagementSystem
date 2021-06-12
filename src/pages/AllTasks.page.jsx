import TaskCard from "../components/TaskCard.component";
import { Grid, Box } from "@material-ui/core"
import React,{ useEffect, useState } from "react";
import {getAllTasksAsync} from "../data/AsyncFetching"
    
function AllTasks ()
{
    const [ tasks, setTasks ] = useState( [] );
    
    useEffect( () => {
        async function fetchData ()
        {
            const result = await getAllTasksAsync()
            if ( result ) {
               setTasks([...result.data])
            }
        }
        fetchData();
    });
    return (
        <Box m={5}>
            <Grid container>
                <Grid item xs={12}>
                    <Grid container fluid="true" justify="flex-start" spacing={3}>
                        {tasks.map((task) => (
                            <Grid key={task.id} item >
                                <TaskCard task={task}/>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid >
        </Box>

    );
}

export default AllTasks;
