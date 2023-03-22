import React from "react";
import Carousels from "../../Carousels/Carousels";
import HotelTitle from "../../HotelTitle/HotelTitle";
import Rooms from "../../Rooms/Rooms";
import VideoCart from "../../VideoCart/VideoCart";
import HomeCards from "../HomeCards/HomeCards";

const Home = () => {
  return (
    <>
      <Carousels />
      <HomeCards />
      <HotelTitle />
      <VideoCart/>
    </>
  );
};

export default Home;
