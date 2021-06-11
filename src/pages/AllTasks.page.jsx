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
            if ( result.isError ) {
                window.alert(result.code, result.message)
            }
            else {
                setTasks([...result.data])
            }
        }
        fetchData();
    });
    return (
        <Box m={5}>
            <Grid container>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={5}>
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

export default AllTasks;
