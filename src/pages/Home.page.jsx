import TaskCard from "../components/TaskCard.component";
import { Grid, Box } from "@material-ui/core"

function Home() {
    return (
        <Box m={5}>
            <Grid container>
                <Grid item xs={12}>
                    <Grid container justify="flex-start" spacing={2}>
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                            <Grid key={value} item xs={12} md={3} sm={6} xl={2}>
                                <TaskCard />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid >
        </Box>

    );
}

export default Home;
