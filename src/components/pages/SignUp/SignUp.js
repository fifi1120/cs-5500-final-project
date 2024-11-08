import React from "react";
import '../../../App.css';
import './SignUp.css';
import Footer from "../../Footer";

export default function SignUp() {
    return (
        <>
        <div className="login-container">
            <h1 className="login-title">LOG IN</h1>
            <form className="login-form">
                <label className="input-label">EMAIL</label>
                <input type="email" className="input-field" />

                <div className="password-container">
                    <label className="input-label">PASSWORD</label>
                    <a href="#" className="forgot-link">Forgot?</a>
                </div>
                <input type="password" className="input-field" />

                <button type="submit" className="login-button">SIGN IN</button>
            </form>
            <div className="additional-links">
                <a href="#" className="create-account">Create account</a>
                <a href="#" className="manage-subscriptions">Manage subscriptions</a>
            </div>
        </div>
        <Footer />
        </>
    );
}