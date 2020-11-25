import React from 'react'
import {Link, } from 'react-router-dom'
import {Form, FormGroup, FormLabel, FormControl, Button, Container, Card} from 'react-bootstrap'

function LogIn() {
    
    return(
        <div className= 'App'>
        <Container>
        <Card>   
         <Form>
         <h1>Log In</h1>
                <FormGroup>
                    <FormLabel> Email Address </FormLabel>
                    <FormControl 
                    type= 'email'  
                    placeholder= 'example@email.com'
                     />
                </FormGroup>
                <FormGroup>
                    <FormLabel> Password </FormLabel>
                    <FormControl 
                    type= 'password'  
                    placeholder= 'Password'
                    />
                </FormGroup>
                <Button>Log In <Link to = "/blogs"/></Button>
                <p>Don't have an account? Sign Up 
                    <span><Link to= '/signup'> 
                    <p>here</p></Link></span></p>
                </Form>
            </Card>
    </Container>
    </div>  
    )
}

export default LogIn
