import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <div className='nav'>
                <ul>
                    <li>
                        <Link id='about-link' to='about'>
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link id='locations-link' to='locations'>
                            Our Locations
                        </Link>
                    </li>
                    <li>
                        <Link id='menu-link' to='menu'>
                            Menu
                        </Link>
                    </li>
                    <li>
                        <Link id='contact-link' to='contact'>
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </div>
            <img src='https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/restaurant/cover/TheExchangePizzaDepot213MatthewsNC.png' alt='logo' />
        </>
    )
}

export default Header;