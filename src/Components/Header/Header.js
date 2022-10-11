import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <div className='nav'>
                <div className='logo'>
                    <img src='https://img.cdn4dd.com/cdn-cgi/image/fit=contain,format=auto/https://doordash-static.s3.amazonaws.com/media/restaurant/cover/TheExchangePizzaDepot213MatthewsNC.png' alt='logo' />
                </div>
                <div className='inner-nav'>
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
                <div className='pizza'>
                    <img src='https://s3-media0.fl.yelpcdn.com/bphoto/b1O5CIvTxrirS3Hs4_vEhg/l.jpg' alt='pizza' />
                </div>
            </div>
        </>
    )
}

export default Header;