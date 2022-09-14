import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

function index() {
    return (
        <div className='right-header'>
            <Link id='menu-link' to='menu'>
                Menu
            </Link>
            <Link id='contact-link' to='contact'>
                Contact Us
            </Link>
        </div>
    )
}

export default index;