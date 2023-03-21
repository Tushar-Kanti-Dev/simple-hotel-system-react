import React from 'react';
import useRooms from '../../hooks/useRooms';
import Carousels from '../Carousels/Carousels';
import Room from '../Room/Room';

const Rooms = () => {
    const [rooms, setRooms] = useRooms();
    return (
        <>
            {/* <Carousels/> */}
            <div className="container-fluid mt-4">

                <h1 className='text-center'>---WelCome to Hotel---</h1>
                <div className="row">
                    {
                        rooms.map(room => <Room
                            key={room.id}
                            room = {room}
                        ></Room>)
                    }
                </div>
            </div>
        </>
    );
};

export default Rooms;