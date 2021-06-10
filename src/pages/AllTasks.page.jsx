import TaskCard from "../components/TaskCard.component";
import { Grid, Box } from "@material-ui/core"
import {connect} from "react-redux"

function AllTasks({tasks}) {
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
const mapStateToProps = state => ( {
    tasks: state.allTasks
})
export default connect(mapStateToProps)(AllTasks);
