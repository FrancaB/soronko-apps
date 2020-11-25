import React from 'react'
import {Container, Card, Button, Breadcrumb} from 'react-bootstrap'

function AboutUs() {
    return (    
        <div className= 'App'>
                <Container>
                    <Card>
                            <Card.Body>
                                <h1> About Us</h1>
                                <Card.Title>
                                   This Is What We Do
                                </Card.Title>
                                <Card.Text>
                                    This is where part of the intro goes.
                                </Card.Text>
                            </Card.Body>
                    </Card>
             </Container>

        </div>
    )
}

export default AboutUs
