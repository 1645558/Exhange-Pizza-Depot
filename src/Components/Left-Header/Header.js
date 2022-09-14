import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <div className='left-header'>
                <Link id='about-link' to='about'>
                    About Us
                </Link>
                <Link id='locations-link' to='locations'>
                    Our Locations
                </Link>
            </div>
        </>
    )
}

export default Header;