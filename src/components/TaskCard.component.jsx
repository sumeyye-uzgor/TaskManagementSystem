import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import axios from "axios"
import {setAllTasks} from "../redux/actions"

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

function TaskCard({task, userInfo, setAllTasks}) {
    const classes = useStyles();
    // const bull = <span className={classes.bullet}>•</span>;
    const departments = [ "HR", "Sales", "Marketing" ]
    const status = [ "Pending", "Completed", "Rejected" ]
    async function handleDelete ()
    {
        console.log(task.id)
        const res = axios.delete( `http://localhost:5000/api/task/${task.id}` )
        console.log(res.data)
        if ( res.code === "taskDeleted" ) {
            const result = await axios.get( "http://localhost:5000/api/task" )
            await setAllTasks(result.data.payload)
            window.alert( "task is deleted" )

        }
        else {
            window.alert(res.message)
        }
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
const mapDispatchToProps = dispatch => ({
    setAllTasks : tasks => dispatch(setAllTasks(tasks))
})
export default connect(mapStateToProps, mapDispatchToProps)(TaskCard)