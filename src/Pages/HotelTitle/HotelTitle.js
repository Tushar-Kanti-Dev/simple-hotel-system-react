import React from "react";
import hotelpic1 from "../../images/hotel-img/hotel-1.jpg";

const HotelTitle = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex justify-content-center align-items-center flex-column m-0 p-0 bg-dark text-white">
            <h2>World largest Hotel Side</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Veritatis, architecto!
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Veritatis, architecto!
            </p>
          </div>
          <div className="col-lg-6 justify-content-center align-items-center flex-column m-0 p-0">
            <img className="img-fluid" src={hotelpic1} alt="" />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-6 justify-content-center align-items-center flex-column m-0 p-0">
            <img className="img-fluid" src={hotelpic1} alt="" />
          </div>
          <div className="col-lg-6 d-flex justify-content-center align-items-center flex-column m-0 p-0 bg-dark text-white">
            <h2>World largest Hotel Side</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Veritatis, architecto!
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Veritatis, architecto!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelTitle;
