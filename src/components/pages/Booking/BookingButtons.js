import React from "react";
import './BookingButtons.css';
import { Link } from "react-router-dom";

const STYLE = ['btn--primary', 'btn--outline']
const SIZES = ['btn--mdedium', 'btn--large']

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLE.includes(buttonStyle) ? buttonStyle : STYLE[0]
    const checkButtonSizes = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
        <Link to='/sign-up' className='btn-mobile'>
            <button
            className={`btn ${checkButtonStyle} ${checkButtonSizes}`}
            onClick={onClick}
            type={type}
            >
                {children}
            </button>
        </Link>
     )
    }