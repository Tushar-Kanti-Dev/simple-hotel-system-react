import React from 'react';
import footerpic from '../../images/playstore.png'

const Footer = () => {
    return (
        <div className="container-fluid">
            <div className="row bg-dark text-white d-flex justify-content-center align-items-center">
                <div className="col-md-6">
                    <div className="footer-title">
                        <h1>Footer will be here</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur 
                            adipisicing elit.  nihil magni ad debitis officia id accusamus inventore nobis ab dolorem soluta esse itaque pariatur possimus quia sequi. Nam iusto perspiciatis corporis architecto vel dolor omnis? Exercitationem aliquam quo dolor quaerat iste?</p>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <img src={footerpic} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Footer;