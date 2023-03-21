import React from 'react';
import { Card } from 'react-bootstrap';

const Room = ({room}) => {
    const {name, img ,price} = room;
    return (
        <div  className='col-md-6 col-lg-4'>
             <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content. This content is a little bit longer.
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default Room;