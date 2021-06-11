import { Grid, Box } from "@material-ui/core"
import React, { useEffect, useState } from "react";
import { getTaskDetailsAsync } from "../data/AsyncFetching"
import { withRouter } from "react-router-dom"
import DetailCard from "../components/DetailCard.component"

function Details({location})
{
    let id = location.pathname.split( "/" )[ 2 ]
    console.log(id)
    const [task, setTask] = useState({})
    useEffect(
        () =>
        {
            async function fetchData ()
            {
                const result = await getTaskDetailsAsync( id );
                setTask(result.data)
                console.log( result.data );
            }
            fetchData()
        }
    )
    // console.log(task)

        
        return (
            <Box m={ 5 }>
                <Grid container>
                    <Grid item xs={ 12 }>
                        <DetailCard task={ task } /> 
                    </Grid>
                </Grid >
            </Box>

        );
        };
export default withRouter(Details)