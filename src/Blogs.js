import React from 'react'
import {Container, Card, Button,} from 'react-bootstrap'

function Blogs() {
    return (
        <div className= 'App'>
                <Container>
                    <Card>
                            <Card.Body>
                            <h1> Blog Posts</h1>
                                <Card.Title>
                                    The Village on Stilts
                                </Card.Title>
                                <Card.Text>
                                    This is where part of the intro goes.
                                </Card.Text>
                                <Button variant= 'primary'>
                                    Read More
                                </Button>
                            </Card.Body>
                    </Card>
             </Container>
        </div>
    )
}

export default Blogs
