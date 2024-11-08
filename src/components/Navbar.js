import React, { useState, useEffect} from 'react'
import { Button } from './Button';
import { Link } from 'react-router-dom'
import './Navbar.css';
import { FaRegUser } from 'react-icons/fa';
import { GrSearch } from "react-icons/gr";
import { FiShoppingBag } from "react-icons/fi";





function Navbar() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    
const showButton = () => {
    if(window.innerWidth <= 960) {setButton(false);}

    else {setButton(true)}
};

useEffect(() => {showButton();}, []);

window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    <img src="/images/logo-white.png" alt="logo" className="navbar-logo-img" />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/booking' className='nav-links' onClick={closeMobileMenu}>
                                Booking
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/coffee-basics' className='nav-links' onClick={closeMobileMenu}>
                                Coffee GPT
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/gallery' className='nav-links' onClick={closeMobileMenu}>
                                Gallery
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                    <div className="navbar-icons">
                        <GrSearch className="navbar-icon" />
                        <FaRegUser className="navbar-icon" />
                        <FiShoppingBag className="navbar-icon" />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
