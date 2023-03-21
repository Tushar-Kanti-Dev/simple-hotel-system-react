import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>

        <div className="container-fluid">
        <div className="row">
            <div className="col-12 bg-info">
            😀🤣😆
            </div>
        </div>
        </div>
        <header className='sticky-top'>
            <div className="container-fluid bg-dark text-white text-center">
                <div className="row">
                    <div className="company-name col-md-4">
                        <h1>Dream Hotel</h1>
                    </div>
                    <div className="nav-bar col-md-4">
                        <Link to='/'>Home</Link>
                        <Link to='/rooms'>Rooms</Link>
                        <Link to='/contact'>Contact</Link>
                        <Link to='/rooms'>About</Link>
                    </div>
                    <div className="social-items col-md-4">
                        <h2>FB</h2>
                    </div>
                </div>
            </div>
        </header>
        </>
    );
};

export default Header;