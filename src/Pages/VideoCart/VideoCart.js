import React, { useState } from 'react';
import videoX from '../../images/videos/videoX.mp4';
import './VideoCart.css'

const VideoCart = () => {
    const [showDiv, setShowDiv] = useState(false);
  const toggleDiv = () => {
    setShowDiv(!showDiv);
  };
    return (
        <>
        <div className="container  text-center">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-12">
            <h1 class="mb-3 h2">Jumbotron</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repellendus praesentium labore accusamus sequi, voluptate debitis
              tenetur in deleniti possimus modi voluptatum neque maiores dolorem
              unde? Aut dolorum quod excepturi fugit.
            </p>
  
            <button className={`btn ${showDiv ? "btn-danger" : "btn-warning"}`} onClick={toggleDiv}>
              {showDiv ? <>Close</> : <>Video</>}
            </button>
          </div>
          {showDiv && (
            <div className="col-md-12">
              <video className='video-content' src={videoX} controls width={"100%"} />
            </div>
          )}
        </div>
        </div>
      </>
    );
};

export default VideoCart;