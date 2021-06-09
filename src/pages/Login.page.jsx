import { FormControl, InputLabel, Input, FormHelperText , Grid, Card, Box, Button} from '@material-ui/core';
import React, { useState } from "react"
import axios from "axios"
import { connect } from "react-redux"
import { setUserToken } from '../redux/actions';
import { withRouter } from 'react-router-dom';

function Login({login, history}) {
    const [email, setEmail] = useState("")
    async function handleSignIn(){
        // console.log(email);
        try {
            const result = await axios.post( "http://localhost:5000/api/auth/login", { email } )
            await login(result.data.payload.jwtToken)
            history.push("/")
            
        }
        catch ( error ) {
            window.alert("error")
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


const mapDispatchToProps = dispatch => ( {
    login : token => dispatch(setUserToken(token))
})
export default connect(null, mapDispatchToProps)(withRouter(Login));
 