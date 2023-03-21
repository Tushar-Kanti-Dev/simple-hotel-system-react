import React from 'react';
import useRooms from '../../../hooks/useRooms';
import HomeCard from '../HomeCard/HomeCard';

const HomeCards = () => {
    const [rooms, setRooms] = useRooms();

    return (
        <div className='container mt-3 mb-2'>
            <h1 className='text-center'>--Welcome Our Hotel--</h1>
            <div className="row">
                {
                    rooms.map(room =><HomeCard
                    key={room.id}
                    room = {room}
                    />)
                }
            </div>
        </div>
    );
};

export default HomeCards;