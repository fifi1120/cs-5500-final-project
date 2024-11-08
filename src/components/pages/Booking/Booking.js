import React from "react";
import '../../../App.css';
import { Button } from "./BookingButtons";
import './Booking.css';
import { BsPersonStanding } from "react-icons/bs";



export default function Booking() {
    return (
        <>
            <div className='booking-container'>

                <h1>BOOK US TODAY!</h1>
                <div className='hero-btns'>
                    <Button
                        className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'
                    >
                        INDIVIDUALS ( 1-3 <i className='fa-sharp fa-solid fa-person' /> )
                    </Button>
                    <Button
                        className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'
                    >
                        TEAM BUILDING ( 4-12 <i className='fa-sharp fa-solid fa-person' /> )
                    </Button>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <p>Check Our Reviews</p>
            </div>
            <div>
            <div className="image-container">
                    <img src="./images/review.png" alt="Reviews" className="full-width-image" />
                </div>
            </div>
        </>
    )
}