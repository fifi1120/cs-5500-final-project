import React, { useState, useEffect, useRef } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaRegUser } from 'react-icons/fa';
import { GrSearch } from "react-icons/gr";
import { FiShoppingBag } from "react-icons/fi";

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [searchOpen, setSearchOpen] = useState(false);
    const searchRef = useRef(null);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const toggleSearch = () => setSearchOpen(!searchOpen);

    const showButton = () => {
        if (window.innerWidth <= 960) { setButton(false); }
        else { setButton(true); }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setSearchOpen(false);
            }
        };

        if (searchOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [searchOpen]);

    useEffect(() => { showButton(); }, []);
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
                    
                    <div className="navbar-icons">
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                        <div onClick={toggleSearch} className="navbar-icon-link">
                            <GrSearch className="navbar-icon" />
                        </div>
                        <Link to="/sign-up" className="navbar-icon-link" onClick={closeMobileMenu}>
                            <FaRegUser className="navbar-icon" />
                        </Link>
                        <Link to="/cart" className="navbar-icon-link" onClick={closeMobileMenu}>
                            <FiShoppingBag className="navbar-icon" />
                        </Link>
                    </div>
                </div>
            </nav>
            {searchOpen && (
                <div ref={searchRef} className="search-bar-container">
                    <div className="search-input-container">
                        <input type="text" className="search-input" placeholder="Search" />
                        <GrSearch className="search-icon-inside" />
                    </div>
                    <button onClick={toggleSearch} className="close-search-btn">X</button>
                </div>
            )}
        </>
    );
}

export default Navbar;
