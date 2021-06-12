import TaskCard from "../components/TaskCard.component";
import { Grid, Box } from "@material-ui/core"
import React,{ useEffect, useState } from "react";
import {getMyTasksAsync} from "../data/AsyncFetching"
    
function MyTasks ()
{
    const [ tasks, setTasks ] = useState( [] );
    
    useEffect( () => {
        async function fetchData ()
        {
            const result = await getMyTasksAsync()
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
                            <Grid key={task.id} item xs={12} md={6} lg={4} sm={12} xl={3}>
                                <TaskCard task={task}/>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid >
        </Box>

    );
}

export default MyTasks;
