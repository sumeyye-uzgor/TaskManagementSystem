import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import {Card, CardActions, CardContent, Button, Typography} from "@material-ui/core"
import { connect } from 'react-redux';
import {deleteTaskAsync} from "../data/AsyncFetching"

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        height: 200,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

function TaskCard({task, userInfo}) {
    const classes = useStyles();
    // const bull = <span className={classes.bullet}>•</span>;
    const departments = [ "HR", "Sales", "Marketing" ]
    const status = [ "Pending", "Completed", "Rejected" ]
    async function handleDelete ()
    {
        const result = await deleteTaskAsync( task.id )
        result && window.alert("task deleted")
    }
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h6" component="h2">
                    {task.title}
                </Typography>

                <Typography className={ classes.pos } color="textSecondary" component="p">
                    <br/>
                   {/* {task.description} */}
                    {/* Assigned By : { task.user.name } */}
                    {/* <br/> */}
                    Assigned To : {departments[task.assignedDepartment-1]}
                    <br />
                    Status: {status[task.status]}
                </Typography>
            </CardContent>
            <CardActions>
                {
                    userInfo.userId === task.user.id && (
                        <React.Fragment>
                            <Button size="small" color="primary" variant="outlined">Edit</Button>
                            <Button size="small" color="primary" variant="outlined" onClick={handleDelete}>Delete</Button>
                        </React.Fragment>
                    )
                }
                {
                    userInfo.department === task.assignedDepartment && (
                        <React.Fragment>
                            <Button size="small" color="primary" variant="outlined">Complete</Button>
                            <Button size="small" color="primary" variant="outlined">Reject</Button>
                        </React.Fragment> )
                }
                <Button size="small" color="primary" variant="outlined">Detials</Button>
            </CardActions>
        </Card>
    );
}

const mapStateToProps = state => ( {
    userInfo: state.userInfo,
} )

export default connect(mapStateToProps)(TaskCard)