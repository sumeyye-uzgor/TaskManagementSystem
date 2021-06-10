import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';

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

function NewTask({userInfo}) {
    const classes = useStyles();
    // const departments = [ "HR", "Sales", "Marketing" ]
    // const status = ["Pending", "Completed", "Rejected"]
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h6" component="h2">
                    deneme
                </Typography>

                <Typography className={ classes.pos } color="textSecondary" component="p">
                    <br/>
                   {/* {task.description} */}
                    {/* Assigned By : { task.user.name } */}
                    {/* <br/> */}
                   deneme
                    <br />
                    Statu
                </Typography>
            </CardContent>
            <CardActions>

                <Button size="small" color="primary" variant="outlined">Save</Button>
            </CardActions>
        </Card>
    );
}

const mapStateToProps = state => ( {
    userInfo: state.userInfo,
} )

export default connect(mapStateToProps)(NewTask)