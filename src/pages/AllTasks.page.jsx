import TaskCard from "../components/TaskCard.component";
import { Grid, Box } from "@material-ui/core"

function AllTasks() {
    return (
        <Box m={5}>
            <Grid container>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={5}>
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                            <Grid key={value} item xs={12} md={6} lg={4} sm={12} xl={3}>
                                <TaskCard />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid >
        </Box>

    );
}

export default AllTasks;