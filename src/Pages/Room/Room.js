import React from 'react';
import { Card } from 'react-bootstrap';

const Room = ({room}) => {
    const {name, img ,price} = room;
    return (
        <div  className='gx-2 col-md-6 col-lg-4 m-0'>
             <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                <Card.Title>{name}</Card.Title>
                <p>Price: $<small>{price}</small></p>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content. This content is a little bit longer.
                </Card.Text>

                </Card.Body>
            </Card>
        </div>
    );
};

export default Room;