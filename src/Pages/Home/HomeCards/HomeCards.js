import React from 'react';
import { Link } from 'react-router-dom';
import useRooms from '../../../hooks/useRooms';
import HomeCard from '../HomeCard/HomeCard';

const HomeCards = () => {
    const [rooms, setRooms] = useRooms();

    return (
        <div className='container mt-3 mb-2'>
            <h1 className='text-center'>--Welcome Our Hotel--</h1>
            <div className="row">
                {
                    rooms.filter((product) => product.price >= 100)
                    .map((room) => (
                    <HomeCard 
                    key={room.id} 
                    room={room}>
                </HomeCard>
                ))
            }
            </div>
            <div className="view-all-button text-center m-4">
            <button className='bg-dark p-3 rounded'><Link className='text-white m-2 p-5' to='/rooms'>View All</Link></button>
            </div>
        </div>
    );
};

export default HomeCards;