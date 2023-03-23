import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import './Room.css'

const Room = ({room}) => {
    const {name, img ,price} = room;

    const [items, setItems] = useState({})

    const handleBookRoom = (id)=>{
        setItems(items);
        console.log(id);
    }
    console.log(items);
    return (
        <div  className='gx-2 col-md-6 col-lg-4 m-0 mb-2'>
             <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                <Card.Title>{name}</Card.Title>
                <p>Price: $<small>{price}</small></p>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content. This content is a little bit longer.
                </Card.Text>
                <div className="book-now-button text-center">
                <button onClick={handleBookRoom} className='text-light bg-dark rounded px-5 pe-4 py-2'>Book Now</button>
                </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Room;