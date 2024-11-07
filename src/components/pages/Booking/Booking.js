import React from "react";
import '../../../App.css';
import {Button} from "./BookingButtons";
import './Booking.css';
import { BsPersonStanding } from "react-icons/bs";



export default function Booking() {
    return (
        <>
            <div className='booking-container'>

                <h1>BOOK TODAY!</h1>
                <div className='hero-btns'>
                    <Button
                        className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'
                    >
                        INDIVIDUALS ( 1-3 <BsPersonStanding className="icon" /> )
                    </Button>
                    <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
        >
            <span className="button-content">
                TEAM BUILDING ( 3 <BsPersonStanding className="icon" />)
            </span>
        </Button>
                </div>
            </div>
        </>
    )
}