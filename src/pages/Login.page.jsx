import { FormControl, InputLabel, Input, FormHelperText , Grid, Card, Box, Button} from '@material-ui/core';
import React, { useState } from "react"
import {loginAsync} from "../data/AsyncFetching"
import { withRouter } from 'react-router-dom';

function Login({ history}) {
    const [email, setEmail] = useState("")
    
    async function handleSignIn(){
        const result = await loginAsync( email )
        if ( result ) {
            setEmail("")
            history.push( "/" )
        }

    };
    function handleChange ( e )
    {
        setEmail(e.target.value)
    }
    return (
        <Box mt={15} >
            <Grid container justify="center" alignContent="center" > 
                <Card style={{width: "300px", height: "300px"}}>
                    <Box mt={8} ml={6} > 

                    <FormControl>
                        <InputLabel htmlFor="my-input">Email address</InputLabel>
                        <Input id="my-input" aria-describedby="my-helper-text" value={email} onChange={(e)=> handleChange(e)} />
                        <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                        <Button style={{marginTop: "30px"}} variant="outlined" color="primary" onClick={handleSignIn}>Login</Button>
                    </FormControl>
                </Box>
                </Card>
            </Grid> 
        </Box>
    );
}



export default withRouter(Login);
 