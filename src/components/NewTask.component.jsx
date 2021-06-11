import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Button, CardContent, Card, CardActions,Typography} from '@material-ui/core';
import { FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';
import {Select, MenuItem} from "@material-ui/core"
import { connect } from 'react-redux';
import {withRouter} from "react-router-dom"
import axios from "axios"

const useStyles = makeStyles((theme) =>({
    root: {
        minWidth: 275,
    },
    formControl: {
        margin: theme.spacing(1),
        width: 200,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
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
}));

function NewTask({ task, isUpdate, history}) {
    const classes = useStyles();
    const [ newTask, setNewTask ] = useState( {
        title: "",
        description: "",
        assignedDepartment: 0,
    } )
    isUpdate && setNewTask({...task})
    // const departments = [ "HR", "Sales", "Marketing" ]
    // const status = ["Pending", "Completed", "Rejected"]
    function handleSelect (e)
    {
        setNewTask({...newTask, assignedDepartment: e.target.value})
    }
    function handleChange ( e )
    {
        setNewTask( { ...newTask, [ e.target.name ]: e.target.value } )
    }
    async function handleSubmit ()
    {
        const res = await axios.post( "http://localhost:5000/api/task", { ...newTask } )
        if ( res.statusText === "OK" ) {
            window.alert( "task is created" )
            setNewTask( {
                title: "",
                description: "",
                assignedDepartment: 0,
            })
            history.push("/")
        }
        else {
            window.alert("an error occured, try again")
        }
        console.log(res)
    }
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h6" component="h2">
                    {isUpdate ? "Edit Task" : "New Task"}
                </Typography>
                <FormControl required className={classes.formControl}>
                    <InputLabel id="demo-simple-select-required-label">Assigned Department</InputLabel>
                    <Select
                    labelId="demo-simple-select-required-label"
                    id="demo-simple-select-required"
                    value={newTask.assignedDepartment}
                    onChange={handleSelect}
                    className={classes.selectEmpty}
                    >
                        <MenuItem value={0} disabled>
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={1}>HR</MenuItem>
                        <MenuItem value={2}>Sales</MenuItem>
                        <MenuItem value={3}>Marketing</MenuItem>
                    </Select>
                <FormHelperText>Required</FormHelperText>
                </FormControl>
                <br/>
                <FormControl>
                    <InputLabel htmlFor="title">Title</InputLabel>
                    <Input id="title" aria-describedby="my-helper-text" onChange={handleChange} value={newTask.title} name="title"/>
                    {/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="desc">Description</InputLabel>
                    <Input id="desc" aria-describedby="my-helper-text" onChange={handleChange} value={newTask.description} name="description"/>
                    {/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}
                </FormControl>
            </CardContent>
            <CardActions>

                <Button size="small" color="primary" variant="outlined" onClick={handleSubmit}>Save</Button>
            </CardActions>
        </Card>
    );
}

const mapStateToProps = state => ( {
    userInfo: state.userInfo,
} )

export default connect(mapStateToProps)(withRouter(NewTask))